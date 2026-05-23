export function renderizarEstatisticas() {
    const playerDinheiro = sessionStorage.getItem('playerDinheiro') || '0';
    return `
        <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">📈 ESTATÍSTICAS</h2>
                <button onclick="window.fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            <div style="background:#0a0a0f; padding:20px;">
                <p><span style="color:#00f3ff;">💰 Dinheiro:</span> C$${playerDinheiro}</p>
                <p><span style="color:#00f3ff;">⭐ Nível:</span> 1</p>
            </div>
        </div>
    `;
}