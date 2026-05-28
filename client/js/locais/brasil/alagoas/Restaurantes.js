export const restaurantesAL = {
    // ==================== MACEIÓ (CAPITAL) - 20 RESTAURANTES ====================
    "Maceió": {
        // ========== 1. PAJUÇARA - FRUTOS DO MAR ==========
        "pajucara-frutos": {
            id: "pajucara-frutos",
            nome: "🦞 Restaurante Pajuçara",
            endereco: "Av. Dr. Antônio Gomes de Barros, 1000 - Pajuçara, Maceió",
            horario: "11h às 23h",
            telefone: "(82) 3222-1111",
            descricao: "Frutos do mar frescos com vista para o mar de Pajuçara. Especialidade em lagosta, camarão e peixes. Tradição desde 1980.",
            tipo: ["frutos-do-mar", "alagoana", "praia", "tradicional", "turístico"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "lagosta-pajucara", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca grelhada com manteiga de ervas. Acompanha arroz, batatas e salada.", preco: 125, recuperacao: { fome: 85, felicidade: 40, energia: 26 } },
                { id: "camarao-pajucara", nome: "🍤 Camarão Internacional", descricao: "Camarões grandes empanados com molho especial.", preco: 72, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "peixe-pajucara", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe fresco grelhado com legumes.", preco: 58, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-pajucara", nome: "🍲 Moqueca Alagoana", descricao: "Moqueca de peixe e camarão com leite de coco e dendê.", preco: 85, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "caipirinha-pajucara", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça de alagoas.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. PAJUÇARA - QUIOSQUE ==========
        "pajucara-quiosque": {
            id: "pajucara-quiosque",
            nome: "🏖️ Quiosque da Pajuçara",
            endereco: "Orla de Pajuçara - Posto 2, Maceió",
            horario: "08h às 22h",
            telefone: "(82) 3333-2222",
            descricao: "Quiosque tradicional na praia de Pajuçara. Água de coco, petiscos e frutos do mar. Point dos turistas.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "casual"],
            preco_medio: 40,
            estrelas: 4.5,
            avaliacoes: 2890,
            cardapio: [
                { id: "agua-coco-paju", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-paju", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos com molho de pimenta.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-peixe-paju", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 32, recuperacao: { fome: 35, felicidade: 15, energia: 8 } },
                { id: "pastel-paju", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante recheado com camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-paju", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 9, recuperacao: { sede: 20, felicidade: 8, energia: 5 } }
            ]
        },
        
        // ========== 3. PONTA VERDE - CULINÁRIA ALAGOANA ==========
        "ponta-verde-alagoana": {
            id: "ponta-verde-alagoana",
            nome: "🍲 Culinária Alagoana",
            endereco: "Av. Álvaro Otacílio, 500 - Ponta Verde, Maceió",
            horario: "11h às 22h",
            telefone: "(82) 3444-3333",
            descricao: "Restaurante especializado em culinária alagoana. Sururu, carne de sol, baião e tapioca. Ambiente aconchegante.",
            tipo: ["alagoana", "nordestina", "regional", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "sururu-pv", nome: "🦪 Sururu ao Leite", descricao: "Sururu (marisco) cozido com leite de coco e coentro.", preco: 48, recuperacao: { fome: 60, felicidade: 26, energia: 16 } },
                { id: "carne-sol-pv", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca e manteiga de garrafa.", preco: 52, recuperacao: { fome: 70, felicidade: 24, energia: 16 } },
                { id: "baiao-pv", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "tapioca-pv", nome: "🥞 Tapioca de Carne", descricao: "Tapioca recheada com carne seca e queijo.", preco: 18, recuperacao: { fome: 25, felicidade: 15, energia: 7 } },
                { id: "caipirinha-pv", nome: "🍹 Caipirinha", descricao: "Caipirinha de frutas.", preco: 16, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 4. JATIÚCA - PEIXARIA ==========
        "jatiuca-peixaria": {
            id: "jatiuca-peixaria",
            nome: "🐟 Peixaria Jatiúca",
            endereco: "Av. Jatiúca, 300 - Jatiúca, Maceió",
            horario: "11h às 22h",
            telefone: "(82) 3555-4444",
            descricao: "Peixes e frutos do mar frescos. Especialidade em peixes da costa alagoana.",
            tipo: ["peixaria", "frutos-do-mar", "familiar", "tradicional"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "peixe-jatiuca", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia grelhado.", preco: 52, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-jatiuca", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 58, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "moqueca-jatiuca", nome: "🍲 Moqueca", descricao: "Moqueca alagoana.", preco: 68, recuperacao: { fome: 75, energia: 25, felicidade: 20 } },
                { id: "lagosta-jatiuca", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 115, recuperacao: { fome: 82, energia: 28, felicidade: 35 } },
                { id: "suco-jatiuca", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. CRUZ DAS ALMAS - CHURRASCARIA ==========
        "cruz-almas-churrascaria": {
            id: "cruz-almas-churrascaria",
            nome: "🥩 Churrascaria Cruz das Almas",
            endereco: "Av. Fernandes Lima, 1000 - Cruz das Almas, Maceió",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(82) 3666-5555",
            descricao: "Churrascaria tradicional. Rodízio de carnes nobres.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-cruz", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-cruz", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-cruz", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-cruz", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-cruz", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. JARAGUÁ - BOTECO ==========
        "jaragua-boteco": {
            id: "jaragua-boteco",
            nome: "🍺 Boteco Jaraguá",
            endereco: "Rua Jaraguá, 200 - Jaraguá, Maceió",
            horario: "17h às 03h",
            telefone: "(82) 3777-6666",
            descricao: "Boteco tradicional no bairro histórico. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular", "histórico"],
            preco_medio: 32,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "calabresa-jar", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 26, recuperacao: { fome: 34, felicidade: 13, energia: 7 } },
                { id: "torresmo-jar", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 20, recuperacao: { fome: 26, felicidade: 11, energia: 5 } },
                { id: "queijo-jar", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 15, recuperacao: { fome: 19, felicidade: 9, energia: 4 } },
                { id: "batata-jar", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 21, felicidade: 8, energia: 4 } },
                { id: "chopp-jar", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 9, recuperacao: { sede: 24, felicidade: 11, energia: -5 } }
            ]
        },
        
        // ========== 7. FAROL - PIZZARIA ==========
        "farol-pizzaria": {
            id: "farol-pizzaria",
            nome: "🍕 Pizzaria Farol",
            endereco: "Rua Desembargador Luiz Lúcio, 300 - Farol, Maceió",
            horario: "18h às 00h",
            telefone: "(82) 3888-7777",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 52,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-far", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-far", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-far", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-far", nome: "🥟 Calzone", descricao: "Calzone.", preco: 44, recuperacao: { fome: 52, energia: 14, felicidade: 11 } },
                { id: "suco-far", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. MANGABEIRAS - COMIDA INTERNACIONAL ==========
        "mangabeiras-internacional": {
            id: "mangabeiras-internacional",
            nome: "🍽️ Mangabeiras Gastrô",
            endereco: "Rua do Sol, 500 - Mangabeiras, Maceió",
            horario: "12h às 15h | 19h às 23h",
            telefone: "(82) 3999-8888",
            descricao: "Cozinha internacional contemporânea. Ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico"],
            preco_medio: 110,
            estrelas: 4.8,
            avaliacoes: 780,
            cardapio: [
                { id: "file-mang", nome: "🥩 Filé Mignon", descricao: "Filé ao molho madeira.", preco: 85, recuperacao: { fome: 72, energia: 30, felicidade: 24 } },
                { id: "lagosta-mang", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 135, recuperacao: { fome: 85, energia: 38, felicidade: 32 } },
                { id: "salmao-mang", nome: "🐟 Salmão", descricao: "Salmão ao maracujá.", preco: 72, recuperacao: { fome: 65, energia: 26, felicidade: 20 } },
                { id: "risoto-mang", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 68, recuperacao: { fome: 62, energia: 24, felicidade: 18 } },
                { id: "vinho-mang", nome: "🍷 Vinho", descricao: "Vinho tinto chileno.", preco: 35, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },
        
        // ========== 9. GRUTA DE LOURDES - HAMBURGUERIA ==========
        "gruta-hamburguer": {
            id: "gruta-hamburguer",
            nome: "🍔 Hamburgueria Gruta",
            endereco: "Rua Gruta de Lourdes, 300 - Gruta de Lourdes, Maceió",
            horario: "18h às 00h",
            telefone: "(82) 4000-9999",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-gruta", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-gruta", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-gruta", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-gruta", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-gruta", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 10. POÇO - COMIDA NORDESTINA ==========
        "poco-nordestina": {
            id: "poco-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua do Poço, 200 - Poço, Maceió",
            horario: "11h às 21h",
            telefone: "(82) 4111-0000",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 45,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-poco", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-poco", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-poco", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "sururu-poco", nome: "🦪 Sururu", descricao: "Sururu ao leite.", preco: 45, recuperacao: { fome: 58, felicidade: 26, energia: 15 } },
                { id: "suco-poco", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. JACARECICA - QUIOSQUE ==========
        "jacarecica-quiosque": {
            id: "jacarecica-quiosque",
            nome: "🏖️ Quiosque Jacarecica",
            endereco: "Praia de Jacarecica - Orla, Maceió",
            horario: "09h às 21h",
            telefone: "(82) 4222-1111",
            descricao: "Quiosque na praia de Jacarecica.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "casual"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "agua-coco-jac", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-jac", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-jac", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-jac", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-jac", nome: "🥤 Suco", descricao: "Suco de abacaxi.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. SERRARIA - COMIDA CASEIRA ==========
        "serraria-caseira": {
            id: "serraria-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Serraria, 300 - Serraria, Maceió",
            horario: "11h às 15h",
            telefone: "(82) 4333-2222",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "prato-feito-ser", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-ser", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 25, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-ser", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 22, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-ser", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 24, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-ser", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 13. TABULEIRO DOS MARTINS - CAFÉ ==========
        "tabuleiro-cafe": {
            id: "tabuleiro-cafe",
            nome: "☕ Café Tabuleiro",
            endereco: "Rua Tabuleiro, 500 - Tabuleiro dos Martins, Maceió",
            horario: "08h às 20h",
            telefone: "(82) 4444-3333",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 25,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-tab", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-tab", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-tab", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-tab", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-tab", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. BEBEDOURO - TAPIOCARIA ==========
        "bebedouro-tapiocaria": {
            id: "bebedouro-tapiocaria",
            nome: "🥞 Tapiocaria Bebedouro",
            endereco: "Rua Bebedouro, 200 - Bebedouro, Maceió",
            horario: "08h às 21h",
            telefone: "(82) 4555-4444",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-carne-be", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-be", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-be", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-be", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-be", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. BENEDITO BENTES - LANCHONETE ==========
        "benedito-lanchonete": {
            id: "benedito-lanchonete",
            nome: "🍔 Lanchonete Benedito",
            endereco: "Rua Benedito Bentes, 500 - Benedito Bentes, Maceió",
            horario: "08h às 22h",
            telefone: "(82) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-ben", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 22, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-ben", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 15, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-ben", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-ben", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-ben", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. CLIMA BOM - COMIDA ÁRABE ==========
        "clima-bom-arabe": {
            id: "clima-bom-arabe",
            nome: "🧆 Al Balad Maceió",
            endereco: "Rua Clima Bom, 300 - Clima Bom, Maceió",
            horario: "11h às 23h",
            telefone: "(82) 4777-6666",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "banquete-cb", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 72, recuperacao: { fome: 85, felicidade: 30, energia: 18 } },
                { id: "esfiha-cb", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 8 } },
                { id: "kibe-cb", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-cb", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "suco-cb", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. BARRO DURO - COMIDA JAPONESA ==========
        "barro-duro-japonesa": {
            id: "barro-duro-japonesa",
            nome: "🍣 Sushi Barro Duro",
            endereco: "Rua Barro Duro, 200 - Barro Duro, Maceió",
            horario: "18h às 23h30",
            telefone: "(82) 4888-7777",
            descricao: "Restaurante japonês.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar"],
            preco_medium: 75,
            estrelas: 4.6,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-bd", nome: "🍣 Rodízio", descricao: "Rodízio premium.", preco: 72, recuperacao: { fome: 85, energia: 26, felicidade: 32 } },
                { id: "combinado-bd", nome: "🍱 Combinado", descricao: "22 peças.", preco: 58, recuperacao: { fome: 64, energia: 20, felicidade: 24 } },
                { id: "temaki-bd", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 26, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "hot-bd", nome: "🌯 Hot Roll", descricao: "Hot rolls.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-bd", nome: "🍶 Saquê", descricao: "Saquê.", preco: 24, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 18. ANTARES - RESTAURANTE POPULAR ==========
        "antares-popular": {
            id: "antares-popular",
            nome: "🍲 Restaurante Popular Antares",
            endereco: "Rua Antares, 500 - Antares, Maceió",
            horario: "11h às 14h",
            telefone: "(82) 4999-8888",
            descricao: "Restaurante popular com comida caseira.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1340,
            cardapio: [
                { id: "prato-feito-ant", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ant", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ant", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ant", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ant", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 19. MACEIÓ SHOPPING ==========
        "shopping-maceio": {
            id: "shopping-maceio",
            nome: "🛍️ Maceió Shopping - Food Court",
            endereco: "Av. Comendador Gustavo Paiva, 5000 - Cruz das Almas, Maceió",
            horario: "10h às 22h",
            telefone: "(82) 5000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-mcz", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-mcz", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-mcz", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 58, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "japa-mcz", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-mcz", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-maceio": {
            id: "aeroporto-maceio",
            nome: "✈️ Aeroporto Zumbi dos Palmares - Praça de Alimentação",
            endereco: "BR-104, s/n - Aeroporto, Rio Largo (Região Metropolitana)",
            horario: "04h às 23h",
            telefone: "(82) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-aero-al", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-al", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-al", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-al", nome: "☕ Café Regional", descricao: "Café alagoano.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-al", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== ARAPIRACA - 10 RESTAURANTES ====================
    "Arapiraca": {
        // ========== 1. CENTRO - CULINÁRIA SERTANEJA ==========
        "arapiraca-sertaneja": {
            id: "arapiraca-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Rua Intendente Júlio, 500 - Centro, Arapiraca",
            horario: "11h às 22h",
            telefone: "(82) 3222-1111",
            descricao: "Culinária sertaneja do agreste alagoano. Baião de dois, carne de sol, panelada e buchada. Ambiente familiar.",
            tipo: ["alagoana", "nordestina", "sertaneja", "tradicional", "familiar"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "baiao-ara", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 38, recuperacao: { fome: 65, felicidade: 22, energia: 14 } },
                { id: "carne-sol-ara", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-ara", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "buchada-ara", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 42, recuperacao: { fome: 64, energia: 20, felicidade: 14 } },
                { id: "suco-ara", nome: "🥤 Suco de Caju", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "arapiraca-churrascaria": {
            id: "arapiraca-churrascaria",
            nome: "🥩 Churrascaria Arapiraca",
            endereco: "Av. Rio Branco, 1000 - Centro, Arapiraca",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(82) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-ara", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-ara", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-ara", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-ara", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-ara-churr", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "arapiraca-boteco": {
            id: "arapiraca-boteco",
            nome: "🍺 Boteco Arapiraca",
            endereco: "Rua Quintino Bocaiúva, 300 - Centro, Arapiraca",
            horario: "17h às 02h",
            telefone: "(82) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "calabresa-ara", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-ara", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-ara", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-ara", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-ara", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "arapiraca-pizzaria": {
            id: "arapiraca-pizzaria",
            nome: "🍕 Pizzaria Arapiraca",
            endereco: "Av. Amazonas, 500 - Centro, Arapiraca",
            horario: "18h às 23h30",
            telefone: "(82) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-ara", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ara", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ara", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ara", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ara-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "arapiraca-cafe": {
            id: "arapiraca-cafe",
            nome: "☕ Café Arapiraca",
            endereco: "Rua Silva Xavier, 200 - Centro, Arapiraca",
            horario: "08h às 20h",
            telefone: "(82) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ara", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ara", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ara", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ara", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ara-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "arapiraca-hamburguer": {
            id: "arapiraca-hamburguer",
            nome: "🍔 Hamburgueria Arapiraca",
            endereco: "Av. Firmino Maia, 300 - Centro, Arapiraca",
            horario: "18h às 00h",
            telefone: "(82) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-ara", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-ara", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-ara-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-ara", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-ara", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "arapiraca-tapiocaria": {
            id: "arapiraca-tapiocaria",
            nome: "🥞 Tapiocaria Arapiraca",
            endereco: "Rua Cleto Campelo, 200 - Centro, Arapiraca",
            horario: "08h às 21h",
            telefone: "(82) 3888-7777",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-ara", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ara", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ara", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ara", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-ara-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. SHOPPING ==========
        "shopping-arapiraca": {
            id: "shopping-arapiraca",
            nome: "🛍️ Shopping Arapiraca - Food Court",
            endereco: "Av. Rio Branco, 1500 - Centro, Arapiraca",
            horario: "10h às 22h",
            telefone: "(82) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ara", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ara", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ara", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ara", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ara-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. FEIJOADA ==========
        "arapiraca-feijoada": {
            id: "arapiraca-feijoada",
            nome: "🍲 Feijoada da Terra",
            endereco: "Rua São Paulo, 300 - Centro, Arapiraca",
            horario: "11h às 16h (sábado)",
            telefone: "(82) 4000-9999",
            descricao: "Especializada em feijoada.",
            tipo: ["brasileira", "feijoada", "tradicional", "familiar"],
            preco_medium: 40,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "feijoada-ara", nome: "🍲 Feijoada Completa", descricao: "Feijoada com carnes.", preco: 45, recuperacao: { fome: 85, energia: 28, felicidade: 22 } },
                { id: "feijoada-light", nome: "🍲 Feijoada Light", descricao: "Feijoada sem gordura.", preco: 38, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "feijoada-veg", nome: "🌱 Feijoada Vegana", descricao: "Feijoada sem carne.", preco: 35, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "acompanhamentos-ara", nome: "🥗 Acompanhamentos", descricao: "Arroz, couve, farofa, laranja.", preco: 12, recuperacao: { fome: 20, felicidade: 8, energia: 5 } },
                { id: "suco-ara-feij", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-arapiraca": {
            id: "rodoviaria-arapiraca",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Rio Branco, 2000 - Centro, Arapiraca",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ara", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-ara-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ara", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ara", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-ara-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== PALMEIRA DOS ÍNDIOS - 10 RESTAURANTES ====================
    "Palmeira dos Índios": {
        // ========== 1. CENTRO - COMIDA INDÍGENA ==========
        "palmeira-indigena": {
            id: "palmeira-indigena",
            nome: "🌿 Culinária Indígena",
            endereco: "Rua Marechal Deodoro, 200 - Centro, Palmeira dos Índios",
            horario: "11h às 21h",
            telefone: "(82) 3222-1111",
            descricao: "Culinária indígena tradicional da região. Peixes do rio, mandioca e frutos da terra.",
            tipo: ["indigena", "alagoana", "regional", "tradicional"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-pal", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha de bananeira.", preco: 45, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "beiju-pal", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "macaxeira-pal", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 8, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "tacaca-pal", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 25, felicidade: 18, energia: 10 } },
                { id: "suco-pal", nome: "🥤 Suco de Buriti", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA SERTANEJA ==========
        "palmeira-sertaneja": {
            id: "palmeira-sertaneja",
            nome: "🌵 Sabor do Sertão",
            endereco: "Rua Duque de Caxias, 300 - Centro, Palmeira dos Índios",
            horario: "11h às 22h",
            telefone: "(82) 3333-2222",
            descricao: "Culinária sertaneja autêntica.",
            tipo: ["nordestina", "sertaneja", "regional", "familiar"],
            preco_medium: 38,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "baiao-pal", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 35, recuperacao: { fome: 65, felicidade: 20, energia: 13 } },
                { id: "carne-sol-pal", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "panelada-pal", nome: "🍲 Panelada", descricao: "Panelada.", preco: 32, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "buchada-pal", nome: "🍖 Buchada", descricao: "Buchada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 13 } },
                { id: "suco-pal-ser", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "palmeira-boteco": {
            id: "palmeira-boteco",
            nome: "🍺 Boteco Palmeira",
            endereco: "Rua 13 de Maio, 150 - Centro, Palmeira dos Índios",
            horario: "17h às 02h",
            telefone: "(82) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-pal", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-pal", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-pal", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-pal", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-pal", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "palmeira-pizzaria": {
            id: "palmeira-pizzaria",
            nome: "🍕 Pizzaria Palmeira",
            endereco: "Av. Rio Branco, 500 - Centro, Palmeira dos Índios",
            horario: "18h às 23h",
            telefone: "(82) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "pizza-mussarela-pal", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pal", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pal", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-pal", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-pal-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "palmeira-cafe": {
            id: "palmeira-cafe",
            nome: "☕ Café Palmeira",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Palmeira dos Índios",
            horario: "08h às 20h",
            telefone: "(82) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-pal", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-pal", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-pal", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-pal", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-pal-cafe", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "palmeira-hamburguer": {
            id: "palmeira-hamburguer",
            nome: "🍔 Hamburgueria Palmeira",
            endereco: "Rua Sete de Setembro, 300 - Centro, Palmeira dos Índios",
            horario: "18h às 00h",
            telefone: "(82) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-pal", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-pal", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-pal-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-pal", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-pal", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "palmeira-tapiocaria": {
            id: "palmeira-tapiocaria",
            nome: "🥞 Tapiocaria Palmeira",
            endereco: "Rua Floriano Peixoto, 150 - Centro, Palmeira dos Índios",
            horario: "08h às 21h",
            telefone: "(82) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-pal", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-pal", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-pal", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-pal", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-pal-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA INDÍGENA (ADEIA) ==========
        "palmeira-aldeia": {
            id: "palmeira-aldeia",
            nome: "🏹 Aldeia Sabores",
            endereco: "Aldeia Indígena Xukuru - Estrada do Sertão, Palmeira dos Índios",
            horario: "09h às 17h",
            telefone: "(82) 3999-8888",
            descricao: "Culinária indígena na aldeia Xukuru. Experiência cultural e gastronômica.",
            tipo: ["indigena", "cultural", "regional", "tradicional"],
            preco_medium: 35,
            estrelas: 4.8,
            avaliacoes: 340,
            cardapio: [
                { id: "peixe-aldeia", nome: "🐟 Peixe Assado", descricao: "Peixe assado na folha.", preco: 42, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "beiju-aldeia", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 8, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "macaxeira-aldeia", nome: "🍠 Macaxeira", descricao: "Macaxeira.", preco: 7, recuperacao: { fome: 12, felicidade: 7, energia: 4 } },
                { id: "pato-aldeia", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 48, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "suco-aldeia", nome: "🥤 Suco de Jenipapo", descricao: "Suco de jenipapo.", preco: 9, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-palmeira": {
            id: "shopping-palmeira",
            nome: "🛍️ Shopping Palmeira - Food Court",
            endereco: "Av. Rio Branco, 1000 - Centro, Palmeira dos Índios",
            horario: "10h às 22h",
            telefone: "(82) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-pal", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pal", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pal", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pal", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-pal-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-palmeira": {
            id: "rodoviaria-palmeira",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-316, km 100 - Centro, Palmeira dos Índios",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-pal", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-pal-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pal", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pal", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-pal-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesAL;