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
        let htmlVagas = `<div style="color:#888;font-size:0.7rem;margin-bottom:12px;">📍 ${resultado.vagas.length} vaga(s) em ${cidade}</div>`;

        ordem.forEach(cat => {
            const vagas = agrupadas[cat];
            if (!vagas?.length) return;
            const cfg = NOMES_CATEGORIAS[cat] || { icone: '📌', nome: cat, cor: '#888' };

            htmlVagas += `
                <div style="margin-bottom:16px;">
                    <div style="color:${cfg.cor};font-weight:bold;font-size:0.75rem;letter-spacing:1px;margin-bottom:8px;padding-left:4px;">${cfg.icone} ${cfg.nome} (${vagas.length})</div>
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
            `;
        });

        lista.innerHTML = htmlVagas;

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

// ==================== MEU EMPREGO (no painel do personagem) ====================

export function renderizarSecaoEmprego() {
    const cargo = sessionStorage.getItem('playerCargo');
    const empresa = sessionStorage.getItem('playerEmpresa');
    const salario = sessionStorage.getItem('playerSalario');
    const simbolo = sessionStorage.getItem('simboloMoeda') || 'R$';

    if (!cargo) {
        return `
            <div style="background:rgba(0,243,255,0.03);border:1px solid rgba(0,243,255,0.12);border-radius:12px;padding:15px;margin-bottom:15px;">
                <div style="color:#00f3ff;font-weight:bold;font-size:0.8rem;margin-bottom:8px;letter-spacing:1px;">💼 EMPREGO</div>
                <div style="color:#888;font-size:0.7rem;text-align:center;padding:10px;">
                    🔍 Desempregado — vá até uma cidade e candidate-se a uma vaga.
                </div>
            </div>
        `;
    }

    return `
        <div style="background:rgba(0,243,255,0.03);border:1px solid #00ff6622;border-radius:12px;padding:15px;margin-bottom:15px;">
            <div style="color:#00ff66;font-weight:bold;font-size:0.8rem;margin-bottom:8px;letter-spacing:1px;">💼 EMPREGO ATUAL</div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                <span style="font-size:1.5rem;">🏢</span>
                <div>
                    <div style="color:#fff;font-weight:bold;font-size:0.85rem;">${empresa || 'Empresa'}</div>
                    <div style="color:#00f3ff;font-size:0.75rem;">${cargo}</div>
                </div>
            </div>
            <div class="stat-row"><span class="stat-label">💰 Salário</span><span class="stat-val" style="color:#00ff66;">${simbolo} ${Number(salario || 0).toLocaleString()}/semana</span></div>
            <div class="stat-row"><span class="stat-label">📅 Pagamento</span><span class="stat-val">Automático a cada 7 minutos</span></div>
            <button id="btn-pedir-demissao" style="margin-top:10px;width:100%;background:none;border:1px solid #ff0055;color:#ff0055;padding:8px;border-radius:6px;cursor:pointer;font-size:0.7rem;">🚪 Pedir Demissão</button>
        </div>
    `;
}

export function configurarBotoesEmprego() {
    const btn = document.getElementById('btn-pedir-demissao');
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (!confirm('Tem certeza que deseja se demitir?')) return;
        socket.emit('pedirDemissao', sessionStorage.getItem('playerEmpresaId'));
        socket.once('demissaoEfetuada', (r) => {
            if (r.sucesso) {
                ['playerCargo','playerEmpresa','playerEmpresaId','playerSalario'].forEach(k => sessionStorage.removeItem(k));
                const p = document.getElementById('painel-ativo');
                if (p) { p.innerHTML = ''; p.style.display = 'none'; }
                window.abrirPersonagem?.();
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
