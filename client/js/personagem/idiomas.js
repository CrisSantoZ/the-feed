export function renderizarIdiomas() {
    return `
        <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">🗣️ IDIOMAS</h2>
                <button onclick="window.fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            <div style="background:#0a0a0f; padding:20px;">
                <p><span style="color:#00f3ff;">🇧🇷 Português:</span> Nativo</p>
                <p><span style="color:#00f3ff;">🇺🇸 Inglês:</span> 0%</p>
            </div>
        </div>
    `;
}