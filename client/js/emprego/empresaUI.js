const socket = window.socket;

const NOMES_CATEGORIAS = {
    entry: { icone: '📋', nome: 'Entry Level', cor: '#888' },
    fisicas: { icone: '💪', nome: 'Físicas', cor: '#ff0055' },
    mentais: { icone: '🧠', nome: 'Mentais', cor: '#00f3ff' },
    profissionais: { icone: '⚙️', nome: 'Profissionais', cor: '#ff8800' },
    sociais: { icone: '🗣️', nome: 'Sociais', cor: '#00ff66' },
    gerencia: { icone: '👑', nome: 'Gerência', cor: '#ff0055' }
};

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

window.empresaFecharPainel = painelFechar;

function header(titulo) {
    return `<div class="mapa-header" style="padding:15px;margin:0;background:#030407;"><span style="color:#fff;font-family:'Syncopate',monospace;font-size:0.9rem;">${titulo}</span><button onclick="window.empresaFecharPainel()" style="background:none;border:none;color:#ff0055;font-size:20px;cursor:pointer;">✖</button></div>`;
}

// ==================== QUADRO DE VAGAS ====================

export function renderizarQuadroVagas(cidade, estado, pais) {
    let html = `${header('💼 QUADRO DE VAGAS')}<div id="vagas-lista" style="padding:0 15px 15px;background:#030407;"><div style="text-align:center;padding:30px;color:#888;"><div style="font-size:2rem;margin-bottom:10px;">⏳</div>Carregando...</div></div>`;
    painelAbrir(html);

    socket.emit('listarVagas', { pais, estado, cidade });

    socket.once('vagasListadas', (resultado) => {
        const lista = document.getElementById('vagas-lista');
        if (!lista) return;

        if (!resultado.sucesso || !resultado.vagas?.length) {
            lista.innerHTML = `<div style="text-align:center;padding:30px;color:#888;"><div style="font-size:2rem;margin-bottom:10px;">🔍</div>Nenhuma vaga em ${cidade}.</div>`;
            return;
        }

        const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

        const agrupadas = {};
        resultado.vagas.forEach(v => {
            const cat = v.categoria || 'entry';
            if (!agrupadas[cat]) agrupadas[cat] = [];
            agrupadas[cat].push(v);
        });

        const ordem = ['entry', 'fisicas', 'mentais', 'profissionais', 'sociais', 'gerencia'];
        let htmlVagas = `
            <div style="color:#888;font-size:0.7rem;margin-bottom:12px;">📍 ${resultado.vagas.length} vaga(s) em ${cidade}</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
        `;

        ordem.forEach(cat => {
            const vagas = agrupadas[cat];
            if (!vagas?.length) return;
            const cfg = NOMES_CATEGORIAS[cat] || { icone: '📌', nome: cat, cor: '#888' };

            htmlVagas += `
                <div style="border:1px solid ${cfg.cor}33;border-radius:10px;overflow:hidden;">
                    <div class="cat-header" data-cat="${cat}" style="
                        background:rgba(0,0,0,0.4);
                        padding:12px;
                        cursor:pointer;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        user-select:none;
                    ">
                        <div>
                            <span style="font-size:1.1rem;">${cfg.icone}</span>
                            <span style="color:${cfg.cor};margin-left:8px;font-weight:bold;font-size:0.8rem;">${cfg.nome}</span>
                            <span style="color:#888;margin-left:6px;font-size:0.65rem;">${vagas.length} vaga(s)</span>
                        </div>
                        <span class="cat-seta" style="color:${cfg.cor};font-size:0.8rem;transition:transform 0.2s;">▶</span>
                    </div>
                    <div class="cat-conteudo" style="display:none;padding:10px;">
                        ${vagas.map(v => {
                            const reqs = v.requisitos?.atributos || {};
                            const reqStr = Object.entries(reqs).map(([k, val]) => `${k} ${val}`).join(', ');
                            return `
                                <div class="vaga-card" data-vaga-id="${v.id}" data-empresa-id="${v.empresaId}" style="background:rgba(0,243,255,0.03);border:1px solid ${cfg.cor}22;border-radius:10px;padding:12px;margin-bottom:8px;">
                                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                        <span style="color:#fff;font-weight:bold;font-size:0.85rem;">${v.cargo}</span>
                                        <span style="color:#00ff66;font-weight:bold;font-size:0.8rem;">${simbolo} ${Number(v.salario).toLocaleString()}/sem</span>
                                    </div>
                                    <div style="color:${cfg.cor};font-size:0.7rem;margin-bottom:4px;">🏢 ${v.empresaNome}</div>
                                    <div style="color:#888;font-size:0.65rem;margin-bottom:6px;">${v.descricao || ''}</div>
                                    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:0.6rem;color:#555;margin-bottom:8px;">
                                        <span>⭐ Nv.${v.requisitos?.nivelMinimo || 1}</span>
                                        ${reqStr ? `<span>📌 ${reqStr}</span>` : ''}
                                        <span>👥 ${v.totalCandidatos}</span>
                                    </div>
                                    <button class="btn-candidatar" data-vaga-id="${v.id}" data-empresa-id="${v.empresaId}" style="width:100%;background:linear-gradient(135deg,${cfg.cor},#ff0055);border:none;color:#fff;padding:8px;border-radius:6px;cursor:pointer;font-weight:bold;font-size:0.75rem;">📄 Candidatar-se</button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });

        htmlVagas += `</div>`;
        lista.innerHTML = htmlVagas;

        lista.querySelectorAll('.cat-header').forEach(header => {
            header.addEventListener('click', () => {
                const conteudo = header.nextElementSibling;
                const seta = header.querySelector('.cat-seta');
                const aberto = conteudo.style.display === 'block';
                conteudo.style.display = aberto ? 'none' : 'block';
                seta.style.transform = aberto ? 'rotate(0deg)' : 'rotate(90deg)';
            });
        });

        lista.querySelectorAll('.btn-candidatar').forEach(btn => {
            btn.addEventListener('click', () => {
                const playerId = sessionStorage.getItem('playerId');
                btn.textContent = '⏳ Enviando...';
                btn.disabled = true;
                socket.emit('candidatarVaga', {
                    vagaId: btn.dataset.vagaId,
                    empresaId: btn.dataset.empresaId,
                    playerId: playerId
                });
            });
        });
    });

    socket.once('candidaturaEnviada', (resultado) => {
        const btn = document.querySelector('.btn-candidatar[disabled]');
        if (!btn) return;
        if (resultado.sucesso) {
            btn.textContent = resultado.contratado ? '✅ Contratado!' : '✅ Candidatado!';
            btn.style.background = '#1a5a1a';
            btn.disabled = true;

            if (resultado.contratado) {
                sessionStorage.setItem('playerCargo', resultado.cargo || '');
                sessionStorage.setItem('playerEmpresa', resultado.empresa || '');
                sessionStorage.setItem('playerEmpresaId', resultado.empresaId || '');
                sessionStorage.setItem('playerSalario', resultado.salario || '0');
            }
        } else {
            const msg = typeof resultado === 'string' ? resultado : (resultado?.erro || 'Erro');
            btn.textContent = '❌ ' + msg.substring(0, 40);
            btn.disabled = false;
            setTimeout(() => { btn.textContent = '📄 Candidatar-se'; }, 3000);
        }
    });
}

// ==================== MEU EMPREGO (painel dedicado) ====================

function getEmpregoAtual() {
    return {
        cargo: sessionStorage.getItem('playerCargo'),
        empresa: sessionStorage.getItem('playerEmpresa'),
        empresaId: sessionStorage.getItem('playerEmpresaId'),
        salario: Number(sessionStorage.getItem('playerSalario') || 0),
        dataContratacao: sessionStorage.getItem('playerEmpregoDataContratacao') || null,
        diasTrabalhados: Number(sessionStorage.getItem('playerEmpregoDiasTrabalhados') || 0),
        totalRecebido: Number(sessionStorage.getItem('playerEmpregoTotalRecebido') || 0),
        ultimoTrabalho: sessionStorage.getItem('playerEmpregoUltimoTrabalho') || null,
        turno: sessionStorage.getItem('playerEmpregoTurno') || 'integral',
        horarioInicio: sessionStorage.getItem('playerEmpregoHorarioInicio') || '08:00',
        horarioFim: sessionStorage.getItem('playerEmpregoHorarioFim') || '17:00',
        totalFuncionarios: sessionStorage.getItem('playerEmpregoTotalFuncionarios') || null,
    };
}

function salvarEmprego(emp) {
    sessionStorage.setItem('playerCargo', emp.cargo || '');
    sessionStorage.setItem('playerEmpresa', emp.empresa || '');
    sessionStorage.setItem('playerEmpresaId', emp.empresaId || '');
    sessionStorage.setItem('playerSalario', String(emp.salario || 0));
    if (emp.dataContratacao) sessionStorage.setItem('playerEmpregoDataContratacao', emp.dataContratacao);
    if (emp.diasTrabalhados != null) sessionStorage.setItem('playerEmpregoDiasTrabalhados', String(emp.diasTrabalhados));
    if (emp.totalRecebido != null) sessionStorage.setItem('playerEmpregoTotalRecebido', String(emp.totalRecebido));
    if (emp.ultimoTrabalho) sessionStorage.setItem('playerEmpregoUltimoTrabalho', emp.ultimoTrabalho);
    if (emp.turno) sessionStorage.setItem('playerEmpregoTurno', emp.turno);
    if (emp.horarioInicio) sessionStorage.setItem('playerEmpregoHorarioInicio', emp.horarioInicio);
    if (emp.horarioFim) sessionStorage.setItem('playerEmpregoHorarioFim', emp.horarioFim);
    if (emp.totalFuncionarios != null) sessionStorage.setItem('playerEmpregoTotalFuncionarios', String(emp.totalFuncionarios));
}

function limparEmprego() {
    ['playerCargo','playerEmpresa','playerEmpresaId','playerSalario','playerEmpregoDataContratacao','playerEmpregoDiasTrabalhados','playerEmpregoTotalRecebido','playerEmpregoUltimoTrabalho','playerEmpregoTurno','playerEmpregoHorarioInicio','playerEmpregoHorarioFim','playerEmpregoTotalFuncionarios'].forEach(k => sessionStorage.removeItem(k));
}

function podeTrabalharHoje(ultimoTrabalho) {
    if (!ultimoTrabalho) return true;
    const agora = new Date();
    const ultimo = new Date(ultimoTrabalho);
    return agora.toDateString() !== ultimo.toDateString();
}

function estaNoHorario(horarioInicio, horarioFim) {
    if (!horarioInicio || !horarioFim) return true;
    try {
        const agora = new Date();
        const [hIni, mIni] = horarioInicio.split(':').map(Number);
        const [hFim, mFim] = horarioFim.split(':').map(Number);
        const inicio = new Date(agora); inicio.setHours(hIni, mIni, 0, 0);
        const fim = new Date(agora); fim.setHours(hFim, mFim, 0, 0);
        return agora >= inicio && agora <= fim;
    } catch (e) {
        return true;
    }
}

export function renderizarPainelEmpregoAtual() {
    const emp = getEmpregoAtual();
    if (!emp.cargo || !emp.empresa) {
        return `
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:8px;letter-spacing:1px;">💼 EMPREGO ATUAL</div>
                <div style="color:#888;font-size:0.7rem;text-align:center;padding:10px;">🔍 Desempregado — vá até uma cidade e candidate-se a uma vaga.</div>
            </div>
        `;
    }

    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';
    const salarioDiario = Math.round(emp.salario / 7);
    const noHorario = estaNoHorario(emp.horarioInicio, emp.horarioFim);
    const jaTrabalhou = !podeTrabalharHoje(emp.ultimoTrabalho);
    const podeTrabalhar = noHorario && !jaTrabalhou;

    let botaoTrabalhar = '';
    if (jaTrabalhou) {
        botaoTrabalhar = `<button id="btn-trabalhar" disabled style="width:100%;background:#333;border:1px solid #555;color:#888;padding:10px;border-radius:6px;cursor:not-allowed;font-weight:bold;font-size:0.75rem;">✅ Já trabalhou hoje — volte amanhã</button>`;
    } else if (!noHorario) {
        botaoTrabalhar = `<button id="btn-trabalhar" disabled style="width:100%;background:#333;border:1px solid #555;color:#888;padding:10px;border-radius:6px;cursor:not-allowed;font-weight:bold;font-size:0.75rem;">⏰ Fora do horário (${emp.horarioInicio}–${emp.horarioFim})</button>`;
    } else {
        botaoTrabalhar = `<button id="btn-trabalhar" style="width:100%;background:linear-gradient(135deg,#00f3ff,#ff0055);border:none;color:#fff;padding:10px;border-radius:6px;cursor:pointer;font-weight:bold;font-size:0.75rem;">⚒️ Trabalhar agora (${simbolo} ${salarioDiario.toLocaleString()})</button>`;
    }

    const dataFormatada = emp.dataContratacao ? new Date(emp.dataContratacao).toLocaleDateString('pt-BR') : '—';

    return `
        <div style="background:rgba(0,243,255,0.03);border:1px solid #00ff6622;border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="color:#00ff66;font-weight:bold;font-size:0.8rem;margin-bottom:8px;letter-spacing:1px;">💼 MEU EMPREGO</div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <span style="font-size:1.5rem;">🏢</span>
                <div>
                    <div style="color:#fff;font-weight:bold;font-size:0.85rem;">${escapeHtml(emp.empresa || '')}</div>
                    <div style="color:#00f3ff;font-size:0.75rem;">${escapeHtml(emp.cargo || '')}</div>
                </div>
            </div>
            <div class="stat-row"><span class="stat-label">⏰ Turno</span><span class="stat-val">${emp.turno || 'integral'} (${emp.horarioInicio}–${emp.horarioFim})</span></div>
            <div class="stat-row"><span class="stat-label">📅 Admissão</span><span class="stat-val">${dataFormatada}</span></div>
            <div class="stat-row"><span class="stat-label">💰 Salário</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(emp.salario || 0).toLocaleString()}/semana</span></div>
            <div class="stat-row"><span class="stat-label">💵 Por dia (1/7)</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${salarioDiario.toLocaleString()}</span></div>
            <div class="stat-row"><span class="stat-label">✅ Dias trabalhados</span><span class="stat-val">${emp.diasTrabalhados || 0}</span></div>
            <div class="stat-row"><span class="stat-label">📈 Total recebido</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(emp.totalRecebido || 0).toLocaleString()}</span></div>
            <div class="stat-row"><span class="stat-label">👥 Funcionários</span><span class="stat-val">${emp.totalFuncionarios != null ? emp.totalFuncionarios : '—'}</span></div>
            ${botaoTrabalhar}
            <button id="btn-pedir-demissao" style="margin-top:10px;width:100%;background:none;border:1px solid #ff0055;color:#ff0055;padding:8px;border-radius:6px;cursor:pointer;font-size:0.7rem;">🚪 Pedir Demissão</button>
        </div>
    `;
}

export function configurarBotoesEmprego() {
    const btnTrabalhar = document.getElementById('btn-trabalhar');
    if (btnTrabalhar) {
        btnTrabalhar.addEventListener('click', () => {
            const emp = getEmpregoAtual();
            if (!emp.empresaId || !emp.cargo) {
                alert('Erro: dados de emprego não encontrados.');
                return;
            }
            if (!podeTrabalharHoje(emp.ultimoTrabalho)) {
                alert('Você já trabalhou hoje. Próxima jornada disponível amanhã.');
                return;
            }
            socket.emit('trabalhar', {
                empresaId: emp.empresaId,
                cargo: emp.cargo,
                turno: emp.turno,
                horarioInicio: emp.horarioInicio,
                horarioFim: emp.horarioFim,
            });
        });

        socket.once('salarioRecebido', (r) => {
            const btn = document.getElementById('btn-trabalhar');
            if (!btn) return;
            if (r && r.sucesso) {
                const emp = getEmpregoAtual();
                emp.ultimoTrabalho = new Date().toISOString();
                emp.diasTrabalhados = (emp.diasTrabalhados || 0) + 1;
                emp.totalRecebido = (emp.totalRecebido || 0) + (r.valor || 0);
                salvarEmprego(emp);
                const painel = document.getElementById('painel-ativo') || document.getElementById('mapa-container');
                if (painel) painel.innerHTML = renderizarPainelEmpregoAtual();
                configurarBotoesEmprego();
                window.atualizarDashboard && window.atualizarDashboard({ saldoRestante: r.saldoAtual || undefined });
            } else {
                alert(r?.erro || 'Não foi possível trabalhar agora.');
            }
        });
    }

    const btnDemissao = document.getElementById('btn-pedir-demissao');
    if (btnDemissao) {
        btnDemissao.addEventListener('click', () => {
            if (!confirm('Tem certeza que deseja se demitir?')) return;
            const empresaId = sessionStorage.getItem('playerEmpresaId');
            const playerId = sessionStorage.getItem('playerId');
            socket.emit('pedirDemissao', { empresaId, playerId });

            socket.once('demissaoEfetuada', (r) => {
                if (r.sucesso) {
                    limparEmprego();
                    abrirQuadroVagas();
                } else {
                    alert(r.erro || 'Erro ao pedir demissão');
                }
            });

            socket.once('erroServidor', (e) => {
                const msg = typeof e === 'string' ? e : (e?.erro || 'Erro ao pedir demissão');
                alert(msg);
            });
        });
    }
}

export function renderizarSecaoEmpregoSidebar() {
    const emp = getEmpregoAtual();
    if (!emp.cargo) return '';
    return `
        <p style="color:#00ff66;margin:5px 0;font-size:10px;">🏢 ${escapeHtml(emp.empresa || '')} · ${escapeHtml(emp.cargo || '')}</p>
        <button onclick="window.demitirAgora()" style="
            margin-top:6px;
            width:100%;
            background:none;
            border:1px solid #ff0055;
            color:#ff0055;
            padding:5px;
            border-radius:4px;
            cursor:pointer;
            font-size:0.6rem;
        ">🚪 Demitir-se</button>
    `;
}

export function atualizarSecaoEmprego() {
    const emp = getEmpregoAtual();
    const el = document.getElementById('secao-emprego-atual');
    if (!el) return;
    el.innerHTML = renderizarPainelEmpregoAtual();
    if (emp.cargo) configurarBotoesEmprego();
}

window.abrirQuadroVagas = function(cidade, estado, pais) {
    renderizarQuadroVagas(
        cidade || sessionStorage.getItem('playerCidade') || 'São Paulo',
        estado || sessionStorage.getItem('playerEstado') || 'São Paulo',
        pais || sessionStorage.getItem('playerPais') || 'Brasil'
    );
};

window.abrirPainelEmpregoAtual = function() {
    const html = renderizarPainelEmpregoAtual();
    if (!getEmpregoAtual().cargo) {
        window.abrirQuadroVagas();
        return;
    }
    painelAbrir(html);
    configurarBotoesEmprego();
};

window.demitirAgora = function() {
    if (!confirm('Tem certeza que deseja se demitir?')) return;
    const empresaId = sessionStorage.getItem('playerEmpresaId');
    const playerId = sessionStorage.getItem('playerId');
    socket.emit('pedirDemissao', { empresaId, playerId });

    socket.once('demissaoEfetuada', (r) => {
        if (r.sucesso) {
            limparEmprego();
            window.abrirPersonagem?.();
            alert('🚪 Demissão realizada com sucesso.');
        } else {
            alert(r.erro || 'Erro ao pedir demissão');
        }
    });

    socket.once('erroServidor', (e) => {
        const msg = typeof e === 'string' ? e : (e?.erro || 'Erro ao pedir demissão');
        alert(msg);
    });
};
