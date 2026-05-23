// client/js/chat/chatLocal.js

let chatAberto = false;
let chatMinimizado = false;
let salaAtual = null;
let localNomeCache = '';
let intervaloPisca = null;
let mensagensRecebidasMinimizado = 0; // Conta quantas mensagens novas recebeu

export function iniciarChatLocal(localId, localNome, localTipo) {
    if (chatAberto) return;
    
    salaAtual = `${localTipo}_${localId}`;
    localNomeCache = localNome;
    chatAberto = true;
    chatMinimizado = false;
    mensagensRecebidasMinimizado = 0;
    
    criarChatContainer();
    
    const socket = window.socket;
    if (socket) {
        socket.emit('entrarSala', salaAtual);
        
        socket.on('novaMensagemLocal', (data) => {
            // Se o chat está minimizado, guarda contagem e notifica
            if (chatMinimizado) {
                mensagensRecebidasMinimizado++;
                atualizarMiniContador();
                notificarNovaMensagemLoop();
            } else {
                // Se está aberto, adiciona direto
                adicionarMensagem(data.nome, data.mensagem);
            }
        });
        
        socket.on('atualizarContadorSala', (contador) => {
            atualizarContador(contador);
        });
    }
}

function criarChatContainer() {
    const oldContainer = document.getElementById('chat-local-container');
    if (oldContainer) oldContainer.remove();
    
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-local-container';
    chatContainer.style.cssText = `
        position: fixed;
        right: 20px;
        bottom: 80px;
        width: 320px;
        height: 400px;
        background: rgba(3, 4, 7, 0.95);
        border: 1px solid #00f3ff;
        border-radius: 12px;
        z-index: 20000;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
        font-family: 'JetBrains Mono', monospace;
        box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
    `;
    
    chatContainer.innerHTML = `
        <div id="chat-header" style="
            padding: 12px;
            background: rgba(0, 243, 255, 0.1);
            border-bottom: 1px solid #00f3ff;
            border-radius: 12px 12px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        ">
            <div>
                <span style="color: #00f3ff;">💬 CHAT LOCAL</span>
                <span style="color: #888; font-size: 10px; margin-left: 8px;">${localNomeCache}</span>
            </div>
            <div>
                <button id="minimizar-chat" style="background: none; border: none; color: #00f3ff; cursor: pointer; font-size: 18px; font-weight: bold; padding: 4px 8px;">−</button>
                <button id="fechar-chat" style="background: none; border: none; color: #ff0055; cursor: pointer; font-size: 16px; padding: 4px 8px;">✖</button>
            </div>
        </div>
        
        <div id="chat-mensagens" style="
            flex: 1;
            overflow-y: auto;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        ">
            <div style="text-align: center; color: #888; font-size: 11px;">
                🎉 Bem-vindo ao chat local!
            </div>
            <div style="text-align: center; color: #888; font-size: 11px;">
                Pessoas neste local: <span id="contador-pessoas">0</span>
            </div>
        </div>
        
        <div style="padding: 12px; border-top: 1px solid #333;">
            <div style="display: flex; gap: 8px;">
                <input type="text" id="chat-input" placeholder="Digite sua mensagem..." style="
                    flex: 1;
                    background: rgba(0,0,0,0.5);
                    border: 1px solid #00f3ff;
                    border-radius: 8px;
                    padding: 8px;
                    color: #fff;
                    font-family: monospace;
                ">
                <button id="enviar-mensagem" style="
                    background: linear-gradient(135deg, #00f3ff, #ff0055);
                    border: none;
                    border-radius: 8px;
                    padding: 8px 16px;
                    color: #fff;
                    cursor: pointer;
                ">Enviar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatContainer);
    
    document.getElementById('minimizar-chat').onclick = () => minimizarChat();
    document.getElementById('fechar-chat').onclick = () => fecharChatLocal();
    document.getElementById('enviar-mensagem').onclick = () => enviarMensagem();
    
    const input = document.getElementById('chat-input');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensagem();
    });
}

function minimizarChat() {
    const container = document.getElementById('chat-local-container');
    if (!container) return;
    
    if (!chatMinimizado) {
        // Salvar o conteúdo atual para restaurar depois
        const conteudoSalvo = container.innerHTML;
        container.setAttribute('data-conteudo', conteudoSalvo);
        
        container.style.width = '60px';
        container.style.height = '60px';
        container.style.right = '20px';
        container.style.bottom = '20px';
        container.style.borderRadius = '30px';
        container.style.overflow = 'hidden';
        
        container.innerHTML = `
            <div id="chat-mini" style="
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: rgba(0, 243, 255, 0.15);
                border-radius: 30px;
                cursor: pointer;
            ">
                <span style="color: #00f3ff; font-size: 28px;">💬</span>
                <span id="chat-mini-contador" style="color: #fff; font-size: 11px; margin-top: 2px;">0</span>
            </div>
        `;
        
        document.getElementById('chat-mini').onclick = () => restaurarChat();
        
        chatMinimizado = true;
        mensagensRecebidasMinimizado = 0;
        atualizarMiniContador();
    }
}

function restaurarChat() {
    const container = document.getElementById('chat-local-container');
    if (!container) return;
    
    const conteudoSalvo = container.getAttribute('data-conteudo');
    if (conteudoSalvo) {
        container.style.width = '320px';
        container.style.height = '400px';
        container.style.right = '20px';
        container.style.bottom = '80px';
        container.style.borderRadius = '12px';
        container.style.overflow = 'visible';
        
        container.innerHTML = conteudoSalvo;
        container.removeAttribute('data-conteudo');
        
        // Reconectar eventos
        document.getElementById('minimizar-chat').onclick = () => minimizarChat();
        document.getElementById('fechar-chat').onclick = () => fecharChatLocal();
        document.getElementById('enviar-mensagem').onclick = () => enviarMensagem();
        
        const input = document.getElementById('chat-input');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') enviarMensagem();
            });
        }
        
        // Reentrar na sala para restaurar contador
        const socket = window.socket;
        if (socket && salaAtual) {
            socket.emit('entrarSala', salaAtual);
        }
        
        // Limpar notificação
        if (intervaloPisca) {
            clearInterval(intervaloPisca);
            intervaloPisca = null;
        }
        
        // Resetar contador de mensagens pendentes
        mensagensRecebidasMinimizado = 0;
        atualizarMiniContador();
        
        const miniDiv = document.getElementById('chat-mini');
        if (miniDiv) {
            miniDiv.style.background = 'rgba(0, 243, 255, 0.15)';
        }
    }
    
    chatMinimizado = false;
}

function atualizarMiniContador() {
    const miniContador = document.getElementById('chat-mini-contador');
    if (miniContador) {
        if (mensagensRecebidasMinimizado > 0) {
            miniContador.textContent = mensagensRecebidasMinimizado;
            miniContador.style.display = 'block';
        } else {
            miniContador.textContent = '0';
        }
    }
}

function notificarNovaMensagemLoop() {
    if (!chatMinimizado) return;
    
    if (intervaloPisca) {
        clearInterval(intervaloPisca);
        intervaloPisca = null;
    }
    
    intervaloPisca = setInterval(() => {
        if (!chatMinimizado) {
            if (intervaloPisca) {
                clearInterval(intervaloPisca);
                intervaloPisca = null;
            }
            return;
        }
        
        const miniDiv = document.getElementById('chat-mini');
        if (miniDiv) {
            const bgAtual = miniDiv.style.background;
            if (bgAtual === 'rgba(255, 0, 85, 0.6)') {
                miniDiv.style.background = 'rgba(0, 243, 255, 0.15)';
            } else {
                miniDiv.style.background = 'rgba(255, 0, 85, 0.6)';
            }
        }
    }, 800);
}

function atualizarContador(contador) {
    const contadorSpan = document.getElementById('contador-pessoas');
    if (contadorSpan) contadorSpan.textContent = contador;
}

function enviarMensagem() {
    const input = document.getElementById('chat-input');
    const mensagem = input.value.trim();
    if (!mensagem) return;
    
    const socket = window.socket;
    if (socket && salaAtual) {
        socket.emit('mensagemLocal', {
            sala: salaAtual,
            mensagem: mensagem
        });
        input.value = '';
    }
}

function adicionarMensagem(nome, mensagem) {
    const container = document.getElementById('chat-mensagens');
    if (!container) return;
    
    const div = document.createElement('div');
    div.style.cssText = `
        background: rgba(0, 243, 255, 0.05);
        border-radius: 8px;
        padding: 6px 10px;
        font-size: 12px;
    `;
    div.innerHTML = `<span style="color: #00f3ff;">${nome}:</span> <span style="color: #fff;">${mensagem}</span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

export function fecharChatLocal() {
    if (!chatAberto) return;
    
    if (intervaloPisca) {
        clearInterval(intervaloPisca);
        intervaloPisca = null;
    }
    
    const socket = window.socket;
    if (socket && salaAtual) {
        socket.emit('sairSala', salaAtual);
        socket.off('novaMensagemLocal');
        socket.off('atualizarContadorSala');
    }
    
    const container = document.getElementById('chat-local-container');
    if (container) container.remove();
    
    chatAberto = false;
    chatMinimizado = false;
    salaAtual = null;
    mensagensRecebidasMinimizado = 0;
}