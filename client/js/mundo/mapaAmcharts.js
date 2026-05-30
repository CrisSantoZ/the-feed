/* ==========================================================================
   RENDERIZADOR DE MAPAS amCharts - SVG com estados clicáveis
   ========================================================================== */

const nomeParaArquivo = {
  'Estados Unidos': 'eua', 'EUA': 'eua', 'França': 'franca', 'Itália': 'italia',
  'Japão': 'japao', 'Reino Unido': 'reino_unido', 'Alemanha': 'alemanha',
  'Espanha': 'espanha', 'Portugal': 'portugal', 'Argentina': 'argentina',
  'México': 'mexico', 'México': 'mexico',
  'China': 'china', 'Austrália': 'australia', 'Índia': 'india',
  'Canadá': 'canada', 'Rússia': 'russia', 'Turquia': 'turquia',
  'Egito': 'egito', 'África do Sul': 'africa_sul', 'Cuba': 'cuba',
  'Coreia do Sul': 'coreia_sul', 'Suécia': 'suecia', 'Noruega': 'noruega',
  'Suíça': 'suica', 'Holanda': 'holanda', 'Bélgica': 'belgica',
  'Áustria': 'austria', 'Grécia': 'grecia', 'Irlanda': 'irlanda',
  'Polônia': 'polonia'
};

const mapasCarregados = {};

// Mapeamento de nomes de estados/regiões do amCharts para os nomes do countries.js
const estadosParaRegiao = {};

export async function renderizarMapaAmcharts(paisNome) {
  const arquivo = nomeParaArquivo[paisNome];
  if (!arquivo) return null;
  
  try {
    if (!mapasCarregados[arquivo]) {
      const resp = await fetch(`/assets/maps/${arquivo}.json`);
      mapasCarregados[arquivo] = await resp.json();
    }
    
    const data = mapasCarregados[arquivo];
    const features = data.features || [];
    if (features.length === 0) return null;

    // Calcular viewBox
    let todasPaths = [];
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

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

    features.forEach(f => {
      const pontos = extrairCoords(f.geometry);
      pontos.forEach(([x, y]) => {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      });
    });

    const SCALE = 0.01;
    const w = (maxX - minX) * SCALE;
    const h = (maxY - minY) * SCALE;
    if (w <= 0 || h <= 0 || !isFinite(w) || !isFinite(h)) return null;
    const pad = Math.max(w, h) * 0.05;

    function pathToD(geometry) {
      function walkCoords(arr, depth = 0) {
        if (!arr || arr.length === 0) return '';
        if (Array.isArray(arr[0]) && Array.isArray(arr[0][0]) && typeof arr[0][0][0] === 'number') {
          return arr.map(ring => {
            if (!ring || ring.length < 2) return '';
            let d = `M${ring[0][0]*SCALE},${ring[0][1]*SCALE}`;
            for (let i = 1; i < ring.length; i++) {
              d += `L${ring[i][0]*SCALE},${ring[i][1]*SCALE}`;
            }
            d += 'Z';
            return d;
          }).join(' ');
        }
        if (Array.isArray(arr[0]) && typeof arr[0][0] === 'number') {
          if (arr.length < 2) return '';
          let d = `M${arr[0][0]*SCALE},${arr[0][1]*SCALE}`;
          for (let i = 1; i < arr.length; i++) {
            d += `L${arr[i][0]*SCALE},${arr[i][1]*SCALE}`;
          }
          d += 'Z';
          return d;
        }
        return arr.map(a => walkCoords(a, depth + 1)).join(' ');
      }
      return walkCoords(geometry?.coordinates || []);
    }
            d += 'Z';
            return d;
          }).join(' ');
        }
        if (Array.isArray(arr[0]) && typeof arr[0][0] === 'number') {
          // [[x,y],[x,y],...] - Polygon ring
          if (arr.length < 2) return '';
          let d = `M${arr[0][0]},${arr[0][1]}`;
          for (let i = 1; i < arr.length; i++) {
            d += `L${arr[i][0]},${arr[i][1]}`;
          }
          d += 'Z';
          return d;
        }
        return arr.map(a => walkCoords(a, depth + 1)).join(' ');
      }
      return walkCoords(geometry?.coordinates || []);
    }

    const pathsHtml = features.map(f => {
      const nome = f.properties?.name || f.id || '';
      const id = f.id || nome.replace(/\s+/g, '-').toLowerCase();
      const allPaths = pathToD(f.geometry);
      if (!allPaths) return '';
      return `<path id="svg-${id}" class="svg-estado" data-nome="${nome}" d="${allPaths}" />`;
    }).join('');

    const labelsHtml = '';

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;overflow:hidden;">
        <svg viewBox="${minX-pad} ${minY-pad} ${w+pad*2} ${h+pad*2}" style="width:100%;height:auto;max-height:55vh;" class="mapa-svg-amcharts">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.15); stroke:rgba(0,243,255,0.4); stroke-width:0.5; cursor:pointer; transition:all 0.2s; }
            .svg-estado:hover { fill:rgba(0,243,255,0.4); stroke:#ff0055; stroke-width:1; }
            .svg-estado.ativo { fill:rgba(0,255,100,0.3); stroke:#00ff66; stroke-width:1; }
          </style>
          ${pathsHtml}
          ${labelsHtml}
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

    if (playerPais === paisNome && playerEstado === nome) {
      path.classList.add('ativo');
    }

    path.addEventListener('click', () => {
      if (window.selecionarEstado) {
        window.selecionarEstado(paisNome, nome);
      }
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
