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
      cache[iso] = await resp.text();
      if (!cache[iso].includes('<path')) { cache[iso] = null; return null; }
    }
    const svg = cache[iso];
    const vb = svg.match(/viewBox="([^"]+)"/)?.[1] || '0 0 800 600';
    // Extrai só os paths com data-nome
    const paths = svg.match(/<path[^>]*data-nome="[^"]*"[^>]*d="[^"]*"[^>]*\/?>/g) || [];
    // Extrai a primeira parte do SVG (até o primeiro path) + os paths + fecha
    const inicio = svg.indexOf('<path');
    const pathsHtml = paths.join('\n          ');
    return `
      <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:10px;margin-bottom:15px;">
        <svg viewBox="${vb}" style="width:100%;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">
          <style>
            .regiao { fill:rgba(0,243,255,0.3); stroke:#00f3ff; stroke-width:0.3; }
          </style>
          ${pathsHtml}
        </svg>
      </div>
    `;
  } catch (e) { return null; }
}
