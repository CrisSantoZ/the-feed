export const restaurantesPI = {
    // ==================== TERESINA (CAPITAL) - 20 RESTAURANTES ====================
    "Teresina": {
        // ========== 1. CENTRO - CULINÁRIA PIAUIENSE ==========
        "centro-piauiense": {
            id: "centro-piauiense",
            nome: "🍚 Culinária Piauiense",
            endereco: "Rua Grande, 200 - Centro, Teresina",
            horario: "11h às 22h",
            telefone: "(86) 3222-1111",
            descricao: "Restaurante tradicional com culinária piauiense autêntica. Especialidades como Maria Isabel, carne de sol, baião de dois e capote. Ambiente familiar.",
            tipo: ["piauiense", "nordestina", "tradicional", "regional", "familiar"],
            preco_medium: 48,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "maria-isabel", nome: "🍚 Maria Isabel", descricao: "Arroz com carne de sol e queijo coalho. Prato típico piauiense.", preco: 45, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "carne-sol-pi", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "baiao-dois-pi", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "capote-pi", nome: "🍗 Capote", descricao: "Capote assado com temperos caseiros.", preco: 52, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "suco-pi", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Parnaíba",
            endereco: "Rua Coelho de Resende, 300 - Centro, Teresina",
            horario: "11h às 22h",
            telefone: "(86) 3333-2222",
            descricao: "Peixes frescos do rio Parnaíba. Especialidade em tambaqui, curimatá e pescada.",
            tipo: ["peixaria", "piauiense", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "tambaqui-pi", nome: "🐟 Tambaqui", descricao: "Tambaqui assado na brasa.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "curimata-pi", nome: "🐟 Curimatá", descricao: "Curimatá grelhado.", preco: 45, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "pescada-pi", nome: "🐟 Pescada", descricao: "Pescada frita.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-pi", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 52, recuperacao: { fome: 65, felicidade: 25, energia: 17 } },
                { id: "suco-pi-peixe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. ILHOTAS - FRUTOS DO RIO ==========
        "ilhotas-frutos": {
            id: "ilhotas-frutos",
            nome: "🐟 Restaurante Ilhotas",
            endereco: "Av. Frei Serafim, 1000 - Ilhotas, Teresina",
            horario: "11h às 23h",
            telefone: "(86) 3444-3333",
            descricao: "Frutos do rio com vista para o Parnaíba.",
            tipo: ["peixaria", "piauiense", "vista", "familiar"],
            preco_medium: 55,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "tambaqui-il", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 58, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-il", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 62, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "moqueca-il", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 65, recuperacao: { fome: 75, felicidade: 30, energia: 20 } },
                { id: "camarao-il", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "caipirinha-il", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. JÓQUEI - CHURRASCARIA ==========
        "joquei-churrascaria": {
            id: "joquei-churrascaria",
            nome: "🥩 Churrascaria Jóquei",
            endereco: "Av. João XXIII, 1000 - Jóquei, Teresina",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(86) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 70,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-jo", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-jo", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-jo", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-jo", nome: "🥗 Buffet", descricao: "Buffet.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-jo", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. SÃO CRISTÓVÃO - BOTECO ==========
        "sao-cristovao-boteco": {
            id: "sao-cristovao-boteco",
            nome: "🍺 Boteco São Cristóvão",
            endereco: "Rua São Cristóvão, 300 - São Cristóvão, Teresina",
            horario: "17h às 02h",
            telefone: "(86) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 28,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-sc", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-sc", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-sc", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-sc", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-sc", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. PIÇARRA - PIZZARIA ==========
        "picarra-pizzaria": {
            id: "picarra-pizzaria",
            nome: "🍕 Pizzaria Piçarra",
            endereco: "Rua Piçarra, 300 - Piçarra, Teresina",
            horario: "18h às 23h30",
            telefone: "(86) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-pc", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-pc", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-pc", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-pc", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-pc", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. MORADA DO SOL - HAMBURGUERIA ==========
        "morada-sol-hamburguer": {
            id: "morada-sol-hamburguer",
            nome: "🍔 Hamburgueria Morada",
            endereco: "Rua Morada do Sol, 300 - Morada do Sol, Teresina",
            horario: "18h às 00h",
            telefone: "(86) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-ms", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-ms", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-ms", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-ms", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-ms", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. NOIVOS - CAFÉ REGIONAL ==========
        "noivos-cafe": {
            id: "noivos-cafe",
            nome: "☕ Café Noivos",
            endereco: "Rua Noivos, 300 - Noivos, Teresina",
            horario: "08h às 20h",
            telefone: "(86) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-no", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-no", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-no", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-no", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-no", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. DIRCEU - TAPIOCARIA ==========
        "dirceu-tapiocaria": {
            id: "dirceu-tapiocaria",
            nome: "🥞 Tapiocaria Dirceu",
            endereco: "Rua Dirceu, 500 - Dirceu, Teresina",
            horario: "08h às 21h",
            telefone: "(86) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-di", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-di", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-di", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-di", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-di", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. SATÉLITE - COMIDA CASEIRA ==========
        "satelite-caseira": {
            id: "satelite-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Satélite, 500 - Satélite, Teresina",
            horario: "11h às 15h",
            telefone: "(86) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-sa", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-sa", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-sa", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-sa", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-sa", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. PROMORAR - COMIDA NORDESTINA ==========
        "promorar-nordestina": {
            id: "promorar-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Promorar, 500 - Promorar, Teresina",
            horario: "11h às 21h",
            telefone: "(86) 4222-1111",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-pro", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-pro", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-pro", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-pro", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-pro", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. PARQUE PIAUÍ - PEIXARIA ==========
        "parque-piaui-peixaria": {
            id: "parque-piaui-peixaria",
            nome: "🐟 Peixaria Parque Piauí",
            endereco: "Rua Parque Piauí, 500 - Parque Piauí, Teresina",
            horario: "11h às 21h",
            telefone: "(86) 4333-2222",
            descricao: "Peixes frescos do Parnaíba.",
            tipo: ["peixaria", "piauiense", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-pp", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-pp", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-pp", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "tambaqui-pp", nome: "🐟 Tambaqui", descricao: "Tambaqui.", preco: 55, recuperacao: { fome: 66, energia: 24, felicidade: 17 } },
                { id: "suco-pp", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. LOURIVAL PARENTE - RESTAURANTE POPULAR ==========
        "lourival-parente-popular": {
            id: "lourival-parente-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Lourival Parente, 500 - Lourival Parente, Teresina",
            horario: "11h às 14h",
            telefone: "(86) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "prato-feito-lp", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-lp", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-lp", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-lp", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-lp", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. ANGELIM - COMIDA ITALIANA ==========
        "angelim-italiana": {
            id: "angelim-italiana",
            nome: "🍝 Cantina Angelim",
            endereco: "Rua Angelim, 300 - Angelim, Teresina",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(86) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medium: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-an", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-an", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-an", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-an", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-an", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. PRIMAVERA - LANCHONETE ==========
        "primavera-lanchonete": {
            id: "primavera-lanchonete",
            nome: "🍔 Lanchonete Primavera",
            endereco: "Rua Primavera, 500 - Primavera, Teresina",
            horario: "08h às 22h",
            telefone: "(86) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-pr", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-pr", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-pr", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-pr", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-pr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SHOPPING TERESINA ==========
        "shopping-teresina": {
            id: "shopping-teresina",
            nome: "🛍️ Shopping Teresina - Food Court",
            endereco: "Av. Raul Lopes, 1000 - Centro, Teresina",
            horario: "10h às 22h",
            telefone: "(86) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-te", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-te", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-te", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-te", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-te", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. RIVERSIDE SHOPPING ==========
        "riverside-shopping": {
            id: "riverside-shopping",
            nome: "🛍️ Riverside Shopping - Food Court",
            endereco: "Av. Raul Lopes, 2000 - Centro, Teresina",
            horario: "10h às 22h",
            telefone: "(86) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-ri", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ri", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ri", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ri", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ri", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. PARQUE DA CIDADE - QUIOSQUE ==========
        "parque-cidade-quiosque": {
            id: "parque-cidade-quiosque",
            nome: "🏞️ Quiosque Parque da Cidade",
            endereco: "Parque da Cidade - Av. Raul Lopes, Teresina",
            horario: "09h às 20h",
            telefone: "(86) 4999-8888",
            descricao: "Quiosque no parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pc", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pc", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pc", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pc", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pc", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-teresina": {
            id: "aeroporto-teresina",
            nome: "✈️ Aeroporto de Teresina - Praça de Alimentação",
            endereco: "Av. Aeroporto, s/n - Aeroporto, Teresina",
            horario: "04h às 23h",
            telefone: "(86) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-pi", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-pi", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-pi", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-pi", nome: "☕ Café Piauiense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-pi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-teresina": {
            id: "rodoviaria-teresina",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Frei Serafim, 1500 - Centro, Teresina",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-te", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-te-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-te", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-te", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-te-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== PARNAÍBA - 10 RESTAURANTES ====================
    "Parnaíba": {
        // ========== 1. CENTRO - FRUTOS DO MAR ==========
        "parnaiba-frutos": {
            id: "parnaiba-frutos",
            nome: "🐟 Restaurante Delta",
            endereco: "Av. São Sebastião, 500 - Centro, Parnaíba",
            horario: "11h às 22h",
            telefone: "(86) 3222-1111",
            descricao: "Frutos do mar do Delta do Parnaíba. Peixes, camarões e caranguejos frescos.",
            tipo: ["frutos-do-mar", "piauiense", "regional", "familiar"],
            preco_medium: 55,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "caranguejo-pb", nome: "🦀 Caranguejo", descricao: "Caranguejo cozido.", preco: 48, recuperacao: { fome: 60, felicidade: 24, energia: 16 } },
                { id: "camarao-pb", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 52, recuperacao: { fome: 64, felicidade: 25, energia: 17 } },
                { id: "moqueca-pb", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "peixe-pb", nome: "🐟 Peixe Grelhado", descricao: "Peixe do delta.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "suco-pb", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "parnaiba-peixaria": {
            id: "parnaiba-peixaria",
            nome: "🐟 Peixaria do Delta",
            endereco: "Rua 15 de Novembro, 300 - Centro, Parnaíba",
            horario: "11h às 21h",
            telefone: "(86) 3333-2222",
            descricao: "Peixes frescos do Delta do Parnaíba.",
            tipo: ["peixaria", "frutos-do-mar", "familiar"],
            preco_medium: 48,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tambaqui-pb", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-pb", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "camarao-pb-p", nome: "🍤 Camarão", descricao: "Camarão.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "caranguejo-pb-p", nome: "🦀 Caranguejo", descricao: "Caranguejo.", preco: 45, recuperacao: { fome: 58, felicidade: 22, energia: 15 } },
                { id: "suco-pb-p", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "parnaiba-boteco": {
            id: "parnaiba-boteco",
            nome: "🍺 Boteco Parnaíba",
            endereco: "Rua 7 de Setembro, 200 - Centro, Parnaíba",
            horario: "17h às 02h",
            telefone: "(86) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-pb", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-pb", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-pb", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-pb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-pb", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "parnaiba-pizzaria": {
            id: "parnaiba-pizzaria",
            nome: "🍕 Pizzaria Parnaíba",
            endereco: "Av. Deputado Pinheiro Machado, 300 - Centro, Parnaíba",
            horario: "18h às 23h30",
            telefone: "(86) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-pb", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pb", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pb", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-pb", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-pb-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "parnaiba-cafe": {
            id: "parnaiba-cafe",
            nome: "☕ Café Parnaíba",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Parnaíba",
            horario: "08h às 20h",
            telefone: "(86) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-pb", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pb", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-pb", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-pb", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-pb-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "parnaiba-hamburguer": {
            id: "parnaiba-hamburguer",
            nome: "🍔 Hamburgueria Parnaíba",
            endereco: "Rua 10, 300 - Centro, Parnaíba",
            horario: "18h às 00h",
            telefone: "(86) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-pb", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-pb", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-pb-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-pb", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-pb", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "parnaiba-tapiocaria": {
            id: "parnaiba-tapiocaria",
            nome: "🥞 Tapiocaria Parnaíba",
            endereco: "Rua 15, 200 - Centro, Parnaíba",
            horario: "08h às 21h",
            telefone: "(86) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-pb", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-pb", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-pb", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-pb", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-pb-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "parnaiba-caseira": {
            id: "parnaiba-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Parnaíba",
            horario: "11h às 15h",
            telefone: "(86) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-pb", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-pb", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-pb", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-pb", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-pb-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-parnaiba": {
            id: "shopping-parnaiba",
            nome: "🛍️ Shopping Parnaíba - Food Court",
            endereco: "Av. Dr. João Silva Filho, 1000 - Centro, Parnaíba",
            horario: "10h às 22h",
            telefone: "(86) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-pb", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pb", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pb", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pb", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-pb-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-parnaiba": {
            id: "rodoviaria-parnaiba",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-343, km 10 - Centro, Parnaíba",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-pb", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-pb-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pb", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pb", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-pb-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== PICOS - 10 RESTAURANTES ====================
    "Picos": {
        // ========== 1. CENTRO - CULINÁRIA SERTANEJA ==========
        "picos-sertaneja": {
            id: "picos-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Rua Coronel Mariano, 200 - Centro, Picos",
            horario: "11h às 22h",
            telefone: "(89) 3222-1111",
            descricao: "Culinária sertaneja do semiárido piauiense. Especialidade em carne de sol, baião de dois e capote.",
            tipo: ["piauiense", "sertaneja", "nordestina", "tradicional", "familiar"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "carne-sol-pc", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 45, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "baiao-pc", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 38, recuperacao: { fome: 64, felicidade: 22, energia: 15 } },
                { id: "maria-isabel-pc", nome: "🍚 Maria Isabel", descricao: "Arroz com carne de sol.", preco: 42, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "capote-pc", nome: "🍗 Capote", descricao: "Capote assado.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 17 } },
                { id: "suco-pc", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "picos-churrascaria": {
            id: "picos-churrascaria",
            nome: "🥩 Churrascaria Picos",
            endereco: "Av. Getúlio Vargas, 500 - Centro, Picos",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(89) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 60,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-pc", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 65, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-pc", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 52, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "costela-pc", nome: "🍖 Costela", descricao: "Costela assada.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-pc", nome: "🥗 Buffet", descricao: "Buffet.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-pc-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "picos-boteco": {
            id: "picos-boteco",
            nome: "🍺 Boteco Picos",
            endereco: "Rua 7 de Setembro, 200 - Centro, Picos",
            horario: "17h às 02h",
            telefone: "(89) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-pc", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-pc", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-pc", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-pc", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-pc", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "picos-pizzaria": {
            id: "picos-pizzaria",
            nome: "🍕 Pizzaria Picos",
            endereco: "Av. Manoel de Sousa, 300 - Centro, Picos",
            horario: "18h às 23h30",
            telefone: "(89) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-pc", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pc", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pc", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-pc", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-pc-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "picos-cafe": {
            id: "picos-cafe",
            nome: "☕ Café Picos",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Picos",
            horario: "08h às 20h",
            telefone: "(89) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-pc", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pc", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-pc", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-pc", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-pc-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "picos-hamburguer": {
            id: "picos-hamburguer",
            nome: "🍔 Hamburgueria Picos",
            endereco: "Rua 10, 300 - Centro, Picos",
            horario: "18h às 00h",
            telefone: "(89) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-pc", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-pc", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-pc-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-pc", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-pc", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "picos-tapiocaria": {
            id: "picos-tapiocaria",
            nome: "🥞 Tapiocaria Picos",
            endereco: "Rua 15, 200 - Centro, Picos",
            horario: "08h às 21h",
            telefone: "(89) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-pc", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-pc", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-pc", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-pc", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-pc-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "picos-caseira": {
            id: "picos-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Picos",
            horario: "11h às 15h",
            telefone: "(89) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-pc", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-pc", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-pc", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-pc", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-pc-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-picos": {
            id: "shopping-picos",
            nome: "🛍️ Shopping Picos - Food Court",
            endereco: "Av. Getúlio Vargas, 1500 - Centro, Picos",
            horario: "10h às 22h",
            telefone: "(89) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-pc", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pc", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pc", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pc", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-pc-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-picos": {
            id: "rodoviaria-picos",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-020, km 300 - Centro, Picos",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-pc", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-pc-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pc", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pc", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-pc-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesPI;