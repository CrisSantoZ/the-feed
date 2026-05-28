// js/personagem/perfil.js
// Dashboard do personagem - VERSÃO CORRIGIDA COM SINCronização REAL

// Fallback confiável (ui-avatars.com com as iniciais do nome)
function gerarFallbackAvatar(nome, sobrenome) {
    const inicial = (nome?.charAt(0) || '?') + (sobrenome?.charAt(0) || '');
    return `https://ui-avatars.com/api/?background=00f3ff&color=fff&bold=true&size=60&name=${encodeURIComponent(inicial)}`;
}

// Verifica se a URL da imagem é válida
function isUrlValida(url) {
    if (!url || url === 'null' || url === 'undefined') return false;
    if (!url.startsWith('http')) return false;
    if (url.includes('image.tmdb.org') && !url.includes('w342')) return false;
    return true;
}

// ==================== FUNÇÕES PRINCIPAIS ====================

// Sincronizar status com o backend
async function sincronizarStatus() {
    const playerId = sessionStorage.getItem('playerId');
    if (!playerId) {
        console.warn('[PERFIL] PlayerId não encontrado');
        return false;
    }

    const socket = window.socket;
    if (!socket || !socket.connected) {
        console.warn('[PERFIL] Socket não conectado');
        return false;
    }

    return new Promise((resolve) => {
        socket.emit('getResumo', playerId);

        socket.once('resumoPlayer', (resumo) => {
            if (resumo && resumo.necessidades) {
                const fome = Math.round(resumo.necessidades.fome ?? 0);
                const sede = Math.round(resumo.necessidades.sede ?? 0);
                const energia = Math.round(resumo.necessidades.energia ?? 100);

                sessionStorage.setItem('playerFome', fome);
                sessionStorage.setItem('playerSede', sede);
                sessionStorage.setItem('playerEnergia', energia);

                if (resumo.necessidades.sono !== undefined) {
                    sessionStorage.setItem('playerSono', Math.round(resumo.necessidades.sono));
                }
                if (resumo.saude?.geral !== undefined) {
                    sessionStorage.setItem('playerSaude', Math.round(resumo.saude.geral));
                }
                if (resumo.nivel !== undefined) {
                    sessionStorage.setItem('playerNivel', resumo.nivel);
                }
                if (resumo.patrimonio !== undefined) {
                    sessionStorage.setItem('playerDinheiro', resumo.patrimonio);
                }
                if (resumo.cargo) sessionStorage.setItem('playerCargo', resumo.cargo);
                if (resumo.empresa) sessionStorage.setItem('playerEmpresa', resumo.empresa);

                // ✅ ATUALIZA UI PRINCIPAL
                atualizarInterfaceNecessidades({ fome, sede, energia });

                // ✅ ✅ ✅ ATUALIZA AS BARRAS DO SIDEBAR IMEDIATAMENTE
                const barraFomeSidebar = document.getElementById('barra-fome-sidebar');
                const barraSedeSidebar = document.getElementById('barra-sede-sidebar');
                const barraEnergiaSidebar = document.getElementById('barra-energia-sidebar');
                const fomeSidebar = document.getElementById('player-fome-sidebar');
                const sedeSidebar = document.getElementById('player-sede-sidebar');
                const energiaSidebar = document.getElementById('player-energia-sidebar');

                if (barraFomeSidebar) barraFomeSidebar.style.width = fome + '%';
                if (barraSedeSidebar) barraSedeSidebar.style.width = sede + '%';
                if (barraEnergiaSidebar) barraEnergiaSidebar.style.width = energia + '%';
                if (fomeSidebar) fomeSidebar.textContent = fome + '%';
                if (sedeSidebar) sedeSidebar.textContent = sede + '%';
                if (energiaSidebar) energiaSidebar.textContent = energia + '%';

                console.log('[PERFIL] Sidebar atualizado imediatamente:', { fome, sede, energia });
                resolve(true);
            } else {
                resolve(false);
            }
        });

        setTimeout(() => {
            console.warn('[PERFIL] Timeout na sincronização');
            resolve(false);
        }, 5000);
    });
}

// Atualizar a interface com novos valores
function atualizarInterfaceNecessidades(dados) {
    // Atualiza spans de texto
    if (dados.fome !== undefined) {
        const fomeSpan = document.getElementById('player-fome');
        const fomeSidebar = document.getElementById('player-fome-sidebar');
        if (fomeSpan) fomeSpan.textContent = Math.round(dados.fome) + '%';
        if (fomeSidebar) fomeSidebar.textContent = Math.round(dados.fome) + '%';

        // ✅ CORREÇÃO: usar getElementById diretamente
        const barraFome = document.getElementById('barra-fome');
        if (barraFome) barraFome.style.width = dados.fome + '%';
    }

    if (dados.sede !== undefined) {
        const sedeSpan = document.getElementById('player-sede');
        const sedeSidebar = document.getElementById('player-sede-sidebar');
        if (sedeSpan) sedeSpan.textContent = Math.round(dados.sede) + '%';
        if (sedeSidebar) sedeSidebar.textContent = Math.round(dados.sede) + '%';

        // ✅ CORREÇÃO
        const barraSede = document.getElementById('barra-sede');
        if (barraSede) barraSede.style.width = dados.sede + '%';
    }

    if (dados.energia !== undefined) {
        const energiaSpan = document.getElementById('player-energia');
        const energiaSidebar = document.getElementById('player-energia-sidebar');
        if (energiaSpan) energiaSpan.textContent = Math.round(dados.energia) + '%';
        if (energiaSidebar) energiaSidebar.textContent = Math.round(dados.energia) + '%';

        // ✅ CORREÇÃO
        const barraEnergia = document.getElementById('barra-energia');
        if (barraEnergia) barraEnergia.style.width = dados.energia + '%';
    }
}

// ==================== FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO ====================

export function renderizarPerfil() {
    // Busca valores do sessionStorage (ou usa fallback)
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSobrenome = sessionStorage.getItem('playerSobrenome') || '';
    let avatarUrl = sessionStorage.getItem('avatarUrl') || '';
    const dinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    const playerEstado = sessionStorage.getItem('playerEstado') || 'São Paulo';
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    const simboloMoeda = sessionStorage.getItem('simboloMoeda') || 'R$';
    const fome = Math.round(sessionStorage.getItem('playerFome') || 30);
    const sede = Math.round(sessionStorage.getItem('playerSede') || 45);
    const energia = Math.round(sessionStorage.getItem('playerEnergia') || 80);

    let urlFinal = avatarUrl;
    if (!isUrlValida(avatarUrl)) {
        urlFinal = gerarFallbackAvatar(playerNome, playerSobrenome);
    }

    // Agendar sincronização após o DOM carregar
    sincronizarStatus();
    configurarEventosSocket();

    return `
        <div style="padding: 10px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; border: 2px solid #00f3ff; background: #1a1a2a; display: flex; align-items: center; justify-content: center;">
                    <img src="${urlFinal}" style="width: 100%; height: 100%; object-fit: cover;" 
                         onerror="this.onerror=null; this.src='${gerarFallbackAvatar(playerNome, playerSobrenome)}';">
                </div>
                <div>
                    <h4 style="color: #fff; margin: 0;">${escapeHtml(playerNome)} ${escapeHtml(playerSobrenome)}</h4>
                    <p style="color: #888; margin: 0; font-size: 11px;">⭐ Nível ${calcularNivel()}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">🍔 Fome</span>
                    <span id="player-fome" style="color: #fff; font-size: 10px;">${fome}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-fome" style="width: ${fome}%; height: 100%; background: #ff0055; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">💧 Sede</span>
                    <span id="player-sede" style="color: #fff; font-size: 10px;">${sede}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-sede" style="width: ${sede}%; height: 100%; background: #00f3ff; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                    <span style="color: #888; font-size: 10px;">⚡ Energia</span>
                    <span id="player-energia" style="color: #fff; font-size: 10px;">${energia}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-energia" style="width: ${energia}%; height: 100%; background: #00ff66; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #333;">
                <p style="color: #00f3ff; margin: 5px 0; font-size: 11px;">💰 ${simboloMoeda} <span id="player-dinheiro">${dinheiro}</span></p>
                <p style="color: #888; margin: 5px 0; font-size: 10px;">📍 ${escapeHtml(playerCidade)}, ${escapeHtml(playerEstado)}</p>
            </div>
        </div>
    `;
}

// Versão para o sidebar
export function renderizarPerfilSidebar() {
    const playerNome = sessionStorage.getItem('playerNome') || 'Carregando...';
    const playerSobrenome = sessionStorage.getItem('playerSobrenome') || '';
    let avatarUrl = sessionStorage.getItem('avatarUrl') || '';
    const dinheiro = sessionStorage.getItem('playerDinheiro') || 0;
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    const simboloMoeda = sessionStorage.getItem('simboloMoeda') || 'R$';
    
    // ✅ MUDE AQUI: valores reais OU 0 (não usar fallback 30/45)
    const fome = Math.round(sessionStorage.getItem('playerFome') || 0);
    const sede = Math.round(sessionStorage.getItem('playerSede') || 0);
    const energia = Math.round(sessionStorage.getItem('playerEnergia') || 100);

    let urlFinal = avatarUrl;
    if (!isUrlValida(avatarUrl)) {
        urlFinal = gerarFallbackAvatar(playerNome, playerSobrenome);
    }

    // ✅ FORÇA SINCRONIZAÇÃO IMEDIATA
    sincronizarStatus();
    configurarEventosSocket();

    return `
        <div style="text-align: center; padding: 5px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid #00f3ff; margin: 0 auto 10px auto; background: #1a1a2a; display: flex; align-items: center; justify-content: center;">
                <img src="${urlFinal}" style="width: 100%; height: 100%; object-fit: cover;" 
                     onerror="this.onerror=null; this.src='${gerarFallbackAvatar(playerNome, playerSobrenome)}';">
            </div>
            <h3 style="color: #fff; margin: 0 0 5px 0; font-size: 14px;">${escapeHtml(playerNome)} ${escapeHtml(playerSobrenome)}</h3>
            <p style="color: #888; margin: 0 0 10px 0; font-size: 11px;">⭐ Nível ${calcularNivel()}</p>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">🍔 Fome</span>
                    <span id="player-fome-sidebar" style="color: #fff; font-size: 10px;">${fome}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-fome-sidebar" style="width: ${fome}%; height: 100%; background: #ff0055; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">💧 Sede</span>
                    <span id="player-sede-sidebar" style="color: #fff; font-size: 10px;">${sede}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-sede-sidebar" style="width: ${sede}%; height: 100%; background: #00f3ff; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #888; font-size: 10px;">⚡ Energia</span>
                    <span id="player-energia-sidebar" style="color: #fff; font-size: 10px;">${energia}%</span>
                </div>
                <div style="width: 100%; height: 4px; background: #1a1a2a; border-radius: 2px;">
                    <div id="barra-energia-sidebar" style="width: ${energia}%; height: 100%; background: #00ff66; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #333;">
                <p style="color: #00f3ff; margin: 5px 0; font-size: 11px;">💰 ${simboloMoeda} <span id="player-dinheiro-sidebar">${dinheiro}</span></p>
                <p style="color: #888; margin: 5px 0; font-size: 10px;">📍 ${escapeHtml(playerCidade)}</p>
            </div>
        </div>
    `;
}

// ==================== EVENTOS DE SOCKET ====================

function configurarEventosSocket() {
    const socket = window.socket;
    if (!socket) return;

    // Remove listeners antigos para evitar duplicação
    socket.off('tickAtualizacao');
    socket.off('statusAtualizado');

    // Escuta atualizações do tick service
   socket.on('tickAtualizacao', (data) => {
    if (data.necessidades) {
        const { fome, sede, energia } = data.necessidades;
        
        if (fome !== undefined) sessionStorage.setItem('playerFome', fome);
        if (sede !== undefined) sessionStorage.setItem('playerSede', sede);
        if (energia !== undefined) sessionStorage.setItem('playerEnergia', energia);

        const sono = data.necessidades.sono;
        if (sono !== undefined) sessionStorage.setItem('playerSono', sono);

        if (data.saude !== undefined) {
            sessionStorage.setItem('playerSaude', data.saude);
        }
        
        // ✅ Atualiza dashboard principal
        atualizarInterfaceNecessidades({ fome, sede, energia });
        
        // ✅ Atualiza as BARRAS DO SIDEBAR
        const barraFomeSidebar = document.getElementById('barra-fome-sidebar');
        const barraSedeSidebar = document.getElementById('barra-sede-sidebar');
        const barraEnergiaSidebar = document.getElementById('barra-energia-sidebar');
        
        if (barraFomeSidebar && fome !== undefined) {
            barraFomeSidebar.style.width = fome + '%';
        }
        if (barraSedeSidebar && sede !== undefined) {
            barraSedeSidebar.style.width = sede + '%';
        }
        if (barraEnergiaSidebar && energia !== undefined) {
            barraEnergiaSidebar.style.width = energia + '%';
        }
        
        // Mostra alertas se houver
        if (data.alertas && data.alertas.length > 0) {
            const ultimoAlerta = data.alertas[data.alertas.length - 1];
            if (ultimoAlerta && window.mostrarNotificacao) {
                window.mostrarNotificacao(ultimoAlerta.mensagem, 'warning');
            }
        }
    }
});

    // Escuta atualizações gerais de status
    socket.on('statusAtualizado', (data) => {
        atualizarInterfaceNecessidades({
            fome: data.fome,
            sede: data.sede,
            energia: data.energia
        });
    });

    console.log('[PERFIL] Eventos de socket configurados');
}

// ==================== FUNÇÃO DE ATUALIZAÇÃO GLOBAL ====================

// Função para atualizar o dashboard em tempo real (chamada pelo comer.js)
window.atualizarDashboard = function (dados) {
    console.log('[DASHBOARD] Atualizando com dados:', dados);

    if (dados.saldoRestante !== undefined) {
        const dinheiroSpan = document.getElementById('player-dinheiro');
        const dinheiroSidebar = document.getElementById('player-dinheiro-sidebar');
        if (dinheiroSpan) dinheiroSpan.textContent = dados.saldoRestante;
        if (dinheiroSidebar) dinheiroSidebar.textContent = dados.saldoRestante;
        sessionStorage.setItem('playerDinheiro', dados.saldoRestante);
    }

    // ✅ CORREÇÃO: Atualiza os spans de texto E as barras
    if (dados.novaFome !== undefined) {
        // Atualiza texto
        const fomeSpan = document.getElementById('player-fome');
        const fomeSidebar = document.getElementById('player-fome-sidebar');
        if (fomeSpan) fomeSpan.textContent = Math.round(dados.novaFome) + '%';
        if (fomeSidebar) fomeSidebar.textContent = Math.round(dados.novaFome) + '%';

        // ✅ CORREÇÃO: Atualiza a barra de progresso do SIDEBAR
        const barraFomeSidebar = document.getElementById('barra-fome-sidebar');
        if (barraFomeSidebar) {
            barraFomeSidebar.style.width = dados.novaFome + '%';
            console.log(`[DASHBOARD] Barra fome SIDEBAR atualizada para ${dados.novaFome}%`);
        }

        // ✅ CORREÇÃO: Atualiza a barra de progresso principal (se existir)
        const barraFome = document.getElementById('barra-fome');
        if (barraFome) {
            barraFome.style.width = dados.novaFome + '%';
            console.log(`[DASHBOARD] Barra fome PRINCIPAL atualizada para ${dados.novaFome}%`);
        }

        sessionStorage.setItem('playerFome', dados.novaFome);
    }

    if (dados.novaSede !== undefined) {
        const sedeSpan = document.getElementById('player-sede');
        const sedeSidebar = document.getElementById('player-sede-sidebar');
        if (sedeSpan) sedeSpan.textContent = Math.round(dados.novaSede) + '%';
        if (sedeSidebar) sedeSidebar.textContent = Math.round(dados.novaSede) + '%';

        const barraSedeSidebar = document.getElementById('barra-sede-sidebar');
        if (barraSedeSidebar) {
            barraSedeSidebar.style.width = dados.novaSede + '%';
            console.log(`[DASHBOARD] Barra sede SIDEBAR atualizada para ${dados.novaSede}%`);
        }

        const barraSede = document.getElementById('barra-sede');
        if (barraSede) {
            barraSede.style.width = dados.novaSede + '%';
            console.log(`[DASHBOARD] Barra sede PRINCIPAL atualizada para ${dados.novaSede}%`);
        }

        sessionStorage.setItem('playerSede', dados.novaSede);
    }

    if (dados.novaEnergia !== undefined) {
        const energiaSpan = document.getElementById('player-energia');
        const energiaSidebar = document.getElementById('player-energia-sidebar');
        if (energiaSpan) energiaSpan.textContent = Math.round(dados.novaEnergia) + '%';
        if (energiaSidebar) energiaSidebar.textContent = Math.round(dados.novaEnergia) + '%';

        const barraEnergiaSidebar = document.getElementById('barra-energia-sidebar');
        if (barraEnergiaSidebar) {
            barraEnergiaSidebar.style.width = dados.novaEnergia + '%';
            console.log(`[DASHBOARD] Barra energia SIDEBAR atualizada para ${dados.novaEnergia}%`);
        }

        const barraEnergia = document.getElementById('barra-energia');
        if (barraEnergia) {
            barraEnergia.style.width = dados.novaEnergia + '%';
            console.log(`[DASHBOARD] Barra energia PRINCIPAL atualizada para ${dados.novaEnergia}%`);
        }

        sessionStorage.setItem('playerEnergia', dados.novaEnergia);
    }
};

// ==================== FUNÇÕES AUXILIARES ====================

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function calcularNivel() {
    const xp = parseInt(sessionStorage.getItem('playerXP')) || 0;
    return Math.floor(xp / 1000) + 1;
}

// ==================== FUNÇÕES DE BUSCA (para uso externo) ====================

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

// ==================== DETECTOR DE REATIVAÇÃO DA ABA ====================
// Quando o jogador voltar para a aba do jogo, sincroniza os dados

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        console.log('[WAKE] Aba ativada, sincronizando status...');
        
        const playerId = sessionStorage.getItem('playerId');
        if (playerId && window.socket) {
            // Verifica se o socket está conectado
            if (!window.socket.connected) {
                console.log('[WAKE] Socket desconectado, reconectando...');
                window.socket.connect();
            }
            
            // Força sincronização
            sincronizarStatus();
            
            // Força um tick manual para atualizar
            window.socket.emit('tick', playerId);
        }
    }
});

// Exportar funções para uso externo
export { sincronizarStatus, buscarNecessidades, buscarSaude, buscarFinanceiro };