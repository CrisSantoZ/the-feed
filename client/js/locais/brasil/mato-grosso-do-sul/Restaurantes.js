export const restaurantesMS = {
    // ==================== CAMPO GRANDE (CAPITAL) - 20 RESTAURANTES ====================
    "Campo Grande": {
        // ========== 1. CENTRO - CULINÁRIA SUL-MATO-GROSSENSE (SOBÁ) ==========
        "centro-soba": {
            id: "centro-soba",
            nome: "🍜 Sobá Sul-Mato-Grossense",
            endereco: "Rua 14 de Julho, 500 - Centro, Campo Grande",
            horario: "11h às 22h",
            telefone: "(67) 3222-1111",
            descricao: "Restaurante tradicional especializado em sobá, prato típico sul-mato-grossense de influência japonesa. Caldo com macarrão, frango e legumes.",
            tipo: ["sul-mato-grossense", "japonesa", "tradicional", "regional", "familiar"],
            preco_medium: 45,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "soba-tradicional", nome: "🍜 Sobá Tradicional", descricao: "Caldo de frango com macarrão, cebolinha, ovo e legumes.", preco: 32, recuperacao: { fome: 55, felicidade: 22, energia: 16 } },
                { id: "soba-camarao", nome: "🍜 Sobá de Camarão", descricao: "Sobá com camarões e legumes.", preco: 42, recuperacao: { fome: 60, felicidade: 26, energia: 17 } },
                { id: "soba-carne", nome: "🍜 Sobá de Carne", descricao: "Sobá com carne bovina.", preco: 38, recuperacao: { fome: 58, felicidade: 24, energia: 16 } },
                { id: "soba-vegetariano", nome: "🥬 Sobá Vegetariano", descricao: "Sobá com legumes.", preco: 32, recuperacao: { fome: 52, felicidade: 22, energia: 14 } },
                { id: "suco-soba", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Pantanal",
            endereco: "Rua Rui Barbosa, 300 - Centro, Campo Grande",
            horario: "11h às 22h",
            telefone: "(67) 3333-2222",
            descricao: "Peixes frescos do Pantanal. Pintado, pacu, dourado e piranha.",
            tipo: ["peixaria", "sul-mato-grossense", "pantaneira", "familiar"],
            preco_medium: 55,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "pintado-cg", nome: "🐟 Pintado Grelhado", descricao: "Pintado do Pantanal grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pacu-cg", nome: "🐟 Pacu Assado", descricao: "Pacu assado na brasa.", preco: 52, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "dourado-cg", nome: "🐟 Dourado", descricao: "Dourado grelhado.", preco: 62, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "caldo-piranha-cg", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico pantaneiro.", preco: 22, recuperacao: { fome: 28, felicidade: 16, energia: 9 } },
                { id: "suco-cg", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. JARDIM DOS ESTADOS - CHURRASCARIA ==========
        "jardim-estados-churrascaria": {
            id: "jardim-estados-churrascaria",
            nome: "🥩 Churrascaria Jardim",
            endereco: "Av. Mato Grosso, 1000 - Jardim dos Estados, Campo Grande",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(67) 3444-3333",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 75,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-je", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 79, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-je", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-je", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-je", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-je", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. SANTA FÉ - BOTECO ==========
        "santa-fe-boteco": {
            id: "santa-fe-boteco",
            nome: "🍺 Boteco Santa Fé",
            endereco: "Rua Santa Fé, 300 - Santa Fé, Campo Grande",
            horario: "17h às 02h",
            telefone: "(67) 3555-4444",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 28,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-sf", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-sf", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-sf", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-sf", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-sf", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 5. AMANTINO - PIZZARIA ==========
        "amantino-pizzaria": {
            id: "amantino-pizzaria",
            nome: "🍕 Pizzaria Amantino",
            endereco: "Rua Amantino, 500 - Amantino, Campo Grande",
            horario: "18h às 23h30",
            telefone: "(67) 3666-5555",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-am", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-am", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-am", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-am", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-am", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 6. MONTE CASTELO - HAMBURGUERIA ==========
        "monte-castelo-hamburguer": {
            id: "monte-castelo-hamburguer",
            nome: "🍔 Hamburgueria Monte Castelo",
            endereco: "Rua Monte Castelo, 300 - Monte Castelo, Campo Grande",
            horario: "18h às 00h",
            telefone: "(67) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-mc", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-mc", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-mc", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-mc", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-mc", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 7. TIRADENTES - CAFÉ REGIONAL ==========
        "tiradentes-cafe": {
            id: "tiradentes-cafe",
            nome: "☕ Café Tiradentes",
            endereco: "Rua Tiradentes, 300 - Tiradentes, Campo Grande",
            horario: "08h às 20h",
            telefone: "(67) 3888-7777",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-tir", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-tir", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-tir", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-tir", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-tir", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. BAIRRO ALTO - COMIDA PANTANEIRA ==========
        "bairro-alto-pantaneira": {
            id: "bairro-alto-pantaneira",
            nome: "🌿 Sabor Pantaneiro",
            endereco: "Rua Bairro Alto, 500 - Bairro Alto, Campo Grande",
            horário: "11h às 22h",
            telefone: "(67) 3999-8888",
            descricao: "Culinária pantaneira autêntica.",
            tipo: ["pantaneira", "sul-mato-grossense", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "pintado-ba", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 56, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pacu-ba", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 50, recuperacao: { fome: 63, felicidade: 23, energia: 15 } },
                { id: "caldo-piranha-ba", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico.", preco: 20, recuperacao: { fome: 26, felicidade: 15, energia: 8 } },
                { id: "arroz-carreteiro-ba", nome: "🍚 Arroz Carreteiro", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 58, felicidade: 20, energia: 14 } },
                { id: "suco-ba", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SÃO FRANCISCO - TAPIOCARIA ==========
        "sao-francisco-tapiocaria": {
            id: "sao-francisco-tapiocaria",
            nome: "🥞 Tapiocaria São Francisco",
            endereco: "Rua São Francisco, 200 - São Francisco, Campo Grande",
            horario: "08h às 21h",
            telefone: "(67) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-sf", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-sf", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-sf", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-sf", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-sf", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. JARDIM AUTONOMISTA - COMIDA CASEIRA ==========
        "jardim-autonomista-caseira": {
            id: "jardim-autonomista-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Autonomista, 300 - Jardim Autonomista, Campo Grande",
            horario: "11h às 15h",
            telefone: "(67) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-ja", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-ja", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-ja", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-ja", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-ja", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. NOVA LIMA - COMIDA ÁRABE ==========
        "nova-lima-arabe": {
            id: "nova-lima-arabe",
            nome: "🧆 Al Balad Campo Grande",
            endereco: "Rua Nova Lima, 300 - Nova Lima, Campo Grande",
            horario: "11h às 23h",
            telefone: "(67) 4222-1111",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "banquete-nl", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "esfiha-nl", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 8 } },
                { id: "kibe-nl", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-nl", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "suco-nl", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. CORONEL ANTONINO - PEIXARIA ==========
        "coronel-antonino-peixaria": {
            id: "coronel-antonino-peixaria",
            nome: "🐟 Peixaria Coronel",
            endereco: "Rua Coronel Antonino, 500 - Coronel Antonino, Campo Grande",
            horario: "11h às 21h",
            telefone: "(67) 4333-2222",
            descricao: "Peixes frescos do Pantanal.",
            tipo: ["peixaria", "sul-mato-grossense", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-ca", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-ca", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 50, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-ca", nome: "🍲 Moqueca", descricao: "Moqueca pantaneira.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caldo-piranha-ca", nome: "🥣 Caldo de Piranha", descricao: "Caldo típico.", preco: 20, recuperacao: { fome: 26, felicidade: 15, energia: 8 } },
                { id: "suco-ca", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. VILAS BOAS - RESTAURANTE POPULAR ==========
        "vilas-boas-popular": {
            id: "vilas-boas-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Vilas Boas, 500 - Vilas Boas, Campo Grande",
            horario: "11h às 14h",
            telefone: "(67) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1240,
            cardapio: [
                { id: "prato-feito-vb", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-vb", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-vb", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-vb", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-vb", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. CABREÚVA - COMIDA ITALIANA ==========
        "cabreuva-italiana": {
            id: "cabreuva-italiana",
            nome: "🍝 Cantina Cabreúva",
            endereco: "Rua Cabreúva, 300 - Cabreúva, Campo Grande",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(67) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medium: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-cab", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-cab", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-cab", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-cab", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-cab", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. LOS ANGELES - LANCHONETE ==========
        "los-angeles-lanchonete": {
            id: "los-angeles-lanchonete",
            nome: "🍔 Lanchonete Los Angeles",
            endereco: "Rua Los Angeles, 500 - Los Angeles, Campo Grande",
            horario: "08h às 22h",
            telefone: "(67) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medium: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-la", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-la", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-la", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-la", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-la", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SHOPPING CAMPO GRANDE ==========
        "shopping-campo-grande": {
            id: "shopping-campo-grande",
            nome: "🛍️ Shopping Campo Grande - Food Court",
            endereco: "Av. Afonso Pena, 1000 - Centro, Campo Grande",
            horario: "10h às 22h",
            telefone: "(67) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-cg", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cg", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-cg", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-cg", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-cg", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SHOPPING NORTE SUL ==========
        "shopping-norte-sul": {
            id: "shopping-norte-sul",
            nome: "🛍️ Shopping Norte Sul - Food Court",
            endereco: "Av. Norte Sul, 2000 - Centro, Campo Grande",
            horario: "10h às 22h",
            telefone: "(67) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-ns", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ns", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ns", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ns", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ns", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. AEROPORTO ==========
        "aeroporto-campo-grande": {
            id: "aeroporto-campo-grande",
            nome: "✈️ Aeroporto de Campo Grande - Praça de Alimentação",
            endereco: "Av. Duque de Caxias, s/n - Aeroporto, Campo Grande",
            horario: "04h às 23h",
            telefone: "(67) 4999-8888",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-ms", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-ms", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-ms", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-ms", nome: "☕ Café Sul-Mato-Grossense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-ms", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 19. PARQUE DO POVO - QUIOSQUE ==========
        "parque-povo-quiosque": {
            id: "parque-povo-quiosque",
            nome: "🏞️ Quiosque Parque do Povo",
            endereco: "Parque do Povo - Av. Afonso Pena, Campo Grande",
            horario: "09h às 20h",
            telefone: "(67) 5000-9999",
            descricao: "Quiosque no parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pp", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pp", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pp", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pp", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pp", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-campo-grande": {
            id: "rodoviaria-campo-grande",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Gury Marques, 500 - Centro, Campo Grande",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-cg", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-cg-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-cg", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-cg", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-cg-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== DOURADOS - 10 RESTAURANTES ====================
    "Dourados": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "dourados-churrascaria": {
            id: "dourados-churrascaria",
            nome: "🥩 Churrascaria Dourados",
            endereco: "Av. Marcelino Pires, 500 - Centro, Dourados",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(67) 3222-1111",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-dou", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-dou", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-dou", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-dou", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-dou", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - SOBÁ ==========
        "dourados-soba": {
            id: "dourados-soba",
            nome: "🍜 Sobá Dourados",
            endereco: "Rua Joaquim Teixeira Alves, 300 - Centro, Dourados",
            horario: "11h às 21h",
            telefone: "(67) 3333-2222",
            descricao: "Especialidade em sobá, prato típico sul-mato-grossense.",
            tipo: ["sul-mato-grossense", "japonesa", "regional", "familiar"],
            preco_medium: 42,
            estrelas: 4.6,
            avaliacoes: 670,
            cardapio: [
                { id: "soba-dou", nome: "🍜 Sobá Tradicional", descricao: "Sobá com frango.", preco: 32, recuperacao: { fome: 55, felicidade: 22, energia: 16 } },
                { id: "soba-camarao-dou", nome: "🍜 Sobá de Camarão", descricao: "Sobá com camarões.", preco: 42, recuperacao: { fome: 60, felicidade: 26, energia: 17 } },
                { id: "soba-carne-dou", nome: "🍜 Sobá de Carne", descricao: "Sobá com carne.", preco: 38, recuperacao: { fome: 58, felicidade: 24, energia: 16 } },
                { id: "yakisoba-dou", nome: "🍜 Yakisoba", descricao: "Macarrão japonês.", preco: 35, recuperacao: { fome: 55, felicidade: 20, energia: 14 } },
                { id: "suco-dou-soba", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "dourados-boteco": {
            id: "dourados-boteco",
            nome: "🍺 Boteco Dourados",
            endereco: "Rua 15 de Novembro, 200 - Centro, Dourados",
            horario: "17h às 02h",
            telefone: "(67) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-dou", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-dou", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-dou", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-dou", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-dou", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "dourados-pizzaria": {
            id: "dourados-pizzaria",
            nome: "🍕 Pizzaria Dourados",
            endereco: "Av. Weimar Gonçalves Torres, 300 - Centro, Dourados",
            horario: "18h às 23h30",
            telefone: "(67) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-dou", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-dou", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-dou", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-dou", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-dou-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "dourados-cafe": {
            id: "dourados-cafe",
            nome: "☕ Café Dourados",
            endereco: "Rua Bento Lobo, 200 - Centro, Dourados",
            horario: "08h às 20h",
            telefone: "(67) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-dou", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-dou", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-dou", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-dou", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-dou-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "dourados-hamburguer": {
            id: "dourados-hamburguer",
            nome: "🍔 Hamburgueria Dourados",
            endereco: "Rua Monte Castelo, 300 - Centro, Dourados",
            horario: "18h às 00h",
            telefone: "(67) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-dou", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-dou", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-dou-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-dou", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-dou", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "dourados-tapiocaria": {
            id: "dourados-tapiocaria",
            nome: "🥞 Tapiocaria Dourados",
            endereco: "Rua Presidente Vargas, 200 - Centro, Dourados",
            horario: "08h às 21h",
            telefone: "(67) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-dou", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-dou", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-dou", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-dou", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-dou-tapi", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "dourados-caseira": {
            id: "dourados-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 7 de Setembro, 200 - Centro, Dourados",
            horario: "11h às 15h",
            telefone: "(67) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-dou", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-dou", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-dou", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-dou", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-dou-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-dourados": {
            id: "shopping-dourados",
            nome: "🛍️ Shopping Dourados - Food Court",
            endereco: "Av. Marcelino Pires, 1500 - Centro, Dourados",
            horario: "10h às 22h",
            telefone: "(67) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-dou", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-dou", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-dou", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-dou", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-dou-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-dourados": {
            id: "rodoviaria-dourados",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Presidente Vargas, 500 - Centro, Dourados",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-dou", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-dou-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-dou", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-dou", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-dou-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== TRÊS LAGOAS - 10 RESTAURANTES ====================
    "Três Lagoas": {
        // ========== 1. CENTRO - PEIXES DO RIO PARANÁ ==========
        "tres-lagoas-peixes": {
            id: "tres-lagoas-peixes",
            nome: "🐟 Peixaria do Paraná",
            endereco: "Av. Ranulpho Marques Leal, 500 - Centro, Três Lagoas",
            horario: "11h às 22h",
            telefone: "(67) 3222-1111",
            descricao: "Peixes frescos do rio Paraná. Pintado, pacu, dourado e curimbatá.",
            tipo: ["peixaria", "sul-mato-grossense", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "pintado-tl", nome: "🐟 Pintado", descricao: "Pintado grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pacu-tl", nome: "🐟 Pacu", descricao: "Pacu assado.", preco: 50, recuperacao: { fome: 63, felicidade: 23, energia: 15 } },
                { id: "dourado-tl", nome: "🐟 Dourado", descricao: "Dourado grelhado.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "curimbata-tl", nome: "🐟 Curimbatá", descricao: "Curimbatá frito.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "suco-tl", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "tres-lagoas-churrascaria": {
            id: "tres-lagoas-churrascaria",
            nome: "🥩 Churrascaria Três Lagoas",
            endereco: "Av. Rosário Congro, 500 - Centro, Três Lagoas",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(67) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-tl", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-tl", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-tl", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-tl", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-tl-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "tres-lagoas-boteco": {
            id: "tres-lagoas-boteco",
            nome: "🍺 Boteco Três Lagoas",
            endereco: "Rua 7 de Setembro, 200 - Centro, Três Lagoas",
            horario: "17h às 02h",
            telefone: "(67) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-tl", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-tl", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-tl", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-tl", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-tl", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "tres-lagoas-pizzaria": {
            id: "tres-lagoas-pizzaria",
            nome: "🍕 Pizzaria Três Lagoas",
            endereco: "Av. Antônio Trajano, 300 - Centro, Três Lagoas",
            horario: "18h às 23h30",
            telefone: "(67) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-tl", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-tl", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-tl", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-tl", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-tl-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "tres-lagoas-cafe": {
            id: "tres-lagoas-cafe",
            nome: "☕ Café Três Lagoas",
            endereco: "Rua 10, 200 - Centro, Três Lagoas",
            horario: "08h às 20h",
            telefone: "(67) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-tl", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-tl", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-tl", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-tl", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-tl-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "tres-lagoas-hamburguer": {
            id: "tres-lagoas-hamburguer",
            nome: "🍔 Hamburgueria Três Lagoas",
            endereco: "Rua 12, 300 - Centro, Três Lagoas",
            horario: "18h às 00h",
            telefone: "(67) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-tl", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-tl", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-tl-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-tl", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-tl", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "tres-lagoas-tapiocaria": {
            id: "tres-lagoas-tapiocaria",
            nome: "🥞 Tapiocaria Três Lagoas",
            endereco: "Rua 15, 200 - Centro, Três Lagoas",
            horario: "08h às 21h",
            telefone: "(67) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-tl", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-tl", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-tl", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-tl", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-tl-tapi", nome: "🥤 Suco", descricao: "Suco de cajá.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "tres-lagoas-caseira": {
            id: "tres-lagoas-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 18, 200 - Centro, Três Lagoas",
            horario: "11h às 15h",
            telefone: "(67) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-tl", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-tl", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-tl", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-tl", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-tl-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-tres-lagoas": {
            id: "shopping-tres-lagoas",
            nome: "🛍️ Shopping Três Lagoas - Food Court",
            endereco: "Av. Rosário Congro, 2000 - Centro, Três Lagoas",
            horario: "10h às 22h",
            telefone: "(67) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-tl", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-tl", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-tl", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-tl", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-tl-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-tres-lagoas": {
            id: "rodoviaria-tres-lagoas",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Ranulpho Marques Leal, 1500 - Centro, Três Lagoas",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-tl", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-tl-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-tl", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-tl", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-tl-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesMS;