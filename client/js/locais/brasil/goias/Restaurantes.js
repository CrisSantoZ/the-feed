const restaurantesGO = {
    // ==================== GOIÂNIA (CAPITAL) - 20 RESTAURANTES ====================
    "Goiânia": {
        // ========== 1. CENTRO - CULINÁRIA GOIANA (PEQUI E EMPADÃO) ==========
        "centro-goiano": {
            id: "centro-goiano",
            nome: "🍚 Culinária Goiana",
            endereco: "Rua 8, 500 - Centro, Goiânia",
            horario: "11h às 22h",
            telefone: "(62) 3222-1111",
            descricao: "Restaurante tradicional com culinária goiana autêntica. Especialidade em empadão goiano, arroz com pequi e frango com guariroba. Ambiente familiar e acolhedor.",
            tipo: ["goiana", "regional", "tradicional", "familiar"],
            preco_medio: 50,
            estrelas: 4.7,
            avaliacoes: 2450,
            cardapio: [
                { id: "empadao-goiano", nome: "🥧 Empadão Goiano", descricao: "Empadão recheado com frango, palmito, queijo, milho e ervilhas.", preco: 35, recuperacao: { fome: 55, felicidade: 22, energia: 16 } },
                { id: "arroz-pequi", nome: "🍚 Arroz com Pequi", descricao: "Arroz típico com pequi, frango e temperos goianos.", preco: 42, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "frango-guariroba", nome: "🍗 Frango com Guariroba", descricao: "Frango caipira com guariroba (palmito amargo).", preco: 48, recuperacao: { fome: 68, felicidade: 22, energia: 16 } },
                { id: "pamonha-goiana", nome: "🌽 Pamonha Goiana", descricao: "Pamonha de milho verde com queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 6 } },
                { id: "suco-cerrado", nome: "🥤 Suco do Cerrado", descricao: "Suco de cagaita ou araticum.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - EMPADÃO GOIANO ==========
        "centro-empadao": {
            id: "centro-empadao",
            nome: "🥧 Empadão Goiano Tradicional",
            endereco: "Av. Anhanguera, 500 - Centro, Goiânia",
            horario: "10h às 20h",
            telefone: "(62) 3333-2222",
            descricao: "Especializado no famoso empadão goiano. Mais de 10 sabores. Tradição desde 1975.",
            tipo: ["goiana", "tradicional", "familiar", "regional"],
            preco_medio: 35,
            estrelas: 4.8,
            avaliacoes: 3420,
            cardapio: [
                { id: "empadao-frango", nome: "🥧 Empadão de Frango", descricao: "Empadão recheado com frango desfiado.", preco: 32, recuperacao: { fome: 52, felicidade: 20, energia: 14 } },
                { id: "empadao-carne", nome: "🥧 Empadão de Carne", descricao: "Empadão com carne moída.", preco: 34, recuperacao: { fome: 54, felicidade: 20, energia: 14 } },
                { id: "empadao-queijo", nome: "🥧 Empadão de Queijo", descricao: "Empadão de queijo com palmito.", preco: 32, recuperacao: { fome: 50, felicidade: 18, energia: 12 } },
                { id: "empadao-vegetariano", nome: "🥧 Empadão Vegetariano", descricao: "Empadão de legumes.", preco: 30, recuperacao: { fome: 48, felicidade: 18, energia: 12 } },
                { id: "suco-goiano", nome: "🥤 Suco de Cagaita", descricao: "Suco típico do cerrado.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 3. SETOR MARISTA - CHURRASCARIA ==========
        "marista-churrascaria": {
            id: "marista-churrascaria",
            nome: "🥩 Churrascaria Marista",
            endereco: "Av. 85, 1000 - Setor Marista, Goiânia",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(62) 3444-3333",
            descricao: "Churrascaria com rodízio de carnes nobres. Buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "premium", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "rodizio-marista", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-marista", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 62, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-marista", nome: "🍖 Costela", descricao: "Costela assada.", preco: 58, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-marista", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-marista", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. SETOR BUENO - FRUTOS DO MAR ==========
        "bueno-frutos": {
            id: "bueno-frutos",
            nome: "🐟 Restaurante Bueno",
            endereco: "Al. Ricardo Paranhos, 500 - Setor Bueno, Goiânia",
            horario: "11h às 23h",
            telefone: "(62) 3555-4444",
            descricao: "Frutos do mar frescos. Peixes e camarões.",
            tipo: ["frutos-do-mar", "brasileira", "premium", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "camarao-bueno", nome: "🍤 Camarão", descricao: "Camarão grelhado.", preco: 65, recuperacao: { fome: 65, felicidade: 26, energia: 18 } },
                { id: "moqueca-bueno", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 72, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "peixe-bueno", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 55, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "lagosta-bueno", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 125, recuperacao: { fome: 85, felicidade: 38, energia: 24 } },
                { id: "caipirinha-bueno", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 5. SETOR OESTE - PIZZARIA ==========
        "oeste-pizzaria": {
            id: "oeste-pizzaria",
            nome: "🍕 Pizzaria Oeste",
            endereco: "Rua 4, 300 - Setor Oeste, Goiânia",
            horario: "18h às 00h",
            telefone: "(62) 3666-5555",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-mussarela-go", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-go", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-go", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-go", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-go-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. JARDIM GOIÁS - BOTECO ==========
        "jardim-goias-boteco": {
            id: "jardim-goias-boteco",
            nome: "🍺 Boteco Jardim",
            endereco: "Rua Jardim Goiás, 300 - Jardim Goiás, Goiânia",
            horario: "17h às 02h",
            telefone: "(62) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "calabresa-jg", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 33, felicidade: 13, energia: 7 } },
                { id: "torresmo-jg", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-jg", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-jg", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-jg", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. SETOR SUL - COMIDA NORDESTINA ==========
        "sul-nordestina": {
            id: "sul-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua 1133, 200 - Setor Sul, Goiânia",
            horario: "11h às 21h",
            telefone: "(62) 3888-7777",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "baiao-sul", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-sul", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-sul", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-sul", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-sul", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. SETOR AEROPORTO - HAMBURGUERIA ==========
        "aeroporto-hamburguer": {
            id: "aeroporto-hamburguer",
            nome: "🍔 Hamburgueria Aeroporto",
            endereco: "Av. Santana, 500 - Setor Aeroporto, Goiânia",
            horario: "18h às 00h",
            telefone: "(62) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-aero", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-aero", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-aero", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-aero", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-aero", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 9. SETOR PEDRO LUDOVICO - CAFÉ ==========
        "pedro-ludovico-cafe": {
            id: "pedro-ludovico-cafe",
            nome: "☕ Café Pedro Ludovico",
            endereco: "Rua 20, 300 - Setor Pedro Ludovico, Goiânia",
            horario: "08h às 20h",
            telefone: "(62) 4000-9999",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 25,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-pl", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pl", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-pl", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-pl", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-pl", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. SETOR JAÓ - COMIDA INTERNACIONAL ==========
        "jao-internacional": {
            id: "jao-internacional",
            nome: "🍽️ Jaó Gastrô",
            endereco: "Rua Jaó, 300 - Setor Jaó, Goiânia",
            horario: "12h às 15h | 19h às 23h",
            telefone: "(62) 4111-0000",
            descricao: "Cozinha internacional contemporânea.",
            tipo: ["contemporanea", "internacional", "premium", "romântico"],
            preco_medio: 110,
            estrelas: 4.8,
            avaliacoes: 670,
            cardapio: [
                { id: "file-jao", nome: "🥩 Filé Mignon", descricao: "Filé ao molho madeira.", preco: 85, recuperacao: { fome: 72, energia: 30, felicidade: 22 } },
                { id: "lagosta-jao", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 135, recuperacao: { fome: 85, energia: 38, felicidade: 28 } },
                { id: "salmao-jao", nome: "🐟 Salmão", descricao: "Salmão ao maracujá.", preco: 75, recuperacao: { fome: 68, energia: 26, felicidade: 20 } },
                { id: "risoto-jao", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 72, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "vinho-jao", nome: "🍷 Vinho", descricao: "Vinho tinto chileno.", preco: 38, recuperacao: { sede: 10, felicidade: 22, energia: -6 } }
            ]
        },
        
        // ========== 11. SETOR NOVA SUÍÇA - COMIDA CASEIRA ==========
        "nova-suica-caseira": {
            id: "nova-suica-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 10, 300 - Nova Suíça, Goiânia",
            horario: "11h às 15h",
            telefone: "(62) 4222-1111",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-ns", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-ns", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 25, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-ns", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 22, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-ns", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 24, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-ns", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 12. SETOR CENTRAL - TAPIOCARIA ==========
        "central-tapiocaria": {
            id: "central-tapiocaria",
            nome: "🥞 Tapiocaria Central",
            endereco: "Rua 3, 200 - Centro, Goiânia",
            horario: "08h às 21h",
            telefone: "(62) 4333-2222",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-go", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-go", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-go", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-go", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-go-tapi", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. SETOR LESTE - QUIOSQUE ==========
        "leste-quiosque": {
            id: "leste-quiosque",
            nome: "🏞️ Quiosque Setor Leste",
            endereco: "Parque Leste - Av. Leste, Goiânia",
            horario: "09h às 20h",
            telefone: "(62) 4444-3333",
            descricao: "Quiosque no parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-leste", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-leste", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-leste", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-leste", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-leste", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 14. SETOR CAMPINAS - PEIXARIA ==========
        "campinas-peixaria": {
            id: "campinas-peixaria",
            nome: "🐟 Peixaria Campinas",
            endereco: "Rua Campinas, 300 - Setor Campinas, Goiânia",
            horario: "11h às 21h",
            telefone: "(62) 4555-4444",
            descricao: "Peixes frescos.",
            tipo: ["peixaria", "brasileira", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-camp", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-camp", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-camp", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "tambaqui-camp", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "suco-camp", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. SETOR VALE DOS SONHOS - RESTAURANTE POPULAR ==========
        "vale-sonhos-popular": {
            id: "vale-sonhos-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Vale dos Sonhos, 500 - Vale dos Sonhos, Goiânia",
            horario: "11h às 14h",
            telefone: "(62) 4666-5555",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1450,
            cardapio: [
                { id: "prato-feito-vs", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-vs", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-vs", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-vs", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-vs", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SETOR UNIVERSITÁRIO - COMIDA RÁPIDA ==========
        "universitario-rapida": {
            id: "universitario-rapida",
            nome: "🍔 Comida Rápida Universitário",
            endereco: "Av. Universitária, 500 - Setor Universitário, Goiânia",
            horario: "09h às 22h",
            telefone: "(62) 4777-6666",
            descricao: "Comida rápida para estudantes.",
            tipo: ["fast-food", "lanches", "popular", "universitario"],
            preco_medio: 18,
            estrelas: 4.2,
            avaliacoes: 1120,
            cardapio: [
                { id: "sanduiche-uni-go", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-uni-go", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-uni-go", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pastel-uni-go", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "cafe-uni-go", nome: "☕ Café", descricao: "Café.", preco: 5, recuperacao: { sede: 8, energia: 10, felicidade: 6 } }
            ]
        },
        
        // ========== 17. FLAMBOYANT SHOPPING ==========
        "flamboyant-shopping": {
            id: "flamboyant-shopping",
            nome: "🛍️ Flamboyant Shopping - Food Court",
            endereco: "Av. Jamel Cecílio, 1000 - Jardim Goiás, Goiânia",
            horario: "10h às 22h",
            telefone: "(62) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-flam", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-flam", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-flam", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 58, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "japa-flam", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-flam", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 18. SHOPPING PASSEIO DAS ÁGUAS ==========
        "passeio-aguas-shopping": {
            id: "passeio-aguas-shopping",
            nome: "🛍️ Shopping Passeio das Águas - Food Court",
            endereco: "Av. Perimetral Norte, 5000 - Jardim Santa Genoveva, Goiânia",
            horario: "10h às 22h",
            telefone: "(62) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-pa", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-pa", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-pa", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-pa", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-pa", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 19. SETOR BELA VISTA - COMIDA ÁRABE ==========
        "bela-vista-arabe": {
            id: "bela-vista-arabe",
            nome: "🧆 Al Balad Goiânia",
            endereco: "Rua Bela Vista, 300 - Setor Bela Vista, Goiânia",
            horario: "11h às 23h",
            telefone: "(62) 5000-9999",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "banquete-bv", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "esfiha-bv", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 32, recuperacao: { fome: 40, felicidade: 16, energia: 8 } },
                { id: "kibe-bv", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 28, recuperacao: { fome: 34, felicidade: 15, energia: 7 } },
                { id: "hommus-bv", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 24, recuperacao: { fome: 28, felicidade: 15, energia: 7 } },
                { id: "suco-bv", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-goiania": {
            id: "aeroporto-goiania",
            nome: "✈️ Aeroporto Santa Genoveva - Praça de Alimentação",
            endereco: "Av. do Aeroporto, s/n - Setor Santa Genoveva, Goiânia",
            horario: "04h às 23h",
            telefone: "(62) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-aero-go", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-go", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-go", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-go", nome: "☕ Café Goiano", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-go", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== APARECIDA DE GOIÂNIA - 10 RESTAURANTES ====================
    "Aparecida de Goiânia": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "aparecida-churrascaria": {
            id: "aparecida-churrascaria",
            nome: "🥩 Churrascaria Aparecida",
            endereco: "Av. Independência, 500 - Centro, Aparecida de Goiânia",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(62) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-ap", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-ap", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-ap", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-ap", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-ap", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA GOIANA ==========
        "aparecida-goiana": {
            id: "aparecida-goiana",
            nome: "🍚 Sabor Goiano",
            endereco: "Rua 8, 300 - Centro, Aparecida de Goiânia",
            horario: "11h às 22h",
            telefone: "(62) 3333-2222",
            descricao: "Culinária goiana tradicional.",
            tipo: ["goiana", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "empadao-ap", nome: "🥧 Empadão Goiano", descricao: "Empadão tradicional.", preco: 32, recuperacao: { fome: 50, felicidade: 20, energia: 14 } },
                { id: "arroz-pequi-ap", nome: "🍚 Arroz com Pequi", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "frango-guariroba-ap", nome: "🍗 Frango com Guariroba", descricao: "Frango caipira.", preco: 42, recuperacao: { fome: 64, felicidade: 22, energia: 15 } },
                { id: "pamonha-ap", nome: "🌽 Pamonha", descricao: "Pamonha goiana.", preco: 10, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ap-go", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "aparecida-boteco": {
            id: "aparecida-boteco",
            nome: "🍺 Boteco Aparecida",
            endereco: "Av. Rio Verde, 200 - Centro, Aparecida de Goiânia",
            horario: "17h às 02h",
            telefone: "(62) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-ap", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ap", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ap", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ap", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ap", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "aparecida-pizzaria": {
            id: "aparecida-pizzaria",
            nome: "🍕 Pizzaria Aparecida",
            endereco: "Rua 15, 300 - Centro, Aparecida de Goiânia",
            horario: "18h às 23h30",
            telefone: "(62) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-ap", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ap", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ap", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ap", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ap-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "aparecida-cafe": {
            id: "aparecida-cafe",
            nome: "☕ Café Aparecida",
            endereco: "Rua 10, 200 - Centro, Aparecida de Goiânia",
            horario: "08h às 20h",
            telefone: "(62) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ap", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ap", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ap", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ap", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ap-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "aparecida-hamburguer": {
            id: "aparecida-hamburguer",
            nome: "🍔 Hamburgueria Aparecida",
            endereco: "Av. Francisco Ribeiro, 300 - Centro, Aparecida de Goiânia",
            horario: "18h às 00h",
            telefone: "(62) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-ap", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-ap", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-ap-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-ap", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-ap", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "aparecida-tapiocaria": {
            id: "aparecida-tapiocaria",
            nome: "🥞 Tapiocaria Aparecida",
            endereco: "Rua 20, 200 - Centro, Aparecida de Goiânia",
            horario: "08h às 21h",
            telefone: "(62) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-ap", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ap", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ap", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ap", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ap-tapi", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "aparecida-caseira": {
            id: "aparecida-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 5, 200 - Centro, Aparecida de Goiânia",
            horario: "11h às 15h",
            telefone: "(62) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-ap", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ap", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ap", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ap", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ap-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-aparecida": {
            id: "shopping-aparecida",
            nome: "🛍️ Shopping Aparecida - Food Court",
            endereco: "Av. Independência, 1500 - Centro, Aparecida de Goiânia",
            horario: "10h às 22h",
            telefone: "(62) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ap", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ap", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ap", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ap", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ap-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-aparecida": {
            id: "rodoviaria-aparecida",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Rio Verde, 1000 - Centro, Aparecida de Goiânia",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ap", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ap-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ap", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ap", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ap-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== ANÁPOLIS - 10 RESTAURANTES ====================
    "Anápolis": {
        // ========== 1. CENTRO - CULINÁRIA GOIANA ==========
        "anapolis-goiana": {
            id: "anapolis-goiana",
            nome: "🍚 Sabor Goiano",
            endereco: "Rua 2, 500 - Centro, Anápolis",
            horario: "11h às 22h",
            telefone: "(62) 3222-1111",
            descricao: "Culinária goiana tradicional com pequi e empadão.",
            tipo: ["goiana", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "empadao-an", nome: "🥧 Empadão Goiano", descricao: "Empadão tradicional.", preco: 32, recuperacao: { fome: 52, felicidade: 20, energia: 14 } },
                { id: "arroz-pequi-an", nome: "🍚 Arroz com Pequi", descricao: "Arroz típico.", preco: 40, recuperacao: { fome: 62, felicidade: 22, energia: 15 } },
                { id: "frango-guariroba-an", nome: "🍗 Frango com Guariroba", descricao: "Frango caipira.", preco: 45, recuperacao: { fome: 66, felicidade: 23, energia: 15 } },
                { id: "pamonha-an", nome: "🌽 Pamonha", descricao: "Pamonha goiana.", preco: 10, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-an", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "anapolis-churrascaria": {
            id: "anapolis-churrascaria",
            nome: "🥩 Churrascaria Anápolis",
            endereco: "Av. Brasil, 1000 - Centro, Anápolis",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(62) 3333-2222",
            descricao: "Churrascaria com rodízio.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-an", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-an", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-an", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-an", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-an-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "anapolis-boteco": {
            id: "anapolis-boteco",
            nome: "🍺 Boteco Anápolis",
            endereco: "Rua 7, 200 - Centro, Anápolis",
            horario: "17h às 02h",
            telefone: "(62) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-an", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-an", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-an", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-an", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-an", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "anapolis-pizzaria": {
            id: "anapolis-pizzaria",
            nome: "🍕 Pizzaria Anápolis",
            endereco: "Av. Goiás, 300 - Centro, Anápolis",
            horario: "18h às 23h30",
            telefone: "(62) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-an", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-an", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-an", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-an", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-an-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "anapolis-cafe": {
            id: "anapolis-cafe",
            nome: "☕ Café Anápolis",
            endereco: "Rua 5, 200 - Centro, Anápolis",
            horario: "08h às 20h",
            telefone: "(62) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-an", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-an", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-an", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-an", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-an-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "anapolis-hamburguer": {
            id: "anapolis-hamburguer",
            nome: "🍔 Hamburgueria Anápolis",
            endereco: "Rua 9, 300 - Centro, Anápolis",
            horario: "18h às 00h",
            telefone: "(62) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-an", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-an", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-an-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-an", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-an", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "anapolis-tapiocaria": {
            id: "anapolis-tapiocaria",
            nome: "🥞 Tapiocaria Anápolis",
            endereco: "Rua 10, 200 - Centro, Anápolis",
            horario: "08h às 21h",
            telefone: "(62) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-an", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-an", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-an", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-an", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-an-tapi", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "anapolis-caseira": {
            id: "anapolis-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 12, 200 - Centro, Anápolis",
            horario: "11h às 15h",
            telefone: "(62) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-an", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-an", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-an", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-an", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-an-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-anapolis": {
            id: "shopping-anapolis",
            nome: "🛍️ Shopping Anápolis - Food Court",
            endereco: "Av. Fernando Costa, 1000 - Centro, Anápolis",
            horario: "10h às 22h",
            telefone: "(62) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-an", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-an", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-an", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-an", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-an-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-anapolis": {
            id: "rodoviaria-anapolis",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-060, km 100 - Centro, Anápolis",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-an", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-an-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-an", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-an", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-an-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== RIO VERDE - 10 RESTAURANTES ====================
    "Rio Verde": {
        // ========== 1. CENTRO - COMIDA DO INTERIOR ==========
        "rio-verde-interior": {
            id: "rio-verde-interior",
            nome: "🍚 Sabor do Cerrado",
            endereco: "Av. Presidente Vargas, 500 - Centro, Rio Verde",
            horario: "11h às 22h",
            telefone: "(64) 3222-1111",
            descricao: "Culinária típica do interior goiano. Pequi, empadão e frango caipira.",
            tipo: ["goiana", "regional", "interior", "familiar"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "empadao-rv", nome: "🥧 Empadão Goiano", descricao: "Empadão tradicional.", preco: 32, recuperacao: { fome: 52, felicidade: 20, energia: 14 } },
                { id: "arroz-pequi-rv", nome: "🍚 Arroz com Pequi", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "frango-caipira-rv", nome: "🍗 Frango Caipira", descricao: "Frango caipira com guariroba.", preco: 45, recuperacao: { fome: 66, felicidade: 23, energia: 15 } },
                { id: "pamonha-rv", nome: "🌽 Pamonha", descricao: "Pamonha goiana.", preco: 10, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-rv", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "rio-verde-churrascaria": {
            id: "rio-verde-churrascaria",
            nome: "🥩 Churrascaria Rio Verde",
            endereco: "Av. Goiás, 1000 - Centro, Rio Verde",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(64) 3333-2222",
            descricao: "Churrascaria com rodízio.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "rodizio-rv", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-rv", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-rv", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-rv", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-rv-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "rio-verde-boteco": {
            id: "rio-verde-boteco",
            nome: "🍺 Boteco Rio Verde",
            endereco: "Rua 20, 200 - Centro, Rio Verde",
            horario: "17h às 02h",
            telefone: "(64) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-rv", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-rv", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-rv", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-rv", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-rv", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "rio-verde-pizzaria": {
            id: "rio-verde-pizzaria",
            nome: "🍕 Pizzaria Rio Verde",
            endereco: "Av. Amazonas, 300 - Centro, Rio Verde",
            horario: "18h às 23h30",
            telefone: "(64) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-rv", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-rv", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-rv", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-rv", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-rv-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "rio-verde-cafe": {
            id: "rio-verde-cafe",
            nome: "☕ Café Rio Verde",
            endereco: "Rua 15, 200 - Centro, Rio Verde",
            horario: "08h às 20h",
            telefone: "(64) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-rv", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-rv", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-rv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-rv", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-rv-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "rio-verde-hamburguer": {
            id: "rio-verde-hamburguer",
            nome: "🍔 Hamburgueria Rio Verde",
            endereco: "Rua 18, 300 - Centro, Rio Verde",
            horario: "18h às 00h",
            telefone: "(64) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-rv", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-rv", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-rv-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-rv", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-rv", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "rio-verde-tapiocaria": {
            id: "rio-verde-tapiocaria",
            nome: "🥞 Tapiocaria Rio Verde",
            endereco: "Rua 10, 200 - Centro, Rio Verde",
            horario: "08h às 21h",
            telefone: "(64) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-rv", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-rv", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-rv", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-rv", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-rv-tapi", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "rio-verde-caseira": {
            id: "rio-verde-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 5, 200 - Centro, Rio Verde",
            horario: "11h às 15h",
            telefone: "(64) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-rv", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-rv", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-rv", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-rv", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-rv-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-rio-verde": {
            id: "shopping-rio-verde",
            nome: "🛍️ Shopping Rio Verde - Food Court",
            endereco: "Av. Presidente Vargas, 2000 - Centro, Rio Verde",
            horario: "10h às 22h",
            telefone: "(64) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-rv", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-rv", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-rv", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-rv", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-rv-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-rio-verde": {
            id: "rodoviaria-rio-verde",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-060, km 200 - Centro, Rio Verde",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-rv", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-rv-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-rv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-rv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-rv-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesGO;