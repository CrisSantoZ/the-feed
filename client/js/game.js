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
            // return renderizarMapaPais(dados.pais);  // COMENTADO - não usa mais
            return '';
        } else if (dados?.nivel === 'estado') {
            return renderizarMapaEstado(dados.pais, dados.estado);
        }
        return renderizarMapa();
    },
    feed: () => renderizarFeed(),
    pessoas: () => renderizarPessoas(),
    atributos: () => renderizarAtributos(),
    inventario: () => renderizarInventario(),
    habilidades: () => renderizarHabilidades(),
    estatisticas: () => renderizarEstatisticas(),
    idiomas: () => renderizarIdiomas(),
    amigos: () => renderizarAmigos(),
    chat: () => renderizarChat(),
    faccoes: () => renderizarFaccoes(),
    itens: () => renderizarItens(),
    roupas: () => renderizarRoupas(),
    imoveis: () => renderizarImoveis()
};

function renderizarConteudoCentral(tipo, dados = {}) {
    const mapaContainer = document.getElementById('mapa-container');
    
    // Fechar popup se existir
    const popupPais = document.getElementById('info-pais-globo');
    if (popupPais) popupPais.remove();
    
    // Garantir que o container do mapa está visível
    if (mapaContainer) {
        mapaContainer.style.display = 'block';
    }
    
    // CASO 1: MAPA MUNDIAL (GLOBO 3D)
    if (tipo === 'mapa' && (!dados || !dados.nivel || dados.nivel === 'mundo')) {
        if (mapaInicializado) {
            destroyMundo();
            mapaInicializado = false;
        }
        initMundo();
        mapaInicializado = true;
        return;
    }
    
  // CASO 2: MAPA DE PAÍS (nível = 'pais')
if (tipo === 'mapa' && dados?.nivel === 'pais') {
    if (mapaInicializado) {
        destroyMundo();
        mapaInicializado = false;
    }
    
    const paisNome = dados.pais;
    
    if (mapaContainer) {
        // USA O MAPAPAIS.JS
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
    
    // CASO 3: MAPA DE ESTADO (nível = 'estado')
    if (tipo === 'mapa' && dados?.nivel === 'estado') {
        const html = renderizarMapaEstado(dados.pais, dados.estado);
        if (mapaContainer) {
            mapaContainer.innerHTML = html;
        }
        return;
    }
    
    // Para outros tipos (feed, pessoas, atributos)
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
        sidebarMenu.innerHTML = itens.map(item => `
            <li onclick="selecionarItem('${item.id}')">${item.nome}</li>
        `).join('');
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

// ==================== COMPATIBILIDADE ====================

function carregarMapa() {
    renderizarConteudoCentral('mapa');
}

// ==================== EXPORTS ====================

window.toggleMenu = toggleMenu;
window.fecharMenu = fecharMenu;
window.selecionarItem = selecionarItem;
window.carregarMapa = carregarMapa;

// Funções de navegação do mapa
window.selecionarPais = function(paisNome) {
    renderizarConteudoCentral('mapa', { nivel: 'pais', pais: paisNome });
};

window.selecionarEstado = async function(paisNome, estadoNome) {
    const playerEstado = sessionStorage.getItem('playerEstado') || '';
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    
    // SEMPRE mostra o estado (visualização)
    renderizarConteudoCentral('mapa', { nivel: 'estado', pais: paisNome, estado: estadoNome });
    
    // Se não está neste estado, mostra notificação flutuante (não trava)
    if (playerEstado !== estadoNome || playerPais !== paisNome) {
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
    
    // SEMPRE mostra a cidade (visualização)
    const container = document.getElementById('mapa-container');
    if (container) {
        const { renderizarMapaCidade } = await import('./mundo/mapaCidade.js');
        const html = await renderizarMapaCidade(paisNome, estadoNome, cidadeNome);
        container.innerHTML = html;
    }
    
    // Se não está nesta cidade, mostra notificação flutuante
    if (playerCidade !== cidadeNome || playerEstado !== estadoNome) {
        const { mostrarNotificacaoViagem } = await import('./transporte/transporteUI.js');
        
        if (playerEstado === estadoNome && playerPais === paisNome) {
            // Mesmo estado, pode ir direto para a cidade
            mostrarNotificacaoViagem(cidadeNome, 'cidade', async () => {
                const { abrirModalViagem } = await import('./transporte/transporteUI.js');
                abrirModalViagem('cidade', cidadeNome, { pais: paisNome, estado: estadoNome, cidade: cidadeNome });
            });
        } else if (playerPais === paisNome) {
            // Mesmo país, estado diferente
            mostrarNotificacaoViagem(estadoNome, 'estado', async () => {
                const { abrirModalViagem } = await import('./transporte/transporteUI.js');
                abrirModalViagem('estado', estadoNome, { pais: paisNome, estado: estadoNome });
            });
        } else {
            // País diferente
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

window.voltarParaCidade = async function(cidade, estado, pais) {
    const { renderizarMapaCidade } = await import('./mundo/mapaCidade.js');
    const container = document.getElementById('mapa-container');
    if (container) {
        // Gera o HTML antes de limpar (evita pisca)
        const html = await renderizarMapaCidade(pais, estado, cidade);
        container.innerHTML = html;
    }
};

window.abrirModalTransporte = async function(tipo, destino, pais, cidade) {
    const { abrirModalViagem } = await import('./transporte/transporteUI.js');
    abrirModalViagem(tipo, destino, { pais: pais, cidade: cidade });
};

window.voltarParaEstado = function(estadoNome) {
    const paisNome = sessionStorage.getItem('playerPais') || 'Brasil';
    renderizarConteudoCentral('mapa', { nivel: 'estado', pais: paisNome, estado: estadoNome });
};

window.voltarParaMundo = function() {
    // Limpa o container
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    // Recria o globo
    renderizarConteudoCentral('mapa', { nivel: 'mundo' });
};

window.voltarParaPais = async function(paisNome) {
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    renderizarConteudoCentral('mapa', { nivel: 'pais', pais: paisNome });
    
    setTimeout(async () => {
        const { initMapaPais } = await import('./mundo/mapaManager.js');
        if (paisNome === 'Brasil') {
            initMapaPais('brasil');
        }
    }, 500);
};

// ==================== SISTEMA DE PEDIDOS (APENAS CHAMADA) ====================
window.fazerPedido = async function(restauranteId, pratoId) {
    const playerId = sessionStorage.getItem('playerId');
    const cidade = sessionStorage.getItem('playerCidade');
    const estado = sessionStorage.getItem('playerEstado');
    
    if (!playerId || !cidade || !estado) {
        alert("❌ Dados de localização ou login não encontrados!");
        return;
    }
    
    try {
        // Importa dados do restaurante
        const { restaurantesSP } = await import('/locais/brasil/sp/RestaurantesSP.js');
        const restaurante = restaurantesSP[estado]?.[cidade]?.[restauranteId];
        
        if (!restaurante) {
            alert("❌ Restaurante não encontrado!");
            return;
        }
        
        // Importa e executa o sistema de alimentação
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
    // Verifica se já está neste local
    const playerLocal = sessionStorage.getItem('playerLocal');
    
    if (playerLocal === id) {
        // Já está aqui, mostra o local diretamente
        window.selecionarLocal(tipo, id, nome, cidade, estado, pais);
        return;
    }
    
    // Se não está, pergunta se quer ir
    const { mostrarModalConfirmacao } = await import('./transporte/transporteUI.js');
    
    const conteudo = `
        <p style="color: #fff; margin-bottom: 10px;">${descricao}</p>
        ${endereco ? `<p style="color: #888; font-size: 12px;">📍 ${endereco}</p>` : ''}
        ${horario ? `<p style="color: #888; font-size: 12px;">⏰ ${horario}</p>` : ''}
        <p style="color: #ff0055; font-size: 12px; margin-top: 10px;">Você não está neste local. Deseja ir agora?</p>
    `;
    
    const confirmar = await mostrarModalConfirmacao(nome, conteudo);
    
    if (confirmar) {
        // Salva a nova localização
        sessionStorage.setItem('playerLocal', id);
        sessionStorage.setItem('playerLocalNome', nome);
        sessionStorage.setItem('playerLocalTipo', tipo);
        sessionStorage.setItem('playerCidade', cidade);
        sessionStorage.setItem('playerEstado', estado);
        sessionStorage.setItem('playerPais', pais);
        
        window.selecionarLocal(tipo, id, nome, cidade, estado, pais);
    }
};

window.sairDoLocal = async function() {
    // Fechar chat se estiver aberto
    try {
        const { fecharChatLocal } = await import('./chat/chatLocal.js');
        fecharChatLocal();
    } catch(e) {}
    
    // Limpa o local atual
    sessionStorage.removeItem('playerLocal');
    sessionStorage.removeItem('playerLocalNome');
    sessionStorage.removeItem('playerLocalTipo');
    
    // Volta para a cidade
    const cidade = sessionStorage.getItem('playerCidade');
    const estado = sessionStorage.getItem('playerEstado');
    const pais = sessionStorage.getItem('playerPais');
    
    window.voltarParaCidade(cidade, estado, pais);
};

window.fecharPainel = function() {
    // Remove qualquer painel ativo
    const painelAtivo = document.getElementById('painel-ativo');
    if (painelAtivo) {
        painelAtivo.classList.remove('visivel');
        setTimeout(() => {
            painelAtivo.style.display = 'none';
            painelAtivo.innerHTML = '';
        }, 300);
    }
    
    // Destroi o globo se existir
    if (mapaInicializado) {
        destroyMundo();
        mapaInicializado = false;
    }
    
    // VOLTA PARA O MAPA MUNDIAL (GLOBO)
    const container = document.getElementById('mapa-container');
    if (container) {
        container.innerHTML = '';
    }
    
    // Recria o globo 3D
    initMundo();
    mapaInicializado = true;
    
    // Reseta a localização visual (mantém a localização real do personagem)
    console.log('[FECHAR] Painel fechado, voltando ao globo mundial');
};

// Compatibilidade com login.js
window.mudarCategoria = selecionarItem;
window.carregarMapaGame = carregarMapa;
window.mostrarSubmenu = selecionarItem;
window.selecionarSubmenu = selecionarItem;

// Inicializar
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
            
            // Recarrega o mapa apropriado
            if (data.destino.includes('/')) {
                renderizarConteudoCentral('mapa', { nivel: 'pais', pais: pais });
            }
            
            alert(`✅ Viagem concluída! Você chegou em ${data.destino}`);
        }
    });
}

console.log("[THE FEED] Game.js carregado com sucesso!");
