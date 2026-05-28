export const restaurantesSC = {
    // ==================== FLORIANÓPOLIS (CAPITAL) - 20 RESTAURANTES ====================
    "Florianópolis": {
        // ========== 1. CENTRO - CULINÁRIA AÇORIANA (SEQUÊNCIA) ==========
        "centro-acoriana": {
            id: "centro-acoriana",
            nome: "🐟 Sequência Açoriana",
            endereco: "Rua Felipe Schmidt, 500 - Centro, Florianópolis",
            horario: "11h às 22h",
            telefone: "(48) 3222-1111",
            descricao: "Restaurante tradicional com culinária açoriana. Especialidade em sequência de frutos do mar e pratos típicos da Ilha.",
            tipo: ["acoriana", "frutos-do-mar", "tradicional", "familiar", "turístico"],
            preco_medio: 75,
            estrelas: 4.7,
            avaliacoes: 2450,
            cardapio: [
                { id: "sequencia-frutos", nome: "🐟 Sequência de Frutos do Mar", descricao: "Casquinha de siri, camarão, peixe, polvo, lula, risoto. Serve 2 pessoas.", preco: 89, recuperacao: { fome: 90, felicidade: 38, energia: 26 } },
                { id: "peixe-acoriano", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe fresco grelhado com legumes.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "camarao-acoriano", nome: "🍤 Camarão na Moranga", descricao: "Abóbora recheada com camarão e catupiry.", preco: 68, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "ostras-acorianas", nome: "🦪 Ostras Frescas (6 unid)", descricao: "Ostras abertas na hora com limão.", preco: 42, recuperacao: { fome: 30, felicidade: 24, energia: 10 } },
                { id: "caipirinha-acoriana", nome: "🍹 Caipirinha", descricao: "Caipirinha de limão com cachaça.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. LAGOA DA CONCEIÇÃO - FRUTOS DO MAR ==========
        "lagoa-conceicao-frutos": {
            id: "lagoa-conceicao-frutos",
            nome: "🐟 Restaurante Lagoa",
            endereco: "Rua das Rendeiras, 500 - Lagoa da Conceição, Florianópolis",
            horario: "11h às 23h",
            telefone: "(48) 3333-2222",
            descricao: "Frutos do mar frescos com vista para a Lagoa da Conceição. Especialidade em peixes e camarões.",
            tipo: ["frutos-do-mar", "brasileira", "vista", "familiar", "turístico"],
            preco_medio: 80,
            estrelas: 4.7,
            avaliacoes: 3120,
            cardapio: [
                { id: "lagosta-lagoa", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 135, recuperacao: { fome: 85, felicidade: 40, energia: 26 } },
                { id: "camarao-lagoa", nome: "🍤 Camarão Alho e Óleo", descricao: "Camarões salteados no alho.", preco: 72, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "moqueca-lagoa", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 85, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-lagoa", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia grelhado.", preco: 62, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipiroska-lagoa", nome: "🍸 Caipiroska", descricao: "Caipiroska de frutas vermelhas.", preco: 22, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },
        
        // ========== 3. JURERÊ INTERNACIONAL - COMIDA PREMIUM ==========
        "jurere-premium": {
            id: "jurere-premium",
            nome: "🍽️ Jurerê Gastrô",
            endereco: "Av. dos Búzios, 1000 - Jurerê Internacional, Florianópolis",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(48) 3444-3333",
            descricao: "Cozinha internacional contemporânea no badalado bairro de Jurerê. Ambiente sofisticado e atendimento premium.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico"],
            preco_medio: 150,
            estrelas: 4.9,
            avaliacoes: 890,
            cardapio: [
                { id: "file-jurere", nome: "🥩 Filé Mignon", descricao: "Filé mignon ao molho de vinho tinto.", preco: 110, recuperacao: { fome: 78, felicidade: 38, energia: 26 } },
                { id: "lagosta-jurere", nome: "🦞 Lagosta Thermidor", descricao: "Lagosta com molho cremoso.", preco: 165, recuperacao: { fome: 88, felicidade: 46, energia: 28 } },
                { id: "salmao-jurere", nome: "🐟 Salmão", descricao: "Salmão grelhado com molho de maracujá.", preco: 95, recuperacao: { fome: 70, felicidade: 34, energia: 20 } },
                { id: "risoto-jurere", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso.", preco: 88, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "espumante-jurere", nome: "🥂 Espumante", descricao: "Espumante premium.", preco: 48, recuperacao: { sede: 10, felicidade: 28, energia: -8 } }
            ]
        },
        
        // ========== 4. SANTO ANTÔNIO DE LISBOA - OSTRAS ==========
        "santo-antonio-ostras": {
            id: "santo-antonio-ostras",
            nome: "🦪 Ostras Santo Antônio",
            endereco: "Rua dos Navegantes, 200 - Santo Antônio de Lisboa, Florianópolis",
            horario: "11h às 22h",
            telefone: "(48) 3555-4444",
            descricao: "Especialidade em ostras e frutos do mar. Vista para a Baía Norte. Ambiente charmoso e romântico.",
            tipo: ["frutos-do-mar", "acoriana", "vista", "romântico", "familiar"],
            preco_medio: 70,
            estrelas: 4.8,
            avaliacoes: 1870,
            cardapio: [
                { id: "ostras-santo", nome: "🦪 Ostras Gratinadas (6 unid)", descricao: "Ostras gratinadas com queijo e catupiry.", preco: 48, recuperacao: { fome: 32, felicidade: 26, energia: 12 } },
                { id: "camarao-santo", nome: "🍤 Camarão Internacional", descricao: "Camarões empanados com molho especial.", preco: 62, recuperacao: { fome: 60, felicidade: 26, energia: 16 } },
                { id: "peixe-santo", nome: "🐟 Peixe à Delícia", descricao: "Filé de peixe ao molho de camarão.", preco: 68, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "pastel-santo", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante de camarão.", preco: 18, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-santo", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 5. CAMpeCHE - PEIXARIA ==========
        "campeche-peixaria": {
            id: "campeche-peixaria",
            nome: "🐟 Peixaria Campeche",
            endereco: "Rua do Campeche, 500 - Campeche, Florianópolis",
            horario: "11h às 22h",
            telefone: "(48) 3666-5555",
            descricao: "Peixaria tradicional no bairro Campeche. Peixes frescos do dia.",
            tipo: ["peixaria", "frutos-do-mar", "familiar", "tradicional"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "peixe-campeche", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco grelhado.", preco: 52, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-campeche", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 58, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "moqueca-campeche", nome: "🍲 Moqueca", descricao: "Moqueca tradicional.", preco: 68, recuperacao: { fome: 72, energia: 24, felicidade: 20 } },
                { id: "tintureiro-campeche", nome: "🐟 Tintureiro Frito", descricao: "Peixe tintureiro inteiro frito.", preco: 48, recuperacao: { fome: 58, energia: 18, felicidade: 15 } },
                { id: "suco-campeche", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. CANASVIEIRAS - CHURRASCARIA ==========
        "canasvieiras-churrascaria": {
            id: "canasvieiras-churrascaria",
            nome: "🥩 Churrascaria Canasvieiras",
            endereco: "Av. das Nações, 1000 - Canasvieiras, Florianópolis",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(48) 3777-6666",
            descricao: "Churrascaria tradicional. Rodízio de carnes e buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.5,
            avaliacoes: 1560,
            cardapio: [
                { id: "rodizio-canas", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-canas", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-canas", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-canas", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 50, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-canas", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. COQUEIROS - PIZZARIA ==========
        "coqueiros-pizzaria": {
            id: "coqueiros-pizzaria",
            nome: "🍕 Pizzaria Coqueiros",
            endereco: "Rua dos Coqueiros, 300 - Coqueiros, Florianópolis",
            horario: "18h às 00h",
            telefone: "(48) 3888-7777",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-margherita-coq", nome: "🍕 Pizza Margherita", descricao: "Margherita.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "pizza-calabresa-coq", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-coq", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 58, recuperacao: { fome: 62, energia: 16, felicidade: 14 } },
                { id: "calzone-coq", nome: "🥟 Calzone", descricao: "Calzone.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-coq", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. TRINDADE - HAMBURGUERIA ==========
        "trindade-hamburguer": {
            id: "trindade-hamburguer",
            nome: "🍔 Hamburgueria Trindade",
            endereco: "Rua Prof. Araújo, 500 - Trindade, Florianópolis",
            horario: "18h às 00h",
            telefone: "(48) 3999-8888",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana"],
            preco_medio: 48,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "smash-tri", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 42, recuperacao: { fome: 65, energia: 24, felicidade: 20 } },
                { id: "vegan-tri", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 44, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "batata-tri", nome: "🍟 Batata com Cheddar", descricao: "Batata com cheddar.", preco: 24, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "onion-tri", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 22, recuperacao: { fome: 25, felicidade: 10, energia: 5 } },
                { id: "milkshake-tri", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 22, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 9. CACHOEIRA DO BOM JESUS - COMIDA ITALIANA ==========
        "cachoeira-italiana": {
            id: "cachoeira-italiana",
            nome: "🍝 Cantina Cachoeira",
            endereco: "Rua Cachoeira, 300 - Cachoeira do Bom Jesus, Florianópolis",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(48) 4000-9999",
            descricao: "Cantina italiana tradicional.",
            tipo: ["italiana", "massas", "familiar", "tradicional"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-cach", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 55, recuperacao: { fome: 68, energia: 22, felicidade: 18 } },
                { id: "lasanha-cach", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 50, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "nhoque-cach", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 46, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-cach", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 42, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-cach", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 22, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 10. BARRA DA LAGOA - QUIOSQUE ==========
        "barra-lagoa-quiosque": {
            id: "barra-lagoa-quiosque",
            nome: "🏖️ Quiosque Barra da Lagoa",
            endereco: "Rua Altamiro Barcelos Dutra, 500 - Barra da Lagoa, Florianópolis",
            horario: "09h às 21h",
            telefone: "(48) 4111-0000",
            descricao: "Quiosque na praia da Barra da Lagoa. Petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 1340,
            cardapio: [
                { id: "agua-coco-barra", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 10, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-barra", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-barra", nome: "🐟 Isca de Peixe", descricao: "Isca empanada.", preco: 32, recuperacao: { fome: 36, felicidade: 14, energia: 8 } },
                { id: "pastel-barra", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante.", preco: 15, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-barra", nome: "🥤 Suco", descricao: "Suco de abacaxi.", preco: 10, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. RIO TAVARES - BOTECO ==========
        "rio-tavares-boteco": {
            id: "rio-tavares-boteco",
            nome: "🍺 Boteco Rio Tavares",
            endereco: "Rua Rio Tavares, 300 - Rio Tavares, Florianópolis",
            horario: "17h às 02h",
            telefone: "(48) 4222-1111",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 32,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-rt", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 26, recuperacao: { fome: 34, felicidade: 13, energia: 7 } },
                { id: "torresmo-rt", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 20, recuperacao: { fome: 26, felicidade: 11, energia: 5 } },
                { id: "queijo-rt", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 15, recuperacao: { fome: 19, felicidade: 9, energia: 4 } },
                { id: "batata-rt", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 21, felicidade: 8, energia: 4 } },
                { id: "chopp-rt", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 9, recuperacao: { sede: 24, felicidade: 11, energia: -5 } }
            ]
        },
        
        // ========== 12. CENTRO - CAFÉ COLONIAL AÇORIANO ==========
        "centro-cafe-colonial": {
            id: "centro-cafe-colonial",
            nome: "☕ Café Colonial Açoriano",
            endereco: "Rua Tenente Silveira, 200 - Centro, Florianópolis",
            horario: "08h às 19h",
            telefone: "(48) 4333-2222",
            descricao: "Café colonial com influência açoriana. Pães, bolos e geleias caseiras.",
            tipo: ["cafeteria", "colonial", "doces", "artesanal", "acoriano"],
            preco_medio: 38,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-colonial", nome: "☕ Café Colonial", descricao: "Mesa com pães, bolos, geleias.", preco: 42, recuperacao: { fome: 58, felicidade: 26, energia: 18 } },
                { id: "cafe-centro", nome: "☕ Café", descricao: "Café especial.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "pao-queijo-centro", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-centro", nome: "🍰 Bolo de Fubá", descricao: "Bolo de fubá.", preco: 10, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-centro", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. LAGOA DO PERI - COMIDA CASEIRA ==========
        "peri-caseira": {
            id: "peri-caseira",
            nome: "🇧🇷 Comida Caseira Peri",
            endereco: "Estrada do Peri, 500 - Lagoa do Peri, Florianópolis",
            horario: "11h às 15h",
            telefone: "(48) 4444-3333",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-peri", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 25, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-peri", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 28, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-peri", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 24, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-peri", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 26, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-peri", nome: "🥤 Suco", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. INGLESES - LANCHONETE ==========
        "ingleses-lanchonete": {
            id: "ingleses-lanchonete",
            nome: "🍔 Lanchonete Ingleses",
            endereco: "Rua das Gaivotas, 500 - Ingleses, Florianópolis",
            horario: "08h às 22h",
            telefone: "(48) 4555-4444",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 26,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-ing", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 25, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "x-salada-ing", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 17, recuperacao: { fome: 42, energia: 12, felicidade: 10 } },
                { id: "coxinha-ing", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 8, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-ing", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 9, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-ing", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. PANTANAL - COMIDA JAPONESA ==========
        "pantanal-japonesa": {
            id: "pantanal-japonesa",
            nome: "🍣 Sushi Pantanal",
            endereco: "Rua Lauro Linhares, 500 - Pantanal, Florianópolis",
            horario: "18h às 23h30",
            telefone: "(48) 4666-5555",
            descricao: "Restaurante japonês. Peixes frescos.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar"],
            preco_medio: 80,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-pan", nome: "🍣 Rodízio", descricao: "Rodízio completo.", preco: 75, recuperacao: { fome: 85, energia: 26, felicidade: 32 } },
                { id: "combinado-pan", nome: "🍱 Combinado", descricao: "22 peças.", preco: 62, recuperacao: { fome: 64, energia: 20, felicidade: 24 } },
                { id: "temaki-pan", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 28, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "hot-pan", nome: "🌯 Hot Roll", descricao: "Hot rolls.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-pan", nome: "🍶 Saquê", descricao: "Saquê.", preco: 24, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 16. ESTREITO - COMIDA ÁRABE ==========
        "estreito-arabe": {
            id: "estreito-arabe",
            nome: "🧆 Al Balad Estreito",
            endereco: "Rua Francisco Tolentino, 300 - Estreito, Florianópolis",
            horario: "11h às 23h",
            telefone: "(48) 4777-6666",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "banquete-est", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 30, energia: 18 } },
                { id: "esfiha-est", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 7 } },
                { id: "kibe-est", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-est", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "suco-est", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SACO DOS LIMÕES - COMIDA NORDESTINA ==========
        "saco-limoes-nordestina": {
            id: "saco-limoes-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Saco dos Limões, 500 - Saco dos Limões, Florianópolis",
            horario: "11h às 21h",
            telefone: "(48) 4888-7777",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-saco", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-saco", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-saco", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-saco", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-saco", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. SHOPPING IGUATEMI ==========
        "iguatemi-floripa": {
            id: "iguatemi-floripa",
            nome: "🛍️ Shopping Iguatemi - Food Court",
            endereco: "Av. Madre Benvenuta, 1000 - Santa Mônica, Florianópolis",
            horario: "10h às 22h",
            telefone: "(48) 4999-8888",
            descricao: "Praça de alimentação do Shopping Iguatemi.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 5430,
            cardapio: [
                { id: "mc-ig", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-ig", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-ig", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 58, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "japa-ig", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-ig", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 19. BEIRAMAR - QUIOSQUE ==========
        "beiramar-quiosque": {
            id: "beiramar-quiosque",
            nome: "🏖️ Quiosque Beiramar",
            endereco: "Av. Beira Mar Norte, 1000 - Centro, Florianópolis",
            horario: "10h às 22h",
            telefone: "(48) 5000-9999",
            descricao: "Quiosque na Beiramar com vista para a baía.",
            tipo: ["petiscos", "vista", "turístico", "casual"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "pastel-beira", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "suco-beira", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } },
                { id: "cafe-beira", nome: "☕ Café", descricao: "Café.", preco: 7, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-beira", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 16, recuperacao: { fome: 22, energia: 8, felicidade: 6 } },
                { id: "agua-beira", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-floripa": {
            id: "aeroporto-floripa",
            nome: "✈️ Aeroporto Hercílio Luz - Praça de Alimentação",
            endereco: "Av. Diomício Freitas, s/n - Carianos, Florianópolis",
            horario: "04h às 00h",
            telefone: "(48) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 50,
            estrelas: 3.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aero-fla", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 38, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "subway-aero-fla", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 35, recuperacao: { fome: 48, energia: 13, felicidade: 9 } },
                { id: "habitual-aero-fla", nome: "☕ Habitual", descricao: "Café.", preco: 28, recuperacao: { fome: 28, energia: 16, felicidade: 12 } },
                { id: "starbucks-aero-fla", nome: "☕ Starbucks", descricao: "Café.", preco: 18, recuperacao: { sede: 12, energia: 15, felicidade: 13 } },
                { id: "suco-aero-fla", nome: "🥤 Suco", descricao: "Suco natural.", preco: 14, recuperacao: { sede: 20, energia: 8, felicidade: 7 } }
            ]
        }
    },

    // ==================== JOINVILLE - 10 RESTAURANTES ====================
    "Joinville": {
        // ========== 1. CENTRO - CULINÁRIA ALEMÃ ==========
        "joinville-alema": {
            id: "joinville-alema",
            nome: "🇩🇪 Bierhaus Joinville",
            endereco: "Rua Princesa Isabel, 500 - Centro, Joinville",
            horario: "11h às 23h",
            telefone: "(47) 3222-1111",
            descricao: "Culinária alemã autêntica. Chope artesanal, joelho de porco e salsichão. Tradição da imigração alemã.",
            tipo: ["alemã", "cervejaria", "petiscos", "tradicional", "familiar"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "joelho-jlle", nome: "🍖 Joelho de Porco", descricao: "Joelho de porco assado com chucrute e purê.", preco: 68, recuperacao: { fome: 85, energia: 32, felicidade: 28 } },
                { id: "salsichao-jlle", nome: "🌭 Salsichão Alemão", descricao: "Salsichão artesanal com mostarda.", preco: 42, recuperacao: { fome: 55, felicidade: 20, energia: 14 } },
                { id: "cuca-jlle", nome: "🍰 Cuca Alemã", descricao: "Bolo típico alemão.", preco: 18, recuperacao: { fome: 22, felicidade: 18, energia: 6 } },
                { id: "bretzel-jlle", nome: "🥨 Bretzel", descricao: "Pretzel alemão.", preco: 14, recuperacao: { fome: 18, felicidade: 12, energia: 4 } },
                { id: "chope-jlle", nome: "🍺 Chope Artesanal", descricao: "Chope alemão.", preco: 16, recuperacao: { sede: 22, felicidade: 16, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "joinville-churrascaria": {
            id: "joinville-churrascaria",
            nome: "🥩 Churrascaria Joinville",
            endereco: "Av. Juscelino Kubitschek, 1000 - Centro, Joinville",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(47) 3333-2222",
            descricao: "Churrascaria tradicional. Rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-jlle", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-jlle", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-jlle", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-jlle", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-jlle", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "joinville-boteco": {
            id: "joinville-boteco",
            nome: "🍺 Boteco Joinville",
            endereco: "Rua Otto Boehm, 300 - Centro, Joinville",
            horario: "17h às 02h",
            telefone: "(47) 3444-3333",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 32,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-jlle", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 26, recuperacao: { fome: 34, felicidade: 13, energia: 7 } },
                { id: "torresmo-jlle", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 20, recuperacao: { fome: 26, felicidade: 11, energia: 5 } },
                { id: "queijo-jlle", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 15, recuperacao: { fome: 19, felicidade: 9, energia: 4 } },
                { id: "batata-jlle", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 21, felicidade: 8, energia: 4 } },
                { id: "chopp-jlle", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 9, recuperacao: { sede: 24, felicidade: 11, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "joinville-pizzaria": {
            id: "joinville-pizzaria",
            nome: "🍕 Pizzaria Joinville",
            endereco: "Rua Visconde de Taunay, 500 - Centro, Joinville",
            horario: "18h às 23h30",
            telefone: "(47) 3555-4444",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-jlle", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-jlle", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 57, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-jlle", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 15, felicidade: 12 } },
                { id: "calzone-jlle", nome: "🥟 Calzone", descricao: "Calzone.", preco: 40, recuperacao: { fome: 50, energia: 13, felicidade: 10 } },
                { id: "suco-jlle-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "joinville-cafe": {
            id: "joinville-cafe",
            nome: "☕ Café Joinville",
            endereco: "Rua 9 de Março, 300 - Centro, Joinville",
            horario: "08h às 20h",
            telefone: "(47) 3666-5555",
            descricao: "Cafeteria tradicional.",
            tipo: ["cafeteria", "doces", "artesanal"],
            preco_medio: 24,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-jlle", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-jlle-cafe", nome: "🍰 Cuca", descricao: "Cuca alemã.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "pao-queijo-jlle", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-jlle", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 10, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-jlle-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "joinville-hamburguer": {
            id: "joinville-hamburguer",
            nome: "🍔 Hamburgueria Joinville",
            endereco: "Rua Santa Catarina, 500 - Centro, Joinville",
            horario: "18h às 00h",
            telefone: "(47) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-jlle", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 40, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-jlle", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 42, recuperacao: { fome: 54, energia: 19, felicidade: 13 } },
                { id: "batata-jlle-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "onion-jlle", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "milkshake-jlle", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. COMIDA ITALIANA ==========
        "joinville-italiana": {
            id: "joinville-italiana",
            nome: "🍝 Cantina Joinville",
            endereco: "Rua Dona Francisca, 1000 - Saguaçu, Joinville",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(47) 3888-7777",
            descricao: "Cantina italiana tradicional.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "parmegiana-jlle", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 68, energia: 22, felicidade: 18 } },
                { id: "lasanha-jlle", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 48, recuperacao: { fome: 64, energia: 20, felicidade: 16 } },
                { id: "nhoque-jlle", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 44, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-jlle", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 40, recuperacao: { fome: 56, energia: 17, felicidade: 13 } },
                { id: "vinho-jlle", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 20, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 8. SHOPPING JOINVILLE ==========
        "shopping-joinville": {
            id: "shopping-joinville",
            nome: "🛍️ Shopping Joinville - Food Court",
            endereco: "Rua Blumenau, 500 - Centro, Joinville",
            horario: "10h às 22h",
            telefone: "(47) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-jlle", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-jlle", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-jlle", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-jlle", nome: "🍣 Sushi", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-jlle-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA CASEIRA ==========
        "joinville-caseira": {
            id: "joinville-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Tuiuti, 400 - Centro, Joinville",
            horario: "11h às 15h",
            telefone: "(47) 4000-9999",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 28,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-jlle", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 25, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-jlle", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 28, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-jlle", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 24, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-jlle", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 26, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-jlle-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-joinville": {
            id: "rodoviaria-joinville",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Santos Dumont, 500 - Centro, Joinville",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-jlle", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-jlle-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-jlle", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-jlle", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-jlle-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== BALNEÁRIO CAMBORIÚ - 10 RESTAURANTES ====================
    "Balneário Camboriú": {
        // ========== 1. CENTRO - FRUTOS DO MAR ==========
        "bc-frutos": {
            id: "bc-frutos",
            nome: "🐟 Restaurante Balneário",
            endereco: "Av. Atlântica, 1000 - Centro, Balneário Camboriú",
            horario: "11h às 23h",
            telefone: "(47) 3222-1111",
            descricao: "Frutos do mar frescos com vista para o mar. Especialidade em camarões e peixes.",
            tipo: ["frutos-do-mar", "brasileira", "vista", "turístico", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2450,
            cardapio: [
                { id: "lagosta-bc", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca.", preco: 145, recuperacao: { fome: 88, felicidade: 42, energia: 28 } },
                { id: "camarao-bc", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 72, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "moqueca-bc", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 85, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-bc", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 62, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-bc", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 20, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA PREMIUM ==========
        "bc-premium": {
            id: "bc-premium",
            nome: "🍽️ Balneário Gastrô",
            endereco: "Av. Brasil, 1000 - Centro, Balneário Camboriú",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(47) 3333-2222",
            descricao: "Cozinha internacional premiada. Ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico"],
            preco_medio: 140,
            estrelas: 4.8,
            avaliacoes: 890,
            cardapio: [
                { id: "file-bc", nome: "🥩 Filé Mignon", descricao: "Filé ao molho.", preco: 98, recuperacao: { fome: 75, felicidade: 36, energia: 24 } },
                { id: "lagosta-bc-prem", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 155, recuperacao: { fome: 86, felicidade: 44, energia: 27 } },
                { id: "salmao-bc", nome: "🐟 Salmão", descricao: "Salmão ao maracujá.", preco: 92, recuperacao: { fome: 70, felicidade: 32, energia: 20 } },
                { id: "risoto-bc", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 85, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "espumante-bc", nome: "🥂 Espumante", descricao: "Espumante brut.", preco: 42, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "bc-pizzaria": {
            id: "bc-pizzaria",
            nome: "🍕 Pizzaria Balneário",
            endereco: "Rua 1500, 500 - Centro, Balneário Camboriú",
            horario: "18h às 00h",
            telefone: "(47) 3444-3333",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-margherita-bc", nome: "🍕 Pizza Margherita", descricao: "Margherita.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 14 } },
                { id: "pizza-calabresa-bc", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 58, recuperacao: { fome: 62, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-bc", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 62, recuperacao: { fome: 64, energia: 16, felicidade: 14 } },
                { id: "calzone-bc", nome: "🥟 Calzone", descricao: "Calzone.", preco: 50, recuperacao: { fome: 54, energia: 14, felicidade: 12 } },
                { id: "suco-bc-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. BOTECO ==========
        "bc-boteco": {
            id: "bc-boteco",
            nome: "🍺 Boteco Balneário",
            endereco: "Rua 2000, 300 - Centro, Balneário Camboriú",
            horario: "17h às 03h",
            telefone: "(47) 3555-4444",
            descricao: "Boteco tradicional. Petiscos e cerveja.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 1340,
            cardapio: [
                { id: "calabresa-bc", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 36, felicidade: 14, energia: 8 } },
                { id: "torresmo-bc", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-bc", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 16, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "batata-bc", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "chopp-bc", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "bc-cafe": {
            id: "bc-cafe",
            nome: "☕ Café Balneário",
            endereco: "Av. Atlântica, 500 - Centro, Balneário Camboriú",
            horario: "08h às 20h",
            telefone: "(47) 3666-5555",
            descricao: "Cafeteria com vista para o mar.",
            tipo: ["cafeteria", "vista", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-bc", nome: "☕ Café", descricao: "Café especial.", preco: 9, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-bc", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-bc", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 8, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-bc", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 12, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "suco-bc-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "bc-hamburguer": {
            id: "bc-hamburguer",
            nome: "🍔 Hamburgueria Balneário",
            endereco: "Rua 3000, 500 - Centro, Balneário Camboriú",
            horario: "18h às 00h",
            telefone: "(47) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-bc", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 42, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-bc", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 44, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-bc-hb", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-bc", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "milkshake-bc", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 7. COMIDA JAPONESA ==========
        "bc-japonesa": {
            id: "bc-japonesa",
            nome: "🍣 Sushi Balneário",
            endereco: "Av. Brasil, 1500 - Centro, Balneário Camboriú",
            horario: "18h às 23h30",
            telefone: "(47) 3888-7777",
            descricao: "Restaurante japonês.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 90,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                { id: "rodizio-bc", nome: "🍣 Rodízio", descricao: "Rodízio premium.", preco: 85, recuperacao: { fome: 88, energia: 28, felicidade: 34 } },
                { id: "combinado-bc", nome: "🍱 Combinado", descricao: "22 peças.", preco: 68, recuperacao: { fome: 66, energia: 22, felicidade: 26 } },
                { id: "temaki-bc", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 30, recuperacao: { fome: 34, felicidade: 18, energia: 10 } },
                { id: "hot-bc", nome: "🌯 Hot Roll", descricao: "Hot rolls.", preco: 35, recuperacao: { fome: 40, felicidade: 18, energia: 10 } },
                { id: "sake-bc", nome: "🍶 Saquê", descricao: "Saquê.", preco: 26, recuperacao: { sede: 8, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 8. SHOPPING BC ==========
        "shopping-bc": {
            id: "shopping-bc",
            nome: "🛍️ Shopping Balneário - Food Court",
            endereco: "Av. Santa Catarina, 1000 - Centro, Balneário Camboriú",
            horario: "10h às 22h",
            telefone: "(47) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-bc", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 34, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "habibs-bc", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 30, recuperacao: { fome: 40, energia: 12, felicidade: 9 } },
                { id: "china-bc", nome: "🥢 China", descricao: "Yakisoba.", preco: 40, recuperacao: { fome: 54, energia: 14, felicidade: 11 } },
                { id: "japa-bc", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 54, felicidade: 18, energia: 12 } },
                { id: "suco-bc-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. COMIDA ARABE ==========
        "bc-arabe": {
            id: "bc-arabe",
            nome: "🧆 Al Balad BC",
            endereco: "Rua 4000, 300 - Centro, Balneário Camboriú",
            horario: "11h às 23h",
            telefone: "(47) 4000-9999",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "banquete-bc", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 78, recuperacao: { fome: 88, felicidade: 32, energia: 20 } },
                { id: "esfiha-bc", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 32, recuperacao: { fome: 40, felicidade: 16, energia: 8 } },
                { id: "kibe-bc", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 28, recuperacao: { fome: 34, felicidade: 15, energia: 7 } },
                { id: "hommus-bc", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 24, recuperacao: { fome: 28, felicidade: 15, energia: 7 } },
                { id: "suco-bc-arabe", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 10, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-bc": {
            id: "rodoviaria-bc",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Santa Catarina, 500 - Centro, Balneário Camboriú",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 22,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-bc", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 14, recuperacao: { fome: 20, energia: 7, felicidade: 5 } },
                { id: "suco-bc-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "coxinha-bc", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 12, felicidade: 5, energia: 3 } },
                { id: "pao-queijo-bc", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 6, energia: 3 } },
                { id: "cafe-bc-rod", nome: "☕ Café", descricao: "Café.", preco: 5, recuperacao: { sede: 6, energia: 9, felicidade: 5 } }
            ]
        }
    },

    // ==================== BLUMENAU - 10 RESTAURANTES ====================
    "Blumenau": {
        // ========== 1. CENTRO - CULINÁRIA ALEMÃ (OKTOBERFEST) ==========
        "blumenau-alema": {
            id: "blumenau-alema",
            nome: "🇩🇪 Biergarten Blumenau",
            endereco: "Rua XV de Novembro, 1000 - Centro, Blumenau",
            horario: "11h às 23h",
            telefone: "(47) 3222-1111",
            descricao: "Culinária alemã autêntica. Especialidades da Oktoberfest. Chope artesanal, joelho de porco e salsichão.",
            tipo: ["alemã", "cervejaria", "petiscos", "tradicional", "turístico"],
            preco_medio: 75,
            estrelas: 4.8,
            avaliacoes: 3120,
            cardapio: [
                { id: "joelho-blu", nome: "🍖 Joelho de Porco", descricao: "Joelho de porco assado com chucrute.", preco: 72, recuperacao: { fome: 88, energia: 34, felicidade: 30 } },
                { id: "salsichao-blu", nome: "🌭 Salsichão Alemão", descricao: "Salsichão artesanal.", preco: 45, recuperacao: { fome: 58, energia: 22, felicidade: 16 } },
                { id: "cuca-blu", nome: "🍰 Cuca Alemã", descricao: "Bolo típico alemão.", preco: 20, recuperacao: { fome: 24, felicidade: 20, energia: 8 } },
                { id: "bretzel-blu", nome: "🥨 Bretzel", descricao: "Pretzel alemão.", preco: 15, recuperacao: { fome: 20, felicidade: 14, energia: 5 } },
                { id: "chope-blu", nome: "🍺 Chope Artesanal", descricao: "Chope alemão.", preco: 18, recuperacao: { sede: 24, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "blumenau-churrascaria": {
            id: "blumenau-churrascaria",
            nome: "🥩 Churrascaria Blumenau",
            endereco: "Av. Paulista, 1000 - Centro, Blumenau",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(47) 3333-2222",
            descricao: "Churrascaria tradicional. Rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-blu", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-blu", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-blu", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-blu", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-blu", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "blumenau-boteco": {
            id: "blumenau-boteco",
            nome: "🍺 Boteco Blumenau",
            endereco: "Rua Alwin Schrader, 500 - Centro, Blumenau",
            horario: "17h às 02h",
            telefone: "(47) 3444-3333",
            descricao: "Boteco tradicional. Petiscos e cerveja.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 32,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "calabresa-blu", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 36, felicidade: 14, energia: 8 } },
                { id: "torresmo-blu", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-blu", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 16, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "batata-blu", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "chopp-blu", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "blumenau-pizzaria": {
            id: "blumenau-pizzaria",
            nome: "🍕 Pizzaria Blumenau",
            endereco: "Rua São Paulo, 500 - Centro, Blumenau",
            horario: "18h às 23h30",
            telefone: "(47) 3555-4444",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 52,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-blu", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-blu", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-blu", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-blu", nome: "🥟 Calzone", descricao: "Calzone.", preco: 44, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-blu-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "blumenau-cafe": {
            id: "blumenau-cafe",
            nome: "☕ Café Blumenau",
            endereco: "Rua Floriano Peixoto, 300 - Centro, Blumenau",
            horario: "08h às 20h",
            telefone: "(47) 3666-5555",
            descricao: "Cafeteria com produtos alemães.",
            tipo: ["cafeteria", "alemã", "doces", "artesanal"],
            preco_medio: 28,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "cafe-blu", nome: "☕ Café", descricao: "Café especial.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-blu-cafe", nome: "🍰 Cuca", descricao: "Cuca alemã.", preco: 14, recuperacao: { fome: 20, felicidade: 16, energia: 6 } },
                { id: "pao-queijo-blu", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 8, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-blu", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 11, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "suco-blu-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "blumenau-hamburguer": {
            id: "blumenau-hamburguer",
            nome: "🍔 Hamburgueria Blumenau",
            endereco: "Rua 7 de Setembro, 500 - Centro, Blumenau",
            horario: "18h às 00h",
            telefone: "(47) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-blu", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 42, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-blu", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 44, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-blu-hb", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-blu", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "milkshake-blu", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 7. COMIDA ITALIANA ==========
        "blumenau-italiana": {
            id: "blumenau-italiana",
            nome: "🍝 Cantina Blumenau",
            endereco: "Rua Antônio da Veiga, 1000 - Velha, Blumenau",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(47) 3888-7777",
            descricao: "Cantina italiana tradicional.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "parmegiana-blu", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 55, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "lasanha-blu", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 50, recuperacao: { fome: 66, energia: 20, felicidade: 16 } },
                { id: "nhoque-blu", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 46, recuperacao: { fome: 62, energia: 18, felicidade: 15 } },
                { id: "polenta-blu", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 42, recuperacao: { fome: 58, energia: 17, felicidade: 13 } },
                { id: "vinho-blu", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 22, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 8. SHOPPING BLUMENAU ==========
        "shopping-blumenau": {
            id: "shopping-blumenau",
            nome: "🛍️ Shopping Blumenau - Food Court",
            endereco: "Rua Itajaí, 500 - Centro, Blumenau",
            horario: "10h às 22h",
            telefone: "(47) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 42,
            estrelas: 4.2,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-blu", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 34, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "habibs-blu", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 30, recuperacao: { fome: 40, energia: 12, felicidade: 9 } },
                { id: "china-blu", nome: "🥢 China", descricao: "Yakisoba.", preco: 40, recuperacao: { fome: 54, energia: 14, felicidade: 11 } },
                { id: "japa-blu", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 54, felicidade: 18, energia: 12 } },
                { id: "suco-blu-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. COMIDA CASEIRA ==========
        "blumenau-caseira": {
            id: "blumenau-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Bahia, 400 - Centro, Blumenau",
            horario: "11h às 15h",
            telefone: "(47) 4000-9999",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-blu", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 26, recuperacao: { fome: 68, energia: 22, felicidade: 15 } },
                { id: "bife-blu", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 30, recuperacao: { fome: 64, energia: 20, felicidade: 14 } },
                { id: "frango-blu", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 26, recuperacao: { fome: 59, energia: 18, felicidade: 14 } },
                { id: "peixe-blu", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 28, recuperacao: { fome: 62, energia: 18, felicidade: 14 } },
                { id: "suco-blu-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-blumenau": {
            id: "rodoviaria-blumenau",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Presidente Kennedy, 500 - Centro, Blumenau",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 22,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-blu", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 14, recuperacao: { fome: 20, energia: 7, felicidade: 5 } },
                { id: "suco-blu-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "coxinha-blu", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 12, felicidade: 5, energia: 3 } },
                { id: "pao-queijo-blu", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 6, energia: 3 } },
                { id: "cafe-blu-rod", nome: "☕ Café", descricao: "Café.", preco: 5, recuperacao: { sede: 6, energia: 9, felicidade: 5 } }
            ]
        }
    }
};

export default restaurantesSC;