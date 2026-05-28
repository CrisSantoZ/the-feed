const restaurantesMA = {
    // ==================== SÃO LUÍS (CAPITAL) - 20 RESTAURANTES ====================
    "São Luís": {
        // ========== 1. CENTRO HISTÓRICO (REVIVER) - CULINÁRIA MARANHENSE ==========
        "centro-maranhense": {
            id: "centro-maranhense",
            nome: "🍚 Culinária Maranhense",
            endereco: "Rua do Sol, 200 - Centro Histórico, São Luís",
            horario: "11h às 22h",
            telefone: "(98) 3222-1111",
            descricao: "Restaurante tradicional no coração do Reviver. Especialidades maranhenses como arroz de cuxá, peixes regionais e camarões. Ambiente histórico e acolhedor.",
            tipo: ["maranhense", "nordestina", "tradicional", "regional", "turístico"],
            preco_medio: 55,
            estrelas: 4.7,
            avaliacoes: 2450,
            cardapio: [
                { id: "arroz-cuxa", nome: "🍚 Arroz de Cuxá", descricao: "Arroz com cuxá (vinagreira), gergelim, camarão seco e amendoim. Prato típico maranhense.", preco: 38, recuperacao: { fome: 60, felicidade: 24, energia: 15 } },
                { id: "camarao-maranhao", nome: "🍤 Camarão Maranhense", descricao: "Camarões ao leite de coco com arroz e farofa.", preco: 52, recuperacao: { fome: 65, felicidade: 26, energia: 16 } },
                { id: "peixe-sl", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco da costa maranhense.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "moqueca-sl", nome: "🍲 Moqueca Maranhense", descricao: "Moqueca de peixe com leite de coco e azeite.", preco: 65, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "caipirinha-sl", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO HISTÓRICO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Reviver",
            endereco: "Rua Portugal, 300 - Centro Histórico, São Luís",
            horario: "11h às 22h",
            telefone: "(98) 3333-2222",
            descricao: "Peixes frescos do litoral maranhense. Especialidade em peixes e frutos do mar.",
            tipo: ["peixaria", "maranhense", "frutos-do-mar", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "peixe-reviver", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia grelhado.", preco: 45, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "camarao-reviver", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 18 } },
                { id: "moqueca-reviver", nome: "🍲 Moqueca", descricao: "Moqueca maranhense.", preco: 62, recuperacao: { fome: 72, energia: 24, felicidade: 18 } },
                { id: "arroz-cuxa-reviver", nome: "🍚 Arroz de Cuxá", descricao: "Arroz típico.", preco: 35, recuperacao: { fome: 55, felicidade: 22, energia: 14 } },
                { id: "suco-reviver", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PRAIA DO CALHAU - FRUTOS DO MAR ==========
        "calhau-frutos": {
            id: "calhau-frutos",
            nome: "🐟 Restaurante Calhau",
            endereco: "Av. Litorânea, 1000 - Calhau, São Luís",
            horario: "11h às 23h",
            telefone: "(98) 3444-3333",
            descricao: "Frutos do mar com vista para o mar. Especialidade em lagosta, camarão e peixes.",
            tipo: ["frutos-do-mar", "maranhense", "vista", "premium", "turístico"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 2340,
            cardapio: [
                { id: "lagosta-calhau", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga.", preco: 125, recuperacao: { fome: 88, felicidade: 42, energia: 28 } },
                { id: "camarao-calhau", nome: "🍤 Camarão", descricao: "Camarão internacional.", preco: 72, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "moqueca-calhau", nome: "🍲 Moqueca", descricao: "Moqueca maranhense.", preco: 78, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "peixe-calhau", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "caipirinha-calhau", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 20, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. PRAIA DE SÃO MARCOS - QUIOSQUE ==========
        "sao-marcos-quiosque": {
            id: "sao-marcos-quiosque",
            nome: "🏖️ Quiosque São Marcos",
            endereco: "Orla de São Marcos, São Luís",
            horario: "08h às 22h",
            telefone: "(98) 3555-4444",
            descricao: "Quiosque na praia de São Marcos. Petiscos, frutos do mar e água de coco.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "casual"],
            preco_medio: 38,
            estrelas: 4.4,
            avaliacoes: 1870,
            cardapio: [
                { id: "agua-coco-sm", nome: "🥥 Água de Coco", descricao: "Água de coco gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-sm", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 40, recuperacao: { fome: 44, felicidade: 18, energia: 10 } },
                { id: "isca-sm", nome: "🐟 Isca de Peixe", descricao: "Isca empanada.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-sm", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "suco-sm", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. RENASCENÇA - CHURRASCARIA ==========
        "renascenca-churrascaria": {
            id: "renascenca-churrascaria",
            nome: "🥩 Churrascaria Renascença",
            endereco: "Av. dos Holandeses, 1000 - Renascença, São Luís",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(98) 3666-5555",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-ren", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-ren", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-ren", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-ren", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-ren", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. PONTA D'AREIA - BOTECO ==========
        "ponta-areia-boteco": {
            id: "ponta-areia-boteco",
            nome: "🍺 Boteco Ponta d'Areia",
            endereco: "Rua Ponta d'Areia, 300 - Ponta d'Areia, São Luís",
            horario: "17h às 03h",
            telefone: "(98) 3777-6666",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-pa", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-pa", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-pa", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-pa", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-pa", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 7. COHAFUMA - PIZZARIA ==========
        "cohafuma-pizzaria": {
            id: "cohafuma-pizzaria",
            nome: "🍕 Pizzaria Cohafuma",
            endereco: "Av. Cohafuma, 500 - Cohafuma, São Luís",
            horario: "18h às 23h30",
            telefone: "(98) 3888-7777",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-co", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-co", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-co", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-co", nome: "🥟 Calzone", descricao: "Calzone.", preco: 40, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-co", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 8. TURU - COMIDA NORDESTINA ==========
        "turu-nordestina": {
            id: "turu-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Turu, 500 - Turu, São Luís",
            horario: "11h às 21h",
            telefone: "(98) 3999-8888",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-turu", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-turu", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-turu", nome: "🍲 Panelada", descricao: "Panelada.", preco: 36, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-turu", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-turu", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. JARDIM RENASCENÇA - HAMBURGUERIA ==========
        "jardim-renascenca-hamburguer": {
            id: "jardim-renascenca-hamburguer",
            nome: "🍔 Hamburgueria Renascença",
            endereco: "Rua Jardim Renascença, 300 - Jardim Renascença, São Luís",
            horario: "18h às 00h",
            telefone: "(98) 4000-9999",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-jr", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 36, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-jr", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-jr", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-jr", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-jr", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 10. VINHAIS - CAFÉ REGIONAL ==========
        "vinhais-cafe": {
            id: "vinhais-cafe",
            nome: "☕ Café Vinhais",
            endereco: "Rua Vinhais, 200 - Vinhais, São Luís",
            horario: "08h às 20h",
            telefone: "(98) 4111-0000",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-vin", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-vin", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-vin", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-vin", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-vin", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. ALEMANHA - TAPIOCARIA ==========
        "alemanha-tapiocaria": {
            id: "alemanha-tapiocaria",
            nome: "🥞 Tapiocaria Alemanha",
            endereco: "Rua Alemanha, 300 - Alemanha, São Luís",
            horario: "08h às 21h",
            telefone: "(98) 4222-1111",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-carne-al", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-al", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-al", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-al", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-al", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. CIDADE OPERÁRIA - COMIDA CASEIRA ==========
        "cidade-operaria-caseira": {
            id: "cidade-operaria-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Cidade Operária, 500 - Cidade Operária, São Luís",
            horario: "11h às 15h",
            telefone: "(98) 4333-2222",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-co", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-co", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-co", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-co", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-co", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 13. BAIRRO DA LIBERDADE - COMIDA ÁRABE ==========
        "liberdade-arabe": {
            id: "liberdade-arabe",
            nome: "🧆 Al Balad São Luís",
            endereco: "Rua Liberdade, 300 - Bairro da Liberdade, São Luís",
            horario: "11h às 23h",
            telefone: "(98) 4444-3333",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 48,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "banquete-lib", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 72, recuperacao: { fome: 82, felicidade: 30, energia: 18 } },
                { id: "esfiha-lib", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 8 } },
                { id: "kibe-lib", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-lib", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "suco-lib", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. ANIL - PEIXARIA ==========
        "anil-peixaria": {
            id: "anil-peixaria",
            nome: "🐟 Peixaria Anil",
            endereco: "Av. dos Anil, 500 - Anil, São Luís",
            horario: "11h às 21h",
            telefone: "(98) 4555-4444",
            descricao: "Peixes frescos.",
            tipo: ["peixaria", "maranhense", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-anil", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 42, recuperacao: { fome: 58, energia: 19, felicidade: 15 } },
                { id: "camarao-anil", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "moqueca-anil", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "arroz-cuxa-anil", nome: "🍚 Arroz de Cuxá", descricao: "Arroz típico.", preco: 32, recuperacao: { fome: 50, felicidade: 18, energia: 12 } },
                { id: "suco-anil", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. COROADINHO - RESTAURANTE POPULAR ==========
        "coroadinho-popular": {
            id: "coroadinho-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Coroadinho, 500 - Coroadinho, São Luís",
            horario: "11h às 14h",
            telefone: "(98) 4666-5555",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "prato-feito-cor", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cor", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cor", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cor", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cor", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SÃO FRANCISCO - COMIDA ITALIANA ==========
        "sao-francisco-italiana": {
            id: "sao-francisco-italiana",
            nome: "🍝 Cantina São Francisco",
            endereco: "Rua São Francisco, 200 - São Francisco, São Luís",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(98) 4777-6666",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-sf", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-sf", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-sf", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-sf", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-sf", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 17. JOÃO PAULO - LANCHONETE ==========
        "joao-paulo-lanchonete": {
            id: "joao-paulo-lanchonete",
            nome: "🍔 Lanchonete João Paulo",
            endereco: "Rua João Paulo, 500 - João Paulo, São Luís",
            horario: "08h às 22h",
            telefone: "(98) 4888-7777",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-jp", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-jp", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-jp", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-jp", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-jp", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. SHOPPING DA ILHA ==========
        "shopping-ilha": {
            id: "shopping-ilha",
            nome: "🛍️ Shopping da Ilha - Food Court",
            endereco: "Av. Daniel de La Touche, 1000 - Cohama, São Luís",
            horario: "10h às 22h",
            telefone: "(98) 4999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-ilha", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ilha", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-ilha", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-ilha", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ilha", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. RIO ANIL SHOPPING ==========
        "rio-anil-shopping": {
            id: "rio-anil-shopping",
            nome: "🛍️ Rio Anil Shopping - Food Court",
            endereco: "Av. dos Portugueses, 1000 - Anil, São Luís",
            horario: "10h às 22h",
            telefone: "(98) 5000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-ra", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ra", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ra", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ra", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ra", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-sao-luis": {
            id: "aeroporto-sao-luis",
            nome: "✈️ Aeroporto Marechal Cunha Machado - Praça de Alimentação",
            endereco: "Av. dos Libaneses, s/n - Tirirical, São Luís",
            horario: "04h às 23h",
            telefone: "(98) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-ma", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-ma", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-ma", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-ma", nome: "☕ Café Maranhense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-ma", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== IMPERATRIZ - 10 RESTAURANTES ====================
    "Imperatriz": {
        // ========== 1. CENTRO - CULINÁRIA TOCANTINA ==========
        "imperatriz-tocantina": {
            id: "imperatriz-tocantina",
            nome: "🐟 Culinária Tocantina",
            endereco: "Av. Bernardo Sayão, 500 - Centro, Imperatriz",
            horario: "11h às 22h",
            telefone: "(99) 3222-1111",
            descricao: "Especialidade em peixes do rio Tocantins. Tambaqui, pirarucu e surubim. Ambiente familiar.",
            tipo: ["maranhense", "regional", "peixes", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-imp", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa.", preco: 52, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "pirarucu-imp", nome: "🐟 Pirarucu", descricao: "Filé de pirarucu grelhado.", preco: 55, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "surubim-imp", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 48, recuperacao: { fome: 64, felicidade: 23, energia: 16 } },
                { id: "camarao-imp", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "suco-imp", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "imperatriz-churrascaria": {
            id: "imperatriz-churrascaria",
            nome: "🥩 Churrascaria Imperatriz",
            endereco: "Av. Transamazônica, 1000 - Centro, Imperatriz",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(99) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-imp", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-imp", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-imp", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-imp", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-imp-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "imperatriz-boteco": {
            id: "imperatriz-boteco",
            nome: "🍺 Boteco Imperatriz",
            endereco: "Rua 15 de Novembro, 300 - Centro, Imperatriz",
            horario: "17h às 02h",
            telefone: "(99) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-imp", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-imp", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-imp", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-imp", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-imp", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "imperatriz-pizzaria": {
            id: "imperatriz-pizzaria",
            nome: "🍕 Pizzaria Imperatriz",
            endereco: "Av. Couto Magalhães, 300 - Centro, Imperatriz",
            horario: "18h às 23h30",
            telefone: "(99) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-im", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-im", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-im", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-im", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-im-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "imperatriz-cafe": {
            id: "imperatriz-cafe",
            nome: "☕ Café Imperatriz",
            endereco: "Rua Godofredo Viana, 200 - Centro, Imperatriz",
            horario: "08h às 20h",
            telefone: "(99) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-im", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-im", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-im", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-im", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-im-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "imperatriz-hamburguer": {
            id: "imperatriz-hamburguer",
            nome: "🍔 Hamburgueria Imperatriz",
            endereco: "Rua Maranhão, 300 - Centro, Imperatriz",
            horario: "18h às 00h",
            telefone: "(99) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-im", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-im", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-im-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-im", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-im", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "imperatriz-tapiocaria": {
            id: "imperatriz-tapiocaria",
            nome: "🥞 Tapiocaria Imperatriz",
            endereco: "Rua Tocantins, 200 - Centro, Imperatriz",
            horario: "08h às 21h",
            telefone: "(99) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-im", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-im", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-im", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-im", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-im-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "imperatriz-caseira": {
            id: "imperatriz-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 7 de Setembro, 200 - Centro, Imperatriz",
            horario: "11h às 15h",
            telefone: "(99) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-im", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-im", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-im", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-im", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-im-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-imperatriz": {
            id: "shopping-imperatriz",
            nome: "🛍️ Shopping Imperatriz - Food Court",
            endereco: "Av. Bernardo Sayão, 2000 - Centro, Imperatriz",
            horario: "10h às 22h",
            telefone: "(99) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-im", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-im", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-im", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-im", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-im-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-imperatriz": {
            id: "rodoviaria-imperatriz",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-010, km 300 - Centro, Imperatriz",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-im", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-im-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-im", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-im", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-im-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== SÃO JOSÉ DE RIBAMAR - 10 RESTAURANTES ====================
    "São José de Ribamar": {
        // ========== 1. CENTRO - COMIDA RIBEIRINHA ==========
        "ribamar-ribeirinha": {
            id: "ribamar-ribeirinha",
            nome: "🐟 Sabor Ribeirinho",
            endereco: "Av. Beira Mar, 500 - Centro, São José de Ribamar",
            horario: "11h às 22h",
            telefone: "(98) 3222-1111",
            descricao: "Culinária ribeirinha. Peixes frescos e frutos do mar. Vista para o mar.",
            tipo: ["maranhense", "ribeirinha", "frutos-do-mar", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "peixe-rib", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco grelhado.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-rib", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-rib", nome: "🍲 Moqueca", descricao: "Moqueca maranhense.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "arroz-cuxa-rib", nome: "🍚 Arroz de Cuxá", descricao: "Arroz típico.", preco: 32, recuperacao: { fome: 50, felicidade: 18, energia: 12 } },
                { id: "suco-rib", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "ribamar-peixaria": {
            id: "ribamar-peixaria",
            nome: "🐟 Peixaria Ribamar",
            endereco: "Rua São José, 300 - Centro, São José de Ribamar",
            horario: "11h às 21h",
            telefone: "(98) 3333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "maranhense", "familiar"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tambaqui-sjr", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 48, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "pirarucu-sjr", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-sjr", nome: "🍤 Camarão", descricao: "Camarão.", preco: 44, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "moqueca-sjr", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "suco-sjr", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "ribamar-boteco": {
            id: "ribamar-boteco",
            nome: "🍺 Boteco Ribamar",
            endereco: "Rua 7 de Setembro, 200 - Centro, São José de Ribamar",
            horario: "17h às 02h",
            telefone: "(98) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-sjr", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-sjr", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-sjr", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-sjr", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-sjr", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "ribamar-pizzaria": {
            id: "ribamar-pizzaria",
            nome: "🍕 Pizzaria Ribamar",
            endereco: "Av. Principal, 300 - Centro, São José de Ribamar",
            horario: "18h às 23h30",
            telefone: "(98) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-sjr", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-sjr", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-sjr", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-sjr", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-sjr-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "ribamar-cafe": {
            id: "ribamar-cafe",
            nome: "☕ Café Ribamar",
            endereco: "Rua Getúlio Vargas, 200 - Centro, São José de Ribamar",
            horario: "08h às 20h",
            telefone: "(98) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-sjr", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-sjr", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-sjr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-sjr", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-sjr-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "ribamar-hamburguer": {
            id: "ribamar-hamburguer",
            nome: "🍔 Hamburgueria Ribamar",
            endereco: "Rua Nova, 300 - Centro, São José de Ribamar",
            horario: "18h às 00h",
            telefone: "(98) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-sjr", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-sjr", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-sjr-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-sjr", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-sjr", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "ribamar-tapiocaria": {
            id: "ribamar-tapiocaria",
            nome: "🥞 Tapiocaria Ribamar",
            endereco: "Rua da Praia, 200 - Centro, São José de Ribamar",
            horario: "08h às 21h",
            telefone: "(98) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-sjr", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-sjr", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-sjr", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-sjr", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-sjr-tapi", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "ribamar-caseira": {
            id: "ribamar-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 15 de Novembro, 200 - Centro, São José de Ribamar",
            horario: "11h às 15h",
            telefone: "(98) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-sjr", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-sjr", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-sjr", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-sjr", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-sjr-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. QUIOSQUE PRAIA ==========
        "ribamar-quiosque": {
            id: "ribamar-quiosque",
            nome: "🏖️ Quiosque Ribamar",
            endereco: "Orla de São José de Ribamar - Praia",
            horario: "08h às 21h",
            telefone: "(98) 4000-9999",
            descricao: "Quiosque na praia. Petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "casual"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "agua-coco-quio", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 7, recuperacao: { sede: 30, felicidade: 8, energia: 5 } },
                { id: "camarao-quio", nome: "🍤 Camarão", descricao: "Camarão crocante.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "isca-quio", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 25, recuperacao: { fome: 30, felicidade: 12, energia: 7 } },
                { id: "pastel-quio", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "suco-quio", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-ribamar": {
            id: "rodoviaria-ribamar",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "MA-201, km 10 - Centro, São José de Ribamar",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-sjr", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-sjr-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-sjr", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-sjr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-sjr-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesMA;