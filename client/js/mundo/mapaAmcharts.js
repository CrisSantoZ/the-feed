const nomeParaArquivo = {
  'Estados Unidos': 'usaLow','EUA': 'usaLow','França': 'franceLow','Itália': 'italyLow',
  'Japão': 'japanLow','Reino Unido': 'ukLow','Alemanha': 'germanyLow',
  'Espanha': 'spainLow','Portugal': 'portugalLow','Argentina': 'argentinaLow',
  'México': 'mexicoLow','China': 'chinaLow','Austrália': 'australiaLow','Índia': 'indiaLow',
  'Canadá': 'canadaLow','Rússia': 'russiaLow','Turquia': 'turkeyLow',
  'Egito': 'egyptLow','África do Sul': 'southAfricaLow','Cuba': 'cubaLow',
  'Coreia do Sul': 'southKoreaLow','Suécia': 'swedenLow','Noruega': 'norwayLow',
  'Suíça': 'switzerlandLow','Holanda': 'netherlandsLow','Bélgica': 'belgiumLow',
  'Áustria': 'austriaLow','Grécia': 'greeceLow','Irlanda': 'irelandLow','Polônia': 'polandLow'
};

const cache = {};

// Extrai um array plano de [x,y] a partir da estrutura GeoJSON
function coletarPontos(arr, out) {
  if (!arr || !arr.length) return;
  if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
    out.push([arr[0], arr[1]]);
  } else {
    for (let i = 0; i < arr.length; i++) coletarPontos(arr[i], out);
  }
}

// Gera o atributo d="..." para um <path> a partir das coordenadas GeoJSON
function gerarPath(coords) {
  function walk(arr) {
    if (!arr || arr.length === 0) return '';
    // [[[x,y],[x,y],...]] - MultiPolygon
    if (Array.isArray(arr[0]) && Array.isArray(arr[0][0]) && typeof arr[0][0][0] === 'number') {
      return arr.map(ring => desenharAnel(ring)).join(' ');
    }
    // [[x,y],[x,y],...] - Polygon
    if (Array.isArray(arr[0]) && typeof arr[0][0] === 'number') {
      return desenharAnel(arr);
    }
    return arr.map(a => walk(a)).join(' ');
  }

  function desenharAnel(ring) {
    if (!ring || ring.length < 2) return '';
    let d = `M${ring[0][0]},${ring[0][1]}`;
    for (let i = 1; i < ring.length; i++) d += `L${ring[i][0]},${ring[i][1]}`;
    return d + 'Z';
  }

  return walk(coords);
}

export async function renderizarMapaAmcharts(paisNome) {
  try {
    const arquivo = nomeParaArquivo[paisNome];
    if (!arquivo) return null;

    if (!cache[arquivo]) {
      const resp = await fetch(`/assets/maps/${arquivo}.json`);
      cache[arquivo] = await resp.json();
    }

    const data = cache[arquivo];
    const features = data.features || [];
    if (!features.length) return null;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    features.forEach(f => {
      const pts = [];
      coletarPontos(f.geometry?.coordinates, pts);
      pts.forEach(([x, y]) => {
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      });
    });

    const w = maxX - minX;
    const h = maxY - minY;
    if (w <= 0 || h <= 0 || !isFinite(w) || !isFinite(h)) return null;
    const pad = Math.max(w, h) * 0.03;

    const pathsHtml = features.map(f => {
      const nome = f.properties?.name || f.id || '';
      const d = gerarPath(f.geometry?.coordinates);
      if (!d) return '';
      const id = (f.id || nome).replace(/[^a-zA-Z0-9]/g, '_');
      return `<path id="sp-${id}" class="svg-estado" data-nome="${nome}" d="${d}" />`;
    }).join('');

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;overflow:hidden;">
        <svg viewBox="${minX-pad} ${minY-pad} ${w+pad*2} ${h+pad*2}" style="width:100%;height:auto;max-height:55vh;display:block;" class="mapa-svg-amcharts">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.1); stroke:#00f3ff; stroke-width:0.2; cursor:pointer; transition:fill 0.2s; }
            .svg-estado:hover { fill:rgba(0,243,255,0.35); stroke:#ff0055; stroke-width:0.4; }
            .svg-estado.ativo { fill:rgba(0,255,100,0.2); stroke:#00ff66; stroke-width:0.4; }
          </style>
          ${pathsHtml}
        </svg>
        <div id="sinfo-${arquivo}" style="text-align:center;color:#888;font-size:0.7rem;margin-top:6px;">
          Passe o mouse sobre um estado
        </div>
      </div>
    `;
  } catch (e) {
    console.log('[MAP] erro:', e.message);
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

  svg.querySelectorAll('.svg-estado').forEach(el => {
    const nome = el.getAttribute('data-nome') || '';
    if (playerPais === paisNome && playerEstado === nome) el.classList.add('ativo');

    el.addEventListener('click', () => {
      if (window.selecionarEstado) window.selecionarEstado(paisNome, nome);
    });

    el.addEventListener('mouseenter', () => {
      const info = document.getElementById(`sinfo-${arquivo}`);
      if (info) info.textContent = `📍 ${nome}`;
    });

    el.addEventListener('mouseleave', () => {
      const info = document.getElementById(`sinfo-${arquivo}`);
      if (info) info.textContent = 'Passe o mouse sobre um estado';
    });
  });
}
