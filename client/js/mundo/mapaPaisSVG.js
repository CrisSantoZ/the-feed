const MAPS_PATH = '/assets/maps';

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
      const resp = await fetch(`${MAPS_PATH}/${iso}.svg`);
      if (!resp.ok) return null;
      cache[iso] = await resp.text();
      if (!cache[iso].includes('<path')) { cache[iso] = null; return null; }
    }
    const svg = cache[iso];
    const vb = svg.match(/viewBox="([^"]+)"/)?.[1] || '0 0 800 600';
    const paths = svg.match(/<path[^>]*data-nome="[^"]*"[^>]*d="[^"]*"[^>]*\/?>/g) || [];
    if (!paths.length) return null;
    const pathsHtml = paths.join('\n          ');
    return `
      <div id="mapa-svg-wrapper" class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;">
        <svg viewBox="${vb}" style="width:100%;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">
          <style>
            .regiao { fill:rgba(0,243,255,0.25); stroke:#00f3ff; stroke-width:0.2; pointer-events: all; transition: fill 0.2s ease, stroke 0.2s ease, opacity 0.2s ease; }
            .regiao:hover { fill:rgba(0,243,255,0.45); }
          </style>
          ${pathsHtml}
        </svg>
      </div>
    `;
  } catch (e) {
    console.warn(`[MAPA SVG] Falha ao carregar SVG de ${paisNome}:`, e);
    return null;
  }
}
