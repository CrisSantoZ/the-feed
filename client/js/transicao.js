
const listaDeImagens = Array.from({ length: 20 }, (_, i) => `img${i + 1}.png`);

function iniciarTransicaoCinematica(personagemId) {
    const container = document.getElementById('transicao-container');
    const imgElement = document.getElementById('imagem-transicao');

    document.getElementById('selecao-container').style.display = 'none';
    container.classList.add('ativo');

    let contador = 0;
    const totalImagens = 4;

    // Pré-carrega todas as imagens da fila para eliminar atrasos durante a transição
    const imagensPreCarregadas = listaDeImagens.map(nome => {
        const img = new Image();
        img.src = `assets/img/${nome}`;
        return img;
    });

    function rodarEfeito() {
        if (contador < totalImagens) {

            // 1. CORREÇÃO PRINCIPAL: reseta para invisível ANTES de trocar o src
            //    Garante que a imagem anterior some antes da nova aparecer
            imgElement.style.transition = 'none';
            imgElement.style.opacity = '0';
            imgElement.style.transform = 'scale(1)';

            // 2. Escolhe a imagem aleatória
            const aleatoria = listaDeImagens[Math.floor(Math.random() * listaDeImagens.length)];

            // 3. Remove handler anterior para não acumular listeners
            imgElement.onload = null;

            // 4. CORREÇÃO PRINCIPAL: só faz o fade-in depois que a imagem carregou de verdade
            imgElement.onload = () => {
                // Pequena pausa para o browser confirmar o render da nova imagem
                requestAnimationFrame(() => {
                    // Reativa as transições CSS
                    imgElement.style.transition = '';

                    // Efeito de interferência elétrica no container
                    container.style.animation = 'none';
                    void container.offsetWidth; // força reflow para resetar animação
                    container.style.animation = 'strobe-club-bg 0.5s ease-out';

                    // Revela a nova imagem com zoom suave
                    imgElement.style.opacity = '1';
                    imgElement.style.transform = 'scale(1.05)';

                    // Aguarda a imagem ficar visível na tela (2.5s) e então faz o fade-out
                    setTimeout(() => {
                        imgElement.style.opacity = '0';
                        imgElement.style.transform = 'scale(1.15)'; // CORREÇÃO: removido var() inválido em inline style
                        
                        contador++;

                        // Espera o fade-out terminar (800ms) antes da próxima foto
                        setTimeout(rodarEfeito, 800);
                    }, 2500);
                });
            };

            // 5. Segurança: se a imagem já estiver em cache o onload pode não disparar
            //    Então verifica se já está carregada logo após setar o src
            imgElement.src = `assets/img/${aleatoria}`;

            if (imgElement.complete && imgElement.naturalWidth > 0) {
                imgElement.onload();
            }

        } else {
            // FIM DA TRANSIÇÃO
            imgElement.onload = null;
            container.classList.remove('ativo');

            setTimeout(() => {
                if (typeof window.socket !== 'undefined') {
                    console.log(`[THE FEED] Transição concluída. Inicializando sessão: ${personagemId}`);
                    window.socket.emit('iniciarSessaoJogo', personagemId);
                } else {
                    console.error("[ERRO DE REDE] window.socket não encontrado!");
                }
            }, 800);
        }
    }

    // Delay inicial de suspense
    setTimeout(rodarEfeito, 300);
}