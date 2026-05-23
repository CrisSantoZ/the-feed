/* ==========================================================================
   FACECLAIM SOCKET - BUSCA DE IMAGENS VIA TMDB + VALIDAÇÃO GROQ
   ========================================================================== */

const Player = require('../models/Player');

const TMDB_API_KEY = process.env.TMDB_API_KEY || '731610e843145f8e3606d094492f9178';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

function configurarFaceclaimSocket(io, socket, { groq }) {
    
    socket.on('buscarFaceclaim', async (nomeFamoso) => {
        try {
            const nomeLimpo = nomeFamoso.toLowerCase().trim();

            // 1. Verifica se o faceclaim já está em uso
            const ocupado = await Player.findOne({ faceclaim: nomeLimpo });
            if (ocupado) {
                return socket.emit('erroServidor', `⚠️ '@${nomeFamoso}' já está blindado por outro cidadão.`);
            }

            // 2. Validação da GROQ IA com modelo atualizado
            console.log(`[GROQ] Analisando nome: ${nomeLimpo}`);
            
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: `Você é o computador central do simulador de vida "The Feed". 
                        Analise o nome enviado e determine se é uma pessoa REAL famosa (ator, atriz, modelo, cantor, influencer, jogador de futebol, etc).
                        Se for válido, retorne o nome oficial da pessoa em INGLÊS para busca na API de imagens.
                        Responda ESTRITAMENTE em JSON com este formato:
                        { "valido": true/false, "termoBusca": "Nome Oficial em Ingles", "motivoErro": "Mensagem curta se invalido" }`
                    },
                    { role: 'user', content: `Analisar: "${nomeLimpo}"` }
                ],
                model: 'llama-3.3-70b-versatile',  // ← MODELO ATUALIZADO
                response_format: { type: "json_object" }
            });

            const analiseIA = JSON.parse(chatCompletion.choices[0].message.content);

            if (!analiseIA.valido) {
                return socket.emit('erroServidor', `🚨 ${analiseIA.motivoErro}`);
            }

            console.log(`[TMDB] Buscando imagens para: "${analiseIA.termoBusca}"`);

            // 3. Busca no TMDB
            let urlsImagens = await buscarImagensTMDB(analiseIA.termoBusca);
            
            // 4. Embaralhar as imagens
            urlsImagens = embaralharArray(urlsImagens);
            
            console.log(`[TMDB] Total de imagens: ${urlsImagens.length}`);

            // 5. Fallback
            const fallbacks = [
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
            ];

            let idx = 0;
            while (urlsImagens.length < 4) {
                urlsImagens.push(fallbacks[idx % fallbacks.length]);
                idx++;
            }

            socket.emit('faceclaimResultados', { 
                famoso: analiseIA.termoBusca, 
                urls: urlsImagens 
            });

        } catch (erro) {
            console.error(`[THE FEED] Falha: ${erro.message}`);
            socket.emit('erroServidor', "Falha no sistema. Tente novamente.");
        }
    });
}

// ==================== BUSCA NO TMDB ====================

async function buscarImagensTMDB(termoBusca) {
    const todasImagens = [];
    
    try {
        const urlBusca = `${TMDB_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(termoBusca)}&language=pt-BR`;
        const resposta = await fetch(urlBusca);
        const dados = await resposta.json();
        
        if (!dados.results || dados.results.length === 0) {
            return [];
        }
        
        const pessoas = dados.results.slice(0, 3);
        
        for (const pessoa of pessoas) {
            const urlFotos = `${TMDB_BASE_URL}/person/${pessoa.id}/images?api_key=${TMDB_API_KEY}`;
            const respFotos = await fetch(urlFotos);
            const dadosFotos = await respFotos.json();
            
            if (dadosFotos.profiles && dadosFotos.profiles.length > 0) {
                for (const foto of dadosFotos.profiles) {
                    const urlImagem = `https://image.tmdb.org/t/p/w342${foto.file_path}`;
                    if (!todasImagens.includes(urlImagem)) {
                        todasImagens.push(urlImagem);
                    }
                }
            }
        }
        
        console.log(`[TMDB] Total bruto: ${todasImagens.length} imagens`);
        
    } catch (erro) {
        console.error('[TMDB] Erro:', erro);
    }
    
    return todasImagens;
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

module.exports = { configurarFaceclaimSocket };