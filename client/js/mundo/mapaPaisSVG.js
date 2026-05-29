import mapasPaises from './mapasPaises.js';

const mapaRegiaoEstados = {
  'eua': { 'california': 'Califórnia', 'nova-york': 'Nova York', 'texas': 'Texas', 'florida': 'Flórida',
           'illinois': 'Illinois', 'nevada': 'Nevada', 'washington-state': 'Washington', 'georgia': 'Geórgia',
           'hawai': 'Havaí', 'alasca': 'Alasca', 'arizona': 'Arizona', 'colorado': 'Colorado',
           'massachusetts': 'Massachusetts', 'washington-dc': 'Washington D.C.' },
  'franca': { 'ile-de-france': 'Île-de-France', 'provence': "Provence-Alpes-Côte d'Azur", 'auvergne-rhone': 'Auvergne-Rhône-Alpes',
              'occitanie': 'Occitanie', 'nouvelle-aquitaine': 'Nouvelle-Aquitaine', 'bretagne': 'Bretagne',
              'hauts-de-france': 'Hauts-de-France', 'normandie': 'Normandie', 'grand-est': 'Grand Est',
              'bourgogne': 'Bourgogne-Franche-Comté', 'centre-val': 'Centre-Val de Loire', 'pays-loire': 'Pays de la Loire',
              'corse': 'Corse' },
  'italia': { 'lombardia': 'Lombardia', 'lazio': 'Lácio', 'veneto': 'Vêneto', 'toscana': 'Toscana',
              'campania': 'Campânia', 'sicilia': 'Sicília', 'piemonte': 'Piemonte', 'liguria': 'Ligúria',
              'marche': 'Marche', 'puglia': 'Puglia', 'calabria': 'Calábria', 'sardegna': 'Sardenha' },
  'espanha': { 'madrid': 'Madrid', 'catalunha': 'Catalunha', 'andalucia': 'Andaluzia', 'valencia': 'Comunidade Valenciana',
               'pais-basco': 'País Basco', 'galicia': 'Galícia', 'castela-leao': 'Castela e Leão', 'aragon': 'Aragão',
               'castela-mancha': 'Castela-La Mancha', 'ilhas-canarias': 'Ilhas Canárias', 'baleares': 'Ilhas Baleares' },
  'alemanha': { 'berlim': 'Berlim', 'baviera': 'Baviera', 'norte-vestfalia': 'Renânia do Norte-Vestfália',
                'hamburgo': 'Hamburgo', 'baden-wurttemberg': 'Baden-Württemberg', 'saxonia': 'Saxônia',
                'hessen': 'Hessen', 'saxonia-anhalt': 'Saxônia-Anhalt', 'turingia': 'Turíngia',
                'mecklemburgo': 'Mecklemburgo-Pomerânia Ocidental', 'baixa-saxonia': 'Baixa Saxônia' },
  'portugal': { 'lisboa': 'Lisboa', 'porto': 'Porto', 'algarve': 'Algarve', 'alentejo': 'Alentejo',
                'centro': 'Região Centro', 'acores': 'Açores', 'madeira': 'Madeira' },
  'reino_unido': { 'inglaterra': 'Inglaterra', 'escocia': 'Escócia', 'gales': 'País de Gales', 'irlanda-norte': 'Irlanda do Norte' },
  'argentina': { 'buenos-aires': 'Buenos Aires', 'cordoba': 'Córdoba', 'santa-fe': 'Santa Fé', 'mendoza': 'Mendoza',
                 'patagonia': 'Patagônia', 'noroeste': 'Noroeste Argentino', 'litoral': 'Litoral' },
  'mexico': { 'cidade-mexico': 'Cidade do México', 'jalisco': 'Jalisco', 'nuevo-leon': 'Nuevo León',
              'quintana-roo': 'Quintana Roo', 'oaxaca': 'Oaxaca', 'yucatan': 'Yucatán',
              'baja-california': 'Baja California', 'chiapas': 'Chiapas' },
  'japao': { 'kanto': 'Kantō', 'kansai': 'Kansai', 'chubu': 'Chūbu', 'kyushu': 'Kyushu',
             'hokkaido': 'Hokkaido', 'tohoku': 'Tohoku', 'chugoku': 'Chūgoku', 'shikoku': 'Shikoku', 'okinawa': 'Okinawa' },
  'china': { 'pequim': 'Pequim', 'xangai': 'Xangai', 'guangdong': 'Guangdong', 'sichuan': 'Sichuan',
             'yunnan': 'Yunnan', 'xinjiang': 'Xinjiang', 'tibet': 'Tibet', 'mongolia-interior': 'Mongólia Interior',
             'heilongjiang': 'Heilongjiang', 'hubei': 'Hubei' },
  'coreia_sul': { 'seul': 'Seul', 'busan': 'Busan', 'jeju': 'Jeju', 'gyeonggi': 'Gyeonggi', 'gwangju': 'Gwangju' },
  'australia': { 'nsw': 'Nova Gales do Sul', 'victoria': 'Victoria', 'queensland': 'Queensland',
                 'australia-ocidental': 'Austrália Ocidental', 'australia-sul': 'Austrália do Sul',
                 'territorio-norte': 'Território do Norte' },
  'egito': { 'cairo': 'Cairo', 'alexandria': 'Alexandria', 'assua': 'Assuã', 'luxor': 'Luxor', 'mar-vermelho': 'Mar Vermelho' },
  'africa_sul': { 'gauteng': 'Gauteng', 'cabo-ocidental': 'Cabo Ocidental', 'kwazulu-natal': 'KwaZulu-Natal',
                  'cabo-oriental': 'Cabo Oriental', 'mpumalanga': 'Mpumalanga' },
  'turquia': { 'istambul': 'Istambul', 'ancara': 'Ancara', 'antalya': 'Antalya', 'capadocia': 'Capadócia',
               'esmirna': 'Esmirna', 'trabzon': 'Trabzon' },
  'cuba': { 'havana': 'Havana', 'santiago-cuba': 'Santiago de Cuba', 'holguin': 'Holguín', 'villa-clara': 'Villa Clara' }
};

function normalizar(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const mapaNomeParaId = {
  'brasil': 'brasil', 'estados unidos': 'eua', 'eua': 'eua', 'franca': 'franca',
  'italia': 'italia', 'japao': 'japao', 'reino unido': 'reino_unido',
  'alemanha': 'alemanha', 'espanha': 'espanha', 'portugal': 'portugal',
  'argentina': 'argentina', 'mexico': 'mexico',
  'china': 'china', 'coreia do sul': 'coreia_sul', 'australia': 'australia',
  'egito': 'egito', 'africa do sul': 'africa_sul',
  'turquia': 'turquia', 'cuba': 'cuba'
};

const bandeiras = {
  'brasil': '🇧🇷', 'eua': '🇺🇸', 'franca': '🇫🇷', 'italia': '🇮🇹', 'japao': '🇯🇵',
  'reino_unido': '🇬🇧', 'alemanha': '🇩🇪', 'espanha': '🇪🇸', 'portugal': '🇵🇹',
  'argentina': '🇦🇷', 'mexico': '🇲🇽', 'china': '🇨🇳', 'coreia_sul': '🇰🇷',
  'australia': '🇦🇺', 'egito': '🇪🇬', 'africa_sul': '🇿🇦', 'turquia': '🇹🇷', 'cuba': '🇨🇺'
};

export function renderizarMapaPaisSVG(paisNome, paisId) {
  const id = paisId || mapaNomeParaId[normalizar(paisNome)] || null;
  console.log('[SVG] renderizar para:', paisNome, 'normalizado:', normalizar(paisNome), 'id:', id);
  const dados = mapasPaises[id];
  const config = mapaRegiaoEstados[id];
  
  if (!dados || !config) return null;

  const flag = bandeiras[id] || '🌍';
  
  const paths = dados.regioes.map(r => {
    const nomeEstado = config[r.id] || r.nome;
    return `<path id="svg-${r.id}" class="svg-estado" data-estado="${r.id}" data-nome="${nomeEstado}" d="${r.path}" />`;
  }).join('');

  const labels = dados.regioes.map(r => {
    const nomeEstado = config[r.id] || r.nome;
    return `<text x="${r.cx}" y="${r.cy}" class="svg-label" data-estado="${r.id}">${nomeEstado}</text>`;
  }).join('');

  return `
    <div class="mapa-wrapper" style="background:#0a0a14;border-radius:12px;padding:15px;margin-bottom:15px;">
      <svg viewBox="${dados.viewBox}" class="mapa-svg-generico" style="width:100%;height:auto;max-height:60vh;">
        <style>
          .svg-estado {
            fill: rgba(0, 243, 255, 0.15);
            stroke: rgba(0, 243, 255, 0.4);
            stroke-width: 1.5;
            cursor: pointer;
            transition: all 0.2s;
          }
          .svg-estado:hover {
            fill: rgba(0, 243, 255, 0.4);
            stroke: #ff0055;
            stroke-width: 2;
          }
          .svg-estado.ativo {
            fill: rgba(0, 255, 100, 0.3);
            stroke: #00ff66;
            stroke-width: 2.5;
          }
          .svg-label {
            fill: #888;
            font-size: 5px;
            font-family: 'JetBrains Mono', monospace;
            text-anchor: middle;
            pointer-events: none;
            dominant-baseline: middle;
          }
        </style>
        ${paths}
        ${labels}
      </svg>
      <div id="svg-info-${id}" style="text-align:center;color:#888;font-size:0.7rem;margin-top:8px;">
        Clique em uma região para explorar
      </div>
    </div>
  `;
}

export function initMapaPaisSVG(paisNome, paisId) {
  const id = paisId || mapaNomeParaId[paisNome?.toLowerCase()] || null;
  const dados = mapasPaises[id];
  const config = mapaRegiaoEstados[id];
  if (!dados || !config) return;

  const svg = document.querySelector('.mapa-svg-generico');
  if (!svg) return;

  const playerEstado = sessionStorage.getItem('playerEstado') || '';
  const playerPais = sessionStorage.getItem('playerPais') || '';

  dados.regioes.forEach(r => {
    const path = svg.querySelector(`#svg-${r.id}`);
    if (!path) return;

    const nomeEstado = config[r.id] || r.nome;
    const isPlayerHere = playerPais === paisNome && playerEstado === nomeEstado;

    if (isPlayerHere) {
      path.classList.add('ativo');
    }

    path.addEventListener('click', () => {
      if (window.selecionarEstado) {
        window.selecionarEstado(paisNome, nomeEstado);
      }
    });

    path.addEventListener('mouseenter', () => {
      const info = document.getElementById(`svg-info-${id}`);
      if (info) info.textContent = `📍 ${nomeEstado}`;
    });

    path.addEventListener('mouseleave', () => {
      const info = document.getElementById(`svg-info-${id}`);
      if (info) info.textContent = 'Clique em uma região para explorar';
    });
  });
}
