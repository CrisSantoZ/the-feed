const restaurantesDF = {
    // ==================== BRASÍLIA (CAPITAL) - 20 RESTAURANTES ====================
    "Brasília": {
        // ========== 1. ASA SUL - CULINÁRIA BRASILIENSE ==========
        "asa-sul-brasiliense": {
            id: "asa-sul-brasiliense",
            nome: "🍽️ Culinária Brasiliense",
            endereco: "CLS 102 Bloco A, 100 - Asa Sul, Brasília",
            horario: "11h às 22h",
            telefone: "(61) 3222-1111",
            descricao: "Restaurante tradicional com culinária brasiliense. Pratos típicos da região, peixes do Cerrado e ingredientes locais. Ambiente acolhedor.",
            tipo: ["brasiliense", "regional", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "peixe-cerrado", nome: "🐟 Peixe do Cerrado", descricao: "Peixe fresco da região grelhado com molho de pequi.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 16 } },
                { id: "galinhada-pequi", nome: "🍚 Galinhada com Pequi", descricao: "Frango caipira com arroz e pequi.", preco: 52, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "arroz-com-pecas", nome: "🍲 Arroz com Pequi", descricao: "Arroz típico com pequi e frango.", preco: 38, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "empadao-brasiliense", nome: "🥧 Empadão Goiano", descricao: "Empadão recheado com frango, palmito e queijo.", preco: 28, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "sucu-cerrado", nome: "🥤 Suco do Cerrado", descricao: "Suco de cagaita ou araticum.", preco: 12, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. ASA NORTE - CHURRASCARIA ==========
        "asa-norte-churrascaria": {
            id: "asa-norte-churrascaria",
            nome: "🥩 Churrascaria Asa Norte",
            endereco: "CLN 103 Bloco B, 200 - Asa Norte, Brasília",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(61) 3333-2222",
            descricao: "Churrascaria tradicional com rodízio de carnes nobres. Buffet completo e ambiente familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "rodizio-asa-norte", nome: "🥩 Rodízio Completo", descricao: "Mais de 15 cortes: picanha, costela, maminha, fraldinha, cordeiro.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-asa-norte", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 62, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-asa-norte", nome: "🍖 Costela Assada", descricao: "Costela bovina assada lentamente.", preco: 58, recuperacao: { fome: 75, energia: 28, felicidade: 22 } },
                { id: "buffet-asa-norte", nome: "🥗 Buffet Self-Service", descricao: "Saladas, massas, sushi, legumes.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-asa-norte", nome: "🥤 Suco de Cagaita", descricao: "Suco típico do cerrado.", preco: 12, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 3. LAGO SUL - COMIDA INTERNACIONAL PREMIUM ==========
        "lago-sul-internacional": {
            id: "lago-sul-internacional",
            nome: "🍽️ Lago Sul Gastrô",
            endereco: "SHIS QI 5 Bloco C, 300 - Lago Sul, Brasília",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(61) 3444-3333",
            descricao: "Cozinha internacional contemporânea. Chef premiado. Ambiente sofisticado e vista para o Lago.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico", "vista"],
            preco_medio: 140,
            estrelas: 4.9,
            avaliacoes: 890,
            cardapio: [
                { id: "file-lago-sul", nome: "🥩 Filé Mignon ao Molho", descricao: "Filé mignon com molho de vinho tinto e cogumelos.", preco: 105, recuperacao: { fome: 78, felicidade: 38, energia: 24 } },
                { id: "lagosta-lago-sul", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 155, recuperacao: { fome: 88, felicidade: 44, energia: 26 } },
                { id: "salmao-lago-sul", nome: "🐟 Salmão ao Molho", descricao: "Salmão grelhado com molho de maracujá.", preco: 92, recuperacao: { fome: 70, felicidade: 32, energia: 20 } },
                { id: "risoto-lago-sul", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso com camarões.", preco: 85, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "espumante-lago-sul", nome: "🥂 Espumante Brut", descricao: "Espumante brasileiro premiado.", preco: 42, recuperacao: { sede: 10, felicidade: 26, energia: -6 } }
            ]
        },
        
        // ========== 4. LAGO NORTE - FRUTOS DO MAR ==========
        "lago-norte-frutos": {
            id: "lago-norte-frutos",
            nome: "🐟 Restaurante Lago Norte",
            endereco: "SHIN CA 4 Bloco E, 200 - Lago Norte, Brasília",
            horario: "11h às 23h",
            telefone: "(61) 3555-4444",
            descricao: "Frutos do mar frescos com vista para o Lago Norte. Especialidade em peixes, camarões e lagosta.",
            tipo: ["frutos-do-mar", "brasileira", "vista", "premium", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "lagosta-lago-norte", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 125, recuperacao: { fome: 85, felicidade: 38, energia: 24 } },
                { id: "camarao-lago-norte", nome: "🍤 Camarão ao Alho", descricao: "Camarões grandes salteados no alho.", preco: 75, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "moqueca-lago-norte", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 82, recuperacao: { fome: 78, felicidade: 30, energia: 20 } },
                { id: "peixe-lago-norte", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 62, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "suco-lago-norte", nome: "🥤 Suco de Cajá", descricao: "Suco natural de cajá.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 5. SUDOESTE - COMIDA JAPONESA ==========
        "sudoeste-japonesa": {
            id: "sudoeste-japonesa",
            nome: "🍣 Sushi Sudoeste",
            endereco: "CLSW 104 Bloco B, 150 - Sudoeste, Brasília",
            horario: "18h às 23h30",
            telefone: "(61) 3666-5555",
            descricao: "Restaurante japonês tradicional. Peixes frescos, rodízio premium e ambiente zen.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "familiar"],
            preco_medio: 90,
            estrelas: 4.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-sudoeste", nome: "🍣 Rodízio Premium", descricao: "Rodízio com 28 peças + temaki + hot roll.", preco: 85, recuperacao: { fome: 88, energia: 28, felicidade: 34 } },
                { id: "combinado-sudoeste", nome: "🍱 Combinado Especial", descricao: "22 peças variadas.", preco: 65, recuperacao: { fome: 65, energia: 20, felicidade: 26 } },
                { id: "temaki-sudoeste", nome: "🍙 Temaki de Salmão", descricao: "Temaki grande com salmão e cream cheese.", preco: 30, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "hot-sudoeste", nome: "🌯 Hot Roll (8 unid)", descricao: "Hot rolls empanados.", preco: 35, recuperacao: { fome: 40, felicidade: 18, energia: 10 } },
                { id: "sake-sudoeste", nome: "🍶 Saquê", descricao: "Saquê quente.", preco: 26, recuperacao: { sede: 8, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 6. NOROESTE - PIZZARIA ==========
        "noroeste-pizzaria": {
            id: "noroeste-pizzaria",
            nome: "🍕 Pizzaria Noroeste",
            endereco: "CLNW 12 Bloco A, 100 - Noroeste, Brasília",
            horario: "18h às 00h",
            telefone: "(61) 3777-6666",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                { id: "pizza-margherita-noroeste", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 16 } },
                { id: "pizza-calabresa-noroeste", nome: "🍕 Pizza Calabresa", descricao: "Calabresa, cebola.", preco: 58, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "pizza-portuguesa-noroeste", nome: "🍕 Pizza Portuguesa", descricao: "Presunto, ovos, cebola.", preco: 62, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "calzone-noroeste", nome: "🥟 Calzone", descricao: "Pizza fechada.", preco: 50, recuperacao: { fome: 55, energia: 15, felicidade: 14 } },
                { id: "suco-noroeste", nome: "🥤 Suco de Maracujá", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 7. ÁGUAS CLARAS - HAMBURGUERIA ==========
        "aguas-claras-hamburguer": {
            id: "aguas-claras-hamburguer",
            nome: "🍔 Hamburgueria Águas Claras",
            endereco: "Av. Araucárias, 500 - Águas Claras, Brasília",
            horario: "18h às 00h",
            telefone: "(61) 3888-7777",
            descricao: "Hamburgueria artesanal. Cervejas artesanais e ambiente descolado.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana", "cervejaria"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 1250,
            cardapio: [
                { id: "smash-ac", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo smash com cheddar e bacon.", preco: 42, recuperacao: { fome: 65, energia: 24, felicidade: 20 } },
                { id: "vegan-ac", nome: "🌱 Vegan Burger", descricao: "Hambúrguer vegano de grão-de-bico.", preco: 44, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "batata-ac", nome: "🍟 Batata com Cheddar", descricao: "Batata frita com cheddar e bacon.", preco: 24, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "onion-ac", nome: "🧅 Onion Rings", descricao: "Anéis de cebola empanados.", preco: 22, recuperacao: { fome: 25, felicidade: 10, energia: 5 } },
                { id: "milkshake-ac", nome: "🥤 Milkshake", descricao: "Milkshake artesanal.", preco: 20, recuperacao: { sede: 16, felicidade: 18, energia: 10 } }
            ]
        },
        
        // ========== 8. GUARÁ - COMIDA NORDESTINA ==========
        "guara-nordestina": {
            id: "guara-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "QI 16 Bloco A, 200 - Guará, Brasília",
            horario: "11h às 22h",
            telefone: "(61) 3999-8888",
            descricao: "Culinária nordestina autêntica. Baião de dois, carne de sol, panelada e forró ao vivo.",
            tipo: ["nordestina", "regional", "forro", "familiar", "tradicional"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "baiao-guara", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 45, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "carne-sol-guara", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 52, recuperacao: { fome: 72, felicidade: 26, energia: 16 } },
                { id: "panelada-guara", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 42, recuperacao: { fome: 65, energia: 22, energia: 13 } },
                { id: "tapioca-guara", nome: "🥞 Tapioca de Carne", descricao: "Tapioca recheada com carne seca.", preco: 18, recuperacao: { fome: 25, felicidade: 15, energia: 7 } },
                { id: "suco-guara", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 9. CRUZEIRO - BOTECO ==========
        "cruzeiro-boteco": {
            id: "cruzeiro-boteco",
            nome: "🍺 Boteco do Cruzeiro",
            endereco: "SRES 3 Bloco A, 300 - Cruzeiro, Brasília",
            horario: "17h às 03h",
            telefone: "(61) 4000-9999",
            descricao: "Boteco tradicional. Petiscos, cerveja gelada e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 1560,
            cardapio: [
                { id: "calabresa-cruzeiro", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 8 } },
                { id: "torresmo-cruzeiro", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-cruzeiro", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 16, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "batata-cruzeiro", nome: "🍟 Batata Frita", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "chopp-cruzeiro", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 10. CANDANGOLÂNDIA - COMIDA CASEIRA ==========
        "candangolandia-caseira": {
            id: "candangolandia-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "QSD 10 Bloco C, 200 - Candangolândia, Brasília",
            horario: "11h às 15h",
            telefone: "(61) 4111-0000",
            descricao: "Restaurante familiar. Comida caseira e buffet.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-candanga", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína, farofa, salada.", preco: 25, recuperacao: { fome: 68, energia: 22, felicidade: 15 } },
                { id: "bife-candanga", nome: "🥩 Bife Acebolado", descricao: "Bife grelhado com cebola.", preco: 28, recuperacao: { fome: 62, energia: 20, felicidade: 14 } },
                { id: "frango-candanga", nome: "🍗 Frango Grelhado", descricao: "Frango grelhado.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 13 } },
                { id: "peixe-candanga", nome: "🐟 Peixe Frito", descricao: "Filé de peixe frito.", preco: 26, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-candanga", nome: "🥤 Suco Natural", descricao: "Suco de fruta.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 11. PARK SHOPPING - FOOD COURT ==========
        "park-shopping": {
            id: "park-shopping",
            nome: "🛍️ Park Shopping - Food Court",
            endereco: "SMAS, Trecho 3, Conjunto 1 - Asa Sul, Brasília",
            horario: "10h às 22h",
            telefone: "(61) 4222-1111",
            descricao: "Praça de alimentação do Park Shopping.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 50,
            estrelas: 4.3,
            avaliacoes: 6540,
            cardapio: [
                { id: "mc-park", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "habibs-park", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 30, recuperacao: { fome: 40, energia: 12, felicidade: 9 } },
                { id: "outback-park", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 60, recuperacao: { fome: 65, energia: 20, felicidade: 18 } },
                { id: "japa-park", nome: "🍣 Sushi", descricao: "Combinado.", preco: 45, recuperacao: { fome: 55, felicidade: 20, energia: 12 } },
                { id: "suco-park", nome: "🥤 Suco", descricao: "Suco natural.", preco: 14, recuperacao: { sede: 20, energia: 8, felicidade: 7 } }
            ]
        },
        
        // ========== 12. PIER 21 - RESTAURANTES PREMIUM ==========
        "pier-21-premium": {
            id: "pier-21-premium",
            nome: "🍽️ Pier 21 Gastrô",
            endereco: "SHTN Trecho 1, Conjunto 1B - Asa Norte, Brasília",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(61) 4333-2222",
            descricao: "Restaurante premium no Pier 21. Cozinha contemporânea com vista para o Lago Paranoá.",
            tipo: ["contemporanea", "premium", "romântico", "vista", "gastronomico"],
            preco_medio: 130,
            estrelas: 4.8,
            avaliacoes: 980,
            cardapio: [
                { id: "file-pier", nome: "🥩 Filé Mignon", descricao: "Filé com molho de vinho.", preco: 98, recuperacao: { fome: 75, felicidade: 36, energia: 22 } },
                { id: "lagosta-pier", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 145, recuperacao: { fome: 85, felicidade: 42, energia: 25 } },
                { id: "risoto-pier", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 85, recuperacao: { fome: 65, felicidade: 30, energia: 18 } },
                { id: "salmao-pier", nome: "🐟 Salmão", descricao: "Salmão grelhado.", preco: 88, recuperacao: { fome: 68, felicidade: 32, energia: 18 } },
                { id: "espumante-pier", nome: "🥂 Espumante", descricao: "Espumante brut.", preco: 40, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 13. SETOR HOTELEIRO NORTE - COMIDA ÁRABE ==========
        "shn-arabe": {
            id: "shn-arabe",
            nome: "🧆 Al Balad Brasília",
            endereco: "SHN QI 2 Bloco A, 100 - Asa Norte, Brasília",
            horario: "11h às 23h",
            telefone: "(61) 4444-3333",
            descricao: "Culinária árabe autêntica. Esfihas, quibes, hommus e banquetes.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "premium"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "banquete-arabe-shn", nome: "🍽️ Banquete Árabe", descricao: "Hommus, babaganoush, kibe, esfihas, charme.", preco: 85, recuperacao: { fome: 90, felicidade: 34, energia: 22 } },
                { id: "esfiha-shn", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 32, recuperacao: { fome: 40, felicidade: 16, energia: 8 } },
                { id: "kibe-shn", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 7 } },
                { id: "hommus-shn", nome: "🫔 Hommus", descricao: "Hommus com pão sírio.", preco: 24, recuperacao: { fome: 28, felicidade: 15, energia: 7 } },
                { id: "suco-shn", nome: "🥤 Suco", descricao: "Suco de limão com hortelã.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: 5 } }
            ]
        },
        
        // ========== 14. SETOR COMERCIAL SUL - COMIDA RÁPIDA ==========
        "scs-comida-rapida": {
            id: "scs-comida-rapida",
            nome: "🍔 Comida Rápida SCS",
            endereco: "SCS Qd 4 Bloco A - Asa Sul, Brasília",
            horário: "08h às 20h",
            telefone: "(61) 4555-4444",
            descricao: "Quiosques e lanchonetes no centro comercial.",
            tipo: ["fast-food", "lanches", "popular", "executivos"],
            preco_medio: 25,
            estrelas: 4.1,
            avaliacoes: 2340,
            cardapio: [
                { id: "x-tudo-scs", nome: "🍔 X-Tudo", descricao: "X-tudo completo.", preco: 22, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "pastel-scs", nome: "🥟 Pastel", descricao: "Pastel de carne.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-scs", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } },
                { id: "coxinha-scs", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "cafe-scs", nome: "☕ Café", descricao: "Café expresso.", preco: 5, recuperacao: { sede: 8, energia: 10, felicidade: 7 } }
            ]
        },
        
        // ========== 15. VILA PLANALTO - CAFÉ REGIONAL ==========
        "vila-planalto-cafe": {
            id: "vila-planalto-cafe",
            nome: "☕ Café Vila Planalto",
            endereco: "QL 2 Conjunto A, 100 - Vila Planalto, Brasília",
            horario: "08h às 20h",
            telefone: "(61) 4666-5555",
            descricao: "Cafeteria charmosa com produtos regionais do Cerrado.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-vp", nome: "☕ Café do Cerrado", descricao: "Café especial.", preco: 9, recuperacao: { sede: 10, energia: 14, felicidade: 12 } },
                { id: "bolo-vp", nome: "🍰 Bolo de Pequi", descricao: "Bolo típico com pequi.", preco: 12, recuperacao: { fome: 18, felicidade: 16, energia: 6 } },
                { id: "tapioca-vp", nome: "🥞 Tapioca", descricao: "Tapioca de coco.", preco: 14, recuperacao: { fome: 20, felicidade: 14, energia: 6 } },
                { id: "pao-queijo-vp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 8, recuperacao: { fome: 14, felicidade: 10, energia: 5 } },
                { id: "suco-vp", nome: "🥤 Suco de Cagaita", descricao: "Suco típico.", preco: 10, recuperacao: { sede: 18, energia: 8, felicidade: 8 } }
            ]
        },
        
        // ========== 16. SOBRADINHO - PEIXARIA ==========
        "sobradinho-peixaria": {
            id: "sobradinho-peixaria",
            nome: "🐟 Peixaria Sobradinho",
            endereco: "Quadra 11 Conjunto B, 200 - Sobradinho, Brasília",
            horario: "11h às 22h",
            telefone: "(61) 4777-6666",
            descricao: "Peixes frescos da região. Especialidade em pratos com pequi.",
            tipo: ["peixaria", "regional", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "peixe-sobradinho", nome: "🐟 Peixe Grelhado", descricao: "Peixe fresco grelhado.", preco: 48, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-sobradinho", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 55, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-sobradinho", nome: "🍲 Moqueca", descricao: "Moqueca regional.", preco: 62, recuperacao: { fome: 70, felicidade: 26, energia: 17 } },
                { id: "tambaqui-sobradinho", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 58, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "suco-sobradinho", nome: "🥤 Suco", descricao: "Suco de cagaita.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 17. PLANALTINA - COMIDA SERTANEJA ==========
        "planaltina-sertaneja": {
            id: "planaltina-sertaneja",
            nome: "🌵 Sabor Sertanejo",
            endereco: "Rua São Sebastião, 300 - Planaltina, Brasília",
            horario: "11h às 21h",
            telefone: "(61) 4888-7777",
            descricao: "Culinária sertaneja autêntica. Comida típica do cerrado.",
            tipo: ["sertaneja", "regional", "tradicional", "familiar"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "arroz-planaltina", nome: "🍚 Arroz com Pequi", descricao: "Arroz típico.", preco: 38, recuperacao: { fome: 60, felicidade: 20, energia: 13 } },
                { id: "galinhada-planaltina", nome: "🍚 Galinhada", descricao: "Galinhada com pequi.", preco: 45, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "empadao-planaltina", nome: "🥧 Empadão", descricao: "Empadão goiano.", preco: 28, recuperacao: { fome: 38, felicidade: 18, energia: 10 } },
                { id: "pao-planaltina", nome: "🍞 Pão de Queijo", descricao: "Pão de queijo.", preco: 8, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "suco-planaltina", nome: "🥤 Suco", descricao: "Suco de araticum.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 18. GAMA - LANCHONETE ==========
        "gama-lanchonete": {
            id: "gama-lanchonete",
            nome: "🍔 Lanchonete Gama",
            endereco: "QSF 5 Conjunto C, 100 - Gama, Brasília",
            horario: "08h às 22h",
            telefone: "(61) 4999-8888",
            descricao: "Lanchonete tradicional. X-tudo e salgados.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-gama", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-gama", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 16, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-gama", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-gama", nome: "🥟 Pastel", descricao: "Pastel.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-gama", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 19. SANTA MARIA - TAPIOCARIA ==========
        "santa-maria-tapiocaria": {
            id: "santa-maria-tapiocaria",
            nome: "🥞 Tapiocaria Santa Maria",
            endereco: "QS 5 Conjunto B, 200 - Santa Maria, Brasília",
            horario: "08h às 21h",
            telefone: "(61) 5000-9999",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 20,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-queijo-sm", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-sm", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 14, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "tapioca-carne-sm", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 16, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-romeu-sm", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 14, recuperacao: { fome: 18, felicidade: 15, energia: 5 } },
                { id: "suco-sm", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-brasilia": {
            id: "aeroporto-brasilia",
            nome: "✈️ Aeroporto JK - Praça de Alimentação",
            endereco: "Lago Sul - Aeroporto Internacional, Brasília",
            horario: "04h às 00h",
            telefone: "(61) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 50,
            estrelas: 3.8,
            avaliacoes: 4560,
            cardapio: [
                { id: "mc-aero-bsb", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 38, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "subway-aero-bsb", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 35, recuperacao: { fome: 48, energia: 13, felicidade: 9 } },
                { id: "habitual-aero-bsb", nome: "☕ Habitual", descricao: "Café.", preco: 28, recuperacao: { fome: 28, energia: 16, felicidade: 12 } },
                { id: "starbucks-aero-bsb", nome: "☕ Starbucks", descricao: "Café.", preco: 18, recuperacao: { sede: 12, energia: 15, felicidade: 13 } },
                { id: "suco-aero-bsb", nome: "🥤 Suco", descricao: "Suco natural.", preco: 14, recuperacao: { sede: 20, energia: 8, felicidade: 7 } }
            ]
        }
    },

    // ==================== CEILÂNDIA - 10 RESTAURANTES ====================
    "Ceilândia": {
        // ========== 1. CENTRO - COMIDA POPULAR ==========
        "ceilandia-popular": {
            id: "ceilandia-popular",
            nome: "🍲 Comida Popular Ceilândia",
            endereco: "QNN 18 Bloco A, 100 - Ceilândia, Brasília",
            horario: "11h às 15h",
            telefone: "(61) 3222-1111",
            descricao: "Restaurante popular com comida caseira e preço acessível. Frequentado por trabalhadores e estudantes.",
            tipo: ["brasileira", "popular", "caseira", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 1450,
            cardapio: [
                { id: "prato-feito-cei", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína, farofa, salada.", preco: 18, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cei", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cei", nome: "🍗 Frango", descricao: "Frango assado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cei", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cei", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO ==========
        "ceilandia-boteco": {
            id: "ceilandia-boteco",
            nome: "🍺 Boteco Ceilândia",
            endereco: "QNM 25 Bloco B, 200 - Ceilândia, Brasília",
            horario: "17h às 02h",
            telefone: "(61) 3333-2222",
            descricao: "Boteco tradicional. Petiscos, cerveja gelada e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "popular"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "calabresa-cei", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-cei", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-cei", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 14, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "batata-cei", nome: "🍟 Batata Frita", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-cei", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "ceilandia-pizzaria": {
            id: "ceilandia-pizzaria",
            nome: "🍕 Pizzaria Ceilândia",
            endereco: "QNN 15 Bloco C, 150 - Ceilândia, Brasília",
            horario: "18h às 23h30",
            telefone: "(61) 3444-3333",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "pizza-mussarela-cei", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-cei", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-cei", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-cei", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-cei-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 4. COMIDA NORDESTINA ==========
        "ceilandia-nordestina": {
            id: "ceilandia-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "QNM 27 Conjunto B, 300 - Ceilândia, Brasília",
            horario: "11h às 21h",
            telefone: "(61) 3555-4444",
            descricao: "Culinária nordestina autêntica. Baião de dois e carne de sol.",
            tipo: ["nordestina", "regional", "familiar", "tradicional"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "baiao-cei", nome: "🍚 Baião de Dois", descricao: "Baião tradicional.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-cei", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-cei", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-cei", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-cei-nord", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "ceilandia-cafe": {
            id: "ceilandia-cafe",
            nome: "☕ Café Ceilândia",
            endereco: "QNM 12 Bloco D, 100 - Ceilândia, Brasília",
            horario: "08h às 20h",
            telefone: "(61) 3666-5555",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-cei", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cei-cafe", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cei", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cei", nome: "🍰 Bolo", descricao: "Bolo de cenoura.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-cei-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "ceilandia-hamburguer": {
            id: "ceilandia-hamburguer",
            nome: "🍔 Hamburgueria Ceilândia",
            endereco: "QNN 10 Conjunto A, 200 - Ceilândia, Brasília",
            horario: "18h às 00h",
            telefone: "(61) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-cei", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-cei", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-cei-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-cei", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-cei", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "ceilandia-tapiocaria": {
            id: "ceilandia-tapiocaria",
            nome: "🥞 Tapiocaria Ceilândia",
            endereco: "QNM 30 Conjunto C, 100 - Ceilândia, Brasília",
            horario: "08h às 21h",
            telefone: "(61) 3888-7777",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "fast-food"],
            preco_medio: 18,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-carne-cei", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-cei", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-cei", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-cei", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-tapioca-cei", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. COMIDA ITALIANA ==========
        "ceilandia-italiana": {
            id: "ceilandia-italiana",
            nome: "🍝 Cantina Ceilândia",
            endereco: "QNM 08 Bloco E, 200 - Ceilândia, Brasília",
            horario: "11h30 às 15h | 18h30 às 22h",
            telefone: "(61) 3999-8888",
            descricao: "Cantina italiana tradicional.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-cei", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 48, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "lasanha-cei", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 45, recuperacao: { fome: 62, energia: 18, felicidade: 15 } },
                { id: "nhoque-cei", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 42, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "polenta-cei", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 38, recuperacao: { fome: 52, energia: 16, felicidade: 12 } },
                { id: "vinho-cei", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 9. SHOPPING CEILÂNDIA ==========
        "shopping-ceilandia": {
            id: "shopping-ceilandia",
            nome: "🛍️ Shopping Ceilândia - Food Court",
            endereco: "QNM 01 Área Especial - Ceilândia, Brasília",
            horario: "10h às 22h",
            telefone: "(61) 4000-9999",
            descricao: "Praça de alimentação do Shopping Ceilândia.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 1240,
            cardapio: [
                { id: "mc-cei", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cei", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-cei", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-cei", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-cei-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-ceilandia": {
            id: "rodoviaria-ceilandia",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "QNM 01 - Ceilândia, Brasília",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-cei", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-cei-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-cei", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-cei", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-cei-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== TAGUATINGA - 10 RESTAURANTES ====================
    "Taguatinga": {
        // ========== 1. CENTRO - CHURRASCARIA ==========
        "taguatinga-churrascaria": {
            id: "taguatinga-churrascaria",
            nome: "🥩 Churrascaria Taguatinga",
            endereco: "CSB 12 Bloco A, 100 - Taguatinga, Brasília",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(61) 3222-1111",
            descricao: "Churrascaria tradicional. Rodízio de carnes e buffet.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-tag", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 72, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-tag", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-tag", nome: "🍖 Costela", descricao: "Costela assada.", preco: 50, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-tag", nome: "🥗 Buffet", descricao: "Buffet self-service.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-tag", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 2. CENTRO - COMIDA CASEIRA ==========
        "taguatinga-caseira": {
            id: "taguatinga-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "CSB 05 Bloco B, 200 - Taguatinga, Brasília",
            horario: "11h às 15h",
            telefone: "(61) 3333-2222",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-tag", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-tag", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-tag", nome: "🍗 Frango", descricao: "Frango assado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-tag", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-tag-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - BOTECO ==========
        "taguatinga-boteco": {
            id: "taguatinga-boteco",
            nome: "🍺 Boteco Taguatinga",
            endereco: "CSB 08 Bloco C, 150 - Taguatinga, Brasília",
            horario: "17h às 02h",
            telefone: "(61) 3444-3333",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 1120,
            cardapio: [
                { id: "calabresa-tag", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-tag", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-tag", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 9, energia: 4 } },
                { id: "batata-tag", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-tag", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 4. PIZZARIA ==========
        "taguatinga-pizzaria": {
            id: "taguatinga-pizzaria",
            nome: "🍕 Pizzaria Taguatinga",
            endereco: "CSC 03 Bloco D, 200 - Taguatinga, Brasília",
            horario: "18h às 23h30",
            telefone: "(61) 3555-4444",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-tag", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-tag", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-tag", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-tag", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-tag-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CAFÉ REGIONAL ==========
        "taguatinga-cafe": {
            id: "taguatinga-cafe",
            nome: "☕ Café Taguatinga",
            endereco: "CSB 02 Bloco A, 100 - Taguatinga, Brasília",
            horario: "08h às 20h",
            telefone: "(61) 3666-5555",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-tag", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-tag", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-tag", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-tag", nome: "🍰 Bolo", descricao: "Bolo de fubá.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-tag-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. HAMBURGUERIA ==========
        "taguatinga-hamburguer": {
            id: "taguatinga-hamburguer",
            nome: "🍔 Hamburgueria Taguatinga",
            endereco: "CSB 15 Bloco E, 300 - Taguatinga, Brasília",
            horario: "18h às 00h",
            telefone: "(61) 3777-6666",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "smash-tag", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-tag", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-tag-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-tag", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-tag", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 7. TAPIOCARIA ==========
        "taguatinga-tapiocaria": {
            id: "taguatinga-tapiocaria",
            nome: "🥞 Tapiocaria Taguá",
            endereco: "CSB 10 Bloco B, 150 - Taguatinga, Brasília",
            horario: "08h às 21h",
            telefone: "(61) 3888-7777",
            descricao: "Tapiocaria com sabores tradicionais.",
            tipo: ["tapiocaria", "regional", "fast-food"],
            preco_medio: 18,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "tapioca-carne-tag", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-tag", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-tag", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-tag", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-tapioca-tag", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. SHOPPING TAGUATINGA ==========
        "shopping-taguatinga": {
            id: "shopping-taguatinga",
            nome: "🛍️ Shopping Taguatinga - Food Court",
            endereco: "CSB 02 - Taguatinga, Brasília",
            horario: "10h às 22h",
            telefone: "(61) 3999-8888",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-tag", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-tag", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-tag", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-tag", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-tag-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. COMIDA NORDESTINA ==========
        "taguatinga-nordestina": {
            id: "taguatinga-nordestina",
            nome: "🌵 Sabor do Nordeste",
            endereco: "CSB 06 Bloco F, 100 - Taguatinga, Brasília",
            horário: "11h às 21h",
            telefone: "(61) 4000-9999",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-tag-nord", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-tag-nord", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-tag-nord", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-tag-nord", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 15, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-tag-nord", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-taguatinga": {
            id: "rodoviaria-taguatinga",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "CSB 01 - Taguatinga, Brasília",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-tag", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-tag-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-tag", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-tag", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-tag-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesDF;