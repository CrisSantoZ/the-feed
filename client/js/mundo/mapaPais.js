


import { renderizarMapaPaisSVG } from './mapaPaisSVG.js';

export async function renderizarMapaPais(paisNome) {
    const paises = window.paisesDataGlobal || [];
    const pais = paises.find(p => p.nome === paisNome);
    const regioes = pais?.regioes || [];
    const idioma = pais?.idioma || 'Idioma local';
    const moeda = pais?.moeda || 'Moeda local';
    
    const flagMap = {
        'Brasil': '🇧🇷', 'Estados Unidos': '🇺🇸', 'França': '🇫🇷', 'Itália': '🇮🇹',
        'Japão': '🇯🇵', 'Reino Unido': '🇬🇧', 'Alemanha': '🇩🇪', 'Espanha': '🇪🇸',
        'Portugal': '🇵🇹', 'Argentina': '🇦🇷', 'México': '🇲🇽', 'Canadá': '🇨🇦',
        'Austrália': '🇦🇺', 'China': '🇨🇳', 'Rússia': '🇷🇺', 'Índia': '🇮🇳',
        'Coreia do Sul': '🇰🇷', 'Suíça': '🇨🇭', 'Holanda': '🇳🇱', 'Suécia': '🇸🇪',
        'Turquia': '🇹🇷', 'Egito': '🇪🇬', 'África do Sul': '🇿🇦', 'Cuba': '🇨🇺'
    };
    const flag = flagMap[paisNome] || '🌍';

    const regioesHtml = regioes.map(regiao => `
        <div class="regiao-card" onclick="window.selecionarEstado('${paisNome}', '${regiao.nome}')" style="
            background: rgba(0,243,255,0.08);
            border: 1px solid rgba(0,243,255,0.2);
            border-radius: 8px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.2s;
        ">
            <div style="color:#fff; font-weight:bold; font-size:0.85rem;">${regiao.nome}</div>
            <div style="color:#888; font-size:0.65rem; margin-top:4px;">${regiao.cidades.length} cidades</div>
        </div>
    `).join('');

    const svgHtml = paisNome !== 'Brasil' ? await renderizarMapaPaisSVG(paisNome) : null;

    return `
        <div class="mapa-container" style="background:#030407;">
            <div class="mapa-header">
                <button class="mapa-btn-voltar" onclick="window.voltarParaMundo()">← VOLTAR</button>
                <h2 class="mapa-titulo">${flag} ${paisNome}</h2>
                <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
            </div>

            <div style="padding:0 15px 15px;">
                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:0.75rem;color:#888;">
                        <span>💰 ${moeda}</span>
                        <span>🗣️ ${idioma}</span>
                        <span>🏛️ Capital: ${pais?.capital || '---'}</span>
                    </div>
                </div>

                ${paisNome === 'Brasil' ? `
                    <div class="mapa-legenda" style="margin-bottom:15px;">
                        🔹 Estados em <span class="mapa-legenda-ativo">azul</span> disponíveis
                    </div>
                    <div class="mapa-wrapper">
                        <brazil-component id="mapa-brasil" class="mapa-svg" hidden-states="false"></brazil-component>
                    </div>
                ` : (svgHtml || `
                    <div style="text-align:center;padding:30px;color:#888;">
                        <div style="font-size:2rem;margin-bottom:10px;">🚧</div>
                        Mapa de ${paisNome} em desenvolvimento
                    </div>
                `)}

                <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin:15px 0 12px;letter-spacing:1px;">📍 ESTADOS / REGIÕES</div>
                
                ${regioes.length === 0 ? `
                    <div style="text-align:center;padding:30px;color:#888;">
                        <div style="font-size:2rem;margin-bottom:10px;">🚧</div>
                        Mapa de ${paisNome} em desenvolvimento
                    </div>
                ` : `
                    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;">
                        ${regioesHtml}
                    </div>
                `}
            </div>
        </div>
    `;
}

export function afterRenderMapa(paisNome) {
    if (paisNome === 'Brasil') return;

    const wrapper = document.getElementById('mapa-svg-wrapper');
    if (!wrapper) {
        console.warn(`[MAPA] Wrapper SVG não encontrado para ${paisNome}`);
        return;
    }

    const paths = wrapper.querySelectorAll('path[data-nome]');
    if (!paths.length) {
        console.warn(`[MAPA] Nenhum caminho clicável encontrado para ${paisNome}`);
        return;
    }

    const playerEstado = sessionStorage.getItem('playerEstado') || '';
    const playerEstadoNormalizado = playerEstado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    paths.forEach(path => {
        const nome = path.dataset.nome || path.getAttribute('data-nome') || '';
        const nomeNormalizado = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        path.style.cursor = 'pointer';
        path.style.transition = 'fill 0.2s ease, stroke 0.2s ease, opacity 0.2s ease';
        path.classList.add('regiao');

        if (nomeNormalizado === playerEstadoNormalizado) {
            path.style.fill = 'rgba(0,255,100,0.45)';
            path.style.stroke = '#00ff66';
            path.style.strokeWidth = '1.2';
        }

        path.addEventListener('mouseenter', () => {
            path.style.opacity = '0.9';
            if (nomeNormalizado !== playerEstadoNormalizado) {
                path.style.fill = 'rgba(0,243,255,0.45)';
            }
        });

        path.addEventListener('mouseleave', () => {
            path.style.opacity = '1';
            if (nomeNormalizado !== playerEstadoNormalizado) {
                path.style.fill = '';
            }
        });

        path.addEventListener('click', () => {
            if (window.selecionarEstado) {
                window.selecionarEstado(paisNome, nome);
            }
        });
    });
}
