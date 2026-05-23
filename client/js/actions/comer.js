// js/actions/comer.js
// Sistema de alimentação - processa pedidos de restaurantes

export async function processarPedido(playerId, restaurante, pratoId) {
    const prato = restaurante.cardapio.find(p => p.id === pratoId);
    if (!prato) {
        return { sucesso: false, mensagem: "Prato não encontrado!" };
    }
    
    // Verificar dinheiro (via socket)
    const saldo = await verificarSaldo(playerId);
    if (saldo < prato.preco) {
        return { sucesso: false, mensagem: `Saldo insuficiente! Você tem C$${saldo}, precisa de C$${prato.preco}` };
    }
    
    // Mostrar animação de preparo
    await mostrarPreparo(prato);
    
    // Refeição em etapas
    const etapas = prato.etapas || 3;
    for (let i = 1; i <= etapas; i++) {
        await comerEtapa(prato, i, etapas);
    }
    
    // Debita o dinheiro
    await debitarDinheiro(playerId, prato.preco);
    
    // Aplica os efeitos de recuperação
    await aplicarRecuperacao(playerId, prato.recuperacao);
    
    return { 
        sucesso: true, 
        mensagem: `🍽️ Você comeu ${prato.nome} e pagou C$${prato.preco}!`,
        recuperacao: prato.recuperacao
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

async function debitarDinheiro(playerId, valor) {
    return new Promise((resolve) => {
        const socket = window.socket;
        if (!socket) return resolve(false);
        
        // Criar item virtual para compra
        const item = {
            id: `comida_${Date.now()}`,
            nome: "Refeição",
            tipo: "comida",
            valorCompra: valor
        };
        
        socket.emit('comprar', { playerId, item, quantidade: 1 });
        socket.once('compraRealizada', () => resolve(true));
        socket.once('erroServidor', () => resolve(false));
        setTimeout(() => resolve(false), 3000);
    });
}

async function aplicarRecuperacao(playerId, recuperacao) {
    // TODO: Integrar com backend para atualizar fome, sede, energia
    console.log(`[COMER] Recuperação aplicada:`, recuperacao);
    return true;
}

function mostrarPreparo(prato) {
    return new Promise((resolve) => {
        // Criar modal de preparo rápido
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
        
        // Adicionar animação
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