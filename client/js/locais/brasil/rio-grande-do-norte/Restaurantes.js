const restaurantesRN = {
    // ==================== NATAL (CAPITAL) - 20 RESTAURANTES ====================
    "Natal": {
        // ========== 1. PONTA NEGRA - FRUTOS DO MAR ==========
        "ponta-negra-frutos": {
            id: "ponta-negra-frutos",
            nome: "🐟 Restaurante Ponta Negra",
            endereco: "Av. Erivan França, 1000 - Ponta Negra, Natal",
            horario: "11h às 23h",
            telefone: "(84) 3222-1111",
            descricao: "Frutos do mar com vista para a praia de Ponta Negra. Especialidade em lagosta, camarão e peixes. Ambiente familiar e romântico.",
            tipo: ["frutos-do-mar", "potiguar", "praia", "vista", "turístico"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "lagosta-pn", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 125, recuperacao: { fome: 85, felicidade: 42, energia: 28 } },
                { id: "camarao-pn", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "moqueca-pn", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 78, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-pn", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-pn", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. PONTA NEGRA - QUIOSQUE ==========
        "ponta-negra-quiosque": {
            id: "ponta-negra-quiosque",
            nome: "🏖️ Quiosque Ponta Negra",
            endereco: "Orla de Ponta Negra - Praia, Natal",
            horario: "08h às 22h",
            telefone: "(84) 3333-2222",
            descricao: "Quiosque na famosa praia de Ponta Negra. Água de coco, petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 38,
            estrelas: 4.5,
            avaliacoes: 2870,
            cardapio: [
                { id: "agua-coco-pnq", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-pnq", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-pnq", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 32, recuperacao: { fome: 35, felicidade: 15, energia: 8 } },
                { id: "pastel-pnq", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-pnq", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PRAIA DOS ARTISTAS - PEIXARIA ==========
        "praia-artistas-peixaria": {
            id: "praia-artistas-peixaria",
            nome: "🐟 Peixaria Praia dos Artistas",
            endereco: "Av. Hermes da Fonseca, 1000 - Praia dos Artistas, Natal",
            horario: "11h às 22h",
            telefone: "(84) 3444-3333",
            descricao: "Peixes frescos da costa potiguar. Especialidade em peixes e frutos do mar.",
            tipo: ["peixaria", "frutos-do-mar", "praia", "familiar"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "peixe-pa", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 52, recuperacao: { fome: 65, energia: 22, felicidade: 17 } },
                { id: "camarao-pa", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 58, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "moqueca-pa", nome: "🍲 Moqueca", descricao: "Moqueca potiguar.", preco: 65, recuperacao: { fome: 72, energia: 26, felicidade: 18 } },
                { id: "caranguejo-pa", nome: "🦀 Caranguejo", descricao: "Caranguejo cozido.", preco: 48, recuperacao: { fome: 60, felicidade: 24, energia: 16 } },
                { id: "suco-pa", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - CULINÁRIA POTIGUAR ==========
        "centro-potiguar": {
            id: "centro-potiguar",
            nome: "🍚 Culinária Potiguar",
            endereco: "Rua Chile, 200 - Centro, Natal",
            horario: "11h às 22h",
            telefone: "(84) 3555-4444",
            descricao: "Restaurante tradicional com culinária potiguar autêntica. Especialidades como carne de sol, baião de dois e feijão verde.",
            tipo: ["potiguar", "nordestina", "tradicional", "regional", "familiar"],
            preco_medio: 48,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "carne-sol-rn", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "baiao-dois-rn", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "feijao-verde-rn", nome: "🍲 Feijão Verde", descricao: "Feijão verde com carne de sol.", preco: 38, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "tapioca-rn", nome: "🥞 Tapioca de Carne", descricao: "Tapioca recheada com carne seca.", preco: 18, recuperacao: { fome: 25, felicidade: 15, energia: 7 } },
                { id: "caipirinha-rn", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 5. VIA COSTEIRA - CHURRASCARIA ==========
        "via-costeira-churrascaria": {
            id: "via-costeira-churrascaria",
            nome: "🥩 Churrascaria Via Costeira",
            endereco: "Av. Senador Dinarte Mariz, 1000 - Via Costeira, Natal",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(84) 3666-5555",
            descricao: "Churrascaria com rodízio de carnes e vista para o mar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "vista", "familiar"],
            preco_medio: 80,
            estrelas: 4.6,
            avaliacoes: 1560,
            cardapio: [
                { id: "rodizio-vc", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-vc", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-vc", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-vc", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-vc", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. AREIA PRETA - BOTECO ==========
        "areia-preta-boteco": {
            id: "areia-preta-boteco",
            nome: "🍺 Boteco Areia Preta",
            endereco: "Rua Areia Preta, 300 - Areia Preta, Natal",
            horario: "17h às 03h",
            telefone: "(84) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-ap", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-ap", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-ap", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-ap", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-ap", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. PETRÓPOLIS - PIZZARIA ==========
        "petropolis-pizzaria": {
            id: "petropolis-pizzaria",
            nome: "🍕 Pizzaria Petrópolis",
            endereco: "Rua Petrópolis, 500 - Petrópolis, Natal",
            horario: "18h às 23h30",
            telefone: "(84) 3888-7777",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-pe", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-pe", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-pe", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-pe", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-pe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. CANDELÁRIA - HAMBURGUERIA ==========
        "candelaria-hamburguer": {
            id: "candelaria-hamburguer",
            nome: "🍔 Hamburgueria Candelária",
            endereco: "Rua Candelária, 300 - Candelária, Natal",
            horario: "18h às 00h",
            telefone: "(84) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-ca", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 40, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-ca", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 42, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-ca", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-ca", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-ca", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 9. LAGOA NOVA - CAFÉ REGIONAL ==========
        "lagoa-nova-cafe": {
            id: "lagoa-nova-cafe",
            nome: "☕ Café Lagoa Nova",
            endereco: "Av. Salgado Filho, 1000 - Lagoa Nova, Natal",
            horario: "08h às 20h",
            telefone: "(84) 4000-9999",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-ln", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ln", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ln", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ln", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ln", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. NEÓPOLIS - TAPIOCARIA ==========
        "neopolis-tapiocaria": {
            id: "neopolis-tapiocaria",
            nome: "🥞 Tapiocaria Neópolis",
            endereco: "Rua Neópolis, 500 - Neópolis, Natal",
            horario: "08h às 21h",
            telefone: "(84) 4111-0000",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-ne", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ne", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ne", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ne", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-ne", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. CAPIM MACIO - COMIDA CASEIRA ==========
        "capim-macio-caseira": {
            id: "capim-macio-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Capim Macio, 500 - Capim Macio, Natal",
            horario: "11h às 15h",
            telefone: "(84) 4222-1111",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-cm", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-cm", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-cm", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-cm", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-cm", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 12. ALECRIM - COMIDA NORDESTINA ==========
        "alecrim-nordestina": {
            id: "alecrim-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Alecrim, 500 - Alecrim, Natal",
            horario: "11h às 21h",
            telefone: "(84) 4333-2222",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-al", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-al", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-al", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-al", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-al", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. POTILÂNDIA - PEIXARIA ==========
        "potilandia-peixaria": {
            id: "potilandia-peixaria",
            nome: "🐟 Peixaria Potilândia",
            endereco: "Rua Potilândia, 500 - Potilândia, Natal",
            horario: "11h às 21h",
            telefone: "(84) 4444-3333",
            descricao: "Peixes frescos da costa.",
            tipo: ["peixaria", "potiguar", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-po", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-po", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-po", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caranguejo-po", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-po", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. CIDADE ALTA - RESTAURANTE POPULAR ==========
        "cidade-alta-popular": {
            id: "cidade-alta-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Cidade Alta, 500 - Cidade Alta, Natal",
            horario: "11h às 14h",
            telefone: "(84) 4555-4444",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1240,
            cardapio: [
                { id: "prato-feito-ca", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ca", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ca", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ca", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ca", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 15. RIBEIRA - COMIDA ITALIANA ==========
        "ribeira-italiana": {
            id: "ribeira-italiana",
            nome: "🍝 Cantina Ribeira",
            endereco: "Rua Ribeira, 300 - Ribeira, Natal",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(84) 4666-5555",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-ri", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-ri", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-ri", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-ri", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-ri", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 16. REDINHA - LANCHONETE ==========
        "redinha-lanchonete": {
            id: "redinha-lanchonete",
            nome: "🍔 Lanchonete Redinha",
            endereco: "Rua Redinha, 500 - Redinha, Natal",
            horario: "08h às 22h",
            telefone: "(84) 4777-6666",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-re", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-re", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-re", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-re", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-re", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. MIDWAY MALL ==========
        "midway-mall": {
            id: "midway-mall",
            nome: "🛍️ Midway Mall - Food Court",
            endereco: "Av. Bernardo Vieira, 1000 - Lagoa Nova, Natal",
            horario: "10h às 22h",
            telefone: "(84) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2780,
            cardapio: [
                { id: "mc-mm", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-mm", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-mm", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-mm", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-mm", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. NATAL SHOPPING ==========
        "natal-shopping": {
            id: "natal-shopping",
            nome: "🛍️ Natal Shopping - Food Court",
            endereco: "Av. Senador Salgado Filho, 2000 - Candelária, Natal",
            horario: "10h às 22h",
            telefone: "(84) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1890,
            cardapio: [
                { id: "mc-ns", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ns", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ns", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ns", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ns", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-natal": {
            id: "aeroporto-natal",
            nome: "✈️ Aeroporto de Natal - Praça de Alimentação",
            endereco: "Av. Ruy Pereira dos Santos, s/n - Aeroporto, São Gonçalo do Amarante (Região Metropolitana)",
            horario: "04h às 23h",
            telefone: "(84) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-aero-rn", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-rn", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-rn", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-rn", nome: "☕ Café Potiguar", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-rn", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. PRAIA DO MEIO - QUIOSQUE ==========
        "praia-meio-quiosque": {
            id: "praia-meio-quiosque",
            nome: "🏖️ Quiosque Praia do Meio",
            endereco: "Orla da Praia do Meio - Areia Preta, Natal",
            horario: "09h às 20h",
            telefone: "(84) 5111-0000",
            descricao: "Quiosque na Praia do Meio.",
            tipo: ["petiscos", "praia", "casual", "turístico"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "pastel-pm", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "tapioca-pm", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-pm", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "camarao-pm", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "cafe-pm", nome: "☕ Café", descricao: "Café.", preco: 7, recuperacao: { sede: 8, energia: 10, felicidade: 7 } }
            ]
        }
    },

    // ==================== MOSSORÓ - 10 RESTAURANTES ====================
    "Mossoró": {
        // ========== 1. CENTRO - CULINÁRIA SERTANEJA ==========
        "mossoro-sertaneja": {
            id: "mossoro-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Rua Augusto Severo, 200 - Centro, Mossoró",
            horario: "11h às 22h",
            telefone: "(84) 3222-1111",
            descricao: "Culinária sertaneja do oeste potiguar. Especialidade em carne de sol, baião de dois e capote.",
            tipo: ["potiguar", "sertaneja", "nordestina", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "carne-sol-mo", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "baiao-mo", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "panelada-mo", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 14 } },
                { id: "capote-mo", nome: "🍗 Capote", descricao: "Capote assado.", preco: 52, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "suco-mo", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "mossoro-churrascaria": {
            id: "mossoro-churrascaria",
            nome: "🥩 Churrascaria Mossoró",
            endereco: "Av. Rio Branco, 500 - Centro, Mossoró",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(84) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-mo", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-mo", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-mo", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-mo", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-mo-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "mossoro-boteco": {
            id: "mossoro-boteco",
            nome: "🍺 Boteco Mossoró",
            endereco: "Rua 7 de Setembro, 200 - Centro, Mossoró",
            horario: "17h às 02h",
            telefone: "(84) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "calabresa-mo", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-mo", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-mo", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-mo", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-mo", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "mossoro-pizzaria": {
            id: "mossoro-pizzaria",
            nome: "🍕 Pizzaria Mossoró",
            endereco: "Av. Presidente Dutra, 300 - Centro, Mossoró",
            horario: "18h às 23h30",
            telefone: "(84) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-mo", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-mo", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-mo", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-mo", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-mo-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "mossoro-cafe": {
            id: "mossoro-cafe",
            nome: "☕ Café Mossoró",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Mossoró",
            horario: "08h às 20h",
            telefone: "(84) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-mo", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-mo", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-mo", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-mo", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-mo-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "mossoro-hamburguer": {
            id: "mossoro-hamburguer",
            nome: "🍔 Hamburgueria Mossoró",
            endereco: "Rua 10, 300 - Centro, Mossoró",
            horario: "18h às 00h",
            telefone: "(84) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-mo", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-mo", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-mo-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-mo", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-mo", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "mossoro-tapiocaria": {
            id: "mossoro-tapiocaria",
            nome: "🥞 Tapiocaria Mossoró",
            endereco: "Rua 15, 200 - Centro, Mossoró",
            horario: "08h às 21h",
            telefone: "(84) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-mo", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-mo", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-mo", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-mo", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-mo-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "mossoro-caseira": {
            id: "mossoro-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Mossoró",
            horario: "11h às 15h",
            telefone: "(84) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-mo", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-mo", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-mo", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-mo", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-mo-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-mossoro": {
            id: "shopping-mossoro",
            nome: "🛍️ Shopping Mossoró - Food Court",
            endereco: "Av. Rio Branco, 1500 - Centro, Mossoró",
            horario: "10h às 22h",
            telefone: "(84) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-mo", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-mo", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-mo", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-mo", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-mo-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-mossoro": {
            id: "rodoviaria-mossoro",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-304, km 100 - Centro, Mossoró",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-mo", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-mo-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-mo", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-mo", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-mo-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== PARNAMIRIM - 10 RESTAURANTES ====================
    "Parnamirim": {
        // ========== 1. CENTRO - FRUTOS DO MAR ==========
        "parnamirim-frutos": {
            id: "parnamirim-frutos",
            nome: "🐟 Restaurante Parnamirim",
            endereco: "Av. Mário Lira, 500 - Centro, Parnamirim",
            horario: "11h às 22h",
            telefone: "(84) 3222-1111",
            descricao: "Frutos do mar e peixes frescos da região.",
            tipo: ["frutos-do-mar", "potiguar", "regional", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "peixe-pm", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "camarao-pm", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 52, recuperacao: { fome: 64, felicidade: 25, energia: 17 } },
                { id: "moqueca-pm", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "caranguejo-pm", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-pm", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "parnamirim-peixaria": {
            id: "parnamirim-peixaria",
            nome: "🐟 Peixaria Parnamirim",
            endereco: "Rua 7 de Setembro, 300 - Centro, Parnamirim",
            horario: "11h às 21h",
            telefone: "(84) 3333-2222",
            descricao: "Peixes frescos da costa.",
            tipo: ["peixaria", "potiguar", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tambaqui-pm", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "pirarucu-pm", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "camarao-pm-p", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "peixe-pm-p", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 44, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-pm-p", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "parnamirim-boteco": {
            id: "parnamirim-boteco",
            nome: "🍺 Boteco Parnamirim",
            endereco: "Rua 15 de Novembro, 200 - Centro, Parnamirim",
            horario: "17h às 02h",
            telefone: "(84) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-pm", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-pm", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-pm", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-pm", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-pm", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "parnamirim-pizzaria": {
            id: "parnamirim-pizzaria",
            nome: "🍕 Pizzaria Parnamirim",
            endereco: "Av. Maria Lúcia, 300 - Centro, Parnamirim",
            horario: "18h às 23h30",
            telefone: "(84) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-pm", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pm", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pm", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-pm", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-pm-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "parnamirim-cafe": {
            id: "parnamirim-cafe",
            nome: "☕ Café Parnamirim",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Parnamirim",
            horario: "08h às 20h",
            telefone: "(84) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-pm", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pm", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-pm", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-pm", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-pm-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "parnamirim-hamburguer": {
            id: "parnamirim-hamburguer",
            nome: "🍔 Hamburgueria Parnamirim",
            endereco: "Rua 10, 300 - Centro, Parnamirim",
            horario: "18h às 00h",
            telefone: "(84) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-pm", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-pm", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-pm-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-pm", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-pm", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "parnamirim-tapiocaria": {
            id: "parnamirim-tapiocaria",
            nome: "🥞 Tapiocaria Parnamirim",
            endereco: "Rua 15, 200 - Centro, Parnamirim",
            horario: "08h às 21h",
            telefone: "(84) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-pm", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-pm", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-pm", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-pm", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-pm-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "parnamirim-caseira": {
            id: "parnamirim-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Parnamirim",
            horario: "11h às 15h",
            telefone: "(84) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-pm", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-pm", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-pm", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-pm-case", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-pm-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-parnamirim": {
            id: "shopping-parnamirim",
            nome: "🛍️ Shopping Parnamirim - Food Court",
            endereco: "Av. Mário Lira, 1500 - Centro, Parnamirim",
            horario: "10h às 22h",
            telefone: "(84) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-pm", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pm", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pm", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pm", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-pm-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-parnamirim": {
            id: "rodoviaria-parnamirim",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-101, km 120 - Centro, Parnamirim",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-pm", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-pm-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pm", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pm", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-pm-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesRN;