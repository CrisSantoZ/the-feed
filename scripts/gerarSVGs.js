const fs = require('fs');
const path = require('path');
const https = require('https');

function mercator(lon, lat) {
  const x = lon;
  const y = Math.log(Math.tan(Math.PI/4 + lat*Math.PI/360));
  return [x, -y * 10];
}

function projetar(arr) {
  if (!arr || !arr.length) return;
  if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
    const [x, y] = mercator(arr[0], arr[1]);
    arr[0] = x;
    arr[1] = y;
  } else {
    arr.forEach(projetar);
  }
}

function geoToSVG(data, outputPath) {
  const features = data.features || [];
  if (!features.length) { console.log('  SEM FEATURES'); return; }

  // Aplicar projeção
  features.forEach(f => projetar(f.geometry?.coordinates));

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  function walkCoords(arr) {
    if (!arr || !arr.length) return;
    if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
      if (arr[0] < minX) minX = arr[0];
      if (arr[0] > maxX) maxX = arr[0];
      if (arr[1] < minY) minY = arr[1];
      if (arr[1] > maxY) maxY = arr[1];
    } else { arr.forEach(walkCoords); }
  }
  features.forEach(f => walkCoords(f.geometry?.coordinates));

  const w = maxX - minX;
  const h = maxY - minY;
  if (w <= 0 || h <= 0 || !isFinite(w) || !isFinite(h)) { console.log('  BOUNDS INVALIDOS'); return; }
  const pad = Math.max(w, h) * 0.03;
  const viewBox = `${minX-pad} ${minY-pad} ${w+pad*2} ${h+pad*2}`;

  function coordsToD(coords) {
    function walk(arr) {
      if (!arr || arr.length === 0) return '';
      if (Array.isArray(arr[0]) && Array.isArray(arr[0][0]) && typeof arr[0][0][0] === 'number') {
        return arr.map(ring => ringToPath(ring)).join(' ');
      }
      if (Array.isArray(arr[0]) && typeof arr[0][0] === 'number') { return ringToPath(arr); }
      return arr.map(a => walk(a)).join(' ');
    }
    return walk(coords);
  }

  function ringToPath(ring) {
    if (!ring || ring.length < 2) return '';
    let d = `M${ring[0][0]},${ring[0][1]}`;
    for (let i = 1; i < ring.length; i++) d += `L${ring[i][0]},${ring[i][1]}`;
    return d + 'Z';
  }

  const paths = features.map(f => {
    const name = f.properties?.name || f.id || '';
    const id = f.id || name.replace(/[^a-zA-Z0-9_-]/g, '_');
    const d = coordsToD(f.geometry?.coordinates);
    if (!d) return '';
    return `    <path id="${id}" class="regiao" data-nome="${name}" d="${d}" />`;
  }).filter(Boolean);

  if (!paths.length) { console.log('  SEM PATHS'); return; }

  const svg = `<?xml version="1.0"?>
<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
${paths.join('\n')}
</svg>`;

  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`  OK: ${path.basename(outputPath)} (${svg.length} bytes, ${paths.length} regioes)`);
}

function downloadJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const paises = {
  'US': 'https://cdn.amcharts.com/lib/4/geodata/json/usaHigh.json',
  'FR': 'https://cdn.amcharts.com/lib/4/geodata/json/franceLow.json',
  'IT': 'https://cdn.amcharts.com/lib/4/geodata/json/italyLow.json',
  'JP': 'https://cdn.amcharts.com/lib/4/geodata/json/japanLow.json',
  'GB': 'https://cdn.amcharts.com/lib/4/geodata/json/ukLow.json',
  'DE': 'https://cdn.amcharts.com/lib/4/geodata/json/germanyLow.json',
  'ES': 'https://cdn.amcharts.com/lib/4/geodata/json/spainLow.json',
  'PT': 'https://cdn.amcharts.com/lib/4/geodata/json/portugalLow.json',
  'AR': 'https://cdn.amcharts.com/lib/4/geodata/json/argentinaLow.json',
  'MX': 'https://cdn.amcharts.com/lib/4/geodata/json/mexicoLow.json',
  'CN': 'https://cdn.amcharts.com/lib/4/geodata/json/chinaLow.json',
  'AU': 'https://cdn.amcharts.com/lib/4/geodata/json/australiaLow.json',
  'IN': 'https://cdn.amcharts.com/lib/4/geodata/json/indiaLow.json',
  'CA': 'https://cdn.amcharts.com/lib/4/geodata/json/canadaLow.json',
  'TR': 'https://cdn.amcharts.com/lib/4/geodata/json/turkeyLow.json',
  'EG': 'https://cdn.amcharts.com/lib/4/geodata/json/egyptLow.json',
  'ZA': 'https://cdn.amcharts.com/lib/4/geodata/json/southAfricaLow.json',
  'CU': 'https://cdn.amcharts.com/lib/4/geodata/json/cubaLow.json',
  'KR': 'https://cdn.amcharts.com/lib/4/geodata/json/southKoreaLow.json',
  'RU': 'https://cdn.amcharts.com/lib/4/geodata/json/russiaLow.json',
  'SE': 'https://cdn.amcharts.com/lib/4/geodata/json/swedenLow.json',
  'NO': 'https://cdn.amcharts.com/lib/4/geodata/json/norwayLow.json',
  'CH': 'https://cdn.amcharts.com/lib/4/geodata/json/switzerlandLow.json',
  'NL': 'https://cdn.amcharts.com/lib/4/geodata/json/netherlandsLow.json',
  'BE': 'https://cdn.amcharts.com/lib/4/geodata/json/belgiumLow.json',
  'AT': 'https://cdn.amcharts.com/lib/4/geodata/json/austriaLow.json',
  'GR': 'https://cdn.amcharts.com/lib/4/geodata/json/greeceLow.json',
  'IE': 'https://cdn.amcharts.com/lib/4/geodata/json/irelandLow.json',
  'PL': 'https://cdn.amcharts.com/lib/4/geodata/json/polandLow.json'
};

const outDir = 'D:/The Feed/client/assets/maps';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function main() {
  for (const [iso, url] of Object.entries(paises)) {
    process.stdout.write(`${iso}: baixando...`);
    try {
      const raw = await downloadJSON(url);
      const clean = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
      const data = JSON.parse(clean);
      geoToSVG(data, path.join(outDir, `${iso}.svg`));
    } catch (e) {
      console.log(`  ERRO: ${e.message}`);
    }
  }
}

main();
