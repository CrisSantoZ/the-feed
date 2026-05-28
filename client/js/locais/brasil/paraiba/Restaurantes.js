const restaurantesPB = {
    // ==================== JOÃO PESSOA (CAPITAL) - 20 RESTAURANTES ====================
    "João Pessoa": {
        // ========== 1. CENTRO HISTÓRICO - CULINÁRIA PARAIBANA ==========
        "centro-paraibana": {
            id: "centro-paraibana",
            nome: "🍚 Culinária Paraibana",
            endereco: "Rua Duque de Caxias, 200 - Centro Histórico, João Pessoa",
            horario: "11h às 22h",
            telefone: "(83) 3222-1111",
            descricao: "Restaurante tradicional no centro histórico. Especialidades paraibanas como carne de sol, baião de dois, feijão verde e tapioca.",
            tipo: ["paraibana", "nordestina", "tradicional", "regional", "familiar"],
            preco_medio: 50,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "carne-sol-jp", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "baiao-dois-jp", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "feijao-verde-jp", nome: "🍲 Feijão Verde", descricao: "Feijão verde com carne de sol.", preco: 38, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "tapioca-jp", nome: "🥞 Tapioca de Carne", descricao: "Tapioca recheada com carne seca e queijo.", preco: 18, recuperacao: { fome: 25, felicidade: 15, energia: 7 } },
                { id: "caipirinha-jp", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. TAMBAÚ - FRUTOS DO MAR ==========
        "tambau-frutos": {
            id: "tambau-frutos",
            nome: "🐟 Restaurante Tambaú",
            endereco: "Av. Almirante Tamandaré, 1000 - Tambaú, João Pessoa",
            horario: "11h às 23h",
            telefone: "(83) 3333-2222",
            descricao: "Frutos do mar com vista para a praia de Tambaú. Especialidade em lagosta, camarão e peixes.",
            tipo: ["frutos-do-mar", "paraibana", "praia", "vista", "turístico"],
            preco_medio: 80,
            estrelas: 4.8,
            avaliacoes: 3120,
            cardapio: [
                { id: "lagosta-tambau", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 125, recuperacao: { fome: 85, felicidade: 42, energia: 28 } },
                { id: "camarao-tambau", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "moqueca-tambau", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 78, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-tambau", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-tambau", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 3. CABO BRANCO - PEIXARIA ==========
        "cabo-branco-peixaria": {
            id: "cabo-branco-peixaria",
            nome: "🐟 Peixaria Cabo Branco",
            endereco: "Av. Cabo Branco, 2000 - Cabo Branco, João Pessoa",
            horario: "11h às 22h",
            telefone: "(83) 3444-3333",
            descricao: "Peixes frescos da costa paraibana. Especialidade em peixes e frutos do mar.",
            tipo: ["peixaria", "frutos-do-mar", "praia", "familiar"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "peixe-cb", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia grelhado.", preco: 52, recuperacao: { fome: 65, energia: 22, felicidade: 17 } },
                { id: "camarao-cb", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 58, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "moqueca-cb", nome: "🍲 Moqueca", descricao: "Moqueca paraibana.", preco: 65, recuperacao: { fome: 72, energia: 26, felicidade: 18 } },
                { id: "caranguejo-cb", nome: "🦀 Caranguejo", descricao: "Caranguejo cozido.", preco: 48, recuperacao: { fome: 60, felicidade: 24, energia: 16 } },
                { id: "suco-cb", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. MANAÍRA - CHURRASCARIA ==========
        "manaira-churrascaria": {
            id: "manaira-churrascaria",
            nome: "🥩 Churrascaria Manaíra",
            endereco: "Av. Governador Flávio Ribeiro Coutinho, 500 - Manaíra, João Pessoa",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(83) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-man", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-man", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-man", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-man", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-man", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. BESSA - BOTECO ==========
        "bessa-boteco": {
            id: "bessa-boteco",
            nome: "🍺 Boteco Bessa",
            endereco: "Rua João Cirillo, 300 - Bessa, João Pessoa",
            horario: "17h às 03h",
            telefone: "(83) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-be", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-be", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-be", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-be", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-be", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. ALTIPLANO - PIZZARIA ==========
        "altiplano-pizzaria": {
            id: "altiplano-pizzaria",
            nome: "🍕 Pizzaria Altiplano",
            endereco: "Av. Altiplano, 500 - Altiplano, João Pessoa",
            horario: "18h às 23h30",
            telefone: "(83) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-alt", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-alt", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-alt", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-alt", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-alt", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. JARDIM OCEANIA - HAMBURGUERIA ==========
        "jardim-oceania-hamburguer": {
            id: "jardim-oceania-hamburguer",
            nome: "🍔 Hamburgueria Oceania",
            endereco: "Rua Oceania, 300 - Jardim Oceania, João Pessoa",
            horario: "18h às 00h",
            telefone: "(83) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-jo", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 40, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-jo", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 42, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-jo", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-jo", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-jo", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. BANCÁRIOS - CAFÉ REGIONAL ==========
        "bancarios-cafe": {
            id: "bancarios-cafe",
            nome: "☕ Café Bancários",
            endereco: "Rua Bancários, 300 - Bancários, João Pessoa",
            horario: "08h às 20h",
            telefone: "(83) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-ban", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ban", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ban", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ban", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ban", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. PORTAL DO SOL - TAPIOCARIA ==========
        "portal-sol-tapiocaria": {
            id: "portal-sol-tapiocaria",
            nome: "🥞 Tapiocaria Portal",
            endereco: "Rua Portal do Sol, 300 - Portal do Sol, João Pessoa",
            horario: "08h às 21h",
            telefone: "(83) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-ps", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ps", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ps", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ps", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-ps", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. CRISTO - COMIDA CASEIRA ==========
        "cristo-caseira": {
            id: "cristo-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Cristo, 500 - Cristo, João Pessoa",
            horario: "11h às 15h",
            telefone: "(83) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-cr", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-cr", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-cr", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-cr", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-cr", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. VALENTINA - COMIDA NORDESTINA ==========
        "valentina-nordestina": {
            id: "valentina-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Valentina, 500 - Valentina, João Pessoa",
            horario: "11h às 21h",
            telefone: "(83) 4222-1111",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-val", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-val", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-val", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-val", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-val", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. MANGABEIRA - PEIXARIA ==========
        "mangabeira-peixaria": {
            id: "mangabeira-peixaria",
            nome: "🐟 Peixaria Mangabeira",
            endereco: "Rua Mangabeira, 500 - Mangabeira, João Pessoa",
            horario: "11h às 21h",
            telefone: "(83) 4333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "paraibana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-man", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-man", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-man", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caranguejo-man", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-man", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. CASTELO BRANCO - RESTAURANTE POPULAR ==========
        "castelo-branco-popular": {
            id: "castelo-branco-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Castelo Branco, 500 - Castelo Branco, João Pessoa",
            horario: "11h às 14h",
            telefone: "(83) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "prato-feito-cb", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cb", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cb", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cb", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cb", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. ALTO DO MATEUS - COMIDA ITALIANA ==========
        "alto-mateus-italiana": {
            id: "alto-mateus-italiana",
            nome: "🍝 Cantina Alto do Mateus",
            endereco: "Rua Alto do Mateus, 300 - Alto do Mateus, João Pessoa",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(83) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-am", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-am", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-am", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-am", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-am", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. OITIZEIRO - LANCHONETE ==========
        "oitizeiro-lanchonete": {
            id: "oitizeiro-lanchonete",
            nome: "🍔 Lanchonete Oitizeiro",
            endereco: "Rua Oitizeiro, 500 - Oitizeiro, João Pessoa",
            horario: "08h às 22h",
            telefone: "(83) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-oi", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-oi", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-oi", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-oi", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-oi", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. MANGABEIRA SHOPPING ==========
        "mangabeira-shopping": {
            id: "mangabeira-shopping",
            nome: "🛍️ Mangabeira Shopping - Food Court",
            endereco: "Av. Hilton Souto Maior, 1000 - Mangabeira, João Pessoa",
            horario: "10h às 22h",
            telefone: "(83) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-ms", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ms", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-ms", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-ms", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ms", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SHOPPING SUL ==========
        "shopping-sul": {
            id: "shopping-sul",
            nome: "🛍️ Shopping Sul - Food Court",
            endereco: "Rua Francisco Gonçalves, 100 - Cristo, João Pessoa",
            horario: "10h às 22h",
            telefone: "(83) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-ss", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ss", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ss", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ss", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ss", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. MANAÍRA SHOPPING ==========
        "manaira-shopping": {
            id: "manaira-shopping",
            nome: "🛍️ Manaíra Shopping - Food Court",
            endereco: "Av. Gov. Flávio Ribeiro Coutinho, 1000 - Manaíra, João Pessoa",
            horario: "10h às 22h",
            telefone: "(83) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2780,
            cardapio: [
                { id: "mc-mn", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-mn", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-mn", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-mn", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-mn", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-joao-pessoa": {
            id: "aeroporto-joao-pessoa",
            nome: "✈️ Aeroporto Presidente Castro Pinto - Praça de Alimentação",
            endereco: "BR-230, s/n - Aeroporto, Bayeux (Região Metropolitana)",
            horario: "04h às 23h",
            telefone: "(83) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-pb", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-pb", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-pb", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-pb", nome: "☕ Café Paraibano", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-pb", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. ESTAÇÃO CABO BRANCO - QUIOSQUE ==========
        "estacao-cabo-branco": {
            id: "estacao-cabo-branco",
            nome: "🏞️ Estação Cabo Branco - Quiosque",
            endereco: "Av. Cabo Branco, 2000 - Cabo Branco, João Pessoa",
            horario: "09h às 20h",
            telefone: "(83) 5111-0000",
            descricao: "Quiosque na Estação Cabo Branco.",
            tipo: ["petiscos", "turístico", "casual", "vista"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "pastel-ecb", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "tapioca-ecb", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-ecb", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "camarao-ecb", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "cafe-ecb", nome: "☕ Café", descricao: "Café.", preco: 7, recuperacao: { sede: 8, energia: 10, felicidade: 7 } }
            ]
        }
    },

    // ==================== CAMPINA GRANDE - 10 RESTAURANTES ====================
    "Campina Grande": {
        // ========== 1. CENTRO - CULINÁRIA SERTANEJA ==========
        "campina-sertaneja": {
            id: "campina-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Rua Maciel Pinheiro, 200 - Centro, Campina Grande",
            horario: "11h às 22h",
            telefone: "(83) 3222-1111",
            descricao: "Culinária sertaneja do cariri paraibano. Baião de dois, carne de sol, panelada e buchada.",
            tipo: ["paraibana", "nordestina", "sertaneja", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 1340,
            cardapio: [
                { id: "baiao-cg", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "carne-sol-cg", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "panelada-cg", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 14 } },
                { id: "buchada-cg", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 45, recuperacao: { fome: 66, felicidade: 22, energia: 15 } },
                { id: "suco-cg", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "campina-churrascaria": {
            id: "campina-churrascaria",
            nome: "🥩 Churrascaria Campina",
            endereco: "Av. Brasil, 500 - Centro, Campina Grande",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(83) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-cg", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-cg", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-cg", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-cg", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-cg-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "campina-boteco": {
            id: "campina-boteco",
            nome: "🍺 Boteco Campina",
            endereco: "Rua 13 de Maio, 200 - Centro, Campina Grande",
            horario: "17h às 02h",
            telefone: "(83) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "calabresa-cg", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-cg", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-cg", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-cg", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-cg", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "campina-pizzaria": {
            id: "campina-pizzaria",
            nome: "🍕 Pizzaria Campina",
            endereco: "Av. Floriano Peixoto, 300 - Centro, Campina Grande",
            horario: "18h às 23h30",
            telefone: "(83) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-cg", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-cg", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-cg", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-cg", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-cg-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "campina-cafe": {
            id: "campina-cafe",
            nome: "☕ Café Campina",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Campina Grande",
            horario: "08h às 20h",
            telefone: "(83) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-cg", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cg", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cg", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cg", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-cg-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "campina-hamburguer": {
            id: "campina-hamburguer",
            nome: "🍔 Hamburgueria Campina",
            endereco: "Rua 7 de Setembro, 300 - Centro, Campina Grande",
            horario: "18h às 00h",
            telefone: "(83) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-cg", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-cg", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-cg-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-cg", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-cg", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "campina-tapiocaria": {
            id: "campina-tapiocaria",
            nome: "🥞 Tapiocaria Campina",
            endereco: "Rua 15 de Novembro, 200 - Centro, Campina Grande",
            horario: "08h às 21h",
            telefone: "(83) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-cg", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-cg", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-cg", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-cg", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-cg-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "campina-caseira": {
            id: "campina-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 10, 200 - Centro, Campina Grande",
            horario: "11h às 15h",
            telefone: "(83) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-cg", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-cg", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-cg", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-cg", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-cg-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-campina": {
            id: "shopping-campina",
            nome: "🛍️ Shopping Campina Grande - Food Court",
            endereco: "Av. Floriano Peixoto, 1500 - Centro, Campina Grande",
            horario: "10h às 22h",
            telefone: "(83) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-cg", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cg", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-cg", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-cg", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-cg-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-campina": {
            id: "rodoviaria-campina",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-230, km 100 - Centro, Campina Grande",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-cg", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-cg-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-cg", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-cg", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-cg-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== SANTA RITA - 10 RESTAURANTES ====================
    "Santa Rita": {
        // ========== 1. CENTRO - COMIDA REGIONAL ==========
        "santa-rita-regional": {
            id: "santa-rita-regional",
            nome: "🍲 Sabor Santa Rita",
            endereco: "Rua do Comércio, 200 - Centro, Santa Rita",
            horario: "11h às 22h",
            telefone: "(83) 3222-1111",
            descricao: "Culinária regional de Santa Rita. Frutos do mar e peixes da região.",
            tipo: ["paraibana", "regional", "frutos-do-mar", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-sr", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-sr", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-sr", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "carne-sol-sr", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "suco-sr", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "santa-rita-peixaria": {
            id: "santa-rita-peixaria",
            nome: "🐟 Peixaria Santa Rita",
            endereco: "Av. João Pessoa, 300 - Centro, Santa Rita",
            horario: "11h às 21h",
            telefone: "(83) 3333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "paraibana", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tambaqui-sr", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "pirarucu-sr", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "camarao-sr-p", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "moqueca-sr-p", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "suco-sr-p", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "santa-rita-boteco": {
            id: "santa-rita-boteco",
            nome: "🍺 Boteco Santa Rita",
            endereco: "Rua 7 de Setembro, 200 - Centro, Santa Rita",
            horario: "17h às 02h",
            telefone: "(83) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-sr", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-sr", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-sr", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-sr", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-sr", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "santa-rita-pizzaria": {
            id: "santa-rita-pizzaria",
            nome: "🍕 Pizzaria Santa Rita",
            endereco: "Av. Liberdade, 300 - Centro, Santa Rita",
            horario: "18h às 23h30",
            telefone: "(83) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-sr", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-sr", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-sr", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-sr", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-sr-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "santa-rita-cafe": {
            id: "santa-rita-cafe",
            nome: "☕ Café Santa Rita",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Santa Rita",
            horario: "08h às 20h",
            telefone: "(83) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-sr", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-sr", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-sr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-sr", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-sr-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "santa-rita-hamburguer": {
            id: "santa-rita-hamburguer",
            nome: "🍔 Hamburgueria Santa Rita",
            endereco: "Rua 15, 300 - Centro, Santa Rita",
            horario: "18h às 00h",
            telefone: "(83) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-sr", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-sr", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-sr-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-sr", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-sr", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "santa-rita-tapiocaria": {
            id: "santa-rita-tapiocaria",
            nome: "🥞 Tapiocaria Santa Rita",
            endereco: "Rua 18, 200 - Centro, Santa Rita",
            horario: "08h às 21h",
            telefone: "(83) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-sr", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-sr", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-sr", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-sr", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-sr-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "santa-rita-caseira": {
            id: "santa-rita-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Santa Rita",
            horario: "11h às 15h",
            telefone: "(83) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-sr", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-sr", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-sr", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-sr", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-sr-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-santa-rita": {
            id: "shopping-santa-rita",
            nome: "🛍️ Shopping Santa Rita - Food Court",
            endereco: "BR-101, km 50 - Centro, Santa Rita",
            horario: "10h às 22h",
            telefone: "(83) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-sr", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-sr", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-sr", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-sr", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-sr-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-santa-rita": {
            id: "rodoviaria-santa-rita",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-101, km 80 - Centro, Santa Rita",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-sr", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-sr-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-sr", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-sr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-sr-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesPB;