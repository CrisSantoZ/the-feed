// Carrega SVGs do GitHub raw e renderiza com estados clicáveis

const GITHUB = 'https://raw.githubusercontent.com/CrisSantoZ/the-feed/main/client/assets/maps';

const ISO_POR_NOME = {
  'Brasil': 'BR', 'Estados Unidos': 'US', 'EUA': 'US', 'França': 'FR',
  'Itália': 'IT', 'Japão': 'JP', 'Reino Unido': 'GB', 'Alemanha': 'DE',
  'Espanha': 'ES', 'Portugal': 'PT', 'Argentina': 'AR', 'México': 'MX',
  'China': 'CN', 'Austrália': 'AU', 'Índia': 'IN', 'Canadá': 'CA',
  'Turquia': 'TR', 'Egito': 'EG', 'África do Sul': 'ZA', 'Cuba': 'CU',
  'Coreia do Sul': 'KR', 'Rússia': 'RU', 'Suécia': 'SE', 'Noruega': 'NO',
  'Suíça': 'CH', 'Holanda': 'NL', 'Bélgica': 'BE', 'Áustria': 'AT',
  'Grécia': 'GR', 'Irlanda': 'IE', 'Polônia': 'PL'
};

const cache = {};

export async function renderizarMapaPaisSVG(paisNome) {
  const iso = ISO_POR_NOME[paisNome];
  if (!iso) return null;

  try {
    if (!cache[iso]) {
      const resp = await fetch(`${GITHUB}/${iso}.svg`);
      if (!resp.ok) return null;
      const texto = await resp.text();
      if (!texto.includes('<path')) return null;

      // Extrair viewBox do SVG
      const vbMatch = texto.match(/viewBox="([^"]+)"/);
      if (!vbMatch) return null;

      // Extrair paths com id e data-nome
      const pathRegex = /<path\s+id="([^"]*)"\s+class="regiao"\s+data-nome="([^"]*)"\s+d="([^"]*)"\s*\/?>/g;
      const paths = [];
      let m;
      while ((m = pathRegex.exec(texto)) !== null) {
        if (m[1] && m[3]) paths.push({ id: m[1], nome: m[2], d: m[3] });
      }
      if (paths.length === 0) return null;

      cache[iso] = { viewBox: vbMatch[1], paths };
    }

    const data = cache[iso];

    const pathsHtml = data.paths.map(p =>
      `<path class="svg-estado" data-nome="${p.nome}" d="${p.d}" />`
    ).join('');

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;">
        <svg viewBox="${data.viewBox}" style="width:100%;height:350px;display:block;" class="mapa-svg-iso">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.3); stroke:#00f3ff; stroke-width:0.3; cursor:pointer; }
            .svg-estado:hover { fill:rgba(0,243,255,0.6); }
            .svg-estado.ativo { fill:rgba(0,255,100,0.4); stroke:#00ff66; stroke-width:0.5; }
          </style>
          ${pathsHtml}
        </svg>
        <div id="sinfo-pais" style="text-align:center;color:#888;font-size:0.7rem;margin-top:6px;">
          Passe o mouse sobre um estado
        </div>
      </div>
    `;
  } catch (e) {
    console.log('[MAPSVG] erro:', e.message);
    return null;
  }
}

export function initMapaPaisSVG(paisNome) {
  const iso = ISO_POR_NOME[paisNome];
  if (!iso) return;

  const svg = document.querySelector('.mapa-svg-iso');
  if (!svg) return;

  const playerEstado = sessionStorage.getItem('playerEstado') || '';
  const playerPais = sessionStorage.getItem('playerPais') || '';
  const info = document.getElementById('sinfo-pais');

  svg.querySelectorAll('.svg-estado').forEach(el => {
    const nome = el.getAttribute('data-nome') || '';
    if (playerPais === paisNome && playerEstado === nome) el.classList.add('ativo');
    el.addEventListener('click', () => {
      if (window.selecionarEstado) {
        const nomeEstado = el.getAttribute('data-nome') || '';
        window.selecionarEstado(paisNome, nomeEstado);
      }
    });
  });

  let lastNome = '';
  svg.addEventListener('mousemove', (e) => {
    const target = e.target;
    if (!target.classList?.contains('svg-estado')) {
      if (info && lastNome) { info.textContent = 'Passe o mouse sobre um estado'; lastNome = ''; }
      return;
    }
    const nome = target.getAttribute('data-nome') || '';
    if (nome !== lastNome && info) { info.textContent = `📍 ${nome}`; lastNome = nome; }
  });

  svg.addEventListener('mouseleave', () => {
    if (info) { info.textContent = 'Passe o mouse sobre um estado'; lastNome = ''; }
  });
}
