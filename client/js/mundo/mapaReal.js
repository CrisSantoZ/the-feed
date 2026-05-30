/* ==========================================================================
   RENDERIZADOR DE MAPAS REAIS A PARTIR DE TopoJSON
   ========================================================================== */

const worldData = null;
let loadingPromise = null;

async function carregarDados() {
  if (worldData) return worldData;
  if (loadingPromise) return loadingPromise;
  loadingPromise = fetch('/assets/maps/world-50m.json').then(r => r.json());
  const data = await loadingPromise;
  return data;
}

// Mapeamento de nomes para IDs ISO 3166-1 alpha-3
const nomeParaISO = {
  'Brasil': 'BRA', 'Estados Unidos': 'USA', 'EUA': 'USA', 'França': 'FRA',
  'Itália': 'ITA', 'Japão': 'JPN', 'Reino Unido': 'GBR', 'Alemanha': 'DEU',
  'Espanha': 'ESP', 'Portugal': 'PRT', 'Argentina': 'ARG', 'México': 'MEX',
  'China': 'CHN', 'Austrália': 'AUS', 'Rússia': 'RUS', 'Índia': 'IND',
  'Canadá': 'CAN', 'Suécia': 'SWE', 'Islândia': 'ISL', 'Nova Zelândia': 'NZL',
  'Turquia': 'TUR', 'Egito': 'EGY', 'África do Sul': 'ZAF', 'Cuba': 'CUB',
  'Coreia do Sul': 'KOR', 'Tailândia': 'THA', 'Suíça': 'CHE', 'Holanda': 'NLD',
  'Noruega': 'NOR', 'Dinamarca': 'DNK', 'Bélgica': 'BEL', 'Áustria': 'AUT',
  'Polônia': 'POL', 'Irlanda': 'IRL', 'Peru': 'PER', 'Chile': 'CHL',
  'Colômbia': 'COL', 'Venezuela': 'VEN', 'Uruguai': 'URY'
};

// IDs para nomes de região (mapeamento manual aproximado)
const idRegiaoParaNome = {};

export async function renderizarMapaReal(paisNome) {
  console.log('[MAPAREAL] iniciando para', paisNome);
  try {
    const data = await carregarDados();
    console.log('[MAPAREAL] dados carregados, tamanho:', Object.keys(data).length);
    const iso = nomeParaISO[paisNome];
    console.log('[MAPAREAL] ISO para', paisNome, '=', iso);
    if (!iso) { console.log('[MAPAREAL] ISO nao encontrado'); return null; }

    const geometries = data.objects.countries.geometries;
    const countryGeo = geometries.find(g => g.id === iso);
    console.log('[MAPAREAL] geometry found:', !!countryGeo);
    if (!countryGeo) return null;

    const arcs = data.arcs;
    const transform = data.transform;
    console.log('[MAPAREAL] arcs:', arcs?.length, 'transform:', !!transform);
  
  function decodeArc(arcIndex) {
    const abs = arcIndex >= 0;
    const idx = abs ? arcIndex : ~arcIndex;
    const arc = arcs[idx];
    const points = [];
    let x = 0, y = 0;
    for (const [dx, dy] of arc) {
      x += dx;
      y += dy;
      points.push([x, y]);
    }
    if (!abs) points.reverse();
    return points;
  }

  function arcToPath(arcIndices, scale, translate) {
    let parts = [];
    for (const ai of arcIndices) {
      const points = decodeArc(ai);
      const transformed = points.map(([x, y]) => [
        (x * scale[0] + translate[0]) * 10,
        (-y * scale[1] - translate[1]) * 10
      ]);
      let d = `M${transformed[0][0]},${transformed[0][1]}`;
      for (let i = 1; i < transformed.length; i++) {
        d += `L${transformed[i][0]},${transformed[i][1]}`;
      }
      d += 'Z';
      parts.push(d);
    }
    return parts.join('');
  }

  const scale = transform.scale;
  const translate = transform.translate;

  function getPaths(geometry) {
    if (geometry.type === 'Polygon') {
      return arcToPath(geometry.arcs, scale, translate);
    } else if (geometry.type === 'MultiPolygon') {
      return geometry.arcs.map(a => arcToPath(a, scale, translate)).join('');
    }
    return '';
  }

  const paths = getPaths(countryGeo);
  if (!paths) { console.log('[MAPAREAL] paths vazio'); return null; }

  console.log('[MAPAREAL] paths gerado, tamanho:', paths.length);

  // Calcular viewBox
  const allCoords = [];
  const walkArcs = (arcIndices) => {
    for (const ai of arcIndices) {
      const points = decodeArc(ai);
      for (const [x, y] of points) {
        allCoords.push([(x * scale[0] + translate[0]) * 10, (-y * scale[1] - translate[1]) * 10]);
      }
    }
  };

  if (countryGeo.type === 'Polygon') walkArcs(countryGeo.arcs);
  else if (countryGeo.type === 'MultiPolygon') countryGeo.arcs.forEach(a => walkArcs(a));

  const xs = allCoords.map(c => c[0]);
  const ys = allCoords.map(c => c[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const w = maxX - minX;
  const h = maxY - minY;
  const padding = 20;

  return `
    <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:15px;margin-bottom:15px;overflow:hidden;">
      <svg viewBox="${minX-padding} ${minY-padding} ${w+padding*2} ${h+padding*2}" style="width:100%;height:auto;max-height:60vh;">
        <path d="${paths}" fill="rgba(0,243,255,0.15)" stroke="rgba(0,243,255,0.4)" stroke-width="1" />
      </svg>
      <div style="text-align:center;color:#888;font-size:0.7rem;margin-top:8px;">
        🗺️ ${paisNome}
      </div>
    </div>
  `;
}
