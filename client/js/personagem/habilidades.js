export async function renderizarHabilidades() {
    const { barraHTML } = await import('../utils.js');
    function skillItem(icone, nome, nivel, xp, xpMax, cor) {
        return `
            <div style="background:rgba(0,0,0,0.3);padding:10px;border-radius:8px;margin-bottom:6px;border-left:3px solid ${cor};">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                    <span style="color:#fff;font-size:0.8rem;">${icone} ${nome}</span>
                    <span style="color:${cor};font-size:0.7rem;font-weight:bold;">Nv.${nivel}</span>
                </div>
                ${barraHTML((xp / xpMax) * 100, cor)}
                <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#555;margin-top:2px;">
                    <span>XP: ${xp}/${xpMax}</span>
                </div>
            </div>
        `;
    }

    return `
        <div class="mapa-container" style="padding:0;">
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">⚡ HABILIDADES</span>
                <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>

            <div style="padding:0 15px 15px;">

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                        <span style="color:#00f3ff;font-weight:bold;font-size:0.8rem;letter-spacing:1px;">💪 FÍSICAS</span>
                        <span style="color:#888;font-size:0.65rem;">Nv.1</span>
                    </div>
                    ${skillItem('💪', 'Força', 1, 0, 100, '#ff0055')}
                    ${skillItem('🏃', 'Resistência', 1, 0, 100, '#ff0055')}
                    ${skillItem('🤸', 'Agilidade', 1, 0, 100, '#ff0055')}
                    ${skillItem('⚡', 'Velocidade', 1, 0, 100, '#ff0055')}
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                        <span style="color:#00f3ff;font-weight:bold;font-size:0.8rem;letter-spacing:1px;">🧠 MENTAIS</span>
                        <span style="color:#888;font-size:0.65rem;">Nv.1</span>
                    </div>
                    ${skillItem('🧠', 'Inteligência', 1, 0, 100, '#00f3ff')}
                    ${skillItem('🎯', 'Foco', 1, 0, 100, '#00f3ff')}
                    ${skillItem('💡', 'Criatividade', 1, 0, 100, '#00f3ff')}
                    ${skillItem('🧩', 'Lógica', 1, 0, 100, '#00f3ff')}
                </div>

                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                        <span style="color:#00f3ff;font-weight:bold;font-size:0.8rem;letter-spacing:1px;">🗣️ SOCIAIS</span>
                        <span style="color:#888;font-size:0.65rem;">Nv.1</span>
                    </div>
                    ${skillItem('🗣️', 'Carisma', 1, 0, 100, '#ff8800')}
                    ${skillItem('🤝', 'Persuasão', 1, 0, 100, '#ff8800')}
                    ${skillItem('📊', 'Negociação', 1, 0, 100, '#ff8800')}
                    ${skillItem('👑', 'Liderança', 1, 0, 100, '#ff8800')}
                </div>

            </div>
        </div>
    `;
}
