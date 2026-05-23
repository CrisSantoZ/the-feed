/* ==========================================================================
   MUNDO - GLOBO 3D CYBERPUNK (COM BANDEIRAS E ESTRELAS)
   ========================================================================== */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
const { renderizarMapaPais } = await import('./mundo/mapaPais.js');

let scene, camera, renderer, labelRenderer, controls, globe;
let pontosGroup;
let animationId = null;
let raioGlobo = 1.2;

// Cores neon
const NEON_CYAN = 0x00f3ff;
const NEON_PINK = 0xff0055;
const BG_COLOR = 0x030407;

// Detectar se é mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Dados dos países (com bandeiras emoji e cores)
const paisesData = [
    { lat: -15.8, lng: -47.9, nome: 'Brasil', bandeira: '🇧🇷', cor: NEON_PINK, id: 'brasil' },
    { lat: 38.9, lng: -77.0, nome: 'EUA', bandeira: '🇺🇸', cor: NEON_CYAN, id: 'eua' },
    { lat: 35.7, lng: 139.7, nome: 'Japão', bandeira: '🇯🇵', cor: NEON_PINK, id: 'japao' },
    { lat: 48.9, lng: 2.3, nome: 'França', bandeira: '🇫🇷', cor: NEON_CYAN, id: 'franca' },
    { lat: 52.5, lng: 13.4, nome: 'Alemanha', bandeira: '🇩🇪', cor: NEON_PINK, id: 'alemanha' },
    { lat: 41.9, lng: 12.5, nome: 'Itália', bandeira: '🇮🇹', cor: NEON_CYAN, id: 'italia' },
    { lat: 51.5, lng: -0.1, nome: 'Reino Unido', bandeira: '🇬🇧', cor: NEON_PINK, id: 'uk' },
    { lat: 39.9, lng: 116.4, nome: 'China', bandeira: '🇨🇳', cor: NEON_CYAN, id: 'china' },
    { lat: -35.3, lng: 149.1, nome: 'Austrália', bandeira: '🇦🇺', cor: NEON_PINK, id: 'australia' },
    { lat: 45.4, lng: -75.7, nome: 'Canadá', bandeira: '🇨🇦', cor: NEON_CYAN, id: 'canada' },
    { lat: 19.4, lng: -99.1, nome: 'México', bandeira: '🇲🇽', cor: NEON_PINK, id: 'mexico' },
    { lat: -34.6, lng: -58.4, nome: 'Argentina', bandeira: '🇦🇷', cor: NEON_CYAN, id: 'argentina' },
    { lat: 40.4, lng: -3.7, nome: 'Espanha', bandeira: '🇪🇸', cor: NEON_PINK, id: 'espanha' },
    { lat: 38.7, lng: -9.1, nome: 'Portugal', bandeira: '🇵🇹', cor: NEON_CYAN, id: 'portugal' },
    { lat: 55.8, lng: 37.6, nome: 'Rússia', bandeira: '🇷🇺', cor: NEON_PINK, id: 'russia' },
    { lat: 28.6, lng: 77.2, nome: 'Índia', bandeira: '🇮🇳', cor: NEON_CYAN, id: 'india' },
    { lat: 64.0, lng: -26.0, nome: 'Islândia', bandeira: '🇮🇸', cor: NEON_PINK, id: 'iceland' },
    { lat: 60.0, lng: 15.0, nome: 'Suécia', bandeira: '🇸🇪', cor: NEON_CYAN, id: 'sweden' },
    { lat: -40.0, lng: 170.0, nome: 'Nova Zelândia', bandeira: '🇳🇿', cor: NEON_PINK, id: 'newzealand' }
];

export function initMundo() {
    const container = document.getElementById('mapa-container');
    if (!container) {
        console.error('[MUNDO] Container não encontrado');
        return;
    }

    console.log('[MUNDO] Inicializando globo 3D cyberpunk...');

    // Limpar container
    container.innerHTML = '';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.minHeight = '450px';
    container.style.background = '#030407';
    container.style.position = 'relative';

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Cena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(BG_COLOR);

    // 2. Câmera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    if (isMobile) {
        camera.position.set(0, 0, 3.8);
    } else {
        camera.position.set(0, 0, 3.2);
    }

    // 3. Renderer WebGL
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 4. Renderer para texto/bandeiras (CSS2D)
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.left = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    container.appendChild(labelRenderer.domElement);

    // 5. Controles
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = isMobile ? 0.8 : 1.0;
    controls.zoomSpeed = isMobile ? 0.6 : 0.8;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = isMobile ? 0.5 : 0.8;
    controls.enablePan = false;

    // 6. Luzes
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const backLight = new THREE.PointLight(NEON_CYAN, 0.3);
    backLight.position.set(-3, 0, -3);
    scene.add(backLight);

    // 7. FUNDO ESTRELADO MELHORADO
    // Estrelas pequenas (fundo)
    const starGeometry1 = new THREE.BufferGeometry();
    const starCount1 = 2000;
    const starPositions1 = new Float32Array(starCount1 * 3);
    for (let i = 0; i < starCount1; i++) {
        starPositions1[i * 3] = (Math.random() - 0.5) * 1000;
        starPositions1[i * 3 + 1] = (Math.random() - 0.5) * 600;
        starPositions1[i * 3 + 2] = (Math.random() - 0.5) * 300 - 100;
    }
    starGeometry1.setAttribute('position', new THREE.BufferAttribute(starPositions1, 3));
    const starMaterial1 = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.5 });
    const stars1 = new THREE.Points(starGeometry1, starMaterial1);
    scene.add(stars1);

    // Estrelas médias (brilhantes)
    const starGeometry2 = new THREE.BufferGeometry();
    const starCount2 = 500;
    const starPositions2 = new Float32Array(starCount2 * 3);
    const starColors2 = new Float32Array(starCount2 * 3);
    for (let i = 0; i < starCount2; i++) {
        starPositions2[i * 3] = (Math.random() - 0.5) * 800;
        starPositions2[i * 3 + 1] = (Math.random() - 0.5) * 500;
        starPositions2[i * 3 + 2] = (Math.random() - 0.5) * 200 - 80;
        // Cores aleatórias (branco, azul claro, rosa claro)
        const colorChoice = Math.random();
        if (colorChoice < 0.7) {
            starColors2[i * 3] = 1;
            starColors2[i * 3 + 1] = 1;
            starColors2[i * 3 + 2] = 1;
        } else if (colorChoice < 0.85) {
            starColors2[i * 3] = 0.6;
            starColors2[i * 3 + 1] = 0.8;
            starColors2[i * 3 + 2] = 1;
        } else {
            starColors2[i * 3] = 1;
            starColors2[i * 3 + 1] = 0.6;
            starColors2[i * 3 + 2] = 0.8;
        }
    }
    starGeometry2.setAttribute('position', new THREE.BufferAttribute(starPositions2, 3));
    starGeometry2.setAttribute('color', new THREE.BufferAttribute(starColors2, 3));
    const starMaterial2 = new THREE.PointsMaterial({ size: 0.2, vertexColors: true, transparent: true, opacity: 0.8 });
    const stars2 = new THREE.Points(starGeometry2, starMaterial2);
    scene.add(stars2);

    // 8. Globo wireframe
    const geometry = new THREE.SphereGeometry(raioGlobo, 64, 64);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: NEON_CYAN,
        wireframe: true,
        transparent: true,
        opacity: 0.35
    });
    globe = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(globe);

    // 9. Segunda camada (brilho)
    const glowGeometry = new THREE.SphereGeometry(raioGlobo + 0.005, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: NEON_CYAN,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const glowGlobe = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowGlobe);

    // 10. Adicionar pontos com bandeiras
    pontosGroup = new THREE.Group();

    paisesData.forEach(pais => {
        const phi = (90 - pais.lat) * Math.PI / 180;
        const theta = pais.lng * Math.PI / 180;

        const x = (raioGlobo + 0.03) * Math.sin(phi) * Math.cos(theta);
        const y = (raioGlobo + 0.03) * Math.cos(phi);
        const z = (raioGlobo + 0.03) * Math.sin(phi) * Math.sin(theta);

        // Ponto brilhante (glow)
        const pointGeo = new THREE.SphereGeometry(0.02, 16, 16);
        const pointMat = new THREE.MeshStandardMaterial({
            color: pais.cor,
            emissive: pais.cor,
            emissiveIntensity: 0.8
        });
        const point = new THREE.Mesh(pointGeo, pointMat);
        point.position.set(x, y, z);
        point.userData = { id: pais.id, nome: pais.nome, cor: pais.cor, bandeira: pais.bandeira };
        pontosGroup.add(point);

        const playerPais = sessionStorage.getItem('playerPais') || 'brasil';

if (pais.id === playerPais) {
    // Aumenta o ponto do país atual
    point.scale.set(1.8, 1.8, 1.8);
    pointMat.emissiveIntensity = 1.5;
    
    // Adiciona um anel pulsante ao redor do país
    const anelGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const anelMat = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, 
        transparent: true, 
        opacity: 0.7 
    });
    const anel = new THREE.Mesh(anelGeo, anelMat);
    anel.position.set(x, y, z);
    pontosGroup.add(anel);
    
    // Adiciona efeito de partículas ao redor (opcional)
    console.log(`[MUNDO] Destaque aplicado ao país: ${pais.nome}`);
}

        // Anel de luz ao redor (pulse)
        const ringGeo = new THREE.SphereGeometry(0.035, 8, 8);
        const ringMat = new THREE.MeshBasicMaterial({
            color: pais.cor,
            transparent: true,
            opacity: 0.3
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(x, y, z);
        pontosGroup.add(ring);

        // Bandeira (CSS2D - texto emoji)
        const div = document.createElement('div');
        div.textContent = pais.bandeira;
        div.style.fontSize = '20px';
        div.style.textShadow = `0 0 10px ${pais.cor === NEON_CYAN ? '#00f3ff' : '#ff0055'}`;
        div.style.filter = 'drop-shadow(0 0 4px rgba(0,0,0,0.5))';
        div.style.cursor = 'pointer';
        div.style.pointerEvents = 'auto';

        div.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('[MUNDO] Clicou em:', pais.nome);
            // Efeito de clique: anel expansivo
            criarAnelExpansivo(x, y, z, pais.cor);
            mostrarInfoPais(pais);
        });

        const label = new CSS2DObject(div);
        label.position.set(x * 1.08, y * 1.08, z * 1.08);
        pontosGroup.add(label);
    });

    scene.add(pontosGroup);

    // 11. Anéis orbitais
    const ringGeometry = new THREE.TorusGeometry(raioGlobo + 0.08, 0.008, 64, 400);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: NEON_CYAN });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    const ring2Geometry = new THREE.TorusGeometry(raioGlobo + 0.12, 0.005, 64, 400);
    const ring2Material = new THREE.MeshBasicMaterial({ color: NEON_PINK });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.z = Math.PI / 3;
    scene.add(ring2);

    // 12. Animação
    function animate() {
        animationId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
    }
    animate();

    // 13. Redimensionamento
    function handleResize() {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        labelRenderer.setSize(newWidth, newHeight);
    }
    window.addEventListener('resize', handleResize);

    console.log('[MUNDO] Globo 3D inicializado com sucesso!');
}

// Função para criar anel expansivo no clique
function criarAnelExpansivo(x, y, z, cor) {
    const geometry = new THREE.SphereGeometry(0.05, 16, 16);
    const material = new THREE.MeshBasicMaterial({
        color: cor,
        transparent: true,
        opacity: 0.8
    });
    const anel = new THREE.Mesh(geometry, material);
    anel.position.set(x, y, z);
    scene.add(anel);

    let escala = 1;
    let opacidade = 0.8;

    function expandir() {
        escala += 0.1;
        opacidade -= 0.03;
        anel.scale.set(escala, escala, escala);
        anel.material.opacity = opacidade;

        if (opacidade > 0) {
            requestAnimationFrame(expandir);
        } else {
            scene.remove(anel);
        }
    }

    requestAnimationFrame(expandir);
}

function mostrarInfoPais(pais) {
    // Remove popup se existir
    const painelExistente = document.getElementById('info-pais-globo');
    if (painelExistente) painelExistente.remove();

    console.log(`[MUNDO] País clicado: ${pais.nome} - Iniciando zoom...`);

    // Efeito de zoom na câmera
    fazerZoomNoPais(pais);

    // Após o zoom, substituir globo pelo mapa
    setTimeout(() => {
        substituirGloboPorMapa(pais);
    }, 600);
}

function viajarParaPais(paisId) {
    const painel = document.getElementById('info-pais-globo');
    if (painel) painel.remove();

    console.log(`[MUNDO] Viajando para: ${paisId}`);
    alert(`🌍 Viagem para ${paisId} em desenvolvimento!`);
}

function fazerZoomNoPais(pais) {
    // Calcular a posição do país na esfera
    const phi = (90 - pais.lat) * Math.PI / 180;
    const theta = pais.lng * Math.PI / 180;

    const x = (raioGlobo + 0.3) * Math.sin(phi) * Math.cos(theta);
    const y = (raioGlobo + 0.3) * Math.cos(phi);
    const z = (raioGlobo + 0.3) * Math.sin(phi) * Math.sin(theta);

    // Animação suave da câmera
    let progresso = 0;
    const duracao = 30;
    const startPos = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const endPos = { x: x, y: y, z: z };

    function animarZoom() {
        progresso++;
        const t = Math.min(1, progresso / duracao);
        const ease = 1 - Math.pow(1 - t, 2);

        camera.position.x = startPos.x + (endPos.x - startPos.x) * ease;
        camera.position.y = startPos.y + (endPos.y - startPos.y) * ease;
        camera.position.z = startPos.z + (endPos.z - startPos.z) * ease;

        controls.target.set(x * 0.7, y * 0.7, z * 0.7);
        controls.update();

        if (progresso < duracao) {
            requestAnimationFrame(animarZoom);
        }
    }

    requestAnimationFrame(animarZoom);
}

async function substituirGloboPorMapa(pais) {
    const container = document.getElementById('mapa-container');
    if (!container) return;

    // Parar animação do globo
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Guardar referência do renderer para destruir depois
    const oldRenderer = renderer;
    const oldLabelRenderer = labelRenderer;

    // Limpar container
    container.innerHTML = '';
    container.style.background = '#030407';

    // Mostrar mapa do país
    if (pais.id === 'brasil') {
        const { renderizarMapaPais } = await import('./mundo/mapaPais.js');
        container.innerHTML = renderizarMapaPais('Brasil');
        
        // Inicializa o gerenciador
        const { initMapaPais } = await import('./mundo/mapaManager.js');
        initMapaPais('brasil');
        
    } else {
        container.innerHTML = `
            <div style="display:flex; justify-content:center; align-items:center; height:100%; color:#ff0055;">
                🗺️ Mapa de ${pais.nome} em desenvolvimento
            </div>
        `;
    }

    // Limpar os renderers antigos
    if (oldRenderer) oldRenderer.dispose();
    if (oldLabelRenderer) oldLabelRenderer.domElement?.remove();
}

export function destroyMundo() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (renderer) {
        renderer.dispose();
    }
    if (labelRenderer) {
        labelRenderer.domElement.remove();
    }
    if (controls) {
        controls.dispose();
    }
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    const painel = document.getElementById('info-pais-globo');
    if (painel) painel.remove();
}

window.viajarParaPais = viajarParaPais;
window.initMundo = initMundo;
