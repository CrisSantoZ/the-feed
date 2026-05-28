export const restaurantesES = {
    // ==================== VITÓRIA (CAPITAL) - 20 RESTAQUÊ? RESTAURANTES ====================
    "Vitória": {
        // ========== 1. CENTRO - CULINÁRIA CAPIXABA (MOQUECA CAPIXABA) ==========
        "centro-capixaba": {
            id: "centro-capixaba",
            nome: "🍲 Moqueca Capixaba",
            endereco: "Rua Sete de Setembro, 500 - Centro, Vitória",
            horario: "11h às 22h",
            telefone: "(27) 3222-1111",
            descricao: "Restaurante tradicional especializado em moqueca capixaba. Prato típico do Espírito Santo feito em panela de barro. Ambiente familiar e acolhedor.",
            tipo: ["capixaba", "frutos-do-mar", "tradicional", "familiar", "turístico"],
            preco_medio: 75,
            estrelas: 4.8,
            avaliacoes: 3120,
            cardapio: [
                { id: "moqueca-capixaba", nome: "🍲 Moqueca Capixaba Tradicional", descricao: "Peixe e camarão cozidos com urucum, coentro, tomate, cebola. Feita em panela de barro. Acompanha arroz, pirão e farofa.", preco: 78, recuperacao: { fome: 85, felicidade: 34, energia: 22 } },
                { id: "moqueca-peixe", nome: "🐟 Moqueca de Peixe", descricao: "Moqueca de peixe fresco da costa capixaba.", preco: 68, recuperacao: { fome: 78, felicidade: 30, energia: 20 } },
                { id: "moqueca-camarao", nome: "🍤 Moqueca de Camarão", descricao: "Moqueca de camarão com leite de coco.", preco: 72, recuperacao: { fome: 80, felicidade: 32, energia: 21 } },
                { id: "casquinha-siri", nome: "🦀 Casquinha de Siri", descricao: "Carne de siri refogada gratinada.", preco: 28, recuperacao: { fome: 30, felicidade: 18, energia: 10 } },
                { id: "caipirinha-capixaba", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria Vitória",
            endereco: "Av. Jerônimo Monteiro, 300 - Centro, Vitória",
            horario: "11h às 22h",
            telefone: "(27) 3333-2222",
            descricao: "Peixes frescos da costa capixaba. Tradição em frutos do mar.",
            tipo: ["peixaria", "capixaba", "frutos-do-mar", "familiar"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "peixe-vix", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-vix", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 55, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "siri-vix", nome: "🦀 Siri", descricao: "Siri desfiado.", preco: 35, recuperacao: { fome: 40, felicidade: 18, energia: 12 } },
                { id: "pirão-vix", nome: "🥣 Pirão", descricao: "Pirão de peixe.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-vix", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PRAIA DO CANTO - FRUTOS DO MAR ==========
        "praia-canto-frutos": {
            id: "praia-canto-frutos",
            nome: "🐟 Restaurante Praia do Canto",
            endereco: "Rua Aleixo Neto, 500 - Praia do Canto, Vitória",
            horario: "11h às 23h",
            telefone: "(27) 3444-3333",
            descricao: "Frutos do mar com vista para o mar. Lagosta, camarão e peixes nobres.",
            tipo: ["frutos-do-mar", "capixaba", "vista", "premium", "romântico"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 2340,
            cardapio: [
                { id: "lagosta-pc", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga.", preco: 135, recuperacao: { fome: 88, felicidade: 42, energia: 28 } },
                { id: "camarao-pc", nome: "🍤 Camarão", descricao: "Camarão internacional.", preco: 78, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "moqueca-pc", nome: "🍲 Moqueca", descricao: "Moqueca capixaba.", preco: 85, recuperacao: { fome: 82, felicidade: 34, energia: 22 } },
                { id: "peixe-pc", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 65, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-pc", nome: "🍹 Caipirinha", descricao: "Caipirinha premium.", preco: 22, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },
        
        // ========== 4. JARDIM DA PENHA - PEIXARIA ==========
        "jardim-penha-peixaria": {
            id: "jardim-penha-peixaria",
            nome: "🐟 Peixaria Jardim",
            endereco: "Av. Prof. Fernando Duarte Rabelo, 300 - Jardim da Penha, Vitória",
            horario: "11h às 22h",
            telefone: "(27) 3555-4444",
            descricao: "Peixaria tradicional no bairro Jardim da Penha.",
            tipo: ["peixaria", "capixaba", "frutos-do-mar", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                { id: "tambaqui-jp", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "pirarucu-jp", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "camarao-jp", nome: "🍤 Camarão", descricao: "Camarão.", preco: 48, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "moqueca-jp", nome: "🍲 Moqueca", descricao: "Moqueca capixaba.", preco: 65, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "suco-jp", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. MATA DA PRAIA - CHURRASCARIA ==========
        "mata-praia-churrascaria": {
            id: "mata-praia-churrascaria",
            nome: "🥩 Churrascaria Mata da Praia",
            endereco: "Rua Desembargador Mário da Silva Nunes, 500 - Mata da Praia, Vitória",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(27) 3666-5555",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-mp", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-mp", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-mp", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-mp", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-mp", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. SANTA LÚCIA - BOTECO ==========
        "santa-lucia-boteco": {
            id: "santa-lucia-boteco",
            nome: "🍺 Boteco Santa Lúcia",
            endereco: "Rua Santa Lúcia, 300 - Santa Lúcia, Vitória",
            horario: "17h às 02h",
            telefone: "(27) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-sl", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-sl", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-sl", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-sl", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-sl", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. ENSEADA DO SUÁ - PIZZARIA ==========
        "enseada-suá-pizzaria": {
            id: "enseada-suá-pizzaria",
            nome: "🍕 Pizzaria Enseada",
            endereco: "Av. Saturnino de Brito, 200 - Enseada do Suá, Vitória",
            horario: "18h às 23h30",
            telefone: "(27) 3888-7777",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-es", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-es", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-es", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-es", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-es-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. ILHA DO BOI - COMIDA PREMIUM ==========
        "ilha-boi-premium": {
            id: "ilha-boi-premium",
            nome: "🍽️ Ilha do Boi Gastrô",
            endereco: "Rua José Teixeira, 300 - Ilha do Boi, Vitória",
            horario: "12h às 15h | 19h às 23h",
            telefone: "(27) 3999-8888",
            descricao: "Cozinha internacional no bairro nobre.",
            tipo: ["contemporanea", "internacional", "premium", "romântico"],
            preco_medium: 130,
            estrelas: 4.9,
            avaliacoes: 670,
            cardapio: [
                { id: "file-ib", nome: "🥩 Filé Mignon", descricao: "Filé ao molho madeira.", preco: 95, recuperacao: { fome: 75, felicidade: 38, energia: 24 } },
                { id: "lagosta-ib", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 155, recuperacao: { fome: 88, felicidade: 44, energia: 28 } },
                { id: "salmao-ib", nome: "🐟 Salmão", descricao: "Salmão ao maracujá.", preco: 85, recuperacao: { fome: 68, felicidade: 30, energia: 20 } },
                { id: "risoto-ib", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "vinho-ib", nome: "🍷 Vinho", descricao: "Vinho tinto chileno.", preco: 42, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 9. REPÚBLICA - HAMBURGUERIA ==========
        "republica-hamburguer": {
            id: "republica-hamburguer",
            nome: "🍔 Hamburgueria República",
            endereco: "Rua República, 300 - República, Vitória",
            horario: "18h às 00h",
            telefone: "(27) 4000-9999",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 45,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-rep", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 40, recuperacao: { fome: 64, energia: 23, felicidade: 19 } },
                { id: "vegan-rep", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 42, recuperacao: { fome: 56, energia: 20, felicidade: 14 } },
                { id: "batata-rep", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-rep", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-rep", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 10. BENTO FERREIRA - COMIDA CASEIRA ==========
        "bento-ferreira-caseira": {
            id: "bento-ferreira-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Bento Ferreira, 300 - Bento Ferreira, Vitória",
            horario: "11h às 15h",
            telefone: "(27) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-bf", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-bf", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 25, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-bf", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 22, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-bf", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 24, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-bf", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. SANTO ANTÔNIO - CAFÉ ==========
        "santo-antonio-cafe": {
            id: "santo-antonio-cafe",
            nome: "☕ Café Santo Antônio",
            endereco: "Rua Santo Antônio, 200 - Santo Antônio, Vitória",
            horario: "08h às 20h",
            telefone: "(27) 4222-1111",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 25,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-sa", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-sa", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-sa", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-sa", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-sa", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. GOIABEIRAS - TAPIOCARIA ==========
        "goiabeiras-tapiocaria": {
            id: "goiabeiras-tapiocaria",
            nome: "🥞 Tapiocaria Goiabeiras",
            endereco: "Rua Goiabeiras, 300 - Goiabeiras, Vitória",
            horario: "08h às 21h",
            telefone: "(27) 4333-2222",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-carne-goi", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-goi", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-goi", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-goi", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-goi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. SÃO PEDRO - QUIOSQUE ==========
        "sao-pedro-quiosque": {
            id: "sao-pedro-quiosque",
            nome: "🏖️ Quiosque São Pedro",
            endereco: "Orla de Camburi - São Pedro, Vitória",
            horário: "09h às 21h",
            telefone: "(27) 4444-3333",
            descricao: "Quiosque na orla de Camburi.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "casual"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "agua-coco-sp", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-sp", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-sp", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-sp", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-sp", nome: "🥤 Suco", descricao: "Suco de abacaxi.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. JUCUTUQUARA - COMIDA ÁRABE ==========
        "jucutuquara-arabe": {
            id: "jucutuquara-arabe",
            nome: "🧆 Al Balad Vitória",
            endereco: "Rua Jucutuquara, 300 - Jucutuquara, Vitória",
            horario: "11h às 23h",
            telefone: "(27) 4555-4444",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medium: 48,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "banquete-ju", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "esfiha-ju", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 32, recuperacao: { fome: 40, felicidade: 16, energia: 8 } },
                { id: "kibe-ju", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 28, recuperacao: { fome: 34, felicidade: 15, energia: 7 } },
                { id: "hommus-ju", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 24, recuperacao: { fome: 28, felicidade: 15, energia: 7 } },
                { id: "suco-ju", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. MARIA ORTIZ - COMIDA NORDESTINA ==========
        "maria-ortiz-nordestina": {
            id: "maria-ortiz-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Maria Ortiz, 200 - Maria Ortiz, Vitória",
            horário: "11h às 21h",
            telefone: "(27) 4666-5555",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 40,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-mo", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-mo", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-mo", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-mo", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-mo", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. TABUAZEIRO - RESTAURANTE POPULAR ==========
        "tabuazeiro-popular": {
            id: "tabuazeiro-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Tabuazeiro, 300 - Tabuazeiro, Vitória",
            horário: "11h às 14h",
            telefone: "(27) 4777-6666",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1340,
            cardapio: [
                { id: "prato-feito-tab", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-tab", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-tab", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-tab", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-tab", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 17. CAMBURI - SHOPPING ==========
        "shopping-camburi": {
            id: "shopping-camburi",
            nome: "🛍️ Shopping Vitória - Food Court",
            endereco: "Av. Américo Buaiz, 500 - Enseada do Suá, Vitória",
            horario: "10h às 22h",
            telefone: "(27) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-vix", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-vix", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-vix", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 58, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "japa-vix", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-vix-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 18. PRAIA DO SUÁ - QUIOSQUE ==========
        "praia-sua-quiosque": {
            id: "praia-sua-quiosque",
            nome: "🏖️ Quiosque Praia do Suá",
            endereco: "Orla da Praia do Suá, Vitória",
            horario: "09h às 21h",
            telefone: "(27) 4999-8888",
            descricao: "Quiosque na Praia do Suá.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "casual"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "agua-coco-ps", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-ps", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-ps", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-ps", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-ps", nome: "🥤 Suco", descricao: "Suco de abacaxi.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. PARQUE MOSCOSO - LANCHONETE ==========
        "parque-moscoso-lanchonete": {
            id: "parque-moscoso-lanchonete",
            nome: "🍔 Lanchonete Parque Moscoso",
            endereco: "Parque Moscoso - Centro, Vitória",
            horario: "08h às 20h",
            telefone: "(27) 5000-9999",
            descricao: "Lanchonete no parque.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 670,
            cardapio: [
                { id: "x-tudo-pm", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 22, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-pm", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 15, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-pm", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-pm", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pm", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-vitoria": {
            id: "aeroporto-vitoria",
            nome: "✈️ Aeroporto de Vitória - Praça de Alimentação",
            endereco: "Av. Dante Michelini, s/n - Aeroporto, Vitória",
            horario: "04h às 23h",
            telefone: "(27) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-aero-es", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-es", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-es", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-es", nome: "☕ Café Capixaba", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-es", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== VILA VELHA - 10 RESTAURANTES ====================
    "Vila Velha": {
        // ========== 1. CENTRO - MOQUECA CAPIXABA ==========
        "vila-velha-moqueca": {
            id: "vila-velha-moqueca",
            nome: "🍲 Moqueca da Vila",
            endereco: "Av. Champagnat, 500 - Centro, Vila Velha",
            horario: "11h às 22h",
            telefone: "(27) 3222-1111",
            descricao: "Especialidade em moqueca capixaba com vista para o Convento da Penha.",
            tipo: ["capixaba", "frutos-do-mar", "vista", "tradicional"],
            preco_medium: 75,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "moqueca-vv", nome: "🍲 Moqueca Capixaba", descricao: "Moqueca tradicional.", preco: 78, recuperacao: { fome: 85, felicidade: 34, energia: 22 } },
                { id: "moqueca-peixe-vv", nome: "🐟 Moqueca de Peixe", descricao: "Moqueca de peixe.", preco: 68, recuperacao: { fome: 78, felicidade: 30, energia: 20 } },
                { id: "camarao-vv", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 62, recuperacao: { fome: 65, felicidade: 26, energia: 18 } },
                { id: "casquinha-vv", nome: "🦀 Casquinha de Siri", descricao: "Casquinha gratinada.", preco: 28, recuperacao: { fome: 30, felicidade: 18, energia: 10 } },
                { id: "caipirinha-vv", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "vila-velha-peixaria": {
            id: "vila-velha-peixaria",
            nome: "🐟 Peixaria Vila Velha",
            endereco: "Rua Vasco Coutinho, 300 - Centro, Vila Velha",
            horario: "11h às 22h",
            telefone: "(27) 3333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "capixaba", "frutos-do-mar"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "peixe-vv", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-vv-peix", nome: "🍤 Camarão", descricao: "Camarão.", preco: 55, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "siri-vv", nome: "🦀 Siri", descricao: "Siri desfiado.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 12 } },
                { id: "pirão-vv", nome: "🥣 Pirão", descricao: "Pirão de peixe.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-vv", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PRAIA DA COSTA - QUIOSQUE ==========
        "praia-costa-quiosque": {
            id: "praia-costa-quiosque",
            nome: "🏖️ Quiosque Praia da Costa",
            endereco: "Orla da Praia da Costa, Vila Velha",
            horario: "08h às 22h",
            telefone: "(27) 3444-3333",
            descricao: "Quiosque na famosa Praia da Costa.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medium: 38,
            estrelas: 4.4,
            avaliacoes: 2340,
            cardapio: [
                { id: "agua-coco-pc", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-pc", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-pc", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 30, recuperacao: { fome: 35, felicidade: 15, energia: 8 } },
                { id: "pastel-pc", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 15, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-pc", nome: "🥤 Suco", descricao: "Suco de abacaxi.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. ITAPUÃ - PIZZARIA ==========
        "itapua-pizzaria": {
            id: "itapua-pizzaria",
            nome: "🍕 Pizzaria Itapuã",
            endereco: "Rua Itapuã, 300 - Itapuã, Vila Velha",
            horario: "18h às 23h30",
            telefone: "(27) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 48,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-it", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-it", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-it", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-it", nome: "🥟 Calzone", descricao: "Calzone.", preco: 40, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-it", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. BOTECO ==========
        "vila-velha-boteco": {
            id: "vila-velha-boteco",
            nome: "🍺 Boteco Vila Velha",
            endereco: "Rua Sete de Setembro, 200 - Centro, Vila Velha",
            horario: "17h às 02h",
            telefone: "(27) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 28,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "calabresa-vv", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-vv", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-vv", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-vv", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-vv", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. CAFÉ ==========
        "vila-velha-cafe": {
            id: "vila-velha-cafe",
            nome: "☕ Café Vila Velha",
            endereco: "Rua Duque de Caxias, 200 - Centro, Vila Velha",
            horario: "08h às 20h",
            telefone: "(27) 3777-6666",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-vv", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-vv", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-vv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-vv", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-vv-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "vila-velha-hamburguer": {
            id: "vila-velha-hamburguer",
            nome: "🍔 Hamburgueria Vila Velha",
            endereco: "Rua Itapoã, 300 - Centro, Vila Velha",
            horario: "18h às 00h",
            telefone: "(27) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-vv", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-vv", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-vv-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "onion-vv", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "milkshake-vv", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. TAPIOCARIA ==========
        "vila-velha-tapiocaria": {
            id: "vila-velha-tapiocaria",
            nome: "🥞 Tapiocaria Vila Velha",
            endereco: "Rua Dom Pedro II, 200 - Centro, Vila Velha",
            horario: "08h às 21h",
            telefone: "(27) 3999-8888",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-vv", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-vv", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-vv", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-vv", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-vv-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-vila-velha": {
            id: "shopping-vila-velha",
            nome: "🛍️ Shopping Vila Velha - Food Court",
            endereco: "Av. Luciano das Neves, 1000 - Centro, Vila Velha",
            horario: "10h às 22h",
            telefone: "(27) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 38,
            estrelas: 4.2,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-vv", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-vv", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-vv", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-vv", nome: "🍣 Sushi", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-vv-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-vila-velha": {
            id: "rodoviaria-vila-velha",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Carlos Lindenberg, 500 - Centro, Vila Velha",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-vv", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-vv-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-vv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-vv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-vv-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== SERRA - 10 RESTAURANTES ====================
    "Serra": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "serra-churrascaria": {
            id: "serra-churrascaria",
            nome: "🥩 Churrascaria Serra",
            endereco: "Av. Central, 500 - Centro, Serra",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(27) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-serra", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-serra", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-serra", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-serra", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-serra", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA CAPIXABA ==========
        "serra-capixaba": {
            id: "serra-capixaba",
            nome: "🍲 Sabor Capixaba",
            endereco: "Rua São João, 300 - Centro, Serra",
            horario: "11h às 22h",
            telefone: "(27) 3333-2222",
            descricao: "Comida capixaba tradicional.",
            tipo: ["capixaba", "frutos-do-mar", "regional", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "moqueca-serra", nome: "🍲 Moqueca", descricao: "Moqueca capixaba.", preco: 65, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "peixe-serra", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-serra", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "tapioca-serra", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 12, energia: 5 } },
                { id: "suco-serra-cap", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "serra-boteco": {
            id: "serra-boteco",
            nome: "🍺 Boteco Serra",
            endereco: "Rua Santos Dumont, 200 - Centro, Serra",
            horario: "17h às 02h",
            telefone: "(27) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-serra", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-serra", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-serra", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-serra", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-serra", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "serra-pizzaria": {
            id: "serra-pizzaria",
            nome: "🍕 Pizzaria Serra",
            endereco: "Av. Eudes Scherrer Souza, 300 - Centro, Serra",
            horario: "18h às 23h30",
            telefone: "(27) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-se", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-se", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-se", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-se", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-se-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "serra-cafe": {
            id: "serra-cafe",
            nome: "☕ Café Serra",
            endereco: "Rua Rio Branco, 200 - Centro, Serra",
            horario: "08h às 20h",
            telefone: "(27) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-se", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-se", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-se", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-se", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-se-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "serra-hamburguer": {
            id: "serra-hamburguer",
            nome: "🍔 Hamburgueria Serra",
            endereco: "Rua Projetada, 300 - Centro, Serra",
            horario: "18h às 00h",
            telefone: "(27) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-se", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-se", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-se-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-se", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-se", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "serra-tapiocaria": {
            id: "serra-tapiocaria",
            nome: "🥞 Tapiocaria Serra",
            endereco: "Rua da Paz, 200 - Centro, Serra",
            horario: "08h às 21h",
            telefone: "(27) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-se", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-se", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-se", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-se", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-se-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "serra-caseira": {
            id: "serra-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 15 de Novembro, 200 - Centro, Serra",
            horario: "11h às 15h",
            telefone: "(27) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-se", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-se", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-se", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-se", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-se-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-serra": {
            id: "shopping-serra",
            nome: "🛍️ Shopping Serra - Food Court",
            endereco: "Av. Eudes Scherrer Souza, 1500 - Centro, Serra",
            horario: "10h às 22h",
            telefone: "(27) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-se", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-se", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-se", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-se", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-se-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-serra": {
            id: "rodoviaria-serra",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-101, km 230 - Centro, Serra",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-se", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-se-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-se", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-se", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-se-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== CARIACICA - 10 RESTAURANTES ====================
    "Cariacica": {
        // ========== 1. CENTRO - COMIDA CAPIXABA ==========
        "cariacica-capixaba": {
            id: "cariacica-capixaba",
            nome: "🍲 Culinária Capixaba",
            endereco: "Av. Expedito Garcia, 500 - Centro, Cariacica",
            horario: "11h às 22h",
            telefone: "(27) 3222-1111",
            descricao: "Comida capixaba tradicional.",
            tipo: ["capixaba", "frutos-do-mar", "regional", "familiar"],
            preco_medium: 45,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "moqueca-car", nome: "🍲 Moqueca", descricao: "Moqueca capixaba.", preco: 62, recuperacao: { fome: 72, felicidade: 26, energia: 17 } },
                { id: "peixe-car", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 45, recuperacao: { fome: 60, energia: 19, felicidade: 15 } },
                { id: "camarao-car", nome: "🍤 Camarão", descricao: "Camarão.", preco: 50, recuperacao: { fome: 63, energia: 21, felicidade: 17 } },
                { id: "tapioca-car", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 12, energia: 5 } },
                { id: "suco-car", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO ==========
        "cariacica-boteco": {
            id: "cariacica-boteco",
            nome: "🍺 Boteco Cariacica",
            endereco: "Rua Coronel Albino, 300 - Centro, Cariacica",
            horario: "17h às 02h",
            telefone: "(27) 3333-2222",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-ca", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ca", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ca", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ca", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ca", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "cariacica-pizzaria": {
            id: "cariacica-pizzaria",
            nome: "🍕 Pizzaria Cariacica",
            endereco: "Av. Brasil, 300 - Centro, Cariacica",
            horario: "18h às 23h30",
            telefone: "(27) 3444-3333",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-ca", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ca", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ca", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-ca", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-ca-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 4. CAFÉ ==========
        "cariacica-cafe": {
            id: "cariacica-cafe",
            nome: "☕ Café Cariacica",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Cariacica",
            horario: "08h às 20h",
            telefone: "(27) 3555-4444",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ca", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ca", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-ca", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-ca", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-ca-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. HAMBURGUERIA ==========
        "cariacica-hamburguer": {
            id: "cariacica-hamburguer",
            nome: "🍔 Hamburgueria Cariacica",
            endereco: "Rua Projetada, 200 - Centro, Cariacica",
            horario: "18h às 00h",
            telefone: "(27) 3666-5555",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-ca", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-ca", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-ca-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-ca", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-ca", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 6. TAPIOCARIA ==========
        "cariacica-tapiocaria": {
            id: "cariacica-tapiocaria",
            nome: "🥞 Tapiocaria Cariacica",
            endereco: "Rua da Paz, 200 - Centro, Cariacica",
            horario: "08h às 21h",
            telefone: "(27) 3777-6666",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-ca", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ca", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ca", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ca", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ca-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. COMIDA CASEIRA ==========
        "cariacica-caseira": {
            id: "cariacica-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 15 de Novembro, 200 - Centro, Cariacica",
            horario: "11h às 15h",
            telefone: "(27) 3888-7777",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-ca", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ca", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ca", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ca", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ca-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 8. SHOPPING ==========
        "shopping-cariacica": {
            id: "shopping-cariacica",
            nome: "🛍️ Shopping Cariacica - Food Court",
            endereco: "Av. Expedito Garcia, 1500 - Centro, Cariacica",
            horario: "10h às 22h",
            telefone: "(27) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ca", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ca", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ca", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ca", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ca-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA NORDESTINA ==========
        "cariacica-nordestina": {
            id: "cariacica-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Nordeste, 300 - Centro, Cariacica",
            horario: "11h às 21h",
            telefone: "(27) 4000-9999",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "baiao-ca", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 21, energia: 13 } },
                { id: "carne-sol-ca", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 23, energia: 14 } },
                { id: "panelada-ca", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 19, felicidade: 12 } },
                { id: "tapioca-ca-nor", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 21, felicidade: 12, energia: 6 } },
                { id: "suco-ca-nor", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-cariacica": {
            id: "rodoviaria-cariacica",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-262, km 5 - Centro, Cariacica",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ca", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ca-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ca", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ca", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ca-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesES;