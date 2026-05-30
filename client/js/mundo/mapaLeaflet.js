const COORDS = {
  'Brasil': [-14.235, -51.9253],
  'Estados Unidos': [37.0902, -95.7129],
  'França': [46.6034, 1.8883],
  'Itália': [41.8719, 12.5674],
  'Japão': [36.2048, 138.2529],
  'Reino Unido': [55.3781, -3.4360],
  'Alemanha': [51.1657, 10.4515],
  'Espanha': [40.4637, -3.7492],
  'Portugal': [39.3999, -8.2245],
  'Argentina': [-38.4161, -63.6167],
  'México': [23.6345, -102.5528],
  'China': [35.8617, 104.1954],
  'Austrália': [-25.2744, 133.7751],
  'Índia': [20.5937, 78.9629],
  'Canadá': [56.1304, -106.3468],
  'Rússia': [61.5240, 105.3188],
  'Turquia': [38.9637, 35.2433],
  'Egito': [26.8206, 30.8025],
  'África do Sul': [-30.5595, 22.9375],
  'Cuba': [21.5218, -77.7812],
  'Coreia do Sul': [35.9078, 127.7669],
  'Suécia': [60.1282, 18.6435],
  'Noruega': [60.4720, 8.4689],
  'Suíça': [46.8182, 8.2275],
  'Holanda': [52.1326, 5.2913],
  'Bélgica': [50.8503, 4.3517],
  'Áustria': [47.5162, 14.5501],
  'Grécia': [39.0742, 21.8243],
  'Irlanda': [53.4129, -8.2439],
  'Polônia': [51.9194, 19.1451],
  'Islândia': [64.9631, -19.0208],
  'Nova Zelândia': [-40.9006, 174.8860]
};

const ZOOM = {
  'Brasil': 4, 'Estados Unidos': 4, 'França': 5, 'Itália': 6, 'Japão': 5,
  'Reino Unido': 5, 'Alemanha': 5, 'Espanha': 5, 'Portugal': 6, 'Argentina': 4,
  'México': 5, 'China': 4, 'Austrália': 4, 'Índia': 4, 'Canadá': 3,
  'Rússia': 3, 'Turquia': 5, 'Egito': 6, 'África do Sul': 5, 'Cuba': 7,
  'Coreia do Sul': 7, 'Suécia': 5, 'Noruega': 5, 'Suíça': 7, 'Holanda': 7,
  'Bélgica': 7, 'Áustria': 7, 'Grécia': 6, 'Irlanda': 6, 'Polônia': 6,
  'Islândia': 6, 'Nova Zelândia': 5
};

export function renderizarMapaLeaflet(paisNome) {
  const coord = COORDS[paisNome];
  if (!coord) return null;

  return `
    <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;margin-bottom:15px;overflow:hidden;position:relative;">
      <div id="leaflet-${paisNome.replace(/\s+/g, '-')}" style="width:100%;height:300px;"></div>
    </div>
  `;
}

export function initMapaLeaflet(paisNome) {
  const coord = COORDS[paisNome];
  if (!coord) return;

  const id = `leaflet-${paisNome.replace(/\s+/g, '-')}`;
  const el = document.getElementById(id);
  if (!el) return;

  // Limpar instância anterior
  el.innerHTML = '';

  setTimeout(() => {
    const map = L.map(id, {
      center: coord,
      zoom: ZOOM[paisNome] || 5,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18
    }).addTo(map);

    L.marker(coord).addTo(map);

    // Destruir ao navegar
    const observer = new MutationObserver(() => {
      if (!document.contains(el)) {
        map.remove();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }, 100);
}
