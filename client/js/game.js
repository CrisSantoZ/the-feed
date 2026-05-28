/* ==========================================================================
   GAME.JS - HUB PRINCIPAL (APENAS GERENCIAMENTO)
   ========================================================================== */

import { initMundo, destroyMundo } from './mundo.js';

// Importar módulos de conteúdo
import { renderizarMapa } from './mundo/mapaMundial.js';
import { renderizarMapaEstado } from './mundo/mapaEstado.js';
import { renderizarMapaCidade } from './mundo/mapaCidade.js';
import { renderizarMapaPais } from './mundo/mapaPais.js';
import { renderizarAtributos } from './personagem/atributos.js';
import { renderizarInventario } from './personagem/inventario.js';
import { renderizarHabilidades } from './personagem/habilidades.js';
import { renderizarEstatisticas } from './personagem/estatisticas.js';
import { renderizarIdiomas } from './personagem/idiomas.js';
import { renderizarFeed } from './mundo/feed.js';
import { renderizarPessoas } from './mundo/pessoas.js';
import { renderizarAmigos } from './social/amigos.js';
import { renderizarChat } from './social/chat.js';
import { renderizarFaccoes } from './social/faccoes.js';
import { renderizarItens } from './loja/itens.js';
import { renderizarRoupas } from './loja/roupas.js';
import { renderizarImoveis } from './loja/imoveis.js';
import { renderizarPerfil } from './personagem/perfil.js';

// Variáveis globais
let mapaInicializado = false;
let menuAtual = 'principal';

// ==================== ESTRUTURA DOS MENUS ====================

const menus = {
    principal: [
        { id: 'mundo', nome: '🌍 Mundo' },
        { id: 'personagem', nome: '👤 Personagem' },
        { id: 'social', nome: '👥 Social' },
        { id: 'loja', nome: '🛒 Loja' }
    ],
    mundo: [
        { id: 'mapa', nome: '🗺️ Mapa' },
        { id: 'feed', nome: '📰 Feed' },
        { id: 'pessoas', nome: '👥 Pessoas Online' },
        { id: 'voltar', nome: '⬅ Voltar' }
    ],
    personagem: [
    { id: 'atributos', nome: '📊 Atributos' },
    { id: 'inventario', nome: '🎒 Inventário' },
    { id: 'habilidades', nome: '⚡ Habilidades' },
    { id: 'estatisticas', nome: '📈 Estatísticas' },
    { id: 'idiomas', nome: '🗣️ Idiomas' },
    { id: 'voltar', nome: '⬅ Voltar' }
],
    social: [
        { id: 'amigos', nome: '👫 Amigos' },
        { id: 'chat', nome: '💬 Chat Global' },
        { id: 'faccoes', nome: '⚔️ Facções' },
        { id: 'voltar', nome: '⬅ Voltar' }
    ],
    loja: [
        { id: 'itens', nome: '🛍️ Itens' },
        { id: 'roupas', nome: '👕 Roupas' },
        { id: 'imoveis', nome: '🏠 Imóveis' },
        { id: 'voltar', nome: '⬅ Voltar' }
    ]
};

// ==================== RENDERIZAR CONTEÚDO ====================

const renderizadores = {
    mapa: (dados) => {
        if (dados?.nivel === 'pais') {
            return '';
        } else if (dados?.nivel === 'estado') {
            return renderizarMapaEstado(dados.pais, dados.estado);
        }
        return renderizarMapa();
    },
    feed: () => renderizarFeed(),
    pessoas: () => renderizarPessoas(),
    personagem: () => renderizarPerfil(),
    atributos: () => renderizarAtributos(),
    inventario: () => renderizarInventario(),
    habilidades: () => renderizarHabilidades(),
    estatisticas: () => renderizarEstatisticas(),
    idiomas: () => renderizarIdiomas(),
    emprego: () => '',
    amigos: () => renderizarAmigos(),
    chat: () => renderizarChat(),
    faccoes: () => renderizarFaccoes(),
    itens: () => renderizarItens(),
    roupas: () => renderizarRoupas(),
    imoveis: () => renderizarImoveis()
};

function renderizarConteudoCentral(tipo, dados = {}) {
    const mapaContainer = document.getElementById('mapa-container');
    
    const popupPais = document.getElementById('info-pais-globo');
    if (popupPais) popupPais.remove();
    
    if (mapaContainer) {
        mapaContainer.style.display = 'block';
    }
    
    if (tipo === 'mapa' && (!dados || !dados.nivel || dados.nivel === 'mundo')) {
        if (mapaInicializado) {
            destroyMundo();
            mapaInicializado = false;
        }
        initMundo();
        mapaInicializado = true;
        return;
    }
    
    if (tipo === 'mapa' && dados?.nivel === 'pais') {
        if (mapaInicializado) {
            destroyMundo();
            mapaInicializado = false;
        }
        
        const paisNome = dados.pais;
        
        if (mapaContainer) {
            mapaContainer.innerHTML = renderizarMapaPais(paisNome);
        }
        
        if (paisNome === 'Brasil') {
            setTimeout(async () => {
                const { initMapaPais } = await import('./mundo/mapaManager.js');
                initMapaPais('brasil');
            }, 200);
        }
        
        return;
    }
    
    if (tipo === 'mapa' && dados?.nivel === 'estado') {
        const html = renderizarMapaEstado(dados.pais, dados.estado);
        if (mapaContainer) {
            mapaContainer.innerHTML = html;
        }
        return;
    }
    
    const renderizador = renderizadores[tipo];
    if (renderizador) {
        const html = renderizador(dados);
        if (mapaContainer) {
            mapaContainer.innerHTML = html;
        }
    } else {
        if (mapaContainer) {
            mapaContainer.innerHTML = `<div style="padding:20px; color:#fff;"><p>Carregando...</p></div>`;
        }
    }
}

// ==================== FUNÇÕES DO MENU ====================

function toggleMenu() {
    document.getElementById('game-panel').classList.toggle('menu-aberto');
}

function fecharMenu() {
    document.getElementById('game-panel').classList.remove('menu-aberto');
}

function mostrarMenu(menuId) {
    menuAtual = menuId;
    const itens = menus[menuId];
    if (!itens) return;
    
    const sidebarMenu = document.querySelector('.sidebar-menu');
    if (sidebarMenu) {
        if (menuId === 'personagem') {
            import('./personagem/perfil.js').then(module => {
                const dashboardHtml = module.renderizarPerfilSidebar();
                sidebarMenu.innerHTML = `
                    <div class="personagem-dashboard" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #00f3ff;">
                        ${dashboardHtml}
                    </div>
                    ${itens.map(item => `<li onclick="selecionarItem('${item.id}')">${item.nome}</li>`).join('')}
                `;
            });
        } else {
            sidebarMenu.innerHTML = itens.map(item => `
                <li onclick="selecionarItem('${item.id}')">${item.nome}</li>
            `).join('');
        }
    }
}

function selecionarItem(itemId) {
    if (itemId === 'voltar') {
        mostrarMenu('principal');
        return;
    }
    
    if (menus[itemId]) {
        mostrarMenu(itemId);
        return;
    }
    
    fecharMenu();
    
    renderizarConteudoCentral(itemId);
}

function carregarMapa() {
    renderizarConteudoCentral('mapa');
}

window.toggleMenu = toggleMenu;
window.fecharMenu = fecharMenu;
window.selecionarItem = selecionarItem;
window.carregarMapa = carregarMapa;

window.selecionarPais = function(paisNome) {
    renderizarConteudoCentral('mapa', { nivel: 'pais', pais: paisNome });
};

window.selecionarEstado = async function(paisNome, estadoNome) {
    const playerEstado = sessionStorage.getItem('playerEstado') || '';
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    
    const estadoNormalizado = estadoNome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const playerEstadoNormalizado = playerEstado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const paisNormalizado = paisNome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const playerPaisNormalizado = playerPais.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    
    renderizarConteudoCentral('mapa', { nivel: 'estado', pais: paisNome, estado: estadoNome });
    
    if (playerEstadoNormalizado !== estadoNormalizado || playerPaisNormalizado !== paisNormalizado) {
        const { mostrarNotificacaoViagem } = await import('./transporte/transporteUI.js');
        mostrarNotificacaoViagem(estadoNome, 'estado', async () => {
            const { abrirModalViagem } = await import('./transporte/transporteUI.js');
            abrirModalViagem('estado', estadoNome, { pais: paisNome, estado: estadoNome });
        });
    }
};

window.selecionarCidade = async function(paisNome, estadoNome, cidadeNome) {
    const playerCidade = sessionStorage.getItem('playerCidade') || '';
    const playerEstado = sessionStorage.getItem('playerEstado') || '';
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    
    const cidadeNormalizada = cidadeNome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const playerCidadeNormalizada = playerCidade.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const estadoNormalizado = estadoNome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const playerEstadoNormalizado = playerEstado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const paisNormalizado = paisNome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const playerPaisNormalizado = playerPais.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    
    const container = document.getElementById('mapa-container');
    if (container) {
        const { renderizarMapaCidade } = await import('./mundo/mapaCidade.js');
        const html = await renderizarMapaCidade(paisNome, estadoNome, cidadeNome);
        container.innerHTML = html;
    }
    
    if (playerCidadeNormalizada !== cidadeNormalizada || playerEstadoNormalizado !== estadoNormalizado) {
        const { mostrarNotificacaoViagem } = await import('./transporte/transporteUI.js');
        
        if (playerEstadoNormalizado === estadoNormalizado && playerPaisNormalizado === paisNormalizado) {
            mostrarNotificacaoViagem(cidadeNome, 'cidade', async () => {
                const { abrirModalViagem } = await import('./transporte/transporteUI.js');
                abrirModalViagem('cidade', cidadeNome, { pais: paisNome, estado: estadoNome, cidade: cidadeNome });
            });
        } else if (playerPaisNormalizado === paisNormalizado) {
            mostrarNotificacaoViagem(estadoNome, 'estado', async () => {
                const { abrirModalViagem } = await import('./transporte/transporteUI.js');
                abrirModalViagem('estado', estadoNome, { pais: paisNome, estado: estadoNome });
            });
        } else {
            mostrarNotificacaoViagem(paisNome, 'pais', async () => {
                const { abrirModalViagem } = await import('./transporte/transporteUI.js');
                abrirModalViagem('pais', paisNome, { pais: paisNome });
            });
        }
    }
};

window.selecionarLocal = async function(tipo, id, nome, cidade, estado, pais) {
    const { renderizarMapaLocal } = await import('./mundo/mapaLocal.js');
    const container = document.getElementById('mapa-container');
    if (container) {
        const html = await renderizarMapaLocal(pais, estado, cidade, tipo, id, nome);
        container.innerHTML = html;
    }
};

window.abrirPersonagem = async function() {
    const { renderizarPerfil } = await import('./personagem/perfil.js');
    const dashboardHtml = renderizarPerfil();
    
    const dashboardContainer = document.getElementById('personagem-dashboard');
    if (dashboardContainer) {
        dashboardContainer.innerHTML = dashboardHtml;
        dashboardContainer.style.display = 'block';
    }
    
    const submenuContainer = document.getElementById('submenu-container');
    const submenu = document.getElementById('submenu');
    
    if (submenu && submenuContainer) {
        submenu.innerHTML = `
            <li onclick="selecionarItem('atributos')">📊 Atributos</li>
            <li onclick="selecionarItem('inventario')">🎒 Inventário</li>
            <li onclick="selecionarItem('habilidades')">⚡ Habilidades</li>
            <li onclick="selecionarItem('estatisticas')">📈 Estatísticas</li>
            <li onclick="selecionarItem('idiomas')">🗣️ Idiomas</li>
        `;
        submenuContainer.style.display = 'block';
    }
};

// ✅ FUNÇÃO CORRIGIDA - VOLTAR PARA CIDADE
window.voltarParaCidade = async function(cidade, estado, pais) {
    // Verifica e corrige valores inválidos
    if (!cidade || cidade === 'undefined' || cidade === 'null' || cidade === 'Carregando...') {
        console.warn('[VOLTAR] Cidade inválida, usando fallback:', cidade);
        cidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    }
    if (!estado || estado === 'undefined' || estado === 'null' || estado === 'Carregando...') {
        estado = sessionStorage.getItem('playerEstado') || 'São Paulo';
    }
    if (!pais || pais === 'undefined' || pais === 'null' || pais === 'Carregando...') {
        pais = sessionStorage.getItem('playerPais') || 'Brasil';
    }
    
    console.log('[VOLTAR] Recarregando cidade:', { cidade, estado, pais });
    
    // ✅ NÃO RECRIA O ESTADO - VOLTA DIRETO PARA A CIDADE
    const container = document.getElementById('mapa-container');
    if (container) {
        const { renderizarMapaCidade } = await import('./mundo/mapaCidade.js');
        const html = await renderizarMapaCidade(pais, estado, cidade);
        container.innerHTML = html;
    }
};

window.abrirModalTransporte = async function(tipo, destino, pais, cidade) {
    const { abrirModalViagem } = await import('./transporte/transporteUI.js');
    abrirModalViagem(tipo, destino, { pais: pais, cidade: cidade });
};

window.voltarParaEstado = async function(estadoNome) {
    const paisNome = sessionStorage.getItem('playerPais') || 'Brasil';
    
    console.log('[VOLTAR_ESTADO] Voltando para estado diretamente:', estadoNome);
    
    // ✅ NÃO RECRIA O PAÍS - VAI DIRETO PARA O ESTADO (lista de cidades)
    renderizarConteudoCentral('mapa', { nivel: 'estado', pais: paisNome, estado: estadoNome });
};

window.voltarParaMundo = function() {
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    renderizarConteudoCentral('mapa', { nivel: 'mundo' });
};

window.voltarParaPais = async function(paisNome) {
    // ✅ NORMALIZA O NOME DO PAÍS (primeira letra maiúscula)
    const paisNormalizado = paisNome.charAt(0).toUpperCase() + paisNome.slice(1).toLowerCase();
    
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    renderizarConteudoCentral('mapa', { nivel: 'pais', pais: paisNormalizado });
    
    setTimeout(async () => {
        const { initMapaPais } = await import('./mundo/mapaManager.js');
        if (paisNormalizado === 'Brasil') {
            initMapaPais('brasil');
        }
    }, 500);
};

// ==================== SISTEMA DE EMPREGO ====================
window.abrirQuadroVagas = async function(cidade, estado, pais) {
    const { renderizarQuadroVagas } = await import('./emprego/empresaUI.js');
    renderizarQuadroVagas(cidade, estado, pais);
};

window.fazerPedido = async function(restauranteId, pratoId) {
    const playerId = sessionStorage.getItem('playerId');
    const cidade = sessionStorage.getItem('playerCidade');
    const estado = sessionStorage.getItem('playerEstado');
    const pais = sessionStorage.getItem('playerPais');
    
    if (!playerId || !cidade || !estado || !pais) {
        alert("❌ Dados de localização ou login não encontrados!");
        return;
    }
    
    try {
        const paisSlug = pais.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const estadoSlug = estado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-');
        
        const modulo = await import(`/js/locais/${paisSlug}/${estadoSlug}/Restaurantes.js`);
        const dadosRestaurantes = modulo.default || modulo;
        
        const restaurante = dadosRestaurantes[cidade]?.[restauranteId];
        
        if (!restaurante) {
            alert("❌ Restaurante não encontrado!");
            return;
        }
        
        const { processarPedido } = await import('./actions/comer.js');
        const resultado = await processarPedido(playerId, restaurante, pratoId);
        
        if (resultado.sucesso) {
            alert(resultado.mensagem);
        } else {
            alert(`❌ ${resultado.mensagem}`);
        }
        
    } catch (error) {
        console.error('[PEDIDO] Erro:', error);
        alert("❌ Erro ao processar pedido!");
    }
};

// ==================== CONFIRMAR ENTRADA NO LOCAL ====================
window.confirmarLocal = async function(tipo, id, nome, cidade, estado, pais, descricao, endereco, horario) {
    const playerLocal = sessionStorage.getItem('playerLocal');
    
    if (playerLocal === id) {
        window.selecionarLocal(tipo, id, nome, cidade, estado, pais);
        return;
    }
    
    const { mostrarModalConfirmacao } = await import('./transporte/transporteUI.js');
    
    const conteudo = `
        <p style="color: #fff; margin-bottom: 10px;">${descricao}</p>
        ${endereco ? `<p style="color: #888; font-size: 12px;">📍 ${endereco}</p>` : ''}
        ${horario ? `<p style="color: #888; font-size: 12px;">⏰ ${horario}</p>` : ''}
        <p style="color: #ff0055; font-size: 12px; margin-top: 10px;">Você não está neste local. Deseja ir agora?</p>
    `;
    
    const confirmar = await mostrarModalConfirmacao(nome, conteudo);
    
    if (confirmar) {
        sessionStorage.setItem('playerLocal', id);
        sessionStorage.setItem('playerLocalNome', nome);
        sessionStorage.setItem('playerLocalTipo', tipo);
        sessionStorage.setItem('playerCidade', cidade);
        sessionStorage.setItem('playerEstado', estado);
        sessionStorage.setItem('playerPais', pais);
        
        window.selecionarLocal(tipo, id, nome, cidade, estado, pais);
    }
};

// ✅ FUNÇÃO CORRIGIDA - SAIR DO LOCAL
window.sairDoLocal = async function() {
    try {
        const { fecharChatLocal } = await import('./chat/chatLocal.js');
        fecharChatLocal();
    } catch(e) {}
    
    sessionStorage.removeItem('playerLocal');
    sessionStorage.removeItem('playerLocalNome');
    sessionStorage.removeItem('playerLocalTipo');
    
    // ✅ BUSCA OS VALORES COM FALLBACK
    let cidade = sessionStorage.getItem('playerCidade');
    let estado = sessionStorage.getItem('playerEstado');
    let pais = sessionStorage.getItem('playerPais');
    
    // ✅ FALLBACK SE ESTIVEREM VAZIOS
    if (!cidade || cidade === 'undefined' || cidade === 'null' || cidade === 'Carregando...') {
        cidade = 'São Paulo';
        console.log('[SAIR] Cidade fallback para São Paulo');
    }
    if (!estado || estado === 'undefined' || estado === 'null' || estado === 'Carregando...') {
        estado = 'São Paulo';
    }
    if (!pais || pais === 'undefined' || pais === 'null' || pais === 'Carregando...') {
        pais = 'Brasil';
    }
    
    console.log('[SAIR] Voltando para:', { cidade, estado, pais });
    
    window.voltarParaCidade(cidade, estado, pais);
};

window.fecharPainel = function() {
    const painelAtivo = document.getElementById('painel-ativo');
    if (painelAtivo) {
        painelAtivo.classList.remove('visivel');
        setTimeout(() => {
            painelAtivo.style.display = 'none';
            painelAtivo.innerHTML = '';
        }, 300);
    }
    
    if (mapaInicializado) {
        destroyMundo();
        mapaInicializado = false;
    }
    
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    
    initMundo();
    mapaInicializado = true;
    
    console.log('[FECHAR] Painel fechado, voltando ao globo mundial');
};

window.mudarCategoria = selecionarItem;
window.carregarMapaGame = carregarMapa;
window.mostrarSubmenu = selecionarItem;
window.selecionarSubmenu = selecionarItem;

setTimeout(() => {
    mostrarMenu('principal');
    renderizarConteudoCentral('mapa');
}, 100);

if (window.socket) {
    window.socket.on('viagemConcluida', (data) => {
        if (data.sucesso) {
            const [pais, cidade] = data.destino.split('/');
            sessionStorage.setItem('playerPais', pais);
            sessionStorage.setItem('playerCidade', cidade);
            
            if (data.destino.includes('/')) {
                renderizarConteudoCentral('mapa', { nivel: 'pais', pais: pais });
            }
            
            alert(`✅ Viagem concluída! Você chegou em ${data.destino}`);
        }
    });
}

console.log("[THE FEED] Game.js carregado com sucesso!");