/* ==========================================================================
   TRANSPORTE UI - INTERFACE PARA VIAGENS
   ========================================================================== */

let modalViagemAberto = false;

/**
 * Abre o modal de viagem para um destino
 * @param {string} tipo - 'pais', 'estado', 'cidade'
 * @param {string} nomeDestino - Nome do destino
 * @param {object} dados - Dados adicionais (pais, estado, etc)
 */
export function abrirModalViagem(tipo, nomeDestino, dados = {}) {
    if (modalViagemAberto) return;
    
    const playerId = sessionStorage.getItem('playerId');
    if (!playerId) {
        alert("Você precisa estar logado!");
        return;
    }
    
    modalViagemAberto = true;
    
    // Opções de transporte baseado no tipo
    const opcoesTransporte = getOpcoesTransporte(tipo);
    
    // Criar modal
    const modal = document.createElement('div');
    modal.id = 'modal-transporte';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(3, 4, 7, 0.95);
        z-index: 20000;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(10px);
        font-family: 'JetBrains Mono', monospace;
    `;
    
    modal.innerHTML = `
        <div style="
            background: #0a0a1a;
            border: 2px solid #00f3ff;
            border-radius: 16px;
            padding: 25px;
            width: 90%;
            max-width: 450px;
            max-height: 85vh;
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #00f3ff; margin: 0;">✈️ VIAGEM</h2>
                <button id="fechar-modal-transporte" style="
                    background: none;
                    border: none;
                    color: #ff0055;
                    font-size: 24px;
                    cursor: pointer;
                ">✖</button>
            </div>
            
            <p style="color: #fff; margin-bottom: 15px;">
                Destino: <strong style="color: #ff0055;">${nomeDestino}</strong>
            </p>
            
            <div style="margin-bottom: 20px;">
                <label style="color: #00f3ff; display: block; margin-bottom: 8px;">🚗 Meio de Transporte:</label>
                <select id="transporte-select" style="
                    width: 100%;
                    padding: 12px;
                    background: #1a1a2a;
                    border: 1px solid #00f3ff;
                    color: #fff;
                    border-radius: 8px;
                    font-family: monospace;
                ">
                    ${opcoesTransporte.map(op => `
                        <option value="${op.valor}" data-custo="${op.custo}" data-duracao="${op.duracao}">
                            ${op.icone} ${op.nome} - C$${op.custo} - ${op.duracao}
                        </option>
                    `).join('')}
                </select>
            </div>
            
            <div id="info-viagem" style="
                background: rgba(0, 243, 255, 0.05);
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 20px;
            ">
                <p style="color: #888; margin: 5px 0;">💰 Custo: <span id="custo-viagem">0</span> C$</p>
                <p style="color: #888; margin: 5px 0;">⏱️ Duração: <span id="duracao-viagem">0</span></p>
                <p style="color: #888; margin: 5px 0;">💵 Seu saldo: <span id="saldo-atual">0</span> C$</p>
            </div>
            
            <button id="confirmar-viagem" style="
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, #00f3ff, #ff0055);
                border: none;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                border-radius: 8px;
                font-size: 16px;
                margin-bottom: 10px;
            ">✅ CONFIRMAR VIAGEM</button>
            
            <button id="cancelar-viagem" style="
                width: 100%;
                padding: 12px;
                background: none;
                border: 1px solid #ff0055;
                color: #ff0055;
                cursor: pointer;
                border-radius: 8px;
            ">Cancelar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Buscar saldo do jogador
    const socket = window.socket;
    if (socket) {
        socket.emit('verSaldo', playerId);
        socket.once('saldoAtual', (data) => {
            const saldoSpan = document.getElementById('saldo-atual');
            if (saldoSpan) saldoSpan.textContent = data.dinheiroVivo || data.saldoTotal || 0;
        });
    } else {
        document.getElementById('saldo-atual').textContent = sessionStorage.getItem('playerDinheiro') || 150;
    }
    
    // Atualizar informações quando mudar transporte
    const selectTransporte = document.getElementById('transporte-select');
    if (selectTransporte) {
        selectTransporte.addEventListener('change', () => {
            const option = selectTransporte.options[selectTransporte.selectedIndex];
            const custo = option.dataset.custo;
            const duracao = option.dataset.duracao;
            document.getElementById('custo-viagem').textContent = custo;
            document.getElementById('duracao-viagem').textContent = duracao;
        });
        selectTransporte.dispatchEvent(new Event('change'));
    }
    
    // Confirmar viagem
    document.getElementById('confirmar-viagem').onclick = () => {
        const transporte = selectTransporte.value;
        const option = selectTransporte.options[selectTransporte.selectedIndex];
        const custo = parseInt(option.dataset.custo);
        
        if (socket) {
            // Emitir evento de viagem para o backend
            const viagemData = {
                playerId: playerId,
                paisDestino: dados.pais || nomeDestino,
                cidadeDestino: dados.cidade || nomeDestino,
                meioTransporte: transporte
            };
            
            socket.emit('viajar', viagemData);
            
            socket.once('viagemIniciada', (response) => {
                if (response.sucesso) {
                    modal.remove();
                    modalViagemAberto = false;
                    iniciarBarraProgresso(response.destino, response.duracaoHoras, response.custo, () => {
                        // Recarregar o mapa após viagem
                        if (window.carregarMapaGame) {
                            window.carregarMapaGame();
                        }
                        alert(`✅ Você chegou em ${response.destino}!`);
                    });
                } else {
                    alert(`❌ Erro: ${response.erro}`);
                }
            });
            
            socket.once('erroServidor', (erro) => {
                alert(`❌ Erro: ${erro}`);
            });
            
        } else {
            // Fallback mock (para teste sem backend)
            modal.remove();
            modalViagemAberto = false;
            alert(`✈️ Viajando para ${nomeDestino} de ${transporte}! (Custo: C$${custo})`);
        }
    };
    
    // Fechar modal
    document.getElementById('fechar-modal-transporte').onclick = () => {
        modal.remove();
        modalViagemAberto = false;
    };
    document.getElementById('cancelar-viagem').onclick = () => {
        modal.remove();
        modalViagemAberto = false;
    };
}

function getOpcoesTransporte(tipo) {
    const opcoes = {
        pais: [
            { valor: 'aviao', nome: 'Avião', icone: '✈️', custo: 500, duracao: '4-8 horas' },
            { valor: 'navio', nome: 'Navio', icone: '🚢', custo: 300, duracao: '24-48 horas' }
        ],
        estado: [
            { valor: 'aviao', nome: 'Avião', icone: '✈️', custo: 200, duracao: '1-2 horas' },
            { valor: 'onibus', nome: 'Ônibus', icone: '🚌', custo: 80, duracao: '4-8 horas' },
            { valor: 'carro', nome: 'Carro próprio', icone: '🚗', custo: 50, duracao: '3-6 horas' }
        ],
        cidade: [
            { valor: 'onibus', nome: 'Ônibus', icone: '🚌', custo: 30, duracao: '1-2 horas' },
            { valor: 'carro', nome: 'Carro próprio', icone: '🚗', custo: 20, duracao: '30-60 min' },
            { valor: 'taxi', nome: 'Táxi/Uber', icone: '🚕', custo: 50, duracao: '20-40 min' }
        ]
    };
    return opcoes[tipo] || opcoes.cidade;
}

function iniciarBarraProgresso(destino, duracaoHoras, custo, aoConcluir) {
    const duracaoSegundos = Math.min(10, Math.max(3, Math.floor(duracaoHoras * 2))); // Mock: 3-10 segundos
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(3, 4, 7, 0.95);
        z-index: 20001;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(10px);
    `;
    
    modal.innerHTML = `
        <div style="background: #0a0a1a; border: 2px solid #00f3ff; border-radius: 16px; padding: 30px; text-align: center; width: 80%; max-width: 350px;">
            <div style="font-size: 48px; margin-bottom: 20px;">✈️</div>
            <h2 style="color: #00f3ff;">Viajando...</h2>
            <p style="color: #fff;">Destino: <strong style="color: #ff0055;">${destino}</strong></p>
            <p style="color: #888;">Custo: C$${custo}</p>
            <div style="width: 100%; height: 8px; background: #1a1a2a; border-radius: 4px; overflow: hidden; margin: 20px 0;">
                <div id="barra-viagem" style="width: 0%; height: 100%; background: linear-gradient(90deg, #00f3ff, #ff0055); transition: width 1s linear;"></div>
            </div>
            <p id="tempo-restante" style="color: #888;">${duracaoSegundos} segundos restantes</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    let tempoRestante = duracaoSegundos;
    const barra = document.getElementById('barra-viagem');
    const tempoSpan = document.getElementById('tempo-restante');
    const inicio = Date.now();
    const fim = inicio + (duracaoSegundos * 1000);
    
    const interval = setInterval(() => {
        const agora = Date.now();
        const restante = Math.max(0, fim - agora);
        const porcentagem = ((duracaoSegundos * 1000 - restante) / (duracaoSegundos * 1000)) * 100;
        
        if (barra) barra.style.width = `${porcentagem}%`;
        if (tempoSpan) tempoSpan.textContent = `${Math.ceil(restante / 1000)} segundos restantes`;
        
        if (restante <= 0) {
            clearInterval(interval);
            setTimeout(() => {
                modal.remove();
                if (aoConcluir) aoConcluir();
            }, 500);
        }
    }, 100);
}

export function fecharModalViagem() {
    const modal = document.getElementById('modal-transporte');
    if (modal) modal.remove();
    modalViagemAberto = false;
}

export function mostrarNotificacaoViagem(destino, tipo, aoConfirmar) {
    // Remove notificação anterior se existir
    const notifExistente = document.getElementById('notificacao-viagem');
    if (notifExistente) notifExistente.remove();
    
    const notificacao = document.createElement('div');
    notificacao.id = 'notificacao-viagem';
    notificacao.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 320px;
        background: #0a0a1a;
        border: 1px solid #00f3ff;
        border-radius: 12px;
        padding: 15px;
        z-index: 20000;
        font-family: 'JetBrains Mono', monospace;
        backdrop-filter: blur(10px);
        animation: slideInRight 0.3s ease;
        box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
    `;
    
    const icone = tipo === 'estado' ? '🏛️' : '🏙️';
    
    notificacao.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <span style="font-size: 28px;">${icone}</span>
            <div style="flex: 1;">
                <strong style="color: #00f3ff;">${destino}</strong>
                <p style="color: #888; font-size: 11px; margin: 0;">Você não está neste local</p>
            </div>
            <button id="fechar-notificacao" style="background: none; border: none; color: #555; cursor: pointer; font-size: 16px;">✖</button>
        </div>
        <p style="color: #fff; font-size: 12px; margin-bottom: 15px;">Deseja viajar para ${destino}?</p>
        <div style="display: flex; gap: 10px;">
            <button id="confirmar-viagem-notif" style="
                flex: 1;
                background: linear-gradient(135deg, #00f3ff, #ff0055);
                border: none;
                color: #fff;
                padding: 8px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
            ">✈️ Sim, Viajar</button>
            <button id="cancelar-viagem-notif" style="
                flex: 1;
                background: none;
                border: 1px solid #555;
                color: #888;
                padding: 8px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 12px;
            ">❌ Não</button>
        </div>
    `;
    
    document.body.appendChild(notificacao);
    
    // Adicionar animação se não existir
    if (!document.getElementById('animacao-notificacao')) {
        const style = document.createElement('style');
        style.id = 'animacao-notificacao';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Auto-fechar após 10 segundos
    const timeout = setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notificacao.remove(), 300);
        }
    }, 10000);
    
    document.getElementById('confirmar-viagem-notif').onclick = () => {
        clearTimeout(timeout);
        notificacao.remove();
        if (aoConfirmar) aoConfirmar();
    };
    
    document.getElementById('cancelar-viagem-notif').onclick = () => {
        clearTimeout(timeout);
        notificacao.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    };
    
    document.getElementById('fechar-notificacao').onclick = () => {
        clearTimeout(timeout);
        notificacao.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    };
}

export function mostrarModalConfirmacao(titulo, mensagem) {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(3, 4, 7, 0.95);
            z-index: 20000;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(10px);
            font-family: 'JetBrains Mono', monospace;
        `;
        
        modal.innerHTML = `
            <div style="
                background: #0a0a1a;
                border: 2px solid #00f3ff;
                border-radius: 16px;
                padding: 25px;
                width: 90%;
                max-width: 350px;
                text-align: center;
            ">
                <div style="font-size: 48px; margin-bottom: 15px;">${titulo.includes('VIAGEM') ? '✈️' : '⚠️'}</div>
                <h3 style="color: #00f3ff; margin-bottom: 15px;">${titulo}</h3>
                <p style="color: #fff; margin-bottom: 25px;">${mensagem}</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="confirmar-modal" style="
                        background: linear-gradient(135deg, #00f3ff, #ff0055);
                        border: none;
                        color: #fff;
                        padding: 10px 20px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: bold;
                    ">✅ Sim, Viajar</button>
                    <button id="cancelar-modal" style="
                        background: none;
                        border: 1px solid #ff0055;
                        color: #ff0055;
                        padding: 10px 20px;
                        border-radius: 8px;
                        cursor: pointer;
                    ">❌ Não</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('confirmar-modal').onclick = () => {
            modal.remove();
            resolve(true);
        };
        
        document.getElementById('cancelar-modal').onclick = () => {
            modal.remove();
            resolve(false);
        };
    });
}

