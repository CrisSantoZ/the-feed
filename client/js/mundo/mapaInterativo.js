// Web Component: <mapa-interativo>
// Mapa SVG interativo com estados clicáveis para qualquer país
// Uso: <mapa-interativo iso="US" pais="Estados Unidos"></mapa-interativo>

const GITHUB_RAW = 'https://raw.githubusercontent.com/CrisSantoZ/the-feed/main/client/assets/maps';
const cacheSVG = {};

class MapaInterativo extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
    this._dados = null;
    this._regiaoAtual = '';
    this._infoEl = null;
  }

  static get observedAttributes() {
    return ['iso', 'pais'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'iso' && newVal && newVal !== oldVal) {
      this._carregar(newVal);
    }
  }

  get iso() { return this.getAttribute('iso'); }
  get pais() { return this.getAttribute('pais') || ''; }

  set regiaoAtual(val) {
    this._regiaoAtual = val;
    if (this._dados) {
      this._dados.forEach(d => {
        const path = this._root.querySelector(`[data-codigo="${d.codigo}"]`);
        if (path) {
          path.classList.toggle('ativo', d.nome === val);
        }
      });
    }
  }

  async _carregar(iso) {
    this._root.innerHTML = '<div style="text-align:center;padding:30px;color:#888;">⏳ Carregando...</div>';

    try {
      if (!cacheSVG[iso]) {
        const resp = await fetch(`${GITHUB_RAW}/${iso}.svg`);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        cacheSVG[iso] = await resp.text();
      }

      const svgTexto = cacheSVG[iso];
      const vB = svgTexto.match(/viewBox="([^"]+)"/)?.[1] || '0 0 800 600';

      // Extrair paths com data-nome
      const pathRegex = /<path[^>]*data-nome="([^"]*)"[^>]*d="([^"]*)"[^>]*\/?>/g;
      const paths = [];
      let m;
      while ((m = pathRegex.exec(svgTexto)) !== null) {
        const nome = m[1];
        const d = m[2];
        if (nome && d) paths.push({ nome, d });
      }

      if (paths.length === 0) {
        this._root.innerHTML = '<div style="text-align:center;padding:30px;color:#888;">Mapa indisponível</div>';
        return;
      }

      this._dados = paths.map(p => ({ codigo: p.nome.replace(/\s+/g, '_'), nome: p.nome, d: p.d }));

      const pathsHTML = this._dados.map(d =>
        `<path part="regiao" data-codigo="${d.codigo}" data-nome="${d.nome}" d="${d.d}" class="regiao${d.nome === this._regiaoAtual ? ' ativo' : ''}"></path>`
      ).join('\n          ');

      this._root.innerHTML = `
        <style>
          :host { display:block; background:#0a0a14; border-radius:12px; padding:10px; }
          .wrapper { position:relative; }
          svg { width:100%; height:auto; display:block; }
          .info { text-align:center; color:#888; font-size:0.7rem; margin-top:6px; font-family:sans-serif; }
          .regiao { fill:rgba(0,243,255,0.3); stroke:#00f3ff; stroke-width:0.3; cursor:pointer; }
          .regiao:hover { fill:rgba(0,243,255,0.6); }
          .regiao.ativo { fill:rgba(0,255,100,0.4); stroke:#00ff66; stroke-width:0.5; }
          .carregando { text-align:center; padding:30px; color:#888; font-family:sans-serif; }
        </style>
        <div class="wrapper">
          <svg viewBox="${vB}" part="svg" xmlns="http://www.w3.org/2000/svg">
            ${pathsHTML}
          </svg>
          <div class="info" part="info">Passe o mouse sobre um estado</div>
        </div>
      `;

      // Eventos com mouse move único no SVG
      const svg = this._root.querySelector('svg');
      const info = this._root.querySelector('.info');
      let ultimoNome = '';

      svg.addEventListener('mousemove', (e) => {
        const target = e.target;
        if (!target.hasAttribute || !target.hasAttribute('data-nome')) {
          if (ultimoNome) { info.textContent = 'Passe o mouse sobre um estado'; ultimoNome = ''; }
          return;
        }
        const nome = target.getAttribute('data-nome') || '';
        if (nome !== ultimoNome) { info.textContent = `📍 ${nome}`; ultimoNome = nome; }
      });

      svg.addEventListener('mouseleave', () => {
        info.textContent = 'Passe o mouse sobre um estado';
        ultimoNome = '';
      });

      // Clique nas regiões
      svg.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.hasAttribute || !target.hasAttribute('data-nome')) return;
        const nome = target.getAttribute('data-nome') || '';
        this.dispatchEvent(new CustomEvent('regiao-click', {
          detail: { nome, pais: this.pais },
          bubbles: true,
          composed: true
        }));
      });

    } catch (e) {
      this._root.innerHTML = `<div class="carregando">Erro ao carregar mapa</div>`;
    }
  }
}

customElements.define('mapa-interativo', MapaInterativo);
