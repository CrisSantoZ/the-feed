// client/js/chat/chatLocal.js
// Sistema de chat local para qualquer tipo de local

let chatAberto = false;
let salaAtual = null;

export function iniciarChatLocal(localId, localNome, localTipo) {
    if (chatAberto) return;
    
    salaAtual = `${localTipo}_${localId}`;
    chatAberto = true;
    
    // Criar container do chat
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-local-container';
    chatContainer.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
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
            <button id="fechar-chat" style="background: none; border: none; color: #ff0055; cursor: pointer;">✖</button>
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
    
    // Entrar na sala via socket
    const socket = window.socket;
    if (socket) {
        socket.emit('entrarSala', salaAtual);
        
        // Receber mensagens
        socket.on('novaMensagemLocal', (data) => {
            adicionarMensagem(data.nome, data.mensagem);
        });
        
        // Atualizar contador de pessoas
        socket.on('atualizarContadorSala', (contador) => {
            const contadorSpan = document.getElementById('contador-pessoas');
            if (contadorSpan) contadorSpan.textContent = contador;
        });
    }
    
    // Eventos
    document.getElementById('fechar-chat').onclick = () => {
        fecharChatLocal();
    };
    
    document.getElementById('enviar-mensagem').onclick = () => {
        enviarMensagem();
    };
    
    const input = document.getElementById('chat-input');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensagem();
    });
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
    salaAtual = null;
}