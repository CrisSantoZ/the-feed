/* ==========================================================================
   MAPA PAÍS - GERADOR DE HTML PARA MAPAS DE PAÍSES
   ========================================================================== */

export function renderizarMapaPais(paisNome) {
    // FUTUROS PAÍSES (adicione aqui quando implementar)
    if (paisNome !== 'Brasil') {
        return `
            <div class="mapa-container">
                <div class="mapa-header">
                    <button class="mapa-btn-voltar" onclick="window.voltarParaMundo()">← VOLTAR</button>
                    <h2 class="mapa-titulo">🗺️ ${paisNome}</h2>
                    <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
                </div>
                <div class="mapa-dev-msg">
                    🗺️ Mapa de ${paisNome} em desenvolvimento
                </div>
            </div>
        `;
    }
    
    // BRASIL
    return `
        <div class="mapa-container">
            <div class="mapa-header">
                <button class="mapa-btn-voltar" onclick="window.voltarParaMundo()">← VOLTAR</button>
                <h2 class="mapa-titulo">🇧🇷 ${paisNome}</h2>
                <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
            </div>
            
            <div class="mapa-legenda">
                🔹 Estados em <span class="mapa-legenda-ativo">azul</span> disponíveis | 
                <span class="mapa-legenda-inativo">cinza</span> em breve
            </div>
            
            <div class="mapa-wrapper">
                <brazil-component 
                    id="mapa-brasil" 
                    class="mapa-svg"
                    hidden-states="false"
                ></brazil-component>
            </div>
            
            <div class="mapa-dev-msg">
                🚧 Novos estados sendo adicionados em breve!
            </div>
        </div>
    `;
}