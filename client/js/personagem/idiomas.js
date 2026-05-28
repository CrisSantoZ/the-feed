export function renderizarIdiomas() {
    function barra(valor, cor) {
        const pct = Math.min(100, Math.max(0, valor));
        return `<div class="stat-bar"><div class="stat-bar-fill" style="width:${pct}%;background:${cor}"></div></div>`;
    }

    return `
        <div class="mapa-container" style="padding:0;">
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">🗣️ IDIOMAS</span>
                <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>

            <div style="padding:0 15px 15px;">

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:4px;letter-spacing:1px;">NATIVO</div>
                    <div style="color:#888;font-size:0.7rem;margin-bottom:8px;">Idioma principal do seu personagem</div>
                    <div style="display:flex;align-items:center;gap:10px;background:rgba(0,0,0,0.3);padding:10px;border-radius:8px;border-left:3px solid #00f3ff;">
                        <span style="font-size:1.5rem;">🇧🇷</span>
                        <div>
                            <div style="color:#fff;font-weight:bold;">Português</div>
                            <div style="color:#00f3ff;font-size:0.7rem;">NATIVO · Fluência total</div>
                        </div>
                    </div>
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:12px;letter-spacing:1px;">EM APRENDIZADO</div>

                    <div style="background:rgba(0,0,0,0.3);padding:12px;border-radius:8px;margin-bottom:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
                            <span style="font-size:1.2rem;">🇺🇸</span>
                            <span style="color:#fff;font-weight:bold;flex:1;">Inglês</span>
                            <span style="color:#888;font-size:0.7rem;">0%</span>
                        </div>
                        ${barra(0, '#00f3ff')}
                        <div style="display:flex;gap:8px;font-size:0.6rem;color:#555;margin-top:4px;">
                            <span>🎧 Compreensão: 0%</span>
                            <span>🗣️ Fala: 0%</span>
                            <span>📖 Leitura: 0%</span>
                        </div>
                    </div>

                    <div style="background:rgba(0,0,0,0.3);padding:12px;border-radius:8px;margin-bottom:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
                            <span style="font-size:1.2rem;">🇪🇸</span>
                            <span style="color:#fff;font-weight:bold;flex:1;">Espanhol</span>
                            <span style="color:#888;font-size:0.7rem;">0%</span>
                        </div>
                        ${barra(0, '#ff0055')}
                        <div style="display:flex;gap:8px;font-size:0.6rem;color:#555;margin-top:4px;">
                            <span>🎧 Compreensão: 0%</span>
                            <span>🗣️ Fala: 0%</span>
                            <span>📖 Leitura: 0%</span>
                        </div>
                    </div>
                </div>

                <div style="background:rgba(255,0,85,0.03);border:1px solid rgba(255,0,85,0.15);border-radius:12px;padding:15px;">
                    <div style="color:#ff0055;font-weight:bold;font-size:0.75rem;letter-spacing:1px;">📚 ESTUDAR</div>
                    <div style="color:#888;font-size:0.7rem;margin:8px 0;">
                        Estude idiomas em bibliotecas ou com livros para expandir suas habilidades de comunicação.
                    </div>
                    <div style="color:#555;font-size:0.65rem;">
                        Idiomas disponíveis: 16
                    </div>
                </div>

            </div>
        </div>
    `;
}
