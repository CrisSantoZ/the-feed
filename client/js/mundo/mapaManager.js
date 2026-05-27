// js/mapaManager.js
// ÚNICO GERENCIADOR DE MAPAS

const configuracoesPaises = {
    brasil: {
        id: 'mapa-brasil',
        estadosAtivos: [
            'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 
            'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 
            'RS', 'SC', 'SE', 'SP', 'TO'
        ],
        mapaEstados: {
            'AC': 'Acre', 'AL': 'Alagoas', 'AM': 'Amazonas', 'AP': 'Amapá',
            'BA': 'Bahia', 'CE': 'Ceará', 'DF': 'Distrito Federal', 'ES': 'Espírito Santo',
            'GO': 'Goiás', 'MA': 'Maranhão', 'MG': 'Minas Gerais', 'MS': 'Mato Grosso do Sul',
            'MT': 'Mato Grosso', 'PA': 'Pará', 'PB': 'Paraíba', 'PE': 'Pernambuco',
            'PI': 'Piauí', 'PR': 'Paraná', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte',
            'RO': 'Rondônia', 'RR': 'Roraima', 'RS': 'Rio Grande do Sul', 'SC': 'Santa Catarina',
            'SE': 'Sergipe', 'SP': 'São Paulo', 'TO': 'Tocantins'
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

        .estado-atual {
    fill: rgba(0, 255, 100, 0.4) !important;
    stroke: #00ff66 !important;
    stroke-width: 2.5 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    filter: drop-shadow(0 0 8px rgba(0, 255, 100, 0.8));
}
.estado-atual:hover {
    fill: rgba(0, 255, 100, 0.6) !important;
    stroke: #00ff66 !important;
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

    // ========== PEGA O ESTADO ATUAL DO PERSONAGEM ==========
    const playerEstado = sessionStorage.getItem('playerEstado') || '';
    // Mapeia nome do estado para sigla (ex: 'São Paulo' -> 'SP')
    const estadoParaSigla = {
        'São Paulo': 'SP', 'Rio de Janeiro': 'RJ', 'Minas Gerais': 'MG',
        'Bahia': 'BA', 'Rio Grande do Sul': 'RS', 'Paraná': 'PR',
        'Santa Catarina': 'SC', 'Pernambuco': 'PE', 'Ceará': 'CE',
        'Distrito Federal': 'DF', 'Amazonas': 'AM'
    };
    const siglaAtual = estadoParaSigla[playerEstado] || '';

    paths.forEach(estado => {
        let sigla = (estado.id || estado.getAttribute('data-id') || estado.getAttribute('data-uf') || '').toUpperCase();

        // REMOVE O PREFIXO "BR-" SE EXISTIR
        if (sigla.startsWith('BR-')) {
            sigla = sigla.substring(3);
        }

        estado.classList.remove('estado-ativo', 'estado-inativo', 'estado-atual');

        // ========== DESTAQUE DO ESTADO ATUAL ==========
        if (sigla === siglaAtual) {
            estado.classList.add('estado-atual');
            estado.style.fill = 'rgba(0, 255, 100, 0.4) !important';
            estado.style.stroke = '#00ff66 !important';
            estado.style.strokeWidth = '2.5 !important';
            console.log(`[MAPAMANAGER] Estado atual destacado: ${sigla}`);
        }
        else if (config.estadosAtivos.includes(sigla)) {
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