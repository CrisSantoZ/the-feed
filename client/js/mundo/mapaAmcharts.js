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

    features.forEach(f => {
      const paths = f.geometry?.paths || [];
      paths.forEach(path => {
        path.forEach(([x, y]) => {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        });
      });
    });

    const w = maxX - minX;
    const h = maxY - minY;
    const pad = Math.max(w, h) * 0.05;

    function pathToD(pathCoords) {
      if (!pathCoords || pathCoords.length === 0) return '';
      let d = `M${pathCoords[0][0]},${pathCoords[0][1]}`;
      for (let i = 1; i < pathCoords.length; i++) {
        d += `L${pathCoords[i][0]},${pathCoords[i][1]}`;
      }
      d += 'Z';
      return d;
    }

    const pathsHtml = features.map(f => {
      const nome = f.properties?.name || f.id || '';
      const id = f.id || nome.replace(/\s+/g, '-').toLowerCase();
      const allPaths = (f.geometry?.paths || []).map(p => pathToD(p)).join(' ');
      if (!allPaths) return '';
      return `<path id="svg-${id}" class="svg-estado" data-nome="${nome}" d="${allPaths}" />`;
    }).join('');

    const labelsHtml = features.map(f => {
      // Calcular centroide aproximado
      const paths = f.geometry?.paths || [];
      let cx = 0, cy = 0, count = 0;
      paths.forEach(p => { p.forEach(([x, y]) => { cx += x; cy += y; count++; }); });
      if (count === 0) return '';
      cx /= count; cy /= count;
      const nome = f.properties?.name || '';
      if (!nome) return '';
      return `<text x="${cx}" y="${cy}" class="svg-label">${nome}</text>`;
    }).join('');

    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;overflow:hidden;">
        <svg viewBox="${minX-pad} ${minY-pad} ${w+pad*2} ${h+pad*2}" style="width:100%;height:auto;max-height:55vh;" class="mapa-svg-amcharts">
          <style>
            .svg-estado { fill:rgba(0,243,255,0.12); stroke:rgba(0,243,255,0.3); stroke-width:1; cursor:pointer; transition:all 0.2s; }
            .svg-estado:hover { fill:rgba(0,243,255,0.35); stroke:#ff0055; stroke-width:1.5; }
            .svg-estado.ativo { fill:rgba(0,255,100,0.25); stroke:#00ff66; stroke-width:1.5; }
            .svg-label { fill:#666; font-size:10px; font-family:'JetBrains Mono',monospace; text-anchor:middle; pointer-events:none; }
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
