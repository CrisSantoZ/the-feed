// js/actions/comer.js
// Sistema de alimentação - processa pedidos de restaurantes (VERSÃO CORRIGIDA)

export async function processarPedido(playerId, restaurante, pratoId) {
    const prato = restaurante.cardapio.find(p => p.id === pratoId);
    if (!prato) {
        return { sucesso: false, mensagem: "Prato não encontrado!" };
    }
    
    const simbolo = window.getSimboloMoeda ? window.getSimboloMoeda() : (sessionStorage.getItem('simboloMoeda') || 'R$');
    
    // Verificar dinheiro (via socket)
    const saldo = await verificarSaldo(playerId);
    if (saldo < prato.preco) {
        return { sucesso: false, mensagem: `Saldo insuficiente! Você tem ${simbolo} ${saldo}, precisa de ${simbolo} ${prato.preco}` };
    }
    
    // Mostrar animação de preparo
    await mostrarPreparo(prato);
    
    // Refeição em etapas
    const etapas = prato.etapas || 3;
    for (let i = 1; i <= etapas; i++) {
        await comerEtapa(prato, i, etapas);
    }
    
    // Processa a compra e aplica os efeitos no backend
    const resultado = await processarCompraEfeitos(playerId, prato.nome, prato.preco, prato.recuperacao);
    
    if (!resultado.sucesso) {
        return { sucesso: false, mensagem: resultado.erro };
    }
    
    // ✅ FORÇA UMA SINCronização após comer
    await forcarSincronizacaoStatus(playerId);
    
    return { 
        sucesso: true, 
        mensagem: `🍽️ Você comeu ${prato.nome} e pagou ${simbolo} ${prato.preco}!`,
        recuperacao: prato.recuperacao,
        novoSaldo: resultado.saldoRestante
    };
}

// ✅ NOVA FUNÇÃO: Forçar sincronização do status após ação
async function forcarSincronizacaoStatus(playerId) {
    const socket = window.socket;
    if (!socket) return;
    
    // Primeiro, tenta usar o resumo do jogador
    socket.emit('getResumo', playerId);
    socket.once('resumoPlayer', (resumo) => {
        if (resumo && resumo.necessidades) {
            // Atualiza sessionStorage
            if (resumo.necessidades.fome !== undefined) {
                sessionStorage.setItem('playerFome', resumo.necessidades.fome);
            }
            if (resumo.necessidades.sede !== undefined) {
                sessionStorage.setItem('playerSede', resumo.necessidades.sede);
            }
            if (resumo.necessidades.energia !== undefined) {
                sessionStorage.setItem('playerEnergia', resumo.necessidades.energia);
            }
            
            // Atualiza UI se a função existir
            if (typeof window.atualizarDashboard === 'function') {
                window.atualizarDashboard({
                    novaFome: resumo.necessidades.fome,
                    novaSede: resumo.necessidades.sede,
                    novaEnergia: resumo.necessidades.energia
                });
            }
            
            console.log('[COMER] Status sincronizado:', {
                fome: resumo.necessidades.fome,
                sede: resumo.necessidades.sede,
                energia: resumo.necessidades.energia
            });
        }
    });
    
    // Fallback: tenta o tick manual
    setTimeout(() => {
        socket.emit('tick', playerId);
    }, 500);
}

async function verificarSaldo(playerId) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve(0);
        
        socket.emit('verSaldo', playerId);
        socket.once('saldoAtual', (data) => {
            resolve(data.dinheiroVivo || data.saldoTotal || 0);
        });
        setTimeout(() => resolve(0), 2000);
    });
}

async function processarCompraEfeitos(playerId, pratoNome, preco, recuperacao) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve({ sucesso: false, erro: "Sem conexão com o servidor" });
        
        console.log('[COMER] Enviando pedido:', { playerId, prato: pratoNome, preco, recuperacao });
        
        socket.emit('comerDireto', {
            playerId: playerId,
            prato: pratoNome,
            preco: preco,
            recuperacao: recuperacao
        });
        
        socket.once('comidaConsumida', (data) => {
            console.log('[COMER] Efeitos aplicados pelo backend:', data);
            
            // Atualiza o sessionStorage
            if (data.saldoRestante !== undefined) {
                sessionStorage.setItem('playerDinheiro', data.saldoRestante);
            }
            if (data.novaFome !== undefined) {
                sessionStorage.setItem('playerFome', data.novaFome);
                console.log(`[COMER] Nova fome: ${data.novaFome}%`);
            }
            if (data.novaSede !== undefined) {
                sessionStorage.setItem('playerSede', data.novaSede);
                console.log(`[COMER] Nova sede: ${data.novaSede}%`);
            }
            if (data.novaEnergia !== undefined) {
                sessionStorage.setItem('playerEnergia', data.novaEnergia);
                console.log(`[COMER] Nova energia: ${data.novaEnergia}%`);
            }
            
            // Atualiza a interface usando a função global do dashboard
            if (typeof window.atualizarDashboard === 'function') {
                window.atualizarDashboard(data);
            } else {
                console.warn('[COMER] window.atualizarDashboard não encontrada');
                // Fallback: tenta atualizar diretamente
                atualizarInterface(data);
            }
            
            resolve({ sucesso: true, saldoRestante: data.saldoRestante });
        });
        
        socket.once('erroServidor', (erro) => {
            console.error('[COMER] Erro do servidor:', erro);
            resolve({ sucesso: false, erro: erro });
        });
        
        setTimeout(() => {
            console.error('[COMER] Timeout - servidor não respondeu');
            resolve({ sucesso: false, erro: "Timeout - servidor não respondeu" });
        }, 10000);
    });
}

function atualizarInterface(data) {
    // Fallback: atualiza elementos diretamente se existirem
    const fomeElement = document.getElementById('player-fome');
    const sedeElement = document.getElementById('player-sede');
    const energiaElement = document.getElementById('player-energia');
    const saldoElement = document.getElementById('player-dinheiro');
    
    if (fomeElement && data.novaFome !== undefined) fomeElement.textContent = Math.round(data.novaFome) + '%';
    if (sedeElement && data.novaSede !== undefined) sedeElement.textContent = Math.round(data.novaSede) + '%';
    if (energiaElement && data.novaEnergia !== undefined) energiaElement.textContent = Math.round(data.novaEnergia) + '%';
    if (saldoElement && data.saldoRestante !== undefined) saldoElement.textContent = data.saldoRestante;
    
    // Atualiza barras de progresso
    if (data.novaFome !== undefined) {
        const barraFome = document.getElementById('barra-fome');
        if (barraFome) barraFome.style.width = data.novaFome + '%';
    }
    if (data.novaSede !== undefined) {
        const barraSede = document.getElementById('barra-sede');
        if (barraSede) barraSede.style.width = data.novaSede + '%';
    }
    if (data.novaEnergia !== undefined) {
        const barraEnergia = document.getElementById('barra-energia');
        if (barraEnergia) barraEnergia.style.width = data.novaEnergia + '%';
    }
    
    // Disparar evento para atualizar outros componentes
    window.dispatchEvent(new CustomEvent('statusAtualizado', { detail: data }));
}

function mostrarPreparo(prato) {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #0a0a1a;
            border: 1px solid #00f3ff;
            border-radius: 12px;
            padding: 15px 25px;
            z-index: 20000;
            text-align: center;
            animation: fadeInUp 0.3s ease;
        `;
        modal.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="font-size: 32px;">👨‍🍳</span>
                <div>
                    <p style="color: #00f3ff; margin: 0;">Preparando ${prato.nome}...</p>
                    <div style="width: 200px; height: 4px; background: #1a1a2a; border-radius: 2px; margin-top: 5px;">
                        <div style="width: 0%; height: 100%; background: linear-gradient(90deg, #00f3ff, #ff0055); border-radius: 2px; animation: progress 2s linear;"></div>
                    </div>
                </div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
            @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.remove();
            resolve();
        }, 2000);
    });
}

function comerEtapa(prato, etapa, totalEtapas) {
    return new Promise((resolve) => {
        const mensagens = [
            "🍴 Primeira garfada...",
            "🍴 Segunda garfada...",
            "🍴 Última garfada!"
        ];
        
        const feedbacks = [
            `😋 ${prato.nome} está delicioso!`,
            `🤤 Que sabor incrível!`,
            `💪 Energia renovada!`
        ];
        
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: ${120 + (etapa * 40)}px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            border-left: 3px solid #00f3ff;
            color: #fff;
            padding: 8px 16px;
            border-radius: 8px;
            z-index: 20000;
            font-size: 14px;
            animation: fadeOut 1.5s ease forwards;
        `;
        toast.innerHTML = `${mensagens[etapa-1]} ${feedbacks[etapa-1]}`;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
            resolve();
        }, 1500);
    });
}