export const restaurantesRR = {
    // ==================== BOA VISTA (CAPITAL) - 20 RESTAURANTES ====================
    "Boa Vista": {
        // ========== 1. CENTRO - CULINÁRIA RORAIMENSE (PEIXES DO RIO BRANCO) ==========
        "centro-roraimense": {
            id: "centro-roraimense",
            nome: "🐟 Culinária Roraimense",
            endereco: "Rua Barão do Rio Branco, 200 - Centro, Boa Vista",
            horario: "11h às 22h",
            telefone: "(95) 3222-1111",
            descricao: "Restaurante tradicional com culinária roraimense autêntica. Especialidade em peixes do rio Branco como tambaqui, pirarucu e tucunaré. Ambiente familiar.",
            tipo: ["roraimense", "amazonica", "tradicional", "regional", "familiar"],
            preco_medio: 50,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "tambaqui-bv", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa com farinha.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-bv", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado com legumes.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "tucunare-bv", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 52, recuperacao: { fome: 65, felicidade: 26, energia: 17 } },
                { id: "camarao-bv", nome: "🍤 Camarão do Branco", descricao: "Camarões grandes alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-bv", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Branco",
            endereco: "Av. Ville Roy, 300 - Centro, Boa Vista",
            horario: "11h às 22h",
            telefone: "(95) 3333-2222",
            descricao: "Peixes frescos do rio Branco. Especialidade em peixes regionais.",
            tipo: ["peixaria", "roraimense", "amazonica", "familiar"],
            preco_medio: 48,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "tambaqui-peixe", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-peixe", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "pacu-bv", nome: "🐟 Pacu", descricao: "Pacu grelhado.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-peixe", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-peixe", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. MECEJANA - FRUTOS DO RIO ==========
        "mecejana-frutos": {
            id: "mecejana-frutos",
            nome: "🐟 Restaurante Mecejana",
            endereco: "Av. Mário Homem de Melo, 500 - Mecejana, Boa Vista",
            horario: "11h às 23h",
            telefone: "(95) 3444-3333",
            descricao: "Frutos do rio com ambiente familiar.",
            tipo: ["peixaria", "roraimense", "vista", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-mec", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 56, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-mec", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 60, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "moqueca-mec", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 62, recuperacao: { fome: 72, felicidade: 30, energia: 19 } },
                { id: "camarao-mec", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 54, recuperacao: { fome: 64, felicidade: 26, energia: 17 } },
                { id: "caipirinha-mec", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. SÃO PEDRO - CHURRASCARIA ==========
        "sao-pedro-churrascaria": {
            id: "sao-pedro-churrascaria",
            nome: "🥩 Churrascaria São Pedro",
            endereco: "Av. São Pedro, 1000 - São Pedro, Boa Vista",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(95) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-sp", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-sp", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-sp", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-sp", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-sp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. ASA BRANCA - BOTECO ==========
        "asa-branca-boteco": {
            id: "asa-branca-boteco",
            nome: "🍺 Boteco Asa Branca",
            endereco: "Rua Asa Branca, 300 - Asa Branca, Boa Vista",
            horario: "17h às 02h",
            telefone: "(95) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "calabresa-ab", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-ab", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-ab", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-ab", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-ab", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. CAÇARI - PIZZARIA ==========
        "cacari-pizzaria": {
            id: "cacari-pizzaria",
            nome: "🍕 Pizzaria Caçari",
            endereco: "Rua Caçari, 300 - Caçari, Boa Vista",
            horario: "18h às 23h30",
            telefone: "(95) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-ca", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-ca", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-ca", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-ca", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-ca", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. BURITIS - HAMBURGUERIA ==========
        "buritis-hamburguer": {
            id: "buritis-hamburguer",
            nome: "🍔 Hamburgueria Buritis",
            endereco: "Rua Buritis, 300 - Buritis, Boa Vista",
            horario: "18h às 00h",
            telefone: "(95) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-bu", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-bu", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-bu", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-bu", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-bu", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. CENTRO - CAFÉ REGIONAL ==========
        "centro-cafe": {
            id: "centro-cafe",
            nome: "☕ Café Centro",
            endereco: "Rua Floriano Peixoto, 200 - Centro, Boa Vista",
            horario: "08h às 20h",
            telefone: "(95) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-cen", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cen", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cen", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cen", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-cen", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. JARDIM TROPICAL - TAPIOCARIA ==========
        "jardim-tropical-tapiocaria": {
            id: "jardim-tropical-tapiocaria",
            nome: "🥞 Tapiocaria Jardim",
            endereco: "Rua Jardim Tropical, 500 - Jardim Tropical, Boa Vista",
            horario: "08h às 21h",
            telefone: "(95) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-jt", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-jt", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-jt", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-jt", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-jt", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. NOVA CIDADE - COMIDA CASEIRA ==========
        "nova-cidade-caseira": {
            id: "nova-cidade-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Nova Cidade, 500 - Nova Cidade, Boa Vista",
            horario: "11h às 15h",
            telefone: "(95) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-nc", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-nc", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-nc", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-nc", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-nc", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. TANCREDO NEVES - COMIDA NORDESTINA ==========
        "tancredo-neves-nordestina": {
            id: "tancredo-neves-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Tancredo Neves, 500 - Tancredo Neves, Boa Vista",
            horario: "11h às 21h",
            telefone: "(95) 4222-1111",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-tn", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-tn", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-tn", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-tn", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-tn", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. PRICUMÃ - PEIXARIA ==========
        "pricuma-peixaria": {
            id: "pricuma-peixaria",
            nome: "🐟 Peixaria Pricumã",
            endereco: "Rua Pricumã, 500 - Pricumã, Boa Vista",
            horario: "11h às 21h",
            telefone: "(95) 4333-2222",
            descricao: "Peixes frescos do rio Branco.",
            tipo: ["peixaria", "roraimense", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-pr", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-pr", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-pr", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "tambaqui-pr", nome: "🐟 Tambaqui", descricao: "Tambaqui.", preco: 55, recuperacao: { fome: 66, energia: 24, felicidade: 17 } },
                { id: "suco-pr", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. SILVIO LEITE - RESTAURANTE POPULAR ==========
        "silvio-leite-popular": {
            id: "silvio-leite-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Silvio Leite, 500 - Silvio Leite, Boa Vista",
            horario: "11h às 14h",
            telefone: "(95) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "prato-feito-sl", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-sl", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-sl", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-sl", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-sl", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. APARECIDA - COMIDA ITALIANA ==========
        "aparecida-italiana": {
            id: "aparecida-italiana",
            nome: "🍝 Cantina Aparecida",
            endereco: "Rua Aparecida, 300 - Aparecida, Boa Vista",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(95) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-ap", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-ap", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-ap", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-ap", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-ap", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. SÃO VICENTE - LANCHONETE ==========
        "sao-vicente-lanchonete": {
            id: "sao-vicente-lanchonete",
            nome: "🍔 Lanchonete São Vicente",
            endereco: "Rua São Vicente, 500 - São Vicente, Boa Vista",
            horario: "08h às 22h",
            telefone: "(95) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-sv", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-sv", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-sv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-sv", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-sv", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. BOA VISTA SHOPPING ==========
        "boa-vista-shopping": {
            id: "boa-vista-shopping",
            nome: "🛍️ Boa Vista Shopping - Food Court",
            endereco: "Av. Ville Roy, 2000 - Centro, Boa Vista",
            horario: "10h às 22h",
            telefone: "(95) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 1890,
            cardapio: [
                { id: "mc-bvs", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-bvs", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-bvs", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-bvs", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-bvs", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. RORAIMA SHOPPING ==========
        "roraima-shopping": {
            id: "roraima-shopping",
            nome: "🛍️ Roraima Shopping - Food Court",
            endereco: "Av. Jaime Brasil, 1000 - Centro, Boa Vista",
            horario: "10h às 22h",
            telefone: "(95) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-rs", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-rs", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-rs", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-rs", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-rs", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. PARQUE ANAUÁ - QUIOSQUE ==========
        "parque-anaua-quiosque": {
            id: "parque-anaua-quiosque",
            nome: "🏞️ Quiosque Parque Anauá",
            endereco: "Parque Anauá - Av. Castelo Branco, Boa Vista",
            horario: "09h às 20h",
            telefone: "(95) 4999-8888",
            descricao: "Quiosque no parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pa", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pa", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pa", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pa", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pa", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-boa-vista": {
            id: "aeroporto-boa-vista",
            nome: "✈️ Aeroporto de Boa Vista - Praça de Alimentação",
            endereco: "BR-174, s/n - Aeroporto, Boa Vista",
            horario: "04h às 23h",
            telefone: "(95) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-aero-rr", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-rr", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-rr", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-rr", nome: "☕ Café Roraimense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-rr", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-boa-vista": {
            id: "rodoviaria-boa-vista",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Carlos Pereira de Melo, 500 - Centro, Boa Vista",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-bv", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-bv-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-bv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-bv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-bv-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== RORAINÓPOLIS - 10 RESTAURANTES ====================
    "Rorainópolis": {
        // ========== 1. CENTRO - CULINÁRIA REGIONAL ==========
        "rorainopolis-regional": {
            id: "rorainopolis-regional",
            nome: "🐟 Sabor Rorainópolis",
            endereco: "Av. Roraima, 500 - Centro, Rorainópolis",
            horario: "11h às 22h",
            telefone: "(95) 3222-1111",
            descricao: "Culinária regional de Rorainópolis. Peixes do rio e pratos típicos.",
            tipo: ["roraimense", "regional", "peixes", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tambaqui-rn", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-rn", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "carne-sol-rn", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "camarao-rn", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "suco-rn", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "rorainopolis-peixaria": {
            id: "rorainopolis-peixaria",
            nome: "🐟 Peixaria Rorainópolis",
            endereco: "Rua 7 de Setembro, 300 - Centro, Rorainópolis",
            horario: "11h às 21h",
            telefone: "(95) 3333-2222",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "roraimense", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tambaqui-rp", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "pirarucu-rp", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "pacu-rp", nome: "🐟 Pacu", descricao: "Pacu.", preco: 44, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "camarao-rp", nome: "🍤 Camarão", descricao: "Camarão.", preco: 44, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-rp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "rorainopolis-boteco": {
            id: "rorainopolis-boteco",
            nome: "🍺 Boteco Rorainópolis",
            endereco: "Rua 15 de Novembro, 200 - Centro, Rorainópolis",
            horario: "17h às 02h",
            telefone: "(95) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-rr", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-rr", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-rr", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-rr", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-rr", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "rorainopolis-pizzaria": {
            id: "rorainopolis-pizzaria",
            nome: "🍕 Pizzaria Rorainópolis",
            endereco: "Av. Getúlio Vargas, 300 - Centro, Rorainópolis",
            horario: "18h às 23h30",
            telefone: "(95) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-rr", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-rr", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-rr", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-rr", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-rr-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "rorainopolis-cafe": {
            id: "rorainopolis-cafe",
            nome: "☕ Café Rorainópolis",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Rorainópolis",
            horario: "08h às 20h",
            telefone: "(95) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-rr", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-rr", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-rr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-rr", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-rr-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "rorainopolis-hamburguer": {
            id: "rorainopolis-hamburguer",
            nome: "🍔 Hamburgueria Rorainópolis",
            endereco: "Rua 10, 300 - Centro, Rorainópolis",
            horario: "18h às 00h",
            telefone: "(95) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-rr", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-rr", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-rr-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-rr", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-rr", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "rorainopolis-tapiocaria": {
            id: "rorainopolis-tapiocaria",
            nome: "🥞 Tapiocaria Rorainópolis",
            endereco: "Rua 15, 200 - Centro, Rorainópolis",
            horario: "08h às 21h",
            telefone: "(95) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-rr", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-rr", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-rr", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-rr", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-rr-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "rorainopolis-caseira": {
            id: "rorainopolis-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Rorainópolis",
            horario: "11h às 15h",
            telefone: "(95) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-rr", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-rr", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-rr", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-rr", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-rr-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-rorainopolis": {
            id: "shopping-rorainopolis",
            nome: "🛍️ Shopping Rorainópolis - Food Court",
            endereco: "Av. Roraima, 1500 - Centro, Rorainópolis",
            horario: "10h às 22h",
            telefone: "(95) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-rr", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-rr", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-rr", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-rr", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-rr-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-rorainopolis": {
            id: "rodoviaria-rorainopolis",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-174, km 300 - Centro, Rorainópolis",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-rr", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-rr-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-rr", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-rr", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-rr-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== CARACARAÍ - 10 RESTAURANTES ====================
    "Caracaraí": {
        // ========== 1. CENTRO - PEIXES DO RIO BRANCO ==========
        "caracarai-peixes": {
            id: "caracarai-peixes",
            nome: "🐟 Peixaria Caracaraí",
            endereco: "Av. Beira Rio, 200 - Centro, Caracaraí",
            horario: "11h às 22h",
            telefone: "(95) 3222-1111",
            descricao: "Peixes frescos do rio Branco. Tambaqui e pirarucu.",
            tipo: ["peixaria", "roraimense", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tambaqui-ca", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-ca", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pacu-ca", nome: "🐟 Pacu", descricao: "Pacu grelhado.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-ca", nome: "🍤 Camarão", descricao: "Camarão.", preco: 44, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-ca", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA REGIONAL ==========
        "caracarai-regional": {
            id: "caracarai-regional",
            nome: "🍲 Sabor Caracaraí",
            endereco: "Rua 7 de Setembro, 200 - Centro, Caracaraí",
            horario: "11h às 21h",
            telefone: "(95) 3333-2222",
            descricao: "Culinária regional de Caracaraí.",
            tipo: ["roraimense", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "carne-sol-ca", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 66, felicidade: 24, energia: 16 } },
                { id: "baiao-ca", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 64, felicidade: 22, energia: 14 } },
                { id: "tambaqui-ca-reg", nome: "🐟 Tambaqui", descricao: "Tambaqui.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-ca-reg", nome: "🍤 Camarão", descricao: "Camarão.", preco: 42, recuperacao: { fome: 56, felicidade: 20, energia: 13 } },
                { id: "suco-ca-reg", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "caracarai-boteco": {
            id: "caracarai-boteco",
            nome: "🍺 Boteco Caracaraí",
            endereco: "Rua 15 de Novembro, 200 - Centro, Caracaraí",
            horario: "17h às 02h",
            telefone: "(95) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-ca", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ca", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ca", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ca", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ca", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "caracarai-pizzaria": {
            id: "caracarai-pizzaria",
            nome: "🍕 Pizzaria Caracaraí",
            endereco: "Av. Getúlio Vargas, 300 - Centro, Caracaraí",
            horario: "18h às 23h30",
            telefone: "(95) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "pizza-mussarela-ca", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ca", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ca", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-ca", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-ca-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "caracarai-cafe": {
            id: "caracarai-cafe",
            nome: "☕ Café Caracaraí",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Caracaraí",
            horario: "08h às 20h",
            telefone: "(95) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-ca", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ca", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-ca", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-ca", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-ca-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "caracarai-hamburguer": {
            id: "caracarai-hamburguer",
            nome: "🍔 Hamburgueria Caracaraí",
            endereco: "Rua 10, 300 - Centro, Caracaraí",
            horario: "18h às 00h",
            telefone: "(95) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-ca", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-ca", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-ca-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-ca", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-ca", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "caracarai-tapiocaria": {
            id: "caracarai-tapiocaria",
            nome: "🥞 Tapiocaria Caracaraí",
            endereco: "Rua 15, 200 - Centro, Caracaraí",
            horario: "08h às 21h",
            telefone: "(95) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-ca", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ca", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ca", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ca", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ca-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "caracarai-caseira": {
            id: "caracarai-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Caracaraí",
            horario: "11h às 15h",
            telefone: "(95) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-ca", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ca", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ca", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ca", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ca-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-caracarai": {
            id: "shopping-caracarai",
            nome: "🛍️ Shopping Caracaraí - Food Court",
            endereco: "Av. Beira Rio, 1500 - Centro, Caracaraí",
            horario: "10h às 22h",
            telefone: "(95) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-ca", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ca", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ca", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ca", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ca-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-caracarai": {
            id: "rodoviaria-caracarai",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-174, km 500 - Centro, Caracaraí",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
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

export default restaurantesRR;