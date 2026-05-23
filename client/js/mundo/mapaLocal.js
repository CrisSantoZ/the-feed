/* ==========================================================================
   MAPA LOCAL - EXIBE INTERAÇÕES DO LOCAL
   ========================================================================== */

export async function renderizarMapaLocal(paisNome, estadoNome, cidadeNome, localTipo, localId, localNome) {
    let localData = null;

    // CONVERTE 'restaurantes' PARA 'alimentacao'
    if (localTipo === 'restaurantes') {
        localTipo = 'alimentacao';
    }

    // Busca o local diretamente no arquivo de restaurantes
    if (localTipo === 'alimentacao') {
        try {
            // CAMINHO DINÂMICO
            const paisSlug = paisNome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const estadoSlug = estadoNome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-');
            const modulo = await import(`/js/locais/${paisSlug}/${estadoSlug}/Restaurantes.js`);
            const restaurantesSP = modulo.restaurantesSP || modulo.default;
            const restaurante = restaurantesSP[cidadeNome]?.[localId];
            if (restaurante) {
                localData = restaurante;
            }
        } catch(e) {
            console.log('[MAPALOCAL] Erro ao carregar restaurante:', e);
        }
    }
    
    if (!localData) {
        return `
            <div class="mapa-container">
                <div class="mapa-header">
                    <button class="mapa-btn-voltar" onclick="window.voltarParaCidade('${cidadeNome}', '${estadoNome}', '${paisNome}')">← VOLTAR</button>
                    <h2 class="mapa-titulo">📍 ${localNome}</h2>
                    <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
                </div>
                <div class="mapa-dev-msg">
                    🚧 Dados do local ${localNome} em desenvolvimento
                </div>
            </div>
        `;
    }
    
    let conteudo = '';

    switch (localTipo) {
        case 'transportes':
            conteudo = renderizarTransporte(localData, paisNome, estadoNome, cidadeNome);
            break;
        case 'residenciais':
            conteudo = renderizarResidencial(localData);
            break;
        case 'lojas':
            conteudo = renderizarLoja(localData);
            break;
        case 'alimentacao':
            conteudo = renderizarAlimentacao(localData);
            break;
        case 'empregos':
            conteudo = renderizarEmprego(localData);
            break;
        case 'saude':
            conteudo = renderizarSaude(localData);
            break;
        case 'culturais':
            conteudo = renderizarCultural(localData);
            break;
        case 'natureza':
            conteudo = renderizarNatureza(localData);
            break;
        case 'bancos':
            conteudo = renderizarBanco(localData);
            break;
        case 'entretenimento':
            conteudo = renderizarEntretenimento(localData);
            break;
        default:
            conteudo = `<div class="mapa-dev-msg">🚧 Tipo de local não implementado: ${localTipo}</div>`;
    }
    
try {
        const { fecharChatLocal } = await import('../chat/chatLocal.js');
        fecharChatLocal();
    } catch(e) {
        // Chat não estava aberto, ignorar
    }
    
    // Iniciar chat local se o personagem estiver neste local
    if (localData && sessionStorage.getItem('playerLocal') === localData.id) {
        setTimeout(async () => {
            const { iniciarChatLocal } = await import('../chat/chatLocal.js');
            iniciarChatLocal(localData.id, localData.nome, localTipo);
        }, 500);
    }

if (localData && sessionStorage.getItem('playerLocal') === localData.id) {
        setTimeout(async () => {
            const { iniciarChatLocal } = await import('../chat/chatLocal.js');
            iniciarChatLocal(localData.id, localData.nome, localTipo);
        }, 500);
    }

    return `
        <div class="mapa-container" style="overflow-y: auto;">
            <div class="mapa-header">
                <button class="mapa-btn-voltar" onclick="window.voltarParaCidade('${cidadeNome}', '${estadoNome}', '${paisNome}')">← VOLTAR</button>
                <h2 class="mapa-titulo">📍 ${localData.nome}</h2>
                <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
            </div>
            
            <div style="padding: 0 20px 20px 20px;">
                <div style="background: rgba(0, 243, 255, 0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <p style="color: #888; margin: 0;">${localData.descricao}</p>
                </div>
                
                ${conteudo}
            </div>
        </div>
    `;
}

// ==================== RENDERIZADORES POR TIPO ====================

function renderizarTransporte(local, pais, estado, cidade) {
    const isAeroporto = local.tipo === 'aeroporto';
    const isRodoviaria = local.tipo === 'rodoviaria';
    
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">✈️ DESTINOS DISPONÍVEIS</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
                ${local.destinos?.map(destino => `
                    <div onclick="window.abrirModalViagem('${isAeroporto ? 'pais' : 'estado'}', '${destino}', { pais: '${pais}', cidade: '${cidade}' })" style="
                        background: rgba(0, 243, 255, 0.1);
                        border: 1px solid #00f3ff;
                        border-radius: 8px;
                        padding: 15px;
                        cursor: pointer;
                        transition: all 0.2s;
                        text-align: center;
                    ">
                        ✈️ ${destino}
                    </div>
                `).join('') || '<p style="color: #888;">Nenhum destino cadastrado</p>'}
            </div>
        </div>
    `;
}

function renderizarResidencial(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🏠 OPÇÕES</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <button onclick="alert('Comprar por C$${local.preco_compra}')" style="
                    background: rgba(0, 243, 255, 0.1);
                    border: 1px solid #00f3ff;
                    border-radius: 8px;
                    padding: 15px;
                    cursor: pointer;
                    text-align: left;
                ">
                    💰 Comprar - C$${local.preco_compra}
                </button>
                <button onclick="alert('Alugar por C$${local.preco_aluguel}/mês')" style="
                    background: rgba(255, 0, 85, 0.1);
                    border: 1px solid #ff0055;
                    border-radius: 8px;
                    padding: 15px;
                    cursor: pointer;
                    text-align: left;
                ">
                    🔑 Alugar - C$${local.preco_aluguel}/mês
                </button>
                <button onclick="alert('Visitando ${local.nome}...')" style="
                    background: rgba(0, 243, 255, 0.05);
                    border: 1px solid #888;
                    border-radius: 8px;
                    padding: 15px;
                    cursor: pointer;
                    text-align: left;
                ">
                    👀 Apenas visitar
                </button>
            </div>
        </div>
    `;
}

function renderizarLoja(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🛒 ITENS DISPONÍVEIS</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px;">
                ${local.itens_disponiveis?.map(item => `
                    <div onclick="alert('Comprar ${item}')" style="
                        background: rgba(0, 243, 255, 0.1);
                        border: 1px solid #00f3ff;
                        border-radius: 8px;
                        padding: 12px;
                        cursor: pointer;
                        text-align: center;
                    ">
                        🛍️ ${item}
                    </div>
                `).join('') || '<p style="color: #888;">Nenhum item disponível</p>'}
            </div>
        </div>
    `;
}

function renderizarAlimentacao(local) {
    // Verifica se o personagem está neste local
    const playerLocal = sessionStorage.getItem('playerLocal');
    const estaAqui = (playerLocal === local.id);
    
    // Ambiente imersivo
    const ambienteHtml = `
        <div style="background: linear-gradient(135deg, #0a0a1a, #1a0a2a); border-radius: 16px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div>
                    <span style="font-size: 24px;">🍽️</span>
                    <span style="color: #00f3ff; font-weight: bold; margin-left: 10px;">${estaAqui ? '📍 VOCÊ ESTÁ AQUI' : '📍 LOCAL'}</span>
                </div>
                ${estaAqui ? `<button onclick="window.sairDoLocal()" style="background: none; border: 1px solid #ff0055; color: #ff0055; padding: 8px 16px; border-radius: 8px; cursor: pointer;">🚪 SAIR</button>` : ''}
            </div>
            <p style="color: #fff; margin-bottom: 15px; font-size: 14px;">${local.descricao}</p>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                ${local.endereco ? `<span style="color: #888; font-size: 12px;">📍 ${local.endereco}</span>` : ''}
                ${local.horario ? `<span style="color: #888; font-size: 12px;">⏰ ${local.horario}</span>` : ''}
                ${local.telefone ? `<span style="color: #888; font-size: 12px;">📞 ${local.telefone}</span>` : ''}
                ${local.estrelas ? `<span style="color: #ff0055; font-size: 12px;">⭐ ${local.estrelas} (${local.avaliacoes} avaliações)</span>` : ''}
            </div>
        </div>
    `;
    
    // Cardápio (se existir)
    let cardapioHtml = '';
    if (local.cardapio && local.cardapio.length > 0) {
        cardapioHtml = `
            <div style="margin-top: 20px;">
                <h3 style="color: #00f3ff; margin-bottom: 15px;">🍽️ CARDÁPIO</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    ${local.cardapio.map(prato => `
                        <div style="background: rgba(0, 243, 255, 0.05); border: 1px solid rgba(0, 243, 255, 0.3); border-radius: 12px; padding: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <h4 style="color: #fff; margin: 0;">${prato.nome}</h4>
                                <span style="color: #ff0055; font-weight: bold;">C$${prato.preco}</span>
                            </div>
                            <p style="color: #888; font-size: 12px; margin-bottom: 10px;">${prato.descricao}</p>
                            <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                                ${prato.recuperacao.fome ? `<span style="background: rgba(0,243,255,0.2); padding: 2px 8px; border-radius: 12px; font-size: 11px;">🍔 +${prato.recuperacao.fome}</span>` : ''}
                                ${prato.recuperacao.sede ? `<span style="background: rgba(0,243,255,0.2); padding: 2px 8px; border-radius: 12px; font-size: 11px;">💧 +${prato.recuperacao.sede}</span>` : ''}
                                ${prato.recuperacao.energia ? `<span style="background: rgba(0,243,255,0.2); padding: 2px 8px; border-radius: 12px; font-size: 11px;">⚡ +${prato.recuperacao.energia}</span>` : ''}
                                ${prato.recuperacao.felicidade ? `<span style="background: rgba(0,243,255,0.2); padding: 2px 8px; border-radius: 12px; font-size: 11px;">😊 +${prato.recuperacao.felicidade}</span>` : ''}
                            </div>
                            <button onclick="window.fazerPedido('${local.id}', '${prato.id}')" style="
                                background: linear-gradient(135deg, #00f3ff, #ff0055);
                                border: none;
                                color: #fff;
                                padding: 10px;
                                border-radius: 8px;
                                cursor: pointer;
                                width: 100%;
                                font-weight: bold;
                                ${!estaAqui ? 'opacity: 0.5; cursor: not-allowed;' : ''}
                            " ${!estaAqui ? 'disabled' : ''}>🍽️ ${estaAqui ? 'Pedir Agora' : 'Você precisa estar no local para pedir'}</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Fallback para dados antigos
    if (!local.cardapio || local.cardapio.length === 0) {
        return `
            ${ambienteHtml}
            <div style="margin-top: 20px;">
                <h3 style="color: #00f3ff; margin-bottom: 15px;">🍽️ CARDÁPIO</h3>
                <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                    <p><span style="color: #00f3ff;">🍔 Tipo:</span> ${local.tipo_comida?.join(', ') || 'Variado'}</p>
                    <p><span style="color: #00f3ff;">💰 Preço médio:</span> C$${local.preco_medio || 30}</p>
                    <button onclick="alert('Comer em ${local.nome}')" style="margin-top: 15px; background: linear-gradient(135deg, #00f3ff, #ff0055); border: none; color: #fff; padding: 10px 20px; border-radius: 8px; cursor: pointer;">🍽️ Comer Agora</button>
                </div>
            </div>
        `;
    }
    
    return ambienteHtml + cardapioHtml;
}

function renderizarEmprego(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">💼 VAGAS DE EMPREGO</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${local.vagas?.map(vaga => `
                    <div style="background: rgba(0, 243, 255, 0.05); border: 1px solid #00f3ff; border-radius: 8px; padding: 15px;">
                        <h4 style="color: #fff; margin: 0 0 5px 0;">${vaga.cargo}</h4>
                        <p style="color: #888; margin: 0;">💰 Salário: C$${vaga.salario}</p>
                        <p style="color: #888; margin: 0;">⭐ Experiência: ${vaga.experiencia}</p>
                        <button onclick="alert('Candidatar para ${vaga.cargo}')" style="margin-top: 10px; background: #00f3ff; color: #000; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer;">📄 Candidatar-se</button>
                    </div>
                `).join('') || '<p style="color: #888;">Nenhuma vaga disponível</p>'}
            </div>
        </div>
    `;
}

function renderizarSaude(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🏥 SERVIÇOS</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${local.servicos?.map(servico => `
                    <div onclick="alert('${servico.tipo}: C$${servico.preco}')" style="
                        background: rgba(0, 243, 255, 0.1);
                        border: 1px solid #00f3ff;
                        border-radius: 8px;
                        padding: 15px;
                        cursor: pointer;
                    ">
                        💊 ${servico.tipo} - C$${servico.preco}
                    </div>
                `).join('') || ''}
                ${local.remedios?.map(remedio => `
                    <div onclick="alert('Comprar ${remedio.nome}: C$${remedio.preco}')" style="
                        background: rgba(255, 0, 85, 0.1);
                        border: 1px solid #ff0055;
                        border-radius: 8px;
                        padding: 15px;
                        cursor: pointer;
                    ">
                        💊 ${remedio.nome} - C$${remedio.preco}
                    </div>
                `).join('') || ''}
            </div>
        </div>
    `;
}

function renderizarCultural(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🎨 INFORMAÇÕES</h3>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                <p><span style="color: #00f3ff;">🎟️ Entrada:</span> C$${local.entrada || 0}</p>
                <p><span style="color: #00f3ff;">🎭 Diversão:</span> +${local.diversao || 0}</p>
                <p><span style="color: #00f3ff;">📚 Cultura:</span> +${local.cultura || 0}</p>
                <button onclick="alert('Visitar ${local.nome}')" style="margin-top: 15px; background: linear-gradient(135deg, #00f3ff, #ff0055); border: none; color: #fff; padding: 10px 20px; border-radius: 8px; cursor: pointer;">🎫 Visitar</button>
            </div>
        </div>
    `;
}

function renderizarNatureza(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🌳 INFORMAÇÕES</h3>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                <p><span style="color: #00f3ff;">🎟️ Entrada:</span> C$${local.entrada || 0}</p>
                <p><span style="color: #00f3ff;">⚡ Energia recuperada:</span> +${local.energia_recuperada || 0}</p>
                <button onclick="alert('Visitar ${local.nome}')" style="margin-top: 15px; background: linear-gradient(135deg, #00f3ff, #ff0055); border: none; color: #fff; padding: 10px 20px; border-radius: 8px; cursor: pointer;">🌿 Visitar</button>
            </div>
        </div>
    `;
}

function renderizarBanco(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🏦 SERVIÇOS BANCÁRIOS</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${local.servicos?.map(servico => `
                    <div onclick="alert('${servico}')" style="
                        background: rgba(0, 243, 255, 0.1);
                        border: 1px solid #00f3ff;
                        border-radius: 8px;
                        padding: 15px;
                        cursor: pointer;
                    ">
                        💰 ${servico}
                    </div>
                `).join('') || '<p style="color: #888;">Serviços disponíveis</p>'}
            </div>
        </div>
    `;
}

function renderizarEntretenimento(local) {
    return `
        <div style="margin-top: 20px;">
            <h3 style="color: #00f3ff; margin-bottom: 15px;">🎮 OPÇÕES</h3>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                <p><span style="color: #00f3ff;">🎟️ Ingresso:</span> C$${local.preco_ingresso || local.preco_medio || 0}</p>
                <p><span style="color: #00f3ff;">🎭 Diversão:</span> +${local.diversao || 0}</p>
                <button onclick="alert('Ir para ${local.nome}')" style="margin-top: 15px; background: linear-gradient(135deg, #00f3ff, #ff0055); border: none; color: #fff; padding: 10px 20px; border-radius: 8px; cursor: pointer;">🎫 Ir Agora</button>
            </div>
        </div>
    `;
}