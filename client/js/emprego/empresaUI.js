const socket = window.socket;

function painelAbrir(html) {
    const p = document.getElementById('painel-ativo');
    const m = document.getElementById('mapa-container');
    if (p) {
        p.innerHTML = `<div class="painel-conteudo" style="background:#030407;min-height:100%;color:#fff;">${html}</div>`;
        p.style.display = 'block';
        setTimeout(() => p.classList.add('visivel'), 50);
    } else if (m) {
        m.style.background = '#030407';
        m.innerHTML = html;
    }
}

function painelFechar() {
    const p = document.getElementById('painel-ativo');
    if (p) {
        p.classList.remove('visivel');
        setTimeout(() => { p.style.display = 'none'; p.innerHTML = ''; }, 300);
    }
}

function header(titulo) {
    return `
        <div class="mapa-header" style="padding:15px;margin:0;background:#030407;">
            <span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">${titulo}</span>
            <button onclick="window.empresaFecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button>
        </div>
    `;
}

window.empresaFecharPainel = painelFechar;

// ==================== QUADRO DE VAGAS ====================

export function renderizarQuadroVagas(cidade, estado, pais) {
    const playerCargo = sessionStorage.getItem('playerCargo');

    let html = `
        ${header('💼 QUADRO DE VAGAS')}
        <div id="vagas-lista" style="padding:0 15px 15px;background:#030407;">
            <div style="text-align:center;padding:30px;color:#888;">
                <div style="font-size:2rem;margin-bottom:10px;">⏳</div>
                Carregando vagas disponíveis...
            </div>
        </div>
    `;
    painelAbrir(html);

    socket.emit('listarVagas', { pais, estado, cidade });

    socket.once('vagasListadas', (resultado) => {
        const lista = document.getElementById('vagas-lista');
        if (!lista) return;

        if (!resultado.sucesso || !resultado.vagas?.length) {
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
                ${playerCargo ? `<span style="color:#00ff66;margin-left:10px;">🟢 ${playerCargo}</span>` : ''}
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
                ${resultado.vagas.map(v => `
                    <div class="vaga-card" data-vaga-id="${v.id}" data-empresa-id="${v.empresaId}" style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:10px;padding:12px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                            <span style="color:#fff;font-weight:bold;font-size:0.85rem;">${v.cargo}</span>
                            <span style="color:#00ff66;font-weight:bold;font-size:0.8rem;">${simbolo} ${Number(v.salario).toLocaleString()}/mês</span>
                        </div>
                        <div style="color:#00f3ff;font-size:0.7rem;margin-bottom:6px;">🏢 ${v.empresaNome} · ${v.ramo}</div>
                        <div style="color:#888;font-size:0.7rem;margin-bottom:8px;">${v.descricao || ''}</div>
                        <div style="display:flex;gap:10px;font-size:0.65rem;color:#555;margin-bottom:8px;">
                            <span>⭐ Nv.${v.requisitos?.nivelMinimo || 1}</span>
                            <span>👥 ${v.totalCandidatos} candidato(s)</span>
                        </div>
                        <button class="btn-candidatar" data-vaga-id="${v.id}" data-empresa-id="${v.empresaId}" style="width:100%;background:linear-gradient(135deg,#00f3ff,#ff0055);border:none;color:#fff;padding:8px;border-radius:6px;cursor:pointer;font-weight:bold;font-size:0.75rem;">📄 Candidatar-se</button>
                    </div>
                `).join('')}
            </div>
        `;

        lista.querySelectorAll('.btn-candidatar').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.textContent = '⏳ Enviando...';
                btn.disabled = true;
                socket.emit('candidatarVaga', { vagaId: btn.dataset.vagaId, empresaId: btn.dataset.empresaId });
            });
        });
    });

    socket.once('candidaturaEnviada', (resultado) => {
        const btn = document.querySelector('.btn-candidatar[disabled]');
        if (!btn) return;
        if (resultado.sucesso) {
            btn.textContent = '✅ Enviada!';
            btn.style.background = '#1a5a1a';
            btn.disabled = true;
        } else {
            const msg = typeof resultado === 'string' ? resultado : (resultado?.erro || 'Erro');
            btn.textContent = '❌ ' + msg.substring(0, 35);
            btn.disabled = false;
            setTimeout(() => { btn.textContent = '📄 Candidatar-se'; }, 3000);
        }
    });

    // Remove listener genérico de erroServidor - cada evento trata seu próprio erro
}

// ==================== MINHA EMPRESA ====================

export function renderizarMinhaEmpresa() {
    let html = `
        ${header('🏢 MINHA EMPRESA')}
        <div id="empresa-content" style="padding:0 15px 15px;background:#030407;">
            <div style="text-align:center;padding:30px;color:#888;">
                <div style="font-size:2rem;margin-bottom:10px;">⏳</div>
                Carregando...
            </div>
        </div>
    `;
    painelAbrir(html);

    socket.emit('listarEmpresas');
    socket.once('empresasListadas', (resultado) => {
        const content = document.getElementById('empresa-content');
        if (!content) return;
        if (!resultado.sucesso || !resultado.empresas?.length) {
            content.innerHTML = `
                <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:20px;text-align:center;">
                    <div style="font-size:2.5rem;margin-bottom:10px;">🏢</div>
                    <div style="color:#fff;font-weight:bold;margin-bottom:8px;">Você não possui empresas</div>
                    <div style="color:#888;font-size:0.75rem;margin-bottom:15px;">Custo inicial: R$ 5.000</div>
                    <button id="btn-criar-empresa" style="background:linear-gradient(135deg,#00f3ff,#ff0055);border:none;color:#fff;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:bold;font-size:0.85rem;">🏢 Fundar Empresa</button>
                </div>
            `;
            document.getElementById('btn-criar-empresa')?.addEventListener('click', mostrarFormCriacao);
            return;
        }
        const e = resultado.empresas[0];
        content.innerHTML = `
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="font-size:1.1rem;color:#fff;font-weight:bold;margin-bottom:4px;">🏢 ${e.nome}</div>
                <div style="color:#888;font-size:0.7rem;">${e.ramo} · ⭐ Nv.${e.nivel}</div>
            </div>
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:10px;">📊 FINANCEIRO</div>
                <div class="stat-row"><span class="stat-label">💰 Faturamento</span><span class="stat-val" style="color:#00ff66;">${sessionStorage.getItem('simboloMoeda') || 'R$'} ${Number(e.faturamentoMensal).toLocaleString()}</span></div>
                <div class="stat-row"><span class="stat-label">📈 Lucro</span><span class="stat-val" style="color:#00ff66;">${sessionStorage.getItem('simboloMoeda') || 'R$'} ${Number(e.lucroMensal || 0).toLocaleString()}</span></div>
            </div>
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;">
                <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:10px;">👥 FUNCIONÁRIOS</div>
                <div class="stat-row"><span class="stat-label">Total</span><span class="stat-val">${e.totalFuncionarios}</span></div>
                <div class="stat-row"><span class="stat-label">Unidades</span><span class="stat-val">${e.totalUnidades}</span></div>
                <div class="stat-row"><span class="stat-label">Vagas</span><span class="stat-val">${e.totalVagasAbertas}</span></div>
            </div>
        `;
    });
}

function mostrarFormCriacao() {
    const content = document.getElementById('empresa-content');
    if (!content) return;
    content.innerHTML = `
        <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;">
            <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:15px;">🏢 FUNDAR EMPRESA</div>
            <div style="margin-bottom:12px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Nome</label>
                <input id="campo-nome-empresa" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;" placeholder="Dammicco's Enterprise">
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
                    <option value="entretenimento">🎮 Entretenimento</option>
                    <option value="transporte">🚗 Transporte</option>
                </select>
            </div>
            <div style="margin-bottom:15px;">
                <label style="color:#888;font-size:0.7rem;display:block;margin-bottom:4px;">Capital (R$ 5.000 mínimo)</label>
                <input id="campo-capital-empresa" type="number" value="5000" min="5000" style="width:100%;padding:10px;background:rgba(0,0,0,0.5);border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;">
            </div>
            <button id="btn-confirmar-fundacao" style="width:100%;background:linear-gradient(135deg,#00f3ff,#ff0055);border:none;color:#fff;padding:12px;border-radius:8px;cursor:pointer;font-weight:bold;font-size:0.85rem;">🏢 Fundar</button>
        </div>
    `;
    document.getElementById('btn-confirmar-fundacao').addEventListener('click', () => {
        const nome = document.getElementById('campo-nome-empresa').value.trim();
        if (!nome) return alert('Digite o nome');
        socket.emit('criarEmpresa', {
            nome, nomeFantasia: nome,
            ramo: document.getElementById('campo-ramo-empresa').value,
            capitalSocial: Number(document.getElementById('campo-capital-empresa').value) || 5000,
            pais: sessionStorage.getItem('playerPais') || 'Brasil',
            estado: sessionStorage.getItem('playerEstado') || 'São Paulo',
            cidade: sessionStorage.getItem('playerCidade') || 'São Paulo'
        });
        socket.once('empresaCriada', (r) => {
            if (r.sucesso) { alert(`🏢 ${r.empresa.nome} criada!`); renderizarMinhaEmpresa(); }
            else alert(r.erro || 'Erro');
        });
    });
}

// ==================== MEU EMPREGO ====================

export function renderizarMeuEmprego() {
    const cargo = sessionStorage.getItem('playerCargo');
    const empresa = sessionStorage.getItem('playerEmpresa');
    const salario = sessionStorage.getItem('playerSalario');
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

    if (!cargo) {
        painelAbrir(`
            ${header('💼 EMPREGO')}
            <div style="padding:15px;text-align:center;color:#888;">
                <div style="font-size:2.5rem;margin-bottom:10px;">🔍</div>
                <div style="color:#fff;font-weight:bold;margin-bottom:8px;">Desempregado</div>
                <div style="font-size:0.75rem;">Vá em uma cidade e procure vagas de emprego.</div>
            </div>
        `);
        return;
    }

    painelAbrir(`
        ${header('💼 MEU EMPREGO')}
        <div style="padding:0 15px 15px;">
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                    <span style="font-size:1.5rem;">🏢</span>
                    <div>
                        <div style="color:#fff;font-weight:bold;">${empresa || ''}</div>
                        <div style="color:#00f3ff;font-size:0.75rem;">${cargo}</div>
                    </div>
                </div>
                <div class="stat-row"><span class="stat-label">💰 Salário</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(salario || 0).toLocaleString()}/mês</span></div>
            </div>
            <button id="btn-pedir-demissao" style="width:100%;background:none;border:1px solid #ff0055;color:#ff0055;padding:10px;border-radius:8px;cursor:pointer;font-size:0.8rem;">🚪 Pedir Demissão</button>
        </div>
    `);

    document.getElementById('btn-pedir-demissao')?.addEventListener('click', () => {
        if (!confirm('Sair do emprego?')) return;
        socket.emit('pedirDemissao', sessionStorage.getItem('playerEmpresaId'));
        socket.once('demissaoEfetuada', (r) => {
            if (r.sucesso) {
                ['playerCargo','playerEmpresa','playerEmpresaId','playerSalario'].forEach(k => sessionStorage.removeItem(k));
                renderizarMeuEmprego();
            }
        });
    });
}

window.abrirQuadroVagas = function(cidade, estado, pais) {
    renderizarQuadroVagas(
        cidade || sessionStorage.getItem('playerCidade') || 'São Paulo',
        estado || sessionStorage.getItem('playerEstado') || 'São Paulo',
        pais || sessionStorage.getItem('playerPais') || 'Brasil'
    );
};
