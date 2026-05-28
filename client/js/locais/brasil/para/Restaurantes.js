export const restaurantesPA = {
    // ==================== BELÉM (CAPITAL) - 20 RESTAURANTES ====================
    "Belém": {
        // ========== 1. CENTRO HISTÓRICO (VER-O-PESO) - CULINÁRIA PARAENSE ==========
        "ver-o-peso-paraense": {
            id: "ver-o-peso-paraense",
            nome: "🍲 Culinária Paraense",
            endereco: "Rua do Ver-o-Peso, 200 - Centro Histórico, Belém",
            horario: "11h às 22h",
            telefone: "(91) 3222-1111",
            descricao: "Restaurante tradicional próximo ao Mercado Ver-o-Peso. Especialidades paraenses como pato no tucupi, maniçoba e tacacá. Ambiente histórico.",
            tipo: ["paraense", "amazonica", "tradicional", "regional", "turístico"],
            preco_medio: 55,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "pato-tucupi", nome: "🦆 Pato no Tucupi", descricao: "Pato cozido no tucupi com jambu e farinha d'água.", preco: 58, recuperacao: { fome: 75, felicidade: 30, energia: 20 } },
                { id: "manicoba-para", nome: "🥬 Maniçoba", descricao: "Folha de mandioca cozida com carnes defumadas. Prato indígena.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 16 } },
                { id: "tacaca-para", nome: "🥣 Tacacá", descricao: "Tucupi quente com goma de tapioca, camarão seco e jambu.", preco: 22, recuperacao: { fome: 28, felicidade: 20, energia: 12 } },
                { id: "vatapa-para", nome: "🥣 Vatapá Paraense", descricao: "Vatapá de peixe e camarão com azeite de dendê.", preco: 32, recuperacao: { fome: 45, felicidade: 22, energia: 12 } },
                { id: "suco-para", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. VER-O-PESO - PEIXARIA ==========
        "ver-o-peso-peixaria": {
            id: "ver-o-peso-peixaria",
            nome: "🐟 Peixaria do Ver-o-Peso",
            endereco: "Mercado Ver-o-Peso, Box 50 - Centro, Belém",
            horario: "10h às 18h",
            telefone: "(91) 3333-2222",
            descricao: "Peixes frescos da Amazônia. Tambaqui, pirarucu, filhote e tucunaré.",
            tipo: ["peixaria", "paraense", "amazonica", "popular"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 2340,
            cardapio: [
                { id: "tambaqui-vp", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-vp", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "filhote-vp", nome: "🐟 Filhote", descricao: "Filhote grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "tucunare-vp", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-vp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. BATISTA CAMPOS - FRUTOS DO RIO ==========
        "batista-campos-frutos": {
            id: "batista-campos-frutos",
            nome: "🐟 Restaurante Batista Campos",
            endereco: "Praça Batista Campos, 500 - Batista Campos, Belém",
            horario: "11h às 23h",
            telefone: "(91) 3444-3333",
            descricao: "Frutos do rio com vista para a praça. Especialidade em peixes regionais.",
            tipo: ["peixaria", "paraense", "vista", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "tambaqui-bc", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-bc", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 58, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "camarao-bc", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 52, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "moqueca-bc", nome: "🍲 Moqueca", descricao: "Moqueca paraense.", preco: 62, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "caipirinha-bc", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. NAZARÉ - CHURRASCARIA ==========
        "nazare-churrascaria": {
            id: "nazare-churrascaria",
            nome: "🥩 Churrascaria Nazaré",
            endereco: "Av. Nazaré, 1000 - Nazaré, Belém",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(91) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-naz", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-naz", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-naz", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-naz", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-naz", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. UMARIZAL - BOTECO ==========
        "umarizal-boteco": {
            id: "umarizal-boteco",
            nome: "🍺 Boteco Umarizal",
            endereco: "Travessa Umarizal, 300 - Umarizal, Belém",
            horario: "17h às 03h",
            telefone: "(91) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-um", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-um", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-um", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-um", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-um", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. CIDADE VELHA - PIZZARIA ==========
        "cidade-velha-pizzaria": {
            id: "cidade-velha-pizzaria",
            nome: "🍕 Pizzaria Cidade Velha",
            endereco: "Rua Siqueira Mendes, 200 - Cidade Velha, Belém",
            horario: "18h às 23h30",
            telefone: "(91) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-cv", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-cv", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-cv", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-cv", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-cv", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. REDUTO - HAMBURGUERIA ==========
        "reduto-hamburguer": {
            id: "reduto-hamburguer",
            nome: "🍔 Hamburgueria Reduto",
            endereco: "Travessa Reduto, 300 - Reduto, Belém",
            horario: "18h às 00h",
            telefone: "(91) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-red", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-red", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-red", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-red", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-red", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. PEDREIRA - CAFÉ REGIONAL ==========
        "pedreira-cafe": {
            id: "pedreira-cafe",
            nome: "☕ Café Pedreira",
            endereco: "Rua Pedreira, 300 - Pedreira, Belém",
            horario: "08h às 20h",
            telefone: "(91) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-ped", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ped", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ped", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ped", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ped", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. GUAMÁ - TAPIOCARIA ==========
        "guama-tapiocaria": {
            id: "guama-tapiocaria",
            nome: "🥞 Tapiocaria Guamá",
            endereco: "Rua Guamá, 500 - Guamá, Belém",
            horario: "08h às 21h",
            telefone: "(91) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-gu", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-gu", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-gu", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-gu", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-gu", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. CONDOR - COMIDA CASEIRA ==========
        "condor-caseira": {
            id: "condor-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Condor, 500 - Condor, Belém",
            horario: "11h às 15h",
            telefone: "(91) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-co", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-co", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-co", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-co", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-co", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. MARAMBAIA - COMIDA ÁRABE ==========
        "marambaia-arabe": {
            id: "marambaia-arabe",
            nome: "🧆 Al Balad Belém",
            endereco: "Av. Marambaia, 300 - Marambaia, Belém",
            horario: "11h às 23h",
            telefone: "(91) 4222-1111",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "banquete-mar", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "esfiha-mar", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 8 } },
                { id: "kibe-mar", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-mar", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "suco-mar", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. MANGUEIRÃO - PEIXARIA ==========
        "mangueirao-peixaria": {
            id: "mangueirao-peixaria",
            nome: "🐟 Peixaria Mangueirão",
            endereco: "Av. Augusto Montenegro, 1000 - Mangueirão, Belém",
            horario: "11h às 21h",
            telefone: "(91) 4333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "paraense", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-man", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-man", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-man", nome: "🍲 Moqueca", descricao: "Moqueca paraense.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "tacaca-man", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 20, recuperacao: { fome: 26, felicidade: 15, energia: 8 } },
                { id: "suco-man", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. JURUNAS - RESTAURANTE POPULAR ==========
        "jurunas-popular": {
            id: "jurunas-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Jurunas, 500 - Jurunas, Belém",
            horario: "11h às 14h",
            telefone: "(91) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1240,
            cardapio: [
                { id: "prato-feito-ju", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ju", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ju", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ju", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ju", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. FÁTIMA - COMIDA ITALIANA ==========
        "fatima-italiana": {
            id: "fatima-italiana",
            nome: "🍝 Cantina Fátima",
            endereco: "Rua Fátima, 300 - Fátima, Belém",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(91) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-fa", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-fa", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-fa", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-fa", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-fa", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. TELÉGRAFO - LANCHONETE ==========
        "telegrafo-lanchonete": {
            id: "telegrafo-lanchonete",
            nome: "🍔 Lanchonete Telégrafo",
            endereco: "Rua Telégrafo, 500 - Telégrafo, Belém",
            horario: "08h às 22h",
            telefone: "(91) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-te", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-te", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-te", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-te", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-te", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SHOPPING BOSQUE GRÃO-PARÁ ==========
        "bosque-grao-para": {
            id: "bosque-grao-para",
            nome: "🛍️ Shopping Bosque Grão-Pará - Food Court",
            endereco: "Av. Augusto Montenegro, 5000 - Mangueirão, Belém",
            horario: "10h às 22h",
            telefone: "(91) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-bgp", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-bgp", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-bgp", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-bgp", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-bgp", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SHOPPING PÁTIO BELÉM ==========
        "patio-belem": {
            id: "patio-belem",
            nome: "🛍️ Shopping Pátio Belém - Food Court",
            endereco: "Av. Boulevard Castilhos França, 600 - Campina, Belém",
            horario: "10h às 22h",
            telefone: "(91) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-pb", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pb", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-pb", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pb", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-pb", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. PARQUE SHOPPING ==========
        "parque-shopping-belem": {
            id: "parque-shopping-belem",
            nome: "🛍️ Parque Shopping Belém - Food Court",
            endereco: "Av. Augusto Montenegro, 4500 - Mangueirão, Belém",
            horario: "10h às 22h",
            telefone: "(91) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-ps", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ps", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ps", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ps", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ps", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-belem": {
            id: "aeroporto-belem",
            nome: "✈️ Aeroporto de Belém (Val-de-Cans) - Praça de Alimentação",
            endereco: "Av. Júlio César, s/n - Val-de-Cans, Belém",
            horario: "04h às 23h",
            telefone: "(91) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-aero-pa", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-pa", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-pa", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-pa", nome: "☕ Café Paraense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-pa", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. ESTAÇÃO DAS DOCAS - QUIOSQUE ==========
        "estacao-docas-quiosque": {
            id: "estacao-docas-quiosque",
            nome: "🏞️ Estação das Docas - Quiosque",
            endereco: "Estação das Docas - Boulevard Castilhos França, Belém",
            horario: "10h às 22h",
            telefone: "(91) 5111-0000",
            descricao: "Quiosque na Estação das Docas.",
            tipo: ["petiscos", "turístico", "casual", "vista"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 1450,
            cardapio: [
                { id: "pastel-ed", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 15, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "tacaca-ed", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 20, recuperacao: { fome: 26, felicidade: 16, energia: 9 } },
                { id: "suco-ed", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "camarao-ed", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "cafe-ed", nome: "☕ Café", descricao: "Café.", preco: 7, recuperacao: { sede: 8, energia: 10, felicidade: 7 } }
            ]
        }
    },

    // ==================== ANANINDEUA - 10 RESTAURANTES ====================
    "Ananindeua": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "ananindeua-churrascaria": {
            id: "ananindeua-churrascaria",
            nome: "🥩 Churrascaria Ananindeua",
            endereco: "BR-316, 1000 - Centro, Ananindeua",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(91) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-ana", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-ana", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-ana", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-ana", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-ana", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA PARAENSE ==========
        "ananindeua-paraense": {
            id: "ananindeua-paraense",
            nome: "🍲 Sabor Paraense",
            endereco: "Av. Independência, 500 - Centro, Ananindeua",
            horario: "11h às 22h",
            telefone: "(91) 3333-2222",
            descricao: "Culinária paraense autêntica.",
            tipo: ["paraense", "amazonica", "regional", "familiar"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "pato-tucupi-ana", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "manicoba-ana", nome: "🥬 Maniçoba", descricao: "Maniçoba.", preco: 45, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "tacaca-ana", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 20, recuperacao: { fome: 26, felicidade: 16, energia: 9 } },
                { id: "vatapa-ana", nome: "🥣 Vatapá", descricao: "Vatapá.", preco: 28, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "suco-ana-p", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "ananindeua-boteco": {
            id: "ananindeua-boteco",
            nome: "🍺 Boteco Ananindeua",
            endereco: "Rua 15 de Novembro, 200 - Centro, Ananindeua",
            horario: "17h às 02h",
            telefone: "(91) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-ana", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ana", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ana", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ana", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ana", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "ananindeua-pizzaria": {
            id: "ananindeua-pizzaria",
            nome: "🍕 Pizzaria Ananindeua",
            endereco: "Av. Barão do Rio Branco, 300 - Centro, Ananindeua",
            horario: "18h às 23h30",
            telefone: "(91) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-ana", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ana", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ana", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ana", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ana-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "ananindeua-cafe": {
            id: "ananindeua-cafe",
            nome: "☕ Café Ananindeua",
            endereco: "Rua Doutor Francisco Chagas, 200 - Centro, Ananindeua",
            horario: "08h às 20h",
            telefone: "(91) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ana", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ana", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ana", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ana", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ana-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "ananindeua-hamburguer": {
            id: "ananindeua-hamburguer",
            nome: "🍔 Hamburgueria Ananindeua",
            endereco: "Rua 20, 300 - Centro, Ananindeua",
            horario: "18h às 00h",
            telefone: "(91) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-ana", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-ana", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-ana-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-ana", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-ana", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "ananindeua-tapiocaria": {
            id: "ananindeua-tapiocaria",
            nome: "🥞 Tapiocaria Ananindeua",
            endereco: "Rua 25, 200 - Centro, Ananindeua",
            horario: "08h às 21h",
            telefone: "(91) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-ana", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ana", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ana", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ana", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ana-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "ananindeua-caseira": {
            id: "ananindeua-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 30, 200 - Centro, Ananindeua",
            horario: "11h às 15h",
            telefone: "(91) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-ana", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ana", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ana", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ana", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ana-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-ananindeua": {
            id: "shopping-ananindeua",
            nome: "🛍️ Shopping Ananindeua - Food Court",
            endereco: "BR-316, 2000 - Centro, Ananindeua",
            horario: "10h às 22h",
            telefone: "(91) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ana", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ana", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ana", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ana", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ana-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-ananindeua": {
            id: "rodoviaria-ananindeua",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-316, 2500 - Centro, Ananindeua",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ana", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ana-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ana", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ana", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ana-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== SANTARÉM - 10 RESTAURANTES ====================
    "Santarém": {
        // ========== 1. CENTRO - PEIXES DO TAPAJÓS ==========
        "santarem-peixes": {
            id: "santarem-peixes",
            nome: "🐟 Peixaria do Tapajós",
            endereco: "Av. Tapajós, 500 - Centro, Santarém",
            horario: "11h às 22h",
            telefone: "(93) 3222-1111",
            descricao: "Peixes frescos do rio Tapajós. Tambaqui, pirarucu, filhote e tucunaré.",
            tipo: ["peixaria", "paraense", "regional", "familiar"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-st", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-st", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "filhote-st", nome: "🐟 Filhote", descricao: "Filhote grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "tucunare-st", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-st", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CULINÁRIA REGIONAL ==========
        "santarem-regional": {
            id: "santarem-regional",
            nome: "🍲 Sabor Tapajó",
            endereco: "Rua Floriano Peixoto, 300 - Centro, Santarém",
            horario: "11h às 22h",
            telefone: "(93) 3333-2222",
            descricao: "Culinária regional do Tapajós.",
            tipo: ["paraense", "regional", "familiar"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "pato-tucupi-st", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "manicoba-st", nome: "🥬 Maniçoba", descricao: "Maniçoba.", preco: 45, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "tacaca-st", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 20, recuperacao: { fome: 26, felicidade: 16, energia: 9 } },
                { id: "vatapa-st", nome: "🥣 Vatapá", descricao: "Vatapá.", preco: 28, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "suco-st-reg", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "santarem-boteco": {
            id: "santarem-boteco",
            nome: "🍺 Boteco Santarém",
            endereco: "Rua 24 de Outubro, 200 - Centro, Santarém",
            horario: "17h às 02h",
            telefone: "(93) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-st", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-st", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-st", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-st", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-st", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "santarem-pizzaria": {
            id: "santarem-pizzaria",
            nome: "🍕 Pizzaria Santarém",
            endereco: "Av. Mendonça Furtado, 300 - Centro, Santarém",
            horario: "18h às 23h30",
            telefone: "(93) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-st", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-st", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-st", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-st", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-st-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "santarem-cafe": {
            id: "santarem-cafe",
            nome: "☕ Café Santarém",
            endereco: "Rua Galdino Veloso, 200 - Centro, Santarém",
            horario: "08h às 20h",
            telefone: "(93) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-st", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-st", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-st", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-st", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-st-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "santarem-hamburguer": {
            id: "santarem-hamburguer",
            nome: "🍔 Hamburgueria Santarém",
            endereco: "Rua Presidente Vargas, 300 - Centro, Santarém",
            horario: "18h às 00h",
            telefone: "(93) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-st", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-st", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-st-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-st", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-st", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "santarem-tapiocaria": {
            id: "santarem-tapiocaria",
            nome: "🥞 Tapiocaria Santarém",
            endereco: "Rua 15 de Agosto, 200 - Centro, Santarém",
            horario: "08h às 21h",
            telefone: "(93) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-st", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-st", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-st", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-st", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-st-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "santarem-caseira": {
            id: "santarem-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 18, 200 - Centro, Santarém",
            horario: "11h às 15h",
            telefone: "(93) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-st", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-st", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-st", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-st", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-st-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-santarem": {
            id: "shopping-santarem",
            nome: "🛍️ Shopping Santarém - Food Court",
            endereco: "Av. Mendonça Furtado, 1500 - Centro, Santarém",
            horario: "10h às 22h",
            telefone: "(93) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-st", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-st", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-st", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-st", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-st-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-santarem": {
            id: "rodoviaria-santarem",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-163, km 800 - Centro, Santarém",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-st", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-st-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-st", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-st", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-st-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== MARABÁ - 10 RESTAURANTES ====================
    "Marabá": {
        // ========== 1. CENTRO - PEIXES DO RIO ITACAÚNAS ==========
        "maraba-peixes": {
            id: "maraba-peixes",
            nome: "🐟 Peixaria Marabá",
            endereco: "Av. Itacaúnas, 500 - Centro, Marabá",
            horario: "11h às 22h",
            telefone: "(94) 3222-1111",
            descricao: "Peixes frescos do rio Itacaúnas. Especialidade em tambaqui e pirarucu.",
            tipo: ["peixaria", "paraense", "regional", "familiar"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tambaqui-mb", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-mb", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "camarao-mb", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-mb", nome: "🍲 Moqueca", descricao: "Moqueca paraense.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "suco-mb", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA REGIONAL ==========
        "maraba-regional": {
            id: "maraba-regional",
            nome: "🍲 Sabor Marabaense",
            endereco: "Rua 7 de Setembro, 300 - Centro, Marabá",
            horario: "11h às 22h",
            telefone: "(94) 3333-2222",
            descricao: "Culinária regional marabaense.",
            tipo: ["paraense", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "pato-tucupi-mb", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "manicoba-mb", nome: "🥬 Maniçoba", descricao: "Maniçoba.", preco: 45, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "tacaca-mb", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 20, recuperacao: { fome: 26, felicidade: 16, energia: 9 } },
                { id: "vatapa-mb", nome: "🥣 Vatapá", descricao: "Vatapá.", preco: 28, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "suco-mb-reg", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "maraba-boteco": {
            id: "maraba-boteco",
            nome: "🍺 Boteco Marabá",
            endereco: "Rua 15 de Novembro, 200 - Centro, Marabá",
            horario: "17h às 02h",
            telefone: "(94) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-mb", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-mb", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-mb", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-mb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-mb", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "maraba-pizzaria": {
            id: "maraba-pizzaria",
            nome: "🍕 Pizzaria Marabá",
            endereco: "Av. Santos Dumont, 300 - Centro, Marabá",
            horario: "18h às 23h30",
            telefone: "(94) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-mb", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-mb", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-mb", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-mb", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-mb-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "maraba-cafe": {
            id: "maraba-cafe",
            nome: "☕ Café Marabá",
            endereco: "Rua 13 de Maio, 200 - Centro, Marabá",
            horario: "08h às 20h",
            telefone: "(94) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-mb", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-mb", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-mb", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-mb", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-mb-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "maraba-hamburguer": {
            id: "maraba-hamburguer",
            nome: "🍔 Hamburgueria Marabá",
            endereco: "Rua 18, 300 - Centro, Marabá",
            horario: "18h às 00h",
            telefone: "(94) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-mb", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-mb", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-mb-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-mb", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-mb", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "maraba-tapiocaria": {
            id: "maraba-tapiocaria",
            nome: "🥞 Tapiocaria Marabá",
            endereco: "Rua 22, 200 - Centro, Marabá",
            horario: "08h às 21h",
            telefone: "(94) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-mb", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-mb", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-mb", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-mb", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-mb-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "maraba-caseira": {
            id: "maraba-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 25, 200 - Centro, Marabá",
            horario: "11h às 15h",
            telefone: "(94) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-mb", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-mb", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-mb", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-mb", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-mb-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-maraba": {
            id: "shopping-maraba",
            nome: "🛍️ Shopping Marabá - Food Court",
            endereco: "Av. Itacaúnas, 2000 - Centro, Marabá",
            horario: "10h às 22h",
            telefone: "(94) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-mb", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-mb", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-mb", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-mb", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-mb-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-maraba": {
            id: "rodoviaria-maraba",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-230, km 200 - Centro, Marabá",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-mb", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-mb-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-mb", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-mb", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-mb-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesPA;