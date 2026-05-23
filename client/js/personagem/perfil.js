// js/personagem/perfil.js
// Dashboard do personagem (versão compacta para o sidebar)

// Fallback confiável (usando emoji ou SVG inline)
const FALLBACK_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="%2300f3ff"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E';

// Ou usar um CDN mais confiável:
// const FALLBACK_AVATAR = 'https://ui-avatars.com/api/?background=00f3ff&color=fff&bold=true&rounded=true&size=60';

export function renderizarPerfil() {
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSobrenome = sessionStorage.getItem('playerSobrenome') || '';
    let avatarUrl = sessionStorage.getItem('avatarUrl') || '';
    const dinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    const playerEstado = sessionStorage.getItem('playerEstado') || 'São Paulo';
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    
    // Valida a URL do avatar
    if (!avatarUrl || avatarUrl === 'null' || avatarUrl === 'undefined' || !avatarUrl.startsWith('http')) {
        avatarUrl = FALLBACK_AVATAR;
    }
    
    return `
        <div style="padding: 10px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; border: 2px solid #00f3ff; background: #1a1a2a; display: flex; align-items: center; justify-content: center;">
                    <img src="${avatarUrl}" style="width: 100%; height: 100%; object-fit: cover;" 
                         onerror="this.onerror=null; this.src='${FALLBACK_AVATAR}';">
                </div>
                <div>
                    <h4 style="color: #fff; margin: 0;">${escapeHtml(playerNome)} ${escapeHtml(playerSobrenome)}</h4>
                    <p style="color: #888; margin: 0; font-size: 11px;">⭐ Nível 5</p>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">🍔 Fome</span>
                    <span style="color: #fff; font-size: 10px;">30%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: 30%; height: 100%; background: #ff0055; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">💧 Sede</span>
                    <span style="color: #fff; font-size: 10px;">45%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: 45%; height: 100%; background: #00f3ff; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">⚡ Energia</span>
                    <span style="color: #fff; font-size: 10px;">80%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: 80%; height: 100%; background: #00ff66; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #333;">
                <p style="color: #00f3ff; margin: 5px 0; font-size: 11px;">💰 C$ ${dinheiro}</p>
                <p style="color: #888; margin: 5px 0; font-size: 10px;">📍 ${escapeHtml(playerCidade)}, ${escapeHtml(playerEstado)}</p>
            </div>
        </div>
    `;
}

// Versão para o sidebar (mais compacta)
export function renderizarPerfilSidebar() {
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSobrenome = sessionStorage.getItem('playerSobrenome') || '';
    let avatarUrl = sessionStorage.getItem('avatarUrl') || '';
    const dinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    
    // Valida a URL do avatar
    if (!avatarUrl || avatarUrl === 'null' || avatarUrl === 'undefined' || !avatarUrl.startsWith('http')) {
        avatarUrl = FALLBACK_AVATAR;
    }
    
    // Dados mock (depois você conecta com o backend)
    const fome = 30;
    const sede = 45;
    const energia = 80;
    
    return `
        <div style="text-align: center; padding: 5px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid #00f3ff; margin: 0 auto 10px auto; background: #1a1a2a; display: flex; align-items: center; justify-content: center;">
                <img src="${avatarUrl}" style="width: 100%; height: 100%; object-fit: cover;" 
                     onerror="this.onerror=null; this.src='${FALLBACK_AVATAR}';">
            </div>
            <h3 style="color: #fff; margin: 0 0 5px 0; font-size: 14px;">${escapeHtml(playerNome)} ${escapeHtml(playerSobrenome)}</h3>
            <p style="color: #888; margin: 0 0 10px 0; font-size: 11px;">⭐ Nível 5</p>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">🍔 Fome</span>
                    <span style="color: #fff; font-size: 10px;">${fome}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: ${fome}%; height: 100%; background: #ff0055; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">💧 Sede</span>
                    <span style="color: #fff; font-size: 10px;">${sede}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: ${sede}%; height: 100%; background: #00f3ff; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">⚡ Energia</span>
                    <span style="color: #fff; font-size: 10px;">${energia}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div style="width: ${energia}%; height: 100%; background: #00ff66; border-radius: 2px;"></div>
                </div>
            </div>
            
            <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #333;">
                <p style="color: #00f3ff; margin: 5px 0; font-size: 11px;">💰 C$ ${dinheiro}</p>
                <p style="color: #888; margin: 5px 0; font-size: 10px;">📍 ${escapeHtml(playerCidade)}</p>
            </div>
        </div>
    `;
}

// Função auxiliar para escapar HTML (previne XSS)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Função auxiliar para criar barras de progresso
function criarBarraProgresso(label, valor, cor) {
    const porcentagem = Math.min(100, Math.max(0, valor));
    return `
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="color: #888; font-size: 12px;">${escapeHtml(label)}</span>
                <span style="color: #fff; font-size: 12px;">${porcentagem}%</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.5); border-radius: 4px; overflow: hidden;">
                <div style="width: ${porcentagem}%; height: 100%; background: linear-gradient(90deg, ${cor}, ${cor}88); border-radius: 4px;"></div>
            </div>
        </div>
    `;
}

async function buscarNecessidades(playerId) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve({ fome: 0, sede: 0, sono: 0, energia: 100 });
        
        socket.emit('getResumo', playerId);
        socket.once('resumoPlayer', (resumo) => {
            resolve({
                fome: resumo.necessidades?.fome || 0,
                sede: resumo.necessidades?.sede || 0,
                sono: resumo.necessidades?.sono || 0,
                energia: resumo.necessidades?.energia || 100
            });
        });
        setTimeout(() => resolve({ fome: 0, sede: 0, sono: 0, energia: 100 }), 2000);
    });
}

async function buscarSaude(playerId) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve({ geral: 100 });
        
        socket.emit('getResumo', playerId);
        socket.once('resumoPlayer', (resumo) => {
            resolve({ geral: resumo.saude?.geral || 100 });
        });
        setTimeout(() => resolve({ geral: 100 }), 2000);
    });
}

async function buscarFinanceiro(playerId) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve({ saldoBancario: 0, patrimonio: 0 });
        
        socket.emit('verSaldo', playerId);
        socket.once('saldoAtual', (data) => {
            resolve({
                saldoBancario: data.saldoBancario || 0,
                patrimonio: data.patrimonioTotal || 0
            });
        });
        setTimeout(() => resolve({ saldoBancario: 0, patrimonio: 0 }), 2000);
    });
}

function calcularNivel() {
    const xp = parseInt(sessionStorage.getItem('playerXP')) || 0;
    return Math.floor(xp / 1000) + 1;
}

function calcularXP() {
    return parseInt(sessionStorage.getItem('playerXP')) || 0;
}

function calcularXPProximo() {
    const xp = parseInt(sessionStorage.getItem('playerXP')) || 0;
    const nivel = Math.floor(xp / 1000) + 1;
    return nivel * 1000;
}