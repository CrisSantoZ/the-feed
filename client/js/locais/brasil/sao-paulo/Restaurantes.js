export const restaurantesSP = {
    // ==================== SÃO PAULO (CAPITAL) - VERSÃO EXTENSA ====================
    "São Paulo": {
        // ========== REGIÃO DA PAULISTA / JARDINS ==========
        "restaurante-paulistano": {
            id: "restaurante-paulistano",
            nome: "🍽️ Restaurante Paulistano",
            endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo",
            horario: "11h às 23h (terça a domingo)",
            telefone: "(11) 3123-4567",
            descricao: "Tradicional restaurante da culinária paulista fundado em 1952. Ambiente familiar e acolhedor, frequentado por famílias e executivos. Especialidade em comida caseira de qualidade.",
            tipo: ["brasileira", "paulista", "tradicional", "familiar", "executivos"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1250,
            cardapio: [
                { id: "virado-paulista", nome: "🥘 Virado à Paulista", descricao: "Arroz, feijão, bisteca suína, ovo frito, couve refogada, farofa de banana e banana à milanesa. O prato mais tradicional de SP!", preco: 48, recuperacao: { fome: 55, energia: 18, felicidade: 12 } },
                { id: "feijoada-paulista", nome: "🍲 Feijoada Completa", descricao: "Feijoada com carnes nobres (carne seca, paio, costela, lingüiça), servida com arroz, couve refogada, farofa, laranja e torresmo. Serve 2 pessoas.", preco: 68, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "pastel-paulista", nome: "🥟 Pastel de Feira", descricao: "Pastel crocante recheado a escolha (carne, queijo, pizza).", preco: 14, recuperacao: { fome: 20, felicidade: 8 } },
                { id: "caldo-cana-paulista", nome: "🥤 Caldo de Cana", descricao: "Caldo de cana natural com limão.", preco: 10, recuperacao: { sede: 25, energia: 8 } }
            ]
        },
        
        "jardins-ristorante": {
            id: "jardins-ristorante",
            nome: "🍝 Jardins Ristorante",
            endereco: "Rua Augusta, 2000 - Jardins, São Paulo",
            horario: "12h às 00h (fecha terça)",
            telefone: "(11) 3456-7890",
            descricao: "Culinária italiana sofisticada em ambiente romântico. Chef italiano premiado. Perfeito para encontros a dois. Importante carta de vinhos.",
            tipo: ["italiana", "massas", "romântico", "vinhos", "premium"],
            preco_medio: 120,
            estrelas: 4.8,
            avaliacoes: 890,
            cardapio: [
                { id: "carbonara-jardins", nome: "🍝 Fettuccine Carbonara", descricao: "Massa fresca com molho cremoso de ovos, queijo pecorino, panceta crocante e pimenta preta.", preco: 78, recuperacao: { fome: 50, energia: 12, felicidade: 18 } },
                { id: "ossobuco-jardins", nome: "🍖 Ossobuco alla Milanese", descricao: "Ossobuco cozido lentamente com vinho branco. Acompanha risoto de açafrão.", preco: 110, recuperacao: { fome: 75, energia: 28, felicidade: 28 } },
                { id: "tiramisu-jardins", nome: "🍰 Tiramisu Clássico", descricao: "Sobremesa italiana com camadas de biscoitos champagne, café e creme de mascarpone.", preco: 28, recuperacao: { fome: 15, felicidade: 22 } },
                { id: "vinho-jardins", nome: "🍷 Vinho Tinto Italiano", descricao: "Taça de vinho italiano importado (Chianti ou Barolo).", preco: 35, recuperacao: { sede: 15, felicidade: 15, energia: -5 } }
            ]
        },
        
        "jardins-frances": {
            id: "jardins-frances",
            nome: "🇫🇷 Le Bistrot Parisien",
            endereco: "Rua Haddock Lobo, 1500 - Jardins, São Paulo",
            horario: "12h às 15h | 19h às 23h (fecha domingo)",
            telefone: "(11) 4567-8901",
            descricao: "Autêntico bistrô francês com decoração parisiense. Cozinha clássica francesa preparada por chef francês. Carta de vinhos franceses.",
            tipo: ["francesa", "premium", "romântico", "vinhos", "gastronomico"],
            preco_medio: 150,
            estrelas: 4.9,
            avaliacoes: 620,
            cardapio: [
                { id: "escargots", nome: "🐌 Escargots à Bourguignonne", descricao: "Caracóis servidos na concha com manteiga de alho e ervas.", preco: 48, recuperacao: { fome: 25, felicidade: 22, energia: 8 } },
                { id: "boeuf-bourguignon", nome: "🍲 Boeuf Bourguignon", descricao: "Carne cozida lentamente em vinho tinto com cogumelos, cebolas e bacon.", preco: 98, recuperacao: { fome: 80, energia: 28, felicidade: 30 } },
                { id: "creme-brulee", nome: "🍮 Crème Brûlée", descricao: "Clássica sobremesa francesa com crosta de açúcar queimado.", preco: 22, recuperacao: { fome: 12, felicidade: 20, energia: 6 } }
            ]
        },
        
        // ========== VILA MADALENA / PINHEIROS ==========
        "vila-madalena-burguer": {
            id: "vila-madalena-burguer",
            nome: "🍔 Vila Burguer Artesanal",
            endereco: "Rua Aspicuelta, 500 - Vila Madalena, São Paulo",
            horario: "18h às 02h (happy hour até 20h)",
            telefone: "(11) 5678-9012",
            descricao: "Hamburgueria artesanal com opções vegetarianas e veganas. Ambiente descolado com grafites e música ao vivo aos fins de semana. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "vegana", "happy-hour", "musica-ao-vivo", "cervejaria"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 2300,
            cardapio: [
                { id: "classic-burger-vm", nome: "🍔 Classic Burger", descricao: "Hambúrguer 180g de angus, queijo cheddar, alface, tomate, cebola caramelizada. Acompanha batata frita.", preco: 42, recuperacao: { fome: 55, energia: 22, felicidade: 18 } },
                { id: "vegan-burger-vm", nome: "🌱 Vegan Burger", descricao: "Hambúrguer de grão-de-bico e quinoa, queijo vegano, abacate, rúcula. Acompanha batata doce.", preco: 46, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-truffle-vm", nome: "🍟 Batata Trufada", descricao: "Batatas rústicas com azeite trufado, alecrim e parmesão.", preco: 28, recuperacao: { fome: 30, felicidade: 12 } },
                { id: "milkshake-vm", nome: "🥤 Milkshake Artesanal", descricao: "Milkshake cremoso nos sabores: chocolate belga, morango ou doce de leite.", preco: 22, recuperacao: { sede: 20, felicidade: 18 } },
                { id: "cerveja-artesanal-vm", nome: "🍺 Cerveja Artesanal", descricao: "Chope ou garrafa de cerveja artesanal (IPA, Pilsen, Weiss).", preco: 18, recuperacao: { sede: 20, felicidade: 12, energia: -5 } }
            ]
        },
        
        "vila-madalena-pizza": {
            id: "vila-madalena-pizza",
            nome: "🍕 Pizza da Vila",
            endereco: "Rua Harmonia, 300 - Vila Madalena, São Paulo",
            horario: "19h às 01h (quarta a domingo)",
            telefone: "(11) 6789-0123",
            descricao: "Pizzaria artesanal com forno à lenha. Massa fermentada naturalmente. Ambiente intimista e acolhedor.",
            tipo: ["pizzaria", "italiana", "artesanal", "romântico"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 1450,
            cardapio: [
                { id: "margherita-vm", nome: "🍕 Pizza Margherita", descricao: "Molho de tomate fresco, mussarela de búfala, manjericão, azeite.", preco: 52, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "pepperoni-vm", nome: "🍕 Pizza Pepperoni", descricao: "Molho, mussarela, pepperoni importado, orégano.", preco: 58, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "prosciutto-vm", nome: "🍕 Pizza Prosciutto", descricao: "Molho, mussarela, presunto de parma, rúcula, parmesão.", preco: 65, recuperacao: { fome: 60, energia: 18, felicidade: 18 } }
            ]
        },
        
        "vila-madalena-mexicana": {
            id: "vila-madalena-mexicana",
            nome: "🌮 La Taqueria Madalena",
            endereco: "Rua Fradique Coutinho, 800 - Vila Madalena, São Paulo",
            horario: "12h às 00h (happy hour 18h-20h)",
            telefone: "(11) 7890-1234",
            descricao: "Autêntica cozinha mexicana com tacos, burritos e margaritas. Ambiente colorido e descontraído. Música latina.",
            tipo: ["mexicana", "happy-hour", "bebidas", "casual", "musica-ao-vivo"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "tacos-ala-carte", nome: "🌮 Tacos à la Carte (3 unid)", descricao: "Três tacos com opções: carne asada, frango, al pastor ou vegetariano.", preco: 38, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "burrito-mex", nome: "🌯 Burrito Gigante", descricao: "Burrito recheado com arroz, feijão, carne, guacamole, sour cream e queijo.", preco: 45, recuperacao: { fome: 70, felicidade: 20, energia: 12 } },
                { id: "margarita-mex", nome: "🍸 Margarita Clássica", descricao: "Coquetel de tequila com limão e sal na borda.", preco: 28, recuperacao: { sede: 15, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== LIBERDADE ==========
        "liberdade-asian-food": {
            id: "liberdade-asian-food",
            nome: "🥢 Liberdade Asian Food",
            endereco: "Rua Galvão Bueno, 300 - Liberdade, São Paulo",
            horario: "11h às 22h (fecha quarta)",
            telefone: "(11) 8901-2345",
            descricao: "Culinária asiática autêntica. Especialidades japonesas, chinesas e coreanas. Ambiente temático com decoração oriental. Muito frequentado por turistas e moradores.",
            tipo: ["japonesa", "chinesa", "coreana", "asiatica", "sushi", "turístico"],
            preco_medio: 60,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "lamen-liberdade", nome: "🍜 Lamen Tradicional", descricao: "Macarrão fresco em caldo de porco (tonkotsu), com ovo marinado (ajitsuke), nori, cebolinha e chashu (porco assado).", preco: 48, recuperacao: { fome: 60, energia: 22, felicidade: 22 } },
                { id: "sushi-combo-lib", nome: "🍣 Sushi Combo Liberdade", descricao: "10 peças variadas (salmão, atum, peixe branco) + 6 hot rolls + 6 uramakis. Acompanha missô shiro, wasabi e gengibre.", preco: 75, recuperacao: { fome: 75, energia: 25, felicidade: 32 } },
                { id: "bibimbap-lib", nome: "🥘 Bibimbap Coreano", descricao: "Arroz com legumes salteados, carne bovina, ovo frito e pasta de pimenta coreana (gochujang).", preco: 52, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "gyoza-lib", nome: "🥟 Gyoza (6 unidades)", descricao: "Pastéis japoneses recheados com carne de porco e legumes, grelhados e cozidos no vapor.", preco: 25, recuperacao: { fome: 28, felicidade: 12 } },
                { id: "yakitori-lib", nome: "🍢 Yakitori (5 espetos)", descricao: "Espetinhos de frango grelhados com molho tare.", preco: 28, recuperacao: { fome: 30, felicidade: 12 } }
            ]
        },
        
        "liberdade-chinesa": {
            id: "liberdade-chinesa",
            nome: "🐉 Grande Palácio Chinês",
            endereco: "Rua da Glória, 200 - Liberdade, São Paulo",
            horario: "11h às 23h (todos os dias)",
            telefone: "(11) 9012-3456",
            descricao: "Autêntica culinária chinesa da região de Cantão. Pato à Pequim, dim sum e frango xadrez preparados por chefs chineses.",
            tipo: ["chinesa", "asiatica", "premium", "familiar", "turístico"],
            preco_medio: 70,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "pato-pequim", nome: "🦆 Pato à Pequim", descricao: "Pato assado com pele crocante, servido com panquecas finas, molho hoisin e cebolinhas.", preco: 95, recuperacao: { fome: 85, felicidade: 32, energia: 22 } },
                { id: "dim-sum-variados", nome: "🥟 Dim Sum Variados (8 unid)", descricao: "Seleção de bolinhos cozidos no vapor: har gow (camarão), siu mai (porco), bao (porco)", preco: 42, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "frango-xadrez", nome: "🍗 Frango Xadrez", descricao: "Frango salteado com castanhas de caju, pimentões e cebola.", preco: 52, recuperacao: { fome: 60, felicidade: 18, energia: 14 } }
            ]
        },
        
        // ========== CENTRO (MERCADÃO) ==========
        "mercado-municipal": {
            id: "mercado-municipal",
            nome: "🏛️ Mercado Municipal - Mercadão",
            endereco: "Rua da Cantareira, 306 - Centro, São Paulo",
            horario: "6h às 18h",
            telefone: "(11) 0123-4567",
            descricao: "Famoso pelo sanduíche de mortadela e pastel de bacalhau. Um dos pontos turísticos mais famosos de SP. Fundado em 1933, o Mercadão é parada obrigatória.",
            tipo: ["brasileira", "lanches", "mercado", "turístico", "tradicional", "historico"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 8500,
            cardapio: [
                { id: "sanduiche-mortadela", nome: "🥪 Sanduíche de Mortadela", descricao: "Famoso sanduíche de mortadela com queijo. Camadas generosas de mortadela, queijo e pão francês.", preco: 38, recuperacao: { fome: 60, energia: 22, felicidade: 22 } },
                { id: "pastel-bacalhau", nome: "🥟 Pastel de Bacalhau", descricao: "Pastel crocante recheado com bacalhau desfiado, azeitona e cebola.", preco: 22, recuperacao: { fome: 28, felicidade: 12 } },
                { id: "empada-mercadao", nome: "🥧 Empada Palmito", descricao: "Empada recheada com palmito e catupiry.", preco: 15, recuperacao: { fome: 20, felicidade: 8 } },
                { id: "pao-mortadela", nome: "🥖 Pão com Mortadela", descricao: "Versão menor do famoso sanduíche.", preco: 22, recuperacao: { fome: 35, felicidade: 10 } }
            ]
        },
        
        "centro-portuguesa": {
            id: "centro-portuguesa",
            nome: "🇵🇹 Adega Portuguesa",
            endereco: "Rua 25 de Março, 500 - Centro, São Paulo",
            horario: "11h às 23h (fecha domingo)",
            telefone: "(11) 1234-5678",
            descricao: "Autêntica cozinha portuguesa no coração de SP. Especialidades em bacalhau, sardinhas e vinhos do Porto. Ambiente rústico e acolhedor.",
            tipo: ["portuguesa", "tradicional", "vinhos", "familiar", "massas"],
            preco_medio: 85,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "bacalhau-bras", nome: "🐟 Bacalhau à Brás", descricao: "Bacalhau desfiado com batata palha, ovos mexidos, cebola e azeitona.", preco: 78, recuperacao: { fome: 70, felicidade: 22, energia: 16 } },
                { id: "sardinha-assada", nome: "🐟 Sardinha Assada", descricao: "Sardinhas frescas assadas na brasa, acompanhadas de batata cozida e pimentão.", preco: 52, recuperacao: { fome: 60, felicidade: 18, energia: 12 } },
                { id: "pasteis-nata", nome: "🥧 Pastéis de Nata", descricao: "Pasteis de Belém artesanais, quentinhos.", preco: 12, recuperacao: { fome: 12, felicidade: 15, energia: 4 } }
            ]
        },
        
        // ========== ZONA SUL (MOEMA/BROOKLIN/ITACIM) ==========
        "moema-pizzaria": {
            id: "moema-pizzaria",
            nome: "🍕 Pizzaria Moema",
            endereco: "Av. Ibirapuera, 1500 - Moema, São Paulo",
            horario: "18h às 00h (todos os dias)",
            telefone: "(11) 2345-6789",
            descricao: "Pizzaria tradicional com forno à lenha. Mais de 30 sabores. Ambiente familiar e delivery rápido. Tradição desde 1988.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 3420,
            cardapio: [
                { id: "margherita-moema", nome: "🍕 Pizza Margherita", descricao: "Molho de tomate, mussarela, manjericão.", preco: 52, recuperacao: { fome: 55, energia: 18 } },
                { id: "pepperoni-moema", nome: "🍕 Pizza Pepperoni", descricao: "Molho, mussarela, pepperoni.", preco: 58, recuperacao: { fome: 60, energia: 18 } },
                { id: "portuguesa-moema", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 55, recuperacao: { fome: 58, energia: 18 } },
                { id: "calzone-moema", nome: "🥟 Calzone", descricao: "Pizza fechada recheada com presunto, mussarela e tomate.", preco: 45, recuperacao: { fome: 48, energia: 12 } }
            ]
        },
        
        "brooklin-churrascaria": {
            id: "brooklin-churrascaria",
            nome: "🥩 Churrascaria Brooklin",
            endereco: "Av. Roque Petroni Jr., 1000 - Brooklin, São Paulo",
            horario: "11h30 às 15h | 18h às 23h30",
            telefone: "(11) 3456-7890",
            descricao: "Churrascaria estilo rodízio com cortes nobres. Self-service de saladas incluso. Ambiente executivo e familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "executivos", "familiar"],
            preco_medio: 110,
            estrelas: 4.7,
            avaliacoes: 2100,
            cardapio: [
                { id: "rodizio-brooklin", nome: "🥩 Rodízio Completo", descricao: "Mais de 15 cortes de carne: picanha, maminha, fraldinha, costela, cordeiro, filet mignon.", preco: 99, recuperacao: { fome: 100, energia: 45, felicidade: 40 } },
                { id: "picanha-brooklin", nome: "🥩 Picanha Nobre", descricao: "Picanha grelhada na brasa, 300g. Acompanha arroz, farofa e vinagrete.", preco: 65, recuperacao: { fome: 70, energia: 28, felicidade: 22 } },
                { id: "buffet-brooklin", nome: "🥗 Buffet de Saladas", descricao: "Buffet self-service com saladas, frios, sushi e opções quentes.", preco: 55, recuperacao: { fome: 50, energia: 15 } }
            ]
        },
        
        "itacim-japones": {
            id: "itacim-japones",
            nome: "🍣 Sushi Itacim",
            endereco: "Av. Interlagos, 2000 - Itacim, São Paulo",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(11) 4567-8901",
            descricao: "Tradicional restaurante japonês no bairro de Itacim. Peixes frescos e ambiente familiar. Rodízio premiado.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar", "premium"],
            preco_medio: 85,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "rodizio-itacim", nome: "🍣 Rodízio Itacim", descricao: "Rodízio com 25 peças + temaki + hot roll. Sashimis variados e peças especiais.", preco: 79, recuperacao: { fome: 85, energia: 25, felicidade: 28 } },
                { id: "combinado-itacim", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, peixe branco, camarão.", preco: 62, recuperacao: { fome: 65, energia: 20, felicidade: 22 } }
            ]
        },
        
        "brooklin-arabe": {
            id: "brooklin-arabe",
            nome: "🧆 Al Balad Árabe",
            endereco: "Av. Nações Unidas, 15000 - Brooklin, São Paulo",
            horario: "11h às 23h (happy hour 18h-20h)",
            telefone: "(11) 5678-9012",
            descricao: "Autêntica culinária árabe libanesa. Esfihas, quibes, hommus e banquetes completos. Ambiente sofisticado e familiar.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "premium"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 1250,
            cardapio: [
                { id: "banquete-arabe", nome: "🍽️ Banquete Árabe", descricao: "Combo para 2 pessoas: hommus, babaganoush, tabule, kibe cru, esfihas, charme e sfihas.", preco: 95, recuperacao: { fome: 100, felicidade: 35, energia: 22 } },
                { id: "esfiha-carne", nome: "🥙 Esfiha de Carne (6 unid)", descricao: "Esfihas abertas com carne temperada, limão e hortelã.", preco: 32, recuperacao: { fome: 40, felicidade: 14, energia: 8 } },
                { id: "kibe-assado", nome: "🧆 Kibe Assado (4 unid)", descricao: "Kibe assado recheado com carne e queijo.", preco: 28, recuperacao: { fome: 35, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== ZONA NORTE (SANTANA/CASA VERDE) ==========
        "santana-esfiharia": {
            id: "santana-esfiharia",
            nome: "🇸🇾 Esfiharia Santana",
            endereco: "Av. Cruzeiro do Sul, 800 - Santana, São Paulo",
            horario: "10h às 22h",
            telefone: "(11) 6789-0123",
            descricao: "Especialidades árabes. Esfihas, quibes e sfihas abertas. Tradição desde 1985. Ambiente familiar.",
            tipo: ["árabe", "lanches", "familiar", "delivery", "tradicional"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 980,
            cardapio: [
                { id: "esfiha-carne-santana", nome: "🥙 Esfiha de Carne (4 unid)", descricao: "Esfihas abertas com carne moída temperada com hortelã.", preco: 25, recuperacao: { fome: 35, felicidade: 12 } },
                { id: "esfiha-queijo-santana", nome: "🥙 Esfiha de Queijo (4 unid)", descricao: "Esfihas fechadas com queijo derretido.", preco: 25, recuperacao: { fome: 35, felicidade: 12 } },
                { id: "kibe-santana", nome: "🧆 Kibe Frito (6 unidades)", descricao: "Kibe frito recheado com carne.", preco: 18, recuperacao: { fome: 25, felicidade: 10 } },
                { id: "sfiha-carne-santana", nome: "🥙 Sfiha de Carne (4 unid)", descricao: "Sfihas abertas com carne moída, tomate e cebola.", preco: 28, recuperacao: { fome: 38, felicidade: 12 } }
            ]
        },
        
        "casa-verde-pizzaria": {
            id: "casa-verde-pizzaria",
            nome: "🍕 Pizzaria Casa Verde",
            endereco: "Av. Casa Verde, 1000 - Casa Verde, São Paulo",
            horario: "18h às 00h (fecha segunda)",
            telefone: "(11) 7890-1234",
            descricao: "Pizzaria tradicional do bairro da Casa Verde. Massa fina e forno à lenha. Ambiente familiar desde 1992.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery", "tradicional"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-mussarela-cv", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 48, recuperacao: { fome: 55, energia: 16 } },
                { id: "pizza-calabresa-cv", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 52, recuperacao: { fome: 58, energia: 16 } },
                { id: "pizza-frango-cv", nome: "🍕 Pizza Frango com Catupiry", descricao: "Molho, mussarela, frango desfiado, catupiry.", preco: 55, recuperacao: { fome: 60, energia: 16 } }
            ]
        },
        
        // ========== ZONA LESTE (TATUAPÉ/ITAPUA) ==========
        "tatuape-sfiha": {
            id: "tatuape-sfiha",
            nome: "🇸🇾 Sfiha & Cia",
            endereco: "Rua Tuiuti, 500 - Tatuapé, São Paulo",
            horario: "9h às 23h",
            telefone: "(11) 8901-2345",
            descricao: "Tradicional esfiharia do Tatuapé. Frequentada pelo bairro. Massa leve e recheios caprichados.",
            tipo: ["árabe", "lanches", "familiar", "delivery"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 560,
            cardapio: [
                { id: "esfiha-mista-tatuape", nome: "🥙 Esfiha Mista (12 unidades)", descricao: "Sabores: carne, queijo, frango.", preco: 25, recuperacao: { fome: 35, felicidade: 12 } },
                { id: "quibe-cru-tatuape", nome: "🧆 Quibe Cru", descricao: "Quibe de carne crua com hortelã e cebola.", preco: 12, recuperacao: { fome: 15, felicidade: 6 } },
                { id: "kibe-assado-tatuape", nome: "🧆 Kibe Assado", descricao: "Kibe assado recheado com queijo.", preco: 10, recuperacao: { fome: 15, felicidade: 6 } }
            ]
        },
        
        "itapua-churrascaria": {
            id: "itapua-churrascaria",
            nome: "🥩 Churrascaria Itapuã",
            endereco: "Av. Itapuã, 800 - Itapuã, São Paulo",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(11) 9012-3456",
            descricao: "Churrascaria tradicional da Zona Leste. Cortes nobres e buffet completo. Preço justo e ambiente familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "popular"],
            preco_medio: 65,
            estrelas: 4.3,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-itapua", nome: "🥩 Rodízio Completão", descricao: "Rodízio com 12 cortes: picanha, maminha, fraldinha, alcatra, coração.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 32 } },
                { id: "picanha-itapua", nome: "🥩 Picanha Individual", descricao: "Picanha 250g com arroz, farofa e vinagrete.", preco: 48, recuperacao: { fome: 65, energia: 22, felicidade: 16 } }
            ]
        },
        
        // ========== AEROPORTO GUARULHOS (EXECUTIVOS) ==========
        "aeroporto-food-court": {
            id: "aeroporto-food-court",
            nome: "🍱 GRU Food Court",
            endereco: "Aeroporto de Guarulhos - Terminal 2, São Paulo",
            horario: "24h",
            telefone: "-",
            descricao: "Praça de alimentação do aeroporto com diversas opções rápidas. Aberto 24 horas.",
            tipo: ["fast-food", "aeroporto", "24h", "variado", "executivos"],
            preco_medio: 50,
            estrelas: 3.8,
            avaliacoes: 4300,
            cardapio: [
                { id: "mcdonalds-gru", nome: "🍔 McDonald's", descricao: "Hambúrguer, batata frita e refrigerante.", preco: 35, recuperacao: { fome: 45, energia: 12 } },
                { id: "habibs-gru", nome: "🇸🇾 Habib's", descricao: "Esfihas, quibes e sfihas.", preco: 30, recuperacao: { fome: 40, energia: 10 } },
                { id: "subway-gru", nome: "🥪 Subway", descricao: "Sanduíche artesanal com ingredientes frescos.", preco: 32, recuperacao: { fome: 40, energia: 10 } },
                { id: "starbucks-gru", nome: "☕ Starbucks", descricao: "Café expresso ou cappuccino.", preco: 12, recuperacao: { sede: 10, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== BAIRRO JARDIM ÂNGELA (PERIFERIA) ==========
        "jd-angela-lanchonete": {
            id: "jd-angela-lanchonete",
            nome: "🍔 Lanchonete do Zé",
            endereco: "Estrada da Baronesa, 2000 - Jardim Ângela, São Paulo",
            horario: "8h às 22h",
            telefone: "(11) 0123-4567",
            descricao: "Lanchonete tradicional do bairro. X-tudo, porções e sucos naturais. Frequentada por moradores locais.",
            tipo: ["lanches", "fast-food", "popular", "familiar", "tradicional"],
            preco_medio: 25,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "x-tudo-jda", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate.", preco: 22, recuperacao: { fome: 55, energia: 18 } },
                { id: "mistao-jda", nome: "🥪 Misto Quente", descricao: "Pão de forma com queijo e presunto.", preco: 8, recuperacao: { fome: 15, felicidade: 6 } },
                { id: "suco-laranja-jda", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 20, energia: 6 } }
            ]
        },
        
        // ========== BAIRRO SÃO MIGUEL (ZONA LESTE) ==========
        "sao-miguel-boteco": {
            id: "sao-miguel-boteco",
            nome: "🍺 Boteco São Miguel",
            endereco: "Rua São Miguel, 500 - São Miguel Paulista, São Paulo",
            horario: "11h às 00h (happy hour até 20h)",
            telefone: "(11) 1234-5678",
            descricao: "Boteco tradicional da Zona Leste. Petiscos fartos, chopp gelado e música ao vivo nos fins de semana.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "popular"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 1120,
            cardapio: [
                { id: "porcao-calabresa-sm", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com cebola e pimentão.", preco: 28, recuperacao: { fome: 40, felicidade: 14 } },
                { id: "porcao-fritas-sm", nome: "🍟 Porção de Batata Frita", descricao: "Batata frita crocante com cheddar.", preco: 22, recuperacao: { fome: 28, felicidade: 10 } },
                { id: "chopp-sm", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 8, recuperacao: { sede: 20, felicidade: 10, energia: -4 } }
            ]
        }
    },

    // ==================== CAMPINAS - VERSÃO EXTENSA ====================
    "Campinas": {
        // --- CENTRO ---
        "cantina-centro": {
            id: "cantina-centro",
            nome: "🍝 Cantina do Centro",
            endereco: "Rua 13 de Maio, 500 - Centro, Campinas",
            horario: "11h30 às 15h | 18h às 23h (fecha domingo)",
            telefone: "(19) 3123-4567",
            descricao: "Tradicional cantina italiana fundada em 1985. Comida caseira e atendimento familiar. Especialidade em massas frescas.",
            tipo: ["italiana", "massas", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-campinas", nome: "🍽️ Filé à Parmegiana", descricao: "Filé mignon empanado, coberto com molho de tomate caseiro, mussarela e presunto. Acompanha arroz e fritas.", preco: 52, recuperacao: { fome: 65, energia: 20, felicidade: 15 } },
                { id: "lasanha-campinas", nome: "🍝 Lasanha à Bolonhesa", descricao: "Camadas de massa fresca com molho bolonhesa, queijo parmesão e bechamel.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-campinas", nome: "🍲 Polenta Mole com Ragú", descricao: "Polenta cremosa servida com ragú de carne suína.", preco: 38, recuperacao: { fome: 50, energia: 15 } }
            ]
        },
        
        "cafe-campinas": {
            id: "cafe-campinas",
            nome: "☕ Café com Arte",
            endereco: "Av. Brasil, 1000 - Cambuí, Campinas",
            horario: "8h às 20h",
            telefone: "(19) 4567-8901",
            descricao: "Cafeteria aconchegante com opções de cafés especiais, brunch e sobremesas artesanais. Grãos próprios da região.",
            tipo: ["cafeteria", "brunch", "doces", "artesanal"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 1240,
            cardapio: [
                { id: "cafe-especial-camp", nome: "☕ Café Especial", descricao: "Café 100% arábica, torra média, origem Sul de Minas. Métodos: V60, prensa ou espresso.", preco: 12, recuperacao: { sede: 15, energia: 15, felicidade: 10 } },
                { id: "brunch-camp", nome: "🍳 Brunch Completão", descricao: "Pão artesanal, ovos mexidos, bacon, queijo, frutas, granola e suco detox.", preco: 45, recuperacao: { fome: 60, energia: 25, felicidade: 20 } },
                { id: "torta-limao-camp", nome: "🍰 Torta de Limão", descricao: "Torta com base de biscoito, mousse de limão siciliano e merengue.", preco: 15, recuperacao: { fome: 15, felicidade: 20 } }
            ]
        },
        
        // --- CAMBUÍ (BAIRRO NOBRE) ---
        "cambui-japones": {
            id: "cambui-japones",
            nome: "🍣 Restaurante Japonês Cambuí",
            endereco: "Rua Dr. Quirino, 200 - Cambuí, Campinas",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(19) 5678-9012",
            descricao: "Alta gastronomia japonesa. Peixes frescos e atendimento diferenciado. Rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 560,
            cardapio: [
                { id: "rodizio-japa-camp", nome: "🍣 Rodízio Premium", descricao: "Sashimis variados, uramakis, hot rolls, temakis e peças especiais.", preco: 89, recuperacao: { fome: 80, energia: 25, felicidade: 30 } },
                { id: "combinado-camp", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, camarão, kani.", preco: 65, recuperacao: { fome: 60, energia: 20, felicidade: 25 } }
            ]
        },
        
        "cambui-brasileira": {
            id: "cambui-brasileira",
            nome: "🇧🇷 Brasil Cambuí",
            endereco: "Rua Cel. Quirino, 500 - Cambuí, Campinas",
            horario: "11h às 23h",
            telefone: "(19) 6789-0123",
            descricao: "Cozinha brasileira contemporânea com ingredientes locais. Pratos premiados e ambiente sofisticado.",
            tipo: ["brasileira", "premium", "romântico", "gastronomico", "regional"],
            preco_medio: 90,
            estrelas: 4.7,
            avaliacoes: 890,
            cardapio: [
                { id: "moqueca-cambui", nome: "🍲 Moqueca Baiana", descricao: "Moqueca de peixe e camarão com azeite de dendê e leite de coco.", preco: 78, recuperacao: { fome: 80, felicidade: 28, energia: 18 } },
                { id: "carne-sol-cambui", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca cozida e manteiga de garrafa.", preco: 68, recuperacao: { fome: 75, felicidade: 22, energia: 16 } }
            ]
        },
        
        // --- BARÃO GERALDO (UNICAMP) ---
        "barao-boteco": {
            id: "barao-boteco",
            nome: "🍺 Boteco do Barão",
            endereco: "Av. Santa Isabel, 300 - Barão Geraldo, Campinas",
            horario: "11h às 02h (happy hour até 20h)",
            telefone: "(19) 7890-1234",
            descricao: "Point da galera da UNICAMP. Petiscos fartos, chop gelado e música ao vivo aos fins de semana.",
            tipo: ["boteco", "petiscos", "happy-hour", "universitario", "musica-ao-vivo"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 2100,
            cardapio: [
                { id: "porcao-fritas-barao", nome: "🍟 Porção de Batata Frita", descricao: "Batata frita crocante com cheddar e bacon.", preco: 22, recuperacao: { fome: 25, felicidade: 10 } },
                { id: "porcao-calabresa-barao", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com pimentão.", preco: 28, recuperacao: { fome: 35, felicidade: 12 } },
                { id: "chopp-barao", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 10, recuperacao: { sede: 25, felicidade: 10, energia: -5 } },
                { id: "xis-tradicional-barao", nome: "🥪 X-Tudo", descricao: "Sanduíche gigante com hambúrguer, queijo, presunto, ovo, batata palha.", preco: 28, recuperacao: { fome: 55, energia: 15 } }
            ]
        },
        
        "barao-vegetariano": {
            id: "barao-vegetariano",
            nome: "🌱 Vegetal Barão",
            endereco: "Rua Maria Monteiro, 800 - Barão Geraldo, Campinas",
            horario: "11h às 21h (fecha domingo)",
            telefone: "(19) 8901-2345",
            descricao: "Restaurante vegetariano e vegano muito popular entre alunos da UNICAMP. Buffet por quilo com opções integrais.",
            tipo: ["vegetariano", "vegano", "saudavel", "universitario", "buffet"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "buffet-kilo-veg", nome: "🥗 Buffet por Quilo", descricao: "Diversas opções vegetarianas e veganas, saladas, legumes grelhados e proteína vegetal.", preco: 42, recuperacao: { fome: 65, energia: 22, felicidade: 16 } },
                { id: "suco-detox-barao", nome: "🥤 Suco Detox", descricao: "Couve, limão, gengibre, hortelã e maçã.", preco: 10, recuperacao: { sede: 18, energia: 12, felicidade: 6 } }
            ]
        },
        
        // --- PARQUE DOM PEDRO (SHOPPING) ---
        "parque-dom-pedro": {
            id: "parque-dom-pedro",
            nome: "🍽️ Shopping Parque Dom Pedro - Food Court",
            endereco: "Av. Guilherme Campos, 500 - Jardim Santa Genebra, Campinas",
            horario: "10h às 22h",
            telefone: "(19) 9012-3456",
            descricao: "Maior shopping da América Latina. Praça de alimentação com todas as redes famosas.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 4500,
            cardapio: [
                { id: "outback-pdp", nome: "🇦🇺 Outback Steakhouse", descricao: "Carnes, massas e sobremesas.", preco: 45, recuperacao: { fome: 50, energia: 15 } },
                { id: "habibs-pdp", nome: "🇸🇾 Habib's", descricao: "Esfihas e quibes.", preco: 25, recuperacao: { fome: 30, energia: 10 } },
                { id: "mc-pdp", nome: "🍔 McDonald's", descricao: "Hambúrgueres tradicionais.", preco: 30, recuperacao: { fome: 35, energia: 10 } }
            ]
        },
        
        // --- JARDIM PROENÇA (BAIRRO) ---
        "proenca-pizzaria": {
            id: "proenca-pizzaria",
            nome: "🍕 Pizzaria Proença",
            endereco: "Rua Dr. Salles Oliveira, 500 - Jardim Proença, Campinas",
            horario: "18h às 00h (fecha segunda)",
            telefone: "(19) 0123-4567",
            descricao: "Pizzaria tradicional do bairro com forno à lenha. Massa fina e ingredientes de qualidade.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 60,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-pro", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 52, recuperacao: { fome: 55, energia: 16 } },
                { id: "pizza-prosciutto-pro", nome: "🍕 Pizza Prosciutto", descricao: "Molho, mussarela, presunto de parma, rúcula, parmesão.", preco: 65, recuperacao: { fome: 60, energia: 18, felicidade: 16 } }
            ]
        },
        
        // --- RODOVIÁRIA (VIAGENS) ---
        "rodoviaria-campinas": {
            id: "rodoviaria-campinas",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Dr. Moraes Salles, 1000 - Centro, Campinas",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando ou chegando.",
            tipo: ["fast-food", "rodoviaria", "viagem", "24h"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 890,
            cardapio: [
                { id: "sanduiche-camp", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango, queijo branco e alface.", preco: 15, recuperacao: { fome: 20, energia: 8 } },
                { id: "suco-camp", nome: "🥤 Suco Natural", descricao: "Suco de laranja ou limão.", preco: 8, recuperacao: { sede: 20, energia: 5 } }
            ]
        },
        
        // --- NOVA APARECIDA (PERIFERIA) ---
        "aparecida-lanchonete": {
            id: "aparecida-lanchonete",
            nome: "🍔 Lanchonete Aparecida",
            endereco: "Rua 25 de Agosto, 500 - Nova Aparecida, Campinas",
            horario: "8h às 22h",
            telefone: "(19) 1234-5678",
            descricao: "Lanchonete tradicional do bairro. X-tudo, sucos e salgados. Atendimento familiar.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.0,
            avaliacoes: 560,
            cardapio: [
                { id: "x-salada-apa", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 18, recuperacao: { fome: 40, energia: 12 } },
                { id: "coxinha-apa", nome: "🍗 Coxinha", descricao: "Coxinha de frango tradicional.", preco: 6, recuperacao: { fome: 12, felicidade: 6 } }
            ]
        }
    },

    // ==================== SANTOS - VERSÃO EXTENSA ====================
    "Santos": {
        // --- ORLA DA PRAIA (GONZAGA, BOQUEIRÃO) ---
        "peixaria-praia": {
            id: "peixaria-praia",
            nome: "🐟 Peixaria da Praia",
            endereco: "Av. Presidente Wilson, 2000 - Gonzaga, Santos",
            horario: "11h às 23h",
            telefone: "(13) 3456-7890",
            descricao: "Frutos do mar frescos com vista para o mar. Especialidade em moquecas, peixes grelhados e camarões. Tradição desde 1978. Ambiente familiar e aconchegante.",
            tipo: ["frutos-do-mar", "brasileira", "praia", "tradicional", "familiar"],
            preco_medio: 75,
            estrelas: 4.7,
            avaliacoes: 2150,
            cardapio: [
                { id: "moqueca-santos", nome: "🍲 Moqueca Capixaba", descricao: "Peixe fresco, camarão, lula e polvo cozidos com urucum, coentro e pimentão. Acompanha arroz e pirão.", preco: 85, recuperacao: { fome: 80, energia: 28, felicidade: 28 } },
                { id: "camarao-santos", nome: "🍤 Camarão Grelhado", descricao: "Camarões grelhados com alho e azeite, acompanhados de purê de batata e legumes salteados.", preco: 68, recuperacao: { fome: 60, energia: 22, felicidade: 18 } },
                { id: "casquinha-siri", nome: "🦀 Casquinha de Siri", descricao: "Entrada capixaba: carne de siri refogada com temperos e farofa.", preco: 32, recuperacao: { fome: 30, felicidade: 15 } },
                { id: "pastel-camarao-santos", nome: "🥟 Pastel de Camarão", descricao: "Pastel crocante recheado com camarão e catupiry.", preco: 22, recuperacao: { fome: 25, felicidade: 10 } }
            ]
        },
        
        "ostras-villas": {
            id: "ostras-villas",
            nome: "🦪 Ostras Villas",
            endereco: "Av. Bartolomeu de Gusmão, 100 - Aparecida, Santos",
            horario: "12h às 00h (fecha segunda)",
            telefone: "(13) 4567-8901",
            descricao: "Especializado em ostras frescas e frutos do mar. Importação direta do sul do país. Ambiente sofisticado e romântico. Carta de vinhos selecionada.",
            tipo: ["frutos-do-mar", "premium", "petiscos", "vinhos", "romantico"],
            preco_medio: 95,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "ostras-vivas", nome: "🦪 Ostras Frescas (6 unidades)", descricao: "Ostras abertas na hora, servidas com limão e molho especial.", preco: 55, recuperacao: { fome: 35, felicidade: 25 } },
                { id: "camarao-alho-ostras", nome: "🍤 Camarão ao Alho", descricao: "Camarões salteados no alho e azeite, com toque de páprica defumada.", preco: 65, recuperacao: { fome: 50, energia: 20, felicidade: 18 } },
                { id: "vinho-branco-ostras", nome: "🍷 Vinho Branco", descricao: "Taça de vinho branco chileno.", preco: 28, recuperacao: { sede: 15, felicidade: 15, energia: -5 } }
            ]
        },
        
        // --- CENTRO HISTÓRICO ---
        "cafe-santos": {
            id: "cafe-santos",
            nome: "☕ Café do Centro Histórico",
            endereco: "Rua XV de Novembro, 50 - Centro, Santos",
            horario: "8h às 19h",
            telefone: "(13) 5678-9012",
            descricao: "Café tradicional no centro histórico, frequentado por artistas e intelectuais. Ambiente clássico com decoração vintage.",
            tipo: ["cafeteria", "tradicional", "cultural", "doces"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-manha-santos", nome: "☕ Café da Manhã", descricao: "Café com leite, pão na chapa e manteiga.", preco: 15, recuperacao: { fome: 25, energia: 12 } },
                { id: "bolo-caseiro-santos", nome: "🍰 Bolo Caseiro", descricao: "Fatia de bolo caseiro: cenoura, chocolate ou fubá.", preco: 10, recuperacao: { fome: 18, felicidade: 12 } },
                { id: "sanduiche-natural-santos", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango desfiado, queijo branco, alface e tomate.", preco: 18, recuperacao: { fome: 30, energia: 10 } }
            ]
        },
        
        "centro-portuguesa-santos": {
            id: "centro-portuguesa-santos",
            nome: "🇵🇹 Tasca do Porto",
            endereco: "Rua do Comércio, 100 - Centro, Santos",
            horario: "11h às 23h (fecha domingo)",
            telefone: "(13) 6789-0123",
            descricao: "Autêntica tasca portuguesa no centro histórico. Especialidades em bacalhau, sardinhas e vinhos do Porto.",
            tipo: ["portuguesa", "tradicional", "vinhos", "familiar", "frutos-do-mar"],
            preco_medio: 80,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "bacalhau-gomes", nome: "🐟 Bacalhau à Gomes de Sá", descricao: "Bacalhau desfiado com batatas, ovos, cebola e azeitonas.", preco: 72, recuperacao: { fome: 70, energia: 22, felicidade: 20 } },
                { id: "sardinha-assada-porto", nome: "🐟 Sardinha Assada", descricao: "Sardinhas frescas assadas na brasa.", preco: 48, recuperacao: { fome: 55, energia: 18, felicidade: 15 } }
            ]
        },
        
        // --- JOSÉ MENINO (BAIRRO) ---
        "jose-menino": {
            id: "jose-menino",
            nome: "🍔 Point do José Menino",
            endereco: "Av. Ana Costa, 500 - José Menino, Santos",
            horario: "18h às 02h",
            telefone: "(13) 7890-1234",
            descricao: "Point da galera na praia. Hamburgueria artesanal, porções e chopp gelado. Música ao vivo aos fins de semana.",
            tipo: ["hamburguer", "petiscos", "happy-hour", "praia", "musica-ao-vivo"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 1430,
            cardapio: [
                { id: "x-tudo-jm", nome: "🍔 X-Tudo", descricao: "Hambúrguer com queijo, presunto, ovo, bacon, alface, tomate. Acompanha batata frita.", preco: 38, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "batata-cheddar-jm", nome: "🍟 Batata com Cheddar", descricao: "Batata frita coberta com cheddar e bacon crocante.", preco: 25, recuperacao: { fome: 30, felicidade: 12 } },
                { id: "porcao-calabresa-jm", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com pimentão.", preco: 30, recuperacao: { fome: 40, felicidade: 12 } },
                { id: "chopp-jm", nome: "🍺 Chopp Gelado", descricao: "Chopp claro tirado na hora.", preco: 12, recuperacao: { sede: 25, felicidade: 10, energia: -5 } }
            ]
        },
        
        // --- PONTA DA PRAIA ---
        "ponta-praia-pastel": {
            id: "ponta-praia-pastel",
            nome: "🥟 Pastel da Ponta",
            endereco: "Av. Almirante Cochrane, 1000 - Ponta da Praia, Santos",
            horario: "16h às 00h",
            telefone: "(13) 8901-2345",
            descricao: "Pastelaria famosa na Ponta da Praia. Pastéis gigantes e caldo de cana. Point dos surfistas e moradores.",
            tipo: ["lanches", "praia", "fast-food", "tradicional"],
            preco_medio: 30,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "pastel-carne-ponta", nome: "🥟 Pastel de Carne", descricao: "Pastel grande com carne moída temperada.", preco: 15, recuperacao: { fome: 28, felicidade: 8 } },
                { id: "pastel-queijo-ponta", nome: "🥟 Pastel de Queijo", descricao: "Pastel grande com queijo derretido.", preco: 15, recuperacao: { fome: 28, felicidade: 8 } },
                { id: "pastel-camarao-ponta", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão e catupiry.", preco: 20, recuperacao: { fome: 30, felicidade: 10 } },
                { id: "caldo-cana-ponta", nome: "🥤 Caldo de Cana", descricao: "Caldo de cana natural.", preco: 10, recuperacao: { sede: 25, energia: 8 } }
            ]
        },
        
        // --- PORTO ---
        "porto-santista": {
            id: "porto-santista",
            nome: "🍽️ Restaurante Porto Santista",
            endereco: "Av. Governador Mário Covas Júnior, 500 - Porto, Santos",
            horario: "11h às 23h",
            telefone: "(13) 9012-3456",
            descricao: "Especialidades portuguesas. Bacalhau, sardinhas e vinhos. Vista para o porto. Ambiente rústico e aconchegante.",
            tipo: ["portuguesa", "tradicional", "vinhos", "frutos-do-mar"],
            preco_medio: 85,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "bacalhau-porto", nome: "🐟 Bacalhau à Gomes de Sá", descricao: "Bacalhau desfiado com batatas, ovos, cebola e azeitonas.", preco: 75, recuperacao: { fome: 70, energia: 22, felicidade: 20 } },
                { id: "sardinha-porto", nome: "🐟 Sardinha Assada", descricao: "Sardinhas frescas assadas na brasa.", preco: 48, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "pastel-bacalhau-porto", nome: "🥟 Pastel de Bacalhau", descricao: "Pastel recheado com bacalhau desfiado.", preco: 18, recuperacao: { fome: 25, felicidade: 10 } }
            ]
        },
        
        // --- CANAL 3 (GONZAGA) ---
        "canal3-pizzaria": {
            id: "canal3-pizzaria",
            nome: "🍕 Pizzaria Canal 3",
            endereco: "Rua Alexandre Martins, 300 - Gonzaga, Santos",
            horario: "18h às 00h (todos os dias)",
            telefone: "(13) 0123-4567",
            descricao: "Pizzaria tradicional com vista para o Canal 3. Massa fina e ingredientes de qualidade. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar", "praia"],
            preco_medio: 60,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-margherita-c3", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 55, recuperacao: { fome: 55, energia: 18 } },
                { id: "pizza-portuguesa-c3", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 60, recuperacao: { fome: 58, energia: 18 } }
            ]
        },
        
        // --- RODOVIÁRIA SANTOS ---
        "rodoviaria-santos": {
            id: "rodoviaria-santos",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Ayrton Senna, 1000 - Vicente de Carvalho, Santos",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-santos", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8 } },
                { id: "suco-santos", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 5 } }
            ]
        }
    },

    // ==================== RIBEIRÃO PRETO - VERSÃO EXTENSA ====================
    "Ribeirão Preto": {
        // --- CENTRO ---
        "boteco-ribeirao": {
            id: "boteco-ribeirao",
            nome: "🍺 Boteco do Ribeirão",
            endereco: "Av. Nove de Julho, 800 - Centro, Ribeirão Preto",
            horario: "11h às 02h (happy hour até 20h)",
            telefone: "(16) 3456-7890",
            descricao: "Boteco autêntico com petiscos fartos, chopp gelado e música ao vivo. Point tradicional da cidade desde 1995.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 1890,
            cardapio: [
                { id: "porcao-calabresa-rp", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com cebola e pimentão.", preco: 32, recuperacao: { fome: 45, felicidade: 15 } },
                { id: "bolinho-bacalhau-rp", nome: "🍘 Bolinho de Bacalhau (6 unidades)", descricao: "Bolinho de bacalhau desfiado, com salsinha e cebolinha.", preco: 38, recuperacao: { fome: 40, felicidade: 18 } },
                { id: "coxinha-rp", nome: "🍗 Coxinha de Frango", descricao: "Coxinha crocante com catupiry.", preco: 12, recuperacao: { fome: 18, felicidade: 8 } },
                { id: "chopp-rp", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro, tirado na hora.", preco: 14, recuperacao: { sede: 30, felicidade: 15, energia: -5 } }
            ]
        },
        
        "cafe-ribeirao": {
            id: "cafe-ribeirao",
            nome: "☕ Café Cultura",
            endereco: "Rua São Sebastião, 200 - Centro, Ribeirão Preto",
            horario: "8h às 20h",
            telefone: "(16) 4567-8901",
            descricao: "Cafeteria charmosa no centro da cidade. Cafés especiais, brunch e doces artesanais. Ambiente instagramável.",
            tipo: ["cafeteria", "brunch", "doces", "artesanal"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 1240,
            cardapio: [
                { id: "cafe-especial-rp", nome: "☕ Café Especial", descricao: "Café 100% arábica, torra média. Métodos: espresso, V60 ou prensa francesa.", preco: 14, recuperacao: { sede: 15, energia: 15, felicidade: 10 } },
                { id: "brunch-rp", nome: "🍳 Brunch Completão", descricao: "Pão artesanal, ovos mexidos, bacon, queijo, frutas, granola e suco detox.", preco: 52, recuperacao: { fome: 65, energia: 25, felicidade: 22 } },
                { id: "torta-limao-rp", nome: "🍰 Torta de Limão", descricao: "Torta com base de biscoito, mousse de limão siciliano e merengue.", preco: 18, recuperacao: { fome: 18, felicidade: 18 } }
            ]
        },
        
        // --- JARDINÓPOLIS (BAIRRO NOBRE) ---
        "jardinopolis-pizzaria": {
            id: "jardinopolis-pizzaria",
            nome: "🍕 Pizzaria Jardinópolis",
            endereco: "Rua São Sebastião, 500 - Jardinópolis, Ribeirão Preto",
            horario: "18h às 00h (fecha segunda)",
            telefone: "(16) 5678-9012",
            descricao: "Pizzaria tradicional com forno à lenha. Massa fina e crocante. Ambiente familiar. Mais de 35 sabores.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 2340,
            cardapio: [
                { id: "pizza-margherita-rp", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão fresco.", preco: 55, recuperacao: { fome: 58, energia: 18, felicidade: 15 } },
                { id: "pizza-portuguesa-rp", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 62, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "pizza-calabresa-rp", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 58, recuperacao: { fome: 58, energia: 18, felicidade: 15 } },
                { id: "bruschetta-rp", nome: "🥖 Bruschetta", descricao: "Pão italiano com tomate, manjericão e azeite.", preco: 22, recuperacao: { fome: 25, felicidade: 10 } }
            ]
        },
        
        "jardinopolis-japones": {
            id: "jardinopolis-japones",
            nome: "🍣 Sushi Jardinópolis",
            endereco: "Av. Presidente Vargas, 1000 - Jardinópolis, Ribeirão Preto",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(16) 6789-0123",
            descricao: "Alta gastronomia japonesa. Peixes frescos e rodízio premium. Chef renomado formado no Japão.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-rp", nome: "🍣 Rodízio Premium", descricao: "Sashimis variados (salmão, atum, peixe branco), uramakis, hot rolls, temakis e peças especiais.", preco: 99, recuperacao: { fome: 85, energia: 25, felicidade: 35 } },
                { id: "combinado-rp", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, camarão, kani.", preco: 72, recuperacao: { fome: 65, energia: 20, felicidade: 25 } },
                { id: "teppanyaki-rp", nome: "🍳 Teppanyaki", descricao: "Preparado na chapa: filé mignon, camarão e legumes.", preco: 85, recuperacao: { fome: 65, energia: 22, felicidade: 22 } }
            ]
        },
        
        "jardinopolis-churrascaria": {
            id: "jardinopolis-churrascaria",
            nome: "🥩 Churrascaria Jardinópolis",
            endereco: "Av. Brasil, 2000 - Jardinópolis, Ribeirão Preto",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(16) 7890-1234",
            descricao: "Churrascaria tradicional com rodízio de carnes nobres. Ambiente executivo e familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "executivos", "premium"],
            preco_medio: 95,
            estrelas: 4.6,
            avaliacoes: 980,
            cardapio: [
                { id: "rodizio-rp-churras", nome: "🥩 Rodízio Executivo", descricao: "Mais de 12 cortes: picanha, maminha, fraldinha, cordeiro.", preco: 89, recuperacao: { fome: 95, energia: 40, felicidade: 35 } },
                { id: "picanha-rp", nome: "🥩 Picanha Especial", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 62, recuperacao: { fome: 70, energia: 25, felicidade: 18 } }
            ]
        },
        
        // --- PARQUE (SHOPPING BARÃO) ---
        "shopping-barao": {
            id: "shopping-barao",
            nome: "🛍️ Shopping Barão - Food Court",
            endereco: "Av. Cel. Fernando Ferreira Leite, 1000 - Parque, Ribeirão Preto",
            horario: "10h às 22h",
            telefone: "(16) 8901-2345",
            descricao: "Praça de alimentação do Shopping Barão. Várias opções rápidas.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 3420,
            cardapio: [
                { id: "mc-rp", nome: "🍔 McDonald's", descricao: "Hambúrguer e batata.", preco: 32, recuperacao: { fome: 40, energia: 12 } },
                { id: "subway-rp", nome: "🥪 Subway", descricao: "Sanduíche artesanal.", preco: 28, recuperacao: { fome: 35, energia: 10 } },
                { id: "pastelaria-rp", nome: "🥟 Pastelaria", descricao: "Pastéis variados.", preco: 18, recuperacao: { fome: 25, felicidade: 8 } }
            ]
        },
        
        // --- ZONA SUL (UNIVERSITÁRIA) ---
        "universitario-burguer": {
            id: "universitario-burguer",
            nome: "🍔 Universitário Burguer",
            endereco: "Av. Saudade, 500 - Jardim Universitário, Ribeirão Preto",
            horario: "19h às 02h",
            telefone: "(16) 9012-3456",
            descricao: "Point da galera universitária. Hambúrgueres artesanais, porções e chopp. Música ao vivo.",
            tipo: ["hamburguer", "universitario", "happy-hour", "musica-ao-vivo"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 1870,
            cardapio: [
                { id: "x-bacon-rp", nome: "🍔 X-Bacon", descricao: "Hambúrguer, queijo, bacon, alface, tomate. Acompanha batata.", preco: 38, recuperacao: { fome: 60, energia: 22, felicidade: 18 } },
                { id: "x-tudo-rp", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate.", preco: 45, recuperacao: { fome: 70, energia: 22, felicidade: 18 } },
                { id: "batata-bacon-rp", nome: "🍟 Batata com Bacon", descricao: "Batata frita com bacon e cheddar.", preco: 25, recuperacao: { fome: 30, felicidade: 10 } }
            ]
        },
        
        // --- RODOVIÁRIA ---
        "rodoviaria-ribeirao": {
            id: "rodoviaria-ribeirao",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Mogiana, 1000 - Centro, Ribeirão Preto",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-rp", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8 } },
                { id: "suco-rp", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 20, energia: 5 } }
            ]
        },
        
        // --- CAFEZÃO CULTURAL ---
        "cafezao-cultural": {
            id: "cafezao-cultural",
            nome: "☕ Café Cultural Ribeirão",
            endereco: "Rua Duque de Caxias, 300 - Centro, Ribeirão Preto",
            horario: "8h às 19h",
            telefone: "(16) 0123-4567",
            descricao: "Cafeteria cultural com exposições de arte local e música ambiente. Frequentado por artistas e intelectuais.",
            tipo: ["cafeteria", "cultural", "artesanal", "tradicional"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-especial-cult", nome: "☕ Café Especial", descricao: "Café da região, torra média.", preco: 12, recuperacao: { sede: 12, energia: 15, felicidade: 10 } },
                { id: "pao-queijo-cult", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo mineiro quentinho.", preco: 8, recuperacao: { fome: 12, felicidade: 8 } },
                { id: "broa-cult", nome: "🍞 Broa de Milho", descricao: "Broa de milho caseira.", preco: 6, recuperacao: { fome: 10, felicidade: 6 } }
            ]
        },
        
        // --- ITALIANA NO CENTRO ---
        "italiana-centro-rp": {
            id: "italiana-centro-rp",
            nome: "🍝 Cantina da Nonna",
            endereco: "Rua Américo Brasiliense, 500 - Centro, Ribeirão Preto",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(16) 1234-5678",
            descricao: "Cantina italiana tradicional com receitas da avó. Massas frescas e molhos caseiros.",
            tipo: ["italiana", "massas", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-centro-rp", nome: "🍽️ Filé à Parmegiana", descricao: "Filé mignon empanado com molho e queijo.", preco: 52, recuperacao: { fome: 65, energia: 20, felicidade: 15 } },
                { id: "lasanha-centro-rp", nome: "🍝 Lasanha Bolonhesa", descricao: "Camadas de massa com molho bolonhesa e bechamel.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 15 } }
            ]
        }
    },

    // ==================== SOROCABA - VERSÃO EXTENSA ====================
    "Sorocaba": {
        // --- CENTRO ---
        "sorocaba-churrascaria": {
            id: "sorocaba-churrascaria",
            nome: "🥩 Churrascaria Sorocabana",
            endereco: "Av. São Paulo, 500 - Centro, Sorocaba",
            horario: "11h30 às 15h | 18h às 23h (fecha domingo)",
            telefone: "(15) 3456-7890",
            descricao: "Churrasco gaúcho de qualidade. Rodízio com cortes nobres e buffet completo. Tradição desde 1985.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 85,
            estrelas: 4.5,
            avaliacoes: 1250,
            cardapio: [
                { id: "rodizio-sorocaba", nome: "🥩 Rodízio Completo", descricao: "Mais de 12 cortes de carne: picanha, maminha, fraldinha, costela, cordeiro.", preco: 89, recuperacao: { fome: 100, energia: 40, felicidade: 35 } },
                { id: "picanha-sorocaba", nome: "🥩 Picanha Nobre", descricao: "Picanha grelhada na brasa, 300g. Acompanha arroz, farofa e vinagrete.", preco: 62, recuperacao: { fome: 65, energia: 25, felicidade: 18 } },
                { id: "buffet-sorocaba", nome: "🍽️ Buffet Self-Service", descricao: "Comida caseira à vontade.", preco: 48, recuperacao: { fome: 55, energia: 15 } }
            ]
        },
        
        "sorocaba-pastelaria": {
            id: "sorocaba-pastelaria",
            nome: "🥟 Pastelaria Sorocabana",
            endereco: "Rua XV de Novembro, 200 - Centro, Sorocaba",
            horario: "9h às 20h",
            telefone: "(15) 4567-8901",
            descricao: "Pastéis artesanais e caldo de cana. Tradição na cidade há mais de 40 anos. Massa crocante e recheios caprichados.",
            tipo: ["lanches", "fast-food", "tradicional", "familiar"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "pastel-carne-soro", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante com carne moída temperada.", preco: 12, recuperacao: { fome: 22, felicidade: 8 } },
                { id: "pastel-queijo-soro", nome: "🥟 Pastel de Queijo", descricao: "Pastel crocante com queijo derretido.", preco: 12, recuperacao: { fome: 22, felicidade: 8 } },
                { id: "pastel-pizza-soro", nome: "🥟 Pastel de Pizza", descricao: "Pastel com molho, queijo e calabresa.", preco: 14, recuperacao: { fome: 25, felicidade: 10 } },
                { id: "caldo-cana-soro", nome: "🥤 Caldo de Cana", descricao: "Caldo de cana natural com limão.", preco: 9, recuperacao: { sede: 22, energia: 8 } }
            ]
        },
        
        "cafe-sorocaba": {
            id: "cafe-sorocaba",
            nome: "☕ Café Sorocaba",
            endereco: "Rua da Penha, 100 - Centro, Sorocaba",
            horario: "8h às 19h",
            telefone: "(15) 5678-9012",
            descricao: "Cafeteria tradicional no centro histórico. Pães caseiros, bolos e salgados. Ambiente aconchegante.",
            tipo: ["cafeteria", "tradicional", "doces", "artesanal"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 520,
            cardapio: [
                { id: "cafe-leite-soro", nome: "☕ Café com Leite", descricao: "Café coado com leite quente.", preco: 10, recuperacao: { sede: 12, energia: 12 } },
                { id: "pao-caseiro-soro", nome: "🍞 Pão Caseiro", descricao: "Pão caseiro com manteiga.", preco: 8, recuperacao: { fome: 15, felicidade: 10 } },
                { id: "bolo-chocolate-soro", nome: "🍰 Bolo de Chocolate", descricao: "Fatia de bolo caseiro.", preco: 12, recuperacao: { fome: 18, felicidade: 15 } }
            ]
        },
        
        // --- BAIRRO SANTA ROSÁLIA (VILA SANTANA) ---
        "santa-rosalia-pizzaria": {
            id: "santa-rosalia-pizzaria",
            nome: "🍕 Pizzaria Santa Rosália",
            endereco: "Av. Santa Rosália, 1000 - Santa Rosália, Sorocaba",
            horario: "18h às 00h (fecha segunda)",
            telefone: "(15) 6789-0123",
            descricao: "Pizzaria tradicional com forno à lenha. Massa fina e crocante. Ambiente aconchegante. Mais de 30 sabores.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 58,
            estrelas: 4.6,
            avaliacoes: 1430,
            cardapio: [
                { id: "pizza-margherita-sr", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela, manjericão.", preco: 52, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "pizza-portuguesa-sr", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, pimentão, azeitona.", preco: 58, recuperacao: { fome: 58, energia: 18, felicidade: 15 } },
                { id: "pizza-calabresa-sr", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 55, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "bruschetta-sr", nome: "🥖 Bruschetta", descricao: "Pão italiano com tomate, manjericão e azeite.", preco: 20, recuperacao: { fome: 25, felicidade: 10 } }
            ]
        },
        
        // --- BAIRRO JARDIM (SHOPPING) ---
        "shopping-sorocaba": {
            id: "shopping-sorocaba",
            nome: "🛍️ Shopping Iguatemi - Food Court",
            endereco: "Av. Prof. Izoraida Marques Peres, 400 - Campolim, Sorocaba",
            horario: "10h às 22h",
            telefone: "(15) 7890-1234",
            descricao: "Praça de alimentação do Shopping Iguatemi com diversas opções.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 2100,
            cardapio: [
                { id: "mc-soro", nome: "🍔 McDonald's", descricao: "Hambúrguer e batata.", preco: 32, recuperacao: { fome: 40, energia: 12 } },
                { id: "habibs-soro", nome: "🇸🇾 Habib's", descricao: "Esfihas e quibes.", preco: 28, recuperacao: { fome: 35, energia: 10 } },
                { id: "outback-soro", nome: "🇦🇺 Outback", descricao: "Carnes e massas.", preco: 52, recuperacao: { fome: 55, energia: 15, felicidade: 12 } }
            ]
        },
        
        // --- VILA GUILHERME (REGIAO UNIVERSITARIA) ---
        "universitario-sorocaba": {
            id: "universitario-sorocaba",
            nome: "🍔 Point Universitário",
            endereco: "Rua da Penha, 300 - Vila Guilherme, Sorocaba",
            horario: "18h às 02h (happy hour até 21h)",
            telefone: "(15) 8901-2345",
            descricao: "Point da galera da UNISO e UFSCar. Hamburgueria, porções e chopp. Música ao vivo aos fins de semana.",
            tipo: ["hamburguer", "universitario", "petiscos", "happy-hour", "musica-ao-vivo"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 1890,
            cardapio: [
                { id: "x-tudo-uni", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate. Acompanha batata.", preco: 38, recuperacao: { fome: 65, energia: 22, felicidade: 18 } },
                { id: "porcao-fritas-uni", nome: "🍟 Porção de Batata", descricao: "Batata frita crocante.", preco: 20, recuperacao: { fome: 25, felicidade: 10 } },
                { id: "porcao-calabresa-uni", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada.", preco: 28, recuperacao: { fome: 38, felicidade: 12 } },
                { id: "chopp-uni", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 12, recuperacao: { sede: 25, felicidade: 10, energia: -5 } }
            ]
        },
        
        // --- JARDIM SIMUS (BAIRRO) ---
        "simus-japones": {
            id: "simus-japones",
            nome: "🍣 Sushi Simus",
            endereco: "Av. Ipanema, 800 - Jardim Simus, Sorocaba",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(15) 9012-3456",
            descricao: "Restaurante japonês familiar com rodízio acessível. Peixes frescos e ambiente aconchegante.",
            tipo: ["japonesa", "sushi", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "rodizio-simus", nome: "🍣 Rodízio Simus", descricao: "Rodízio com 20 peças + temaki. Sashimis e uramakis.", preco: 59, recuperacao: { fome: 80, energia: 24, felicidade: 26 } },
                { id: "combinado-simus", nome: "🍱 Combinado Simus", descricao: "15 peças variadas: salmão, atum, kani.", preco: 48, recuperacao: { fome: 55, energia: 18, felicidade: 18 } }
            ]
        },
        
        // --- CAFEZINHO COLONIAL ---
        "cafe-colonial": {
            id: "cafe-colonial",
            nome: "☕ Café Colonial Sorocabano",
            endereco: "Rua Carlos Gomes, 150 - Centro, Sorocaba",
            horario: "7h às 19h",
            telefone: "(15) 0123-4567",
            descricao: "Cafeteria colonial com pães caseiros, bolos e salgados. Tradição local. Ambiente rústico.",
            tipo: ["cafeteria", "colonial", "tradicional", "artesanal"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-leite-col", nome: "☕ Café com Leite", descricao: "Café coado com leite quente.", preco: 9, recuperacao: { sede: 10, energia: 10 } },
                { id: "pao-caseiro-col", nome: "🍞 Pão Caseiro", descricao: "Pão caseiro com manteiga.", preco: 7, recuperacao: { fome: 12, felicidade: 10 } },
                { id: "bolo-fuba-col", nome: "🍰 Bolo de Fubá", descricao: "Fatia de bolo de fubá caseiro.", preco: 8, recuperacao: { fome: 15, felicidade: 12 } }
            ]
        },
        
        // --- RODOVIÁRIA ---
        "rodoviaria-sorocaba": {
            id: "rodoviaria-sorocaba",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Pereira de Araújo, 2000 - Campolim, Sorocaba",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-soro", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8 } },
                { id: "suco-soro", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 9, recuperacao: { sede: 18, energia: 5 } }
            ]
        },
        
        // --- BOTECO NO CENTRO ---
        "boteco-centro-soro": {
            id: "boteco-centro-soro",
            nome: "🍺 Boteco do Centro",
            endereco: "Rua da Penha, 500 - Centro, Sorocaba",
            horario: "11h às 01h",
            telefone: "(15) 1234-5678",
            descricao: "Boteco tradicional do centro histórico. Petiscos e chopp gelado. Frequentado por comerciários.",
            tipo: ["boteco", "petiscos", "happy-hour", "tradicional"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 890,
            cardapio: [
                { id: "torresmo-soro", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 25, felicidade: 10 } },
                { id: "calabresa-bot-soro", nome: "🍢 Calabresa Acebolada", descricao: "Linguiça acebolada.", preco: 25, recuperacao: { fome: 35, felicidade: 10 } },
                { id: "chopp-bot-soro", nome: "🍺 Chopp Gelado", descricao: "Chopp tradicional.", preco: 8, recuperacao: { sede: 22, felicidade: 8, energia: -4 } }
            ]
        }
    }
};

export default restaurantesSP;