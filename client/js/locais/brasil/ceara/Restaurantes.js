const restaurantesCE = {
    // ==================== FORTALEZA (CAPITAL) - 20 RESTAURANTES ====================
    "Fortaleza": {
        // ========== 1. PRAIA DE IRACEMA - FRUTOS DO MAR ==========
        "iracema-frutos": {
            id: "iracema-frutos",
            nome: "🐟 Restaurante Iracema",
            endereco: "Av. Beira Mar, 1000 - Praia de Iracema, Fortaleza",
            horario: "11h às 23h",
            telefone: "(85) 3222-1111",
            descricao: "Frutos do mar frescos com vista para o mar. Especialidade em peixes, camarões, lagosta e caranguejo. Ambiente familiar e romântico.",
            tipo: ["frutos-do-mar", "cearense", "praia", "familiar", "vista"],
            preco_medio: 75,
            estrelas: 4.7,
            avaliacoes: 3420,
            cardapio: [
                { id: "lagosta-iracema", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca grelhada com manteiga de ervas. Acompanha arroz, batatas e salada.", preco: 98, recuperacao: { fome: 85, felicidade: 38, energia: 24 } },
                { id: "camarao-iracema", nome: "🍤 Camarão ao Alho", descricao: "Camarões grandes salteados no alho e azeite com coentro.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "peixe-iracema", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe fresco grelhado com legumes.", preco: 52, recuperacao: { fome: 60, felicidade: 24, energia: 16 } },
                { id: "caranguejo-iracema", nome: "🦀 Caranguejo", descricao: "Caranguejo cozido com temperos. Serve 2 pessoas.", preco: 58, recuperacao: { fome: 70, felicidade: 30, energia: 20 } },
                { id: "caipirinha-iracema", nome: "🍹 Caipirinha Cearense", descricao: "Caipirinha com cachaça e limão.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. PRAIA DO FUTURO - BARRACA DE PRAIA ==========
        "futuro-barraca": {
            id: "futuro-barraca",
            nome: "🏖️ Barraca do Futuro",
            endereco: "Praia do Futuro, 500 - Praia do Futuro, Fortaleza",
            horário: "09h às 20h",
            telefone: "(85) 3333-2222",
            descricao: "Tradicional barraca de praia. Peixes, camarões, petiscos e água de coco. Música ao vivo aos fins de semana.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "musica-ao-vivo"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 5670,
            cardapio: [
                { id: "agua-coco-futuro", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 10, energia: 5 } },
                { id: "camarao-futuro", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos com molho de pimenta.", preco: 45, recuperacao: { fome: 48, felicidade: 20, energia: 12 } },
                { id: "isca-peixe-futuro", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 35, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "pastel-futuro", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante recheado com camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 4 } },
                { id: "suco-futuro", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 10, recuperacao: { sede: 20, felicidade: 10, energia: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - CULINÁRIA CEARENSE ==========
        "centro-cearense": {
            id: "centro-cearense",
            nome: "🍲 Culinária Cearense",
            endereco: "Rua Major Facundo, 200 - Centro, Fortaleza",
            horario: "11h às 22h",
            telefone: "(85) 3444-3333",
            descricao: "Restaurante tradicional com culinária cearense autêntica. Baião de dois, carne de sol, panelada e buchada.",
            tipo: ["cearense", "nordestina", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 2340,
            cardapio: [
                { id: "baiao-centro", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho e nata.", preco: 42, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "carne-sol-centro", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 72, felicidade: 26, energia: 16 } },
                { id: "panelada-centro", nome: "🍲 Panelada", descricao: "Dobradinha com costela, bacon e calabresa.", preco: 38, recuperacao: { fome: 65, felicidade: 20, energia: 12 } },
                { id: "buchada-centro", nome: "🍖 Buchada", descricao: "Buchada de bode tradicional.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "suco-centro", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 4. CENTRO - BOTECO ==========
        "centro-boteco": {
            id: "centro-boteco",
            nome: "🍺 Boteco do Centro",
            endereco: "Rua Floriano Peixoto, 300 - Centro, Fortaleza",
            horario: "17h às 03h",
            telefone: "(85) 3555-4444",
            descricao: "Boteco tradicional no centro. Petiscos, cerveja gelada e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 1890,
            cardapio: [
                { id: "calabresa-centro", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 8 } },
                { id: "torresmo-centro", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-centro", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 15, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "batata-centro", nome: "🍟 Batata Frita", descricao: "Batata frita crocante.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "chopp-centro", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },

        // ========== 5. MEIRELES - COMIDA INTERNACIONAL ==========
        "meireles-internacional": {
            id: "meireles-internacional",
            nome: "🍽️ Restaurante Meireles",
            endereco: "Av. Desembargador Moreira, 500 - Meireles, Fortaleza",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(85) 3666-5555",
            descricao: "Cozinha internacional contemporânea. Chef premiado. Ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico"],
            preco_medio: 120,
            estrelas: 4.8,
            avaliacoes: 980,
            cardapio: [
                { id: "file-meireles", nome: "🥩 Filé ao Molho", descricao: "Filé mignon com molho de vinho tinto e cogumelos.", preco: 98, recuperacao: { fome: 75, felicidade: 36, energia: 24 } },
                { id: "lagosta-meireles", nome: "🦞 Lagosta Thermidor", descricao: "Lagosta grelhada com molho cremoso.", preco: 145, recuperacao: { fome: 85, felicidade: 42, energia: 26 } },
                { id: "salmao-meireles", nome: "🐟 Salmão", descricao: "Salmão grelhado com molho de maracujá.", preco: 85, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "risoto-meireles", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "espumante-meireles", nome: "🥂 Espumante", descricao: "Espumante brut.", preco: 38, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 6. ALDEOTA - CHURRASCARIA ==========
        "aldeota-churrascaria": {
            id: "aldeota-churrascaria",
            nome: "🥩 Churrascaria Aldeota",
            endereco: "Av. Dom Luís, 1000 - Aldeota, Fortaleza",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(85) 3777-6666",
            descricao: "Churrascaria com rodízio de carnes nobres. Buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "premium", "executivos"],
            preco_medio: 85,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "rodizio-aldeota", nome: "🥩 Rodízio", descricao: "Mais de 15 cortes.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-aldeota", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 62, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-aldeota", nome: "🍖 Costela", descricao: "Costela assada.", preco: 58, recuperacao: { fome: 75, energia: 28, felicidade: 22 } },
                { id: "buffet-aldeota", nome: "🥗 Buffet", descricao: "Saladas, sushi, massas.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-aldeota", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 7. VARJOTA - COMIDA JAPONESA ==========
        "varjota-japonesa": {
            id: "varjota-japonesa",
            nome: "🍣 Sushi Varjota",
            endereco: "Rua Osório de Paiva, 200 - Varjota, Fortaleza",
            horario: "18h às 23h30",
            telefone: "(85) 3888-7777",
            descricao: "Restaurante japonês. Sushis, sashimis, temakis. Rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-varjota", nome: "🍣 Rodízio", descricao: "25 peças + temaki.", preco: 79, recuperacao: { fome: 85, energia: 26, felicidade: 32 } },
                { id: "combinado-varjota", nome: "🍱 Combinado", descricao: "20 peças.", preco: 58, recuperacao: { fome: 62, energia: 18, felicidade: 24 } },
                { id: "temaki-varjota", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 28, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "hot-varjota", nome: "🌯 Hot Roll", descricao: "Hot rolls.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-varjota", nome: "🍶 Saquê", descricao: "Saquê.", preco: 24, recuperacao: { sede: 8, felicidade: 16, energia: -6 } }
            ]
        },
        
        // ========== 8. MUCURIPE - PEIXARIA ==========
        "mucuripe-peixaria": {
            id: "mucuripe-peixaria",
            nome: "🐟 Peixaria Mucuripe",
            endereco: "Av. Almirante Barroso, 1000 - Mucuripe, Fortaleza",
            horario: "11h às 22h",
            telefone: "(85) 3999-8888",
            descricao: "Peixaria tradicional. Peixes frescos da região.",
            tipo: ["peixaria", "frutos-do-mar", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1560,
            cardapio: [
                { id: "peixe-mucuripe", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "camarao-mucuripe", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 55, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "moqueca-mucuripe", nome: "🍲 Moqueca", descricao: "Moqueca cearense.", preco: 62, recuperacao: { fome: 70, energia: 24, felicidade: 18 } },
                { id: "caranguejo-mucuripe", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "suco-mucuripe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. BEIRA MAR - QUIOSQUE ==========
        "beira-mar-quiosque": {
            id: "beira-mar-quiosque",
            nome: "🏖️ Quiosque Beira Mar",
            endereco: "Av. Beira Mar - Orla, Fortaleza",
            horario: "08h às 22h",
            telefone: "(85) 4000-9999",
            descricao: "Quiosque na famosa Beira Mar. Petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 3450,
            cardapio: [
                { id: "agua-coco-bm", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-bm", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-bm", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-bm", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 4 } },
                { id: "suco-bm", nome: "🥤 Suco", descricao: "Suco de maracujá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 10. COCÓ - PIZZARIA ==========
        "coco-pizzaria": {
            id: "coco-pizzaria",
            nome: "🍕 Pizzaria Cocó",
            endereco: "Av. Engenheiro Santana Júnior, 1000 - Cocó, Fortaleza",
            horario: "18h às 00h",
            telefone: "(85) 4111-0000",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-margherita-coco", nome: "🍕 Pizza Margherita", descricao: "Margherita.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "pizza-calabresa-coco", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-coco", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 58, recuperacao: { fome: 62, energia: 16, felicidade: 14 } },
                { id: "calzone-coco", nome: "🥟 Calzone", descricao: "Calzone.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-coco", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 11. PAPICU - HAMBURGUERIA ==========
        "papicu-hamburguer": {
            id: "papicu-hamburguer",
            nome: "🍔 Hamburgueria Papicu",
            endereco: "Rua Papicu, 200 - Papicu, Fortaleza",
            horario: "18h às 00h",
            telefone: "(85) 4222-1111",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-papicu", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-papicu", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-papicu", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-papicu", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-papicu", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },

        // ========== 12. MONTESE - COMIDA NORDESTINA ==========
        "montese-nordestina": {
            id: "montese-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Germano Franck, 500 - Montese, Fortaleza",
            horario: "11h às 21h",
            telefone: "(85) 4333-2222",
            descricao: "Culinária nordestina autêntica. Baião, carne de sol, panelada.",
            tipo: ["nordestina", "regional", "familiar", "tradicional"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "baiao-montese", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-montese", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 72, felicidade: 24, energia: 16 } },
                { id: "panelada-montese", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 65, energia: 20, felicidade: 12 } },
                { id: "tapioca-montese", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "suco-montese", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 13. PARANGABA - COMIDA CASEIRA ==========
        "parangaba-caseira": {
            id: "parangaba-caseira",
            nome: "🇧🇷 Comida Caseira Parangaba",
            endereco: "Av. Parangaba, 1000 - Parangaba, Fortaleza",
            horario: "11h às 15h",
            telefone: "(85) 4444-3333",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-parangaba", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-parangaba", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-parangaba", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-parangaba", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-parangaba", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },

        // ========== 14. BENFICA - COMIDA VEGETARIANA ==========
        "benfica-vegetariana": {
            id: "benfica-vegetariana",
            nome: "🌱 Vegetariano Benfica",
            endereco: "Av. 13 de Maio, 500 - Benfica, Fortaleza",
            horario: "11h às 21h",
            telefone: "(85) 4555-4444",
            descricao: "Restaurante vegetariano. Buffet por quilo.",
            tipo: ["vegetariano", "vegano", "saudavel", "buffet"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 780,
            cardapio: [
                { id: "buffet-benfica", nome: "🥗 Buffet", descricao: "Saladas, legumes, grãos.", preco: 38, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "hamburguer-benfica", nome: "🍔 Hambúrguer", descricao: "Hambúrguer vegano.", preco: 26, recuperacao: { fome: 48, energia: 18, felicidade: 14 } },
                { id: "lasanha-benfica", nome: "🍝 Lasanha", descricao: "Lasanha vegana.", preco: 30, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "sopa-benfica", nome: "🥣 Sopa", descricao: "Sopa de legumes.", preco: 16, recuperacao: { fome: 35, energia: 14, felicidade: 10 } },
                { id: "suco-benfica", nome: "🥤 Suco Verde", descricao: "Couve, limão, gengibre.", preco: 10, recuperacao: { sede: 20, energia: 12, felicidade: 8 } }
            ]
        },

        // ========== 15. JACARECANGA - TAPIOCARIA ==========
        "jacarecanga-tapiocaria": {
            id: "jacarecanga-tapiocaria",
            nome: "🥞 Tapiocaria Jacarecanga",
            endereco: "Rua Jacarecanga, 200 - Jacarecanga, Fortaleza",
            horario: "08h às 21h",
            telefone: "(85) 4666-5555",
            descricao: "Tapiocaria com diversos sabores. Tapiocas doces e salgadas.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 20,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "tapioca-queijo", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite condensado.", preco: 14, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "tapioca-carne", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 16, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-romeu", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 14, recuperacao: { fome: 18, felicidade: 15, energia: 5 } },
                { id: "suco-jacarecanga", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 16. ANTÔNIO BEZERRA - LANCHONETE ==========
        "bezerra-lanchonete": {
            id: "bezerra-lanchonete",
            nome: "🍔 Lanchonete Bezerra",
            endereco: "Av. Antônio Bezerra, 500 - Antônio Bezerra, Fortaleza",
            horario: "08h às 22h",
            telefone: "(85) 4777-6666",
            descricao: "Lanchonete tradicional. X-tudo, sucos e salgados.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-bezerra", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-bezerra", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 16, recuperacao: { fome: 40, energia: 12, felicidade: 8 } },
                { id: "coxinha-bezerra", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-bezerra", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 7, energia: 3 } },
                { id: "suco-bezerra", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 17. CENTRO - CAFÉ REGIONAL ==========
        "centro-cafe-regional": {
            id: "centro-cafe-regional",
            nome: "☕ Café Regional",
            endereco: "Rua Senador Alencar, 200 - Centro, Fortaleza",
            horario: "08h às 20h",
            telefone: "(85) 4888-7777",
            descricao: "Cafeteria com produtos regionais. Cafés, bolos e tapiocas.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 25,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-regional", nome: "☕ Café", descricao: "Café especial.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "bolo-cenoura", nome: "🍰 Bolo de Cenoura", descricao: "Bolo com chocolate.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "tapioca-cafe", nome: "🥞 Tapioca", descricao: "Tapioca de coco.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cafe", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "suco-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 18. SHOPPING IGUATEMI - FOOD COURT ==========
        "iguatemi-fortaleza": {
            id: "iguatemi-fortaleza",
            nome: "🛍️ Shopping Iguatemi - Food Court",
            endereco: "Av. Washington Soares, 1000 - Edson Queiroz, Fortaleza",
            horario: "10h às 22h",
            telefone: "(85) 4999-8888",
            descricao: "Praça de alimentação do Shopping Iguatemi.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 5430,
            cardapio: [
                { id: "mc-iguatemi", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-iguatemi", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-iguatemi", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-iguatemi", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-iguatemi", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },

        // ========== 19. SHOPPING ALDEOTA - FOOD COURT ==========
        "aldeota-shopping": {
            id: "aldeota-shopping",
            nome: "🛍️ Shopping Aldeota - Food Court",
            endereco: "Av. Dom Luís, 500 - Aldeota, Fortaleza",
            horario: "10h às 22h",
            telefone: "(85) 5000-9999",
            descricao: "Praça de alimentação do Shopping Aldeota.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aldeota", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-aldeota", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-aldeota", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-aldeota", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-aldeota-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },

        // ========== 20. AEROPORTO ==========
        "aeroporto-fortaleza": {
            id: "aeroporto-fortaleza",
            nome: "✈️ Aeroporto Pinto Martins - Praça de Alimentação",
            endereco: "Av. Senador Carlos Jereissati, 3000 - Serrinha, Fortaleza",
            horario: "04h às 00h",
            telefone: "(85) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aero-fort", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-fort", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-fort", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "starbucks-aero-fort", nome: "☕ Starbucks", descricao: "Café.", preco: 15, recuperacao: { sede: 10, energia: 14, felicidade: 12 } },
                { id: "suco-aero-fort", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        }
    },

    // ==================== SOBRAL - 10 RESTAURANTES ====================
    "Sobral": {
        // ========== 1. CENTRO - CULINÁRIA SOBRALENSE ==========
        "sobral-tradicional": {
            id: "sobral-tradicional",
            nome: "🍲 Culinária Sobralense",
            endereco: "Rua Cel. José Gomes, 200 - Centro, Sobral",
            horario: "11h às 22h",
            telefone: "(88) 3222-1111",
            descricao: "Culinária típica de Sobral. Baião de dois, carne de sol, panelada e buchada. Ambiente familiar.",
            tipo: ["cearense", "nordestina", "tradicional", "familiar"],
            preco_medio: 40,
            estrelas: 4.5,
            avaliacoes: 1240,
            cardapio: [
                { id: "baiao-sobral", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 38, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-sobral", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 45, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-sobral", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 35, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "buchada-sobral", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 42, recuperacao: { fome: 65, energia: 22, felicidade: 14 } },
                { id: "suco-sobral", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO ==========
        "sobral-boteco": {
            id: "sobral-boteco",
            nome: "🍺 Boteco do Sobral",
            endereco: "Rua Duque de Caxias, 300 - Centro, Sobral",
            horario: "17h às 02h",
            telefone: "(88) 3333-2222",
            descricao: "Boteco tradicional no centro. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "tradicional"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-sobral", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-sobral", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-sobral", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "batata-sobral", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 18, felicidade: 7, energia: 3 } },
                { id: "chopp-sobral", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "sobral-pizzaria": {
            id: "sobral-pizzaria",
            nome: "🍕 Pizzaria Sobral",
            endereco: "Av. Dom José, 200 - Centro, Sobral",
            horario: "18h às 23h",
            telefone: "(88) 3444-3333",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-sob", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-sob", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-sob", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-sob", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-sob", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 4. CAFÉ REGIONAL ==========
        "sobral-cafe": {
            id: "sobral-cafe",
            nome: "☕ Café Sobral",
            endereco: "Rua Viriato de Medeiros, 150 - Centro, Sobral",
            horario: "08h às 20h",
            telefone: "(88) 3555-4444",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-sobral", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-sobral", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-sobral", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-sobral", nome: "🍰 Bolo de Macaxeira", descricao: "Bolo de macaxeira.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "suco-sobral-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. COMIDA CASEIRA ==========
        "sobral-caseira": {
            id: "sobral-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua João Pessoa, 200 - Centro, Sobral",
            horario: "11h às 15h",
            telefone: "(88) 3666-5555",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "prato-feito-sob", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-sob", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-sob", nome: "🍗 Frango", descricao: "Frango assado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-sob", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-sob-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 6. PRAÇA DA CATEDRAL - PETISCOS ==========
        "sobral-petiscos": {
            id: "sobral-petiscos",
            nome: "🍢 Petiscos da Praça",
            endereco: "Praça da Catedral, 100 - Centro, Sobral",
            horario: "17h às 00h",
            telefone: "(88) 3777-6666",
            descricao: "Barraca de petiscos na praça. Pasteis, caldos e espetinhos.",
            tipo: ["petiscos", "comida-de-rua", "popular", "tradicional"],
            preco_medio: 20,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pastel-praca", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 3 } },
                { id: "caldo-praca", nome: "🥣 Caldo de Cana", descricao: "Caldo de cana.", preco: 6, recuperacao: { sede: 20, energia: 6, felicidade: 4 } },
                { id: "espetinho-praca", nome: "🍖 Espetinho", descricao: "Espetinho de carne.", preco: 10, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "tapioca-praca", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 4 } },
                { id: "suco-praca", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 5, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "sobral-tapiocaria": {
            id: "sobral-tapiocaria",
            nome: "🥞 Tapiocaria Sobral",
            endereco: "Av. Dom José, 300 - Centro, Sobral",
            horario: "08h às 21h",
            telefone: "(88) 3888-7777",
            descricao: "Tapiocaria com sabores tradicionais.",
            tipo: ["tapiocaria", "regional", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-sob", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-sob", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-sob", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-sob", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-tapioca-sob", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. HAMBURGUERIA ==========
        "sobral-hamburguer": {
            id: "sobral-hamburguer",
            nome: "🍔 Hamburgueria Sobral",
            endereco: "Av. John Sanford, 500 - Centro, Sobral",
            horario: "18h às 00h",
            telefone: "(88) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-sobral", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-sobral", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-sobral-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-sobral", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-sobral", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 9. SHOPPING SOBRAL ==========
        "shopping-sobral": {
            id: "shopping-sobral",
            nome: "🛍️ Shopping Sobral - Food Court",
            endereco: "Av. John Sanford, 1000 - Centro, Sobral",
            horario: "10h às 22h",
            telefone: "(88) 4000-9999",
            descricao: "Praça de alimentação do Shopping Sobral.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-sobral", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-sobral", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-sobral", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-sobral", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-sobral-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-sobral": {
            id: "rodoviaria-sobral",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Monsenhor Aloísio Pinto, 500 - Centro, Sobral",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-sob", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-sob-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-sob", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-sob", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-sob", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== JUAZEIRO DO NORTE - 10 RESTAURANTES ====================
    "Juazeiro do Norte": {
        // ========== 1. CENTRO - CULINÁRIA CARIRI ==========
        "juazeiro-cariri": {
            id: "juazeiro-cariri",
            nome: "🍲 Sabor do Cariri",
            endereco: "Rua São Pedro, 200 - Centro, Juazeiro do Norte",
            horario: "11h às 22h",
            telefone: "(88) 3222-1111",
            descricao: "Culinária típica do Cariri cearense. Baião de dois, carne de sol, panelada e buchada. Ambiente familiar e acolhedor.",
            tipo: ["cearense", "nordestina", "tradicional", "familiar"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "baiao-juazeiro", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 38, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-juazeiro", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 45, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-juazeiro", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 35, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "buchada-juazeiro", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 42, recuperacao: { fome: 65, energia: 22, felicidade: 14 } },
                { id: "suco-juazeiro", nome: "🥤 Suco de Caju", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO ==========
        "juazeiro-boteco": {
            id: "juazeiro-boteco",
            nome: "🍺 Boteco do Romeiro",
            endereco: "Rua Padre Cícero, 300 - Centro, Juazeiro do Norte",
            horario: "17h às 02h",
            telefone: "(88) 3333-2222",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-juazeiro", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-juazeiro", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-juazeiro", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "batata-juazeiro", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 3 } },
                { id: "chopp-juazeiro", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "juazeiro-pizzaria": {
            id: "juazeiro-pizzaria",
            nome: "🍕 Pizzaria Juazeiro",
            endereco: "Av. Leão Sampaio, 500 - Centro, Juazeiro do Norte",
            horario: "18h às 23h",
            telefone: "(88) 3444-3333",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-ju", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ju", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ju", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ju", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ju", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 4. CAFÉ REGIONAL ==========
        "juazeiro-cafe": {
            id: "juazeiro-cafe",
            nome: "☕ Café Juazeiro",
            endereco: "Rua São Luís, 150 - Centro, Juazeiro do Norte",
            horario: "08h às 20h",
            telefone: "(88) 3555-4444",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-juazeiro", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-juazeiro", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-juazeiro", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-juazeiro", nome: "🍰 Bolo de Macaxeira", descricao: "Bolo de macaxeira.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "suco-ju-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. COMIDA CASEIRA ==========
        "juazeiro-caseira": {
            id: "juazeiro-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua da Matriz, 200 - Centro, Juazeiro do Norte",
            horario: "11h às 15h",
            telefone: "(88) 3666-5555",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-ju", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ju", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ju", nome: "🍗 Frango", descricao: "Frango assado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ju", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ju-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 6. TAPIOCARIA ==========
        "juazeiro-tapiocaria": {
            id: "juazeiro-tapiocaria",
            nome: "🥞 Tapiocaria Romeira",
            endereco: "Av. Padre Cícero, 500 - Centro, Juazeiro do Norte",
            horario: "08h às 21h",
            telefone: "(88) 3777-6666",
            descricao: "Tapiocaria com sabores tradicionais.",
            tipo: ["tapiocaria", "regional", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-ju", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ju", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ju", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ju", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-tapioca-ju", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "juazeiro-hamburguer": {
            id: "juazeiro-hamburguer",
            nome: "🍔 Hamburgueria Juazeiro",
            endereco: "Av. Leão Sampaio, 800 - Centro, Juazeiro do Norte",
            horario: "18h às 00h",
            telefone: "(88) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-juazeiro", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-juazeiro", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-juazeiro", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-juazeiro", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-juazeiro", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 8. SHOPPING JUAZEIRO ==========
        "shopping-juazeiro": {
            id: "shopping-juazeiro",
            nome: "🛍️ Shopping Juazeiro - Food Court",
            endereco: "Av. Leão Sampaio, 2000 - Lagoa Seca, Juazeiro do Norte",
            horario: "10h às 22h",
            telefone: "(88) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 1240,
            cardapio: [
                { id: "mc-juazeiro", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-juazeiro", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-juazeiro", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-juazeiro", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-juazeiro-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. CARNE DE SOL DO CARIRI ==========
        "juazeiro-carne-sol": {
            id: "juazeiro-carne-sol",
            nome: "🥩 Carne de Sol do Cariri",
            endereco: "Av. Plácido Castelo, 300 - Centro, Juazeiro do Norte",
            horario: "11h às 21h",
            telefone: "(88) 4000-9999",
            descricao: "Especialidade em carne de sol.",
            tipo: ["nordestina", "carne-de-sol", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "carne-sol-especial", nome: "🥩 Carne de Sol Especial", descricao: "Carne de sol c apururuca.", preco: 48, recuperacao: { fome: 75, felicidade: 26, energia: 16 } },
                { id: "paçoca-juazeiro", nome: "🍖 Paçoca de Carne", descricao: "Carne de sol com farinha.", preco: 32, recuperacao: { fome: 55, felicidade: 18, energia: 10 } },
                { id: "macaxeira-juazeiro", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 12, recuperacao: { fome: 18, felicidade: 8, energia: 5 } },
                { id: "farofa-juazeiro", nome: "🍚 Farofa", descricao: "Farofa de manteiga.", preco: 8, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "suco-caju-cs", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-juazeiro": {
            id: "rodoviaria-juazeiro",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Castelo Branco, 500 - Centro, Juazeiro do Norte",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ju", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-ju-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ju", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ju", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-ju", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesCE;