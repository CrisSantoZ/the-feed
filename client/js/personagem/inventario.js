export function renderizarInventario() {
    return `
        <div class="mapa-container" style="padding:0;">
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">🎒 INVENTÁRIO</span>
                <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>

            <div style="padding:0 15px 15px;">

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                        <span style="color:#00f3ff;font-weight:bold;font-size:0.8rem;letter-spacing:1px;">🛍️ MOCHILA</span>
                        <span style="color:#888;font-size:0.7rem;">0 / 20 itens</span>
                    </div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width:0%;background:#00f3ff"></div></div>
                    <div style="color:#555;font-size:0.7rem;margin-top:8px;">⚖️ Peso: 0 / 10 kg</div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:8px;letter-spacing:1px;">👕 EQUIPADOS</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;text-align:center;color:#555;font-size:0.7rem;">🧢 Cabeça</div>
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;text-align:center;color:#555;font-size:0.7rem;">👕 Torso</div>
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;text-align:center;color:#555;font-size:0.7rem;">👖 Pernas</div>
                        <div style="background:rgba(0,0,0,0.3);padding:8px;border-radius:6px;text-align:center;color:#555;font-size:0.7rem;">👟 Pés</div>
                    </div>
                </div>

                <div style="color:#555;font-size:0.7rem;text-align:center;padding:20px;">
                    Nenhum item no inventário.
                </div>

            </div>
        </div>
    `;
}
