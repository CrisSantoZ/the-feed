export async function renderizarMapaCidade(paisNome, estadoNome, cidadeNome) {
    // Normaliza os nomes
    const paisSlug = paisNome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const estadoSlug = estadoNome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-');

    let categorias = {
        restaurantes: {},
        lojas: {},
        empregos: {},
        saude: {},
        culturais: {},
        natureza: {},
        bancos: {},
        entretenimento: {},
        transportes: {}
    };

    // Carrega restaurantes
    try {
        const modulo = await import(`/js/locais/${paisSlug}/${estadoSlug}/Restaurantes.js`);
        const dados = modulo.default || modulo;
        categorias.restaurantes = dados[cidadeNome] || {};
    } catch (e) { }

    // TODO: Carregar outros tipos (lojas, empregos, etc.)

    // Empregos sempre disponiveis (vem do backend)
    categorias.empregos = { _vagas: true };

    // Verifica se tem pelo menos uma categoria (alem de empregos)
    const temConteudo = Object.entries(categorias).some(([key, cat]) => key !== 'empregos' && Object.keys(cat).length > 0);

    if (!temConteudo) {
        return `
            <div class="mapa-container">
                <div class="mapa-header">
                    <button class="mapa-btn-voltar" onclick="window.voltarParaEstado('${estadoNome}')">← VOLTAR</button>
                    <h2 class="mapa-titulo">📍 ${cidadeNome}</h2>
                    <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
                </div>
                <div style="padding:20px;">
                    <div class="mapa-legenda" style="margin-bottom:20px;">📍 LOCAIS</div>
                    ${gerarCategoriaEmprego(cidadeNome, estadoNome, paisNome)}
                </div>
            </div>
        `;
    }

    // Função para obter símbolo da moeda
    function getSimboloMoeda() {
        return sessionStorage.getItem('simboloMoeda') || 'R$';
    }

    // Gera o HTML das categorias (inicialmente recolhidas)
    const categoriasHtml = Object.entries(categorias).map(([catNome, itens]) => {
        const total = Object.keys(itens).length;
        if (total === 0) return '';
        if (catNome === 'empregos') return gerarCategoriaEmprego(cidadeNome, estadoNome, paisNome);

        const config = {
            restaurantes: { icone: "🍔", titulo: "RESTAURANTES", cor: "#00f3ff" },
            lojas: { icone: "🛒", titulo: "LOJAS", cor: "#00f3ff" },
            saude: { icone: "🏥", titulo: "SAÚDE", cor: "#00f3ff" },
            culturais: { icone: "🎨", titulo: "CULTURA", cor: "#ff0055" },
            natureza: { icone: "🌳", titulo: "NATUREZA", cor: "#00f3ff" },
            bancos: { icone: "🏦", titulo: "BANCOS", cor: "#ff0055" },
            entretenimento: { icone: "🎮", titulo: "ENTRETENIMENTO", cor: "#00f3ff" },
            transportes: { icone: "🚗", titulo: "TRANSPORTES", cor: "#ff0055" }
        }[catNome] || { icone: "📍", titulo: catNome.toUpperCase(), cor: "#888" };

        const itensHtml = Object.values(itens).map(item => {
            const simbolo = getSimboloMoeda();
            return `
            <div class="categoria-item" onclick="window.confirmarLocal('${catNome}', '${item.id}', '${item.nome}', '${cidadeNome}', '${estadoNome}', '${paisNome}', '${item.descricao.replace(/'/g, "\\'")}', '${(item.endereco || '').replace(/'/g, "\\'")}', '${(item.horario || '').replace(/'/g, "\\'")}')" style="
                background: rgba(0, 243, 255, 0.05);
                border: 1px solid rgba(0, 243, 255, 0.3);
                border-radius: 12px;
                padding: 15px;
                cursor: pointer;
                transition: all 0.2s;
                margin-bottom: 10px;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="color: #fff; margin: 0;">${item.nome}</h4>
                    <span style="color: #00f3ff; font-size: 11px;">✨ clique</span>
                </div>
                <p style="color: #888; font-size: 12px; margin: 5px 0 0 0;">${item.descricao}</p>
                ${item.preco_medio ? `<p style="color: #ff0055; font-size: 11px; margin: 8px 0 0 0;">💰 Preço médio: ${simbolo} ${item.preco_medio}</p>` : ''}
            </div>
        `}).join('');

        return `
            <div class="categoria-card" style="margin-bottom: 20px; border: 1px solid ${config.cor}; border-radius: 12px; overflow: hidden;">
                <div class="categoria-header" onclick="toggleCategoria('${catNome}')" style="
                    background: rgba(0,0,0,0.5);
                    padding: 15px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div>
                        <span style="font-size: 1.2rem;">${config.icone}</span>
                        <span style="color: ${config.cor}; margin-left: 10px; font-weight: bold;">${config.titulo}</span>
                        <span style="color: #888; margin-left: 10px; font-size: 12px;">(${total})</span>
                    </div>
                    <span id="categoria-seta-${catNome}" style="color: ${config.cor}; transition: transform 0.3s;">▼</span>
                </div>
                <div id="categoria-conteudo-${catNome}" class="categoria-conteudo" style="display: none; background: rgba(0,0,0,0.3);">
                    ${itensHtml}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="mapa-container" style="overflow-y: auto;">
            <div class="mapa-header">
                <button class="mapa-btn-voltar" onclick="window.voltarParaEstado('${estadoNome}')">← VOLTAR</button>
                <h2 class="mapa-titulo">📍 ${cidadeNome}</h2>
                <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
            </div>
            
            <div style="padding: 0 20px 20px 20px;">
                <div class="mapa-legenda" style="margin-bottom: 20px;">
    📍 LOCAIS
</div>
                
                <div id="categorias-container">
                    ${categoriasHtml}
                </div>
            </div>
        </div>
    `;
}

function gerarCategoriaEmprego(cidadeNome, estadoNome, paisNome) {
    return `
        <div class="categoria-card" style="margin-bottom: 20px; border: 1px solid #ff0055; border-radius: 12px; overflow: hidden;">
            <div class="categoria-header" onclick="window.abrirQuadroVagas('${cidadeNome}', '${estadoNome}', '${paisNome}')" style="
                background: rgba(0,0,0,0.5);
                padding: 15px;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <div>
                    <span style="font-size: 1.2rem;">💼</span>
                    <span style="color: #ff0055; margin-left: 10px; font-weight: bold;">EMPREGOS</span>
                    <span style="color: #888; margin-left: 10px; font-size: 12px;">🔍 Ver vagas</span>
                </div>
                <span style="color: #ff0055;">➡️</span>
            </div>
        </div>
    `;
}

// Função global para abrir/fechar categorias
window.toggleCategoria = function (catNome) {
    if (catNome === 'empregos') return;
    const conteudo = document.getElementById(`categoria-conteudo-${catNome}`);
    const seta = document.getElementById(`categoria-seta-${catNome}`);

    if (conteudo.style.display === 'none') {
        conteudo.style.display = 'block';
        seta.style.transform = 'rotate(180deg)';
    } else {
        conteudo.style.display = 'none';
        seta.style.transform = 'rotate(0deg)';
    }
};