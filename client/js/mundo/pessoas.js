/* ==========================================================================
   PESSOAS ONLINE - JOGADORES NA MESMA CIDADE
   ========================================================================== */

export function renderizarPessoas() {
    const playerCidade = sessionStorage.getItem('playerCidade') || 'São Paulo';
    const playerPais = sessionStorage.getItem('playerPais') || 'Brasil';
    
    // Aqui depois vai buscar do backend os jogadores online
    const pessoasMock = [
        { nome: '@usuario1', online: true, local: playerCidade },
        { nome: '@usuario2', online: true, local: playerCidade },
        { nome: '@usuario3', online: false, local: 'Outra cidade' }
    ];
    
    const pessoasNaCidade = pessoasMock.filter(p => p.local === playerCidade && p.online);
    
    return `
        <div style="padding:20px; height:100%; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 style="color:#00f3ff;">👥 PESSOAS ONLINE</h2>
                <button onclick="fecharPainel()" style="background:none; border:none; color:#ff0055; font-size:20px; cursor:pointer;">✖</button>
            </div>
            
            <!-- LOCALIZAÇÃO -->
            <div style="background:rgba(0,243,255,0.05); padding:15px; margin-bottom:20px; border-radius:8px;">
                📍 Pessoas em <span style="color:#00f3ff;">${playerCidade}</span>, <span style="color:#00f3ff;">${playerPais}</span>
            </div>
            
            <!-- LISTA DE PESSOAS -->
            <div style="display:flex; flex-direction:column; gap:10px;">
                ${pessoasNaCidade.length > 0 ? pessoasNaCidade.map(p => `
                    <div style="background:rgba(0,243,255,0.05); padding:15px; border-radius:8px; display:flex; align-items:center; gap:10px;">
                        <span style="font-size:1.2rem;">🟢</span>
                        <span style="color:#fff; flex:1;">${p.nome}</span>
                        <span style="color:#888; font-size:11px;">📍 ${p.local}</span>
                        <button onclick="alert('Enviar mensagem para ${p.nome}')" style="background:#ff0055; color:#fff; border:none; padding:5px 10px; cursor:pointer; border-radius:4px;">💬</button>
                    </div>
                `).join('') : `
                    <div style="text-align:center; padding:40px; color:#888;">
                        Nenhum jogador online na sua cidade no momento.
                    </div>
                `}
            </div>
            
            <div style="margin-top:20px; text-align:center; color:#888; font-size:11px;">
                Total de ${pessoasNaCidade.length} pessoa(s) online em ${playerCidade}
            </div>
        </div>
    `;
}