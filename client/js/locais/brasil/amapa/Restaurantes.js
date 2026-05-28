export const restaurantesAP = {
    // ==================== MACAPÁ (CAPITAL) - 20 RESTAURANTES ====================
    "Macapá": {
        // ========== 1. CENTRO - CULINÁRIA AMAPAENSE (TACACÁ E PEIXES) ==========
        "centro-amapaense": {
            id: "centro-amapaense",
            nome: "🍲 Culinária Amapaense",
            endereco: "Rua Cândido Mendes, 500 - Centro, Macapá",
            horario: "11h às 22h",
            telefone: "(96) 3222-1111",
            descricao: "Culinária típica do Amapá. Tacacá, maniçoca, peixes do rio Amazonas e pratos da região amazônica. Ambiente familiar e acolhedor.",
            tipo: ["amapaense", "amazonica", "regional", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 1240,
            cardapio: [
                { id: "tacaca-mcp", nome: "🥣 Tacacá Amapaense", descricao: "Tucupi quente, goma de tapioca, camarão seco e jambu.", preco: 22, recuperacao: { fome: 28, felicidade: 20, energia: 12 } },
                { id: "manicoca-mcp", nome: "🥬 Maniçoca", descricao: "Folha de mandioca cozida com carnes defumadas.", preco: 38, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "peixe-mcp", nome: "🐟 Peixe na Brasa", descricao: "Peixe do rio Amazonas grelhado na brasa.", preco: 48, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "camarao-mcp", nome: "🍤 Camarão Amazônico", descricao: "Camarão do rio com leite de coco.", preco: 45, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "suco-mcp", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Amazonas",
            endereco: "Rua General Rondon, 300 - Centro, Macapá",
            horario: "11h às 22h",
            telefone: "(96) 3333-2222",
            descricao: "Peixes frescos do rio Amazonas. Tambaqui, pirarucu, tucunaré e surubim.",
            tipo: ["peixaria", "amazonica", "amapaense", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                { id: "tambaqui-mcp", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa.", preco: 55, recuperacao: { fome: 72, felicidade: 26, energia: 18 } },
                { id: "pirarucu-mcp", nome: "🐟 Pirarucu", descricao: "Filé de pirarucu grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "tucunare-mcp", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 52, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "surubim-mcp", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 48, recuperacao: { fome: 62, felicidade: 22, energia: 15 } },
                { id: "suco-peixe-mcp", nome: "🥤 Suco de Açaí", descricao: "Açaí com guaraná.", preco: 12, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 3. CENTRO - TACACARIA ==========
        "centro-tacacaria": {
            id: "centro-tacacaria",
            nome: "🥣 Tacacaria Macapá",
            endereco: "Rua São José, 200 - Centro, Macapá",
            horario: "16h às 22h",
            telefone: "(96) 3444-3333",
            descricao: "Tacacaria tradicional. Tacacá, maniçoca e petiscos amapaenses.",
            tipo: ["tacacaria", "amazonica", "amapaense", "popular"],
            preco_medio: 30,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "tacaca-trad-mcp", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 20, recuperacao: { fome: 28, felicidade: 22, energia: 12 } },
                { id: "manicoca-trad-mcp", nome: "🥬 Maniçoca", descricao: "Maniçoca completa.", preco: 35, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "vatapa-trad-mcp", nome: "🥣 Vatapá", descricao: "Vatapá de peixe.", preco: 22, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "camarao-trad-mcp", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 7 } },
                { id: "suco-trad-mcp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. BEIROL - CHURRASCARIA ==========
        "beirol-churrascaria": {
            id: "beirol-churrascaria",
            nome: "🥩 Churrascaria Beirol",
            endereco: "Av. Beirol, 1000 - Beirol, Macapá",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(96) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-beirol", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-beirol", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-beirol", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-beirol", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-beirol", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. BEIROL - COMIDA AMAZÔNICA ==========
        "beirol-amazonica": {
            id: "beirol-amazonica",
            nome: "🌿 Sabor Amazônico",
            endereco: "Rua Beirol, 500 - Beirol, Macapá",
            horario: "11h às 22h",
            telefone: "(96) 3666-5555",
            descricao: "Culinária amazônica autêntica.",
            tipo: ["amazonica", "regional", "tradicional", "familiar"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-beirol", nome: "🍚 Baião de Dois", descricao: "Baião com carne seca.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "peixe-beirol", nome: "🐟 Peixe Amazônico", descricao: "Peixe grelhado.", preco: 48, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "tacaca-beirol", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 18, recuperacao: { fome: 24, felicidade: 18, energia: 10 } },
                { id: "manicoca-beirol", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 38, recuperacao: { fome: 66, felicidade: 21, energia: 13 } },
                { id: "suco-beirol-am", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 6. FAVELA - BOTECO ==========
        "favela-boteco": {
            id: "favela-boteco",
            nome: "🍺 Boteco Favela",
            endereco: "Rua Favela, 300 - Favela, Macapá",
            horario: "17h às 02h",
            telefone: "(96) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-fav", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-fav", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-fav", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-fav", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-fav", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. BURITIZAL - PIZZARIA ==========
        "buritizal-pizzaria": {
            id: "buritizal-pizzaria",
            nome: "🍕 Pizzaria Buritizal",
            endereco: "Av. Buritizal, 500 - Buritizal, Macapá",
            horario: "18h às 23h30",
            telefone: "(96) 3888-7777",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-bur", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-bur", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-bur", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-bur", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-bur", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 8. JARDIM EQUATORIAL - HAMBURGUERIA ==========
        "jardim-equatorial-hamburguer": {
            id: "jardim-equatorial-hamburguer",
            nome: "🍔 Hamburgueria Equatorial",
            endereco: "Rua Jardim Equatorial, 300 - Jardim Equatorial, Macapá",
            horario: "18h às 00h",
            telefone: "(96) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-je", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-je", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-je", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-je", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-je", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 9. NOVO HORIZONTE - COMIDA CASEIRA ==========
        "novo-horizonte-caseira": {
            id: "novo-horizonte-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Novo Horizonte, 300 - Novo Horizonte, Macapá",
            horario: "11h às 15h",
            telefone: "(96) 4000-9999",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-nh", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-nh", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-nh", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-nh", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-nh", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 10. PACOVAL - CAFÉ REGIONAL ==========
        "pacoval-cafe": {
            id: "pacoval-cafe",
            nome: "☕ Café Pacoval",
            endereco: "Rua Pacoval, 200 - Pacoval, Macapá",
            horario: "08h às 20h",
            telefone: "(96) 4111-0000",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-pac", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pac", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-pac", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-pac", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-pac", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. PARQUE DO BURITIZAL - QUIOSQUE ==========
        "parque-buritizal-quiosque": {
            id: "parque-buritizal-quiosque",
            nome: "🏞️ Quiosque Parque Buritizal",
            endereco: "Parque do Buritizal - Av. Buritizal, Macapá",
            horario: "08h às 20h",
            telefone: "(96) 4222-1111",
            descricao: "Quiosque dentro do parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pq", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pq", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pq", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pq", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pq", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 12. TREM - COMIDA INDÍGENA ==========
        "trem-indigena": {
            id: "trem-indigena",
            nome: "🌿 Comida Indígena",
            endereco: "Rua Trem, 300 - Trem, Macapá",
            horario: "11h às 21h",
            telefone: "(96) 4333-2222",
            descricao: "Culinária indígena tradicional.",
            tipo: ["indigena", "amazonica", "regional", "tradicional"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-trem", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha.", preco: 48, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "beiju-trem", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "macaxeira-trem", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 8, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "pato-trem", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 52, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "suco-trem", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 13. INFRAERO - LANCHONETE ==========
        "infraero-lanchonete": {
            id: "infraero-lanchonete",
            nome: "🍔 Lanchonete Infraero",
            endereco: "Rua Infraero, 200 - Infraero, Macapá",
            horario: "08h às 22h",
            telefone: "(96) 4444-3333",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-inf", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 22, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-inf", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 15, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-inf", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-inf", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-inf", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. CENTRO - TAPIOCARIA ==========
        "centro-tapiocaria": {
            id: "centro-tapiocaria",
            nome: "🥞 Tapiocaria Macapá",
            endereco: "Rua Tiradentes, 300 - Centro, Macapá",
            horario: "08h às 21h",
            telefone: "(96) 4555-4444",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-mcp", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-mcp", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-mcp", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-mcp", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-tapi-mcp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. UNIVERSIDADE - COMIDA RÁPIDA ==========
        "universidade-rapida": {
            id: "universidade-rapida",
            nome: "🍔 Comida Rápida UNIFAP",
            endereco: "Campus UNIFAP - Rua Universitária, Macapá",
            horario: "09h às 22h",
            telefone: "(96) 4666-5555",
            descricao: "Comida rápida para estudantes.",
            tipo: ["fast-food", "lanches", "popular", "universitario"],
            preco_medio: 18,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "sanduiche-uni", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-uni", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-uni", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pastel-uni", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "cafe-uni", nome: "☕ Café", descricao: "Café.", preco: 5, recuperacao: { sede: 8, energia: 10, felicidade: 6 } }
            ]
        },
        
        // ========== 16. BAIRRO ALTO - COMIDA NORDESTINA ==========
        "bairro-alto-nordestina": {
            id: "bairro-alto-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Bairro Alto, 300 - Bairro Alto, Macapá",
            horario: "11h às 21h",
            telefone: "(96) 4777-6666",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-ba", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-ba", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-ba", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-ba", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-ba", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. LAGUINHO - RESTAURANTE POPULAR ==========
        "laguinho-popular": {
            id: "laguinho-popular",
            nome: "🍲 Restaurante Popular Laguinho",
            endereco: "Rua Laguinho, 500 - Laguinho, Macapá",
            horario: "11h às 14h",
            telefone: "(96) 4888-7777",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1340,
            cardapio: [
                { id: "prato-feito-lag", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-lag", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-lag", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-lag", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-lag", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 18. MACAPÁ SHOPPING ==========
        "macapa-shopping": {
            id: "macapa-shopping",
            nome: "🛍️ Macapá Shopping - Food Court",
            endereco: "Av. FAB, 1000 - Centro, Macapá",
            horario: "10h às 22h",
            telefone: "(96) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-mcp", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-mcp", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-mcp", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-mcp", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-mcp-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 19. SHOPPING AMAPÁ ==========
        "shopping-amapa": {
            id: "shopping-amapa",
            nome: "🛍️ Shopping Amapá - Food Court",
            endereco: "Av. Presidente Vargas, 1500 - Centro, Macapá",
            horario: "10h às 22h",
            telefone: "(96) 5000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-sam", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-sam", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-sam", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-sam", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-sam", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-macapa": {
            id: "aeroporto-macapa",
            nome: "✈️ Aeroporto de Macapá - Praça de Alimentação",
            endereco: "Av. Santana, s/n - Aeroporto, Macapá",
            horario: "04h às 23h",
            telefone: "(96) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 40,
            estrelas: 3.8,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-aero-ap", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-ap", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-ap", nome: "☕ Habitual", descricao: "Café.", preco: 22, recuperacao: { fome: 22, energia: 14, felicidade: 10 } },
                { id: "cafe-aero-ap", nome: "☕ Café Regional", descricao: "Café amapaense.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-ap", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== SANTANA - 10 RESTAURANTES ====================
    "Santana": {
        // ========== 1. CENTRO - FRUTOS DO RIO ==========
        "santana-frutos": {
            id: "santana-frutos",
            nome: "🐟 Frutos do Rio",
            endereco: "Av. Santana, 500 - Centro, Santana",
            horario: "11h às 22h",
            telefone: "(96) 3222-1111",
            descricao: "Frutos do rio Amazonas. Peixes frescos e camarões da região. Ambiente familiar.",
            tipo: ["amazonica", "peixaria", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tambaqui-san", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "pirarucu-san", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "camarao-san", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "tacaca-san", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 18, recuperacao: { fome: 25, felicidade: 18, energia: 10 } },
                { id: "suco-san", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "santana-peixaria": {
            id: "santana-peixaria",
            nome: "🐟 Peixaria Santana",
            endereco: "Rua 15 de Novembro, 300 - Centro, Santana",
            horario: "11h às 21h",
            telefone: "(96) 3333-2222",
            descricao: "Peixes frescos do rio.",
            tipo: ["peixaria", "amazonica", "familiar"],
            preco_medium: 40,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tucunare-san", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 48, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "surubim-san", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 45, recuperacao: { fome: 62, felicidade: 23, energia: 15 } },
                { id: "acari-san", nome: "🐟 Acari", descricao: "Acari frito.", preco: 42, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "manicoca-san", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 32, recuperacao: { fome: 62, felicidade: 20, energia: 12 } },
                { id: "suco-peixe-san", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "santana-boteco": {
            id: "santana-boteco",
            nome: "🍺 Boteco Santana",
            endereco: "Av. Rio Amazonas, 200 - Centro, Santana",
            horario: "17h às 02h",
            telefone: "(96) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-san", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-san", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-san", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-san", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-san", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "santana-pizzaria": {
            id: "santana-pizzaria",
            nome: "🍕 Pizzaria Santana",
            endereco: "Av. Rio Matapi, 300 - Centro, Santana",
            horario: "18h às 23h30",
            telefone: "(96) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-san", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-san", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-san", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-san", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-san-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "santana-cafe": {
            id: "santana-cafe",
            nome: "☕ Café Santana",
            endereco: "Rua Duque de Caxias, 200 - Centro, Santana",
            horario: "08h às 20h",
            telefone: "(96) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-san", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-san", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-san", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-san", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-san-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "santana-hamburguer": {
            id: "santana-hamburguer",
            nome: "🍔 Hamburgueria Santana",
            endereco: "Rua Bela Vista, 300 - Centro, Santana",
            horario: "18h às 00h",
            telefone: "(96) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-san", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-san", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-san-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-san", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-san", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "santana-tapiocaria": {
            id: "santana-tapiocaria",
            nome: "🥞 Tapiocaria Santana",
            endereco: "Rua Pedro Teixeira, 200 - Centro, Santana",
            horario: "08h às 21h",
            telefone: "(96) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-san", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-san", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-san", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-san", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-san-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "santana-caseira": {
            id: "santana-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 13 de Maio, 300 - Centro, Santana",
            horario: "11h às 15h",
            telefone: "(96) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-san", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-san", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-san", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-san", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-san-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-santana": {
            id: "shopping-santana",
            nome: "🛍️ Shopping Santana - Food Court",
            endereco: "Av. Santana, 1000 - Centro, Santana",
            horario: "10h às 22h",
            telefone: "(96) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 32,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-san", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 28, recuperacao: { fome: 42, energia: 12, felicidade: 8 } },
                { id: "habibs-san", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 24, recuperacao: { fome: 32, energia: 10, felicidade: 8 } },
                { id: "china-san", nome: "🥢 China", descricao: "Yakisoba.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "japa-san", nome: "🍣 Sushi", descricao: "Combinado.", preco: 32, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-san-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-santana": {
            id: "rodoviaria-santana",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-210, km 5 - Centro, Santana",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-san", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-san-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-san", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-san", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-san-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== LARANJAL DO JARI - 10 RESTAURANTES ====================
    "Laranjal do Jari": {
        // ========== 1. CENTRO - COMIDA RIBEIRINHA ==========
        "laranjal-ribeirinha": {
            id: "laranjal-ribeirinha",
            nome: "🐟 Sabor Ribeirinho",
            endereco: "Av. Beira Rio, 200 - Centro, Laranjal do Jari",
            horario: "11h às 22h",
            telefone: "(96) 3222-1111",
            descricao: "Culinária ribeirinha do rio Jari. Peixes frescos e pratos típicos da região.",
            tipo: ["amazonica", "ribeirinha", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-lj", nome: "🐟 Peixe na Brasa", descricao: "Peixe do rio Jari grelhado.", preco: 45, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "camarao-lj", nome: "🍤 Camarão", descricao: "Camarão do rio.", preco: 42, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "tacaca-lj", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 18, recuperacao: { fome: 24, felicidade: 18, energia: 10 } },
                { id: "manicoca-lj", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 32, recuperacao: { fome: 62, felicidade: 20, energia: 12 } },
                { id: "suco-lj", nome: "🥤 Suco de Açaí", descricao: "Suco de açaí.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "laranjal-peixaria": {
            id: "laranjal-peixaria",
            nome: "🐟 Peixaria do Jari",
            endereco: "Rua do Comércio, 300 - Centro, Laranjal do Jari",
            horario: "11h às 21h",
            telefone: "(96) 3333-2222",
            descricao: "Peixes frescos do rio Jari.",
            tipo: ["peixaria", "amazonica", "familiar"],
            preco_medium: 38,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tambaqui-lj", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 48, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "pirarucu-lj", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 50, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "tucunare-lj", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 46, recuperacao: { fome: 64, felicidade: 23, energia: 15 } },
                { id: "surubim-lj", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 44, recuperacao: { fome: 62, felicidade: 22, energia: 14 } },
                { id: "suco-peixe-lj", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "laranjal-boteco": {
            id: "laranjal-boteco",
            nome: "🍺 Boteco Laranjal",
            endereco: "Rua 7 de Setembro, 150 - Centro, Laranjal do Jari",
            horario: "17h às 02h",
            telefone: "(96) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-lj", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-lj", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-lj", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-lj", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-lj", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "laranjal-pizzaria": {
            id: "laranjal-pizzaria",
            nome: "🍕 Pizzaria Laranjal",
            endereco: "Av. Rio Jari, 300 - Centro, Laranjal do Jari",
            horario: "18h às 23h",
            telefone: "(96) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 340,
            cardapio: [
                { id: "pizza-mussarela-lj", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 38, recuperacao: { fome: 48, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-lj", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-lj", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "calzone-lj", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-lj-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "laranjal-cafe": {
            id: "laranjal-cafe",
            nome: "☕ Café Laranjal",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Laranjal do Jari",
            horario: "08h às 20h",
            telefone: "(96) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-lj", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-lj", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-lj", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-lj", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-lj-cafe", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "laranjal-hamburguer": {
            id: "laranjal-hamburguer",
            nome: "🍔 Hamburgueria Jari",
            endereco: "Rua Projetada, 200 - Centro, Laranjal do Jari",
            horario: "18h às 00h",
            telefone: "(96) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-lj", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-lj", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-lj-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-lj", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-lj", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "laranjal-tapiocaria": {
            id: "laranjal-tapiocaria",
            nome: "🥞 Tapiocaria Jari",
            endereco: "Rua da Paz, 200 - Centro, Laranjal do Jari",
            horario: "08h às 21h",
            telefone: "(96) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-lj", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-lj", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-lj", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-lj", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-lj-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "laranjal-caseira": {
            id: "laranjal-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 15 de Novembro, 200 - Centro, Laranjal do Jari",
            horario: "11h às 15h",
            telefone: "(96) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-lj", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-lj", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-lj", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-lj", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-lj-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. COMIDA INDÍGENA ==========
        "laranjal-indigena": {
            id: "laranjal-indigena",
            nome: "🌿 Comida Indígena",
            endereco: "Aldeia Indígena - Estrada do Jari, Laranjal do Jari",
            horario: "09h às 18h",
            telefone: "(96) 4000-9999",
            descricao: "Culinária indígena tradicional.",
            tipo: ["indigena", "amazonica", "regional", "tradicional"],
            preco_medium: 35,
            estrelas: 4.7,
            avaliacoes: 340,
            cardapio: [
                { id: "peixe-ind-lj", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha.", preco: 42, recuperacao: { fome: 65, felicidade: 26, energia: 18 } },
                { id: "beiju-lj", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 8, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "macaxeira-lj", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 7, recuperacao: { fome: 12, felicidade: 7, energia: 4 } },
                { id: "pato-lj", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 48, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "suco-ind-lj", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-laranjal": {
            id: "rodoviaria-laranjal",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-210, km 50 - Centro, Laranjal do Jari",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-lj", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-lj-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-lj", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-lj", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-lj-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesAP;