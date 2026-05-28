export const restaurantesSE = {
    // ==================== ARACAJU (CAPITAL) - 20 RESTAURANTES ====================
    "Aracaju": {
        // ========== 1. ATALAIA - FRUTOS DO MAR ==========
        "atalaia-frutos": {
            id: "atalaia-frutos",
            nome: "🦞 Restaurante Atalaia",
            endereco: "Av. Santos Dumont, 1000 - Atalaia, Aracaju",
            horario: "11h às 23h",
            telefone: "(79) 3222-1111",
            descricao: "Frutos do mar com vista para o mar. Especialidade em lagosta, camarão e peixes da costa sergipana.",
            tipo: ["frutos-do-mar", "sergipana", "praia", "vista", "turístico"],
            preco_medium: 85,
            estrelas: 4.8,
            avaliacoes: 2870,
            cardapio: [
                { id: "lagosta-ata", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 125, recuperacao: { fome: 85, felicidade: 42, energia: 28 } },
                { id: "camarao-ata", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "moqueca-ata", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 78, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-ata", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-ata", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. ATALAIA - QUIOSQUE ==========
        "atalaia-quiosque": {
            id: "atalaia-quiosque",
            nome: "🏖️ Quiosque Atalaia",
            endereco: "Orla de Atalaia - Praia, Aracaju",
            horario: "08h às 22h",
            telefone: "(79) 3333-2222",
            descricao: "Quiosque na famosa praia de Atalaia. Água de coco, petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medium: 38,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "agua-coco-ata", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-ataq", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-ataq", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 32, recuperacao: { fome: 35, felicidade: 15, energia: 8 } },
                { id: "pastel-ataq", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-ataq", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PRAIA DOS ARTISTAS - PEIXARIA ==========
        "praia-artistas-peixaria": {
            id: "praia-artistas-peixaria",
            nome: "🐟 Peixaria Praia dos Artistas",
            endereco: "Av. Santos Dumont, 1500 - Praia dos Artistas, Aracaju",
            horario: "11h às 22h",
            telefone: "(79) 3444-3333",
            descricao: "Peixes frescos da costa sergipana. Especialidade em peixes e frutos do mar.",
            tipo: ["peixaria", "frutos-do-mar", "praia", "familiar"],
            preco_medium: 60,
            estrelas: 4.6,
            avaliacoes: 1560,
            cardapio: [
                { id: "peixe-pa", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 52, recuperacao: { fome: 65, energia: 22, felicidade: 17 } },
                { id: "camarao-pa", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 58, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "moqueca-pa", nome: "🍲 Moqueca", descricao: "Moqueca sergipana.", preco: 65, recuperacao: { fome: 72, energia: 26, felicidade: 18 } },
                { id: "caranguejo-pa", nome: "🦀 Caranguejo", descricao: "Caranguejo cozido.", preco: 48, recuperacao: { fome: 60, felicidade: 24, energia: 16 } },
                { id: "suco-pa", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - CULINÁRIA SERGIPANA ==========
        "centro-sergipana": {
            id: "centro-sergipana",
            nome: "🍚 Culinária Sergipana",
            endereco: "Rua Laranjeiras, 200 - Centro, Aracaju",
            horario: "11h às 22h",
            telefone: "(79) 3555-4444",
            descricao: "Restaurante tradicional com culinária sergipana autêntica. Especialidades como carne de sol, baião de dois, feijão verde e tapioca.",
            tipo: ["sergipana", "nordestina", "tradicional", "regional", "familiar"],
            preco_medium: 48,
            estrelas: 4.7,
            avaliacoes: 1980,
            cardapio: [
                { id: "carne-sol-se", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "baiao-dois-se", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "feijao-verde-se", nome: "🍲 Feijão Verde", descricao: "Feijão verde com carne de sol.", preco: 38, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "tapioca-se", nome: "🥞 Tapioca de Carne", descricao: "Tapioca recheada com carne seca.", preco: 18, recuperacao: { fome: 25, felicidade: 15, energia: 7 } },
                { id: "caipirinha-se", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 5. COROA DO MEIO - CHURRASCARIA ==========
        "coroa-meio-churrascaria": {
            id: "coroa-meio-churrascaria",
            nome: "🥩 Churrascaria Coroa do Meio",
            endereco: "Av. Santos Dumont, 2000 - Coroa do Meio, Aracaju",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(79) 3666-5555",
            descricao: "Churrascaria com rodízio de carnes e vista para o mar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "vista", "familiar"],
            preco_medium: 75,
            estrelas: 4.6,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-cm", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-cm", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-cm", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-cm", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-cm", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. 13 DE JULHO - BOTECO ==========
        "treze-julho-boteco": {
            id: "treze-julho-boteco",
            nome: "🍺 Boteco 13 de Julho",
            endereco: "Rua 13 de Julho, 300 - 13 de Julho, Aracaju",
            horario: "17h às 03h",
            telefone: "(79) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 30,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-tj", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-tj", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-tj", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-tj", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-tj", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. SIQUEIRA CAMPOS - PIZZARIA ==========
        "siqueira-campos-pizzaria": {
            id: "siqueira-campos-pizzaria",
            nome: "🍕 Pizzaria Siqueira",
            endereco: "Av. Siqueira Campos, 500 - Siqueira Campos, Aracaju",
            horario: "18h às 23h30",
            telefone: "(79) 3888-7777",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-sc", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-sc", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-sc", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-sc", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-sc", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. GRAGERU - HAMBURGUERIA ==========
        "grageru-hamburguer": {
            id: "grageru-hamburguer",
            nome: "🍔 Hamburgueria Grageru",
            endereco: "Rua Grageru, 300 - Grageru, Aracaju",
            horario: "18h às 00h",
            telefone: "(79) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-gr", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 40, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-gr", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 42, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-gr", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-gr", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-gr", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 9. JARDINS - CAFÉ REGIONAL ==========
        "jardins-cafe": {
            id: "jardins-cafe",
            nome: "☕ Café Jardins",
            endereco: "Rua Jardins, 300 - Jardins, Aracaju",
            horario: "08h às 20h",
            telefone: "(79) 4000-9999",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 25,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-ja", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ja", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ja", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ja", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ja", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. FAROLÂNDIA - TAPIOCARIA ==========
        "farolandia-tapiocaria": {
            id: "farolandia-tapiocaria",
            nome: "🥞 Tapiocaria Farolândia",
            endereco: "Rua Farolândia, 500 - Farolândia, Aracaju",
            horario: "08h às 21h",
            telefone: "(79) 4111-0000",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-fa", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-fa", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-fa", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-fa", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-fa", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. LUZIA - COMIDA CASEIRA ==========
        "luzia-caseira": {
            id: "luzia-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Luzia, 500 - Luzia, Aracaju",
            horario: "11h às 15h",
            telefone: "(79) 4222-1111",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-lu", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-lu", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-lu", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-lu", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-lu", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 12. SANTOS DUMONT - COMIDA NORDESTINA ==========
        "santos-dumont-nordestina": {
            id: "santos-dumont-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Santos Dumont, 500 - Santos Dumont, Aracaju",
            horario: "11h às 21h",
            telefone: "(79) 4333-2222",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-sd", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-sd", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-sd", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-sd", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-sd", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. AMÉRICA - PEIXARIA ==========
        "america-peixaria": {
            id: "america-peixaria",
            nome: "🐟 Peixaria América",
            endereco: "Rua América, 500 - América, Aracaju",
            horario: "11h às 21h",
            telefone: "(79) 4444-3333",
            descricao: "Peixes frescos da costa.",
            tipo: ["peixaria", "sergipana", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-am", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-am", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-am", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caranguejo-am", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-am", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. SÃO CONRADO - RESTAURANTE POPULAR ==========
        "sao-conrado-popular": {
            id: "sao-conrado-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua São Conrado, 500 - São Conrado, Aracaju",
            horario: "11h às 14h",
            telefone: "(79) 4555-4444",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "prato-feito-sc", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-sc", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-sc", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-sc", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-sc", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 15. GETÚLIO VARGAS - COMIDA ITALIANA ==========
        "getulio-vargas-italiana": {
            id: "getulio-vargas-italiana",
            nome: "🍝 Cantina Getúlio Vargas",
            endereco: "Rua Getúlio Vargas, 300 - Getúlio Vargas, Aracaju",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(79) 4666-5555",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medium: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-gv", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-gv", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-gv", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-gv", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-gv", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 16. CIRURGIA - LANCHONETE ==========
        "cirurgia-lanchonete": {
            id: "cirurgia-lanchonete",
            nome: "🍔 Lanchonete Cirurgia",
            endereco: "Rua Cirurgia, 500 - Cirurgia, Aracaju",
            horario: "08h às 22h",
            telefone: "(79) 4777-6666",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-ci", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-ci", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-ci", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-ci", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-ci", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. ARACAJU SHOPPING ==========
        "aracaju-shopping": {
            id: "aracaju-shopping",
            nome: "🛍️ Aracaju Shopping - Food Court",
            endereco: "Av. Ministro Geraldo Barreto Sobral, 1000 - Suíssa, Aracaju",
            horario: "10h às 22h",
            telefone: "(79) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-as", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-as", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-as", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-as", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-as", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. SHOPPING JARDINS ==========
        "shopping-jardins": {
            id: "shopping-jardins",
            nome: "🛍️ Shopping Jardins - Food Court",
            endereco: "Av. Desembargador Maynard, 1000 - Jardins, Aracaju",
            horario: "10h às 22h",
            telefone: "(79) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-sj", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-sj", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-sj", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-sj", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-sj", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-aracaju": {
            id: "aeroporto-aracaju",
            nome: "✈️ Aeroporto de Aracaju - Praça de Alimentação",
            endereco: "Av. Santos Dumont, s/n - Aeroporto, Aracaju",
            horario: "04h às 23h",
            telefone: "(79) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-se", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-se", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-se", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-se", nome: "☕ Café Sergipano", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-se", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. OCEANÁRIO - QUIOSQUE ==========
        "oceanario-quiosque": {
            id: "oceanario-quiosque",
            nome: "🏞️ Oceanário - Quiosque",
            endereco: "Oceanário de Aracaju - Orla de Atalaia, Aracaju",
            horario: "09h às 20h",
            telefone: "(79) 5111-0000",
            descricao: "Quiosque no Oceanário.",
            tipo: ["petiscos", "turístico", "casual", "vista"],
            preco_medium: 30,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "pastel-oce", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "tapioca-oce", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-oce", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "camarao-oce", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "cafe-oce", nome: "☕ Café", descricao: "Café.", preco: 7, recuperacao: { sede: 8, energia: 10, felicidade: 7 } }
            ]
        }
    },

    // ==================== NOSSA SENHORA DO SOCORRO - 10 RESTAURANTES ====================
    "Nossa Senhora do Socorro": {
        // ========== 1. CENTRO - FRUTOS DO MAR ==========
        "socorro-frutos": {
            id: "socorro-frutos",
            nome: "🐟 Restaurato? Socorro",
            endereco: "Av. José Conrado de Araújo, 500 - Centro, Nossa Senhora do Socorro",
            horario: "11h às 22h",
            telefone: "(79) 3222-1111",
            descricao: "Frutos do mar e peixes frescos da região.",
            tipo: ["frutos-do-mar", "sergipana", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "peixe-ns", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "camarao-ns", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 52, recuperacao: { fome: 64, felicidade: 25, energia: 17 } },
                { id: "moqueca-ns", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "caranguejo-ns", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-ns", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "socorro-peixaria": {
            id: "socorro-peixaria",
            nome: "🐟 Peixaria Socorro",
            endereco: "Rua 7 de Setembro, 300 - Centro, Nossa Senhora do Socorro",
            horario: "11h às 21h",
            telefone: "(79) 3333-2222",
            descricao: "Peixes frescos da costa.",
            tipo: ["peixaria", "sergipana", "familiar"],
            preco_medium: 45,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tambaqui-ns", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "pirarucu-ns", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "camarao-ns-p", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "peixe-ns-p", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 44, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-ns-p", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "socorro-boteco": {
            id: "socorro-boteco",
            nome: "🍺 Boteco Socorro",
            endereco: "Rua 15 de Novembro, 200 - Centro, Nossa Senhora do Socorro",
            horario: "17h às 02h",
            telefone: "(79) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-ns", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ns", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ns", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ns", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ns", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "socorro-pizzaria": {
            id: "socorro-pizzaria",
            nome: "🍕 Pizzaria Socorro",
            endereco: "Av. Presidente Médici, 300 - Centro, Nossa Senhora do Socorro",
            horario: "18h às 23h30",
            telefone: "(79) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-ns", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ns", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ns", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ns", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ns-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "socorro-cafe": {
            id: "socorro-cafe",
            nome: "☕ Café Socorro",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Nossa Senhora do Socorro",
            horario: "08h às 20h",
            telefone: "(79) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ns", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ns", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ns", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ns", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ns-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "socorro-hamburguer": {
            id: "socorro-hamburguer",
            nome: "🍔 Hamburgueria Socorro",
            endereco: "Rua 10, 300 - Centro, Nossa Senhora do Socorro",
            horario: "18h às 00h",
            telefone: "(79) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-ns", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-ns", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-ns-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-ns", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-ns", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "socorro-tapiocaria": {
            id: "socorro-tapiocaria",
            nome: "🥞 Tapiocaria Socorro",
            endereco: "Rua 15, 200 - Centro, Nossa Senhora do Socorro",
            horario: "08h às 21h",
            telefone: "(79) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-ns", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ns", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ns", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ns", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ns-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "socorro-caseira": {
            id: "socorro-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Nossa Senhora do Socorro",
            horario: "11h às 15h",
            telefone: "(79) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-ns", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ns", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ns", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ns", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ns-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-socorro": {
            id: "shopping-socorro",
            nome: "🛍️ Shopping Socorro - Food Court",
            endereco: "Av. José Conrado de Araújo, 1500 - Centro, Nossa Senhora do Socorro",
            horario: "10h às 22h",
            telefone: "(79) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ns", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ns", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ns", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ns", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ns-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-socorro": {
            id: "rodoviaria-socorro",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-235, km 100 - Centro, Nossa Senhora do Socorro",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ns", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ns-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ns", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ns", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ns-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== LAGARTO - 10 RESTAURANTES ====================
    "Lagarto": {
        // ========== 1. CENTRO - CULINÁRIA SERTANEJA ==========
        "lagarto-sertaneja": {
            id: "lagarto-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Av. Pedro Homem, 500 - Centro, Lagarto",
            horario: "11h às 22h",
            telefone: "(79) 3222-1111",
            descricao: "Culinária sertaneja do interior sergipano. Carne de sol, baião de dois e capote.",
            tipo: ["sergipana", "sertaneja", "nordestina", "tradicional", "familiar"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "carne-sol-la", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 45, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "baiao-la", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 38, recuperacao: { fome: 64, felicidade: 22, energia: 15 } },
                { id: "panelada-la", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "capote-la", nome: "🍗 Capote", descricao: "Capote assado.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 17 } },
                { id: "suco-la", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "lagarto-churrascaria": {
            id: "lagarto-churrascaria",
            nome: "🥩 Churrascaria Lagarto",
            endereco: "Av. Senador Eduardo Gomes, 500 - Centro, Lagarto",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(79) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 60,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-la", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 65, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-la", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 52, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "costela-la", nome: "🍖 Costela", descricao: "Costela assada.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-la", nome: "🥗 Buffet", descricao: "Buffet.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-la-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "lagarto-boteco": {
            id: "lagarto-boteco",
            nome: "🍺 Boteco Lagarto",
            endereco: "Rua 7 de Setembro, 200 - Centro, Lagarto",
            horario: "17h às 02h",
            telefone: "(79) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-la", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-la", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-la", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-la", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-la", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "lagarto-pizzaria": {
            id: "lagarto-pizzaria",
            nome: "🍕 Pizzaria Lagarto",
            endereco: "Av. Pedro Homem, 300 - Centro, Lagarto",
            horario: "18h às 23h30",
            telefone: "(79) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-la", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-la", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-la", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-la", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-la-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "lagarto-cafe": {
            id: "lagarto-cafe",
            nome: "☕ Café Lagarto",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Lagarto",
            horario: "08h às 20h",
            telefone: "(79) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-la", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-la", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-la", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-la", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-la-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "lagarto-hamburguer": {
            id: "lagarto-hamburguer",
            nome: "🍔 Hamburgueria Lagarto",
            endereco: "Rua 10, 300 - Centro, Lagarto",
            horario: "18h às 00h",
            telefone: "(79) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-la", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-la", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-la-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-la", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-la", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "lagarto-tapiocaria": {
            id: "lagarto-tapiocaria",
            nome: "🥞 Tapiocaria Lagarto",
            endereco: "Rua 15, 200 - Centro, Lagarto",
            horario: "08h às 21h",
            telefone: "(79) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-la", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-la", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-la", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-la", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-la-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "lagarto-caseira": {
            id: "lagarto-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Lagarto",
            horario: "11h às 15h",
            telefone: "(79) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-la", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-la", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-la", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-la", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-la-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-lagarto": {
            id: "shopping-lagarto",
            nome: "🛍️ Shopping Lagarto - Food Court",
            endereco: "Av. Pedro Homem, 1500 - Centro, Lagarto",
            horario: "10h às 22h",
            telefone: "(79) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-la", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-la", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-la", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-la", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-la-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-lagarto": {
            id: "rodoviaria-lagarto",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-235, km 200 - Centro, Lagarto",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-la", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-la-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-la", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-la", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-la-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesSE;