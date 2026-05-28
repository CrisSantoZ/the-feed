const restaurantesBA = {
    // ==================== SALVADOR (CAPITAL) ====================
    "Salvador": {
        // ========== PELOURINHO ==========
        "pelourinho-acaraje": {
            id: "pelourinho-acaraje",
            nome: "🫓 Acarajé da Baiana",
            endereco: "Largo do Pelourinho, 10 - Pelourinho, Salvador",
            horario: "15h às 23h",
            telefone: "(71) 3333-1111",
            descricao: "Autêntico acarajé feito por baianas no Pelourinho. Massa de feijão fradinho frita no dendê, recheada com vatapá, camarão seco, caruru e pimenta. Patrimônio cultural imaterial da Bahia.",
            tipo: ["baiana", "comida-de-rua", "tradicional", "afro-brasileira", "turístico"],
            preco_medio: 25,
            estrelas: 4.9,
            avaliacoes: 8750,
            cardapio: [
                { id: "acaraje-tradicional", nome: "🫓 Acarajé Tradicional", descricao: "Bolinho de feijão fradinho frito no azeite de dendê, aberto e recheado com vatapá, camarão seco, caruru e pimenta. Acompanha molho de pimenta caseiro.", preco: 22, recuperacao: { fome: 45, felicidade: 35, energia: 15 } },
                { id: "acaraje-vegano", nome: "🌱 Acarajé Vegano", descricao: "Versão vegana do tradicional, recheado com vatapá de castanha, caruru de quiabo, tomate e cebola.", preco: 24, recuperacao: { fome: 40, felicidade: 28, energia: 12 } },
                { id: "abara", nome: "🍞 Abará", descricao: "Versão cozida do acarajé, mais leve e saborosa, recheado com vatapá e camarão seco.", preco: 18, recuperacao: { fome: 38, felicidade: 25, energia: 10 } },
                { id: "vatapa", nome: "🥣 Vatapá na Tigela", descricao: "Cremoso vatapá de pão, leite de coco, amendoim, castanha e camarão seco. Acompanha arroz.", preco: 28, recuperacao: { fome: 50, felicidade: 22, energia: 12 } },
                { id: "suco-maracuja", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá com leite de coco.", preco: 10, recuperacao: { sede: 25, felicidade: 12, energia: 6 } }
            ]
        },
        "pelourinho-boteco": {
            id: "pelourinho-boteco",
            nome: "🍺 Boteco do Pelô",
            endereco: "Rua das Laranjeiras, 45 - Pelourinho, Salvador",
            horario: "11h às 02h",
            telefone: "(71) 3333-2222",
            descricao: "Boteco tradicional no coração do Pelourinho. Música ao vivo com samba e chorinho. Petiscos típicos e cerveja gelada. Frequentado por artistas e turistas.",
            tipo: ["boteco", "samba", "petiscos", "happy-hour", "musica-ao-vivo", "turístico"],
            preco_medio: 45,
            estrelas: 4.7,
            avaliacoes: 4320,
            cardapio: [
                { id: "bolinho-acaraje", nome: "🍘 Bolinho de Acarajé", descricao: "Mini acarajés fritos, servidos com molho de pimenta. Porção com 8 unidades.", preco: 28, recuperacao: { fome: 35, felicidade: 18, energia: 8 } },
                { id: "camarao-alho", nome: "🍤 Camarão ao Alho e Óleo", descricao: "Camarões salteados no alho e azeite de dendê, com cheiro-verde e pimenta calabresa.", preco: 52, recuperacao: { fome: 55, felicidade: 22, energia: 15 } },
                { id: "moqueca-peixe", nome: "🍲 Moqueca Individual", descricao: "Moqueca de peixe servida na cerâmica, com arroz, pirão e farofa.", preco: 48, recuperacao: { fome: 65, felicidade: 25, energia: 16 } },
                { id: "pastel-bacalhau", nome: "🥟 Pastel de Bacalhau", descricao: "Pastel crocante recheado com bacalhau desfiado, catupiry e azeitona.", preco: 16, recuperacao: { fome: 20, felicidade: 10, energia: 4 } },
                { id: "cerveja-boteco", nome: "🍺 Cerveja Gelada", descricao: "Long neck de cerveja Pilsen ou Lager, extremamente gelada.", preco: 10, recuperacao: { sede: 22, felicidade: 12, energia: -5 } }
            ]
        },
        "pelourinho-chocolate": {
            id: "pelourinho-chocolate",
            nome: "🍫 Chocolate Bahia House",
            endereco: "Largo do Cruzeiro de São Francisco, 5 - Pelourinho, Salvador",
            horario: "10h às 20h",
            telefone: "(71) 3333-3333",
            descricao: "Chocolateria artesanal com cacau orgânico do sul da Bahia. Bombons, trufas, bebidas e sobremesas. Degustação guiada de chocolate.",
            tipo: ["doces", "cacau", "artesanal", "cafeteria", "turístico"],
            preco_medio: 40,
            estrelas: 4.8,
            avaliacoes: 2150,
            cardapio: [
                { id: "chocolate-quente", nome: "☕ Chocolate Quente Bahiano", descricao: "Chocolate quente cremoso feito com cacau 70%, leite de coco e canela.", preco: 16, recuperacao: { sede: 12, felicidade: 22, energia: 14 } },
                { id: "trufas-cacau", nome: "🍬 Trufas de Cacau (6 unid)", descricao: "Seleção de trufas artesanais: 70% cacau, com laranja, com pimenta e com castanha.", preco: 28, recuperacao: { fome: 20, felicidade: 28, energia: 8 } },
                { id: "brownie-cacau", nome: "🍫 Brownie de Cacau", descricao: "Brownie úmido e denso, feito com cacau 70% e gotas de chocolate meio amargo.", preco: 14, recuperacao: { fome: 18, felicidade: 20, energia: 6 } },
                { id: "mousse-chocolate", nome: "🥄 Mousse de Chocolate Bahia", descricao: "Mousse aerado de chocolate com cacau 60%, raspas de chocolate e crocante de castanha.", preco: 18, recuperacao: { fome: 15, felicidade: 24, energia: 6 } },
                { id: "cacau-gelado", nome: "🥤 Cacau Gelado", descricao: "Bebida refrescante de cacau com leite vegetal e melado.", preco: 15, recuperacao: { sede: 18, felicidade: 18, energia: 10 } }
            ]
        },

        // ========== BARRA ==========
        "barra-moqueca": {
            id: "barra-moqueca",
            nome: "🍲 Moqueca da Barra",
            endereco: "Av. Oceânica, 500 - Barra, Salvador",
            horario: "11h às 23h",
            telefone: "(71) 3444-1111",
            descricao: "Especialista em moquecas e frutos do mar com vista para o Farol da Barra. Tradição há mais de 30 anos. Ingredientes frescos do mercado.",
            tipo: ["baiana", "frutos-do-mar", "praia", "tradicional", "familiar", "turístico"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 5420,
            cardapio: [
                { id: "moqueca-camarao", nome: "🍤 Moqueca de Camarão", descricao: "Moqueca cremosa com camarões grandes, leite de coco, azeite de dendê, pimentões e coentro. Serve 2 pessoas.", preco: 98, recuperacao: { fome: 85, felicidade: 35, energia: 22 } },
                { id: "moqueca-peixe", nome: "🐟 Moqueca de Peixe", descricao: "Peixe fresco (cação ou vermelho) cozido no dendê e leite de coco, com pirão e arroz.", preco: 78, recuperacao: { fome: 80, felicidade: 30, energia: 20 } },
                { id: "moqueca-mista", nome: "🦐 Moqueca Mista", descricao: "Peixe, camarão, lula e polvo na moqueca especial da casa. Serve 2-3 pessoas.", preco: 125, recuperacao: { fome: 95, felicidade: 40, energia: 25 } },
                { id: "casquinha-siri", nome: "🦀 Casquinha de Siri", descricao: "Carne de siri refogada com temperos, creme de leite e farofa, gratinada.", preco: 28, recuperacao: { fome: 30, felicidade: 18, energia: 8 } },
                { id: "caipirinha-bar", nome: "🍹 Caipirinha de Frutas", descricao: "Caipirinha tradicional com cachaça, limão, açúcar e gelo. Sabores: limão, maracujá ou morango.", preco: 22, recuperacao: { sede: 15, felicidade: 22, energia: -6 } }
            ]
        },
        "barra-quiosque": {
            id: "barra-quiosque",
            nome: "🏖️ Quiosque Farol da Barra",
            endereco: "Orla da Barra - Posto 1, Salvador",
            horario: "08h às 02h",
            telefone: "(71) 98888-1122",
            descricao: "Quiosque famoso na praia da Barra. Água de coco gelada, petiscos, frutos do mar e clima descontraído. Point dos surfistas e turistas.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "happy-hour"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 6200,
            cardapio: [
                { id: "agua-coco", nome: "🥥 Água de Coco Gelada", descricao: "Água de coco natural servida gelada no próprio coco.", preco: 10, recuperacao: { sede: 35, felicidade: 10, energia: 6 } },
                { id: "camarao-crocante", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados, fritos e servidos com molho de pimenta e limão.", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "isca-peixe", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas, fritas e servidas com molho tártaro caseiro.", preco: 35, recuperacao: { fome: 40, felicidade: 15, energia: 8 } },
                { id: "pastel-queijo", nome: "🥟 Pastel de Queijo", descricao: "Pastel crocante recheado com queijo coalho derretido.", preco: 12, recuperacao: { fome: 18, felicidade: 8, energia: 3 } },
                { id: "suco-abacaxi", nome: "🥤 Suco de Abacaxi com Hortelã", descricao: "Suco natural de abacaxi com hortelã e gelo.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: 6 } }
            ]
        },
        "barra-italiana": {
            id: "barra-italiana",
            nome: "🍝 Bella Barra Ristorante",
            endereco: "Rua Barão de Itapuã, 100 - Barra, Salvador",
            horario: "12h às 23h (fecha terça)",
            telefone: "(71) 3555-4444",
            descricao: "Cantina italiana tradicional com massas frescas, risotos e vinhos importados. Ambiente romântico e sofisticado. Chef italiano formado em Roma.",
            tipo: ["italiana", "massas", "vinhos", "premium", "romântico"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 1870,
            cardapio: [
                { id: "carbonara-bar", nome: "🍝 Fettuccine Carbonara", descricao: "Massa fresca com molho cremoso de ovos, queijo pecorino, pancetta crocante e pimenta preta.", preco: 68, recuperacao: { fome: 60, felicidade: 24, energia: 14 } },
                { id: "risotto-fungos", nome: "🍚 Risotto de Fungos", descricao: "Risoto cremoso de arroz arbóreo com cogumelos porcini, trufa negra e queijo parmesão.", preco: 72, recuperacao: { fome: 65, felicidade: 26, energia: 15 } },
                { id: "ossobuco-bar", nome: "🍖 Ossobuco alla Milanese", descricao: "Ossobuco cozido lentamente com vinho tinto. Acompanha risoto de açafrão.", preco: 98, recuperacao: { fome: 85, felicidade: 32, energia: 22 } },
                { id: "tiramisu-bar", nome: "🍰 Tiramisu Clássico", descricao: "Sobremesa italiana com camadas de biscoitos champagne, café, creme de mascarpone e cacau em pó.", preco: 24, recuperacao: { fome: 15, felicidade: 24, energia: 6 } },
                { id: "vinho-tinto", nome: "🍷 Vinho Tinto Italiano", descricao: "Taça de vinho italiano importado (Chianti DOCG ou Barolo).", preco: 38, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        "barra-chinesa": {
            id: "barra-chinesa",
            nome: "🥢 China Barra",
            endereco: "Rua Marques de Caravelas, 200 - Barra, Salvador",
            horario: "18h às 00h",
            telefone: "(71) 3666-5555",
            descricao: "Autêntica culinária chinesa cantonesa. Pato à Pequim, dim sum, yakisoba e frango xadrez. Ambiente oriental e familiar.",
            tipo: ["chinesa", "asiatica", "massas", "premium", "familiar"],
            preco_medio: 70,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "pato-pequim-bar", nome: "🦆 Pato à Pequim", descricao: "Pato assado com pele crocante, servido com panquecas finas, molho hoisin, cebolinha e pepino.", preco: 95, recuperacao: { fome: 85, felicidade: 34, energia: 20 } },
                { id: "dim-sum-bar", nome: "🥟 Dim Sum Variados (8 unid)", descricao: "Seleção de bolinhos cozidos no vapor: har gow (camarão), siu mai (porco), bao recheado.", preco: 42, recuperacao: { fome: 45, felicidade: 20, energia: 10 } },
                { id: "yakisoba-bar", nome: "🍜 Yakisoba Especial", descricao: "Macarrão oriental salteado com frango, carne bovina, camarão e legumes.", preco: 48, recuperacao: { fome: 60, felicidade: 18, energia: 14 } },
                { id: "frango-xadrez-bar", nome: "🍗 Frango Xadrez", descricao: "Frango salteado com castanhas de caju, pimentões, cebola e molho agridoce.", preco: 52, recuperacao: { fome: 55, felicidade: 18, energia: 12 } },
                { id: "cha-verde", nome: "🍵 Chá Verde", descricao: "Chá verde japonês (matcha ou genmaicha).", preco: 12, recuperacao: { sede: 12, energia: 8, felicidade: 10 } }
            ]
        },

        // ========== RIO VERMELHO ==========
        "rio-vermelho-boteco": {
            id: "rio-vermelho-boteco",
            nome: "🍺 Boteco do Rio Vermelho",
            endereco: "Rua João Gomes, 100 - Rio Vermelho, Salvador",
            horario: "11h às 04h",
            telefone: "(71) 3777-6666",
            descricao: "Boteco tradicional do Rio Vermelho, bairro boêmio de Salvador. Petiscos famosos, música ao vivo e ambiente descolado. Point dos artistas.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "boêmio", "tradicional"],
            preco_medio: 50,
            estrelas: 4.8,
            avaliacoes: 7680,
            cardapio: [
                { id: "camarao-moranga", nome: "🍤 Camarão na Moranga", descricao: "Abóbora moranga recheada com camarões ao molho de catupiry e cream cheese, gratinada.", preco: 68, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "casquinha-caranguejo", nome: "🦀 Casquinha de Caranguejo", descricao: "Caranguejo desfiado refogado com temperos, creme de leite e farofa de pão.", preco: 32, recuperacao: { fome: 35, felicidade: 18, energia: 8 } },
                { id: "bolinho-pescada", nome: "🍘 Bolinho de Pescada", descricao: "Bolinho de pescada fresca com salsinha e cebolinha. Porção com 8 unidades.", preco: 28, recuperacao: { fome: 32, felicidade: 15, energia: 8 } },
                { id: "feijoada-rv", nome: "🍲 Feijoada Completa", descricao: "Feijoada baiana com carnes nobres (carne seca, paio, costela, lingüiça), servida com arroz, couve, farofa, laranja e torresmo. Aos sábados.", preco: 58, recuperacao: { fome: 90, felicidade: 28, energia: 18 } },
                { id: "caipirinha-rv", nome: "🍹 Caipirinha Rio", descricao: "Caipirinha especial da casa com cachaça envelhecida e frutas vermelhas.", preco: 18, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        "rio-vermelho-japones": {
            id: "rio-vermelho-japones",
            nome: "🍣 Sushi Rio Vermelho",
            endereco: "Rua da Paciência, 300 - Rio Vermelho, Salvador",
            horario: "12h às 00h",
            telefone: "(71) 3888-7777",
            descricao: "Restaurante japonês sofisticado com peixes frescos importados. Rodízio premium e ambiente moderno. Vista para o mar.",
            tipo: ["japonesa", "sushi", "premium", "romântico", "rodizio"],
            preco_medio: 110,
            estrelas: 4.9,
            avaliacoes: 2540,
            cardapio: [
                { id: "rodizio-rio", nome: "🍣 Rodízio Premium Rio", descricao: "Rodízio completo com 30 peças variadas: sashimis (salmão, atum, peixe branco), uramakis especiais, hot rolls, temakis e peças do chef.", preco: 99, recuperacao: { fome: 90, felicidade: 38, energia: 24 } },
                { id: "combo-especial", nome: "🍱 Combo Especial", descricao: "20 peças variadas (salmão, atum, camarão, kani) + 5 sashimis + missô shiro.", preco: 78, recuperacao: { fome: 70, felicidade: 30, energia: 18 } },
                { id: "temaki-samao", nome: "🍙 Temaki de Salmão", descricao: "Temaki grande com salmão fresco, cream cheese, cebolinha e gergelim.", preco: 32, recuperacao: { fome: 35, felicidade: 16, energia: 8 } },
                { id: "hot-rolls-rio", nome: "🌯 Hot Rolls Especiais (8 unid)", descricao: "Hot rolls empanados e fritos, recheados com salmão, cream cheese e cebolinha.", preco: 36, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "sake-japones", nome: "🍶 Saquê Japonês", descricao: "Saquê tradicional japonês, servido quente ou gelado.", preco: 28, recuperacao: { sede: 10, felicidade: 20, energia: -8 } }
            ]
        },
        "rio-vermelho-brasileira": {
            id: "rio-vermelho-brasileira",
            nome: "🇧🇷 Brasil Bahia",
            endereco: "Largo de Santana, 50 - Rio Vermelho, Salvador",
            horario: "11h às 23h",
            telefone: "(71) 3999-8888",
            descricao: "Cozinha brasileira contemporânea com ingredientes da Bahia. Pratos autorais e releituras da culinária regional. Ambiente descolado e premiado.",
            tipo: ["brasileira", "contemporanea", "regional", "premium", "romântico"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 1430,
            cardapio: [
                { id: "bobo-camarao-brasil", nome: "🍤 Bobó de Camarão", descricao: "Bobó cremoso de camarão com azeite de dendê, leite de coco, aipim e temperos baianos.", preco: 72, recuperacao: { fome: 70, felicidade: 26, energia: 16 } },
                { id: "carne-sol-brasil", nome: "🥩 Carne de Sol com Pururuca", descricao: "Carne de sol suculenta com mandioca cozida, manteiga de garrafa e pururuca crocante.", preco: 65, recuperacao: { fome: 75, felicidade: 24, energia: 16 } },
                { id: "moqueca-brasil", nome: "🍲 Moqueca Baiana Contemporânea", descricao: "Moqueca de peixe e camarão com toques contemporâneos (gengibre, capim santo).", preco: 85, recuperacao: { fome: 80, felicidade: 30, energia: 18 } },
                { id: "acompanhamentos", nome: "🥗 Acompanhamentos", descricao: "Arroz, pirão, farofa, vinagrete, mandioca frita, legumes salteados.", preco: 18, recuperacao: { fome: 25, felicidade: 10, energia: 6 } },
                { id: "caipiroska-brasil", nome: "🍸 Caipiroska de Morango", descricao: "Caipiroska com vodka, morango fresco, limão, açúcar e gelo.", preco: 24, recuperacao: { sede: 12, felicidade: 20, energia: -6 } }
            ]
        },
        "rio-vermelho-francesa": {
            id: "rio-vermelho-francesa",
            nome: "🇫🇷 Le Bistrot Bahia",
            endereco: "Rua Almirante Barroso, 80 - Rio Vermelho, Salvador",
            horario: "19h às 01h (fecha domingo)",
            telefone: "(71) 4000-9999",
            descricao: "Bistrô francês autêntico com cozinha clássica e contemporânea. Chef francês radicado na Bahia. Ambiente intimista e romântico.",
            tipo: ["francesa", "premium", "romântico", "vinhos", "gastronomico"],
            preco_medio: 130,
            estrelas: 4.9,
            avaliacoes: 890,
            cardapio: [
                { id: "escargots-fr", nome: "🐌 Escargots à la Bourguignonne", descricao: "Caracóis servidos na concha com manteiga de alho, salsinha e conhaque.", preco: 45, recuperacao: { fome: 25, felicidade: 24, energia: 8 } },
                { id: "boeuf-fr", nome: "🍲 Boeuf Bourguignon", descricao: "Carne cozida lentamente em vinho tinto com cogumelos, cebolas pequenas e bacon.", preco: 95, recuperacao: { fome: 85, felicidade: 32, energia: 22 } },
                { id: "magret-fr", nome: "🦆 Magret de Canard", descricao: "Peito de pato grelhado com molho de laranja e mel, purê de batata doce.", preco: 108, recuperacao: { fome: 80, felicidade: 34, energia: 22 } },
                { id: "creme-brulee-fr", nome: "🍮 Crème Brûlée", descricao: "Clássica sobremesa francesa com creme de baunilha e crosta de açúcar queimado.", preco: 22, recuperacao: { fome: 12, felicidade: 22, energia: 6 } },
                { id: "vinho-frances", nome: "🍷 Vinho Francês", descricao: "Taça de vinho francês importado (Bordeaux ou Borgonha).", preco: 42, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },

        // ========== ITAPUÃ ==========
        "itapua-petiscos": {
            id: "itapua-petiscos",
            nome: "🏝️ Petiscos de Itapuã",
            endereco: "Praça de Itapuã, 15 - Itapuã, Salvador",
            horario: "10h às 02h",
            telefone: "(71) 4111-1122",
            descricao: "Tradicional barraca na praia de Itapuã. Petiscos típicos e cerveja gelada. Famoso acarajé e abará. Frequentado por moradores e turistas.",
            tipo: ["praia", "petiscos", "baiana", "comida-de-rua", "tradicional", "turístico"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 3980,
            cardapio: [
                { id: "acamuje", nome: "🫓 Acarajé de Itapuã", descricao: "Acarajé tradicional recheado com vatapá, camarão, caruru e pimenta.", preco: 20, recuperacao: { fome: 45, felicidade: 28, energia: 12 } },
                { id: "abara-itapua", nome: "🍞 Abará", descricao: "Abará cozido recheado com vatapá e camarão seco.", preco: 16, recuperacao: { fome: 35, felicidade: 22, energia: 10 } },
                { id: "camarao-praia", nome: "🍤 Camarão na Praia", descricao: "Porção de camarão cozido com limão e sal, servido com farofa e pimenta.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "queijo-coalho", nome: "🧀 Queijo Coalho Grelhado", descricao: "Queijo coalho grelhado na brasa com orégano e melado.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 4 } },
                { id: "agua-coco-itapua", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 30, felicidade: 8, energia: 5 } }
            ]
        },
        "itapua-nordestina": {
            id: "itapua-nordestina",
            nome: "🌵 Sertão Nordestino",
            endereco: "Rua do Alto, 200 - Itapuã, Salvador",
            horario: "11h às 22h",
            telefone: "(71) 4222-3344",
            descricao: "Culinária nordestina autêntica com forró ao vivo aos fins de semana. Pratos como baião de dois, carne de sol e panelada.",
            tipo: ["nordestina", "regional", "forro", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "baiao-dois", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca desfiada, queijo coalho, nata e temperos nordestinos.", preco: 45, recuperacao: { fome: 70, felicidade: 22, energia: 14 } },
                { id: "carne-sol-nord", nome: "🥩 Carne de Sol na Manteiga", descricao: "Carne de sol suculenta com mandioca cozida, manteiga de garrafa e farofa.", preco: 52, recuperacao: { fome: 75, felicidade: 24, energia: 16 } },
                { id: "panelada", nome: "🍲 Panelada Nordestina", descricao: "Dobradinha com costela, bacon, calabresa, grão-de-bico e legumes.", preco: 48, recuperacao: { fome: 80, felicidade: 22, energia: 14 } },
                { id: "tapioca-coco-nord", nome: "🥞 Tapioca de Coco", descricao: "Tapioca recheada com coco ralado, leite condensado e queijo coalho.", preco: 18, recuperacao: { fome: 25, felicidade: 16, energia: 6 } },
                { id: "suco-caju", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju com hortelã.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        "itapua-arabe": {
            id: "itapua-arabe",
            nome: "🧆 Beirute Bahia",
            endereco: "Rua Doutor Paulo, 300 - Itapuã, Salvador",
            horario: "12h às 23h",
            telefone: "(71) 4333-4455",
            descricao: "Culinária árabe autêntica com esfihas, quibes, charme e pratos especiais. Ambiente familiar e atendimento acolhedor.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "tradicional"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "esfiha-aberta", nome: "🥙 Esfiha Aberta de Carne (4 unid)", descricao: "Esfiha grande com carne temperada, limão, hortelã e cebola.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 7 } },
                { id: "kibe-cru", nome: "🍖 Quibe Cru", descricao: "Quibe de carne crua com trigo, hortelã, cebola e azeite.", preco: 24, recuperacao: { fome: 30, felicidade: 12, energia: 6 } },
                { id: "hommus", nome: "🫔 Hommus com Pão Sírio", descricao: "Pasta de grão-de-bico com tahine, azeite, limão e salsinha. Acompanha pão sírio.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "charque-arabe", nome: "🥩 Charque na Manteiga", descricao: "Carne de charque desfiada com manteiga de garrafa e cheiro-verde.", preco: 48, recuperacao: { fome: 60, felicidade: 18, energia: 12 } },
                { id: "suco-hortela", nome: "🥤 Suco de Limão com Hortelã", descricao: "Suco refrescante de limão com hortelã.", preco: 9, recuperacao: { sede: 22, felicidade: 10, energia: 5 } }
            ]
        },
        "itapua-cafe": {
            id: "itapua-cafe",
            nome: "☕ Café de Itapuã",
            endereco: "Rua da Praia, 25 - Itapuã, Salvador",
            horario: "07h às 20h",
            telefone: "(71) 4444-5566",
            descricao: "Cafeteria charmosa na praia de Itapuã. Cafés especiais, brunch, doces e vista para o mar. Ambiente instagramável.",
            tipo: ["cafeteria", "brunch", "doces", "praia", "artesanal"],
            preco_medio: 35,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                { id: "cafe-especial-itapua", nome: "☕ Café Especial Bahia", descricao: "Café 100% arábica, torra média, origem do sul da Bahia. Métodos: espresso, V60 ou prensa francesa.", preco: 12, recuperacao: { sede: 10, energia: 15, felicidade: 10 } },
                { id: "brunch-itapua", nome: "🍳 Brunch da Praia", descricao: "Pão artesanal, ovos mexidos, bacon, queijo minas, frutas da estação, granola e iogurte.", preco: 42, recuperacao: { fome: 60, energia: 22, felicidade: 20 } },
                { id: "tapioca-brunch", nome: "🥞 Tapioca Brunch", descricao: "Tapioca recheada com queijo coalho, tomate, orégano e azeitonas.", preco: 18, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "bolo-cenoura", nome: "🍰 Bolo de Cenoura com Cobertura", descricao: "Bolo fofinho de cenoura com cobertura de chocolate.", preco: 14, recuperacao: { fome: 18, felicidade: 16, energia: 5 } },
                { id: "suco-verde", nome: "🥤 Suco Verde Detox", descricao: "Couve, limão, gengibre, hortelã e maçã verde.", preco: 14, recuperacao: { sede: 18, energia: 12, felicidade: 8 } }
            ]
        },

        // ========== LIBERDADE ==========
        "liberdade-afro": {
            id: "liberdade-afro",
            nome: "🌍 Casa da Liberdade Afro",
            endereco: "Rua Direta da Liberdade, 50 - Liberdade, Salvador",
            horario: "10h às 22h",
            telefone: "(71) 4555-6677",
            descricao: "Restaurante de culinária afro-baiana, resgatando receitas dos terreiros de candomblé. Ingredientes como dendê, quiabo, camarão seco e ervas sagradas.",
            tipo: ["africana", "baiana", "tradicional", "familiar", "cultural", "vegetariano"],
            preco_medio: 45,
            estrelas: 4.8,
            avaliacoes: 2150,
            cardapio: [
                { id: "caruru-liberdade", nome: "🥘 Caruru Completo", descricao: "Quiabo refogado no azeite de dendê com camarão seco, amendoim, castanha e temperos sagrados. Acompanha arroz de hauçá.", preco: 42, recuperacao: { fome: 55, felicidade: 24, energia: 14 } },
                { id: "efo-liberdade", nome: "🥬 Efo", descricao: "Couve refogada no azeite de dendê com camarão seco, pimenta e temperos africanos.", preco: 28, recuperacao: { fome: 30, felicidade: 18, energia: 8 } },
                { id: "vatapa-liberdade", nome: "🥣 Vatapá Afro", descricao: "Vatapá tradicional de pão, leite de coco, amendoim, castanha, camarão seco e dendê.", preco: 25, recuperacao: { fome: 35, felicidade: 20, energia: 10 } },
                { id: "moqueca-afro", nome: "🍲 Moqueca Afro-Baiana", descricao: "Moqueca de peixe e camarão com temperos dos terreiros, dendê, leite de coco e ervas sagradas.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 16 } },
                { id: "suco-hibisco", nome: "🥤 Suco de Hibisco", descricao: "Suco refrescante de hibisco com gengibre e limão.", preco: 8, recuperacao: { sede: 22, felicidade: 14, energia: 6 } }
            ]
        },
        "liberdade-acaraje": {
            id: "liberdade-acaraje",
            nome: "🫓 Baiana da Liberdade",
            endereco: "Largo da Liberdade, 10 - Liberdade, Salvador",
            horario: "14h às 22h",
            telefone: "(71) 4666-7788",
            descricao: "Barraca de acarajé mais famosa da Liberdade. Receita de família passada por gerações. Acarajé crocante e recheio generoso.",
            tipo: ["baiana", "comida-de-rua", "tradicional", "afro-brasileira", "vegetariano"],
            preco_medio: 20,
            estrelas: 4.9,
            avaliacoes: 5420,
            cardapio: [
                { id: "acaraje-liberdade", nome: "🫓 Acarajé da Liberdade", descricao: "Acarajé tradicional recheado com vatapá, camarão seco, caruru, tomate e pimenta.", preco: 18, recuperacao: { fome: 45, felicidade: 32, energia: 12 } },
                { id: "abara-liberdade", nome: "🍞 Abará da Liberdade", descricao: "Abará cozido recheado com vatapá, camarão seco e caruru.", preco: 15, recuperacao: { fome: 40, felicidade: 26, energia: 10 } },
                { id: "vatapa-tigela", nome: "🥣 Vatapá na Tigela", descricao: "Vatapá cremoso servido com arroz e camarão seco.", preco: 22, recuperacao: { fome: 48, felicidade: 22, energia: 10 } },
                { id: "caruru-quiabo", nome: "🥘 Caruru de Quiabo", descricao: "Caruru refogado no dendê com camarão seco e amendoim.", preco: 18, recuperacao: { fome: 30, felicidade: 18, energia: 8 } },
                { id: "suco-acerola", nome: "🥤 Suco de Acerola", descricao: "Suco natural de acerola com gelo.", preco: 7, recuperacao: { sede: 20, felicidade: 10, energia: 8 } }
            ]
        },

        // ========== ONDINA ==========
        "ondina-premium": {
            id: "ondina-premium",
            nome: "🍽️ Ondina Gourmet",
            endereco: "Av. Oceânica, 2000 - Ondina, Salvador",
            horario: "12h às 00h",
            telefone: "(71) 4777-8899",
            descricao: "Restaurante premium com vista para o mar de Ondina. Cozinha contemporânea baiana com influências internacionais. Chef premiado.",
            tipo: ["brasileira", "premium", "romântico", "vista", "gastronomico", "vinhos"],
            preco_medio: 140,
            estrelas: 4.9,
            avaliacoes: 1870,
            cardapio: [
                { id: "lagosta-ondina", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca grelhada na manteiga com alho, servida com purê de mandioquinha e legumes salteados.", preco: 145, recuperacao: { fome: 85, felicidade: 38, energia: 22 } },
                { id: "file-mignon-ondina", nome: "🥩 Filé Mignon ao Vinho", descricao: "Filé mignon ao molho de vinho tinto com redução de cogumelos porcini. Acompanha risoto de parmesão.", preco: 98, recuperacao: { fome: 75, felicidade: 32, energia: 20 } },
                { id: "salmao-ondina", nome: "🐟 Salmão ao Molho de Maracujá", descricao: "Salmão grelhado com molho de maracujá e gengibre. Acompanha purê de batata doce.", preco: 85, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "risotto-camarao", nome: "🍚 Risotto de Camarão", descricao: "Risoto cremoso com camarões grandes, açafrão e raspas de limão siciliano.", preco: 72, recuperacao: { fome: 65, felicidade: 28, energia: 16 } },
                { id: "espumante", nome: "🥂 Espumante Brut", descricao: "Taça de espumante brasileiro premiado (Miolo ou Casa Valduga).", preco: 35, recuperacao: { sede: 10, felicidade: 22, energia: -6 } }
            ]
        },
        "ondina-espanhola": {
            id: "ondina-espanhola",
            nome: "🇪🇸 Tapas y Vino Ondina",
            endereco: "Rua da Ondina, 300 - Ondina, Salvador",
            horario: "18h às 02h",
            telefone: "(71) 4888-9900",
            descricao: "Autêntica cozinha espanhola com tapas, paellas e vinhos ibéricos. Ambiente descontraído e happy hour com música ao vivo.",
            tipo: ["espanhola", "tapas", "happy-hour", "vinhos", "premium", "musica-ao-vivo"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "paella-valenciana", nome: "🥘 Paella Valenciana", descricao: "Arroz com frango, coelho, frutos do mar, açafrão, pimentões e ervilhas. Serve 2-3 pessoas.", preco: 98, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "tapas-ibericas", nome: "🍢 Seleção de Tapas Ibéricas", descricao: "Presunto ibérico, queijo manchego, azeitonas, pão com tomate, almôndegas e pimientos.", preco: 58, recuperacao: { fome: 45, felicidade: 24, energia: 12 } },
                { id: "gambas-al-ajillo", nome: "🍤 Gambas al Ajillo", descricao: "Camarões salteados no azeite com alho, pimenta calabresa e salsa.", preco: 48, recuperacao: { fome: 45, felicidade: 20, energia: 12 } },
                { id: "tortilla-espanhola", nome: "🥚 Tortilla Espanhola", descricao: "Tortilla de batata e cebola, servida com alioli.", preco: 28, recuperacao: { fome: 35, felicidade: 16, energia: 8 } },
                { id: "sangria-ondina", nome: "🍷 Sangria Espanhola", descricao: "Sangria de vinho tinto com frutas (laranja, maçã, limão) e especiarias.", preco: 28, recuperacao: { sede: 15, felicidade: 22, energia: -6 } }
            ]
        },
        "ondina-japonesa": {
            id: "ondina-japonesa",
            nome: "🍣 Sushi Ondina",
            endereco: "Rua Morro do Escravo, 150 - Ondina, Salvador",
            horario: "12h às 23h",
            telefone: "(71) 4999-0011",
            descricao: "Alta gastronomia japonesa com vista para o mar. Peixes importados e ingredientes frescos. Ambiente zen e sofisticado.",
            tipo: ["japonesa", "sushi", "premium", "romântico", "vista"],
            preco_medio: 120,
            estrelas: 4.8,
            avaliacoes: 1340,
            cardapio: [
                { id: "rodizio-ondina", nome: "🍣 Rodízio Premium Ondina", descricao: "Rodízio completo com 35 peças: sashimis nobres, uramakis especiais, hot rolls, temakis e peças do chef.", preco: 120, recuperacao: { fome: 90, felicidade: 40, energia: 24 } },
                { id: "omakase", nome: "🎌 Omakase (Chef's Selection)", descricao: "Seleção especial de 15 peças escolhidas pelo chef, com os melhores cortes do dia.", preco: 95, recuperacao: { fome: 70, felicidade: 38, energia: 20 } },
                { id: "sashimi-nobre", nome: "🐟 Sashimi Nobre (10 peças)", descricao: "Seleção de sashimis nobres: salmão selvagem, atum bluefin, hamachi e vieira.", preco: 75, recuperacao: { fome: 60, felicidade: 32, energia: 18 } },
                { id: "temaki-especial", nome: "🍙 Temaki Especial", descricao: "Temaki grande com salmão, cream cheese, manga, cebolinha e gergelim.", preco: 34, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "sake-premium", nome: "🍶 Saquê Premium", descricao: "Saquê premium gelado, importado do Japão.", preco: 38, recuperacao: { sede: 8, felicidade: 22, energia: -8 } }
            ]
        },

        // ========== CAMINHO DAS ÁRVORES (SHOPPING) ==========
        "caminho-arvores-food": {
            id: "caminho-arvores-food",
            nome: "🛍️ Salvador Shopping - Food Court",
            endereco: "Av. Tancredo Neves, 500 - Caminho das Árvores, Salvador",
            horario: "10h às 22h",
            telefone: "(71) 5000-1122",
            descricao: "Praça de alimentação do Salvador Shopping com diversas opções: fast food, comida baiana, japonesa e opções vegetarianas.",
            tipo: ["fast-food", "shopping", "variado", "familiar", "executivos"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 6500,
            cardapio: [
                { id: "mc-salvador", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita e refrigerante.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-salvador", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-salvador", nome: "🥢 China in Box", descricao: "Yakisoba, frango xadrez e rolinho primavera.", preco: 35, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "baiana-shopping", nome: "🍲 Baiana Fast Food", descricao: "Acarajé, abará, moqueca individual e vatapá.", preco: 28, recuperacao: { fome: 45, felicidade: 20, energia: 10 } },
                { id: "suco-shopping", nome: "🥤 Suco Natural", descricao: "Suco natural de frutas da estação.", preco: 12, recuperacao: { sede: 22, energia: 8, felicidade: 6 } }
            ]
        },
        "caminho-arvores-brasileira": {
            id: "caminho-arvores-brasileira",
            nome: "🇧🇷 Brasil ao Prato",
            endereco: "Av. Tancredo Neves, 1000 - Caminho das Árvores, Salvador",
            horario: "11h às 22h",
            telefone: "(71) 5111-2233",
            descricao: "Buffet por quilo com opções da culinária brasileira. Self-service variado, ideal para almoço executivo. Pratos baianos, mineiros e nordestinos.",
            tipo: ["brasileira", "buffet", "executivos", "familiar", "regional"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 2560,
            cardapio: [
                { id: "buffet-kilo", nome: "🍽️ Buffet por Quilo", descricao: "Diversas opções: saladas, pratos quentes (peixe, frango, carne), massas, arroz, feijão, farofa, legumes.", preco: 42, recuperacao: { fome: 70, energia: 22, felicidade: 15 } },
                { id: "comida-baiana", nome: "🍲 Prato Baiano", descricao: "Arroz, feijão, vatapá, caruru, farofa, couve e carne de sol.", preco: 38, recuperacao: { fome: 65, felicidade: 24, energia: 14 } },
                { id: "frango-grelhado", nome: "🍗 Frango Grelhado", descricao: "Filé de frango grelhado com molho de laranja e alecrim.", preco: 28, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "peixe-grelhado", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado com legumes salteados.", preco: 32, recuperacao: { fome: 52, energia: 18, felicidade: 14 } },
                { id: "suco-manga", nome: "🥤 Suco de Manga", descricao: "Suco natural de manga com gelo.", preco: 8, recuperacao: { sede: 20, energia: 8, felicidade: 8 } }
            ]
        },

        // ========== SANTO ANTÔNIO (CAFE COLONIAL) ==========
        "santo-antonio-cafe": {
            id: "santo-antonio-cafe",
            nome: "☕ Café Colonial Santo Antônio",
            endereco: "Largo do Santo Antônio, 20 - Santo Antônio, Salvador",
            horario: "08h às 19h",
            telefone: "(71) 5222-3344",
            descricao: "Café colonial no bairro histórico de Santo Antônio. Cafés especiais, pães caseiros, bolos, tortas e doces artesanais. Vista para a Baía de Todos os Santos.",
            tipo: ["cafeteria", "colonial", "artesanal", "doces", "vista", "romântico"],
            preco_medio: 35,
            estrelas: 4.7,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-colonial-sa", nome: "☕ Café Colonial Completo", descricao: "Mesa com café especial, leite, pães artesanais, bolos, tortas, geleias, queijos e frios.", preco: 48, recuperacao: { fome: 65, energia: 22, felicidade: 24 } },
                { id: "cafe-especial-sa", nome: "☕ Café Especial", descricao: "Café 100% arábica da Chapada Diamantina. Métodos: espresso, coado ou prensa francesa.", preco: 10, recuperacao: { sede: 8, energia: 14, felicidade: 10 } },
                { id: "pao-queijo-sa", nome: "🧀 Pão de Queijo Mineiro", descricao: "Pão de queijo quentinho e crocante.", preco: 8, recuperacao: { fome: 14, felicidade: 10, energia: 4 } },
                { id: "bolo-fuba-sa", nome: "🍰 Bolo de Fubá", descricao: "Bolo de fubá cremoso com erva-doce.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-morango", nome: "🥤 Suco de Morango", descricao: "Suco natural de morango com leite condensido.", preco: 12, recuperacao: { sede: 18, felicidade: 14, energia: 6 } }
            ]
        }
    },
    // ==================== FEIRA DE SANTANA ====================
    "Feira de Santana": {
        // ========== CENTRO ==========
        "feira-boteco": {
            id: "feira-boteco",
            nome: "🍺 Boteco do Sertão",
            endereco: "Praça da Matriz, 50 - Centro, Feira de Santana",
            horario: "11h às 02h",
            telefone: "(75) 3333-1111",
            descricao: "Boteco tradicional no centro de Feira. Petiscos fartos, cerveja gelada e forró pé-de-serra aos fins de semana. Point dos feirenses.",
            tipo: ["boteco", "petiscos", "forro", "happy-hour", "tradicional"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 3240,
            cardapio: [
                { id: "porcao-calabresa-feira", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com pimentão e cebola roxa.", preco: 28, recuperacao: { fome: 38, felicidade: 14, energia: 8 } },
                { id: "torresmo-feira", nome: "🥓 Torresmo Crocante", descricao: "Torresmo pururuca com farofa e limão.", preco: 22, recuperacao: { fome: 30, felicidade: 12, energia: 6 } },
                { id: "feijao-amigo-feira", nome: "🍲 Feijão Amigo", descricao: "Caldo de feijão com bacon, calabresa e couve.", preco: 18, recuperacao: { fome: 28, felicidade: 10, energia: 6 } },
                { id: "coxinha-feira", nome: "🍗 Coxinha de Frango", descricao: "Coxinha tradicional com catupiry.", preco: 8, recuperacao: { fome: 14, felicidade: 6, energia: 3 } },
                { id: "chopp-feira", nome: "🍺 Chopp Gelado", descricao: "Chopp claro tirado na hora.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        "feira-churrascaria": {
            id: "feira-churrascaria",
            nome: "🥩 Churrascaria Feirense",
            endereco: "Av. Presidente Dutra, 500 - Centro, Feira de Santana",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(75) 3444-2222",
            descricao: "Churrascaria tradicional com rodízio de carnes nobres e buffet completo. Ambiente familiar e executivo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "rodizio-feira", nome: "🥩 Rodízio Completão", descricao: "Mais de 12 cortes: picanha, maminha, fraldinha, costela, cordeiro, coração.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 32 } },
                { id: "picanha-feira", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g grelhada na brasa com arroz, farofa e vinagrete.", preco: 55, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "buffet-feira", nome: "🍽️ Buffet Self-Service", descricao: "Saladas, sushi, massas, pratos quentes e sobremesas.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "costela-feira", nome: "🍖 Costela Assada", descricao: "Costela bovina assada lentamente por 6 horas.", preco: 52, recuperacao: { fome: 75, energia: 28, felicidade: 20 } },
                { id: "refri-feira", nome: "🥤 Refrigerante", descricao: "Lata de refrigerante gelado.", preco: 8, recuperacao: { sede: 18, felicidade: 6, energia: 2 } }
            ]
        },
        "feira-pastelaria": {
            id: "feira-pastelaria",
            nome: "🥟 Pastelaria Feirense",
            endereco: "Rua da Paz, 100 - Centro, Feira de Santana",
            horario: "09h às 21h",
            telefone: "(75) 3555-3333",
            descricao: "Pastelaria tradicional com mais de 20 sabores de pastéis, caldos e sucos naturais. Massa crocante e recheios generosos.",
            tipo: ["lanches", "fast-food", "tradicional", "familiar"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 2340,
            cardapio: [
                { id: "pastel-carne-feira", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante com carne moída temperada, ovo e azeitona.", preco: 10, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "pastel-queijo-feira", nome: "🥟 Pastel de Queijo", descricao: "Pastel com queijo mussarela derretido.", preco: 10, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "pastel-camarao-feira", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão e catupiry.", preco: 16, recuperacao: { fome: 25, felicidade: 12, energia: 5 } },
                { id: "caldo-mandioca", nome: "🥣 Caldo de Mandioca", descricao: "Caldo cremoso de mandioca com charque e coentro.", preco: 14, recuperacao: { fome: 22, felicidade: 10, energia: 6 } },
                { id: "suco-laranja-feira", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 4 } }
            ]
        },

        // ========== BAIRRO KALUNDU ==========
        "kalundu-japones": {
            id: "kalundu-japones",
            nome: "🍣 Sushi Kalundu",
            endereco: "Av. Maria Quitéria, 1000 - Kalundu, Feira de Santana",
            horario: "18h às 23h",
            telefone: "(75) 3666-4444",
            descricao: "Restaurante japonês no bairro nobre de Kalundu. Rodízio completo e ambiente sofisticado. Peixes frescos e atendimento diferenciado.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "familiar"],
            preco_medio: 75,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-kalundu", nome: "🍣 Rodízio Kalundu", descricao: "Rodízio com 25 peças + temaki + hot roll. Sashimis variados e peças especiais.", preco: 69, recuperacao: { fome: 80, energia: 24, felicidade: 28 } },
                { id: "combinado-kalundu", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, peixe branco, camarão.", preco: 52, recuperacao: { fome: 60, energia: 18, felicidade: 20 } },
                { id: "temaki-kalundu", nome: "🍙 Temaki de Salmão", descricao: "Temaki grande com salmão fresco, cream cheese e cebolinha.", preco: 26, recuperacao: { fome: 30, felicidade: 14, energia: 8 } },
                { id: "hot-roll-kalundu", nome: "🌯 Hot Roll Especial (8 unid)", descricao: "Hot rolls empanados recheados com salmão e catupiry.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-kalundu", nome: "🍶 Saquê", descricao: "Saquê tradicional servido quente ou gelado.", preco: 22, recuperacao: { sede: 10, felicidade: 16, energia: -6 } }
            ]
        },
        "kalundu-pizzaria": {
            id: "kalundu-pizzaria",
            nome: "🍕 Pizzaria Kalundu",
            endereco: "Rua São João, 200 - Kalundu, Feira de Santana",
            horario: "18h às 00h",
            telefone: "(75) 3777-5555",
            descricao: "Pizzaria tradicional com forno à lenha. Massa fina e ingredientes de qualidade. Ambiente familiar e delivery rápido.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-mussarela-kal", nome: "🍕 Pizza Mussarela", descricao: "Molho de tomate, mussarela, tomate, orégano.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "pizza-calabresa-kal", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola, azeitona.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "pizza-portuguesa-kal", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 12 } },
                { id: "pizza-frango-kal", nome: "🍕 Pizza Frango Catupiry", descricao: "Molho, mussarela, frango desfiado, catupiry.", preco: 54, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "refrigerante-kal", nome: "🥤 Refrigerante", descricao: "Lata de refrigerante 350ml.", preco: 8, recuperacao: { sede: 18, felicidade: 6, energia: 2 } }
            ]
        },
        "kalundu-nordestina": {
            id: "kalundu-nordestina",
            nome: "🌵 Sabor do Sertão",
            endereco: "Av. João Durval, 300 - Kalundu, Feira de Santana",
            horario: "11h às 22h",
            telefone: "(75) 3888-6666",
            descricao: "Culinária nordestina autêntica com destaque para o baião de dois, carne de sol e panelada. Ambiente rústico e familiar.",
            tipo: ["nordestina", "regional", "familiar", "tradicional"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                { id: "baiao-dois-kal", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho, nata e temperos nordestinos.", preco: 42, recuperacao: { fome: 68, felicidade: 20, energia: 12 } },
                { id: "carne-sol-kal", nome: "🥩 Carne de Sol", descricao: "Carne de sol suculenta com mandioca cozida, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 72, felicidade: 22, energia: 14 } },
                { id: "panelada-kal", nome: "🍲 Panelada Nordestina", descricao: "Dobradinha com costela, bacon, calabresa, grão-de-bico.", preco: 44, recuperacao: { fome: 75, felicidade: 18, energia: 12 } },
                { id: "tapioca-kal", nome: "🥞 Tapioca de Queijo", descricao: "Tapioca recheada com queijo coalho e manteiga de garrafa.", preco: 16, recuperacao: { fome: 24, felicidade: 12, energia: 6 } },
                { id: "suco-caju-kal", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju com gelo.", preco: 8, recuperacao: { sede: 20, felicidade: 10, energia: 5 } }
            ]
        },

        // ========== BAIRRO SIM ==========
        "sim-lanchonete": {
            id: "sim-lanchonete",
            nome: "🍔 Lanchonete SIM",
            endereco: "Av. Getúlio Vargas, 200 - SIM, Feira de Santana",
            horario: "08h às 22h",
            telefone: "(75) 3999-7777",
            descricao: "Lanchonete tradicional do bairro SIM. X-tudo, sucos e salgados. Frequentada por famílias e jovens.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-sim", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, batata palha.", preco: 24, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "x-salada-sim", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 16, recuperacao: { fome: 35, energia: 12, felicidade: 8 } },
                { id: "coxinha-sim", nome: "🍗 Coxinha", descricao: "Coxinha de frango tradicional.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "enroladinho-sim", nome: "🌭 Enroladinho de Salsicha", descricao: "Enroladinho assado com salsicha.", preco: 5, recuperacao: { fome: 10, felicidade: 5, energia: 2 } },
                { id: "suco-morango-sim", nome: "🥤 Suco de Morango", descricao: "Suco natural de morango.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 8 } }
            ]
        },
        "sim-brasileira": {
            id: "sim-brasileira",
            nome: "🇧🇷 Restaurante Popular SIM",
            endereco: "Rua do Comércio, 500 - SIM, Feira de Santana",
            horario: "11h às 15h",
            telefone: "(75) 4000-8888",
            descricao: "Restaurante popular com comida caseira e preço acessível. Frequentado por trabalhadores e estudantes.",
            tipo: ["brasileira", "popular", "buffet", "familiar"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 1450,
            cardapio: [
                { id: "prato-feito-sim", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína (frango/carne/peixe), farofa, salada.", preco: 18, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "bife-acebolado", nome: "🥩 Bife Acebolado", descricao: "Bife grelhado com cebola caramelizada, acompanha arroz e fritas.", preco: 22, recuperacao: { fome: 55, energia: 16, felicidade: 10 } },
                { id: "frango-assado", nome: "🍗 Frango Assado", descricao: "Sobrecoxa de frango assada com batatas.", preco: 18, recuperacao: { fome: 50, energia: 15, felicidade: 10 } },
                { id: "peixe-frito", nome: "🐟 Peixe Frito", descricao: "Filé de peixe frito com molho tártaro.", preco: 20, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "suco-sim", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta do dia.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 6 } }
            ]
        },

        // ========== SHOPPING FEIRA ==========
        "shopping-feira": {
            id: "shopping-feira",
            nome: "🛍️ Shopping Feira - Food Court",
            endereco: "Av. Presidente Dutra, 500 - Muchila, Feira de Santana",
            horario: "10h às 22h",
            telefone: "(75) 4111-9999",
            descricao: "Praça de alimentação do Shopping Feira com opções de fast food, comida baiana e self-service.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 3420,
            cardapio: [
                { id: "mc-feira", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita, refrigerante.", preco: 28, recuperacao: { fome: 40, energia: 12, felicidade: 8 } },
                { id: "habibs-feira", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 22, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "chines-feira", nome: "🥢 China Fast", descricao: "Yakisoba, frango xadrez, rolinho primavera.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "baiana-feira", nome: "🍲 Baiana Express", descricao: "Acarajé, abará, vatapá, moqueca individual.", preco: 25, recuperacao: { fome: 42, energia: 12, felicidade: 12 } },
                { id: "suco-feira", nome: "🥤 Suco Natural", descricao: "Suco de fruta natural com gelo.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },

        // ========== BAIRRO SANTA MÔNICA ==========
        "monica-brasileira": {
            id: "monica-brasileira",
            nome: "🇧🇷 Sabor Caseiro",
            endereco: "Rua Santa Mônica, 300 - Santa Mônica, Feira de Santana",
            horario: "11h às 21h",
            telefone: "(75) 4222-0000",
            descricao: "Comida caseira como da avó. Pratos feitos no dia com ingredientes frescos. Ambiente simples e acolhedor.",
            tipo: ["brasileira", "caseira", "familiar", "tradicional"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-caseiro", nome: "🍽️ Prato Caseiro", descricao: "Arroz, feijão tropeiro, frango caipira, farofa, salada de alface e tomate.", preco: 28, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "galinhada", nome: "🍚 Galinhada", descricao: "Arroz com frango caipira, legumes e temperos caseiros.", preco: 26, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "macarronada", nome: "🍝 Macarronada", descricao: "Macarrão com molho bolonhesa caseiro.", preco: 22, recuperacao: { fome: 50, energia: 15, felicidade: 10 } },
                { id: "sopa-monica", nome: "🥣 Sopa do Dia", descricao: "Sopa de legumes com carne (varia conforme o dia).", preco: 16, recuperacao: { fome: 35, energia: 12, felicidade: 8 } },
                { id: "pudim-monica", nome: "🍮 Pudim de Leite", descricao: "Pudim de leite condensado caseiro.", preco: 8, recuperacao: { fome: 12, felicidade: 14, energia: 4 } }
            ]
        },
        "monica-pizzaria": {
            id: "monica-pizzaria",
            nome: "🍕 Pizzaria Santa Mônica",
            endereco: "Av. Santa Mônica, 100 - Santa Mônica, Feira de Santana",
            horario: "18h às 23h",
            telefone: "(75) 4333-1111",
            descricao: "Pizzaria familiar do bairro. Massa fina e recheios generosos. Delivery rápido.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-mon", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 42, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "pizza-calabresa-mon", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 45, recuperacao: { fome: 55, energia: 14, felicidade: 10 } },
                { id: "pizza-frango-mon", nome: "🍕 Pizza Frango Catupiry", descricao: "Molho, mussarela, frango, catupiry.", preco: 48, recuperacao: { fome: 56, energia: 14, felicidade: 10 } },
                { id: "calzone-mon", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "guarana-mon", nome: "🥤 Guaraná", descricao: "Refrigerante guaraná.", preco: 6, recuperacao: { sede: 15, felicidade: 6, energia: 2 } }
            ]
        }
    },

    // ==================== ILHÉUS ====================
    "Ilhéus": {
        // ========== CENTRO ==========
        "ilheus-chocolate": {
            id: "ilheus-chocolate",
            nome: "🍫 Chocolate Ilhéus",
            endereco: "Rua Jorge Amado, 100 - Centro, Ilhéus",
            horario: "09h às 21h",
            telefone: "(73) 3333-1111",
            descricao: "Chocolateria artesanais com cacau do sul da Bahia. Trufas, bombons, barra e bebidas feitas com cacau orgânico. Homenagem ao escritor Jorge Amado.",
            tipo: ["doces", "cacau", "artesanal", "cafeteria", "turístico"],
            preco_medio: 35,
            estrelas: 4.8,
            avaliacoes: 2450,
            cardapio: [
                { id: "chocolate-quente-ilheus", nome: "☕ Chocolate Quente Cacau 70%", descricao: "Chocolate quente cremoso feito com cacau 70% e leite de coco.", preco: 14, recuperacao: { sede: 10, felicidade: 20, energia: 12 } },
                { id: "trufas-cacau-ilheus", nome: "🍬 Trufas de Cacau (6 unid)", descricao: "Seleção de trufas: 70% cacau, com laranja, com pimenta, com castanha.", preco: 24, recuperacao: { fome: 18, felicidade: 24, energia: 8 } },
                { id: "barra-cacau", nome: "🍫 Barra de Cacau 80%", descricao: "Barra de chocolate amargo com 80% cacau, origem única.", preco: 18, recuperacao: { fome: 15, felicidade: 18, energia: 6 } },
                { id: "brownie-ilheus", nome: "🍫 Brownie Cacau", descricao: "Brownie úmido de cacau com gotas de chocolate meio amargo.", preco: 12, recuperacao: { fome: 16, felicidade: 16, energia: 5 } },
                { id: "cacau-gelado-ilheus", nome: "🥤 Cacau Gelado", descricao: "Bebida refrescante de cacau com leite de coco e melado.", preco: 12, recuperacao: { sede: 15, felicidade: 14, energia: 8 } }
            ]
        },
        "ilheus-moqueca": {
            id: "ilheus-moqueca",
            nome: "🍲 Moqueca Ilheense",
            endereco: "Av. Soares Lopes, 200 - Centro, Ilhéus",
            horario: "11h às 23h",
            telefone: "(73) 3444-2222",
            descricao: "Especialista em moqueca capixaba e baiana. Frutos do mar frescos com vista para o Rio Cachoeira. Tradição desde 1965.",
            tipo: ["baiana", "frutos-do-mar", "tradicional", "familiar", "turístico"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 3120,
            cardapio: [
                { id: "moqueca-peixe-ilheus", nome: "🐟 Moqueca de Peixe", descricao: "Peixe fresco cozido no dendê e leite de coco, com pirão, arroz e farofa.", preco: 68, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "moqueca-camarao-ilheus", nome: "🍤 Moqueca de Camarão", descricao: "Camarões grandes na moqueca cremosa com leite de coco.", preco: 82, recuperacao: { fome: 80, felicidade: 30, energia: 18 } },
                { id: "moqueca-mista-ilheus", nome: "🦐 Moqueca Mista", descricao: "Peixe, camarão, lula e polvo. Serve 2-3 pessoas.", preco: 110, recuperacao: { fome: 90, felicidade: 35, energia: 22 } },
                { id: "camarao-alho-ilheus", nome: "🍤 Camarão ao Alho e Óleo", descricao: "Camarões salteados no alho, azeite e coentro.", preco: 48, recuperacao: { fome: 50, felicidade: 20, energia: 12 } },
                { id: "caipirinha-ilheus", nome: "🍹 Caipirinha Ilheense", descricao: "Caipirinha com cachaça envelhecida e limão galego.", preco: 16, recuperacao: { sede: 12, felicidade: 16, energia: -5 } }
            ]
        },
        "ilheus-pizzaria": {
            id: "ilheus-pizzaria",
            nome: "🍕 Pizzaria Pontal",
            endereco: "Av. Pontal, 150 - Centro, Ilhéus",
            horario: "18h às 00h",
            telefone: "(73) 3555-3333",
            descricao: "Pizzaria com vista para o mar. Massa fina e ingredientes frescos. Ambiente romântico e familiar.",
            tipo: ["pizzaria", "italiana", "vista", "romântico", "familiar"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "pizza-margherita-ilheus", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão fresco.", preco: 48, recuperacao: { fome: 52, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-ilheus", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 52, recuperacao: { fome: 55, energia: 16, felicidade: 14 } },
                { id: "pizza-ilheus", nome: "🍕 Pizza Ilhéus", descricao: "Molho, mussarela, camarão, catupiry, coentro.", preco: 62, recuperacao: { fome: 60, energia: 18, felicidade: 16 } },
                { id: "calzone-ilheus", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 42, recuperacao: { fome: 48, energia: 14, felicidade: 12 } },
                { id: "vinho-ilheus", nome: "🍷 Vinho Tinto", descricao: "Taça de vinho tinto chileno.", preco: 22, recuperacao: { sede: 10, felicidade: 14, energia: -5 } }
            ]
        },

        // ========== PRAIA DO SUL ==========
        "praia-sul-quiosque": {
            id: "praia-sul-quiosque",
            nome: "🏖️ Quiosque Praia do Sul",
            endereco: "Orla da Praia do Sul, s/n - Ilhéus",
            horario: "08h às 22h",
            telefone: "(73) 3666-4444",
            descricao: "Quiosque na Praia do Sul. Água de coco, petiscos e frutos do mar. Ambiente descontraído e vista para o mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 40,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "agua-coco-praia", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 30, felicidade: 8, energia: 5 } },
                { id: "camarao-praia-sul", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos com molho de pimenta.", preco: 38, recuperacao: { fome: 42, felicidade: 16, energia: 10 } },
                { id: "isca-peixe-praia", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas com molho tártaro.", preco: 32, recuperacao: { fome: 38, felicidade: 14, energia: 8 } },
                { id: "pastel-praia-sul", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão e catupiry.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 4 } },
                { id: "suco-abacaxi", nome: "🥤 Suco de Abacaxi", descricao: "Suco natural de abacaxi com hortelã.", preco: 8, recuperacao: { sede: 20, felicidade: 8, energia: 5 } }
            ]
        },
        "praia-sul-brasileira": {
            id: "praia-sul-brasileira",
            nome: "🇧🇷 Restaurante Praia Sul",
            endereco: "Orla da Praia do Sul, 200 - Ilhéus",
            horario: "11h às 22h",
            telefone: "(73) 3777-5555",
            descricao: "Restaurante familiar com comida brasileira e frutos do mar. Vista privilegiada para o mar.",
            tipo: ["brasileira", "frutos-do-mar", "praia", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "bobo-camarao-praia", nome: "🍤 Bobó de Camarão", descricao: "Bobó cremoso de camarão com dendê, leite de coco e aipim.", preco: 58, recuperacao: { fome: 65, felicidade: 22, energia: 14 } },
                { id: "peixe-grelhado-praia", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado com legumes salteados.", preco: 42, recuperacao: { fome: 55, felicidade: 18, energia: 12 } },
                { id: "camarao-milanesa", nome: "🍤 Camarão à Milanesa", descricao: "Camarões empanados fritos com arroz, fritas e salada.", preco: 48, recuperacao: { fome: 58, felicidade: 18, energia: 12 } },
                { id: "parmegiana-praia", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com queijo e molho de tomate.", preco: 45, recuperacao: { fome: 60, felicidade: 18, energia: 12 } },
                { id: "suco-praia", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 6 } }
            ]
        },

        // ========== BAIRRO TEOTÔNIO VILELA ==========
        "teotonio-japones": {
            id: "teotonio-japones",
            nome: "🍣 Sushi Teotônio",
            endereco: "Av. Teotônio Vilela, 1000 - Teotônio Vilela, Ilhéus",
            horario: "18h às 23h",
            telefone: "(73) 3888-6666",
            descricao: "Restaurante japonês no bairro nobre. Rodízio e pratos a la carte. Peixes frescos e ambiente aconchegante.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-teotonio", nome: "🍣 Rodízio Teotônio", descricao: "Rodízio com 22 peças + temaki + hot roll.", preco: 62, recuperacao: { fome: 78, energia: 22, felicidade: 26 } },
                { id: "combinado-teotonio", nome: "🍱 Combinado Especial", descricao: "18 peças variadas: salmão, atum, peixe branco.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 18 } },
                { id: "temaki-teotonio", nome: "🍙 Temaki Especial", descricao: "Temaki de salmão com cream cheese e cebolinha.", preco: 24, recuperacao: { fome: 28, felicidade: 14, energia: 7 } },
                { id: "hot-roll-teotonio", nome: "🌯 Hot Roll (8 unid)", descricao: "Hot rolls empanados recheados com salmão.", preco: 28, recuperacao: { fome: 35, felicidade: 15, energia: 7 } },
                { id: "sake-teotonio", nome: "🍶 Saquê", descricao: "Saquê servido quente.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        "teotonio-nordestina": {
            id: "teotonio-nordestina",
            nome: "🌵 Culinária Nordestina",
            endereco: "Av. Teotônio Vilela, 500 - Teotônio Vilela, Ilhéus",
            horario: "11h às 22h",
            telefone: "(73) 3999-7777",
            descricao: "Culinária nordestina autêntica com pratos típicos do sertão e do litoral. Ambiente rústico.",
            tipo: ["nordestina", "regional", "familiar", "tradicional"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-dois-teo", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho, nata.", preco: 42, recuperacao: { fome: 65, felicidade: 18, energia: 12 } },
                { id: "carne-sun-teo", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca, manteiga de garrafa e farofa.", preco: 48, recuperacao: { fome: 70, felicidade: 20, energia: 14 } },
                { id: "sarapatel-teo", nome: "🍖 Sarapatel", descricao: "Miúdos de porco cozidos com temperos nordestinos.", preco: 38, recuperacao: { fome: 60, felicidade: 16, energia: 10 } },
                { id: "buchada-teo", nome: "🍲 Buchada de Bode", descricao: "Buchada de bode tradicional do sertão.", preco: 45, recuperacao: { fome: 65, felicidade: 18, energia: 12 } },
                { id: "suco-teo", nome: "🥤 Suco de Cajá", descricao: "Suco natural de cajá.", preco: 8, recuperacao: { sede: 18, felicidade: 10, energia: 5 } }
            ]
        },

        // ========== BAIRRO NOSSA SENHORA DA VITÓRIA ==========
        "vitoria-boteco": {
            id: "vitoria-boteco",
            nome: "🍺 Boteco da Vitória",
            endereco: "Rua Vitória, 200 - Nossa Sra. da Vitória, Ilhéus",
            horario: "17h às 01h",
            telefone: "(73) 4000-8888",
            descricao: "Boteco tradicional do bairro. Petiscos, cerveja gelada e música ao vivo. Point dos amigos.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "porcao-fritas-vit", nome: "🍟 Porção de Batata Frita", descricao: "Batata frita crocante.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "porcao-calabresa-vit", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 32, felicidade: 10, energia: 6 } },
                { id: "torresmo-vit", nome: "🥓 Torresmo", descricao: "Torresmo crocante com farofa.", preco: 18, recuperacao: { fome: 25, felicidade: 10, energia: 5 } },
                { id: "coxinha-vit", nome: "🍗 Coxinha", descricao: "Coxinha de frango com catupiry.", preco: 7, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "chopp-vit", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 20, felicidade: 8, energia: -4 } }
            ]
        },

        // ========== RODOVIÁRIA ==========
        "rodoviaria-ilheus": {
            id: "rodoviaria-ilheus",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Canavieiras, 500 - Centro, Ilhéus",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ilheus", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango e queijo branco.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-ilheus", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ilheus", nome: "🍗 Coxinha", descricao: "Coxinha de frango.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ilheus", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quentinho.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-ilheus", nome: "☕ Café", descricao: "Café preto passado na hora.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        },
        "vitoria-lanchonete": {
            id: "vitoria-lanchonete",
            nome: "🍔 Lanchonete Vitória",
            endereco: "Rua Vitória, 500 - Nossa Sra. da Vitória, Ilhéus",
            horario: "07h às 21h",
            telefone: "(73) 4111-9999",
            descricao: "Lanchonete tradicional com salgados, sucos e lanches. Frequentada por famílias.",
            tipo: ["lanches", "fast-food", "familiar"],
            preco_medio: 20,
            estrelas: 4.1,
            avaliacoes: 560,
            cardapio: [
                { id: "x-tudo-vit", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate.", preco: 22, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "x-salada-vit", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 14, recuperacao: { fome: 32, energia: 10, felicidade: 8 } },
                { id: "misto-quente-vit", nome: "🥪 Misto Quente", descricao: "Pão com queijo e presunto.", preco: 8, recuperacao: { fome: 14, felicidade: 5, energia: 3 } },
                { id: "suco-laranja-vit", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 5 } },
                { id: "vitamina-vit", nome: "🥤 Vitamina de Banana", descricao: "Vitamina de banana com leite.", preco: 10, recuperacao: { sede: 15, energia: 10, felicidade: 8 } }
            ]
        }
    },

    // ==================== PORTO SEGURO ====================
    "Porto Seguro": {
        // ========== CENTRO HISTÓRICO (PASSEIO) ==========
        "passeio-brasileira": {
            id: "passeio-brasileira",
            nome: "🇧🇷 Porto Brasil",
            endereco: "Rua do Passeio, 100 - Centro Histórico, Porto Seguro",
            horario: "11h às 23h",
            telefone: "(73) 3333-1111",
            descricao: "Restaurante típico no centrinho histórico de Porto Seguro. Comida baiana e brasileira. Ambiente rústico e descontraído.",
            tipo: ["baiana", "brasileira", "turístico", "familiar"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 3420,
            cardapio: [
                { id: "moqueca-porto", nome: "🍲 Moqueca Porto", descricao: "Moqueca de peixe e camarão com dendê e leite de coco.", preco: 72, recuperacao: { fome: 75, felicidade: 26, energia: 16 } },
                { id: "bobo-camarao-porto", nome: "🍤 Bobó de Camarão", descricao: "Bobó cremoso com camarão e aipim.", preco: 65, recuperacao: { fome: 68, felicidade: 24, energia: 15 } },
                { id: "carne-sol-porto", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca e manteiga de garrafa.", preco: 58, recuperacao: { fome: 70, felicidade: 22, energia: 14 } },
                { id: "acompanhamentos-porto", nome: "🥗 Acompanhamentos", descricao: "Arroz, pirão, farofa, vinagrete.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 5 } },
                { id: "caipirinha-porto", nome: "🍹 Caipirinha Porto", descricao: "Caipirinha tradicional com cachaça e limão.", preco: 18, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },
        "passeio-arabe": {
            id: "passeio-arabe",
            nome: "🧆 Beirute Porto",
            endereco: "Rua do Passeio, 200 - Centro Histórico, Porto Seguro",
            horario: "12h às 23h",
            telefone: "(73) 3444-2222",
            descricao: "Culinária árabe no coração do centro histórico. Esfihas, quibes, charme e ambiente descontraído.",
            tipo: ["arabe", "massas", "turístico", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "esfiha-carne-porto", nome: "🥙 Esfiha de Carne (4 unid)", descricao: "Esfihas abertas com carne temperada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "kibe-assado-porto", nome: "🧆 Kibe Assado", descricao: "Kibe recheado com carne e queijo.", preco: 20, recuperacao: { fome: 28, felicidade: 10, energia: 6 } },
                { id: "hommus-porto", nome: "🫔 Hommus", descricao: "Pasta de grão-de-bico com pão sírio.", preco: 18, recuperacao: { fome: 22, felicidade: 12, energia: 5 } },
                { id: "charque-porto", nome: "🥩 Charque na Manteiga", descricao: "Carne de charque com manteiga de garrafa.", preco: 42, recuperacao: { fome: 55, felicidade: 16, energia: 10 } },
                { id: "suco-limao-porto", nome: "🥤 Suco de Limão", descricao: "Suco de limão com hortelã.", preco: 8, recuperacao: { sede: 20, felicidade: 8, energia: 4 } }
            ]
        },

        // ========== PRAIA DE TAPERA ==========
        "tapera-quiosque": {
            id: "tapera-quiosque",
            nome: "🏖️ Quiosque Tapera",
            endereco: "Praia de Tapera, s/n - Porto Seguro",
            horario: "08h às 22h",
            telefone: "(73) 3555-3333",
            descricao: "Quiosque na Praia de Tapera. Petiscos, frutos do mar e água de coco. Ambiente descontraído.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "agua-coco-tapera", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 30, felicidade: 8, energia: 5 } },
                { id: "camarao-tapera", nome: "🍤 Camarão Tapera", descricao: "Camarões grelhados com alho e azeite.", preco: 42, recuperacao: { fome: 48, felicidade: 18, energia: 12 } },
                { id: "isca-peixe-tapera", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 35, recuperacao: { fome: 40, felicidade: 15, energia: 8 } },
                { id: "pastel-tapera", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão e catupiry.", preco: 15, recuperacao: { fome: 22, felicidade: 10, energia: 4 } },
                { id: "suco-tapera", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 8, recuperacao: { sede: 20, felicidade: 8, energia: 5 } }
            ]
        },
        "tapera-brasileira": {
            id: "tapera-brasileira",
            nome: "🇧🇷 Restaurante Tapera",
            endereco: "Rua da Praia, 200 - Tapera, Porto Seguro",
            horario: "11h às 22h",
            telefone: "(73) 3666-4444",
            descricao: "Restaurante familiar na Praia de Tapera. Frutos do mar e comida brasileira. Vista para o mar.",
            tipo: ["brasileira", "frutos-do-mar", "praia", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "moqueca-tapera", nome: "🍲 Moqueca Tapera", descricao: "Moqueca de peixe e camarão.", preco: 68, recuperacao: { fome: 72, felicidade: 24, energia: 15 } },
                { id: "peixe-tapera", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado.", preco: 45, recuperacao: { fome: 55, felicidade: 18, energia: 12 } },
                { id: "camarao-tapera-rest", nome: "🍤 Camarão à Milanesa", descricao: "Camarões empanados fritos.", preco: 50, recuperacao: { fome: 58, felicidade: 18, energia: 12 } },
                { id: "parmegiana-tapera", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com queijo.", preco: 48, recuperacao: { fome: 60, felicidade: 18, energia: 12 } },
                { id: "suco-tapera-rest", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 6 } }
            ]
        },

        // ========== ARRAIAL D'AJUDA ==========
        "arraial-pizzaria": {
            id: "arraial-pizzaria",
            nome: "🍕 Pizzaria Arraial",
            endereco: "Rua do Mucugê, 300 - Arraial d'Ajuda, Porto Seguro",
            horario: "18h às 00h",
            telefone: "(73) 3777-5555",
            descricao: "Pizzaria tradicional em Arraial d'Ajuda. Massa fina e ingredientes frescos. Ambiente descontraído.",
            tipo: ["pizzaria", "italiana", "turístico", "familiar"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "pizza-margherita-arraial", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 52, recuperacao: { fome: 55, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-arraial", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 55, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "pizza-arraial", nome: "🍕 Pizza Arraial", descricao: "Molho, mussarela, camarão, catupiry, coentro.", preco: 65, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "calzone-arraial", nome: "🥟 Calzone", descricao: "Pizza fechada recheada.", preco: 45, recuperacao: { fome: 50, energia: 14, felicidade: 12 } },
                { id: "suco-arraial", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 8, recuperacao: { sede: 18, felicidade: 8, energia: 4 } }
            ]
        },
        "arraial-japones": {
            id: "arraial-japones",
            nome: "🍣 Sushi Arraial",
            endereco: "Rua do Mucugê, 500 - Arraial d'Ajuda, Porto Seguro",
            horario: "18h às 23h",
            telefone: "(73) 3888-6666",
            descricao: "Restaurante japonês em Arraial. Peixes frescos e ambiente sofisticado.",
            tipo: ["japonesa", "sushi", "premium", "turístico"],
            preco_medio: 75,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                { id: "rodizio-arraial", nome: "🍣 Rodízio Arraial", descricao: "Rodízio com 25 peças + temaki.", preco: 72, recuperacao: { fome: 80, energia: 24, felicidade: 28 } },
                { id: "combinado-arraial", nome: "🍱 Combinado Especial", descricao: "20 peças variadas.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 20 } },
                { id: "temaki-arraial", nome: "🍙 Temaki Especial", descricao: "Temaki de salmão com cream cheese.", preco: 28, recuperacao: { fome: 32, felicidade: 15, energia: 8 } },
                { id: "hot-roll-arraial", nome: "🌯 Hot Roll (8 unid)", descricao: "Hot rolls empanados.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-arraial", nome: "🍶 Saquê", descricao: "Saquê gelado.", preco: 22, recuperacao: { sede: 8, felicidade: 16, energia: -6 } }
            ]
        },

        // ========== PRAIA DO ESPELHO ==========
        "espelho-quiosque": {
            id: "espelho-quiosque",
            nome: "🏖️ Espelho Bar",
            endereco: "Praia do Espelho, s/n - Porto Seguro",
            horario: "09h às 20h",
            telefone: "(73) 3999-7777",
            descricao: "Quiosque na paradisíaca Praia do Espelho. Água de coco, petiscos e frutos do mar.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "premium"],
            preco_medio: 70,
            estrelas: 4.9,
            avaliacoes: 2560,
            cardapio: [
                { id: "agua-coco-espelho", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 12, recuperacao: { sede: 30, felicidade: 10, energia: 5 } },
                { id: "camarao-espelho", nome: "🍤 Camarão Espelho", descricao: "Camarões grelhados na manteiga.", preco: 58, recuperacao: { fome: 55, felicidade: 22, energia: 14 } },
                { id: "lagosta-espelho", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca grelhada.", preco: 120, recuperacao: { fome: 80, felicidade: 35, energia: 22 } },
                { id: "peixe-espelho", nome: "🐟 Peixe Fresco", descricao: "Peixe do dia grelhado.", preco: 65, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "caipirinha-espelho", nome: "🍹 Caipirinha Espelho", descricao: "Caipirinha premium com frutas.", preco: 25, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },

        // ========== RODOVIÁRIA ==========
        "rodoviaria-porto": {
            id: "rodoviaria-porto",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. dos Navegantes, 1000 - Porto Seguro",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-porto", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-porto", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-porto", nome: "🍗 Coxinha", descricao: "Coxinha de frango.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-porto", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-porto", nome: "☕ Café", descricao: "Café preto.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        },
        "porto-lanchonete": {
            id: "porto-lanchonete",
            nome: "🍔 Lanchonete Porto",
            endereco: "Av. Brasil, 500 - Centro, Porto Seguro",
            horario: "07h às 22h",
            telefone: "(73) 4000-8888",
            descricao: "Lanchonete tradicional. Salgados, sucos e lanches.",
            tipo: ["lanches", "fast-food", "familiar"],
            preco_medio: 20,
            estrelas: 4.0,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-porto", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate.", preco: 22, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "x-salada-porto", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 14, recuperacao: { fome: 32, energia: 10, felicidade: 8 } },
                { id: "misto-porto", nome: "🥪 Misto Quente", descricao: "Pão com queijo e presunto.", preco: 8, recuperacao: { fome: 14, felicidade: 5, energia: 3 } },
                { id: "suco-porto-lanch", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 5 } },
                { id: "vitamina-porto", nome: "🥤 Vitamina de Banana", descricao: "Vitamina de banana com leite.", preco: 10, recuperacao: { sede: 15, energia: 10, felicidade: 8 } }
            ]
        }
    }
};

export default restaurantesBA;