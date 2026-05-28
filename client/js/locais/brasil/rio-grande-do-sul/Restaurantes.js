const restaurantesRS = {
    // ==================== PORTO ALEGRE (CAPITAL) - 20 RESTAURANTES ====================
    "Porto Alegre": {
        // ========== 1. CENTRO - CHURRASCARIA GAÚCHA ==========
        "centro-churrascaria-galpao": {
            id: "centro-churrascaria-galpao",
            nome: "🥩 Galpão Crioulo",
            endereco: "Rua dos Andradas, 1000 - Centro Histórico, Porto Alegre",
            horario: "11h30 às 15h | 19h às 23h30",
            telefone: "(51) 3222-1111",
            descricao: "Tradicional churrascaria gaúcha com rodízio de carnes nobres e buffet completo. Ambiente típico com decoração campeira e música gauchesca ao vivo aos fins de semana. Fundada em 1975.",
            tipo: ["churrascaria", "gaucha", "rodizio", "tradicional", "musica-ao-vivo", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 5420,
            cardapio: [
                { id: "rodizio-galpao", nome: "🥩 Rodízio Completo Gaúcho", descricao: "Mais de 15 cortes de carne: picanha, costela, maminha, fraldinha, alcatra, coração, cupim, cordeiro. Buffet incluso.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "costela-fogo-chao", nome: "🍖 Costela no Fogo de Chão", descricao: "Costela bovina assada lentamente por 6 horas no fogo de chão. Serve 2 pessoas.", preco: 78, recuperacao: { fome: 85, energia: 32, felicidade: 28 } },
                { id: "picanha-galpao", nome: "🥩 Picanha Nobre", descricao: "Picanha grelhada na brasa, 300g. Acompanha arroz, farofa, vinagrete e salada.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-galpao", nome: "🥗 Buffet Self-Service", descricao: "Saladas, massas, risotos, sushi, legumes grelhados e sobremesas.", preco: 55, recuperacao: { fome: 60, energia: 20, felicidade: 15 } },
                { id: "chimarrao-galpao", nome: "🧉 Chimarrão Gaúcho", descricao: "Erva-mate tradicional servida na cuia com água quente.", preco: 12, recuperacao: { sede: 15, energia: 18, felicidade: 14 } }
            ]
        },
        
        // ========== 2. CENTRO - MERCADO PÚBLICO ==========
        "centro-mercado-publico": {
            id: "centro-mercado-publico",
            nome: "🏛️ Mercado Público Central",
            endereco: "Av. Borges de Medeiros, 500 - Centro Histórico, Porto Alegre",
            horario: "07h às 19h",
            telefone: "(51) 3222-2222",
            descricao: "Tradicional Mercado Público de Porto Alegre. Diversas bancas com comida típica gaúcha, lanches, sucos e petiscos. Ponto turístico histórico fundado em 1869.",
            tipo: ["mercado", "tradicional", "petiscos", "lanches", "turístico", "gaucha"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 8750,
            cardapio: [
                { id: "xis-mercado", nome: "🥪 Xis Gaúcho", descricao: "Sanduíche tradicional gaúcho com hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, milho, ervilha e batata palha.", preco: 28, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "pastel-mercado", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante recheado com carne moída temperada e ovo.", preco: 12, recuperacao: { fome: 22, felicidade: 10, energia: 5 } },
                { id: "cuca-mercado", nome: "🍰 Cuca Gaúcha", descricao: "Bolo típico alemão com farofa doce e banana.", preco: 10, recuperacao: { fome: 18, felicidade: 16, energia: 6 } },
                { id: "suco-mercado", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 22, energia: 6, felicidade: 6 } },
                { id: "chimarrao-mercado", nome: "🧉 Chimarrão", descricao: "Erva-mate tradicional.", preco: 8, recuperacao: { sede: 12, energia: 14, felicidade: 10 } }
            ]
        },
        
        // ========== 3. CENTRO - CANTINA ITALIANA ==========
        "centro-cantina-toscana": {
            id: "centro-cantina-toscana",
            nome: "🍝 Cantina Toscana",
            endereco: "Rua Caldas Júnior, 200 - Centro, Porto Alegre",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(51) 3333-3333",
            descricao: "Autêntica cantina italiana no centro da cidade. Massas frescas, molhos caseiros e ambiente familiar. Tradição desde 1980.",
            tipo: ["italiana", "massas", "familiar", "tradicional", "vinhos"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 2340,
            cardapio: [
                { id: "parmegiana-centro", nome: "🍽️ Filé à Parmegiana", descricao: "Filé mignon empanado com molho de tomate, mussarela e presunto. Acompanha arroz e fritas.", preco: 58, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "lasanha-toscana", nome: "🍝 Lasanha Bolonhesa", descricao: "Camadas de massa fresca com molho bolonhesa, queijo parmesão e bechamel.", preco: 52, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "fettuccine-carbonara", nome: "🍝 Fettuccine Carbonara", descricao: "Massa fresca com molho cremoso de ovos, pancetta e queijo pecorino.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 16 } },
                { id: "polenta-mole", nome: "🍲 Polenta Mole com Ragú", descricao: "Polenta cremosa servida com ragú de carne suína.", preco: 42, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-tinto-centro", nome: "🍷 Vinho Tinto", descricao: "Taça de vinho tinto chileno.", preco: 22, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },

        // ========== 4. MOINHOS DE VENTO - PREMIUM FRANCESA ==========
        "moinhos-gastro-premium": {
            id: "moinhos-gastro-premium",
            nome: "🍽️ Moinhos Gastrô",
            endereco: "Rua Padre Chagas, 200 - Moinhos de Vento, Porto Alegre",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(51) 3444-4444",
            descricao: "Restaurante premiado com cozinha contemporânea e influências francesas. Chef renomado e ambiente sofisticado. Carta de vinhos extensa.",
            tipo: ["contemporanea", "francesa", "premium", "romântico", "vinhos", "gastronomico"],
            preco_medio: 140,
            estrelas: 4.9,
            avaliacoes: 1870,
            cardapio: [
                { id: "file-moinhos", nome: "🥩 Filé Mignon ao Molho de Vinho Tinto", descricao: "Filé mignon grelhado com molho de vinho tinto e cogumelos porcini. Acompanha purê de batata trufado.", preco: 98, recuperacao: { fome: 75, felicidade: 34, energia: 22 } },
                { id: "lagosta-moinhos", nome: "🦞 Lagosta Thermidor", descricao: "Lagosta grelhada com molho cremoso de queijo e cognac. Gratinada.", preco: 145, recuperacao: { fome: 85, felicidade: 40, energia: 24 } },
                { id: "magret-canard", nome: "🦆 Magret de Canard", descricao: "Peito de pato grelhado com molho de laranja e mel. Acompanha purê de batata doce.", preco: 95, recuperacao: { fome: 80, felicidade: 32, energia: 20 } },
                { id: "risoto-camarao-moinhos", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso com camarões grandes, açafrão e raspas de limão siciliano.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "espumante-moinhos", nome: "🥂 Espumante Brut", descricao: "Espumante brasileiro premiado.", preco: 38, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 5. MOINHOS DE VENTO - SUSHI JAPONESA ==========
        "moinhos-sushi-premium": {
            id: "moinhos-sushi-premium",
            nome: "🍣 Sushi Moinhos",
            endereco: "Rua Doutor Vale, 300 - Moinhos de Vento, Porto Alegre",
            horario: "12h às 15h | 18h às 23h30",
            telefone: "(51) 3555-5555",
            descricao: "Alta gastronomia japonesa. Peixes importados e ambiente zen. Rodízio premium e omakase. Chef japonês renomado.",
            tipo: ["japonesa", "sushi", "premium", "rodizio", "romântico"],
            preco_medio: 120,
            estrelas: 4.8,
            avaliacoes: 2150,
            cardapio: [
                { id: "rodizio-moinhos", nome: "🍣 Rodízio Premium", descricao: "Rodízio completo com 35 peças: sashimis nobres, uramakis, hot rolls, temakis e peças do chef.", preco: 115, recuperacao: { fome: 90, felicidade: 42, energia: 26 } },
                { id: "omakase-moinhos", nome: "🎌 Omakase (Chef's Selection)", descricao: "Seleção especial de 18 peças escolhidas pelo chef.", preco: 98, recuperacao: { fome: 72, felicidade: 40, energia: 22 } },
                { id: "sashimi-nobre", nome: "🐟 Sashimi Nobre (12 peças)", descricao: "Seleção de sashimis: salmão selvagem, atum bluefin, hamachi, vieira.", preco: 72, recuperacao: { fome: 60, felicidade: 34, energia: 20 } },
                { id: "temaki-moinhos", nome: "🍙 Temaki Especial", descricao: "Temaki grande com salmão, cream cheese, manga e cebolinha.", preco: 32, recuperacao: { fome: 36, felicidade: 18, energia: 10 } },
                { id: "sake-premium", nome: "🍶 Saquê Premium", descricao: "Saquê premium importado do Japão.", preco: 42, recuperacao: { sede: 8, felicidade: 24, energia: -8 } }
            ]
        },
        
        // ========== 6. MOINHOS DE VENTO - CAFÉ COLONIAL ==========
        "moinhos-cafe-colonial": {
            id: "moinhos-cafe-colonial",
            nome: "☕ Café dos Moinhos",
            endereco: "Rua Padre Chagas, 500 - Moinhos de Vento, Porto Alegre",
            horario: "08h às 20h",
            telefone: "(51) 3666-6666",
            descricao: "Cafeteria charmosa no bairro nobre. Cafés especiais, brunch, doces artesanais e ambiente aconchegante. Grãos da Serra Gaúcha.",
            tipo: ["cafeteria", "brunch", "doces", "artesanal", "premium"],
            preco_medio: 40,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "cafe-especial-serra", nome: "☕ Café Especial Serra Gaúcha", descricao: "Café 100% arábica, torra média. Métodos: espresso, V60 ou prensa francesa.", preco: 12, recuperacao: { sede: 10, energia: 16, felicidade: 12 } },
                { id: "brunch-completo", nome: "🍳 Brunch Completão", descricao: "Pão artesanal, ovos benedict, bacon, queijo, frutas, granola, iogurte e suco detox.", preco: 52, recuperacao: { fome: 68, energia: 26, felicidade: 24 } },
                { id: "tapioca-moinhos", nome: "🥞 Tapioca de Queijo", descricao: "Tapioca recheada com queijo mussarela e tomate seco.", preco: 18, recuperacao: { fome: 26, felicidade: 14, energia: 6 } },
                { id: "torta-limao-moinhos", nome: "🍰 Torta de Limão", descricao: "Torta com base de biscoito, mousse de limão siciliano e merengue.", preco: 16, recuperacao: { fome: 16, felicidade: 20, energia: 6 } },
                { id: "suco-verde-moinhos", nome: "🥤 Suco Verde Detox", descricao: "Couve, limão, gengibre, hortelã e maçã.", preco: 14, recuperacao: { sede: 20, energia: 12, felicidade: 8 } }
            ]
        },

        // ========== 7. CIDADE BAIXA - BOTECO ==========
        "cidade-baixa-boteco": {
            id: "cidade-baixa-boteco",
            nome: "🍺 Boteco da Cidade Baixa",
            endereco: "Rua Lima e Silva, 500 - Cidade Baixa, Porto Alegre",
            horario: "17h às 04h",
            telefone: "(51) 3777-7777",
            descricao: "Boteco tradicional da Cidade Baixa, reduto boêmio de Porto Alegre. Petiscos fartos, chop gelado e música ao vivo. Point dos jovens e artistas.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "boêmio"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 6780,
            cardapio: [
                { id: "xis-cidade-baixa", nome: "🥪 Xis da Cidade", descricao: "Xis gaúcho com hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, milho, ervilha e batata palha.", preco: 32, recuperacao: { fome: 70, energia: 24, felicidade: 20 } },
                { id: "batata-cheddar", nome: "🍟 Batata com Cheddar e Bacon", descricao: "Batata frita crocante coberta com cheddar e bacon.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 8 } },
                { id: "calabresa-baixa", nome: "🍢 Calabresa Acebolada", descricao: "Calabresa grelhada com cebola e pimentão.", preco: 32, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "torresmo-baixa", nome: "🥓 Torresmo Crocante", descricao: "Torresmo pururuca com farofa e limão.", preco: 24, recuperacao: { fome: 32, felicidade: 14, energia: 6 } },
                { id: "chopp-baixa", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro, tirado na hora.", preco: 12, recuperacao: { sede: 28, felicidade: 14, energia: -6 } }
            ]
        },
        
        // ========== 8. CIDADE BAIXA - HAMBURGUERIA ==========
        "cidade-baixa-hamburguer": {
            id: "cidade-baixa-hamburguer",
            nome: "🍔 Hamburgueria CB",
            endereco: "Rua João Alfredo, 300 - Cidade Baixa, Porto Alegre",
            horario: "18h às 02h",
            telefone: "(51) 3888-8888",
            descricao: "Hamburgueria artesanal com opções vegetarianas e veganas. Ambiente descolado com grafites e música indie. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana", "happy-hour"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 3120,
            cardapio: [
                { id: "smash-burger-cb", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo smash com queijo cheddar, bacon, alface, tomate e molho especial. Acompanha batata frita.", preco: 42, recuperacao: { fome: 65, energia: 24, felicidade: 20 } },
                { id: "vegan-burger-cb", nome: "🌱 Vegan Burger", descricao: "Hambúrguer de grão-de-bico e quinoa, queijo vegano, abacate, rúcula. Acompanha batata doce.", preco: 44, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "onion-rings-cb", nome: "🧅 Onion Rings", descricao: "Anéis de cebola empanados e fritos.", preco: 22, recuperacao: { fome: 26, felicidade: 12, energia: 6 } },
                { id: "batata-trufada-cb", nome: "🍟 Batata Trufada", descricao: "Batata rústica com azeite trufado, alecrim e parmesão.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "milkshake-cb", nome: "🥤 Milkshake Artesanal", descricao: "Milkshake cremoso nos sabores: chocolate, morango ou doce de leite.", preco: 22, recuperacao: { sede: 18, felicidade: 20, energia: 10 } }
            ]
        },

        // ========== 9. BELA VISTA - BRASILEIRA CONTEMPORÂNEA ==========
        "bela-vista-brasil": {
            id: "bela-vista-brasil",
            nome: "🇧🇷 Brasil Bela Vista",
            endereco: "Av. Ipiranga, 1000 - Bela Vista, Porto Alegre",
            horario: "11h às 22h",
            telefone: "(51) 3999-9999",
            descricao: "Cozinha brasileira contemporânea com ingredientes regionais. Ambiente sofisticado e cardápio sazonal. Pratos autorais premiados.",
            tipo: ["brasileira", "contemporanea", "premium", "regional", "gastronomico"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "bobo-camarao-bv", nome: "🍤 Bobó de Camarão", descricao: "Bobó cremoso com camarões grandes, aipim, leite de coco e azeite de dendê.", preco: 68, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "moqueca-bv", nome: "🍲 Moqueca Baiana", descricao: "Moqueca de peixe e camarão com dendê e leite de coco.", preco: 72, recuperacao: { fome: 78, felicidade: 30, energia: 18 } },
                { id: "carne-sol-bv", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca e manteiga de garrafa.", preco: 62, recuperacao: { fome: 75, felicidade: 26, energia: 16 } },
                { id: "risoto-camarao-bv", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso de camarão com açafrão.", preco: 58, recuperacao: { fome: 64, felicidade: 24, energia: 14 } },
                { id: "caipirinha-bv", nome: "🍹 Caipirinha Premium", descricao: "Caipirinha com cachaça envelhecida e frutas vermelhas.", preco: 22, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },

        // ========== 10. IPANEMA - FRUTOS DO MAR ==========
        "ipanema-frutos-mar": {
            id: "ipanema-frutos-mar",
            nome: "🐟 Restaurante Ipanema",
            endereco: "Av. Guaíba, 2000 - Ipanema, Porto Alegre",
            horario: "11h às 23h",
            telefone: "(51) 4000-0000",
            descricao: "Frutos do mar frescos com vista para o Guaíba. Especialidade em peixes, camarões e moquecas. Ambiente familiar e romântico.",
            tipo: ["frutos-do-mar", "brasileira", "praia", "familiar", "vista"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 2560,
            cardapio: [
                { id: "moqueca-ipanema", nome: "🍲 Moqueca Ipanema", descricao: "Moqueca de peixe e camarão com dendê, leite de coco e coentro.", preco: 78, recuperacao: { fome: 80, felicidade: 30, energia: 18 } },
                { id: "camarao-grelhado", nome: "🍤 Camarão Grelhado", descricao: "Camarões grelhados na manteiga com alho e coentro.", preco: 58, recuperacao: { fome: 62, felicidade: 24, energia: 15 } },
                { id: "peixe-grelhado-ipanema", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado com legumes salteados.", preco: 48, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "casquinha-siri-ipanema", nome: "🦀 Casquinha de Siri", descricao: "Carne de siri refogada gratinada.", preco: 28, recuperacao: { fome: 32, felicidade: 18, energia: 8 } },
                { id: "caipiroska-ipanema", nome: "🍸 Caipiroska de Morango", descricao: "Caipiroska com vodka e morango.", preco: 22, recuperacao: { sede: 10, felicidade: 18, energia: -5 } }
            ]
        },

        // ========== 11. IPANEMA - PIZZARIA ==========
        "ipanema-pizzaria": {
            id: "ipanema-pizzaria",
            nome: "🍕 Pizzaria Ipanema",
            endereco: "Av. Guaíba, 1500 - Ipanema, Porto Alegre",
            horario: "18h às 00h",
            telefone: "(51) 4111-1111",
            descricao: "Pizzaria tradicional com vista para o Guaíba. Massa fina e ingredientes frescos. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar", "vista"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1430,
            cardapio: [
                { id: "pizza-margherita-ipanema", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão fresco.", preco: 52, recuperacao: { fome: 58, energia: 18, felicidade: 16 } },
                { id: "pizza-portuguesa-ipanema", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 58, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "pizza-ipanema-especial", nome: "🍕 Pizza Ipanema Especial", descricao: "Molho, mussarela, camarão, catupiry e coentro.", preco: 68, recuperacao: { fome: 65, energia: 20, felicidade: 18 } },
                { id: "calzone-ipanema", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 48, recuperacao: { fome: 52, energia: 16, felicidade: 14 } },
                { id: "vinho-ipanema", nome: "🍷 Vinho Tinto", descricao: "Taça de vinho tinto chileno.", preco: 22, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 12. IPANEMA - GELATERIA ==========
        "ipanema-gelateria": {
            id: "ipanema-gelateria",
            nome: "🍦 Gelateria Ipanema",
            endereco: "Av. Guaíba, 1800 - Ipanema, Porto Alegre",
            horario: "10h às 22h",
            telefone: "(51) 4222-2222",
            descricao: "Gelateria artesanal com sabores tradicionais e exóticos. Gelatos italianos feitos com ingredientes frescos.",
            tipo: ["doces", "gelato", "artesanal", "italiana", "praia"],
            preco_medio: 25,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "gelato-tradicional", nome: "🍦 Gelato Tradicional (2 bolas)", descricao: "Sabores: chocolate belga, creme, morango, doce de leite.", preco: 18, recuperacao: { fome: 18, felicidade: 22, energia: 8 } },
                { id: "gelato-especial", nome: "🍦 Gelato Especial (2 bolas)", descricao: "Sabores: pistache, stracciatella, tiramisu, nutella.", preco: 22, recuperacao: { fome: 20, felicidade: 24, energia: 8 } },
                { id: "gelato-frutas", nome: "🍦 Gelato de Frutas (2 bolas)", descricao: "Sabores: limão siciliano, frutas vermelhas, manga, maracujá.", preco: 18, recuperacao: { fome: 16, felicidade: 20, energia: 6 } },
                { id: "affogato", nome: "☕ Affogato", descricao: "Gelato de creme servido com café espresso quente.", preco: 22, recuperacao: { fome: 15, felicidade: 22, energia: 12 } },
                { id: "milkshake-gelato", nome: "🥤 Milkshake Gelato", descricao: "Milkshake cremoso feito com gelato artesanal.", preco: 18, recuperacao: { sede: 16, felicidade: 20, energia: 8 } }
            ]
        },

        // ========== 13. PETRÓPOLIS - COMIDA ITALIANA ==========
        "petropolis-italiana": {
            id: "petropolis-italiana",
            nome: "🍝 Bella Italia Petrópolis",
            endereco: "Av. Petrópolis, 500 - Petrópolis, Porto Alegre",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(51) 4333-3333",
            descricao: "Cantina italiana tradicional no bairro Petrópolis. Receitas da nonna, massas frescas e ambiente familiar. Tradição desde 1970.",
            tipo: ["italiana", "massas", "tradicional", "familiar", "vinhos"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 1980,
            cardapio: [
                { id: "lasanha-petropolis", nome: "🍝 Lasanha da Nonna", descricao: "Lasanha caseira com molho bolonhesa, queijo parmesão e bechamel.", preco: 52, recuperacao: { fome: 68, energia: 20, felicidade: 18 } },
                { id: "nhoque-petropolis", nome: "🥔 Nhoque ao Pesto", descricao: "Nhoque de batata com pesto de manjericão.", preco: 48, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "fettuccine-petropolis", nome: "🍝 Fettuccine ao Sugo", descricao: "Massa fresca com molho de tomate caseiro e manjericão.", preco: 44, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "polenta-petropolis", nome: "🍲 Polenta com Ragú", descricao: "Polenta mole com ragú de carne suína.", preco: 42, recuperacao: { fome: 60, energia: 16, felicidade: 12 } },
                { id: "vinho-petropolis", nome: "🍷 Vinho da Casa", descricao: "Taça de vinho tinto da casa.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 14. PETRÓPOLIS - CHURRASCARIA ==========
        "petropolis-churrascaria": {
            id: "petropolis-churrascaria",
            nome: "🥩 Churrascaria Petrópolis",
            endereco: "Av. Petrópolis, 800 - Petrópolis, Porto Alegre",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(51) 4444-4444",
            descricao: "Churrascaria tradicional no bairro Petrópolis. Rodízio de carnes e buffet. Ambiente familiar.",
            tipo: ["churrascaria", "gaucha", "rodizio", "familiar"],
            preco_medio: 80,
            estrelas: 4.5,
            avaliacoes: 1560,
            cardapio: [
                { id: "rodizio-petropolis", nome: "🥩 Rodízio Petrópolis", descricao: "Rodízio com 12 cortes de carne: picanha, costela, maminha, fraldinha.", preco: 79, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-petropolis", nome: "🥩 Picanha", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-petropolis", nome: "🍖 Costela", descricao: "Costela assada lentamente.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-petropolis", nome: "🥗 Buffet", descricao: "Buffet self-service.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "suco-petropolis", nome: "🥤 Suco de Uva", descricao: "Suco natural de uva.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 15. MENINO DEUS - COMIDA ÁRABE ==========
        "menino-deus-arabe": {
            id: "menino-deus-arabe",
            nome: "🧆 Al Balad Árabe",
            endereco: "Av. Getúlio Vargas, 500 - Menino Deus, Porto Alegre",
            horario: "11h às 23h",
            telefone: "(51) 4555-5555",
            descricao: "Autêntica culinária árabe libanesa. Esfihas, quibes, hommus e banquetes completos. Ambiente sofisticado e familiar.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "premium"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "banquete-arabe-md", nome: "🍽️ Banquete Árabe", descricao: "Combo para 2 pessoas: hommus, babaganoush, tabule, kibe cru, esfihas, charme.", preco: 89, recuperacao: { fome: 95, felicidade: 34, energia: 22 } },
                { id: "esfiha-carne-md", nome: "🥙 Esfiha de Carne (6 unid)", descricao: "Esfihas abertas com carne temperada, limão e hortelã.", preco: 32, recuperacao: { fome: 42, felicidade: 16, energia: 8 } },
                { id: "kibe-assado-md", nome: "🧆 Kibe Assado (4 unid)", descricao: "Kibe assado recheado com carne e queijo.", preco: 28, recuperacao: { fome: 36, felicidade: 14, energia: 7 } },
                { id: "hommus-md", nome: "🫔 Hommus com Pão Sírio", descricao: "Pasta de grão-de-bico com tahine, azeite, limão.", preco: 24, recuperacao: { fome: 28, felicidade: 15, energia: 6 } },
                { id: "suco-md", nome: "🥤 Suco de Limão com Hortelã", descricao: "Suco refrescante de limão com hortelã.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: 5 } }
            ]
        },

        // ========== 16. JARDIM EUROPA - COMIDA ESPANHOLA ==========
        "jardim-europa-espanhola": {
            id: "jardim-europa-espanhola",
            nome: "🇪🇸 Tapas y Vino",
            endereco: "Rua Jardim Europa, 300 - Jardim Europa, Porto Alegre",
            horario: "18h às 02h",
            telefone: "(51) 4666-6666",
            descricao: "Autêntica cozinha espanhola com tapas, paellas e vinhos ibéricos. Ambiente descontraído e happy hour com música ao vivo.",
            tipo: ["espanhola", "tapas", "happy-hour", "vinhos", "premium", "musica-ao-vivo"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                { id: "paella-valenciana-je", nome: "🥘 Paella Valenciana", descricao: "Arroz com frango, coelho, frutos do mar, açafrão, pimentões. Serve 2-3 pessoas.", preco: 98, recuperacao: { fome: 85, felicidade: 32, energia: 20 } },
                { id: "tapas-ibericas-je", nome: "🍢 Seleção de Tapas Ibéricas", descricao: "Presunto ibérico, queijo manchego, azeitonas, pão com tomate, almôndegas.", preco: 58, recuperacao: { fome: 48, felicidade: 24, energia: 12 } },
                { id: "gambas-al-ajillo-je", nome: "🍤 Gambas al Ajillo", descricao: "Camarões salteados no azeite com alho, pimenta calabresa.", preco: 48, recuperacao: { fome: 45, felicidade: 20, energia: 12 } },
                { id: "tortilla-espanhola-je", nome: "🥚 Tortilla Espanhola", descricao: "Tortilla de batata e cebola, servida com alioli.", preco: 28, recuperacao: { fome: 35, felicidade: 16, energia: 8 } },
                { id: "sangria-je", nome: "🍷 Sangria Espanhola", descricao: "Sangria de vinho tinto com frutas e especiarias.", preco: 28, recuperacao: { sede: 15, felicidade: 22, energia: -6 } }
            ]
        },

        // ========== 17. BOM FIM - COMIDA VEGANA ==========
        "bom-fim-vegana": {
            id: "bom-fim-vegana",
            nome: "🌱 Vegan Bom Fim",
            endereco: "Rua Bento Martins, 200 - Bom Fim, Porto Alegre",
            horario: "11h às 21h",
            telefone: "(51) 4777-7777",
            descricao: "Restaurante vegano com buffet por quilo. Opções saudáveis, criativas e sustentáveis. Ambiente acolhedor e alternativo.",
            tipo: ["vegana", "vegetariano", "saudavel", "buffet", "alternativo"],
            preco_medio: 40,
            estrelas: 4.7,
            avaliacoes: 890,
            cardapio: [
                { id: "buffet-vegano", nome: "🥗 Buffet Vegano por Quilo", descricao: "Opções: saladas, legumes, grãos, proteína vegetal, massas integrais.", preco: 42, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "hamburguer-vegano", nome: "🍔 Hamburguer Vegano", descricao: "Hambúrguer de lentilha com queijo vegano, alface, tomate, cebola roxa.", preco: 28, recuperacao: { fome: 48, energia: 18, felicidade: 14 } },
                { id: "lasanha-vegana", nome: "🍝 Lasanha Vegana", descricao: "Lasanha de berinjela com molho de tomate e queijo vegano.", preco: 32, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "sopa-vegana", nome: "🥣 Sopa do Dia", descricao: "Sopa cremosa de legumes com quinoa.", preco: 18, recuperacao: { fome: 35, energia: 14, felicidade: 10 } },
                { id: "suco-verde-bf", nome: "🥤 Suco Verde", descricao: "Couve, limão, gengibre, maçã e hortelã.", preco: 12, recuperacao: { sede: 22, energia: 12, felicidade: 8 } }
            ]
        },

        // ========== 18. SANTANA - LANCHONETE ==========
        "santana-lanchonete": {
            id: "santana-lanchonete",
            nome: "🍔 Lanchonete Santana",
            endereco: "Rua Marquês do Pombal, 500 - Santana, Porto Alegre",
            horario: "08h às 22h",
            telefone: "(51) 4888-8888",
            descricao: "Lanchonete tradicional do bairro Santana. X-tudo, sucos e salgados. Frequentada por famílias.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-santana", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, batata palha.", preco: 24, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "x-salada-santana", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 16, recuperacao: { fome: 38, energia: 12, felicidade: 10 } },
                { id: "coxinha-santana", nome: "🍗 Coxinha", descricao: "Coxinha de frango tradicional.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-santana", nome: "🥟 Pastel de Queijo", descricao: "Pastel crocante de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 7, energia: 3 } },
                { id: "suco-santana", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 19. PRAIA DE BELAS - SHOPPING FOOD COURT ==========
        "praia-belas-shopping": {
            id: "praia-belas-shopping",
            nome: "🛍️ Shopping Praia de Belas - Food Court",
            endereco: "Av. Praia de Belas, 1000 - Praia de Belas, Porto Alegre",
            horario: "10h às 22h",
            telefone: "(51) 4999-9999",
            descricao: "Praça de alimentação do Shopping Praia de Belas com diversas opções: fast food, comida japonesa, churrasco e opções vegetarianas.",
            tipo: ["fast-food", "shopping", "variado", "familiar", "executivos"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 6540,
            cardapio: [
                { id: "mc-praia", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita e refrigerante.", preco: 32, recuperacao: { fome: 48, energia: 14, felicidade: 10 } },
                { id: "habibs-praia", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 26, recuperacao: { fome: 38, energia: 12, felicidade: 8 } },
                { id: "outback-praia", nome: "🇦🇺 Outback", descricao: "Carnes, massas e sobremesas.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-praia", nome: "🍣 Sushi Fast", descricao: "Combinado rápido de sushi.", preco: 38, recuperacao: { fome: 48, felicidade: 18, energia: 10 } },
                { id: "suco-praia", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },

        // ========== 20. PARTENON - RESTAURANTE POPULAR ==========
        "partenon-popular": {
            id: "partenon-popular",
            nome: "🇧🇷 Restaurante Popular Partenon",
            endereco: "Rua Bento Gonçalves, 1500 - Partenon, Porto Alegre",
            horario: "11h às 14h",
            telefone: "(51) 5000-0000",
            descricao: "Restaurante popular com comida caseira e preço acessível. Frequentado por estudantes e trabalhadores.",
            tipo: ["brasileira", "popular", "buffet", "familiar", "caseiro"],
            preco_medio: 18,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "prato-feito-part", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína (frango/carne/peixe), farofa, salada.", preco: 18, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-acebolado-part", nome: "🥩 Bife Acebolado", descricao: "Bife grelhado com cebola caramelizada.", preco: 20, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-assado-part", nome: "🍗 Frango Assado", descricao: "Frango assado com batatas.", preco: 18, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "macarronada-part", nome: "🍝 Macarronada", descricao: "Macarrão com molho bolonhesa.", preco: 15, recuperacao: { fome: 50, energia: 14, felicidade: 10 } },
                { id: "suco-part", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta do dia.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        }
    },

    // ==================== CAXIAS DO SUL - 10 RESTAURANTES ====================
    "Caxias do Sul": {
        // ========== 1. CENTRO - CHURRASCARIA TRADICIONAL ==========
        "caxias-churrascaria-sao-pelegrino": {
            id: "caxias-churrascaria-sao-pelegrino",
            nome: "🥩 Churrascaria São Pelegrino",
            endereco: "Av. Júlio de Castilhos, 1000 - Centro, Caxias do Sul",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(54) 3222-1111",
            descricao: "Tradicional churrascaria no centro de Caxias. Rodízio de carnes e buffet completo. Ambiente típico gaúcho. Tradição desde 1980.",
            tipo: ["churrascaria", "gaucha", "rodizio", "tradicional", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 2450,
            cardapio: [
                { id: "rodizio-caxias", nome: "🥩 Rodízio Gaúcho", descricao: "Mais de 12 cortes de carne: picanha, costela, maminha, fraldinha, coração, cordeiro.", preco: 79, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "costela-fogo-caxias", nome: "🍖 Costela no Fogo de Chão", descricao: "Costela assada lentamente por 6 horas. Serve 2 pessoas.", preco: 68, recuperacao: { fome: 85, energia: 32, felicidade: 28 } },
                { id: "picanha-caxias", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "buffet-caxias", nome: "🥗 Buffet Self-Service", descricao: "Saladas, massas, legumes, sushi e sobremesas.", preco: 45, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-caxias", nome: "🍷 Vinho da Serra", descricao: "Vinho tinto colonial da serra gaúcha.", preco: 18, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 2. CENTRO - CANTINA ITALIANA ==========
        "caxias-cantina-nonna": {
            id: "caxias-cantina-nonna",
            nome: "🍝 Cantina della Nonna",
            endereco: "Rua Sinimbu, 500 - Centro, Caxias do Sul",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(54) 3333-2222",
            descricao: "Cantina italiana tradicional com receitas da imigração. Massas frescas, molhos caseiros e ambiente aconchegante. Fundada em 1975.",
            tipo: ["italiana", "massas", "tradicional", "familiar", "colonial"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "galeto-cantina", nome: "🍗 Galeto Al Primo", descricao: "Galeto assado na brasa com polenta, salada e vinagrete.", preco: 48, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "polenta-cantina", nome: "🍲 Polenta Mole com Ragú", descricao: "Polenta cremosa servida com ragú de carne suína.", preco: 38, recuperacao: { fome: 52, energia: 16, felicidade: 12 } },
                { id: "radicci-cantina", nome: "🥗 Radicci", descricao: "Salada de radicci com vinagrete.", preco: 22, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "sopa-agnolini", nome: "🥣 Sopa de Agnolini", descricao: "Sopa de massa italiana com caldo de carne.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "suco-uva-cantina", nome: "🥤 Suco de Uva", descricao: "Suco natural de uva.", preco: 10, recuperacao: { sede: 18, energia: 8, felicidade: 8 } }
            ]
        },
        
        // ========== 3. CENTRO - CAFETERIA ==========
        "caxias-cafe-centro": {
            id: "caxias-cafe-centro",
            nome: "☕ Café São Pelegrino",
            endereco: "Rua Moreira César, 300 - Centro, Caxias do Sul",
            horario: "08h às 20h",
            telefone: "(54) 3444-3333",
            descricao: "Cafeteria tradicional no centro. Cafés especiais, cucas, bolos e salgados. Ambiente aconchegante e frequentado por moradores.",
            tipo: ["cafeteria", "tradicional", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 1250,
            cardapio: [
                { id: "cafe-especial-caxias", nome: "☕ Café Especial", descricao: "Café 100% arábica da serra gaúcha.", preco: 10, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-caxias", nome: "🍰 Cuca de Banana", descricao: "Cuca tradicional com farofa de açúcar e canela.", preco: 12, recuperacao: { fome: 18, felicidade: 16, energia: 6 } },
                { id: "pao-queijo-caxias", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quentinho e crocante.", preco: 8, recuperacao: { fome: 12, felicidade: 10, energia: 4 } },
                { id: "torta-maca", nome: "🍎 Torta de Maçã", descricao: "Torta de maçã com canela.", preco: 14, recuperacao: { fome: 18, felicidade: 16, energia: 6 } },
                { id: "suco-caxias-cafe", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. SÃO PELEGRINO - PIZZARIA ==========
        "caxias-pizzaria-sao-pelegrino": {
            id: "caxias-pizzaria-sao-pelegrino",
            nome: "🍕 Pizzaria São Pelegrino",
            endereco: "Av. São Pelegrino, 500 - São Pelegrino, Caxias do Sul",
            horario: "18h às 23h30",
            telefone: "(54) 3555-4444",
            descricao: "Pizzaria tradicional com forno à lenha. Massa fina e ingredientes de qualidade. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-mussarela-sp", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 45, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-sp", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 48, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-sp", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 52, recuperacao: { fome: 58, energia: 15, felicidade: 12 } },
                { id: "calzone-sp", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 42, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-uva-sp", nome: "🥤 Suco de Uva", descricao: "Suco natural de uva.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 5. VILA OLÍMPICA - BRASILEIRA CONTEMPORÂNEA ==========
        "caxias-vila-olimpica": {
            id: "caxias-vila-olimpica",
            nome: "🇧🇷 Brasil Caxias",
            endereco: "Rua Os 18 do Forte, 500 - Vila Olímpica, Caxias do Sul",
            horario: "11h às 22h",
            telefone: "(54) 3666-5555",
            descricao: "Cozinha brasileira contemporânea com influências da serra gaúcha. Ambiente acolhedor e familiar.",
            tipo: ["brasileira", "contemporanea", "familiar", "regional"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "parmegiana-vo", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com molho e queijo. Acompanha arroz e fritas.", preco: 48, recuperacao: { fome: 62, energia: 20, felicidade: 16 } },
                { id: "bife-acebolado-vo", nome: "🥩 Bife Acebolado", descricao: "Bife grelhado com cebola caramelizada.", preco: 42, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "frango-grelhado-vo", nome: "🍗 Frango Grelhado", descricao: "Frango grelhado com molho de laranja.", preco: 38, recuperacao: { fome: 52, energia: 16, felicidade: 12 } },
                { id: "peixe-grelhado-vo", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe com legumes salteados.", preco: 44, recuperacao: { fome: 54, energia: 16, felicidade: 12 } },
                { id: "suco-vo", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 6. VILA OLÍMPICA - HAMBURGUERIA ==========
        "caxias-hamburgueria": {
            id: "caxias-hamburgueria",
            nome: "🍔 Hamburgueria Caxias",
            endereco: "Rua Portugal, 300 - Vila Olímpica, Caxias do Sul",
            horario: "18h às 00h",
            telefone: "(54) 3777-6666",
            descricao: "Hamburgueria artesanal com opções vegetarianas. Cervejas artesanais e ambiente descolado.",
            tipo: ["hamburguer", "americana", "artesanal", "cervejaria"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "smash-caxias", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo smash com cheddar, bacon, alface, tomate. Acompanha batata.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-caxias", nome: "🌱 Vegan Burger", descricao: "Hambúrguer de grão-de-bico com queijo vegano, abacate e rúcula.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-cheddar-caxias", nome: "🍟 Batata com Cheddar", descricao: "Batata frita com cheddar e bacon.", preco: 22, recuperacao: { fome: 28, felicidade: 10, energia: 6 } },
                { id: "onion-rings-caxias", nome: "🧅 Onion Rings", descricao: "Anéis de cebola empanados.", preco: 18, recuperacao: { fome: 22, felicidade: 10, energia: 5 } },
                { id: "milkshake-caxias", nome: "🥤 Milkshake", descricao: "Milkshake de chocolate ou morango.", preco: 18, recuperacao: { sede: 16, felicidade: 18, energia: 8 } }
            ]
        },
        
        // ========== 7. COLÔNIA - RESTAURANTE COLONIAL ITALIANO ==========
        "caxias-colonial": {
            id: "caxias-colonial",
            nome: "🏠 Restaurante Colonial",
            endereco: "Estrada dos Imigrantes, 5000 - Zona Rural, Caxias do Sul",
            horario: "11h30 às 17h (sábado e domingo)",
            telefone: "(54) 3888-7777",
            descricao: "Restaurante colonial típico da imigração italiana. Comida caseira, galeto e massas frescas. Ambiente rústico e acolhedor.",
            tipo: ["italiana", "colonial", "familiar", "tradicional", "rural"],
            preco_medio: 55,
            estrelas: 4.8,
            avaliacoes: 980,
            cardapio: [
                { id: "galeto-colonial", nome: "🍗 Galeto Colonial", descricao: "Galeto assado com polenta, salada e vinagrete.", preco: 52, recuperacao: { fome: 70, felicidade: 24, energia: 16 } },
                { id: "polenta-colonial", nome: "🍲 Polenta com Carne", descricao: "Polenta cremosa com ragú de carne suína.", preco: 42, recuperacao: { fome: 58, felicidade: 18, energia: 12 } },
                { id: "sopa-colonial", nome: "🥣 Sopa de Agnolini", descricao: "Sopa de massa italiana com caldo de carne.", preco: 32, recuperacao: { fome: 38, felicidade: 14, energia: 8 } },
                { id: "radicci-colonial", nome: "🥗 Radicci", descricao: "Salada de radicci com vinagrete.", preco: 18, recuperacao: { fome: 18, felicidade: 10, energia: 5 } },
                { id: "suco-uva-colonial", nome: "🥤 Suco de Uva Colonial", descricao: "Suco natural de uva.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 8. VINÍCOLA - CASA VALDUGA ==========
        "caxias-vinicola-valduga": {
            id: "caxias-vinicola-valduga",
            nome: "🍷 Vinícola Casa Valduga",
            endereco: "Via Trento, 1000 - Zona Rural, Caxias do Sul",
            horario: "10h às 18h",
            telefone: "(54) 3999-8888",
            descricao: "Vinícola tradicional com degustação de vinhos e espumantes. Restaurante com gastronomia harmonizada. Visitas guiadas.",
            tipo: ["vinicola", "premium", "gastronomico", "turístico", "vinhos"],
            preco_medio: 120,
            estrelas: 4.9,
            avaliacoes: 1450,
            cardapio: [
                { id: "degustacao-valduga", nome: "🍷 Degustação de Vinhos", descricao: "Seleção de 5 vinhos da vinícola.", preco: 65, recuperacao: { sede: 10, felicidade: 28, energia: -6 } },
                { id: "harmonizacao-carnes", nome: "🍽️ Harmonização Carnes", descricao: "Filé mignon com molho de vinho tinto. Harmonização com vinho.", preco: 98, recuperacao: { fome: 75, felicidade: 34, energia: 22 } },
                { id: "tabua-queijos-valduga", nome: "🧀 Tábua de Queijos", descricao: "Seleção de queijos artesanais da região.", preco: 48, recuperacao: { fome: 35, felicidade: 22, energia: 10 } },
                { id: "risoto-valduga", nome: "🍚 Risoto de Camarão", descricao: "Risoto de camarão harmonizado com espumante.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 16 } },
                { id: "espumante-valduga", nome: "🥂 Espumante Brut", descricao: "Espumante Casa Valduga.", preco: 35, recuperacao: { sede: 8, felicidade: 22, energia: -5 } }
            ]
        },
        
        // ========== 9. SHOPPING CAXIAS ==========
        "caxias-shopping": {
            id: "caxias-shopping",
            nome: "🛍️ Shopping Iguatemi Caxias - Food Court",
            endereco: "Av. Andrade Neves, 1000 - São Pelegrino, Caxias do Sul",
            horario: "10h às 22h",
            telefone: "(54) 4000-9999",
            descricao: "Praça de alimentação do Shopping Iguatemi Caxias com opções rápidas e restaurantes.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-caxias-shop", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita e refrigerante.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-caxias-shop", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-caxias", nome: "🥢 China Fast", descricao: "Yakisoba, frango xadrez, rolinho primavera.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-caxias", nome: "🍣 Sushi Fast", descricao: "Combinado rápido de sushi.", preco: 35, recuperacao: { fome: 45, felicidade: 16, energia: 10 } },
                { id: "suco-caxias-shop", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. PARQUE DE EVENTOS - BOTECO ==========
        "caxias-boteco": {
            id: "caxias-boteco",
            nome: "🍺 Boteco do Parque",
            endereco: "Rua Dom José Barea, 500 - Parque de Eventos, Caxias do Sul",
            horario: "11h às 01h",
            telefone: "(54) 4111-0000",
            descricao: "Boteco tradicional próximo ao Parque de Eventos. Petiscos fartos, chop gelado e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "xis-boteco", nome: "🥪 Xis do Boteco", descricao: "Xis gaúcho com hambúrguer, queijo, presunto, ovo, bacon, alface, tomate, milho, ervilha.", preco: 28, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "porcao-calabresa-boteco", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com pimentão.", preco: 28, recuperacao: { fome: 38, felicidade: 14, energia: 8 } },
                { id: "torresmo-boteco", nome: "🥓 Torresmo", descricao: "Torresmo crocante com farofa.", preco: 22, recuperacao: { fome: 30, felicidade: 12, energia: 6 } },
                { id: "batata-boteco", nome: "🍟 Batata Frita", descricao: "Batata frita crocante.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "chopp-boteco", nome: "🍺 Chopp Gelado", descricao: "Chopp claro tirado na hora.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        }
    },

        // ==================== GRAMADO - 10 RESTAURANTES ====================
    "Gramado": {
        // ========== 1. CENTRO - CULINÁRIA ALEMÃ ==========
        "gramado-biergarten": {
            id: "gramado-biergarten",
            nome: "🇩🇪 Biergarten Gramado",
            endereco: "Av. Borges de Medeiros, 1000 - Centro, Gramado",
            horario: "11h às 23h",
            telefone: "(54) 3222-1111",
            descricao: "Culinária alemã autêntica com chope artesanal, joelho de porco, salsichão e música típica. Ambiente rústico e descontraído.",
            tipo: ["alemã", "cervejaria", "petiscos", "turístico", "familiar"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 5420,
            cardapio: [
                { id: "joelho-porco-bier", nome: "🍖 Joelho de Porco", descricao: "Joelho de porco assado com chucrute, purê de batata e molho especial.", preco: 68, recuperacao: { fome: 85, energia: 32, felicidade: 28 } },
                { id: "salsichao-bier", nome: "🌭 Salsichão Alemão", descricao: "Salsichão artesanal com chucrute, mostarda escura e batata cozida.", preco: 42, recuperacao: { fome: 55, felicidade: 20, energia: 14 } },
                { id: "cuca-bier", nome: "🍰 Cuca Alemã", descricao: "Bolo típico alemão com farofa de açúcar e canela.", preco: 18, recuperacao: { fome: 22, felicidade: 18, energia: 6 } },
                { id: "bretzel-bier", nome: "🥨 Bretzel", descricao: "Pretzel alemão macio com sal grosso.", preco: 14, recuperacao: { fome: 18, felicidade: 12, energia: 4 } },
                { id: "chope-bier", nome: "🍺 Chope Artesanal", descricao: "Chope artesanal alemão (Pilsen, Weiss ou Dunkel).", preco: 16, recuperacao: { sede: 22, felicidade: 16, energia: -6 } }
            ]
        },
        
        // ========== 2. CENTRO - FONDUE ==========
        "gramado-chalet-fondue": {
            id: "gramado-chalet-fondue",
            nome: "🫕 Chalet Fondue Gramado",
            endereco: "Rua Santa Clara, 100 - Centro, Gramado",
            horario: "18h às 01h",
            telefone: "(54) 3333-2222",
            descricao: "Restaurante romântico especializado em fondues. Queijo, carne e chocolate. Ambiente típico suíço e aconchegante.",
            tipo: ["fondue", "suica", "premium", "romântico", "turístico"],
            preco_medio: 110,
            estrelas: 4.9,
            avaliacoes: 6780,
            cardapio: [
                { id: "fondue-queijo-chalet", nome: "🫕 Fondue de Queijo", descricao: "Fondue de queijo suíço (Emmental e Gruyère) com pães, batatas e legumes.", preco: 78, recuperacao: { fome: 65, felicidade: 32, energia: 16 } },
                { id: "fondue-carne-chalet", nome: "🍖 Fondue de Carne", descricao: "Cubos de carne (filé mignon, frango, lingüiça) em óleo ou vinho. Acompanha molhos.", preco: 85, recuperacao: { fome: 80, felicidade: 34, energia: 24 } },
                { id: "fondue-chocolate-chalet", nome: "🍫 Fondue de Chocolate", descricao: "Chocolate ao leite ou meio amargo com frutas, marshmallow e bolo.", preco: 65, recuperacao: { fome: 45, felicidade: 38, energia: 16 } },
                { id: "fondue-tradicional", nome: "🫕 Fondue Suíço Completo", descricao: "Queijo + Carne + Chocolate. Experiência completa.", preco: 165, recuperacao: { fome: 100, felicidade: 48, energia: 32 } },
                { id: "vinho-fondue", nome: "🍷 Vinho Branco", descricao: "Taça de vinho branco suíço.", preco: 32, recuperacao: { sede: 10, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - CAFÉ COLONIAL ==========
        "gramado-cafe-colonial": {
            id: "gramado-cafe-colonial",
            nome: "☕ Café Colonial Gramado",
            endereco: "Av. das Hortênsias, 500 - Centro, Gramado",
            horario: "08h às 19h",
            telefone: "(54) 3444-3333",
            descricao: "Café colonial tradicional com variedade de pães, bolos, tortas, geleias, frios e chocolates. Mesa farta e ambiente aconchegante.",
            tipo: ["cafeteria", "colonial", "doces", "artesanal", "turístico"],
            preco_medio: 55,
            estrelas: 4.8,
            avaliacoes: 7650,
            cardapio: [
                { id: "cafe-colonial-completo", nome: "☕ Café Colonial Completo", descricao: "Mesa com cafés, leite, sucos, pães, bolos, tortas, geleias, queijos, frios e cucas.", preco: 55, recuperacao: { fome: 70, felicidade: 32, energia: 22 } },
                { id: "cuca-banana", nome: "🍰 Cuca de Banana", descricao: "Cuca tradicional de banana com farofa de açúcar e canela.", preco: 12, recuperacao: { fome: 18, felicidade: 16, energia: 6 } },
                { id: "strudel-maca", nome: "🍎 Strudel de Maçã", descricao: "Strudel alemão de maçã com canela.", preco: 14, recuperacao: { fome: 16, felicidade: 18, energia: 5 } },
                { id: "pao-queijo-gramado", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quentinho.", preco: 8, recuperacao: { fome: 12, felicidade: 10, energia: 4 } },
                { id: "suco-laranja-cafe", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 4. LAGO NEGRO - ITALIANA ==========
        "gramado-lago-negro": {
            id: "gramado-lago-negro",
            nome: "🍝 Restaurante Lago Negro",
            endereco: "Rua das Azaléias, 200 - Lago Negro, Gramado",
            horario: "11h30 às 22h",
            telefone: "(54) 3555-4444",
            descricao: "Culinária italiana com vista para o Lago Negro. Massas frescas, risotos e ambiente romântico.",
            tipo: ["italiana", "massas", "vista", "romântico", "turístico"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 2340,
            cardapio: [
                { id: "nhoque-lago", nome: "🥔 Nhoque ao Sugo", descricao: "Nhoque de batata com molho de tomate caseiro e manjericão.", preco: 48, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "ravioli-lago", nome: "🥟 Ravioli de Ricota", descricao: "Ravioli de ricota com molho de tomate e manjericão.", preco: 52, recuperacao: { fome: 60, energia: 18, felicidade: 16 } },
                { id: "lasanha-lago", nome: "🍝 Lasanha Bolonhesa", descricao: "Lasanha com molho bolonhesa e bechamel.", preco: 55, recuperacao: { fome: 65, energia: 18, felicidade: 16 } },
                { id: "polenta-lago", nome: "🍲 Polenta Mole", descricao: "Polenta cremosa com ragú de carne.", preco: 42, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-lago", nome: "🍷 Vinho Tinto", descricao: "Taça de vinho tinto chileno.", preco: 22, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 5. CENTRO - CHOCOLATES ==========
        "gramado-chocolates": {
            id: "gramado-chocolates",
            nome: "🍫 Chocolates Gramado",
            endereco: "Av. Borges de Medeiros, 1500 - Centro, Gramado",
            horario: "09h às 21h",
            telefone: "(54) 3666-5555",
            descricao: "Loja de chocolates artesanais com fábrica aberta. Bombons, trufas, barras e chocolate quente. Degustação gratuita.",
            tipo: ["doces", "chocolate", "artesanal", "turístico", "cafeteria"],
            preco_medio: 30,
            estrelas: 4.8,
            avaliacoes: 6540,
            cardapio: [
                { id: "chocolate-quente-gram", nome: "☕ Chocolate Quente Gramado", descricao: "Chocolate quente cremoso feito com cacau 50%.", preco: 14, recuperacao: { sede: 8, felicidade: 22, energia: 12 } },
                { id: "trufas-gram", nome: "🍬 Trufas Artesanais (6 unid)", descricao: "Trufas: chocolate ao leite, meio amargo, com laranja, com amêndoas.", preco: 24, recuperacao: { fome: 18, felicidade: 26, energia: 8 } },
                { id: "bomba-chocolate", nome: "🍫 Bomba de Chocolate", descricao: "Bomba recheada com chocolate e morango.", preco: 12, recuperacao: { fome: 15, felicidade: 18, energia: 6 } },
                { id: "barra-chocolate", nome: "🍫 Barra de Chocolate 70%", descricao: "Barra de chocolate meio amargo 70% cacau.", preco: 18, recuperacao: { fome: 14, felicidade: 20, energia: 6 } },
                { id: "cappuccino-chocolate", nome: "☕ Cappuccino com Chocolate", descricao: "Cappuccino com raspas de chocolate.", preco: 12, recuperacao: { sede: 10, energia: 14, felicidade: 12 } }
            ]
        },
        
        // ========== 6. RUA COBERTA - PIZZARIA ==========
        "gramado-rua-coberta": {
            id: "gramado-rua-coberta",
            nome: "🍕 Pizzaria Bella Gramado",
            endereco: "Rua Coberta, 50 - Centro, Gramado",
            horario: "12h às 23h",
            telefone: "(54) 3777-6666",
            descricao: "Pizzaria na famosa Rua Coberta de Gramado. Massa fina e forno à lenha. Ambiente aconchegante.",
            tipo: ["pizzaria", "italiana", "turístico", "familiar"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 3120,
            cardapio: [
                { id: "pizza-margherita-rc", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 55, recuperacao: { fome: 58, energia: 16, felicidade: 15 } },
                { id: "pizza-portuguesa-rc", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 58, recuperacao: { fome: 60, energia: 16, felicidade: 15 } },
                { id: "pizza-gramado-especial", nome: "🍕 Pizza Gramado Especial", descricao: "Molho, mussarela, filé mignon, champignon, catupiry.", preco: 68, recuperacao: { fome: 65, energia: 18, felicidade: 18 } },
                { id: "calzone-rc", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-morango-rc", nome: "🥤 Suco de Morango", descricao: "Suco natural de morango.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 7. CARNEIRO - CHURRASCARIA DE CORDEIRO ==========
        "gramado-carneiro": {
            id: "gramado-carneiro",
            nome: "🐑 Restaurante Carneiro",
            endereco: "Estrada do Carneiro, 500 - Carneiro, Gramado",
            horario: "11h30 às 22h",
            telefone: "(54) 3888-7777",
            descricao: "Especialista em cordeiro e carnes nobres. Ambiente rústico e familiar. Tradição gaúcha.",
            tipo: ["gaucha", "churrascaria", "cordeiro", "familiar", "tradicional"],
            preco_medio: 80,
            estrelas: 4.7,
            avaliacoes: 1670,
            cardapio: [
                { id: "cordeiro-assado", nome: "🐑 Cordeiro Assado", descricao: "Cordeiro assado lentamente com batatas e legumes.", preco: 78, recuperacao: { fome: 85, felicidade: 32, energia: 24 } },
                { id: "costela-cordeiro", nome: "🍖 Costela de Cordeiro", descricao: "Costela de cordeiro grelhada.", preco: 72, recuperacao: { fome: 80, felicidade: 30, energia: 22 } },
                { id: "picanha-cordeiro", nome: "🥩 Picanha de Cordeiro", descricao: "Picanha de cordeiro grelhada.", preco: 68, recuperacao: { fome: 72, felicidade: 28, energia: 20 } },
                { id: "risoto-cordeiro", nome: "🍚 Risoto de Cordeiro", descricao: "Risoto cremoso com cordeiro desfiado.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "vinho-carneiro", nome: "🍷 Vinho Tinto", descricao: "Vinho tinto da casa.", preco: 22, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 8. BAVIERA - CERVEJARIA ==========
        "gramado-baviera": {
            id: "gramado-baviera",
            nome: "🇩🇪 Bierhaus Baviera",
            endereco: "Rua Bela Vista, 200 - Baviera, Gramado",
            horario: "11h às 23h",
            telefone: "(54) 3999-8888",
            descricao: "Culinária bávara autêntica. Chope artesanal, joelho de porco e salsichões. Música alemã ao vivo.",
            tipo: ["alemã", "cervejaria", "petiscos", "musica-ao-vivo", "familiar"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1980,
            cardapio: [
                { id: "joelho-baviera", nome: "🍖 Joelho Bávaro", descricao: "Joelho de porco assado com chucrute e purê.", preco: 72, recuperacao: { fome: 82, energia: 30, felicidade: 26 } },
                { id: "salsichao-baviera", nome: "🌭 Salsichão Bávaro", descricao: "Salsichão alemão com chucrute e mostarda.", preco: 45, recuperacao: { fome: 58, energia: 18, felicidade: 16 } },
                { id: "eisbein-baviera", nome: "🍖 Eisbein", descricao: "Joelho de porco cozido e assado.", preco: 68, recuperacao: { fome: 78, energia: 28, felicidade: 24 } },
                { id: "kartoffel-baviera", nome: "🥔 Kartoffelpuffer", descricao: "Panqueca de batata alemã com molho de maçã.", preco: 28, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "cerveja-baviera", nome: "🍺 Chope Bávaro", descricao: "Chope artesanal alemão.", preco: 18, recuperacao: { sede: 24, felicidade: 16, energia: -6 } }
            ]
        },
        
        // ========== 9. SHOPPING GRAMADO ==========
        "gramado-shopping": {
            id: "gramado-shopping",
            nome: "🛍️ Shopping Gramado - Food Court",
            endereco: "Av. das Hortênsias, 2000 - Centro, Gramado",
            horario: "10h às 22h",
            telefone: "(54) 4000-9999",
            descricao: "Praça de alimentação do Shopping Gramado com opções rápidas.",
            tipo: ["fast-food", "shopping", "turístico", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-gramado", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita e refrigerante.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-gramado", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "subway-gramado", nome: "🥪 Subway", descricao: "Sanduíche artesanal.", preco: 30, recuperacao: { fome: 40, energia: 10, felicidade: 8 } },
                { id: "japa-gramado", nome: "🍣 Sushi Gramado", descricao: "Combinado de sushi.", preco: 38, recuperacao: { fome: 48, felicidade: 18, energia: 10 } },
                { id: "suco-gramado", nome: "🥤 Suco Natural", descricao: "Suco de fruta natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. VALE DO QUILOMBO - CAFÉ ==========
        "gramado-vale-quilombo": {
            id: "gramado-vale-quilombo",
            nome: "☕ Vale do Quilombo Café",
            endereco: "Estrada do Vale do Quilombo, 1000 - Vale do Quilombo, Gramado",
            horario: "09h às 19h",
            telefone: "(54) 4111-0000",
            descricao: "Café colonial no Vale do Quilombo. Vista para o vale e ambiente rústico. Doces, bolos e cucas caseiras.",
            tipo: ["cafeteria", "colonial", "doces", "vista", "rural"],
            preco_medio: 45,
            estrelas: 4.7,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-colonial-vale", nome: "☕ Café Colonial Vale", descricao: "Mesa com cafés, leite, sucos, pães, bolos, cucas, geleias caseiras.", preco: 48, recuperacao: { fome: 65, felicidade: 28, energia: 20 } },
                { id: "cuca-vale", nome: "🍰 Cuca de Maçã", descricao: "Cuca de maçã com farofa de açúcar.", preco: 12, recuperacao: { fome: 16, felicidade: 16, energia: 5 } },
                { id: "strudel-vale", nome: "🍎 Strudel", descricao: "Strudel de maçã com canela.", preco: 14, recuperacao: { fome: 16, felicidade: 18, energia: 5 } },
                { id: "quindim-vale", nome: "🍮 Quindim", descricao: "Quindim tradicional.", preco: 8, recuperacao: { fome: 10, felicidade: 14, energia: 4 } },
                { id: "suco-vale", nome: "🥤 Suco de Uva", descricao: "Suco natural de uva.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        }
    },

    // ==================== PELOTAS - 10 RESTAURANTES ====================
    "Pelotas": {
        // ========== 1. CENTRO HISTÓRICO - CONFEITARIA TRADICIONAL ==========
        "pelotas-confeitaria": {
            id: "pelotas-confeitaria",
            nome: "🍬 Confeitaria Pelotense",
            endereco: "Rua XV de Novembro, 200 - Centro Histórico, Pelotas",
            horario: "08h às 20h",
            telefone: "(53) 3222-1111",
            descricao: "Confeitaria tradicional com famosos doces de pelotas. Quindins, camafeus, bem-casados e tortas. Tradição desde 1950.",
            tipo: ["doces", "confeitaria", "tradicional", "familiar", "turístico"],
            preco_medio: 30,
            estrelas: 4.8,
            avaliacoes: 4320,
            cardapio: [
                { id: "camafeu-pelotas", nome: "🍬 Camafeu Pelotense", descricao: "Doce tradicional de Pelotas: massapão coberto com ovos e açúcar.", preco: 6, recuperacao: { fome: 10, felicidade: 18, energia: 5 } },
                { id: "quindim-pelotas", nome: "🍮 Quindim Pelotense", descricao: "Quindim tradicional de Pelotas.", preco: 8, recuperacao: { fome: 12, felicidade: 16, energia: 5 } },
                { id: "bem-casado-pelotas", nome: "🍪 Bem-Casado", descricao: "Dois discos de massa com recheio de doce de leite.", preco: 7, recuperacao: { fome: 14, felicidade: 16, energia: 4 } },
                { id: "torta-morango-pelotas", nome: "🍰 Torta de Morango", descricao: "Torta de morango com suspiro.", preco: 14, recuperacao: { fome: 18, felicidade: 18, energia: 6 } },
                { id: "cafe-confeitaria", nome: "☕ Café da Confeitaria", descricao: "Café especial da casa.", preco: 8, recuperacao: { sede: 10, energia: 12, felicidade: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - CHURRASCARIA ==========
        "pelotas-churrascaria": {
            id: "pelotas-churrascaria",
            nome: "🥩 Churrascaria Pelotas",
            endereco: "Av. Juscelino Kubitschek, 1000 - Centro, Pelotas",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(53) 3333-2222",
            descricao: "Churrascaria tradicional de Pelotas. Rodízio de carnes e buffet. Ambiente familiar e acolhedor.",
            tipo: ["churrascaria", "gaucha", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "rodizio-pelotas", nome: "🥩 Rodízio Pelotas", descricao: "Rodízio com 12 cortes de carne: picanha, costela, maminha, fraldinha, coração.", preco: 75, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-pelotas", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 52, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "costela-pelotas", nome: "🍖 Costela Assada", descricao: "Costela assada lentamente.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-pelotas", nome: "🥗 Buffet Self-Service", descricao: "Saladas, massas, legumes e sobremesas.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-uva-pelotas", nome: "🥤 Suco de Uva", descricao: "Suco natural de uva.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. FRAGATA - FRUTOS DO MAR ==========
        "pelotas-fragata": {
            id: "pelotas-fragata",
            nome: "🐟 Restaurante Fragata",
            endereco: "Rua Domingos de Almeida, 500 - Fragata, Pelotas",
            horario: "11h às 22h",
            telefone: "(53) 3444-3333",
            descricao: "Especialidade em frutos do mar. Peixes frescos e camarões. Ambiente familiar e aconchegante.",
            tipo: ["frutos-do-mar", "brasileira", "familiar"],
            preco_medio: 60,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "camarao-fragata", nome: "🍤 Camarão Grelhado", descricao: "Camarões grelhados na manteiga com alho.", preco: 52, recuperacao: { fome: 60, felicidade: 22, energia: 14 } },
                { id: "peixe-fragata", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe grelhado com legumes.", preco: 42, recuperacao: { fome: 55, felicidade: 18, energia: 12 } },
                { id: "moqueca-fragata", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 58, recuperacao: { fome: 68, felicidade: 24, energia: 16 } },
                { id: "camarao-milanesa", nome: "🍤 Camarão à Milanesa", descricao: "Camarões empanados fritos.", preco: 48, recuperacao: { fome: 58, felicidade: 20, energia: 12 } },
                { id: "suco-maracuja-fragata", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - PIZZARIA ==========
        "pelotas-pizzaria": {
            id: "pelotas-pizzaria",
            nome: "🍕 Pizzaria Pelotas",
            endereco: "Rua Andrade Neves, 300 - Centro, Pelotas",
            horario: "18h às 23h30",
            telefone: "(53) 3555-4444",
            descricao: "Pizzaria tradicional da cidade. Massa fina e forno à lenha. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                { id: "pizza-mussarela-pel", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pel", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pel", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-pel", nome: "🥟 Calzone", descricao: "Pizza fechada recheada.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-pel-pizza", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. CENTRO - BOTECO ==========
        "pelotas-boteco": {
            id: "pelotas-boteco",
            nome: "🍺 Boteco Pelotense",
            endereco: "Rua General Neto, 200 - Centro, Pelotas",
            horario: "17h às 02h",
            telefone: "(53) 3666-5555",
            descricao: "Boteco tradicional no centro de Pelotas. Petiscos fartos, chopp gelado e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "xis-boteco-pel", nome: "🥪 Xis Pelotense", descricao: "Xis gaúcho tradicional.", preco: 28, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "porcao-calabresa-pel", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 35, felicidade: 12, energia: 6 } },
                { id: "torresmo-pel", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 20, recuperacao: { fome: 28, felicidade: 10, energia: 5 } },
                { id: "batata-pel", nome: "🍟 Batata Frita", descricao: "Batata frita crocante.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "chopp-pel", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 9, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 6. SHOPPING PELOTAS ==========
        "pelotas-shopping": {
            id: "pelotas-shopping",
            nome: "🛍️ Shopping Pelotas - Food Court",
            endereco: "Av. Fernando Osório, 1000 - Centro, Pelotas",
            horario: "10h às 22h",
            telefone: "(53) 3777-6666",
            descricao: "Praça de alimentação do Shopping Pelotas com opções rápidas.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-pelotas", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pelotas", nome: "🇸🇾 Habib's", descricao: "Esfihas e quibes.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pelotas", nome: "🥢 China Fast", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pelotas", nome: "🍣 Sushi Fast", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-pelotas-shop", nome: "🥤 Suco Natural", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 7. CENTRO - CAFETERIA ==========
        "pelotas-cafe": {
            id: "pelotas-cafe",
            nome: "☕ Café Pelotas",
            endereco: "Rua Sete de Setembro, 150 - Centro, Pelotas",
            horario: "08h às 20h",
            telefone: "(53) 3888-7777",
            descricao: "Cafeteria charmosa no centro histórico. Cafés especiais, bolos e salgados.",
            tipo: ["cafeteria", "tradicional", "doces"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "cafe-especial-pel", nome: "☕ Café Especial", descricao: "Café 100% arábica.", preco: 9, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-pel", nome: "🍰 Cuca", descricao: "Cuca de banana.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "pao-queijo-pel", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quentinho.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "torta-pel", nome: "🍰 Torta de Limão", descricao: "Torta de limão.", preco: 12, recuperacao: { fome: 15, felicidade: 16, energia: 5 } },
                { id: "suco-pel-cafe", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 8. BARRO - HAMBURGUERIA ==========
        "pelotas-hamburgueria": {
            id: "pelotas-hamburgueria",
            nome: "🍔 Hamburgueria Pelotas",
            endereco: "Av. Bento Gonçalves, 800 - Barro, Pelotas",
            horario: "18h às 23h",
            telefone: "(53) 3999-8888",
            descricao: "Hamburgueria artesanal com opções vegetarianas. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-pel", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo smash com cheddar.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-pel", nome: "🌱 Vegan Burger", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 14 } },
                { id: "batata-pel-hamb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-pel", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "milkshake-pel", nome: "🥤 Milkshake", descricao: "Milkshake de chocolate.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 9. TRÊS VENDAS - COLONIAL ==========
        "pelotas-tres-vendas": {
            id: "pelotas-tres-vendas",
            nome: "🏠 Restaurante Três Vendas",
            endereco: "Av. Três Vendas, 500 - Três Vendas, Pelotas",
            horario: "11h às 21h",
            telefone: "(53) 4000-9999",
            descricao: "Comida caseira e colonial. Pratos típicos gaúchos e massas. Ambiente familiar.",
            tipo: ["brasileira", "colonial", "familiar", "caseiro"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "prato-feito-tv", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, carne, farofa, salada.", preco: 28, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "galeto-tv", nome: "🍗 Galeto", descricao: "Galeto assado com polenta.", preco: 32, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "macarronada-tv", nome: "🍝 Macarronada", descricao: "Macarrão com molho bolonhesa.", preco: 25, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "sopa-tv", nome: "🥣 Sopa do Dia", descricao: "Sopa de legumes.", preco: 18, recuperacao: { fome: 35, energia: 12, felicidade: 8 } },
                { id: "suco-tv", nome: "🥤 Suco Natural", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "pelotas-rodoviaria": {
            id: "pelotas-rodoviaria",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Presidente Vargas, 1000 - Centro, Pelotas",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-pel", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-pel-rod", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pel", nome: "🍗 Coxinha", descricao: "Coxinha de frango.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pel-rod", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-pel-rod", nome: "☕ Café", descricao: "Café preto.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesRS;