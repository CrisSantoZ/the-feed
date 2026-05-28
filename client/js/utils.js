export function getSimboloMoeda() {
    return sessionStorage.getItem('simboloMoeda') || 'R$';
}

export function normalizarString(str) {
    if (!str) return '';
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function slugify(str) {
    if (!str) return '';
    return normalizarString(str).replace(/ /g, '-');
}

export function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function getPlayerData() {
    return {
        id: sessionStorage.getItem('playerId'),
        nome: sessionStorage.getItem('playerNome') || '---',
        sobrenome: sessionStorage.getItem('playerSobrenome') || '',
        avatar: sessionStorage.getItem('avatarUrl') || '',
        dinheiro: sessionStorage.getItem('playerDinheiro') || 0,
        simbolo: getSimboloMoeda(),
        nivel: sessionStorage.getItem('playerNivel') || 1,
        xp: sessionStorage.getItem('playerXP') || 0,
        fome: Math.round(sessionStorage.getItem('playerFome') || 0),
        sede: Math.round(sessionStorage.getItem('playerSede') || 0),
        energia: Math.round(sessionStorage.getItem('playerEnergia') || 100),
        sono: Math.round(sessionStorage.getItem('playerSono') || 0),
        saude: sessionStorage.getItem('playerSaude') || 100,
        cidade: sessionStorage.getItem('playerCidade') || '---',
        estado: sessionStorage.getItem('playerEstado') || '---',
        pais: sessionStorage.getItem('playerPais') || '---',
    };
}

export function barraHTML(valor, cor, altura = '6px') {
    const pct = Math.min(100, Math.max(0, Number(valor)));
    return `<div class="stat-bar" style="height:${altura};"><div class="stat-bar-fill" style="width:${pct}%;background:${cor}"></div></div>`;
}

export function painelHeader(titulo) {
    return `
        <div class="mapa-header" style="padding:15px;margin:0;">
            <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">${titulo}</span>
            <button onclick="window.fecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
        </div>
    `;
}

export function cardInicio(titulo, cor = '#00f3ff') {
    return `<div style="background:rgba(0,243,255,0.03);border:1px solid ${cor}1e;border-radius:12px;padding:15px;margin-bottom:15px;">`;
}

export function cardFim() {
    return `</div>`;
}

export function statRow(label, valor, corValor = '#fff') {
    return `<div class="stat-row"><span class="stat-label">${label}</span><span class="stat-val" style="color:${corValor};">${valor}</span></div>`;
}
