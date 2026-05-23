// client/js/chat/chatLocal.js
// Sistema de chat local para qualquer tipo de local

let chatAberto = false;
let chatMinimizado = false;
let salaAtual = null;

export function iniciarChatLocal(localId, localNome, localTipo) {
    if (chatAberto) return;
    
    salaAtual = `${localTipo}_${localId}`;
    chatAberto = true;
    chatMinimizado = false;
    
    criarChatContainer(localNome);
    
    const socket = window.socket;
    if (socket) {
        socket.emit('entrarSala', salaAtual);
        
        socket.on('novaMensagemLocal', (data) => {
            adicionarMensagem(data.nome, data.mensagem);
            if (chatMinimizado) {
                notificarNovaMensagem();
            }
        });
        
        socket.on('atualizarContadorSala', (contador) => {
            atualizarContador(contador);
        });
    }
}

function criarChatContainer(localNome) {
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
        transition: all 0.3s ease;
    `;
    
    chatContainer.innerHTML = `
        <div style="
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
                <span style="color: #888; font-size: 10px; margin-left: 8px;">${localNome}</span>
            </div>
            <div>
                <button id="minimizar-chat" style="background: none; border: none; color: #00f3ff; cursor: pointer; margin-right: 8px;">−</button>
                <button id="fechar-chat" style="background: none; border: none; color: #ff0055; cursor: pointer;">✖</button>
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
    
    // Eventos
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
    const minimizarBtn = document.getElementById('minimizar-chat');
    
    if (!chatMinimizado) {
        // Minimizar
        container.style.width = '60px';
        container.style.height = '60px';
        container.style.right = '20px';
        container.style.bottom = '20px';
        container.style.borderRadius = '30px';
        container.style.overflow = 'hidden';
        
        // Esconder conteúdo e mostrar versão minimalista
        const mensagensDiv = document.getElementById('chat-mensagens');
        const inputDiv = container.querySelector('div:last-child');
        const headerDiv = container.querySelector('div:first-child');
        
        mensagensDiv.style.display = 'none';
        inputDiv.style.display = 'none';
        
        // Mudar o header para estilo de botão
        headerDiv.style.padding = '0';
        headerDiv.style.height = '60px';
        headerDiv.style.justifyContent = 'center';
        headerDiv.innerHTML = `
            <div style="text-align: center;">
                <span style="color: #00f3ff; font-size: 24px;">💬</span>
                <span id="chat-mini-contador" style="color: #fff; font-size: 10px; display: block;">0</span>
            </div>
        `;
        
        chatMinimizado = true;
    } else {
        // Restaurar
        container.style.width = '320px';
        container.style.height = '400px';
        container.style.right = '20px';
        container.style.bottom = '80px';
        container.style.borderRadius = '12px';
        
        const mensagensDiv = document.getElementById('chat-mensagens');
        const inputDiv = container.querySelector('div:last-child');
        const headerDiv = container.querySelector('div:first-child');
        
        mensagensDiv.style.display = 'flex';
        inputDiv.style.display = 'block';
        
        // Restaurar header
        const localNome = headerDiv.querySelector('span span')?.innerText || '';
        headerDiv.style.padding = '12px';
        headerDiv.style.justifyContent = 'space-between';
        headerDiv.innerHTML = `
            <div>
                <span style="color: #00f3ff;">💬 CHAT LOCAL</span>
                <span style="color: #888; font-size: 10px; margin-left: 8px;">${localNome}</span>
            </div>
            <div>
                <button id="minimizar-chat" style="background: none; border: none; color: #00f3ff; cursor: pointer; margin-right: 8px;">−</button>
                <button id="fechar-chat" style="background: none; border: none; color: #ff0055; cursor: pointer;">✖</button>
            </div>
        `;
        
        document.getElementById('minimizar-chat').onclick = () => minimizarChat();
        document.getElementById('fechar-chat').onclick = () => fecharChatLocal();
        
        chatMinimizado = false;
    }
}

function notificarNovaMensagem() {
    if (chatMinimizado) {
        const miniDiv = document.querySelector('#chat-local-container div:first-child');
        if (miniDiv) {
            miniDiv.style.background = 'rgba(255, 0, 85, 0.3)';
            setTimeout(() => {
                if (chatMinimizado) {
                    miniDiv.style.background = 'rgba(0, 243, 255, 0.1)';
                }
            }, 2000);
        }
    }
}

function atualizarContador(contador) {
    const contadorSpan = document.getElementById('contador-pessoas');
    if (contadorSpan) contadorSpan.textContent = contador;
    
    const miniContador = document.getElementById('chat-mini-contador');
    if (miniContador) miniContador.textContent = contador;
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
}