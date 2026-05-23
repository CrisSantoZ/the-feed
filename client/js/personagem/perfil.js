// js/personagem/perfil.js
// Dashboard principal do personagem

export async function renderizarPerfil() {
    // Buscar dados do sessionStorage
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSobrenome = sessionStorage.getItem('playerSobrenome') || '';
    const playerId = sessionStorage.getItem('playerId');
    const avatarUrl = sessionStorage.getItem('playerAvatar') || '';
    const dinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    const playerEstado = sessionStorage.getItem('playerEstado') || 'São Paulo';
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    const playerLocal = sessionStorage.getItem('playerLocalNome') || 'Nenhum';
    
    // Buscar dados atualizados via socket
    let necessidades = { fome: 0, sede: 0, sono: 0, energia: 100 };
    let saude = { geral: 100 };
    let saldoBancario = 0;
    let patrimonio = 0;
    
    if (window.socket && playerId) {
        necessidades = await buscarNecessidades(playerId);
        saude = await buscarSaude(playerId);
        const financeiro = await buscarFinanceiro(playerId);
        saldoBancario = financeiro.saldoBancario;
        patrimonio = financeiro.patrimonio;
    }
    
    return `
        <div class="perfil-container" style="padding: 20px; height: 100%; overflow-y: auto; background: #030407;">
            
            <!-- Botão fechar -->
            <div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
                <button class="mapa-btn-fechar" onclick="window.fecharPainel()" style="background: none; border: none; color: #ff0055; font-size: 20px; cursor: pointer;">✖</button>
            </div>
            
            <!-- Grid principal -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                
                <!-- COLUNA 1: AVATAR E INFORMAÇÕES BÁSICAS -->
                <div style="background: linear-gradient(135deg, #0a0a1a, #1a0a2a); border-radius: 16px; padding: 20px; border: 1px solid #00f3ff;">
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                        <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 2px solid #00f3ff; margin-bottom: 15px;">
                            <img src="${avatarUrl}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <h2 style="color: #fff; margin: 0;">${playerNome} ${playerSobrenome}</h2>
                        <p style="color: #888; margin: 5px 0;">🎭 Faceclaim</p>
                        <div style="margin-top: 15px; width: 100%;">
                            <p style="color: #00f3ff; margin: 5px 0;">⭐ Nível: <span style="color: #fff;">${calcularNivel()}</span></p>
                            <p style="color: #00f3ff; margin: 5px 0;">📈 XP: <span style="color: #fff;">${calcularXP()} / ${calcularXPProximo()}</span></p>
                        </div>
                    </div>
                </div>
                
                <!-- COLUNA 2: NECESSIDADES -->
                <div style="background: linear-gradient(135deg, #0a0a1a, #1a0a2a); border-radius: 16px; padding: 20px; border: 1px solid #00f3ff;">
                    <h3 style="color: #00f3ff; margin: 0 0 15px 0;">📊 NECESSIDADES</h3>
                    ${criarBarraProgresso("🍔 Fome", necessidades.fome || 0, "#ff0055")}
                    ${criarBarraProgresso("💧 Sede", necessidades.sede || 0, "#00f3ff")}
                    ${criarBarraProgresso("😴 Sono", necessidades.sono || 0, "#8844cc")}
                    ${criarBarraProgresso("⚡ Energia", necessidades.energia || 100, "#00ff66")}
                    ${criarBarraProgresso("❤️ Saúde", saude.geral || 100, "#ff0055")}
                </div>
                
                <!-- COLUNA 3: FINANCEIRO E STATUS -->
                <div style="background: linear-gradient(135deg, #0a0a1a, #1a0a2a); border-radius: 16px; padding: 20px; border: 1px solid #00f3ff;">
                    <h3 style="color: #00f3ff; margin: 0 0 15px 0;">💰 FINANCEIRO</h3>
                    <p style="color: #fff; margin: 8px 0;">💵 Dinheiro vivo: <span style="color: #00ff66;">C$ ${dinheiro}</span></p>
                    <p style="color: #fff; margin: 8px 0;">🏦 Banco: <span style="color: #00ff66;">C$ ${saldoBancario}</span></p>
                    <p style="color: #fff; margin: 8px 0;">💎 Patrimônio: <span style="color: #ff0055;">C$ ${patrimonio}</span></p>
                    
                    <h3 style="color: #00f3ff; margin: 20px 0 15px 0;">📍 LOCALIZAÇÃO</h3>
                    <p style="color: #fff; margin: 5px 0;">🌍 País: <span style="color: #888;">${playerPais}</span></p>
                    <p style="color: #fff; margin: 5px 0;">🏛️ Estado: <span style="color: #888;">${playerEstado}</span></p>
                    <p style="color: #fff; margin: 5px 0;">🏙️ Cidade: <span style="color: #888;">${playerCidade}</span></p>
                    <p style="color: #fff; margin: 5px 0;">📍 Local atual: <span style="color: #00f3ff;">${playerLocal}</span></p>
                </div>
            </div>
            
            <!-- ABAS SECUNDÁRIAS -->
            <div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; justify-content: center;">
                <button onclick="window.mudarCategoria('atributos')" style="background: rgba(0,243,255,0.1); border: 1px solid #00f3ff; color: #00f3ff; padding: 8px 16px; border-radius: 8px; cursor: pointer;">📊 ATRIBUTOS</button>
                <button onclick="window.mudarCategoria('inventario')" style="background: rgba(0,243,255,0.1); border: 1px solid #00f3ff; color: #00f3ff; padding: 8px 16px; border-radius: 8px; cursor: pointer;">🎒 INVENTÁRIO</button>
                <button onclick="window.mudarCategoria('habilidades')" style="background: rgba(0,243,255,0.1); border: 1px solid #00f3ff; color: #00f3ff; padding: 8px 16px; border-radius: 8px; cursor: pointer;">⚡ HABILIDADES</button>
                <button onclick="window.mudarCategoria('estatisticas')" style="background: rgba(0,243,255,0.1); border: 1px solid #00f3ff; color: #00f3ff; padding: 8px 16px; border-radius: 8px; cursor: pointer;">📈 ESTATÍSTICAS</button>
                <button onclick="window.mudarCategoria('idiomas')" style="background: rgba(0,243,255,0.1); border: 1px solid #00f3ff; color: #00f3ff; padding: 8px 16px; border-radius: 8px; cursor: pointer;">🗣️ IDIOMAS</button>
            </div>
        </div>
    `;
}

function criarBarraProgresso(label, valor, cor) {
    const porcentagem = Math.min(100, Math.max(0, valor));
    return `
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="color: #888; font-size: 12px;">${label}</span>
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