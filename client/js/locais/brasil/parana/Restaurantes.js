const restaurantesPR = {
    // ==================== CURITIBA (CAPITAL) - 20 RESTAURANTES ====================
    "Curitiba": {
        // ========== 1. CENTRO - COMIDA TÍPICA PARANAENSE (BARREADO) ==========
        "centro-barreado": {
            id: "centro-barreado",
            nome: "🍲 Barreado Curitibano",
            endereco: "Rua XV de Novembro, 500 - Centro, Curitiba",
            horario: "11h às 22h",
            telefone: "(41) 3222-1111",
            descricao: "Restaurante tradicional especializado em barreado, prato típico do litoral paranaense. Cozido em panela de barro por mais de 12 horas. Ambiente familiar e acolhedor.",
            tipo: ["paranaense", "tradicional", "familiar", "regional"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 2450,
            cardapio: [
                { id: "barreado-tradicional", nome: "🍲 Barreado Tradicional", descricao: "Carne cozida em panela de barro por 12 horas, servida com arroz, farinha de mandioca, banana e laranja.", preco: 58, recuperacao: { fome: 85, felicidade: 32, energia: 24 } },
                { id: "barreado-completo", nome: "🍲 Barreado Completo", descricao: "Barreado servido com acompanhamentos completos e caldo.", preco: 68, recuperacao: { fome: 95, felicidade: 36, energia: 28 } },
                { id: "carne-ong", nome: "🥩 Carne de Onça", descricao: "Carne moída crua temperada com cebola, salsa e pimenta, servida com pão.", preco: 28, recuperacao: { fome: 35, felicidade: 18, energia: 12 } },
                { id: "pinhão-cozido", nome: "🌰 Pinhão Cozido", descricao: "Pinhão cozido típico da região.", preco: 15, recuperacao: { fome: 22, felicidade: 14, energia: 8 } },
                { id: "caipirinha-barreado", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça.", preco: 16, recuperacao: { sede: 12, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 2. BATEL - COZINHA INTERNACIONAL PREMIUM ==========
        "batel-internacional": {
            id: "batel-internacional",
            nome: "🍽️ Batel Gastrô",
            endereco: "Al. Dom Pedro II, 800 - Batel, Curitiba",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(41) 3333-2222",
            descricao: "Cozinha internacional contemporânea no bairro nobre do Batel. Chef premiado e ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico"],
            preco_medio: 140,
            estrelas: 4.9,
            avaliacoes: 1120,
            cardapio: [
                { id: "file-batel", nome: "🥩 Filé Mignon ao Molho", descricao: "Filé mignon com molho de vinho tinto e cogumelos.", preco: 98, recuperacao: { fome: 75, felicidade: 36, energia: 24 } },
                { id: "lagosta-batel", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 145, recuperacao: { fome: 85, felicidade: 42, energia: 26 } },
                { id: "salmao-batel", nome: "🐟 Salmão ao Molho", descricao: "Salmão grelhado com molho de maracujá.", preco: 88, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "risoto-batel", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso com camarões.", preco: 82, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "espumante-batel", nome: "🥂 Espumante", descricao: "Espumante brasileiro.", preco: 38, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 3. ÁGUA VERDE - CHURRASCARIA ==========
        "agua-verde-churrascaria": {
            id: "agua-verde-churrascaria",
            nome: "🥩 Churrascaria Água Verde",
            endereco: "Av. República Argentina, 1500 - Água Verde, Curitiba",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(41) 3444-3333",
            descricao: "Churrascaria tradicional com rodízio de carnes nobres e buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "rodizio-av", nome: "🥩 Rodízio Completo", descricao: "Mais de 15 cortes de carne.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-av", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g.", preco: 62, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-av", nome: "🍖 Costela Assada", descricao: "Costela assada lentamente.", preco: 58, recuperacao: { fome: 75, energia: 28, felicidade: 22 } },
                { id: "buffet-av", nome: "🥗 Buffet", descricao: "Saladas, massas, sushi.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-av", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. SANTA FELICIDADE - COMIDA ITALIANA ==========
        "santa-felicidade-italiana": {
            id: "santa-felicidade-italiana",
            nome: "🍝 Cantina Santa Felicidade",
            endereco: "Rua Santa Felicidade, 500 - Santa Felicidade, Curitiba",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(41) 3555-4444",
            descricao: "Cantina italiana tradicional no bairro da Santa Felicidade, famoso pelas massas. Receitas da nonna desde 1950.",
            tipo: ["italiana", "massas", "tradicional", "familiar", "colonial"],
            preco_medio: 65,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "parmegiana-sf", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com molho e queijo.", preco: 58, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "lasanha-sf", nome: "🍝 Lasanha Bolonhesa", descricao: "Lasanha caseira.", preco: 52, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "nhoque-sf", nome: "🥔 Nhoque ao Sugo", descricao: "Nhoque de batata.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-sf", nome: "🍲 Polenta Mole", descricao: "Polenta cremosa com ragú.", preco: 42, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-sf", nome: "🍷 Vinho Italiano", descricao: "Vinho tinto importado.", preco: 25, recuperacao: { sede: 10, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 5. JUVEVÊ - COMIDA JAPONESA ==========
        "juveve-japonesa": {
            id: "juveve-japonesa",
            nome: "🍣 Sushi Juvevê",
            endereco: "Rua Juvevê, 300 - Juvevê, Curitiba",
            horario: "18h às 23h30",
            telefone: "(41) 3666-5555",
            descricao: "Restaurante japonês tradicional. Peixes frescos e rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "familiar"],
            preco_medio: 90,
            estrelas: 4.7,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-juveve", nome: "🍣 Rodízio Premium", descricao: "Rodízio com 28 peças.", preco: 85, recuperacao: { fome: 88, energia: 28, felicidade: 34 } },
                { id: "combinado-juveve", nome: "🍱 Combinado Especial", descricao: "22 peças variadas.", preco: 65, recuperacao: { fome: 65, energia: 20, felicidade: 26 } },
                { id: "temaki-juveve", nome: "🍙 Temaki de Salmão", descricao: "Temaki grande.", preco: 30, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "hot-juveve", nome: "🌯 Hot Roll", descricao: "Hot rolls empanados.", preco: 35, recuperacao: { fome: 40, felicidade: 18, energia: 10 } },
                { id: "sake-juveve", nome: "🍶 Saquê", descricao: "Saquê quente.", preco: 26, recuperacao: { sede: 8, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 6. CENTRO CÍVICO - BOTECO ==========
        "centro-civico-boteco": {
            id: "centro-civico-boteco",
            nome: "🍺 Boteco do Centro Cívico",
            endereco: "Rua Marechal Deodoro, 800 - Centro Cívico, Curitiba",
            horario: "17h às 03h",
            telefone: "(41) 3777-6666",
            descricao: "Boteco tradicional. Petiscos, cerveja gelada e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "calabresa-cc", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 8 } },
                { id: "torresmo-cc", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-cc", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 16, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "batata-cc", nome: "🍟 Batata Frita", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "chopp-cc", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 7. CABRAL - PIZZARIA ==========
        "cabral-pizzaria": {
            id: "cabral-pizzaria",
            nome: "🍕 Pizzaria Cabral",
            endereco: "Rua Engenheiros Rebouças, 500 - Cabral, Curitiba",
            horario: "18h às 00h",
            telefone: "(41) 3888-7777",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-margherita-cabral", nome: "🍕 Pizza Margherita", descricao: "Margherita.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "pizza-calabresa-cabral", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-cabral", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 58, recuperacao: { fome: 62, energia: 16, felicidade: 14 } },
                { id: "calzone-cabral", nome: "🥟 Calzone", descricao: "Calzone.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-cabral", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. BIGORRILHO - HAMBURGUERIA ==========
        "bigorrilho-hamburguer": {
            id: "bigorrilho-hamburguer",
            nome: "🍔 Hamburgueria Bigorrilho",
            endereco: "Rua Padre Anchieta, 1000 - Bigorrilho, Curitiba",
            horario: "18h às 00h",
            telefone: "(41) 3999-8888",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "smash-bigo", nome: "🍔 Smash Burger", descricao: "Smash duplo.", preco: 42, recuperacao: { fome: 65, energia: 24, felicidade: 20 } },
                { id: "vegan-bigo", nome: "🌱 Vegan Burger", descricao: "Hambúrguer vegano.", preco: 44, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "batata-bigo", nome: "🍟 Batata com Cheddar", descricao: "Batata com cheddar.", preco: 24, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "onion-bigo", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 22, recuperacao: { fome: 25, felicidade: 10, energia: 5 } },
                { id: "milkshake-bigo", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 9. PORTÃO - COMIDA ÁRABE ==========
        "portao-arabe": {
            id: "portao-arabe",
            nome: "🧆 Al Balad Portão",
            endereco: "Av. República Argentina, 2500 - Portão, Curitiba",
            horario: "11h às 23h",
            telefone: "(41) 4000-9999",
            descricao: "Culinária árabe autêntica. Esfihas, quibes, hommus.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "banquete-portao", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 75, recuperacao: { fome: 85, felicidade: 30, energia: 18 } },
                { id: "esfiha-portao", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 15, energia: 7 } },
                { id: "kibe-portao", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 26, recuperacao: { fome: 32, felicidade: 14, energia: 7 } },
                { id: "hommus-portao", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "suco-portao", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. REBOUÇAS - COMIDA NORDESTINA ==========
        "reboucas-nordestina": {
            id: "reboucas-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Chile, 500 - Rebouças, Curitiba",
            horario: "11h às 21h",
            telefone: "(41) 4111-0000",
            descricao: "Culinária nordestina autêntica. Baião, carne de sol.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-reboucas", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-reboucas", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-reboucas", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-reboucas", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-reboucas", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. CAJURU - COMIDA CASEIRA ==========
        "cajuru-caseira": {
            id: "cajuru-caseira",
            nome: "🇧🇷 Comida Caseira Cajuru",
            endereco: "Rua Professor Nivaldo Braga, 1000 - Cajuru, Curitiba",
            horario: "11h às 15h",
            telefone: "(41) 4222-1111",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-cajuru", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 25, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cajuru", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 28, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cajuru", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 24, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cajuru", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 26, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cajuru", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 12. BOQUEIRÃO - CAFÉ COLONIAL ==========
        "boqueirao-cafe": {
            id: "boqueirao-cafe",
            nome: "☕ Café Colonial Boqueirão",
            endereco: "Rua da Cidadania, 500 - Boqueirão, Curitiba",
            horario: "08h às 19h",
            telefone: "(41) 4333-2222",
            descricao: "Café colonial com pães, bolos, geleias e produtos caseiros.",
            tipo: ["cafeteria", "colonial", "doces", "artesanal"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-colonial-bq", nome: "☕ Café Colonial", descricao: "Mesa com pães, bolos, geleias.", preco: 38, recuperacao: { fome: 55, felicidade: 24, energia: 18 } },
                { id: "cafe-bq", nome: "☕ Café", descricao: "Café especial.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "pao-queijo-bq", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-bq", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 10, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-bq", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 13. XAXIM - PEIXARIA ==========
        "xaxim-peixaria": {
            id: "xaxim-peixaria",
            nome: "🐟 Peixaria Xaxim",
            endereco: "Rua Francisco Derosso, 1500 - Xaxim, Curitiba",
            horario: "11h às 22h",
            telefone: "(41) 4444-3333",
            descricao: "Peixes frescos da região.",
            tipo: ["peixaria", "brasileira", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "peixe-xaxim", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "camarao-xaxim", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 55, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "moqueca-xaxim", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 62, recuperacao: { fome: 68, energia: 22, felicidade: 17 } },
                { id: "isca-xaxim", nome: "🐟 Isca de Peixe", descricao: "Isca empanada.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "suco-xaxim", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. ALTO DA XV - LANCHONETE ==========
        "alto-xv-lanchonete": {
            id: "alto-xv-lanchonete",
            nome: "🍔 Lanchonete Alto da XV",
            endereco: "Rua XV de Novembro, 2000 - Alto da XV, Curitiba",
            horario: "08h às 22h",
            telefone: "(41) 4555-4444",
            descricao: "Lanchonete tradicional. X-tudo e salgados.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-xv", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-xv", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 16, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-xv", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-xv", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-xv", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 15. MERCADO MUNICIPAL ==========
        "mercado-municipal": {
            id: "mercado-municipal",
            nome: "🏛️ Mercado Municipal de Curitiba",
            endereco: "Av. Sete de Setembro, 1865 - Centro, Curitiba",
            horario: "07h às 19h",
            telefone: "(41) 4666-5555",
            descricao: "Mercado tradicional com comidas típicas e produtos regionais.",
            tipo: ["mercado", "tradicional", "regional", "turístico"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 4560,
            cardapio: [
                { id: "pastel-mercado", nome: "🥟 Pastel de Carne", descricao: "Pastel tradicional.", preco: 12, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "pinhão-mercado", nome: "🌰 Pinhão", descricao: "Pinhão cozido.", preco: 10, recuperacao: { fome: 15, felicidade: 12, energia: 5 } },
                { id: "carne-ong-mercado", nome: "🥩 Carne de Onça", descricao: "Carne moída temperada.", preco: 25, recuperacao: { fome: 32, felicidade: 15, energia: 10 } },
                { id: "barreado-mercado", nome: "🍲 Barreado", descricao: "Barreado individual.", preco: 35, recuperacao: { fome: 55, felicidade: 22, energia: 15 } },
                { id: "suco-mercado", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. SHOPPING CURITIBA ==========
        "shopping-curitiba": {
            id: "shopping-curitiba",
            nome: "🛍️ Shopping Curitiba - Food Court",
            endereco: "Rua Brigadeiro Franco, 2300 - Centro, Curitiba",
            horario: "10h às 22h",
            telefone: "(41) 4777-6666",
            descricao: "Praça de alimentação do Shopping Curitiba.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 5430,
            cardapio: [
                { id: "mc-curitiba", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-curitiba", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-curitiba", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 58, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "japa-curitiba", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-curitiba", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 17. SHOPPING BARIGÜI ==========
        "shopping-barigui": {
            id: "shopping-barigui",
            nome: "🛍️ Shopping Barigüi - Food Court",
            endereco: "Rua Professor Pedro Viriato Parigot de Souza, 600 - Mossunguê, Curitiba",
            horario: "10h às 22h",
            telefone: "(41) 4888-7777",
            descricao: "Praça de alimentação do Shopping Barigüi.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-barigui", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-barigui", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-barigui", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-barigui", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 52, felicidade: 18, energia: 10 } },
                { id: "suco-barigui", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 18. PARQUE BARIGÜI - QUIOSQUE ==========
        "parque-barigui-quiosque": {
            id: "parque-barigui-quiosque",
            nome: "🏞️ Quiosque Parque Barigüi",
            endereco: "Parque Barigüi - Av. Cândido Hartmann, 500 - Mossunguê, Curitiba",
            horario: "09h às 20h",
            telefone: "(41) 4999-8888",
            descricao: "Quiosque dentro do Parque Barigüi. Petiscos e refeições leves.",
            tipo: ["petiscos", "parque", "casual", "familiar"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "pastel-parque", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-parque", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "cafe-parque", nome: "☕ Café", descricao: "Café.", preco: 6, recuperacao: { sede: 8, energia: 10, felicidade: 7 } },
                { id: "sanduiche-parque", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 15, recuperacao: { fome: 22, energia: 8, felicidade: 6 } },
                { id: "agua-parque", nome: "💧 Água Mineral", descricao: "Água gelada.", preco: 5, recuperacao: { sede: 20, energia: 2, felicidade: 2 } }
            ]
        },
        
        // ========== 19. SANTA CÂNDIDA - TAPIOCARIA ==========
        "santa-candida-tapiocaria": {
            id: "santa-candida-tapiocaria",
            nome: "🥞 Tapiocaria Santa Cândida",
            endereco: "Rua Santa Cândida, 500 - Santa Cândida, Curitiba",
            horario: "08h às 21h",
            telefone: "(41) 5000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 20,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-sc", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-sc", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-sc", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-sc", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-sc", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-curitiba": {
            id: "aeroporto-curitiba",
            nome: "✈️ Aeroporto Afonso Pena - Praça de Alimentação",
            endereco: "Av. Rocha Pombo, s/n - Água Verde, São José dos Pinhais (Região Metropolitana)",
            horario: "04h às 00h",
            telefone: "(41) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 50,
            estrelas: 3.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aero-ctba", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 38, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "subway-aero-ctba", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 35, recuperacao: { fome: 48, energia: 13, felicidade: 9 } },
                { id: "habitual-aero-ctba", nome: "☕ Habitual", descricao: "Café.", preco: 28, recuperacao: { fome: 28, energia: 16, felicidade: 12 } },
                { id: "starbucks-aero-ctba", nome: "☕ Starbucks", descricao: "Café.", preco: 18, recuperacao: { sede: 12, energia: 15, felicidade: 13 } },
                { id: "suco-aero-ctba", nome: "🥤 Suco", descricao: "Suco natural.", preco: 14, recuperacao: { sede: 20, energia: 8, felicidade: 7 } }
            ]
        }
    },

    // ==================== LONDRINA - 10 RESTAURANTES ====================
    "Londrina": {
        // ========== 1. CENTRO - CULINÁRIA DO NORTE PARANAENSE ==========
        "londrina-tradicional": {
            id: "londrina-tradicional",
            nome: "🍲 Sabor Londrinense",
            endereco: "Rua Sergipe, 500 - Centro, Londrina",
            horario: "11h às 22h",
            telefone: "(43) 3222-1111",
            descricao: "Culinária típica do norte paranaense. Barreado, peixes e frutos do mar. Ambiente familiar.",
            tipo: ["paranaense", "regional", "tradicional", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 1240,
            cardapio: [
                { id: "barreado-londrina", nome: "🍲 Barreado", descricao: "Barreado tradicional.", preco: 52, recuperacao: { fome: 80, felicidade: 28, energia: 20 } },
                { id: "peixe-londrina", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco.", preco: 48, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-londrina", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 55, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "pinhão-londrina", nome: "🌰 Pinhão", descricao: "Pinhão cozido.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 6 } },
                { id: "suco-londrina", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "londrina-churrascaria": {
            id: "londrina-churrascaria",
            nome: "🥩 Churrascaria Londrina",
            endereco: "Av. Paraná, 1000 - Centro, Londrina",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(43) 3333-2222",
            descricao: "Churrascaria tradicional. Rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-lda", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 72, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-lda", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-lda", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-lda", nome: "🥗 Buffet", descricao: "Buffet.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-lda", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "londrina-boteco": {
            id: "londrina-boteco",
            nome: "🍺 Boteco Londrina",
            endereco: "Rua Paranaguá, 300 - Centro, Londrina",
            horario: "17h às 02h",
            telefone: "(43) 3444-3333",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-lda", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-lda", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-lda", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "batata-lda", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-lda", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. COMIDA JAPONESA ==========
        "londrina-japonesa": {
            id: "londrina-japonesa",
            nome: "🍣 Sushi Londrina",
            endereco: "Av. Higienópolis, 500 - Centro, Londrina",
            horário: "18h às 23h30",
            telefone: "(43) 3555-4444",
            descricao: "Restaurante japonês. Rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-japa-lda", nome: "🍣 Rodízio", descricao: "Rodízio completo.", preco: 72, recuperacao: { fome: 82, energia: 26, felicidade: 30 } },
                { id: "combinado-lda", nome: "🍱 Combinado", descricao: "20 peças.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 22 } },
                { id: "temaki-lda", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 26, recuperacao: { fome: 30, felicidade: 16, energia: 8 } },
                { id: "hot-lda", nome: "🌯 Hot Roll", descricao: "Hot rolls.", preco: 30, recuperacao: { fome: 36, felicidade: 16, energia: 8 } },
                { id: "sake-lda", nome: "🍶 Saquê", descricao: "Saquê.", preco: 22, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 5. PIZZARIA ==========
        "londrina-pizzaria": {
            id: "londrina-pizzaria",
            nome: "🍕 Pizzaria Londrina",
            endereco: "Rua Maranhão, 200 - Centro, Londrina",
            horario: "18h às 23h30",
            telefone: "(43) 3666-5555",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-lda", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-lda", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-lda", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-lda", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-lda-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 6. CAFÉ REGIONAL ==========
        "londrina-cafe": {
            id: "londrina-cafe",
            nome: "☕ Café Londrina",
            endereco: "Rua Piaui, 300 - Centro, Londrina",
            horario: "08h às 20h",
            telefone: "(43) 3777-6666",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-lda", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-lda", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-lda", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-lda", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-lda-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "londrina-hamburguer": {
            id: "londrina-hamburguer",
            nome: "🍔 Hamburgueria Londrina",
            endereco: "Av. Saul Elkind, 500 - Centro, Londrina",
            horario: "18h às 00h",
            telefone: "(43) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-lda", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-lda", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-lda", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-lda", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-lda", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 8. SHOPPING LONDRINA ==========
        "shopping-londrina": {
            id: "shopping-londrina",
            nome: "🛍️ Shopping Londrina - Food Court",
            endereco: "Av. Paraná, 1500 - Centro, Londrina",
            horario: "10h às 22h",
            telefone: "(43) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-lda", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-lda", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-lda", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-lda", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-lda-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA CASEIRA ==========
        "londrina-caseira": {
            id: "londrina-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Santos, 400 - Centro, Londrina",
            horario: "11h às 15h",
            telefone: "(43) 4000-9999",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 670,
            cardapio: [
                { id: "prato-feito-lda", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-lda", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-lda", nome: "🍗 Frango", descricao: "Frango assado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-lda", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-lda-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-londrina": {
            id: "rodoviaria-londrina",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Leste-Oeste, 1000 - Centro, Londrina",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-lda", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-lda-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-lda", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-lda", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-lda-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== FOZ DO IGUAÇU - 10 RESTAURANTES ====================
    "Foz do Iguaçu": {
        // ========== 1. CENTRO - COMIDA ARGENTINA ==========
        "foz-argentina": {
            id: "foz-argentina",
            nome: "🇦🇷 El Gaucho Argentino",
            endereco: "Av. Brasil, 500 - Centro, Foz do Iguaçu",
            horario: "11h30 às 23h",
            telefone: "(45) 3222-1111",
            descricao: "Churrascaria argentina com cortes nobres. Especialidade em parrillada e vinhos argentinos.",
            tipo: ["argentina", "churrascaria", "premium", "turístico", "vinhos"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "parrillada-foz", nome: "🥩 Parrillada Argentina", descricao: "Seleção de carnes argentinas (chorizo, vacío, costela). Serve 2 pessoas.", preco: 98, recuperacao: { fome: 95, felicidade: 38, energia: 28 } },
                { id: "bife-chorizo", nome: "🥩 Bife de Chorizo", descricao: "Bife argentino 400g grelhado.", preco: 68, recuperacao: { fome: 75, felicidade: 30, energia: 22 } },
                { id: "empanada-foz", nome: "🥟 Empanada Argentina (6 unid)", descricao: "Empanadas de carne, frango ou queijo.", preco: 32, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "provoleta-foz", nome: "🧀 Provoleta", descricao: "Queijo provolone grelhado com orégano.", preco: 28, recuperacao: { fome: 30, felicidade: 16, energia: 8 } },
                { id: "vinho-malbec", nome: "🍷 Vinho Malbec", descricao: "Taça de vinho argentino Malbec.", preco: 35, recuperacao: { sede: 10, felicidade: 22, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA PARAGUAIA ==========
        "foz-paraguaia": {
            id: "foz-paraguaia",
            nome: "🇵🇾 Sabor Paraguayo",
            endereco: "Rua Marechal Deodoro, 300 - Centro, Foz do Iguaçu",
            horario: "11h às 21h",
            telefone: "(45) 3333-2222",
            descricao: "Culinária paraguaia autêntica. Chipa, sopa paraguaia e tererê.",
            tipo: ["paraguaia", "regional", "tradicional", "familiar"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "sopa-paraguaia", nome: "🍲 Sopa Paraguaia", descricao: "Bolo salgado de milho e queijo.", preco: 25, recuperacao: { fome: 45, felicidade: 18, energia: 12 } },
                { id: "chipa-paraguaia", nome: "🥖 Chipa (6 unid)", descricao: "Pão de queijo paraguaio.", preco: 18, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "milanesa-paraguaia", nome: "🍖 Milanesa", descricao: "Bife empanado paraguaio.", preco: 32, recuperacao: { fome: 55, felicidade: 20, energia: 14 } },
                { id: "terere-paraguaio", nome: "🧉 Tererê", descricao: "Bebida típica paraguaia (erva-mate gelada).", preco: 10, recuperacao: { sede: 25, energia: 12, felicidade: 10 } },
                { id: "suco-foz", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CATARATAS - COMIDA BRASILEIRA ==========
        "foz-cataratas": {
            id: "foz-cataratas",
            nome: "🏞️ Restaurante das Cataratas",
            endereco: "Av. das Cataratas, 5000 - Parque Nacional, Foz do Iguaçu",
            horario: "11h às 22h",
            telefone: "(45) 3444-3333",
            descricao: "Restaurante com vista para as Cataratas. Comida brasileira e internacional.",
            tipo: ["brasileira", "turístico", "vista", "premium", "familiar"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "peixe-foz", nome: "🐟 Peixe Grelhado", descricao: "Peixe do rio Iguaçu.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "camarao-foz", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 75, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "picanha-foz", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 72, recuperacao: { fome: 72, felicidade: 28, energia: 20 } },
                { id: "risoto-foz", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso.", preco: 65, recuperacao: { fome: 62, felicidade: 26, energia: 16 } },
                { id: "caipirinha-foz", nome: "🍹 Caipirinha", descricao: "Caipirinha tropical.", preco: 22, recuperacao: { sede: 10, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 4. ITAIPU - COMIDA TÍPICA ==========
        "foz-itaipu": {
            id: "foz-itaipu",
            nome: "🍲 Restaurante Itaipu",
            endereco: "Av. Tancredo Neves, 500 - Itaipu, Foz do Iguaçu",
            horario: "11h às 22h",
            telefone: "(45) 3555-4444",
            descricao: "Comida típica da região trinacional.",
            tipo: ["regional", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "barreado-itaipu", nome: "🍲 Barreado", descricao: "Barreado tradicional.", preco: 52, recuperacao: { fome: 78, felicidade: 26, energia: 18 } },
                { id: "parrillada-itaipu", nome: "🥩 Parrillada", descricao: "Mista de carnes.", preco: 65, recuperacao: { fome: 80, felicidade: 28, energia: 20 } },
                { id: "peixe-itaipu", nome: "🐟 Peixe", descricao: "Peixe grelhado.", preco: 48, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "chipa-itaipu", nome: "🥖 Chipa", descricao: "Pão de queijo.", preco: 10, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "suco-itaipu", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. CENTRO - PIZZARIA ==========
        "foz-pizzaria": {
            id: "foz-pizzaria",
            nome: "🍕 Pizzaria Foz",
            endereco: "Rua Almirante Barroso, 300 - Centro, Foz do Iguaçu",
            horario: "18h às 23h30",
            telefone: "(45) 3666-5555",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-margherita-foz", nome: "🍕 Pizza Margherita", descricao: "Margherita.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 13 } },
                { id: "pizza-calabresa-foz", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "pizza-portuguesa-foz", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 13 } },
                { id: "calzone-foz", nome: "🥟 Calzone", descricao: "Calzone.", preco: 45, recuperacao: { fome: 50, energia: 14, felicidade: 11 } },
                { id: "suco-foz-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 6. CAFÉ REGIONAL ==========
        "foz-cafe": {
            id: "foz-cafe",
            nome: "☕ Café Fronteira",
            endereco: "Rua Paraguai, 200 - Centro, Foz do Iguaçu",
            horario: "08h às 20h",
            telefone: "(45) 3777-6666",
            descricao: "Café com influências argentina e paraguaia.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-foz", nome: "☕ Café", descricao: "Café regional.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "chipa-foz-cafe", nome: "🥖 Chipa", descricao: "Pão de queijo paraguaio.", preco: 8, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "pao-queijo-foz", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-foz", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 10, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-foz-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "foz-hamburguer": {
            id: "foz-hamburguer",
            nome: "🍔 Hamburgueria Foz",
            endereco: "Av. Juscelino Kubitschek, 500 - Centro, Foz do Iguaçu",
            horario: "18h às 00h",
            telefone: "(45) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-foz", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-foz", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-foz", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-foz", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-foz", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 8. SHOPPING FOZ ==========
        "shopping-foz": {
            id: "shopping-foz",
            nome: "🛍️ Shopping Foz - Food Court",
            endereco: "Av. Jorge Schimmelpfeng, 1000 - Centro, Foz do Iguaçu",
            horario: "10h às 22h",
            telefone: "(45) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 38,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-foz", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-foz", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-foz", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-foz", nome: "🍣 Sushi", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-foz-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA NORDESTINA ==========
        "foz-nordestina": {
            id: "foz-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua Rio de Janeiro, 300 - Centro, Foz do Iguaçu",
            horario: "11h às 21h",
            telefone: "(45) 4000-9999",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-foz", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-foz", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-foz", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-foz", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-foz-nord", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-foz": {
            id: "rodoviaria-foz",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Costa e Silva, 500 - Centro, Foz do Iguaçu",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-foz", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-foz-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-foz", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-foz", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-foz-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== MARINGÁ - 10 RESTAURANTES ====================
    "Maringá": {
        // ========== 1. CENTRO - CULINÁRIA JAPONESA (COLÔNIA) ==========
        "maringa-japonesa": {
            id: "maringa-japonesa",
            nome: "🍣 Sushi Maringá",
            endereco: "Av. XV de Novembro, 1000 - Centro, Maringá",
            horario: "18h às 23h30",
            telefone: "(44) 3222-1111",
            descricao: "Restaurante japonês tradicional. Forte influência da colônia japonesa na região. Peixes frescos e rodízio premiado.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "tradicional"],
            preco_medio: 80,
            estrelas: 4.8,
            avaliacoes: 1560,
            cardapio: [
                { id: "rodizio-maringa", nome: "🍣 Rodízio Premium", descricao: "Rodízio com 30 peças especiais.", preco: 79, recuperacao: { fome: 88, energia: 28, felicidade: 34 } },
                { id: "combinado-maringa", nome: "🍱 Combinado Especial", descricao: "25 peças variadas.", preco: 68, recuperacao: { fome: 68, energia: 22, felicidade: 26 } },
                { id: "temaki-maringa", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 28, recuperacao: { fome: 32, felicidade: 18, energia: 10 } },
                { id: "hot-maringa", nome: "🌯 Hot Roll", descricao: "Hot rolls especiais.", preco: 32, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "sake-maringa", nome: "🍶 Saquê", descricao: "Saquê tradicional.", preco: 24, recuperacao: { sede: 8, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "maringa-churrascaria": {
            id: "maringa-churrascaria",
            nome: "🥩 Churrascaria Maringá",
            endereco: "Av. Brasil, 500 - Centro, Maringá",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(44) 3333-2222",
            descricao: "Churrascaria tradicional. Rodízio de carnes.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1240,
            cardapio: [
                { id: "rodizio-mga", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 75, recuperacao: { fome: 98, energia: 40, felicidade: 36 } },
                { id: "picanha-mga", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-mga", nome: "🍖 Costela", descricao: "Costela assada.", preco: 55, recuperacao: { fome: 74, energia: 28, felicidade: 22 } },
                { id: "buffet-mga", nome: "🥗 Buffet", descricao: "Buffet completo.", preco: 48, recuperacao: { fome: 58, energia: 16, felicidade: 13 } },
                { id: "suco-mga", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "maringa-boteco": {
            id: "maringa-boteco",
            nome: "🍺 Boteco Maringá",
            endereco: "Rua Paraná, 300 - Centro, Maringá",
            horario: "17h às 02h",
            telefone: "(44) 3444-3333",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 32,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "calabresa-mga", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 26, recuperacao: { fome: 34, felicidade: 13, energia: 7 } },
                { id: "torresmo-mga", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 20, recuperacao: { fome: 26, felicidade: 11, energia: 5 } },
                { id: "queijo-mga", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 15, recuperacao: { fome: 19, felicidade: 9, energia: 4 } },
                { id: "batata-mga", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 21, felicidade: 8, energia: 4 } },
                { id: "chopp-mga", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 9, recuperacao: { sede: 24, felicidade: 11, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "maringa-pizzaria": {
            id: "maringa-pizzaria",
            nome: "🍕 Pizzaria Maringá",
            endereco: "Av. São Paulo, 500 - Centro, Maringá",
            horario: "18h às 23h30",
            telefone: "(44) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 48,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-mga", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 44, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-mga", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 48, recuperacao: { fome: 57, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-mga", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 52, recuperacao: { fome: 58, energia: 15, felicidade: 12 } },
                { id: "calzone-mga", nome: "🥟 Calzone", descricao: "Calzone.", preco: 40, recuperacao: { fome: 50, energia: 13, felicidade: 10 } },
                { id: "suco-mga-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "maringa-cafe": {
            id: "maringa-cafe",
            nome: "☕ Café Maringá",
            endereco: "Rua Santos Dumont, 300 - Centro, Maringá",
            horario: "08h às 20h",
            telefone: "(44) 3666-5555",
            descricao: "Cafeteria tradicional.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-mga", nome: "☕ Café", descricao: "Café especial.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-mga", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-mga", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-mga", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-mga-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "maringa-hamburguer": {
            id: "maringa-hamburguer",
            nome: "🍔 Hamburgueria Maringá",
            endereco: "Av. Cerro Azul, 500 - Centro, Maringá",
            horario: "18h às 00h",
            telefone: "(44) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 42,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-mga", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-mga", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 54, energia: 19, felicidade: 13 } },
                { id: "batata-mga-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "onion-mga", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 9, energia: 5 } },
                { id: "milkshake-mga", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. COMIDA ITALIANA ==========
        "maringa-italiana": {
            id: "maringa-italiana",
            nome: "🍝 Cantina Maringá",
            endereco: "Rua São Paulo, 200 - Centro, Maringá",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(44) 3888-7777",
            descricao: "Cantina italiana tradicional.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-mga", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 68, energia: 22, felicidade: 18 } },
                { id: "lasanha-mga", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 48, recuperacao: { fome: 64, energia: 20, felicidade: 16 } },
                { id: "nhoque-mga", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 44, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-mga", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 40, recuperacao: { fome: 56, energia: 17, felicidade: 13 } },
                { id: "vinho-mga", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 20, recuperacao: { sede: 8, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 8. SHOPPING MARINGÁ ==========
        "shopping-maringa": {
            id: "shopping-maringa",
            nome: "🛍️ Shopping Maringá - Food Court",
            endereco: "Av. Colombo, 1000 - Centro, Maringá",
            horario: "10h às 22h",
            telefone: "(44) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 38,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-mga", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-mga", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-mga", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-mga", nome: "🍣 Sushi", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-mga-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA CASEIRA ==========
        "maringa-caseira": {
            id: "maringa-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Minas Gerais, 400 - Centro, Maringá",
            horario: "11h às 15h",
            telefone: "(44) 4000-9999",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 26,
            estrelas: 4.2,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-mga", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 24, recuperacao: { fome: 66, energia: 21, felicidade: 14 } },
                { id: "bife-mga", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 26, recuperacao: { fome: 62, energia: 19, felicidade: 13 } },
                { id: "frango-mga", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 22, recuperacao: { fome: 57, energia: 17, felicidade: 13 } },
                { id: "peixe-mga", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 24, recuperacao: { fome: 60, energia: 17, felicidade: 13 } },
                { id: "suco-mga-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-maringa": {
            id: "rodoviaria-maringa",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Brasil, 2000 - Centro, Maringá",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-mga", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-mga-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-mga", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-mga", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-mga-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesPR;