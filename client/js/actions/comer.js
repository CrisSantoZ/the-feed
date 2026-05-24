// js/actions/comer.js
// Sistema de alimentação - processa pedidos de restaurantes

export async function processarPedido(playerId, restaurante, pratoId) {
    const prato = restaurante.cardapio.find(p => p.id === pratoId);
    if (!prato) {
        return { sucesso: false, mensagem: "Prato não encontrado!" };
    }
    
    const simbolo = getSimboloMoeda();
    
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
    
    return { 
        sucesso: true, 
        mensagem: `🍽️ Você comeu ${prato.nome} e pagou ${simbolo} ${prato.preco}!`,
        recuperacao: prato.recuperacao,
        novoSaldo: resultado.saldoRestante
    };
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
        
        socket.emit('comerDireto', {
            playerId: playerId,
            prato: pratoNome,
            preco: preco,
            recuperacao: recuperacao
        });
        
        socket.once('comidaConsumida', (data) => {
            console.log('[COMER] Efeitos aplicados:', data);
            // Atualizar interface se houver elementos
            atualizarInterface(data);
            resolve({ sucesso: true, saldoRestante: data.saldoRestante });
        });
        
        socket.once('erroServidor', (erro) => {
            console.error('[COMER] Erro:', erro);
            resolve({ sucesso: false, erro: erro });
        });
        
        setTimeout(() => resolve({ sucesso: false, erro: "Timeout" }), 5000);
    });
}

function atualizarInterface(data) {
    // Atualiza elementos de status se existirem
    const fomeElement = document.getElementById('player-fome');
    const energiaElement = document.getElementById('player-energia');
    const felicidadeElement = document.getElementById('player-felicidade');
    const saldoElement = document.getElementById('player-dinheiro');
    
    if (fomeElement) fomeElement.textContent = data.novaFome || '?';
    if (energiaElement) energiaElement.textContent = data.novaEnergia || '?';
    if (felicidadeElement) felicidadeElement.textContent = data.novaFelicidade || '?';
    if (saldoElement) saldoElement.textContent = data.saldoRestante || '?';
    
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