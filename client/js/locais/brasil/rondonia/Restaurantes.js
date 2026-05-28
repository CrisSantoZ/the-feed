export const restaurantesRO = {
    // ==================== PORTO VELHO (CAPITAL) - 20 RESTAURANTES ====================
    "Porto Velho": {
        // ========== 1. CENTRO - CULINÁRIA RONDONIENSE (PEIXES DO MADEIRA) ==========
        "centro-rondoniense": {
            id: "centro-rondoniense",
            nome: "🐟 Culinária Rondoniense",
            endereco: "Rua José Bonifácio, 200 - Centro, Porto Velho",
            horario: "11h às 22h",
            telefone: "(69) 3222-1111",
            descricao: "Restaurante tradicional com culinária rondoniense autêntica. Especialidade em peixes do rio Madeira como tambaqui, pirarucu e tucunaré. Ambiente familiar.",
            tipo: ["rondoniense", "amazonica", "tradicional", "regional", "familiar"],
            preco_medium: 50,
            estrelas: 4.7,
            avaliacoes: 1890,
            cardapio: [
                { id: "tambaqui-ro", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa com farinha.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-ro", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado com legumes.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "tucunare-ro", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 52, recuperacao: { fome: 65, felicidade: 26, energia: 17 } },
                { id: "camarao-ro", nome: "🍤 Camarão do Madeira", descricao: "Camarões grandes alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-ro", nome: "🥤 Suco de Açaí", descricao: "Suco de açaí com guaraná.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Madeira",
            endereco: "Av. Sete de Setembro, 300 - Centro, Porto Velho",
            horario: "11h às 22h",
            telefone: "(69) 3333-2222",
            descricao: "Peixes frescos do rio Madeira. Especialidade em peixes regionais.",
            tipo: ["peixaria", "rondoniense", "amazonica", "familiar"],
            preco_medium: 48,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "tambaqui-peixe", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "pirarucu-peixe", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 66, felicidade: 26, energia: 17 } },
                { id: "surubim-ro", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 50, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "camarao-peixe", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-peixe", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CAIARI - FRUTOS DO RIO ==========
        "caiari-frutos": {
            id: "caiari-frutos",
            nome: "🐟 Restaurante Caiari",
            endereco: "Av. Caiari, 500 - Caiari, Porto Velho",
            horario: "11h às 23h",
            telefone: "(69) 3444-3333",
            descricao: "Frutos do rio com vista para o Madeira.",
            tipo: ["peixaria", "rondoniense", "vista", "familiar"],
            preco_medium: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "tambaqui-ca", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 56, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "pirarucu-ca", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 60, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "moqueca-ca", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 62, recuperacao: { fome: 72, felicidade: 30, energia: 19 } },
                { id: "camarao-ca", nome: "🍤 Camarão", descricao: "Camarão regional.", preco: 54, recuperacao: { fome: 64, felicidade: 26, energia: 17 } },
                { id: "caipirinha-ca", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 4. SÃO CRISTÓVÃO - CHURRASCARIA ==========
        "sao-cristovao-churrascaria": {
            id: "sao-cristovao-churrascaria",
            nome: "🥩 Churrascaria São Cristóvão",
            endereco: "Av. Amazonas, 1000 - São Cristóvão, Porto Velho",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(69) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 70,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-sc", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-sc", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-sc", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-sc", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-sc", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. EMBRATEL - BOTECO ==========
        "embratel-boteco": {
            id: "embratel-boteco",
            nome: "🍺 Boteco Embratel",
            endereco: "Rua Embratel, 300 - Embratel, Porto Velho",
            horario: "17h às 02h",
            telefone: "(69) 3666-5555",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 28,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-em", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-em", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-em", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-em", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-em", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. CUNIÃ - PIZZARIA ==========
        "cunia-pizzaria": {
            id: "cunia-pizzaria",
            nome: "🍕 Pizzaria Cuniã",
            endereco: "Rua Cuniã, 300 - Cuniã, Porto Velho",
            horario: "18h às 23h30",
            telefone: "(69) 3777-6666",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-cu", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 45, recuperacao: { fome: 54, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-cu", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 56, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-cu", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "calzone-cu", nome: "🥟 Calzone", descricao: "Calzone.", preco: 42, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-cu", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. FLORESTA - HAMBURGUERIA ==========
        "floresta-hamburguer": {
            id: "floresta-hamburguer",
            nome: "🍔 Hamburgueria Floresta",
            endereco: "Rua Floresta, 300 - Floresta, Porto Velho",
            horario: "18h às 00h",
            telefone: "(69) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 42,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-fl", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-fl", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 14 } },
                { id: "batata-fl", nome: "🍟 Batata", descricao: "Batata com cheddar.", preco: 22, recuperacao: { fome: 26, felicidade: 11, energia: 6 } },
                { id: "onion-fl", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 20, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "milkshake-fl", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. COSTA E SILVA - CAFÉ REGIONAL ==========
        "costa-silva-cafe": {
            id: "costa-silva-cafe",
            nome: "☕ Café Costa e Silva",
            endereco: "Rua Costa e Silva, 300 - Costa e Silva, Porto Velho",
            horario: "08h às 20h",
            telefone: "(69) 3999-8888",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-cs", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cs", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cs", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cs", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-cs", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. NOVA PORTO VELHO - TAPIOCARIA ==========
        "nova-porto-velho-tapiocaria": {
            id: "nova-porto-velho-tapiocaria",
            nome: "🥞 Tapiocaria Nova Porto Velho",
            endereco: "Rua Nova Porto Velho, 500 - Nova Porto Velho, Porto Velho",
            horario: "08h às 21h",
            telefone: "(69) 4000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 18,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-carne-np", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-np", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-np", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-np", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-np", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. TANCREDO NEVES - COMIDA CASEIRA ==========
        "tancredo-neves-caseira": {
            id: "tancredo-neves-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Tancredo Neves, 500 - Tancredo Neves, Porto Velho",
            horario: "11h às 15h",
            telefone: "(69) 4111-0000",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-tn", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-tn", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-tn", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-tn", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-tn", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. TIRADENTES - COMIDA NORDESTINA ==========
        "tiradentes-nordestina": {
            id: "tiradentes-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Tiradentes, 500 - Tiradentes, Porto Velho",
            horario: "11h às 21h",
            telefone: "(69) 4222-1111",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medium: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "baiao-ti", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 40, recuperacao: { fome: 66, felicidade: 22, energia: 14 } },
                { id: "carne-sol-ti", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "panelada-ti", nome: "🍲 Panelada", descricao: "Panelada.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "tapioca-ti", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-ti", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. PEDRINHAS - PEIXARIA ==========
        "pedrinhas-peixaria": {
            id: "pedrinhas-peixaria",
            nome: "🐟 Peixaria Pedrinhas",
            endereco: "Rua Pedrinhas, 500 - Pedrinhas, Porto Velho",
            horario: "11h às 21h",
            telefone: "(69) 4333-2222",
            descricao: "Peixes frescos do Madeira.",
            tipo: ["peixaria", "rondoniense", "familiar"],
            preco_medium: 48,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-ped", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "camarao-ped", nome: "🍤 Camarão", descricao: "Camarão.", preco: 52, recuperacao: { fome: 64, energia: 22, felicidade: 17 } },
                { id: "moqueca-ped", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 58, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "tambaqui-ped", nome: "🐟 Tambaqui", descricao: "Tambaqui.", preco: 55, recuperacao: { fome: 66, energia: 24, felicidade: 17 } },
                { id: "suco-ped", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. MARIANA - RESTAURANTE POPULAR ==========
        "mariana-popular": {
            id: "mariana-popular",
            nome: "🍲 Restaurante Popular",
            endereco: "Rua Mariana, 500 - Mariana, Porto Velho",
            horario: "11h às 14h",
            telefone: "(69) 4444-3333",
            descricao: "Restaurante popular.",
            tipo: ["brasileira", "popular", "caseira", "buffet"],
            preco_medium: 15,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "prato-feito-ma", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 14, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ma", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 16, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ma", nome: "🍗 Frango", descricao: "Frango assado.", preco: 14, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ma", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 15, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ma", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 14. LIBERDADE - COMIDA ITALIANA ==========
        "liberdade-italiana": {
            id: "liberdade-italiana",
            nome: "🍝 Cantina Liberdade",
            endereco: "Rua Liberdade, 300 - Liberdade, Porto Velho",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(69) 4555-4444",
            descricao: "Cantina italiana.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medium: 55,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-li", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 66, energia: 22, felicidade: 17 } },
                { id: "lasanha-li", nome: "🍝 Lasanha", descricao: "Lasanha.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 15 } },
                { id: "nhoque-li", nome: "🥔 Nhoque", descricao: "Nhoque.", preco: 44, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "polenta-li", nome: "🍲 Polenta", descricao: "Polenta.", preco: 38, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "vinho-li", nome: "🍷 Vinho", descricao: "Vinho.", preco: 20, recuperacao: { sede: 8, felicidade: 15, energia: -5 } }
            ]
        },
        
        // ========== 15. LARANJEIRAS - LANCHONETE ==========
        "laranjeiras-lanchonete": {
            id: "laranjeiras-lanchonete",
            nome: "🍔 Lanchonete Laranjeiras",
            endereco: "Rua Laranjeiras, 500 - Laranjeiras, Porto Velho",
            horario: "08h às 22h",
            telefone: "(69) 4666-5555",
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
        
        // ========== 16. PORTO VELHO SHOPPING ==========
        "porto-velho-shopping": {
            id: "porto-velho-shopping",
            nome: "🛍️ Porto Velho Shopping - Food Court",
            endereco: "Av. Amazonas, 2000 - Centro, Porto Velho",
            horario: "10h às 22h",
            telefone: "(69) 4777-6666",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medium: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-pv", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pv", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "outback-pv", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-pv", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-pv", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SHOPPING PÁTIO PORTO VELHO ==========
        "patio-porto-velho": {
            id: "patio-porto-velho",
            nome: "🛍️ Shopping Pátio Porto Velho - Food Court",
            endereco: "Av. Lauro Sodré, 2000 - Centro, Porto Velho",
            horario: "10h às 22h",
            telefone: "(69) 4888-7777",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 40,
            estrelas: 4.1,
            avaliacoes: 1560,
            cardapio: [
                { id: "mc-ppv", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ppv", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 36, energia: 10, felicidade: 8 } },
                { id: "china-ppv", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ppv", nome: "🍣 Sushi", descricao: "Combinado.", preco: 40, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-ppv", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. PARQUE NATURAL - QUIOSQUE ==========
        "parque-natural-quiosque": {
            id: "parque-natural-quiosque",
            nome: "🏞️ Quiosque Parque Natural",
            endereco: "Parque Natural de Porto Velho - Av. Governador Jorge Teixeira",
            horario: "09h às 20h",
            telefone: "(69) 4999-8888",
            descricao: "Quiosque no parque.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pastel-pn", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-pn", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-pn", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-pn", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "agua-pn", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 19. AEROPORTO ==========
        "aeroporto-porto-velho": {
            id: "aeroporto-porto-velho",
            nome: "✈️ Aeroporto de Porto Velho - Praça de Alimentação",
            endereco: "Av. Jorge Teixeira, s/n - Aeroporto, Porto Velho",
            horario: "04h às 23h",
            telefone: "(69) 5000-9999",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medium: 45,
            estrelas: 3.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "mc-aero-ro", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-ro", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-ro", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "cafe-aero-ro", nome: "☕ Café Rondoniense", descricao: "Café especial.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-ro", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 20. RODOVIÁRIA ==========
        "rodoviaria-porto-velho": {
            id: "rodoviaria-porto-velho",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Jorge Teixeira, 1000 - Centro, Porto Velho",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 18,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-pv", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-pv-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pv", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-pv-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== JI-PARANÁ - 10 RESTAURANTES ====================
    "Ji-Paraná": {
        // ========== 1. CENTRO - CULINÁRIA REGIONAL ==========
        "ji-parana-regional": {
            id: "ji-parana-regional",
            nome: "🐟 Sabor Ji-Paraná",
            endereco: "Av. Presidente Médici, 500 - Centro, Ji-Paraná",
            horario: "11h às 22h",
            telefone: "(69) 3222-1111",
            descricao: "Culinária regional de Ji-Paraná. Peixes do rio, carne de sol e pratos típicos.",
            tipo: ["rondoniense", "regional", "peixes", "familiar"],
            preco_medium: 45,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-jp", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-jp", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "carne-sol-jp", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "camarao-jp", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "suco-jp", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "ji-parana-churrascaria": {
            id: "ji-parana-churrascaria",
            nome: "🥩 Churrascaria Ji-Paraná",
            endereco: "Av. Transamazônica, 1000 - Centro, Ji-Paraná",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(69) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-jp", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-jp", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-jp", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-jp", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-jp-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "ji-parana-boteco": {
            id: "ji-parana-boteco",
            nome: "🍺 Boteco Ji-Paraná",
            endereco: "Rua 7 de Setembro, 200 - Centro, Ji-Paraná",
            horario: "17h às 02h",
            telefone: "(69) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 26,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-jp", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 11, energia: 6 } },
                { id: "torresmo-jp", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "queijo-jp", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 7, energia: 4 } },
                { id: "batata-jp", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 7, energia: 4 } },
                { id: "chopp-jp", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "ji-parana-pizzaria": {
            id: "ji-parana-pizzaria",
            nome: "🍕 Pizzaria Ji-Paraná",
            endereco: "Av. Marechal Rondon, 300 - Centro, Ji-Paraná",
            horario: "18h às 23h30",
            telefone: "(69) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-jp", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-jp", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-jp", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-jp", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-jp-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "ji-parana-cafe": {
            id: "ji-parana-cafe",
            nome: "☕ Café Ji-Paraná",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Ji-Paraná",
            horario: "08h às 20h",
            telefone: "(69) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 22,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-jp", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-jp", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-jp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-jp", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-jp-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "ji-parana-hamburguer": {
            id: "ji-parana-hamburguer",
            nome: "🍔 Hamburgueria Ji-Paraná",
            endereco: "Rua 10, 300 - Centro, Ji-Paraná",
            horario: "18h às 00h",
            telefone: "(69) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-jp", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-jp", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-jp-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-jp", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-jp", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "ji-parana-tapiocaria": {
            id: "ji-parana-tapiocaria",
            nome: "🥞 Tapiocaria Ji-Paraná",
            endereco: "Rua 15, 200 - Centro, Ji-Paraná",
            horario: "08h às 21h",
            telefone: "(69) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-jp", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-jp", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-jp", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-jp", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-jp-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "ji-parana-caseira": {
            id: "ji-parana-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Ji-Paraná",
            horario: "11h às 15h",
            telefone: "(69) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-jp", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-jp", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-jp", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 16, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-jp", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-jp-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-ji-parana": {
            id: "shopping-ji-parana",
            nome: "🛍️ Shopping Ji-Paraná - Food Court",
            endereco: "Av. Presidente Médici, 1500 - Centro, Ji-Paraná",
            horario: "10h às 22h",
            telefone: "(69) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-jp", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-jp", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-jp", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-jp", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-jp-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-ji-parana": {
            id: "rodoviaria-ji-parana",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-364, km 500 - Centro, Ji-Paraná",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-jp", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-jp-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-jp", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-jp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-jp-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== ARIQUEMES - 10 RESTAURANTES ====================
    "Ariquemes": {
        // ========== 1. CENTRO - PEIXES ==========
        "ariquemes-peixes": {
            id: "ariquemes-peixes",
            nome: "🐟 Peixaria Ariquemes",
            endereco: "Av. Tancredo Neves, 500 - Centro, Ariquemes",
            horario: "11h às 22h",
            telefone: "(69) 3222-1111",
            descricao: "Peixes frescos da região. Tambaqui e pirarucu.",
            tipo: ["peixaria", "rondoniense", "regional", "familiar"],
            preco_medium: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "tambaqui-ar", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 50, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "pirarucu-ar", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 52, recuperacao: { fome: 66, felicidade: 25, energia: 17 } },
                { id: "camarao-ar", nome: "🍤 Camarão", descricao: "Camarão.", preco: 46, recuperacao: { fome: 60, felicidade: 23, energia: 15 } },
                { id: "moqueca-ar", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "suco-ar", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "ariquemes-churrascaria": {
            id: "ariquemes-churrascaria",
            nome: "🥩 Churrascaria Ariquemes",
            endereco: "Av. Jamari, 500 - Centro, Ariquemes",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(69) 3333-2222",
            descricao: "Churrascaria com rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medium: 60,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "rodizio-ar", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 65, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-ar", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 52, recuperacao: { fome: 66, energia: 24, felicidade: 18 } },
                { id: "costela-ar", nome: "🍖 Costela", descricao: "Costela assada.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-ar", nome: "🥗 Buffet", descricao: "Buffet.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-ar-churr", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "ariquemes-boteco": {
            id: "ariquemes-boteco",
            nome: "🍺 Boteco Ariquemes",
            endereco: "Rua 7 de Setembro, 200 - Centro, Ariquemes",
            horario: "17h às 02h",
            telefone: "(69) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medium: 25,
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
        "ariquemes-pizzaria": {
            id: "ariquemes-pizzaria",
            nome: "🍕 Pizzaria Ariquemes",
            endereco: "Av. Marechal Rondon, 300 - Centro, Ariquemes",
            horario: "18h às 23h30",
            telefone: "(69) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medium: 42,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-ar", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-ar", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-ar", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-ar", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-ar-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ ==========
        "ariquemes-cafe": {
            id: "ariquemes-cafe",
            nome: "☕ Café Ariquemes",
            endereco: "Rua Getúlio Vargas, 200 - Centro, Ariquemes",
            horario: "08h às 20h",
            telefone: "(69) 3666-5555",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medium: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-ar", nome: "☕ Café", descricao: "Café especial.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-ar", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-ar", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-ar", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-ar-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "ariquemes-hamburguer": {
            id: "ariquemes-hamburguer",
            nome: "🍔 Hamburgueria Ariquemes",
            endereco: "Rua 10, 300 - Centro, Ariquemes",
            horario: "18h às 00h",
            telefone: "(69) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medium: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-ar", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-ar", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-ar-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-ar", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-ar", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "ariquemes-tapiocaria": {
            id: "ariquemes-tapiocaria",
            nome: "🥞 Tapiocaria Ariquemes",
            endereco: "Rua 15, 200 - Centro, Ariquemes",
            horario: "08h às 21h",
            telefone: "(69) 3888-7777",
            descricao: "Tapiocaria regional.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medium: 16,
            estrelas: 4.4,
            avaliacoes: 340,
            cardapio: [
                { id: "tapioca-carne-ar", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-ar", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-ar", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-ar", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-ar-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA CASEIRA ==========
        "ariquemes-caseira": {
            id: "ariquemes-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua 20, 200 - Centro, Ariquemes",
            horario: "11h às 15h",
            telefone: "(69) 3999-8888",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medium: 18,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-ar", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 16, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "bife-ar", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 18, recuperacao: { fome: 58, energia: 18, felicidade: 12 } },
                { id: "frango-ar", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 15, recuperacao: { fome: 52, energia: 16, felicidade: 11 } },
                { id: "peixe-ar", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 17, recuperacao: { fome: 56, energia: 16, felicidade: 12 } },
                { id: "suco-ar-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-ariquemes": {
            id: "shopping-ariquemes",
            nome: "🛍️ Shopping Ariquemes - Food Court",
            endereco: "Av. Jamari, 1500 - Centro, Ariquemes",
            horario: "10h às 22h",
            telefone: "(69) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medium: 35,
            estrelas: 4.1,
            avaliacoes: 670,
            cardapio: [
                { id: "mc-ar", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-ar", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-ar", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-ar", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-ar-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-ariquemes": {
            id: "rodoviaria-ariquemes",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "BR-364, km 700 - Centro, Ariquemes",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medium: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-ar", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-ar-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ar", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ar", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-ar-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesRO;