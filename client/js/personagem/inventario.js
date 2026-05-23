export function renderizarInventario() {
    return `
        <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">🎒 INVENTÁRIO</h2>
                <button onclick="window.fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            <div style="background:#0a0a0f; padding:15px;">
                <p>Em desenvolvimento...</p>
            </div>
        </div>
    `;
}