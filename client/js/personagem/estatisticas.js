export async function renderizarEstatisticas() {
    const { barraHTML } = await import('../utils.js');
    const playerDinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';
    const playerNivel = sessionStorage.getItem('playerNivel') || 1;
    const playerXP = sessionStorage.getItem('playerXP') || 0;
    const playerCidade = sessionStorage.getItem('playerCidade') || '---';
    const playerEstado = sessionStorage.getItem('playerEstado') || '---';
    const playerPais = sessionStorage.getItem('playerPais') || '---';

    return `
        <div class="mapa-container" style="padding:0;">
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">📈 ESTATÍSTICAS</span>
                <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>

            <div style="padding:0 15px 15px;">

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">FINANCEIRO</div>
                    <div class="stat-row"><span class="stat-label">💰 Dinheiro vivo</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(playerDinheiro).toLocaleString()}</span></div>
                    <div style="height:8px;"></div>
                    <div class="stat-row"><span class="stat-label">🏦 Conta bancária</span><span class="stat-val">${simbolo} 0</span></div>
                    <div class="stat-row"><span class="stat-label">📊 Investimentos</span><span class="stat-val">${simbolo} 0</span></div>
                    <div class="stat-row"><span class="stat-label">💳 Score crédito</span><span class="stat-val">---</span></div>
                    <div class="stat-row"><span class="stat-label">💼 Salário</span><span class="stat-val">${simbolo} 0/mês</span></div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">PROGRESSO</div>
                    <div class="stat-row"><span class="stat-label">⭐ Nível</span><span class="stat-val">${playerNivel}</span></div>
                    ${barraHTML((playerXP / (playerNivel * 1000)) * 100, '#00f3ff')}
                    <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:#555;margin-top:2px;">
                        <span>XP: ${playerXP}</span>
                        <span>Próximo: ${playerNivel * 1000} XP</span>
                    </div>
                    <div style="height:10px;"></div>
                    <div class="stat-row"><span class="stat-label">⏱️ Tempo jogado</span><span class="stat-val">---</span></div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">EXPLORAÇÃO</div>
                    <div class="stat-row"><span class="stat-label">📍 Localização</span><span class="stat-val" style="color:#fff;font-size:0.7rem;">${playerCidade}, ${playerEstado}</span></div>
                    <div class="stat-row"><span class="stat-label">🌍 País</span><span class="stat-val">${playerPais}</span></div>
                    <div style="height:6px;"></div>
                    <div class="stat-row"><span class="stat-label">🗺️ Países visitados</span><span class="stat-val">1</span></div>
                    <div class="stat-row"><span class="stat-label">🏙️ Cidades visitadas</span><span class="stat-val">1</span></div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">SOCIAL</div>
                    <div class="stat-row"><span class="stat-label">👥 Amigos</span><span class="stat-val">0</span></div>
                    <div class="stat-row"><span class="stat-label">🔥 Popularidade</span><span class="stat-val">0%</span></div>
                    ${barraHTML(0, '#ff0055')}
                    <div class="stat-row"><span class="stat-label">⚔️ Facção</span><span class="stat-val">Nenhuma</span></div>
                </div>

            </div>
        </div>
    `;
}
