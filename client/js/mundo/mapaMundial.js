// Mapa mundial interativo usando svgMap (StephanWagner)
// https://github.com/StephanWagner/svgMap

export function renderizarMapaMundial() {
  return `
    <div class="mapa-container" style="background:#030407;">
      <div class="mapa-header">
        <button class="mapa-btn-voltar" onclick="window.voltarParaMundo()">← VOLTAR</button>
        <h2 class="mapa-titulo">🌍 MAPA MUNDIAL</h2>
        <button class="mapa-btn-fechar" onclick="window.fecharPainel()">✖</button>
      </div>
      <div id="svgMapContainer" style="width:100%;height:70vh;background:#030407;"></div>
    </div>
  `;
}

export function initMapaMundial() {
  const container = document.getElementById('svgMapContainer');
  if (!container) return;

  // Limpar instância anterior
  container.innerHTML = '';

  try {
    const map = new svgMap({
      targetElementID: 'svgMapContainer',
      colorMin: '#0a3d5c',
      colorMax: '#00f3ff',
      colorNoData: '#1a1a2e',
      flagType: 'emoji',
      showTooltips: false,
      showContinentSelector: false,
      zoomButtonsPosition: 'bottomRight',
      initialZoom: 1.2,
      maxZoom: 6,
      countryNames: window.paisesDataGlobal?.reduce((acc, p) => {
        const iso = { 'Brasil':'BR','Estados Unidos':'US','França':'FR','Itália':'IT','Japão':'JP',
          'Reino Unido':'GB','Alemanha':'DE','Espanha':'ES','Portugal':'PT','Argentina':'AR',
          'México':'MX','China':'CN','Austrália':'AU','Índia':'IN','Canadá':'CA','Rússia':'RU',
          'Turquia':'TR','Egito':'EG','África do Sul':'ZA','Cuba':'CU','Coreia do Sul':'KR',
          'Suécia':'SE','Noruega':'NO','Suíça':'CH','Holanda':'NL','Bélgica':'BE','Áustria':'AT',
          'Grécia':'GR','Irlanda':'IE','Polônia':'PL' }[p.nome];
        if (iso) acc[iso] = p.nome;
        return acc;
      }, {}) || {},
      onCountryClick: (countryID) => {
        const nome = {
          'BR':'Brasil', 'US':'Estados Unidos', 'FR':'França', 'IT':'Itália', 'JP':'Japão',
          'GB':'Reino Unido', 'DE':'Alemanha', 'ES':'Espanha', 'PT':'Portugal', 'AR':'Argentina',
          'MX':'México', 'CN':'China', 'AU':'Austrália', 'IN':'Índia', 'CA':'Canadá',
          'RU':'Rússia', 'TR':'Turquia', 'EG':'Egito', 'ZA':'África do Sul', 'CU':'Cuba',
          'KR':'Coreia do Sul', 'SE':'Suécia', 'NO':'Noruega', 'CH':'Suíça', 'NL':'Holanda',
          'BE':'Bélgica', 'AT':'Áustria', 'GR':'Grécia', 'IE':'Irlanda', 'PL':'Polônia'
        }[countryID];
        if (nome && window.selecionarPais) window.selecionarPais(nome);
      }
    });
  } catch (e) {
    console.log('[MAPAMUNDI] erro:', e.message);
    container.innerHTML = '<div style="text-align:center;padding:40px;color:#888;">Erro ao carregar mapa</div>';
  }
}
