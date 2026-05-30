/* ==========================================================================
   RENDERIZADOR DE MAPAS amCharts - SVG com estados clicáveis
   ========================================================================== */

const nomeParaArquivo = {
  'Estados Unidos': 'eua', 'EUA': 'eua', 'França': 'franca', 'Itália': 'italia',
  'Japão': 'japao', 'Reino Unido': 'reino_unido', 'Alemanha': 'alemanha',
  'Espanha': 'espanha', 'Portugal': 'portugal', 'Argentina': 'argentina',
  'México': 'mexico', 'China': 'china', 'Austrália': 'australia', 'Índia': 'india',
  'Canadá': 'canada', 'Rússia': 'russia', 'Turquia': 'turquia',
  'Egito': 'egito', 'África do Sul': 'africa_sul', 'Cuba': 'cuba',
  'Coreia do Sul': 'coreia_sul', 'Suécia': 'suecia', 'Noruega': 'noruega',
  'Suíça': 'suica', 'Holanda': 'holanda', 'Bélgica': 'belgica',
  'Áustria': 'austria', 'Grécia': 'grecia', 'Irlanda': 'irlanda', 'Polônia': 'polonia'
};

const mapasCarregados = {};
const SCALE = 0.01;

function extrairCoords(geometry) {
  const coords = geometry?.coordinates || [];
  const pontos = [];
  function walk(arr) {
    if (!arr || arr.length === 0) return;
    if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
      pontos.push([arr[0] * SCALE, arr[1] * SCALE]);
    } else {
      arr.forEach(walk);
    }
  }
  walk(coords);
  return pontos;
}

function pathToD(geometry) {
  const scalePt = (x, y) => `${x * SCALE},${y * SCALE}`;
  function walk(arr) {
    if (!arr || arr.length === 0) return '';
    if (Array.isArray(arr[0]) && Array.isArray(arr[0][0]) && typeof arr[0][0][0] === 'number') {
      return arr.map(ring => {
        if (!ring || ring.length < 2) return '';
        let d = `M${scalePt(ring[0][0], ring[0][1])}`;
        for (let i = 1; i < ring.length; i++) d += `L${scalePt(ring[i][0], ring[i][1])}`;
        return d + 'Z';
      }).join(' ');
    }
    if (Array.isArray(arr[0]) && typeof arr[0][0] === 'number') {
      if (arr.length < 2) return '';
      let d = `M${scalePt(arr[0][0], arr[0][1])}`;
      for (let i = 1; i < arr.length; i++) d += `L${scalePt(arr[i][0], arr[i][1])}`;
      return d + 'Z';
    }
    return arr.map(a => walk(a)).join(' ');
  }
  return walk(geometry?.coordinates || []);
}

export async function renderizarMapaAmcharts(paisNome) {
  try {
    const arquivo = nomeParaArquivo[paisNome];
    if (!arquivo) return null;

    if (!mapasCarregados[arquivo]) {
      const resp = await fetch(`/assets/maps/${arquivo}.json`);
      mapasCarregados[arquivo] = await resp.json();
    }

    const data = mapasCarregados[arquivo];
    const features = data.features || [];
    if (features.length === 0) return null;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    features.forEach(f => {
      extrairCoords(f.geometry).forEach(([x, y]) => {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      });
    });

    const w = maxX - minX;
    const h = maxY - minY;
    if (w <= 0 || h <= 0 || !isFinite(w) || !isFinite(h)) return null;
    const pad = Math.max(w, h) * 0.05;

    const pathsHtml = features.map(f => {
      const nome = f.properties?.name || f.id || '';
      const id = f.id || nome.replace(/\s+/g, '-').toLowerCase();
      const d = pathToD(f.geometry);
      return d ? `<path id="svg-${id}" class="svg-estado" data-nome="${nome}" d="${d}" />` : '';
    }).join('');

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;overflow:hidden;">
        <svg viewBox="${minX-pad} ${minY-pad} ${w+pad*2} ${h+pad*2}" style="width:100%;height:auto;max-height:55vh;" class="mapa-svg-amcharts">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.12); stroke:rgba(0,243,255,0.3); stroke-width:0.5; cursor:pointer; transition:all 0.2s; }
            .svg-estado:hover { fill:rgba(0,243,255,0.35); stroke:#ff0055; stroke-width:1; }
            .svg-estado.ativo { fill:rgba(0,255,100,0.25); stroke:#00ff66; stroke-width:1; }
          </style>
          ${pathsHtml}
        </svg>
        <div id="svg-info-${arquivo}" style="text-align:center;color:#888;font-size:0.7rem;margin-top:6px;">
          Passe o mouse sobre um estado
        </div>
      </div>
    `;
  } catch (e) {
    console.log('[AMCHARTS] erro:', e.message);
    return null;
  }
}

export function initMapaAmcharts(paisNome) {
  const arquivo = nomeParaArquivo[paisNome];
  if (!arquivo) return;

  const svg = document.querySelector('.mapa-svg-amcharts');
  if (!svg) return;

  const playerEstado = sessionStorage.getItem('playerEstado') || '';
  const playerPais = sessionStorage.getItem('playerPais') || '';

  svg.querySelectorAll('.svg-estado').forEach(path => {
    const nome = path.getAttribute('data-nome') || '';
    if (playerPais === paisNome && playerEstado === nome) path.classList.add('ativo');

    path.addEventListener('click', () => {
      if (window.selecionarEstado) window.selecionarEstado(paisNome, nome);
    });

    path.addEventListener('mouseenter', () => {
      const info = document.getElementById(`svg-info-${arquivo}`);
      if (info) info.textContent = `📍 ${nome}`;
    });

    path.addEventListener('mouseleave', () => {
      const info = document.getElementById(`svg-info-${arquivo}`);
      if (info) info.textContent = 'Clique em um estado para explorar';
    });
  });
}
