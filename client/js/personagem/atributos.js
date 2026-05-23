export function renderizarAtributos() {
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    return `
        <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">📊 ATRIBUTOS</h2>
                <button onclick="window.fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            <div style="background:#0a0a0f; padding:20px; border-left:3px solid #ff0055;">
                <p><span style="color:#00f3ff;">👤 Nome:</span> ${playerNome}</p>
                <p><span style="color:#00f3ff;">❤️ Saúde:</span> 100%</p>
                <p><span style="color:#00f3ff;">🍔 Fome:</span> 0%</p>
                <p><span style="color:#00f3ff;">💧 Sede:</span> 0%</p>
                <p><span style="color:#00f3ff;">⚡ Energia:</span> 100%</p>
            </div>
        </div>
    `;
}