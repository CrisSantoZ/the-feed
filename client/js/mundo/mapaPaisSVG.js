/* ==========================================================================
   MAPA PAÍS - RENDERIZADOR GENÉRICO (SVG com estados clicáveis)
   ========================================================================== */

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
  console.log('[MAPSVG] renderizar para', paisNome);
  const iso = ISO_POR_NOME[paisNome];
  console.log('[MAPSVG] ISO:', iso);
  if (!iso) return null;

  try {
    if (!cache[iso]) {
      const resp = await fetch(`/assets/maps/${iso}.svg`);
      if (!resp.ok) {
        console.log(`[MAPSVG] fetch ${iso}.svg falhou: ${resp.status}`);
        return null;
      }
      const texto = await resp.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(texto, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');
      if (!svgEl) return null;

      const viewBox = svgEl.getAttribute('viewBox') || '0 0 800 600';
      
      // Extrai paths com id (estados/regiões)
      const paths = [];
      svgEl.querySelectorAll('path').forEach(p => {
        const id = p.getAttribute('id') || '';
        const d = p.getAttribute('d') || '';
        if (id && d) {
          paths.push({ id, d });
        }
      });

      if (paths.length === 0) return null;

      cache[iso] = { viewBox, paths, nomeNoSVG: {} };

      // Tenta extrair nomes dos paths (alguns SVGs têm title dentro do path)
      svgEl.querySelectorAll('path').forEach(p => {
        const id = p.getAttribute('id') || '';
        const title = p.querySelector('title');
        if (id && title) {
          cache[iso].nomeNoSVG[id] = title.textContent.trim();
        }
      });
    }

    const data = cache[iso];
    if (!data) return null;

    // Construir mapping ID -> nome baseado no countries.js
    const regioes = (window.paisesDataGlobal?.find(p => ISO_POR_NOME[paisNome] === iso)?.regioes) || [];

    const pathsHtml = data.paths.map(p => {
      const nome = data.nomeNoSVG[p.id] || p.id;
      return `<path id="svg-path-${p.id}" class="svg-estado" data-nome="${nome}" data-id="${p.id}" d="${p.d}" />`;
    }).join('');

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;">
        <svg viewBox="${data.viewBox}" style="width:100%;height:350px;display:block;" class="mapa-svg-iso">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.3); stroke:#00f3ff; stroke-width:1.5; cursor:pointer; }
            .svg-estado:hover { fill:rgba(0,243,255,0.6); }
            .svg-estado.ativo { fill:rgba(0,255,100,0.4); stroke:#00ff66; stroke-width:2.5; }
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
        const nomeEstado = el.getAttribute('data-nome') || el.getAttribute('data-id') || '';
        window.selecionarEstado(paisNome, nomeEstado);
      }
    });
  });

  // Mouse move único no SVG inteiro (sem reflow)
  let lastNome = '';
  svg.addEventListener('mousemove', (e) => {
    const target = e.target;
    if (!target.classList || !target.classList.contains('svg-estado')) {
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
