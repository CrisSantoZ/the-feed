const MAPS_PATH = '/assets/maps';

const ISO_POR_NOME = {
  'Brasil': 'BR', 'Estados Unidos': 'US', 'EUA': 'US', 'França': 'FRA',
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
      // try several filename candidates (3-letter, 2-letter, upper/lower)
      const candidates = [];
      candidates.push(iso);
      if (iso.length === 3) candidates.push(iso.slice(0,2));
      candidates.push(iso.toUpperCase());
      if (iso.length === 3) candidates.push(iso.slice(0,2).toUpperCase());
      // unique
      const uniq = [...new Set(candidates.map(s => String(s).toUpperCase()))];
      let found = null;
      for (const cand of uniq) {
        try {
          const resp = await fetch(`${MAPS_PATH}/${cand}.svg`);
          if (!resp.ok) continue;
          const text = await resp.text();
          if (!text.includes('<path')) continue;
          found = { svg: text, file: cand };
          break;
        } catch (e) {
          // network error, continue trying other candidates
          continue;
        }
      }
      if (!found) { cache[iso] = null; return null; }
      cache[iso] = found.svg;
    }
    const svg = cache[iso];
    const vb = svg.match(/viewBox="([^"]+)"/)?.[1] || '0 0 800 600';
    const paths = svg.match(/<path[^>]*data-nome="[^"]*"[^>]*d="[^"]*"[^>]*\/?>/g) || [];
    if (!paths.length) return null;
    const pathsHtml = paths.join('\n          ');
    return `
      <div id="mapa-svg-wrapper" class="mapa-wrapper mapa-svg-wrapper" style="margin-bottom:15px;">
        <svg viewBox="${vb}" class="mapa-svg" preserveAspectRatio="xMidYMid meet">
          ${pathsHtml}
        </svg>
        <div id="mapa-tooltip" class="mapa-tooltip" style="display:none;">&nbsp;</div>
      </div>
    `;
  } catch (e) {
    console.warn(`[MAPA SVG] Falha ao carregar SVG de ${paisNome}:`, e);
    return null;
  }
}
