/* ==========================================================================
   LOGICA DA INTRO / TRANSIÇÃO - THE FEED (MÓDULO ISOLADO)
   ========================================================================== */

const video = document.getElementById('video-intro');
const somChuva = document.getElementById('som-chuva');
const somLofi = document.getElementById('som-lofi');
const btnSom = document.getElementById('btn-som');

// Função para ligar e desligar o som do vídeo + trilha sonora
function alternarSom() {
    if (video.muted) {
        // Desmuta o vídeo principal
        video.muted = false;
        btnSom.innerText = "🔊";
        
        // Liga as músicas de fundo com volumes balanceados
        somChuva.volume = 0.35;
        somLofi.volume = 0.45;
        
        somChuva.play().catch(e => console.log("Interação necessária para áudio"));
        somLofi.play().catch(e => console.log("Interação necessária para áudio"));
    } else {
        // Muta tudo se o jogador clicar de novo
        video.muted = true;
        btnSom.innerText = "🔇";
        somChuva.pause();
        somLofi.pause();
    }
}

// TRANSIÇÃO CINEMATOGRÁFICA: Da introdução para a interface de login
function irParaLogin() {
    const btnPular = document.querySelector('.btn-pular');
    // CORREÇÃO: Alterado de 'container-login' para 'autenticacao-container' para casar com o novo HTML
    const containerAutenticacao = document.getElementById('autenticacao-container');

    // 1. Aplica as classes CSS no vídeo para iniciar o desfoque e escurecimento gradual (efeito blur)
    video.classList.add('transicao-video');
    video.classList.add('video-desfocado');

    // 2. Faz os botões da interface de introdução sumirem suavemente
    btnSom.classList.add('interface-intro-sumir');
    btnPular.classList.add('interface-intro-sumir');

    // Ajusta os áudios para ficarem em volume de fundo aconchegante no menu
    if (!video.muted) {
        somChuva.volume = 0.15;
        somLofi.volume = 0.25;
    }

    // 3. TIMING MOBILE: Aguarda metade da transição visual (500ms) para disparar a caixinha de login
    setTimeout(() => {
       video.pause(); 
        
        if (containerAutenticacao) {
            containerAutenticacao.style.display = 'block';
            
            setTimeout(() => {
                containerAutenticacao.classList.add('mostrar');
            }, 50);
        } else {
            console.error("[THE FEED ERROR] Não foi possível encontrar o elemento 'autenticacao-container' no HTML.");
        }

    }, 500); 
}