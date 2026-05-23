/* ==========================================================================
   FEED GLOBAL - NOTÍCIAS DO MUNDO
   ========================================================================== */

export function renderizarFeed() {
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    
    return `
        <div style="padding:20px; height:100%; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">📰 FEED GLOBAL</h2>
                <button onclick="fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            
            <!-- LOCALIZAÇÃO ATUAL -->
            <div style="background:rgba(0,243,255,0.05); padding:15px; margin-bottom:20px; border-radius:8px;">
                📍 Notícias de <span style="color:#00f3ff;">${playerPais}</span> / <span style="color:#00f3ff;">${playerCidade}</span>
            </div>
            
            <!-- LISTA DE NOTÍCIAS -->
            <div style="display:flex; flex-direction:column; gap:15px;">
                <div style="background:rgba(0,243,255,0.05); padding:15px; border-left:3px solid #00f3ff; border-radius:8px;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <span style="font-size:1.5rem;">🌍</span>
                        <span style="color:#00f3ff; font-weight:bold;">Bem-vindo ao The Feed!</span>
                    </div>
                    <div style="color:#888; font-size:12px;">${new Date().toLocaleString()}</div>
                </div>
                
                <div style="background:rgba(255,0,85,0.05); padding:15px; border-left:3px solid #ff0055; border-radius:8px;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <span style="font-size:1.5rem;">📢</span>
                        <span style="color:#ff0055; font-weight:bold;">Novo jogador entrou na cidade!</span>
                    </div>
                    <div style="color:#888; font-size:12px;">Há 5 minutos</div>
                </div>
                
                <div style="background:rgba(0,243,255,0.05); padding:15px; border-left:3px solid #00f3ff; border-radius:8px;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <span style="font-size:1.5rem;">💰</span>
                        <span style="color:#00f3ff; font-weight:bold;">Economia de ${playerPais} cresce 2% este mês</span>
                    </div>
                    <div style="color:#888; font-size:12px;">Há 2 horas</div>
                </div>
            </div>
        </div>
    `;
}