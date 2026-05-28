export async function renderizarAtributos() {
    const { renderizarSecaoEmprego, configurarBotoesEmprego } = await import('../emprego/empresaUI.js');
    const { barraHTML } = await import('../utils.js');
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSaude = sessionStorage.getItem('playerSaude') || 100;
    const playerFome = Math.round(sessionStorage.getItem('playerFome') || 0);
    const playerSede = Math.round(sessionStorage.getItem('playerSede') || 0);
    const playerEnergia = Math.round(sessionStorage.getItem('playerEnergia') || 100);
    const playerSono = Math.round(sessionStorage.getItem('playerSono') || 0);
    const playerNivel = sessionStorage.getItem('playerNivel') || 1;
    const playerXP = sessionStorage.getItem('playerXP') || 0;
    const playerDinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';
    const playerCidade = sessionStorage.getItem('playerCidade') || '---';
    const playerEstado = sessionStorage.getItem('playerEstado') || '---';

    return `
        <div class="mapa-container" style="padding:0;">
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">📊 ATRIBUTOS</span>
                <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>

            <div style="padding:0 15px 15px;">

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                        <div style="width:44px;height:44px;border-radius:50%;overflow:hidden;border:2px solid #00f3ff;flex-shrink:0;background:#1a1a2a;">
                            <img src="${sessionStorage.getItem('avatarUrl') || ''}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
                        </div>
                        <div>
                            <div style="color:#fff;font-weight:bold;font-size:0.95rem;">${playerNome}</div>
                            <div style="color:#888;font-size:0.7rem;">⭐ Nv.${playerNivel} · ${playerCidade}, ${playerEstado}</div>
                        </div>
                    </div>
                    <div style="color:#00f3ff;font-size:0.85rem;">💰 ${simbolo} ${Number(playerDinheiro).toLocaleString()}</div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">NECESSIDADES</div>
                    <div class="stat-row"><span class="stat-label">🍔 Fome</span><span class="stat-val">${playerFome}%</span></div>
                    ${barraHTML(playerFome, '#ff0055')}
                    <div class="stat-row"><span class="stat-label">💧 Sede</span><span class="stat-val">${playerSede}%</span></div>
                    ${barraHTML(playerSede, '#00f3ff')}
                    <div class="stat-row"><span class="stat-label">⚡ Energia</span><span class="stat-val">${playerEnergia}%</span></div>
                    ${barraHTML(playerEnergia, '#00ff66')}
                    <div class="stat-row"><span class="stat-label">😴 Sono</span><span class="stat-val">${playerSono}%</span></div>
                    ${barraHTML(playerSono, '#ff8800')}
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">SAÚDE</div>
                    <div class="stat-row"><span class="stat-label">❤️ Geral</span><span class="stat-val">${playerSaude}%</span></div>
                    ${barraHTML(playerSaude, '#ff0055')}
                    <div style="color:#888;font-size:0.7rem;margin-top:8px;">🧬 Doenças: 0 · 🩸 Tipo: O+</div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;">
                    <div class="stat-row"><span class="stat-label">⭐ Nível ${playerNivel}</span><span class="stat-val">${playerXP} / ${(playerNivel * 1000)} XP</span></div>
                    ${barraHTML((playerXP / (playerNivel * 1000)) * 100, '#00f3ff')}
                </div>

                ${renderizarSecaoEmprego()}

            </div>
        </div>
    `;

    setTimeout(configurarBotoesEmprego, 100);
}
