export const restaurantesTO = {
    // ==================== PALMAS (CAPITAL) - 20 RESTAURANTES ====================
    "Palmas": {
        // ========== 1. CENTRO - CULINÁRIA TOCANTINENSE (PEIXES DO TOCANTINS) ==========
        "centro-tocantinense": {
            id: "centro-tocantinense",
            nome: "🐟 Culinária Tocantinense",
            endereco: "Av. JK, 500 - Centro, Palmas",
            horario: "11h às 22h",
            telefone: "(63) 3222-1111",
            descricao: "Restaurante tradicional com culinária tocantinense autêntica. Especialidade em peixes do rio Tocantins como tambaqui, pirarucu e tucunaré. Ambiente familiar.",
            tipo: ["tocantinense", "amazonica", "tradicional", "regional", "familiar"],
            preco_medio: 50,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "tambaqui-to", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa com farinha.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-to", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado com legumes.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "tucunare-to", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 52, recuperacao: { fome: 65, felicidade: 26, energia: 17 } },
                { id: "camarao-to", nome: "🍤 Camarão do Tocantins", descricao: "Camarões grandes alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-to", nome: "🥤 Suco de Buriti", descricao: "Suco natural de buriti.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Tocantins",
            endereco: "Rua 2, 300 - Centro, Palmas",
            horario: "11h às 22h",
            telefone: "(63) 3333-2222",
            descricao: "Peixes frescos do rio Tocantins. Especialidade em peixes regionais.",
            tipo: ["peixaria", "tocantinense", "amazonica", "familiar"],
            preco_medio: 48,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "tambaqui-peixe", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-peixe", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "pacu-to", nome: "🐟 Pacu", descricao: "Pacu grelhado.", preco: 48, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-peixe", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-peixe", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. PLANO DIRETOR NORTE - FRUTOS DO RIO ==========
        "plano-norte-frutos": {
            id: "plano-norte-frutos",
            nome: "🐟 Restaurante Palmas",
            endereco: "Av. NS 10, 500 - Plano Diretor Norte, Palmas",
            horario: "11h às 23h",
            telefone: "(63) 3444-3333",
            descricao: "Frutos do rio com ambiente familiar.",
            tipo: ["peixaria", "tocantinense", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-pn", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 56, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-pn", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 60, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "moqueca-pn", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 62, recuperacao: { fome: 72, felicidade: 30, energia: 19 } },
                { id: "camarao-pn", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 54, recuperacao: { fome: 64, felicidade: 26, energia: 17 } },
                { id: "caipirinha-pn", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. PLANO DIRETOR SUL - CHURRASCARIA ==========
        "plano-sul-churrascaria": {
            id: "plano-sul-churrascaria",
            nome: "🥩 Churrascaria Palmas",
            endereco: "Av. LO 5, 1000 - Plano Diretor Sul, Palmas",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(63) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-ps", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-ps", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-ps", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-ps", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-ps", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. JARDIM AURENY I - BOTECO ==========
        "aureny-boteco": {
            id: "aureny-boteco",
            nome: "🍺 Boteco Aureny",
            endereco: "Alameda 11, 300 - Jardim Aureny I, Palmas",
            horario: "17h às 02h",
            telefone: "(63) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "calabresa-au", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-au", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-au", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-au", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-au", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. JARDIM AURENY III - PIZZARIA ==========
        "aureny-pizzaria": {
            id: "aureny-pizzaria",
            nome: "🍕 Pizzaria Aureny",
            endereco: "Alameda 5, 300 - Jardim Aureny III, Palmas",
            horario: "18h às 23h30",
            telefone: "(63) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-au", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-au", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-au", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-au", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-au", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. JARDIM TAQUARI - HAMBURGUERIA ==========
        "taquari-hamburguer": {
            id: "taquari-hamburguer",
            nome: "🍔 Hamburgueria Taquari",
            endereco: "Alameda 2, 300 - Jardim Taquari, Palmas",
            horario: "18h às 00h",
            telefone: "(63) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-ta", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-ta", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-ta", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-ta", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-ta", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. JARDIM AMÉRICA - CAFÉ REGIONAL ==========
        "america-cafe": {
            id: "america-cafe",
            nome: "☕ Café América",
            endereco: "Alameda 22, 300 - Jardim América, Palmas",
            horario: "08h às 20h",
            telefone: "(63) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-am", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-am", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-am", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-am", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-am", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. ARNO 41 - TAPIOCARIA ==========
        "arno41-tapiocaria": {
            id: "arno41-tapiocaria",
            nome: "🥞 Tapiocaria Arno 41",
            endereco: "Av. NS 4, 500 - Arno 41, Palmas",
            horario: "08h às 21h",
            telefone: "(63) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-ar", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ar", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ar", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ar", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-ar", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. ARNO 51 - COMIDA CASEIRA ==========
        "arno51-caseira": {
            id: "arno51-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Av. LO 4, 500 - Arno 51, Palmas",
            horario: "11h às 15h",
            telefone: "(63) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-ar51", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-ar51", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-ar51", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-ar51", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-ar51", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. ARNO 61 - COMIDA NORDESTINA ==========
        "arno61-nordestina": {
            id: "arno61-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Av. LO 6, 500 - Arno 61, Palmas",
            horario: "11h às 21h",
            telefone: "(63) 4222-1111",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-ar61", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-ar61", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-ar61", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-ar61", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-ar61", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. ARNO 71 - PEIXARIA ==========
        "arno71-peixaria": {
            id: "arno71-peixaria",
            nome: "🐟 Peixaria Arno 71",
            endereco: "Av. LO 8, 500 - Arno 71, Palmas",
            horario: "11h às 21h",
            telefone: "(63) 4333-2222",
            descricao: "Peixes frescos do Tocantins.",
            tipo: ["peixaria", "tocantinense", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-ar71", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-ar71", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-ar71", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "tambaqui-ar71", nome: "🐟 Tambaqui", descricao: "Tambaqui.", preco: 55, recuperacao: { fome: 66, energia: 24, felicidade: 17 } },
                { id: "suco-ar71", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. TAQUARALTO - RESTAURANTE POPULAR ==========
        "taquaralto-popular": {
            id: "taquaralto-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Av. Taquaralto, 500 - Taquaralto, Palmas",
            horario: "11h às 14h",
            telefone: "(63) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "prato-feito-ta", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ta", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ta", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ta", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ta", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. SANTA FÉ - COMIDA ITALIANA ==========
        "santa-fe-italiana": {
            id: "santa-fe-italiana",
            nome: "🍝 Cantina Santa Fé",
            endereco: "Av. Santa Fé, 300 - Santa Fé, Palmas",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(63) 4555-4444",
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
        
        // ========== 15. MORADA DO SOL - LANCHONETE ==========
        "morada-sol-lanchonete": {
            id: "morada-sol-lanchonete",
            nome: "🍔 Lanchonete Morada",
            endereco: "Rua Morada do Sol, 500 - Morada do Sol, Palmas",
            horario: "08h às 22h",
            telefone: "(63) 4666-5555",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-ms", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 20, recuperacao: { fome: 56, energia: 18, felicidade: 14 } },
                { id: "x-salada-ms", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 14, recuperacao: { fome: 38, energia: 12, felicidade: 9 } },
                { id: "coxinha-ms", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "pastel-ms", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "suco-ms", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. PALMAS SHOPPING ==========
        "palmas-shopping": {
            id: "palmas-shopping",
            nome: "🛍️ Palmas Shopping - Food Court",
            endereco: "Av. LO 2, 1000 - Centro, Palmas",
            horario: "10h às 22h",
            telefone: "(63) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 1890,
            cardapio: [
                { id: "mc-ps", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ps", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-ps", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-ps", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ps", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. CAPIM DOURADO SHOPPING ==========
        "capim-dourado-shopping": {
            id: "capim-dourado-shopping",
            nome: "🛍️ Capim Dourado Shopping - Food Court",
            endereco: "Av. Teotônio Segurado, 1000 - Centro, Palmas",
            horario: "10h às 22h",
            telefone: "(63) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.1,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-cd", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cd", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-cd", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-cd", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-cd", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. PRAIA DA GRACIOSA - QUIOSQUE ==========
        "praia-graciosa-quiosque": {
            id: "praia-graciosa-quiosque",
            nome: "🏞️ Quiosque Praia da Graciosa",
            endereco: "Praia da Graciosa - Orla de Palmas",
            horario: "09h às 20h",
            telefone: "(63) 4999-8888",
            descricao: "Quiosque na praia.",
            tipo: ["petiscos", "praia", "casual", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pg", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pg", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pg", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pg", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pg", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-palmas": {
            id: "aeroporto-palmas",
            nome: "✈️ Aeroporto de Palmas - Praça de Alimentação",
            endereco: "BR-010, s/n - Aeroporto, Palmas",
            horario: "04h às 23h",
            telefone: "(63) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-aero-to", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-to", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-to", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-to", nome: "☕ Café Tocantinense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-to", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-palmas": {
            id: "rodoviaria-palmas",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. LO 2, 500 - Centro, Palmas",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-pal", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-pal-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pal", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pal", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-pal-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== ARAGUAÍNA - 10 RESTAURANTES ====================
    "Araguaína": {
        // ========== 1. CENTRO - CULINÁRIA REGIONAL ==========
        "araguaina-regional": {
            id: "araguaina-regional",
            nome: "🐟 Sabor Araguaína",
            endereco: "Av. Araguaia, 500 - Centro, Araguaína",
            horario: "11h às 22h",
            telefone: "(63) 3222-1111",
            descricao: "Culinária regional de Araguaína. Peixes do rio Araguaia e pratos típicos.",
            tipo: ["tocantinense", "regional", "peixes", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tambaqui-ar", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-ar", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "carne-sol-ar", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "camarao-ar", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "suco-ar", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "araguaina-churrascaria": {
            id: "araguaina-churrascaria",
            nome: "🥩 Churrascaria Araguaína",
            endereco: "Av. Transamazônica, 1000 - Centro, Araguaína",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(63) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-ar", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-ar", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-ar", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-ar", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-ar-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "araguaina-boteco": {
            id: "araguaina-boteco",
            nome: "🍺 Boteco Araguaína",
            endereco: "Rua 7 de Setembro, 200 - Centro, Araguaína",
            horario: "17h às 02h",
            telefone: "(63) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-ar", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-ar", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-ar", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-ar", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-ar", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "araguaina-pizzaria": {
            id: "araguaina-pizzaria",
            nome: "🍕 Pizzaria Araguaína",
            endereco: "Av. Filadélfia, 300 - Centro, Araguaína",
            horario: "18h às 23h30",
            telefone: "(63) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-ar", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ar", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ar", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-ar", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-ar-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "araguaina-cafe": {
            id: "araguaina-cafe",
            nome: "☕ Café Araguaína",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Araguaína",
            horario: "08h às 20h",
            telefone: "(63) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-ar", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ar", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-ar", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-ar", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-ar-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "araguaina-hamburguer": {
            id: "araguaina-hamburguer",
            nome: "🍔 Hamburgueria Araguaína",
            endereco: "Rua 10, 300 - Centro, Araguaína",
            horario: "18h às 00h",
            telefone: "(63) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-ar", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-ar", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-ar-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-ar", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-ar", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "araguaina-tapiocaria": {
            id: "araguaina-tapiocaria",
            nome: "🥞 Tapiocaria Araguaína",
            endereco: "Rua 15, 200 - Centro, Araguaína",
            horario: "08h às 21h",
            telefone: "(63) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-ar", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ar", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ar", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ar", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ar-tapi", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "araguaina-caseira": {
            id: "araguaina-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Araguaína",
            horario: "11h às 15h",
            telefone: "(63) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-ar", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ar", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ar", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ar", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ar-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-araguaina": {
            id: "shopping-araguaina",
            nome: "🛍️ Shopping Araguaína - Food Court",
            endereco: "Av. Transamazônica, 1500 - Centro, Araguaína",
            horario: "10h às 22h",
            telefone: "(63) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-ar", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ar", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ar", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ar", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ar-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-araguaina": {
            id: "rodoviaria-araguaina",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-153, km 100 - Centro, Araguaína",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ar", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ar-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ar", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ar", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ar-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== GURUPI - 10 RESTAURANTES ====================
    "Gurupi": {
        // ========== 1. CENTRO - PEIXES ==========
        "gurupi-peixes": {
            id: "gurupi-peixes",
            nome: "🐟 Peixaria Gurupi",
            endereco: "Av. Pará, 500 - Centro, Gurupi",
            horario: "11h às 22h",
            telefone: "(63) 3222-1111",
            descricao: "Peixes frescos da região. Tambaqui e pirarucu.",
            tipo: ["peixaria", "tocantinense", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tambaqui-gu", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-gu", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "camarao-gu", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "moqueca-gu", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "suco-gu", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "gurupi-churrascaria": {
            id: "gurupi-churrascaria",
            nome: "🥩 Churrascaria Gurupi",
            endereco: "Av. Goiás, 500 - Centro, Gurupi",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(63) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 60,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-gu", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 65, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-gu", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 52, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "costela-gu", nome: "🍖 Costela", descricao: "Costela assada.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-gu", nome: "🥗 Buffet", descricao: "Buffet.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-gu-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "gurupi-boteco": {
            id: "gurupi-boteco",
            nome: "🍺 Boteco Gurupi",
            endereco: "Rua 7 de Setembro, 200 - Centro, Gurupi",
            horario: "17h às 02h",
            telefone: "(63) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-gu", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-gu", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-gu", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-gu", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-gu", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "gurupi-pizzaria": {
            id: "gurupi-pizzaria",
            nome: "🍕 Pizzaria Gurupi",
            endereco: "Av. Tocantins, 300 - Centro, Gurupi",
            horario: "18h às 23h30",
            telefone: "(63) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-gu", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-gu", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-gu", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-gu", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-gu-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "gurupi-cafe": {
            id: "gurupi-cafe",
            nome: "☕ Café Gurupi",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Gurupi",
            horario: "08h às 20h",
            telefone: "(63) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-gu", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-gu", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-gu", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-gu", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-gu-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "gurupi-hamburguer": {
            id: "gurupi-hamburguer",
            nome: "🍔 Hamburgueria Gurupi",
            endereco: "Rua 10, 300 - Centro, Gurupi",
            horario: "18h às 00h",
            telefone: "(63) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-gu", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-gu", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-gu-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-gu", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-gu", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "gurupi-tapiocaria": {
            id: "gurupi-tapiocaria",
            nome: "🥞 Tapiocaria Gurupi",
            endereco: "Rua 15, 200 - Centro, Gurupi",
            horario: "08h às 21h",
            telefone: "(63) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-gu", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-gu", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-gu", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-gu", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-gu-tapi", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "gurupi-caseira": {
            id: "gurupi-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Gurupi",
            horario: "11h às 15h",
            telefone: "(63) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-gu", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-gu", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-gu", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-gu", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-gu-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-gurupi": {
            id: "shopping-gurupi",
            nome: "🛍️ Shopping Gurupi - Food Court",
            endereco: "Av. Pará, 1500 - Centro, Gurupi",
            horario: "10h às 22h",
            telefone: "(63) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-gu", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-gu", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-gu", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-gu", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-gu-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-gurupi": {
            id: "rodoviaria-gurupi",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-153, km 500 - Centro, Gurupi",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-gu", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-gu-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-gu", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-gu", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-gu-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesTO;