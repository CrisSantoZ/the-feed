/* ==========================================================================
   LÓGICA DE INTERFACE, CONTAS, SELEÇÃO E CRIAÇÃO (FACECLAIM) - THE FEED
   ========================================================================== */

const socket = window.socket;

// ==================== DADOS DE PAÍSES ====================
let paisesData = [];

/* ==========================================================================
   FUNÇÕES DE AUTENTICAÇÃO
   ========================================================================== */

function alternarAba(tipo) {
    const tabLogin = document.getElementById('tab-login');
    const tabCadastro = document.getElementById('tab-cadastro');
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');

    if (tipo === 'login') {
        tabLogin.classList.add('active');
        tabCadastro.classList.remove('active');
        formLogin.style.display = 'block';
        formCadastro.style.display = 'none';
    } else {
        tabCadastro.classList.add('active');
        tabLogin.classList.remove('active');
        formCadastro.style.display = 'block';
        formLogin.style.display = 'none';
    }
}

function executarCadastro() {
    const dados = {
        nome: document.getElementById('cad-nome').value.trim(),
        sobrenome: document.getElementById('cad-sobrenome').value.trim(),
        dataNascimento: document.getElementById('cad-data').value,
        email: document.getElementById('cad-email').value.trim(),
        username: document.getElementById('cad-usuario').value.trim(),
        senha: document.getElementById('cad-senha').value
    };

    if (!dados.nome || !dados.sobrenome || !dados.dataNascimento || !dados.email || !dados.username || !dados.senha) {
        alert("SISTEMA CENTRAL: Preencha todos os campos do registro.");
        return;
    }

    alternarBloqueioCampos('cadastro', true);
    socket.emit('cadastrarCidadao', dados);
}

function executarLogin() {
    const dadosLogin = {
        username: document.getElementById('login-usuario').value.trim(),
        senha: document.getElementById('login-senha').value
    };

    if (!dadosLogin.username || !dadosLogin.senha) {
        alert("SISTEMA CENTRAL: Insira seu usuário e senha.");
        return;
    }

    alternarBloqueioCampos('login', true);
    socket.emit('entrarNoJogo', dadosLogin);
}

function alternarBloqueioCampos(formulario, status) {
    const conteiner = document.getElementById(`form-${formulario}`);
    if (!conteiner) return;
    conteiner.querySelectorAll('input').forEach(input => input.disabled = status);
    const botao = conteiner.querySelector('button');
    if (botao) botao.disabled = status;
}

/* ==========================================================================
   CARREGAR PAÍSES E CIDADES
   ========================================================================== */

async function carregarPaises() {
    try {
        // ✅ USA A VARIÁVEL GLOBAL que já foi carregada via script tag
        if (window.paisesDataGlobal && window.paisesDataGlobal.length > 0) {
            paisesData = window.paisesDataGlobal;
            console.log(`[THE FEED] ${paisesData.length} países carregados da variável global.`);
        } else {
            // Fallback: tenta fetch (caso não tenha sido carregado via script)
            console.log("[THE FEED] Tentando carregar via fetch...");
            const response = await fetch('/js/countries.js');
            const texto = await response.text();
            // Remove a atribuição e eval (apenas para fallback)
            const jsonTexto = texto.replace('window.paisesDataGlobal = ', '').trim();
            paisesData = JSON.parse(jsonTexto);
            console.log(`[THE FEED] ${paisesData.length} países carregados via fetch.`);
        }
        
        const selectPais = document.getElementById('pais-origem');
        if (!selectPais) return;
        
        selectPais.innerHTML = '<option value="">🌍 Selecione um país</option>';
        
        paisesData.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.id;
            option.textContent = `${pais.nome} | ${pais.moeda} | Idioma: ${pais.idioma}`;
            selectPais.appendChild(option);
        });
        
    } catch (erro) {
        console.error('Erro ao carregar países:', erro);
        const selectPais = document.getElementById('pais-origem');
        if (selectPais) {
            selectPais.innerHTML = '<option value="">❌ Erro ao carregar países</option>';
        }
    }
}

function carregarCidades() {
    const paisId = document.getElementById('pais-origem').value;
    const selectCidade = document.getElementById('cidade-origem');
    
    if (!paisId) {
        selectCidade.innerHTML = '<option value="">🌍 Primeiro selecione um país</option>';
        selectCidade.disabled = true;
        return;
    }
    
    const pais = paisesData.find(p => p.id === paisId);
    
    if (!pais || !pais.regioes) {
        selectCidade.innerHTML = '<option value="">❌ Nenhuma cidade disponível</option>';
        selectCidade.disabled = true;
        return;
    }
    
    // Coleta todas as cidades de todas as regiões
    const todasCidades = [];
    pais.regioes.forEach(regiao => {
        regiao.cidades.forEach(cidade => {
            todasCidades.push({ nome: cidade, regiao: regiao.nome });
        });
    });
    
    selectCidade.innerHTML = '<option value="">🏙️ Selecione uma cidade</option>';
    selectCidade.disabled = false;
    
    todasCidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade.nome;
        option.textContent = `${cidade.nome} (${cidade.regiao})`;
        selectCidade.appendChild(option);
    });
}

/* ==========================================================================
   GERENCIAMENTO DE TELAS (SPA) & RENDERIZAÇÃO
   ========================================================================== */

function exibirTelaSelecao(personagens) {
    const telaAuth = document.getElementById('autenticacao-container');
    const telaCriacao = document.getElementById('criacao-container');
    const telaSelecao = document.getElementById('selecao-container');

    if (telaAuth) { telaAuth.style.display = 'none'; telaAuth.classList.remove('mostrar'); }
    if (telaCriacao) { telaCriacao.style.display = 'none'; telaCriacao.classList.remove('mostrar'); }

    if (telaSelecao) {
        telaSelecao.style.display = 'block';

        setTimeout(() => {
            telaSelecao.classList.add('mostrar');
        }, 50);

        const listaHtml = document.getElementById('lista-personagens');
        listaHtml.innerHTML = '';

        personagens.forEach(p => {
            listaHtml.innerHTML += `
                <div class="card-personagem-wrapper" style="position: relative; display: flex; align-items: center; margin-bottom: 10px;">
                    <div class="card-personagem" onclick="selecionarParaJogar('${p._id}')" style="flex: 1;">
                        <img src="${p.avatarUrl}" alt="Avatar de ${p.nome}" class="avatar-selecao">
                        <div class="info-personagem">
                            <h3>${p.nome} ${p.sobrenome}</h3>
                            <p class="tag-faceclaim">Faceclaim: @${p.faceclaim}</p>
                            <p>Emprego: ${p.emprego} | Carteira: C$ ${p.dinheiro}</p>
                        </div>
                    </div>
                    
                    <button class="btn-purgar-cyber" onclick="event.stopPropagation(); executarPurgaIdentidade('${p._id}')" title="Purgar Registro de Identidade" style="background: none; border: 1px solid #ff3333; color: #ff3333; font-size: 1.2rem; padding: 10px; margin-left: 10px; cursor: pointer; transition: 0.2s;">
                        🗑️
                    </button>
                </div>
            `;
        });

        listaHtml.innerHTML += `
            <button class="btn-novo-cyber" onclick="exibirTelaCriacao()">
                [+] REGISTRAR NOVA IDENTIDADE CIVIL
            </button>
        `;
    }
}

function exibirTelaCriacao() {
    const telas = [
        document.getElementById('autenticacao-container'),
        document.getElementById('selecao-container'),
        document.getElementById('criacao-container')
    ];

    telas.forEach(tela => {
        if (tela) {
            tela.style.display = 'none';
            tela.classList.remove('mostrar');
        }
    });

    // Limpa os campos
    document.getElementById('personagem-nome').value = '';
    document.getElementById('personagem-sobrenome').value = '';
    document.getElementById('personagem-data').value = '';
    document.getElementById('criacao-faceclaim').value = '';
    document.getElementById('galeria-faceclaim-resultados').innerHTML = '';
    
    // Reseta selects
    const selectPais = document.getElementById('pais-origem');
    const selectCidade = document.getElementById('cidade-origem');
    if (selectPais) selectPais.value = '';
    if (selectCidade) {
        selectCidade.innerHTML = '<option value="">🌍 Primeiro selecione um país</option>';
        selectCidade.disabled = true;
    }

    const telaCriacao = document.getElementById('criacao-container');
    if (telaCriacao) {
        telaCriacao.style.display = 'block';
        setTimeout(() => {
            telaCriacao.classList.add('mostrar');
        }, 50);
    }
    
    // Carrega países se ainda não foram carregados
    if (paisesData.length === 0) {
        carregarPaises();
    }
}

/* ==========================================================================
   FUNÇÕES DE RETROCEDER E FECHAR PAINÉIS (NAVEGAÇÃO)
   ========================================================================== */

function fecharAutenticacao() {
    const containers = [
        document.getElementById('autenticacao-container'),
        document.getElementById('selecao-container'),
        document.getElementById('criacao-container')
    ];

    containers.forEach(tela => {
        if (tela) {
            tela.style.display = 'none';
            tela.classList.remove('mostrar');
        }
    });

    const telaIntro = document.getElementById('tela-intro');
    const video = document.getElementById('video-intro');
    const btnSom = document.getElementById('btn-som');
    const btnPular = document.querySelector('.btn-pular');

    if (telaIntro) {
        telaIntro.style.display = 'flex';
    }

    if (video) {
        video.classList.remove('video-desfocado', 'transicao-video');
        video.play().catch(e => console.log("Retomando vídeo..."));
    }

    if (btnSom) btnSom.classList.remove('interface-intro-sumir');
    if (btnPular) btnPular.classList.remove('interface-intro-sumir');
}

function voltarParaLogin() {
    sessionStorage.removeItem('accountId');
    sessionStorage.removeItem('username');

    document.getElementById('selecao-container').style.display = 'none';
    document.getElementById('selecao-container').classList.remove('mostrar');
    document.getElementById('autenticacao-container').style.display = 'block';
    setTimeout(() => {
        document.getElementById('autenticacao-container').classList.add('mostrar');
    }, 50);
}

function voltarParaSelecao() {
    const accountId = sessionStorage.getItem('accountId');

    if (!accountId) {
        voltarParaLogin();
        return;
    }
    
    const telaCriacao = document.getElementById('criacao-container');
    telaCriacao.style.display = 'none';
    telaCriacao.classList.remove('mostrar');

    socket.emit('solicitarDadosConta', accountId);
}

/* ==========================================================================
   SISTEMA DE CRIAÇÃO E BUSCA DE FACECLAIM
   ========================================================================== */

function buscarIdentidadeVisual() {
    const famoso = document.getElementById('criacao-faceclaim').value.trim();
    if (!famoso) {
        alert("SISTEMA: Digite o nome de um famoso/modelo para a busca biométrica.");
        return;
    }

    console.log(`[THE FEED] Pesquisando disponibilidade de faceclaim: ${famoso}`);
    socket.emit('buscarFaceclaim', famoso);
}

function finalizarCriacao() {
    const contaId = sessionStorage.getItem('accountId');
    const fotoSelecionada = document.querySelector('input[name="foto-escolhida"]:checked');
    const famoso = document.getElementById('criacao-faceclaim').value.trim();
    
    // PEGA PAÍS E CIDADE SELECIONADOS
    const paisOrigem = document.getElementById('pais-origem').value;
    const cidadeOrigem = document.getElementById('cidade-origem').value;

    const dadosNovoPersonagem = {
        accountId: contaId,
        nome: document.getElementById('personagem-nome').value.trim(),
        sobrenome: document.getElementById('personagem-sobrenome').value.trim(),
        dataNascimento: document.getElementById('personagem-data').value,
        faceclaim: famoso,
        avatarUrl: fotoSelecionada ? fotoSelecionada.value : null,
        paisOrigem: paisOrigem,
        cidadeOrigem: cidadeOrigem
    };

    // Validações
    if (!dadosNovoPersonagem.nome || !dadosNovoPersonagem.sobrenome || !dadosNovoPersonagem.dataNascimento || !dadosNovoPersonagem.avatarUrl) {
        alert("SISTEMA CENTRAL: Identidade incompleta. Certifique-se de preencher todos os dados e selecionar uma foto.");
        return;
    }
    
    if (!dadosNovoPersonagem.paisOrigem) {
        alert("SISTEMA CENTRAL: Selecione o país de origem do seu personagem.");
        return;
    }
    
    if (!dadosNovoPersonagem.cidadeOrigem) {
        alert("SISTEMA CENTRAL: Selecione a cidade de origem do seu personagem.");
        return;
    }

    console.log(`[THE FEED] Criando personagem em: ${paisOrigem}, ${cidadeOrigem}`);
    socket.emit('finalizarCriacaoPersonagem', dadosNovoPersonagem);
}

function selecionarParaJogar(personagemId) {
    console.log(`[THE FEED] Iniciando sequência de carregamento para: ${personagemId}`);
    
    if (typeof iniciarTransicaoCinematica === 'function') {
        iniciarTransicaoCinematica(personagemId);
    } else {
        console.error("ERRO: Módulo de transição não carregado.");
        socket.emit('iniciarSessaoJogo', personagemId);
    }
}

function executarPurgaIdentidade(playerId) {
    const confirmacao = confirm("🚨 OPERAÇÃO DE EXCLUSÃO CRÍTICA:\nTem certeza que deseja DELETAR permanentemente este registro?");

    if (confirmacao) {
        const contaId = sessionStorage.getItem('accountId');
        
        console.log("Tentando purgar com Conta ID:", contaId); 

        if (!contaId) {
            alert("Erro de sessão: Terminal sem credencial de Conta Mãe. Tente logar novamente.");
            return;
        }

        socket.emit('excluirPersonagem', { accountId: contaId, playerId: playerId });
    }
}

/* ==========================================================================
   MONITORES DE EVENTOS DE REDE (LISTENERS SOCKET.IO)
   ========================================================================== */

socket.on('cadastroSucesso', (resultado) => {
    alert(`REGISTRO CONCLUÍDO!\nConta criada com sucesso.`);
    alternarBloqueioCampos('cadastro', false);

    sessionStorage.setItem('accountId', resultado.conta._id);
    sessionStorage.setItem('username', resultado.conta.username);
    exibirTelaCriacao();
});

socket.on('listaVazia', (conta) => {
    const confirmacao = confirm("Você não possui identidades ativas. Deseja retornar ao painel de acesso (Login)?");
    
    if (confirmacao) {
        voltarParaLogin();
    } else {
        exibirTelaCriacao();
    }
});

socket.on('loginSucesso', (conta) => {
    alternarBloqueioCampos('login', false);

    sessionStorage.setItem('accountId', conta._id);
    sessionStorage.setItem('username', conta.username);

    document.getElementById('autenticacao-container').style.display = 'none';
    document.getElementById('selecao-container').style.display = 'none';
    document.getElementById('criacao-container').style.display = 'none';

    if (!conta.personagens || conta.personagens.length === 0) {
        exibirTelaCriacao();
    } else {
        exibirTelaSelecao(conta.personagens);
    }
});

socket.on('faceclaimResultados', (dados) => {
    const galeria = document.getElementById('galeria-faceclaim-resultados');
    galeria.innerHTML = '';

    if (dados.urls.length === 0) {
        alert("SISTEMA: Nenhuma imagem válida retornada para este código biométrico.");
        return;
    }

    dados.urls.forEach((url, index) => {
        galeria.innerHTML += `
            <div class="opcao-foto">
                <input type="radio" name="foto-escolhida" id="foto-${index}" value="${url}">
                <label for="foto-${index}">
                    <img src="${url}" class="preview-avatar">
                </label>
            </div>
        `;
    });
});

socket.on('personagemCriadoSucesso', (novaContaAtualizada) => {
    alert("REGISTRO DE IDENTIDADE CIVIL CONCLUÍDO COM SUCESSO!");
    exibirTelaSelecao(novaContaAtualizada.personagens);
});

socket.on('personagemExcluidoSucesso', (contaAtualizada) => {
    alert("REGISTRO ELIMINADO: A identidade foi purgada da rede central.");

    if (!contaAtualizada.personagens || contaAtualizada.personagens.length === 0) {
        exibirTelaCriacao();
    } else {
        exibirTelaSelecao(contaAtualizada.personagens);
    }
});

socket.on('exibirCriacaoForcado', () => {
    console.log("[THE FEED] Sincronização: Lista vazia detectada, forçando tela de criação.");
    exibirTelaCriacao();
});

window.socket.on('jogoIniciadoSucesso', (dadosIniciais) => {
    console.log("[THE FEED] SINAL RECEBIDO: Abrindo HUD de jogo...");
    
    // ========== SALVAR ID DO PERSONAGEM ==========
    if (dadosIniciais && dadosIniciais.id) {
        sessionStorage.setItem('playerId', dadosIniciais.id);
        sessionStorage.setItem('playerNome', dadosIniciais.nome);
        sessionStorage.setItem('playerSobrenome', dadosIniciais.sobrenome);
        console.log(`[THE FEED] Personagem logado: ${dadosIniciais.nome} (ID: ${dadosIniciais.id})`);
    }

 sessionStorage.setItem('playerPais', 'Brasil');
        sessionStorage.setItem('playerEstado', 'São Paulo');
        sessionStorage.setItem('playerCidade', 'São Paulo');
        sessionStorage.setItem('playerDinheiro', 150);

         if (window.socket) {
            window.socket.emit('setPlayerName', dadosIniciais.nome);
        }

    const containers = ['selecao-container', 'autenticacao-container', 'criacao-container', 'transicao-container'];
    containers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    const gamePanel = document.getElementById('game-panel');
    if (gamePanel) {
        gamePanel.style.display = 'block';
        gamePanel.classList.add('visivel');

        const transicao = document.getElementById('transicao-container');
        if (transicao) transicao.style.display = 'none';
        
        if (typeof carregarMapa === 'function') carregarMapa();
        if (typeof mudarPainel === 'function') mudarPainel('mundo');
    } else {
        console.error("[ERRO CRÍTICO] O elemento #game-panel não foi encontrado no DOM!");
    }
});

function carregarMapa() {
    console.log("[THE FEED] Carregando mapa - chamando game.js");
    // Verifica se a função existe no game.js
    if (window.carregarMapaGame && typeof window.carregarMapaGame === 'function') {
        window.carregarMapaGame();
    } else {
        console.warn("[THE FEED] Função carregarMapaGame não encontrada no game.js");
        // Fallback: tenta acessar diretamente
        if (typeof initMundo === 'function') {
            initMundo();
        }
    }
}

function mudarPainel(aba) {
    console.log(`[THE FEED] Mudando para aba: ${aba} - chamando game.js`);
    // Verifica se a função existe no game.js
    if (window.mudarCategoria && typeof window.mudarCategoria === 'function') {
        window.mudarCategoria(aba);
    } else {
        console.warn("[THE FEED] Função mudarCategoria não encontrada no game.js");
        // Fallback
        const painelAtivo = document.getElementById('painel-ativo');
        if (painelAtivo) {
            painelAtivo.style.display = 'block';
            painelAtivo.innerHTML = `<h3>${aba.toUpperCase()}</h3><p>Carregando...</p>`;
        }
    }
}

socket.on('erroServidor', (mensagemDeErro) => {
    alert(`🚨 ALERTA DO SISTEMA:\n${mensagemDeErro}`);
    alternarBloqueioCampos('cadastro', false);
    alternarBloqueioCampos('login', false);
});