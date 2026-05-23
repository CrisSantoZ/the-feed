/* ==========================================================================
   MAPA DO ESTADO - LISTA DE CIDADES
   ========================================================================== */

export function renderizarMapaEstado(paisNome, estadoNome) {
    const paises = window.paisesDataGlobal || [];
    const pais = paises.find(p => p.nome === paisNome);
    
    let cidades = [];
    
    if (pais && pais.regioes) {
        const regiao = pais.regioes.find(r => r.nome === estadoNome);
        if (regiao && regiao.cidades) {
            cidades = regiao.cidades;
            console.log(`[MAPA] Encontradas ${cidades.length} cidades para ${estadoNome}`);
        } else {
            console.warn(`[MAPA] Estado ${estadoNome} não encontrado em ${paisNome}`);
        }
    }
    
    if (cidades.length === 0) {
        cidades = ['Carregando...'];
    }
    
    const playerCidade = sessionStorage.getItem('playerCidade') || '';

    return `
        <div class="estado-container" style="height:100%; overflow-y:auto; background:#030407;">
            <div class="estado-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button class="estado-btn-voltar" onclick="window.voltarParaPais('${paisNome}')" style="background:none; border:1px solid #00f3ff; color:#00f3ff; border-radius:8px; cursor:pointer;">← VOLTAR</button>
                <h2 class="estado-titulo" style="color:#00f3ff; margin:0;">📍 ${estadoNome}</h2>
                <button class="estado-btn-fechar" onclick="window.fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            
            <div style="background:rgba(0,243,255,0.05); padding:20px; border-radius:16px; margin-top:20px;">
                <p style="color:#00f3ff; margin-bottom:15px;">🏙️ CIDADES DE ${estadoNome.toUpperCase()}</p>
                <div class="cidades-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px,1fr)); gap:10px;">
                    ${cidades.map(cidade => {
                        const isCidadeAtual = (cidade === playerCidade);
                        return `
                            <div class="cidade-card" onclick="window.selecionarCidade('${paisNome}', '${estadoNome}', '${cidade}')" style="
                                background: ${isCidadeAtual ? 'rgba(0, 255, 100, 0.2)' : 'rgba(0,243,255,0.1)'};
                                border: ${isCidadeAtual ? '2px solid #00ff66' : '1px solid #00f3ff'};
                                border-radius:8px;
                                text-align:center;
                                cursor:pointer;
                                transition:all 0.2s;
                                ${isCidadeAtual ? 'box-shadow: 0 0 10px rgba(0, 255, 100, 0.5);' : ''}
                            ">
                                🏙️ ${cidade} ${isCidadeAtual ? '📍' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}