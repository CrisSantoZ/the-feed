export const restaurantesMT = {
    // ==================== CUIABÁ (CAPITAL) - 20 RESTAURANTES ====================
    "Cuiabá": {
        // ========== 1. CENTRO - CULINÁRIA CUIABANA (PEIXE, MARIA IZABEL) ==========
        "centro-cuiabana": {
            id: "centro-cuiabana",
            nome: "🐟 Culinária Cuiabana",
            endereco: "Rua 13 de Junho, 500 - Centro, Cuiabá",
            horario: "11h às 22h",
            telefone: "(65) 3222-1111",
            descricao: "Restaurante tradicional com culinária cuiabana autêntica. Especialidades como Maria Izabel, peixes do Pantanal e caldo de piranha. Ambiente familiar e acolhedor.",
            tipo: ["cuiabana", "mato-grossense", "tradicional", "regional", "familiar"],
            preco_medio: 55,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "maria-izabel", nome: "🍚 Maria Izabel", descricao: "Arroz com peixe e banana da terra. Prato típico cuiabano.", preco: 48, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "caldo-piranha", nome: "🥣 Caldo de Piranha", descricao: "Caldo tradicional cuiabano com piranha e temperos.", preco: 25, recuperacao: { fome: 30, felicidade: 18, energia: 10 } },
                { id: "peixe-cuiaba", nome: "🐟 Peixe do Pantanal", descricao: "Peixe grelhado típico da região.", preco: 52, recuperacao: { fome: 65, felicidade: 25, energia: 17 } },
                { id: "arroz-carreteiro", nome: "🍚 Arroz Carreteiro", descricao: "Arroz com carne seca e bacon.", preco: 42, recuperacao: { fome: 65, felicidade: 22, energia: 15 } },
                { id: "caipirinha-cuiaba", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria Cuiabana",
            endereco: "Rua Joaquim Murtinho, 300 - Centro, Cuiabá",
            horario: "11h às 22h",
            telefone: "(65) 3333-2222",
            descricao: "Peixes frescos do Pantanal. Especialidade em peixes regionais.",
            tipo: ["peixaria", "cuiabana", "mato-grossense", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "pintado-cuiaba", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pacu-cuiaba", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 52, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "dourado-cuiaba", nome: "🐟 Dourado", descricao: "Dourado grelhado.", preco: 62, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "caldo-piranha-peix", nome: "🥣 Caldo de Piranha", descricao: "Caldo tradicional.", preco: 22, recuperacao: { fome: 28, felicidade: 16, energia: 9 } },
                { id: "suco-cuiaba", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. COXIPÓ - FRUTOS DO RIO ==========
        "coxipo-frutos": {
            id: "coxipo-frutos",
            nome: "🐟 Restaurante Coxipó",
            endereco: "Av. Coxipó, 1000 - Coxipó, Cuiabá",
            horario: "11h às 23h",
            telefone: "(65) 3444-3333",
            descricao: "Frutos do rio com vista para o Coxipó. Peixes do Pantanal.",
            tipo: ["peixaria", "cuiabana", "vista", "familiar"],
            preco_medium: 60,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "pintado-coxipo", nome: "🐟 Pintado na Brasa", descricao: "Pintado assado na brasa.", preco: 62, recuperacao: { fome: 72, felicidade: 28, energia: 19 } },
                { id: "pacu-coxipo", nome: "🐟 Pacu", descricao: "Pacu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "dorado-coxipo", nome: "🐟 Dourado", descricao: "Dourado.", preco: 65, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "arroz-carreteiro-cox", nome: "🍚 Arroz Carreteiro", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 58, felicidade: 20, energia: 14 } },
                { id: "caipirinha-coxipo", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. POÇÃO - CHURRASCARIA ==========
        "pocao-churrascaria": {
            id: "pocao-churrascaria",
            nome: "🥩 Churrascaria Poção",
            endereco: "Av. Fernando Corrêa, 1000 - Poção, Cuiabá",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(65) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 75,
            estrelas: 4.6,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-pocao", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-pocao", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-pocao", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-pocao", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-pocao", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. JARDIM ITÁLIA - BOTECO ==========
        "jardim-italia-boteco": {
            id: "jardim-italia-boteco",
            nome: "🍺 Boteco Jardim Itália",
            endereco: "Rua Jardim Itália, 300 - Jardim Itália, Cuiabá",
            horario: "17h às 02h",
            telefone: "(65) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 30,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-ji", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-ji", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-ji", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-ji", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-ji", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. BOSQUE DA SAÚDE - PIZZARIA ==========
        "bosque-saude-pizzaria": {
            id: "bosque-saude-pizzaria",
            nome: "🍕 Pizzaria Bosque",
            endereco: "Av. Historiador Rubens de Mendonça, 500 - Bosque da Saúde, Cuiabá",
            horario: "18h às 23h30",
            telefone: "(65) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 50,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-bs", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 46, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-bs", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-bs", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-bs", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-bs", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. CPA - HAMBURGUERIA ==========
        "cpa-hamburguer": {
            id: "cpa-hamburguer",
            nome: "🍔 Hamburgueria CPA",
            endereco: "Av. CPA, 1000 - CPA, Cuiabá",
            horario: "18h às 00h",
            telefone: "(65) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-cpa", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-cpa", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-cpa", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-cpa", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-cpa", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. GOIABEIRAS - CAFÉ REGIONAL ==========
        "goiabeiras-cafe": {
            id: "goiabeiras-cafe",
            nome: "☕ Café Goiabeiras",
            endereco: "Rua Goiabeiras, 300 - Goiabeiras, Cuiabá",
            horario: "08h às 20h",
            telefone: "(65) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-goi", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-goi", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-goi", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-goi", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-goi", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. PORTO - COMIDA PANTANEIRA ==========
        "porto-pantaneira": {
            id: "porto-pantaneira",
            nome: "🌿 Sabor Pantaneiro",
            endereco: "Rua Porto, 500 - Porto, Cuiabá",
            horário: "11h às 22h",
            telefone: "(65) 4000-9999",
            descricao: "Culinária pantaneira autêntica. Peixes do Pantanal e pratos típicos.",
            tipo: ["pantaneira", "cuiabana", "regional", "familiar"],
            preco_medium: 55,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "pintado-porto", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 60, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pacu-porto", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "caldo-piranha-porto", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico.", preco: 25, recuperacao: { fome: 30, felicidade: 18, energia: 10 } },
                { id: "arroz-carreteiro-porto", nome: "🍚 Arroz Carreteiro", descricao: "Arroz típico.", preco: 40, recuperacao: { fome: 60, felicidade: 20, energia: 14 } },
                { id: "suco-porto", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. CENTRO SUL - TAPIOCARIA ==========
        "centro-sul-tapiocaria": {
            id: "centro-sul-tapiocaria",
            nome: "🥞 Tapiocaria Centro Sul",
            endereco: "Av. Centro Sul, 200 - Centro Sul, Cuiabá",
            horario: "08h às 21h",
            telefone: "(65) 4111-0000",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-cs", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-cs", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-cs", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-cs", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-cs", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. VERDÃO - COMIDA CASEIRA ==========
        "verdao-caseira": {
            id: "verdao-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Verdão, 300 - Verdão, Cuiabá",
            horario: "11h às 15h",
            telefone: "(65) 4222-1111",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-vd", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-vd", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-vd", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-vd", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-vd", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 12. ALVORADA - COMIDA ÁRABE ==========
        "alvorada-arabe": {
            id: "alvorada-arabe",
            nome: "🧆 Al Balad Cuiabá",
            endereco: "Rua Alvorada, 300 - Alvorada, Cuiabá",
            horario: "11h às 23h",
            telefone: "(65) 4333-2222",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "banquete-alv", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "esfiha-alv", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 8 } },
                { id: "kibe-alv", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-alv", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "suco-alv", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. QUILOMBO - PEIXARIA ==========
        "quilombo-peixaria": {
            id: "quilombo-peixaria",
            nome: "🐟 Peixaria Quilombo",
            endereco: "Rua Quilombo, 500 - Quilombo, Cuiabá",
            horario: "11h às 21h",
            telefone: "(65) 4444-3333",
            descricao: "Peixes frescos do Pantanal.",
            tipo: ["peixaria", "cuiabana", "familiar"],
            preco_medium: 45,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-quil", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-quil", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 50, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-quil", nome: "🍲 Moqueca", descricao: "Moqueca cuiabana.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caldo-piranha-quil", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico.", preco: 22, recuperacao: { fome: 28, felicidade: 16, energia: 9 } },
                { id: "suco-quil", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. MORRO DA LUZ - RESTAURANTE POPULAR ==========
        "morro-luz-popular": {
            id: "morro-luz-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Morro da Luz, 500 - Morro da Luz, Cuiabá",
            horario: "11h às 14h",
            telefone: "(65) 4555-4444",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1240,
            cardapio: [
                { id: "prato-feito-ml", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ml", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ml", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ml", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ml", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 15. SANTA ROSA - COMIDA ITALIANA ==========
        "santa-rosa-italiana": {
            id: "santa-rosa-italiana",
            nome: "🍝 Cantina Santa Rosa",
            endereco: "Rua Santa Rosa, 300 - Santa Rosa, Cuiabá",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(65) 4666-5555",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medium: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-sr", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-sr", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-sr", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-sr", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-sr", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 16. PEDRA 90 - LANCHONETE ==========
        "pedra90-lanchonete": {
            id: "pedra90-lanchonete",
            nome: "🍔 Lanchonete Pedra 90",
            endereco: "Rua Pedra 90, 500 - Pedra 90, Cuiabá",
            horario: "08h às 22h",
            telefone: "(65) 4777-6666",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-p90", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-p90", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-p90", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-p90", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-p90", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SHOPPING CUIABÁ ==========
        "shopping-cuiaba": {
            id: "shopping-cuiaba",
            nome: "🛍️ Shopping Cuiabá - Food Court",
            endereco: "Av. Governador Dante Martins de Oliveira, 1000 - Centro, Cuiabá",
            horario: "10h às 22h",
            telefone: "(65) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-cba", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cba", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-cba", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-cba", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-cba", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. SHOPPING ESTAÇÃO ==========
        "shopping-estacao": {
            id: "shopping-estacao",
            nome: "🛍️ Shopping Estação - Food Court",
            endereco: "Av. Historiador Rubens de Mendonça, 2000 - Centro, Cuiabá",
            horario: "10h às 22h",
            telefone: "(65) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-est", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-est", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-est", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-est", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-est", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-cuiaba": {
            id: "aeroporto-cuiaba",
            nome: "✈️ Aeroporto Marechal Rondon - Praça de Alimentação",
            endereco: "Av. João Ponce de Arruda, s/n - Aeroporto, Várzea Grande (Região Metropolitana)",
            horario: "04h às 23h",
            telefone: "(65) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-mt", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-mt", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-mt", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-mt", nome: "☕ Café Mato-grossense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-mt", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-cuiaba": {
            id: "rodoviaria-cuiaba",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Contorno, 500 - Centro, Cuiabá",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-cba", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-cba-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-cba", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-cba", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-cba-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },
    // ==================== VÁRZEA GRANDE - 10 RESTAURANTES ====================
    "Várzea Grande": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "varzea-churrascaria": {
            id: "varzea-churrascaria",
            nome: "🥩 Churrascaria Várzea Grande",
            endereco: "Av. Couto Magalhães, 500 - Centro, Várzea Grande",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(65) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-vg", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-vg", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-vg", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-vg", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-vg", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA PANTANEIRA ==========
        "varzea-pantaneira": {
            id: "varzea-pantaneira",
            nome: "🐟 Sabor Pantaneiro",
            endereco: "Rua 15 de Novembro, 300 - Centro, Várzea Grande",
            horario: "11h às 22h",
            telefone: "(65) 3333-2222",
            descricao: "Culinária pantaneira autêntica. Peixes do Pantanal e caldo de piranha.",
            tipo: ["pantaneira", "cuiabana", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "pintado-vg", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pacu-vg", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 52, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caldo-piranha-vg", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico.", preco: 22, recuperacao: { fome: 28, felicidade: 16, energia: 9 } },
                { id: "arroz-carreteiro-vg", nome: "🍚 Arroz Carreteiro", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 58, felicidade: 20, energia: 14 } },
                { id: "suco-vg-pan", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "varzea-boteco": {
            id: "varzea-boteco",
            nome: "🍺 Boteco Várzea Grande",
            endereco: "Rua 7 de Setembro, 200 - Centro, Várzea Grande",
            horario: "17h às 02h",
            telefone: "(65) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-vg", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-vg", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-vg", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-vg", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-vg", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "varzea-pizzaria": {
            id: "varzea-pizzaria",
            nome: "🍕 Pizzaria Várzea Grande",
            endereco: "Av. Dom Orlando Chaves, 300 - Centro, Várzea Grande",
            horario: "18h às 23h30",
            telefone: "(65) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-vg", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-vg", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-vg", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-vg", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-vg-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "varzea-cafe": {
            id: "varzea-cafe",
            nome: "☕ Café Várzea Grande",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Várzea Grande",
            horario: "08h às 20h",
            telefone: "(65) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-vg", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-vg", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-vg", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-vg", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-vg-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "varzea-hamburguer": {
            id: "varzea-hamburguer",
            nome: "🍔 Hamburgueria Várzea",
            endereco: "Rua Rio Branco, 300 - Centro, Várzea Grande",
            horario: "18h às 00h",
            telefone: "(65) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-vg", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-vg", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-vg-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-vg", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-vg", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "varzea-tapiocaria": {
            id: "varzea-tapiocaria",
            nome: "🥞 Tapiocaria Várzea",
            endereco: "Rua São Paulo, 200 - Centro, Várzea Grande",
            horario: "08h às 21h",
            telefone: "(65) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-vg", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-vg", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-vg", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-vg", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-vg-tapi", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "varzea-caseira": {
            id: "varzea-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 5, 200 - Centro, Várzea Grande",
            horario: "11h às 15h",
            telefone: "(65) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-vg", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-vg", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-vg", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-vg", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-vg-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-varzea": {
            id: "shopping-varzea",
            nome: "🛍️ Shopping Várzea Grande - Food Court",
            endereco: "Av. Couto Magalhães, 1500 - Centro, Várzea Grande",
            horario: "10h às 22h",
            telefone: "(65) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-vg", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-vg", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-vg", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-vg", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-vg-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-varzea": {
            id: "rodoviaria-varzea",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Arthur Bernardes, 500 - Centro, Várzea Grande",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-vg", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-vg-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-vg", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-vg", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-vg-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== RONDONÓPOLIS - 10 RESTAURANTES ====================
    "Rondonópolis": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "rondonopolis-churrascaria": {
            id: "rondonopolis-churrascaria",
            nome: "🥩 Churrascaria Rondonópolis",
            endereco: "Av. Lions Clube, 500 - Centro, Rondonópolis",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(66) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-rdp", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-rdp", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-rdp", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-rdp", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-rdp", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA REGIONAL ==========
        "rondonopolis-regional": {
            id: "rondonopolis-regional",
            nome: "🍚 Sabor Sul-Mato-Grossense",
            endereco: "Av. Lions Clube, 1000 - Centro, Rondonópolis",
            horario: "11h às 22h",
            telefone: "(66) 3333-2222",
            descricao: "Culinária regional do sul mato-grossense. Peixes e pratos típicos.",
            tipo: ["mato-grossense", "regional", "peixes", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "pintado-rdp", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pacu-rdp", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 50, recuperacao: { fome: 63, felicidade: 23, energia: 15 } },
                { id: "arroz-carreteiro-rdp", nome: "🍚 Arroz Carreteiro", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 58, felicidade: 20, energia: 14 } },
                { id: "caldo-piranha-rdp", nome: "🥣 Caldo de Piranha", descricao: "Caldo tradicional.", preco: 20, recuperacao: { fome: 26, felicidade: 15, energia: 8 } },
                { id: "suco-rdp-reg", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "rondonopolis-boteco": {
            id: "rondonopolis-boteco",
            nome: "🍺 Boteco Rondonópolis",
            endereco: "Rua 12, 200 - Centro, Rondonópolis",
            horario: "17h às 02h",
            telefone: "(66) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-rdp", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-rdp", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-rdp", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-rdp", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-rdp", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "rondonopolis-pizzaria": {
            id: "rondonopolis-pizzaria",
            nome: "🍕 Pizzaria Rondonópolis",
            endereco: "Av. Lions Clube, 800 - Centro, Rondonópolis",
            horario: "18h às 23h30",
            telefone: "(66) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-rdp", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-rdp", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-rdp", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-rdp", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-rdp-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "rondonopolis-cafe": {
            id: "rondonopolis-cafe",
            nome: "☕ Café Rondonópolis",
            endereco: "Rua 10, 200 - Centro, Rondonópolis",
            horario: "08h às 20h",
            telefone: "(66) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-rdp", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-rdp", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-rdp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-rdp", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-rdp-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "rondonopolis-hamburguer": {
            id: "rondonopolis-hamburguer",
            nome: "🍔 Hamburgueria Rondonópolis",
            endereco: "Rua 15, 300 - Centro, Rondonópolis",
            horario: "18h às 00h",
            telefone: "(66) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-rdp", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-rdp", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-rdp-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-rdp", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-rdp", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "rondonopolis-tapiocaria": {
            id: "rondonopolis-tapiocaria",
            nome: "🥞 Tapiocaria Rondonópolis",
            endereco: "Rua 18, 200 - Centro, Rondonópolis",
            horario: "08h às 21h",
            telefone: "(66) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-rdp", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-rdp", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-rdp", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-rdp", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-rdp-tapi", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "rondonopolis-caseira": {
            id: "rondonopolis-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 22, 200 - Centro, Rondonópolis",
            horario: "11h às 15h",
            telefone: "(66) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-rdp", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-rdp", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-rdp", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-rdp", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-rdp-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-rondonopolis": {
            id: "shopping-rondonopolis",
            nome: "🛍️ Shopping Rondonópolis - Food Court",
            endereco: "Av. Lions Clube, 2000 - Centro, Rondonópolis",
            horario: "10h às 22h",
            telefone: "(66) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-rdp", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-rdp", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-rdp", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-rdp", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-rdp-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-rondonopolis": {
            id: "rodoviaria-rondonopolis",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-163, km 300 - Centro, Rondonópolis",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-rdp", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-rdp-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-rdp", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-rdp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-rdp-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesMT;