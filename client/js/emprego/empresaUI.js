const socket = window.socket;

// ==================== QUADRO DE VAGAS ====================

export function renderizarQuadroVagas(cidade, estado, pais) {
    const playerId = sessionStorage.getItem('playerId');
    const playerCargo = sessionStorage.getItem('playerCargo');

    const container = document.createElement('div');
    container.className = 'mapa-container';
    container.style.padding = '0';

    container.innerHTML = `
        <div class="mapa-header" style="padding:15px;margin:0;">
            <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">💼 QUADRO DE VAGAS</span>
            <button onclick="this.closest('.mapa-container').remove(); window.fecharPainel?.()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
        </div>
        <div id="vagas-lista" style="padding:0 15px 15px;">
            <div style="text-align:center;padding:30px;color:#888;">
                <div style="font-size:2rem;margin-bottom:10px;">⏳</div>
                Carregando vagas disponíveis...
            </div>
        </div>
    `;

    document.getElementById('painel-ativo').innerHTML = '';
    document.getElementById('painel-ativo').appendChild(container);
    document.getElementById('painel-ativo').style.display = 'block';
    setTimeout(() => document.getElementById('painel-ativo').classList.add('visivel'), 50);

    socket.emit('listarVagas', { pais, estado, cidade });

    socket.once('vagasListadas', (resultado) => {
        const lista = document.getElementById('vagas-lista');
        if (!lista) return;

        if (!resultado.sucesso || resultado.vagas.length === 0) {
            lista.innerHTML = `
                <div style="text-align:center;padding:30px;color:#888;">
                    <div style="font-size:2rem;margin-bottom:10px;">🔍</div>
                    Nenhuma vaga disponível em ${cidade} no momento.
                </div>
            `;
            return;
        }

        const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

        lista.innerHTML = `
            <div style="color:#888;font-size:0.7rem;margin-bottom:12px;">
                📍 ${resultado.vagas.length} vaga(s) em ${cidade}
                ${playerCargo ? `<span style="color:#00ff66;margin-left:10px;">🟢 Seu cargo: ${playerCargo}</span>` : ''}
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                ${resultado.vagas.map(v => `
                    <div class="vaga-card" data-vaga-id="${v.id}" data-empresa-id="${v.empresaId}" style="
                        background:rgba(0,243,255,0.03);
                        border:1px solid rgba(0,243,255,0.12);
                        border-radius:10px;
                        padding:12px;
                        cursor:pointer;
                        transition:all 0.2s;
                    ">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                            <span style="color:#fff;font-weight:bold;font-size:0.85rem;">${v.cargo}</span>
                            <span style="color:#00ff66;font-weight:bold;font-size:0.8rem;">${simbolo} ${Number(v.salario).toLocaleString()}/mês</span>
                        </div>
                        <div style="color:#00f3ff;font-size:0.7rem;margin-bottom:6px;">🏢 ${v.empresaNome} · ${v.ramo}</div>
                        <div style="color:#888;font-size:0.7rem;margin-bottom:8px;">${v.descricao || 'Sem descrição'}</div>
                        <div style="display:flex;gap:10px;font-size:0.65rem;color:#555;">
                            <span>⭐ Requer Nv.${v.requisitos?.nivelMinimo || 1}</span>
                            <span>👥 ${v.totalCandidatos} candidato(s)</span>
                        </div>
                        <button class="btn-candidatar" style="
                            margin-top:10px;
                            width:100%;
                            background:linear-gradient(135deg,#00f3ff,#ff0055);
                            border:none;
                            color:#fff;
                            padding:8px;
                            border-radius:6px;
                            cursor:pointer;
                            font-weight:bold;
                            font-size:0.75rem;
                        ">📄 Candidatar-se</button>
                    </div>
                `).join('')}
            </div>
        `;

        lista.querySelectorAll('.vaga-card').forEach(card => {
            const btn = card.querySelector('.btn-candidatar');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                candidatar(card.dataset.vagaId, card.dataset.empresaId);
            });
        });
    });
}

function candidatar(vagaId, empresaId) {
    const btn = document.querySelector(`.vaga-card[data-vaga-id="${vagaId}"] .btn-candidatar`);
    btn.textContent = '⏳ Enviando...';
    btn.disabled = true;

    socket.emit('candidatarVaga', { vagaId, empresaId });

    socket.once('candidaturaEnviada', (resultado) => {
        if (resultado.sucesso) {
            btn.textContent = '✅ Candidatura enviada!';
            btn.style.background = '#1a5a1a';
            btn.style.cursor = 'default';
        } else {
            btn.textContent = '❌ Tentar novamente';
            btn.disabled = false;
            alert(resultado.erro || 'Erro ao candidatar');
        }
    });

    socket.once('erroServidor', (erro) => {
        btn.textContent = '📄 Candidatar-se';
        btn.disabled = false;
        alert(erro.erro || erro || 'Erro ao candidatar');
    });
}

// ==================== MINHA EMPRESA (DONO) ====================

export function renderizarMinhaEmpresa() {
    const container = document.createElement('div');
    container.className = 'mapa-container';
    container.style.padding = '0';

    container.innerHTML = `
        <div class="mapa-header" style="padding:15px;margin:0;">
            <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">🏢 MINHA EMPRESA</span>
            <button onclick="this.closest('.mapa-container').remove()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
        </div>
        <div id="empresa-content" style="padding:0 15px 15px;">
            <div style="text-align:center;padding:30px;color:#888;">
                <div style="font-size:2rem;margin-bottom:10px;">⏳</div>
                Carregando...
            </div>
        </div>
    `;

    document.getElementById('painel-ativo').innerHTML = '';
    document.getElementById('painel-ativo').appendChild(container);

    socket.emit('listarEmpresas');

    socket.once('empresasListadas', (resultado) => {
        const content = document.getElementById('empresa-content');
        if (!content) return;

        if (!resultado.sucesso || !resultado.empresas?.length) {
            content.innerHTML = `
                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:20px;text-align:center;">
                    <div style="font-size:2.5rem;margin-bottom:10px;">🏢</div>
                    <div style="color:#fff;font-weight:bold;margin-bottom:8px;">Você não possui empresas</div>
                    <div style="color:#888;font-size:0.75rem;margin-bottom:15px;">Fundar uma empresa custa R$ 5.000 de capital social inicial.</div>
                    <button id="btn-criar-empresa" style="
                        background:linear-gradient(135deg,#00f3ff,#ff0055);
                        border:none;
                        color:#fff;
                        padding:12px 24px;
                        border-radius:8px;
                        cursor:pointer;
                        font-weight:bold;
                        font-size:0.85rem;
                    ">🏢 Fundar Empresa</button>
                </div>
            `;
            document.getElementById('btn-criar-empresa')?.addEventListener('click', mostrarFormCriacao);
            return;
        }

        const empresa = resultado.empresas[0];
        content.innerHTML = renderizarDetalhesEmpresa(empresa);
    });
}

function renderizarDetalhesEmpresa(empresa) {
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

    return `
        <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="font-size:1.2rem;color:#fff;font-weight:bold;margin-bottom:4px;">🏢 ${empresa.nome}</div>
            <div style="color:#888;font-size:0.7rem;">${empresa.ramo} · ⭐ Nv.${empresa.nivel} · 👍 ${empresa.reputacao}%</div>
        </div>

        <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:10px;">📊 FINANCEIRO</div>
            <div class="stat-row"><span class="stat-label">💰 Faturamento mensal</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(empresa.faturamentoMensal).toLocaleString()}</span></div>
            <div class="stat-row"><span class="stat-label">📈 Lucro mensal</span><span class="stat-val" style="color:${empresa.lucroMensal >= 0 ? '#00ff66' : '#ff0055'};">${simbolo} ${Number(Math.abs(empresa.lucroMensal)).toLocaleString()}</span></div>
            <div class="stat-row"><span class="stat-label">🏦 Saldo em conta</span><span class="stat-val">${simbolo} 0</span></div>
        </div>

        <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:10px;">👥 FUNCIONÁRIOS</div>
            <div class="stat-row"><span class="stat-label">Total</span><span class="stat-val">${empresa.totalFuncionarios}</span></div>
            <div class="stat-row"><span class="stat-label">Unidades</span><span class="stat-val">${empresa.totalUnidades}</span></div>
            <div class="stat-row"><span class="stat-label">Vagas abertas</span><span class="stat-val">${empresa.totalVagasAbertas}</span></div>
        </div>

        <div style="display:flex;gap:8px;margin-bottom:15px;">
            <button id="btn-abrir-vaga" style="flex:1;background:rgba(0,243,255,0.1);border:1px solid #00f3ff;color:#fff;padding:10px;border-radius:8px;cursor:pointer;font-size:0.75rem;">📢 Abrir Vaga</button>
            <button id="btn-ver-candidatos" style="flex:1;background:rgba(255,0,85,0.1);border:1px solid #ff0055;color:#fff;padding:10px;border-radius:8px;cursor:pointer;font-size:0.75rem;">👥 Candidatos</button>
        </div>
    `;
}

function mostrarFormCriacao() {
    const content = document.getElementById('empresa-content');
    if (!content) return;

    content.innerHTML = `
        <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:15px;">🏢 FUNDAR EMPRESA</div>
            
            <div style="margin-bottom:12px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Nome da Empresa</label>
                <input id="campo-nome-empresa" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;" placeholder="Ex: Dammicco's Enterprise">
            </div>
            
            <div style="margin-bottom:12px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Ramo</label>
                <select id="campo-ramo-empresa" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;">
                    <option value="tecnologia">💻 Tecnologia</option>
                    <option value="comercio">🛒 Comércio</option>
                    <option value="servicos">🛠️ Serviços</option>
                    <option value="industria">🏭 Indústria</option>
                    <option value="alimenticio">🍔 Alimentício</option>
                    <option value="financeiro">🏦 Financeiro</option>
                    <option value="saude">❤️ Saúde</option>
                    <option value="educacao">📚 Educação</option>
                    <option value="imobiliario">🏠 Imobiliário</option>
                    <option value="transporte">🚗 Transporte</option>
                    <option value="entretenimento">🎮 Entretenimento</option>
                    <option value="construcao">🔨 Construção</option>
                </select>
            </div>

            <div style="margin-bottom:12px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Descrição</label>
                <textarea id="campo-desc-empresa" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;min-height:60px;box-sizing:border-box;" placeholder="Descreva sua empresa..."></textarea>
            </div>

            <div style="margin-bottom:15px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Capital Social Inicial (R$ 5.000 mínimo)</label>
                <input id="campo-capital-empresa" type="number" value="5000" min="5000" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;">
            </div>

            <button id="btn-confirmar-fundacao" style="
                width:100%;
                background:linear-gradient(135deg,#00f3ff,#ff0055);
                border:none;
                color:#fff;
                padding:12px;
                border-radius:8px;
                cursor:pointer;
                font-weight:bold;
                font-size:0.85rem;
            ">🏢 Fundar Empresa (R$ 5.000)</button>
        </div>
    `;

    document.getElementById('btn-confirmar-fundacao').addEventListener('click', () => {
        const nome = document.getElementById('campo-nome-empresa').value.trim();
        if (!nome) return alert('Digite o nome da empresa');

        socket.emit('criarEmpresa', {
            nome,
            nomeFantasia: nome,
            ramo: document.getElementById('campo-ramo-empresa').value,
            descricao: document.getElementById('campo-desc-empresa').value.trim(),
            capitalSocial: Number(document.getElementById('campo-capital-empresa').value) || 5000,
            pais: sessionStorage.getItem('playerPais') || 'Brasil',
            estado: sessionStorage.getItem('playerEstado') || 'São Paulo',
            cidade: sessionStorage.getItem('playerCidade') || 'São Paulo'
        });

        socket.once('empresaCriada', (resultado) => {
            if (resultado.sucesso) {
                alert(`🏢 ${resultado.empresa.nome} fundada com sucesso!`);
                renderizarMinhaEmpresa();
            } else {
                alert(resultado.erro || 'Erro ao criar empresa');
            }
        });
    });
}

// ==================== MEU EMPREGO (FUNCIONÁRIO) ====================

export function renderizarMeuEmprego() {
    const playerCargo = sessionStorage.getItem('playerCargo');
    const playerEmpresa = sessionStorage.getItem('playerEmpresa');
    const playerSalario = sessionStorage.getItem('playerSalario');
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

    const container = document.createElement('div');
    container.className = 'mapa-container';
    container.style.padding = '0';

    if (!playerCargo) {
        container.innerHTML = `
            <div class="mapa-header" style="padding:15px;margin:0;">
                <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">💼 EMPREGO</span>
                <button onclick="this.closest('.mapa-container').remove()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
            </div>
            <div style="padding:15px;text-align:center;color:#888;">
                <div style="font-size:2.5rem;margin-bottom:10px;">🔍</div>
                <div style="color:#fff;font-weight:bold;margin-bottom:8px;">Você não está empregado</div>
                <div style="font-size:0.75rem;margin-bottom:15px;">Procure vagas de emprego nos locais da cidade.</div>
                <button onclick="abrirQuadroVagas()" style="
                    background:linear-gradient(135deg,#00f3ff,#ff0055);
                    border:none;
                    color:#fff;
                    padding:12px 24px;
                    border-radius:8px;
                    cursor:pointer;
                    font-weight:bold;
                ">📋 Ver Vagas Disponíveis</button>
            </div>
        `;
        document.getElementById('painel-ativo').innerHTML = '';
        document.getElementById('painel-ativo').appendChild(container);
        return;
    }

    container.innerHTML = `
        <div class="mapa-header" style="padding:15px;margin:0;">
            <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">💼 MEU EMPREGO</span>
            <button onclick="this.closest('.mapa-container').remove()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
        </div>
        <div style="padding:0 15px 15px;">
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                    <span style="font-size:1.5rem;">🏢</span>
                    <div>
                        <div style="color:#fff;font-weight:bold;">${playerEmpresa || 'Empresa'}</div>
                        <div style="color:#00f3ff;font-size:0.75rem;">${playerCargo}</div>
                    </div>
                </div>
                <div class="stat-row"><span class="stat-label">💰 Salário</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(playerSalario || 0).toLocaleString()}/mês</span></div>
                <div class="stat-row"><span class="stat-label">📅 Pagamento</span><span class="stat-val">Automático (a cada 10 min)</span></div>
            </div>
            <button id="btn-pedir-demissao" style="
                width:100%;
                background:none;
                border:1px solid #ff0055;
                color:#ff0055;
                padding:10px;
                border-radius:8px;
                cursor:pointer;
                font-size:0.8rem;
            ">🚪 Pedir Demissão</button>
        </div>
    `;

    document.getElementById('painel-ativo').innerHTML = '';
    document.getElementById('painel-ativo').appendChild(container);

    document.getElementById('btn-pedir-demissao')?.addEventListener('click', () => {
        if (!confirm('Tem certeza que deseja se demitir?')) return;
        socket.emit('pedirDemissao', sessionStorage.getItem('playerEmpresaId'));
        socket.once('demissaoEfetuada', (r) => {
            if (r.sucesso) {
                sessionStorage.removeItem('playerCargo');
                sessionStorage.removeItem('playerEmpresa');
                sessionStorage.removeItem('playerEmpresaId');
                sessionStorage.removeItem('playerSalario');
                alert(r.mensagem);
                renderizarMeuEmprego();
            }
        });
    });
}

function abrirQuadroVagas() {
    const cidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    const estado = sessionStorage.getItem('playerEstado') || 'São Paulo';
    const pais = sessionStorage.getItem('playerPais') || 'Brasil';
    renderizarQuadroVagas(cidade, estado, pais);
}

window.abrirQuadroVagas = abrirQuadroVagas;
