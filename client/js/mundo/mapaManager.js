// js/mapaManager.js
// ÚNICO GERENCIADOR DE MAPAS

const configuracoesPaises = {
    brasil: {
        id: 'mapa-brasil',
        estadosAtivos: ['SP', 'RJ', 'MG', 'BA', 'RS', 'PR', 'SC', 'PE', 'CE', 'DF', 'AM'],
        mapaEstados: {
            'SP': 'São Paulo', 'RJ': 'Rio de Janeiro', 'MG': 'Minas Gerais',
            'BA': 'Bahia', 'RS': 'Rio Grande do Sul', 'PR': 'Paraná',
            'SC': 'Santa Catarina', 'PE': 'Pernambuco', 'CE': 'Ceará',
            'DF': 'Distrito Federal', 'AM': 'Amazonas'
        },
        nomePais: 'Brasil'
    }
};

export function initMapaPais(paisId) {
    const config = configuracoesPaises[paisId];
    if (!config) {
        console.log(`[MAPAMANAGER] Configuração para ${paisId} não encontrada`);
        return;
    }
    
    console.log(`[MAPAMANAGER] Iniciando ${config.nomePais}...`);
    
    function aguardarComponente() {
        const mapa = document.getElementById(config.id);
        if (!mapa) {
            setTimeout(aguardarComponente, 100);
            return;
        }
        
        function aguardarSVG() {
            const svg = mapa.shadowRoot?.querySelector('svg');
            if (!svg) {
                setTimeout(aguardarSVG, 100);
                return;
            }
            
            console.log(`[MAPAMANAGER] SVG encontrado, injetando CSS e aplicando classes...`);
            
            // INJETA CSS DENTRO DO SHADOW ROOT
            injetarCSSnoShadowRoot(mapa);
            
            aplicarClassesCSS(svg, config);
            vincularEventos(mapa, config);
        }
        
        aguardarSVG();
    }
    
    aguardarComponente();
}

function injetarCSSnoShadowRoot(mapa) {
    // Verifica se o CSS já foi injetado
    if (mapa._cssInjetado) return;
    
    const cssEstados = `
        .estado-ativo {
            fill: rgba(0, 243, 255, 0.3) !important;
            stroke: #00f3ff !important;
            stroke-width: 1.5 !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
        }
        .estado-ativo:hover {
            fill: rgba(0, 243, 255, 0.6) !important;
            stroke: #ff0055 !important;
            stroke-width: 2 !important;
        }
        .estado-inativo {
            fill: #2a2a3a !important;
            stroke: #4a4a5a !important;
            stroke-width: 1 !important;
            opacity: 0.6 !important;
            cursor: not-allowed !important;
            transition: all 0.2s ease !important;
        }
        .estado-inativo:hover {
            fill: #3a3a4a !important;
            opacity: 0.8 !important;
        }
    `;
    
    // Cria um elemento style e adiciona ao shadowRoot
    const styleElement = document.createElement('style');
    styleElement.textContent = cssEstados;
    mapa.shadowRoot.appendChild(styleElement);
    
    mapa._cssInjetado = true;
    console.log(`[MAPAMANAGER] CSS injetado no shadowRoot`);
}

function aplicarClassesCSS(svg, config) {
    const paths = svg.querySelectorAll('path, polygon');
    console.log(`[MAPAMANAGER] Aplicando classes em ${paths.length} estados`);
    
    paths.forEach(estado => {
        let sigla = (estado.id || estado.getAttribute('data-id') || estado.getAttribute('data-uf') || '').toUpperCase();
        
        // REMOVE O PREFIXO "BR-" SE EXISTIR
        if (sigla.startsWith('BR-')) {
            sigla = sigla.substring(3); // Remove "BR-"
        }
        
        estado.classList.remove('estado-ativo', 'estado-inativo');
        
        if (config.estadosAtivos.includes(sigla)) {
            estado.classList.add('estado-ativo');
            console.log(`[MAPAMANAGER] Ativo: ${sigla}`);
        } else if (sigla && sigla.length >= 2) {
            estado.classList.add('estado-inativo');
            console.log(`[MAPAMANAGER] Inativo: ${sigla}`);
        }
    });
    
    console.log(`[MAPAMANAGER] Classes CSS aplicadas com sucesso`);
}

function vincularEventos(mapa, config) {
    if (mapa._listener) {
        mapa.removeEventListener('onStateSelected', mapa._listener);
    }
    
    const listener = (event) => {
        const sigla = event.detail;
        console.log(`[MAPAMANAGER] Clique no estado: ${sigla}`);
        
        if (!sigla || typeof sigla !== 'string' || !/^[A-Z]{2}$/.test(sigla)) {
            console.log(`[MAPAMANAGER] Sigla inválida: ${sigla}`);
            return;
        }
        
        if (!config.estadosAtivos.includes(sigla)) {
            alert(`🚧 Estado ${sigla} em desenvolvimento! Em breve estará disponível.`);
            return;
        }
        
        const nomeEstado = config.mapaEstados[sigla];
        if (nomeEstado && window.selecionarEstado) {
            window.selecionarEstado(config.nomePais, nomeEstado);
        }
    };
    
    mapa.addEventListener('onStateSelected', listener);
    mapa._listener = listener;
    console.log(`[MAPAMANAGER] Eventos vinculados - ${config.estadosAtivos.length} estados ativos`);
}

window.initMapaPais = initMapaPais;