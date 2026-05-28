const restaurantesPE = {
    // ==================== RECIFE (CAPITAL) - 20 RESTAURANTES ====================
    "Recife": {
        // ========== 1. RECIFE ANTIGO - CULINÁRIA PERNAMBUCANA TRADICIONAL ==========
        "recife-antigo-pernambucana": {
            id: "recife-antigo-pernambucana",
            nome: "🍛 Tapera do Recife",
            endereco: "Rua do Bom Jesus, 200 - Recife Antigo, Recife",
            horario: "11h às 22h",
            telefone: "(81) 3222-1111",
            descricao: "Restaurante tradicional no Recife Antigo. Culinária pernambucana autêntica: caldeirada, peixada, buchada e sarapatel. Ambiente rústico e histórico.",
            tipo: ["pernambucana", "nordestina", "tradicional", "familiar", "turístico"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 3420,
            cardapio: [
                { id: "caldeirada-recife", nome: "🐟 Caldeirada Pernambucana", descricao: "Peixe, camarão, lula, polvo e caranguejo cozidos no molho de tomate e coentro. Serve 2 pessoas.", preco: 78, recuperacao: { fome: 85, felicidade: 32, energia: 22 } },
                { id: "peixada-recife", nome: "🐟 Peixada Pernambucana", descricao: "Peixe cozido com ovos, tomate, coentro e leite de coco. Acompanha arroz e pirão.", preco: 58, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "buchada-recife", nome: "🍖 Buchada de Bode", descricao: "Buchada de bode tradicional do sertão pernambucano.", preco: 48, recuperacao: { fome: 65, felicidade: 22, energia: 16 } },
                { id: "sarapatel-recife", nome: "🍲 Sarapatel", descricao: "Miúdos de porco e bode cozidos com temperos nordestinos.", preco: 42, recuperacao: { fome: 60, felicidade: 20, energia: 14 } },
                { id: "caipirinha-recife", nome: "🍹 Caipirinha Recife", descricao: "Caipirinha com cachaça envelhecida e limão galego.", preco: 16, recuperacao: { sede: 12, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. RECIFE ANTIGO - BOTECO ==========
        "recife-antigo-boteco": {
            id: "recife-antigo-boteco",
            nome: "🍺 Boteco do Recife Antigo",
            endereco: "Rua do Apolo, 100 - Recife Antigo, Recife",
            horario: "17h às 04h",
            telefone: "(81) 3333-2222",
            descricao: "Boteco tradicional no coração do Recife Antigo. Petiscos, cerveja gelada e música ao vivo. Frequentado por artistas e turistas.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "turístico"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 2870,
            cardapio: [
                { id: "bolinho-bacalhau-boteco", nome: "🍘 Bolinho de Bacalhau (6 unid)", descricao: "Bolinho de bacalhau desfiado com salsinha.", preco: 32, recuperacao: { fome: 35, felicidade: 16, energia: 8 } },
                { id: "camarao-boteco", nome: "🍤 Camarão à Dorê", descricao: "Camarões empanados e fritos, servidos com molho rosé.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "pastel-boteco", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante recheado com carne moída.", preco: 12, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "torresmo-boteco", nome: "🥓 Torresmo", descricao: "Torresmo crocante com farofa.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "chopp-boteco", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 3. RECIFE ANTIGO - CAFÉ ==========
        "recife-antigo-cafe": {
            id: "recife-antigo-cafe",
            nome: "☕ Café do Recife Antigo",
            endereco: "Praça do Arsenal, 50 - Recife Antigo, Recife",
            horario: "08h às 20h",
            telefone: "(81) 3444-3333",
            descricao: "Cafeteria charmosa no Recife Antigo. Cafés especiais, bolos, tortas e doces regionais. Ambiente aconchegante e cultural.",
            tipo: ["cafeteria", "doces", "artesanal", "cultural", "turístico"],
            preco_medio: 30,
            estrelas: 4.7,
            avaliacoes: 1250,
            cardapio: [
                { id: "cafe-especial-ra", nome: "☕ Café Especial", descricao: "Café 100% arábica do cerrado mineiro.", preco: 10, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "bolo-rolo-ra", nome: "🍰 Bolo de Rolo", descricao: "Bolo típico pernambucano com goiabada.", preco: 12, recuperacao: { fome: 16, felicidade: 16, energia: 5 } },
                { id: "cartola-ra", nome: "🍌 Cartola", descricao: "Banana frita com queijo e canela.", preco: 14, recuperacao: { fome: 20, felicidade: 18, energia: 6 } },
                { id: "tapioca-ra", nome: "🥞 Tapioca de Coco", descricao: "Tapioca recheada com coco ralado e leite condensado.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-caju-ra", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },

        // ========== 4. BOA VIAGEM - FRUTOS DO MAR ==========
        "boa-viagem-frutos": {
            id: "boa-viagem-frutos",
            nome: "🐟 Restaurante Boa Viagem",
            endereco: "Av. Boa Viagem, 5000 - Boa Viagem, Recife",
            horario: "11h às 23h",
            telefone: "(81) 3555-4444",
            descricao: "Frutos do mar frescos com vista para o mar de Boa Viagem. Especialidade em peixes, camarões e caranguejos. Ambiente familiar e romântico.",
            tipo: ["frutos-do-mar", "pernambucana", "praia", "familiar", "vista"],
            preco_medio: 80,
            estrelas: 4.7,
            avaliacoes: 4560,
            cardapio: [
                { id: "caranguejo-bv", nome: "🦀 Caranguejo Grelhado", descricao: "Caranguejo fresco grelhado na manteiga. Serve 2 pessoas.", preco: 68, recuperacao: { fome: 75, felicidade: 30, energia: 20 } },
                { id: "camarao-bv", nome: "🍤 Camarão ao Coco", descricao: "Camarões salteados com leite de coco, coentro e pimentão.", preco: 62, recuperacao: { fome: 65, felicidade: 26, energia: 16 } },
                { id: "moqueca-bv", nome: "🍲 Moqueca Pernambucana", descricao: "Moqueca de peixe e camarão com leite de coco e coentro.", preco: 72, recuperacao: { fome: 78, felicidade: 28, energia: 18 } },
                { id: "camarao-dore-bv", nome: "🍤 Camarão à Dorê", descricao: "Camarões empanados fritos.", preco: 48, recuperacao: { fome: 55, felicidade: 20, energia: 12 } },
                { id: "caipirinha-bv", nome: "🍹 Caipirinha Boa Viagem", descricao: "Caipirinha de frutas vermelhas.", preco: 18, recuperacao: { sede: 10, felicidade: 18, energia: -5 } }
            ]
        },
        
        // ========== 5. BOA VIAGEM - PIZZARIA ==========
        "boa-viagem-pizzaria": {
            id: "boa-viagem-pizzaria",
            nome: "🍕 Pizzaria Boa Viagem",
            endereco: "Rua Padre Carapuceiro, 300 - Boa Viagem, Recife",
            horario: "18h às 00h",
            telefone: "(81) 3666-5555",
            descricao: "Pizzaria tradicional com vista para o mar. Massa fina e ingredientes frescos. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar", "vista"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "pizza-margherita-bv", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 15 } },
                { id: "pizza-portuguesa-bv", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 58, recuperacao: { fome: 60, energia: 16, felicidade: 15 } },
                { id: "pizza-camarao-bv", nome: "🍕 Pizza de Camarão", descricao: "Molho, mussarela, camarão, catupiry, coentro.", preco: 68, recuperacao: { fome: 65, energia: 18, felicidade: 18 } },
                { id: "calzone-bv", nome: "🥟 Calzone", descricao: "Pizza fechada recheada.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-bv", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. BOA VIAGEM - QUIOSQUE ==========
        "boa-viagem-quiosque": {
            id: "boa-viagem-quiosque",
            nome: "🏖️ Quiosque Boa Viagem",
            endereco: "Orla de Boa Viagem - Praia, Recife",
            horario: "08h às 22h",
            telefone: "(81) 3777-6666",
            descricao: "Quiosque na praia de Boa Viagem. Água de coco, petiscos e frutos do mar. Ambiente descontraído.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 3450,
            cardapio: [
                { id: "agua-coco-bv", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-quiosque", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "isca-peixe-quiosque", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-quiosque", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 4 } },
                { id: "suco-quiosque", nome: "🥤 Suco de Abacaxi", descricao: "Suco natural de abacaxi com hortelã.", preco: 8, recuperacao: { sede: 20, felicidade: 8, energia: 5 } }
            ]
        },

        // ========== 7. BOA VISTA - CHURRASCARIA ==========
        "boa-vista-churrascaria": {
            id: "boa-vista-churrascaria",
            nome: "🥩 Churrascaria Boa Vista",
            endereco: "Rua da Aurora, 500 - Boa Vista, Recife",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(81) 3888-7777",
            descricao: "Churrascaria tradicional com rodízio de carnes nobres e buffet completo. Ambiente familiar e executivo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 75,
            estrelas: 4.5,
            avaliacoes: 1870,
            cardapio: [
                { id: "rodizio-bvista", nome: "🥩 Rodízio Completo", descricao: "Mais de 12 cortes: picanha, costela, maminha, fraldinha, cordeiro.", preco: 79, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-bvista", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-bvista", nome: "🍖 Costela Assada", descricao: "Costela bovina assada lentamente.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-bvista", nome: "🥗 Buffet Self-Service", descricao: "Saladas, massas, sushi, legumes.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "suco-bvista", nome: "🥤 Suco Natural", descricao: "Suco natural de fruta.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 8. CASA FORTE - COZINHA CONTEMPORÂNEA ==========
        "casa-forte-contemporanea": {
            id: "casa-forte-contemporanea",
            nome: "🍽️ Casa Forte Gastrô",
            endereco: "Rua Luiz Fernandes, 300 - Casa Forte, Recife",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(81) 3999-8888",
            descricao: "Cozinha contemporânea pernambucana com ingredientes regionais. Chef premiado e ambiente sofisticado. Carta de vinhos.",
            tipo: ["contemporanea", "pernambucana", "premium", "romântico", "gastronomico"],
            preco_medio: 120,
            estrelas: 4.9,
            avaliacoes: 980,
            cardapio: [
                { id: "file-cf", nome: "🥩 Filé Mignon ao Molho de Vinho", descricao: "Filé mignon com molho de vinho tinto e cogumelos.", preco: 95, recuperacao: { fome: 75, felicidade: 34, energia: 22 } },
                { id: "lagosta-cf", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca grelhada com manteiga de ervas.", preco: 135, recuperacao: { fome: 85, felicidade: 40, energia: 24 } },
                { id: "camarao-cf", nome: "🍤 Camarão ao Coco", descricao: "Camarões com leite de coco e coentro.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "risoto-cf", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso com camarões.", preco: 72, recuperacao: { fome: 62, felicidade: 26, energia: 16 } },
                { id: "espumante-cf", nome: "🥂 Espumante Brut", descricao: "Espumante brasileiro.", preco: 35, recuperacao: { sede: 10, felicidade: 22, energia: -6 } }
            ]
        },

        // ========== 9. ESPINHEIRO - COMIDA ÁRABE ==========
        "espinheiro-arabe": {
            id: "espinheiro-arabe",
            nome: "🧆 Al Balad Recife",
            endereco: "Rua do Espinheiro, 200 - Espinheiro, Recife",
            horario: "11h às 23h",
            telefone: "(81) 4000-9999",
            descricao: "Autêntica culinária árabe libanesa. Esfihas, quibes, hommus e banquetes. Ambiente sofisticado e familiar.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "premium"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "banquete-arabe-es", nome: "🍽️ Banquete Árabe", descricao: "Hommus, babaganoush, tabule, kibe cru, esfihas, charme.", preco: 85, recuperacao: { fome: 92, felicidade: 32, energia: 20 } },
                { id: "esfiha-carne-es", nome: "🥙 Esfiha de Carne (6 unid)", descricao: "Esfihas abertas com carne temperada.", preco: 30, recuperacao: { fome: 40, felicidade: 15, energia: 8 } },
                { id: "kibe-assado-es", nome: "🧆 Kibe Assado (4 unid)", descricao: "Kibe assado recheado.", preco: 26, recuperacao: { fome: 35, felicidade: 13, energia: 7 } },
                { id: "hommus-es", nome: "🫔 Hommus", descricao: "Pasta de grão-de-bico.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "suco-limao-es", nome: "🥤 Suco de Limão", descricao: "Suco de limão com hortelã.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: 5 } }
            ]
        },

        // ========== 10. GRAÇAS - COMIDA NORDESTINA ==========
        "gracas-nordestina": {
            id: "gracas-nordestina",
            nome: "🌵 Sabores do Sertão",
            endereco: "Rua das Graças, 300 - Graças, Recife",
            horario: "11h às 22h",
            telefone: "(81) 4111-0000",
            descricao: "Culinária nordestina autêntica com baião de dois, carne de sol e panelada. Forró ao vivo aos fins de semana.",
            tipo: ["nordestina", "regional", "forro", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "baiao-dois-gra", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho, nata.", preco: 45, recuperacao: { fome: 70, felicidade: 22, energia: 14 } },
                { id: "carne-sol-gra", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca e manteiga de garrafa.", preco: 52, recuperacao: { fome: 72, felicidade: 24, energia: 16 } },
                { id: "panelada-gra", nome: "🍲 Panelada", descricao: "Dobradinha com costela, bacon, calabresa.", preco: 48, recuperacao: { fome: 68, felicidade: 20, energia: 12 } },
                { id: "tapioca-gra", nome: "🥞 Tapioca de Queijo", descricao: "Tapioca com queijo coalho.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-caju-gra", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },

        // ========== 11. PINA - QUIOSQUE DE PRAIA ==========
        "pina-quiosque": {
            id: "pina-quiosque",
            nome: "🏖️ Quiosque Pina",
            endereco: "Praia do Pina - Av. Boa Viagem, Recife",
            horario: "07h às 21h",
            telefone: "(81) 4222-1111",
            descricao: "Quiosque na Praia do Pina. Água de coco, petiscos e frutos do mar. Ambiente descontraído.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 1890,
            cardapio: [
                { id: "agua-coco-pina", nome: "🥥 Água de Coco", descricao: "Água de coco gelada.", preco: 8, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-pina", nome: "🍤 Camarão Grelhado", descricao: "Camarões grelhados no alho.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-pina", nome: "🐟 Isca de Peixe", descricao: "Tiras de peixe empanadas.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "queijo-pina", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 4 } },
                { id: "suco-pina", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 7, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 12. TORRE - COMIDA JAPONESA ==========
        "torre-japonesa": {
            id: "torre-japonesa",
            nome: "🍣 Sushi Torre",
            endereco: "Rua da Torre, 300 - Torre, Recife",
            horario: "18h às 23h30",
            telefone: "(81) 4333-2222",
            descricao: "Restaurante japonês tradicional. Peixes frescos e rodízio premium. Ambiente zen e aconchegante.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-torre", nome: "🍣 Rodízio Premium", descricao: "Rodízio com 25 peças + temaki + hot roll.", preco: 79, recuperacao: { fome: 85, energia: 26, felicidade: 30 } },
                { id: "combinado-torre", nome: "🍱 Combinado Especial", descricao: "20 peças variadas.", preco: 58, recuperacao: { fome: 62, energia: 18, felicidade: 22 } },
                { id: "temaki-torre", nome: "🍙 Temaki de Salmão", descricao: "Temaki grande com salmão e cream cheese.", preco: 26, recuperacao: { fome: 30, felicidade: 15, energia: 8 } },
                { id: "hot-torre", nome: "🌯 Hot Roll (8 unid)", descricao: "Hot rolls empanados.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-torre", nome: "🍶 Saquê", descricao: "Saquê quente.", preco: 22, recuperacao: { sede: 8, felicidade: 16, energia: -6 } }
            ]
        },

        // ========== 13. MADALENA - HAMBURGUERIA ==========
        "madalena-hamburguer": {
            id: "madalena-hamburguer",
            nome: "🍔 Hamburgueria Madalena",
            endereco: "Rua Real da Torre, 500 - Madalena, Recife",
            horario: "18h às 01h",
            telefone: "(81) 4444-3333",
            descricao: "Hamburgueria artesanal com opções vegetarianas. Cervejas artesanais e ambiente descolado.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana", "happy-hour"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "smash-mad", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo smash com cheddar, bacon.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-mad", nome: "🌱 Vegan Burger", descricao: "Hambúrguer vegano de grão-de-bico.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-mad", nome: "🍟 Batata com Cheddar", descricao: "Batata frita com cheddar.", preco: 22, recuperacao: { fome: 28, felicidade: 10, energia: 6 } },
                { id: "onion-mad", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 10, energia: 5 } },
                { id: "milkshake-mad", nome: "🥤 Milkshake", descricao: "Milkshake de chocolate.", preco: 18, recuperacao: { sede: 15, felicidade: 18, energia: 8 } }
            ]
        },

        // ========== 14. APIPUCOS - COMIDA CASEIRA ==========
        "apipucos-caseira": {
            id: "apipucos-caseira",
            nome: "🇧🇷 Comida Caseira Apipucos",
            endereco: "Rua Apipucos, 200 - Apipucos, Recife",
            horario: "11h às 15h",
            telefone: "(81) 4555-4444",
            descricao: "Restaurante familiar com comida caseira. Prato feito, buffet e opções vegetariana. Frequentado por moradores.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 670,
            cardapio: [
                { id: "prato-feito-api", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína, farofa, salada.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-api", nome: "🥩 Bife Acebolado", descricao: "Bife grelhado com cebola.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-api", nome: "🍗 Frango Grelhado", descricao: "Frango grelhado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-api", nome: "🐟 Peixe Frito", descricao: "Filé de peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-api", nome: "🥤 Suco Natural", descricao: "Suco de fruta.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },

        // ========== 15. CORDEIRO - COMIDA ITALIANA ==========
        "cordeiro-italiana": {
            id: "cordeiro-italiana",
            nome: "🍝 Cantina Cordeiro",
            endereco: "Rua Cordeiro, 300 - Cordeiro, Recife",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(81) 4666-5555",
            descricao: "Cantina italiana tradicional. Massas frescas, molhos caseiros e ambiente familiar.",
            tipo: ["italiana", "massas", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-cor", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com queijo.", preco: 48, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "lasanha-cor", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 45, recuperacao: { fome: 62, energia: 18, felicidade: 15 } },
                { id: "fettuccine-cor", nome: "🍝 Fettuccine", descricao: "Massa fresca ao sugo.", preco: 42, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "polenta-cor", nome: "🍲 Polenta", descricao: "Polenta mole com ragú.", preco: 38, recuperacao: { fome: 52, energia: 16, felicidade: 12 } },
                { id: "vinho-cor", nome: "🍷 Vinho", descricao: "Taça de vinho tinto.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },

        // ========== 16. ILHA DO LEITE - RESTAURANTE POPULAR ==========
        "ilha-leite-popular": {
            id: "ilha-leite-popular",
            nome: "🍲 Restaurante Popular Ilha do Leite",
            endereco: "Rua Ilha do Leite, 100 - Ilha do Leite, Recife",
            horario: "11h às 14h",
            telefone: "(81) 4777-6666",
            descricao: "Restaurante popular com comida caseira e preço acessível. Frequentado por estudantes e trabalhadores.",
            tipo: ["brasileira", "popular", "buffet", "caseiro"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 2340,
            cardapio: [
                { id: "prato-feito-ilha", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína, salada.", preco: 15, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-ilha", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 18, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-ilha", nome: "🍗 Frango", descricao: "Frango assado.", preco: 15, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-ilha", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 16, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-ilha", nome: "🥤 Suco", descricao: "Suco de fruta.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 4 } }
            ]
        },

        // ========== 17. SANTO AMARO - CAFÉ COLONIAL ==========
        "santo-amaro-cafe": {
            id: "santo-amaro-cafe",
            nome: "☕ Café Santo Amaro",
            endereco: "Rua Santo Amaro, 200 - Santo Amaro, Recife",
            horario: "08h às 19h",
            telefone: "(81) 4888-7777",
            descricao: "Café colonial com pães, bolos, tortas e geleias caseiras. Ambiente acolhedor.",
            tipo: ["cafeteria", "colonial", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-colonial-sa", nome: "☕ Café Colonial", descricao: "Mesa com cafés, pães, bolos, geleias.", preco: 35, recuperacao: { fome: 55, felicidade: 24, energia: 18 } },
                { id: "cafe-especial-sa", nome: "☕ Café Especial", descricao: "Café 100% arábica.", preco: 9, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "pao-queijo-sa", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quente.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cenoura-sa", nome: "🍰 Bolo de Cenoura", descricao: "Bolo com cobertura de chocolate.", preco: 10, recuperacao: { fome: 15, felicidade: 14, energia: 5 } },
                { id: "suco-sa", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 18. DERBY - COMIDA VEGANA ==========
        "derby-vegana": {
            id: "derby-vegana",
            nome: "🌱 Vegan Derby",
            endereco: "Rua do Derby, 200 - Derby, Recife",
            horario: "11h às 21h",
            telefone: "(81) 4999-8888",
            descricao: "Restaurante vegano com buffet por quilo. Opções saudáveis, criativas e sustentáveis.",
            tipo: ["vegana", "vegetariano", "saudavel", "buffet"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 670,
            cardapio: [
                { id: "buffet-vegano-der", nome: "🥗 Buffet Vegano", descricao: "Saladas, legumes, grãos, proteína vegetal.", preco: 38, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "hamburguer-vegano-der", nome: "🍔 Hamburguer Vegano", descricao: "Hambúrguer de lentilha.", preco: 26, recuperacao: { fome: 48, energia: 18, felicidade: 14 } },
                { id: "lasanha-vegana-der", nome: "🍝 Lasanha Vegana", descricao: "Lasanha de berinjela.", preco: 30, recuperacao: { fome: 55, energia: 18, felicidade: 15 } },
                { id: "sopa-vegana-der", nome: "🥣 Sopa", descricao: "Sopa de legumes.", preco: 16, recuperacao: { fome: 35, energia: 14, felicidade: 10 } },
                { id: "suco-verde-der", nome: "🥤 Suco Verde", descricao: "Couve, limão, gengibre.", preco: 10, recuperacao: { sede: 20, energia: 12, felicidade: 8 } }
            ]
        },

        // ========== 19. SHOPPING RECIFE - FOOD COURT ==========
        "shopping-recife": {
            id: "shopping-recife",
            nome: "🛍️ Shopping Recife - Food Court",
            endereco: "Rua Padre Carapuceiro, 500 - Boa Viagem, Recife",
            horario: "10h às 22h",
            telefone: "(81) 5000-9999",
            descricao: "Praça de alimentação do Shopping Recife. Fast food, comida japonesa, churrasco.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 6540,
            cardapio: [
                { id: "mc-shopping", nome: "🍔 McDonald's", descricao: "Hambúrguer e batata.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-shopping", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-shopping", nome: "🥢 China Fast", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "outback-shopping", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "suco-shopping", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },

        // ========== 20. AEROPORTO - FAST FOOD ==========
        "aeroporto-recife": {
            id: "aeroporto-recife",
            nome: "✈️ Aeroporto do Recife - Praça de Alimentação",
            endereco: "Av. Mascarenhas de Morais, 1000 - Imbiribeira, Recife",
            horario: "04h às 00h",
            telefone: "(81) 5111-0000",
            descricao: "Opções rápidas no aeroporto para quem viaja.",
            tipo: ["fast-food", "aeroporto", "viagem", "24h"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aeroporto", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aeroporto", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aeroporto", nome: "☕ Habitual", descricao: "Cafeteria.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "starbucks-aeroporto", nome: "☕ Starbucks", descricao: "Café.", preco: 15, recuperacao: { sede: 10, energia: 14, felicidade: 12 } },
                { id: "suco-aeroporto", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        }
    },

        // ==================== OLINDA - 10 RESTAURANTES ====================
    "Olinda": {
        // ========== 1. ALTO DA SÉ - VISTA PANORÂMICA ==========
        "alto-se-vista": {
            id: "alto-se-vista",
            nome: "🏰 Restaurante Alto da Sé",
            endereco: "Largo do Alto da Sé, 100 - Alto da Sé, Olinda",
            horario: "11h às 22h",
            telefone: "(81) 3222-1111",
            descricao: "Restaurante com vista panorâmica de Olinda. Culinária pernambucana e frutos do mar. Ambiente romântico e histórico.",
            tipo: ["pernambucana", "frutos-do-mar", "vista", "romântico", "turístico"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "peixada-alto", nome: "🐟 Peixada Pernambucana", descricao: "Peixe cozido com ovos, tomate, coentro e leite de coco. Acompanha arroz e pirão.", preco: 68, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "camarao-alto", nome: "🍤 Camarão ao Coco", descricao: "Camarões salteados com leite de coco e coentro.", preco: 72, recuperacao: { fome: 68, felicidade: 26, energia: 16 } },
                { id: "caranguejo-alto", nome: "🦀 Caranguejo Grelhado", descricao: "Caranguejo fresco grelhado na manteiga.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "moqueca-alto", nome: "🍲 Moqueca Olindense", descricao: "Moqueca de peixe e camarão.", preco: 78, recuperacao: { fome: 80, felicidade: 30, energia: 18 } },
                { id: "caipirinha-alto", nome: "🍹 Caipirinha Olinda", descricao: "Caipirinha com cachaça envelhecida.", preco: 18, recuperacao: { sede: 10, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 2. ALTO DA SÉ - CAFÉ COLONIAL ==========
        "alto-se-cafe": {
            id: "alto-se-cafe",
            nome: "☕ Café do Alto da Sé",
            endereco: "Rua Bispo Coutinho, 50 - Alto da Sé, Olinda",
            horario: "08h às 19h",
            telefone: "(81) 3333-2222",
            descricao: "Café colonial com vista para a Igreja da Sé. Cafés, bolos, tortas e doces regionais.",
            tipo: ["cafeteria", "colonial", "doces", "vista", "turístico"],
            preco_medio: 35,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "cafe-colonial-se", nome: "☕ Café Colonial Completo", descricao: "Mesa com cafés, leite, pães, bolos, geleias, queijos.", preco: 45, recuperacao: { fome: 65, felicidade: 26, energia: 20 } },
                { id: "bolo-rolo-se", nome: "🍰 Bolo de Rolo", descricao: "Bolo típico pernambucano.", preco: 12, recuperacao: { fome: 16, felicidade: 16, energia: 5 } },
                { id: "cartola-se", nome: "🍌 Cartola", descricao: "Banana frita com queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 18, energia: 6 } },
                { id: "tapioca-se", nome: "🥞 Tapioca de Coco", descricao: "Tapioca recheada com coco.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-se", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 3. ALTO DA SÉ - COMIDA NORDESTINA ==========
        "alto-se-nordestina": {
            id: "alto-se-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua do Amparo, 100 - Alto da Sé, Olinda",
            horario: "11h às 22h",
            telefone: "(81) 3444-3333",
            descricao: "Culinária nordestina autêntica no alto da sé. Baião de dois, carne de sol e tapioca. Forró ao vivo.",
            tipo: ["nordestina", "regional", "forro", "familiar", "turístico"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 1250,
            cardapio: [
                { id: "baiao-dois-se", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 48, recuperacao: { fome: 72, felicidade: 24, energia: 15 } },
                { id: "carne-sol-se", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca e manteiga.", preco: 52, recuperacao: { fome: 75, felicidade: 26, energia: 16 } },
                { id: "panelada-se", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 45, recuperacao: { fome: 68, felicidade: 20, energia: 12 } },
                { id: "tapioca-se-nord", nome: "🥞 Tapioca de Carne Seca", descricao: "Tapioca recheada com carne seca.", preco: 18, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "suco-se-nord", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 6 } }
            ]
        },

        // ========== 4. CARMO - BOTECO ==========
        "carmo-boteco": {
            id: "carmo-boteco",
            nome: "🍺 Boteco do Carmo",
            endereco: "Rua do Carmo, 200 - Carmo, Olinda",
            horario: "17h às 03h",
            telefone: "(81) 3555-4444",
            descricao: "Boteco tradicional no bairro do Carmo. Petiscos, cerveja gelada e música ao vivo. Point dos artistas.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "boêmio"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "bolinho-bacalhau-carmo", nome: "🍘 Bolinho de Bacalhau", descricao: "Bolinho de bacalhau. Porção com 8.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "camarao-carmo", nome: "🍤 Camarão à Dorê", descricao: "Camarões empanados.", preco: 35, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "pastel-carmo", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante.", preco: 12, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "torresmo-carmo", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "chopp-carmo", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },
        
        // ========== 5. AMPARO - COMIDA ITALIANA ==========
        "amparo-italiana": {
            id: "amparo-italiana",
            nome: "🍝 Cantina do Amparo",
            endereco: "Rua do Amparo, 150 - Amparo, Olinda",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(81) 3666-5555",
            descricao: "Cantina italiana tradicional em Olinda. Massas frescas e molhos caseiros.",
            tipo: ["italiana", "massas", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "parmegiana-amparo", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com queijo.", preco: 52, recuperacao: { fome: 68, energia: 22, felicidade: 18 } },
                { id: "lasanha-amparo", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 48, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "nhoque-amparo", nome: "🥔 Nhoque ao Sugo", descricao: "Nhoque de batata.", preco: 45, recuperacao: { fome: 60, energia: 18, felicidade: 15 } },
                { id: "polenta-amparo", nome: "🍲 Polenta", descricao: "Polenta mole com ragú.", preco: 40, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "vinho-amparo", nome: "🍷 Vinho", descricao: "Taça de vinho tinto.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 6. RIO DOCE - FRUTOS DO MAR ==========
        "rio-doce-frutos": {
            id: "rio-doce-frutos",
            nome: "🐟 Restaurante Rio Doce",
            endereco: "Av. Rio Doce, 300 - Rio Doce, Olinda",
            horario: "11h às 22h",
            telefone: "(81) 3777-6666",
            descricao: "Frutos do mar frescos próximo ao Rio Doce. Especialidade em peixes e camarões.",
            tipo: ["frutos-do-mar", "pernambucana", "familiar"],
            preco_medio: 65,
            estrelas: 4.4,
            avaliacoes: 780,
            cardapio: [
                { id: "moqueca-rd", nome: "🍲 Moqueca", descricao: "Moqueca de peixe e camarão.", preco: 68, recuperacao: { fome: 75, felicidade: 26, energia: 16 } },
                { id: "camarao-rd", nome: "🍤 Camarão Grelhado", descricao: "Camarões grelhados.", preco: 55, recuperacao: { fome: 62, felicidade: 22, energia: 14 } },
                { id: "peixe-rd", nome: "🐟 Peixe Grelhado", descricao: "Filé de peixe.", preco: 45, recuperacao: { fome: 58, felicidade: 18, energia: 12 } },
                { id: "casquinha-rd", nome: "🦀 Casquinha de Siri", descricao: "Carne de siri.", preco: 28, recuperacao: { fome: 30, felicidade: 16, energia: 8 } },
                { id: "suco-rd", nome: "🥤 Suco de Caju", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. CARMO - PIZZARIA ==========
        "carmo-pizzaria": {
            id: "carmo-pizzaria",
            nome: "🍕 Pizzaria do Carmo",
            endereco: "Rua do Carmo, 300 - Carmo, Olinda",
            horario: "18h às 23h30",
            telefone: "(81) 3888-7777",
            descricao: "Pizzaria tradicional no Carmo. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-margherita-carmo", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela, manjericão.", preco: 48, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-carmo", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos.", preco: 52, recuperacao: { fome: 58, energia: 15, felicidade: 12 } },
                { id: "pizza-camarao-carmo", nome: "🍕 Pizza de Camarão", descricao: "Molho, mussarela, camarão.", preco: 62, recuperacao: { fome: 62, energia: 18, felicidade: 15 } },
                { id: "calzone-carmo", nome: "🥟 Calzone", descricao: "Pizza fechada.", preco: 42, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-carmo", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 8. CASA CAIADA - CAFÉ ==========
        "casa-caiada-cafe": {
            id: "casa-caiada-cafe",
            nome: "☕ Casa Caiada Café",
            endereco: "Rua Casa Caiada, 100 - Casa Caiada, Olinda",
            horario: "09h às 20h",
            telefone: "(81) 3999-8888",
            descricao: "Cafeteria charmosa em Casa Caiada. Cafés especiais, brunch e doces artesanais.",
            tipo: ["cafeteria", "brunch", "doces", "artesanal"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "brunch-cc", nome: "🍳 Brunch", descricao: "Pão artesanal, ovos, bacon, frutas.", preco: 45, recuperacao: { fome: 62, energia: 24, felicidade: 20 } },
                { id: "cafe-especial-cc", nome: "☕ Café Especial", descricao: "Café arábica.", preco: 10, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cc", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 20, felicidade: 12, energia: 5 } },
                { id: "bolo-cc", nome: "🍰 Bolo", descricao: "Bolo de cenoura.", preco: 10, recuperacao: { fome: 15, felicidade: 14, energia: 5 } },
                { id: "suco-cc", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING OLINDA ==========
        "shopping-olinda": {
            id: "shopping-olinda",
            nome: "🛍️ Shopping Patteo Olinda - Food Court",
            endereco: "Av. Dr. Cláudio Gueiros Leite, 1000 - Jardim Brasil, Olinda",
            horario: "10h às 22h",
            telefone: "(81) 4000-9999",
            descricao: "Praça de alimentação do Shopping Patteo Olinda.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-olinda", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-olinda", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-olinda", nome: "🥢 China Fast", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-olinda", nome: "🍣 Sushi Fast", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-olinda", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 10. BAIRRO NOVO - LANCHONETE ==========
        "bairro-novo-lanchonete": {
            id: "bairro-novo-lanchonete",
            nome: "🍔 Lanchonete Bairro Novo",
            endereco: "Rua Bairro Novo, 200 - Bairro Novo, Olinda",
            horario: "08h às 22h",
            telefone: "(81) 4111-0000",
            descricao: "Lanchonete tradicional. X-tudo, sucos e salgados. Frequentada por moradores.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 670,
            cardapio: [
                { id: "x-tudo-bn", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, ovo, bacon.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-bn", nome: "🍔 X-Salada", descricao: "Hambúrguer, alface, tomate.", preco: 16, recuperacao: { fome: 40, energia: 12, felicidade: 8 } },
                { id: "coxinha-bn", nome: "🍗 Coxinha", descricao: "Coxinha de frango.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-bn", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 7, energia: 3 } },
                { id: "suco-bn", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        }
    },

        // ==================== CARUARU - 10 RESTAURANTES ====================
    "Caruaru": {
        // ========== 1. CENTRO - FEIJOADA DO SERTÃO ==========
        "caruaru-feijoada": {
            id: "caruaru-feijoada",
            nome: "🍲 Feijoada do Sertão",
            endereco: "Rua Duque de Caxias, 200 - Centro, Caruaru",
            horario: "11h às 22h",
            telefone: "(81) 3222-1111",
            descricao: "Tradicional feijoada nordestina. Ambiente típico com decoração sertaneja. Música ao vivo aos fins de semana.",
            tipo: ["nordestina", "feijoada", "tradicional", "familiar", "musica-ao-vivo"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "feijoada-caruaru", nome: "🍲 Feijoada Completa", descricao: "Feijoada com carnes nobres, arroz, couve, farofa, laranja.", preco: 48, recuperacao: { fome: 85, energia: 28, felicidade: 22 } },
                { id: "baião-caruaru", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 38, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "carne-sol-caruaru", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 42, recuperacao: { fome: 68, energia: 22, felicidade: 18 } },
                { id: "panelada-caruaru", nome: "🍲 Panelada", descricao: "Dobradinha nordestina.", preco: 35, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-caruaru", nome: "🥤 Suco de Caju", descricao: "Suco natural de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO DO FEIRA ==========
        "caruaru-boteco": {
            id: "caruaru-boteco",
            nome: "🍺 Boteco do Feira",
            endereco: "Rua Nunes Machado, 300 - Centro, Caruaru",
            horario: "17h às 02h",
            telefone: "(81) 3333-2222",
            descricao: "Boteco tradicional próximo à Feira de Caruaru. Petiscos, cerveja gelada e forró pé-de-serra.",
            tipo: ["boteco", "petiscos", "forro", "happy-hour", "musica-ao-vivo"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 2340,
            cardapio: [
                { id: "torresmo-boteco-ca", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 20, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "calabresa-boteco-ca", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 25, recuperacao: { fome: 35, felicidade: 14, energia: 8 } },
                { id: "queijo-boteco-ca", nome: "🧀 Queijo Coalho", descricao: "Queijo coalho grelhado.", preco: 12, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-boteco-ca", nome: "🍟 Batata Frita", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-boteco-ca", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - CAFÉ ==========
        "caruaru-cafe": {
            id: "caruaru-cafe",
            nome: "☕ Café Caruaru",
            endereco: "Av. Rio Branco, 200 - Centro, Caruaru",
            horario: "08h às 20h",
            telefone: "(81) 3444-3333",
            descricao: "Cafeteria no centro. Cafés especiais, bolos e salgados.",
            tipo: ["cafeteria", "tradicional", "doces"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "cafe-especial-cafe", nome: "☕ Café", descricao: "Café arábica.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-cafe", nome: "🍰 Cuca", descricao: "Cuca de banana.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "pao-queijo-cafe", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "tapioca-cafe", nome: "🥞 Tapioca", descricao: "Tapioca de coco.", preco: 10, recuperacao: { fome: 15, felicidade: 12, energia: 5 } },
                { id: "suco-cafe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 4. ALTO DO MOURA - PIZZARIA ==========
        "caruaru-pizzaria": {
            id: "caruaru-pizzaria",
            nome: "🍕 Pizzaria Alto do Moura",
            endereco: "Rua Alto do Moura, 300 - Alto do Moura, Caruaru",
            horario: "18h às 23h",
            telefone: "(81) 3555-4444",
            descricao: "Pizzaria no famoso Alto do Moura, centro de artesanato. Massa fina e ambiente acolhedor.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-am", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-am", nome: "🍕 Pizza Calabresa", descricao: "Molho, calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-am", nome: "🍕 Pizza Portuguesa", descricao: "Molho, presunto, ovos.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-am", nome: "🥟 Calzone", descricao: "Pizza fechada.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-am", nome: "🥤 Suco", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. SALGADINHO - CHURRASCARIA ==========
        "caruaru-churrascaria": {
            id: "caruaru-churrascaria",
            nome: "🥩 Churrascaria Salgadinho",
            endereco: "Av. Salgadinho, 500 - Salgadinho, Caruaru",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(81) 3666-5555",
            descricao: "Churrascaria familiar. Rodízio de carnes e buffet.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-sal", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 90, energia: 34, felicidade: 30 } },
                { id: "picanha-sal", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 52, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "costela-sal", nome: "🍖 Costela", descricao: "Costela assada.", preco: 48, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "buffet-sal", nome: "🥗 Buffet", descricao: "Buffet self-service.", preco: 42, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-sal", nome: "🥤 Suco", descricao: "Suco de uva.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. VILA KENNEDY - COMIDA NORDESTINA ==========
        "caruaru-vila-kennedy": {
            id: "caruaru-vila-kennedy",
            nome: "🌵 Sertão Sabores",
            endereco: "Rua Vila Kennedy, 100 - Vila Kennedy, Caruaru",
            horario: "11h às 21h",
            telefone: "(81) 3777-6666",
            descricao: "Culinária sertaneja autêntica. Baião de dois, carne de sol e buchada.",
            tipo: ["nordestina", "sertaneja", "familiar", "tradicional"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-vk", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca.", preco: 42, recuperacao: { fome: 68, felicidade: 20, energia: 14 } },
                { id: "carne-sol-vk", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 45, recuperacao: { fome: 70, felicidade: 22, energia: 15 } },
                { id: "buchada-vk", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 40, recuperacao: { fome: 62, felicidade: 18, energia: 12 } },
                { id: "sarapatel-vk", nome: "🍲 Sarapatel", descricao: "Sarapatel.", preco: 38, recuperacao: { fome: 60, felicidade: 16, energia: 10 } },
                { id: "suco-vk", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. SHOPPING CARUARU ==========
        "shopping-caruaru": {
            id: "shopping-caruaru",
            nome: "🛍️ Shopping Caruaru - Food Court",
            endereco: "Av. Adjar da Silva Casé, 200 - Indianópolis, Caruaru",
            horario: "10h às 22h",
            telefone: "(81) 3888-7777",
            descricao: "Praça de alimentação do Shopping Caruaru.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 1450,
            cardapio: [
                { id: "mc-caruaru", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-caruaru", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-caruaru", nome: "🥢 China Fast", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-caruaru", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-caruaru-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 8. FEIRA DE CARUARU - TAPIOCARIA ==========
        "caruaru-tapiocaria": {
            id: "caruaru-tapiocaria",
            nome: "🥞 Tapiocaria da Feira",
            endereco: "Feira de Caruaru - Estação Ferroviária, Caruaru",
            horario: "06h às 18h",
            telefone: "(81) 3999-8888",
            descricao: "Tapiocaria tradicional na Feira de Caruaru. Mais de 20 sabores de tapioca.",
            tipo: ["tapiocaria", "comida-de-rua", "regional", "tradicional"],
            preco_medio: 15,
            estrelas: 4.7,
            avaliacoes: 3450,
            cardapio: [
                { id: "tapioca-queijo", nome: "🥞 Tapioca de Queijo", descricao: "Tapioca recheada com queijo coalho.", preco: 10, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco", nome: "🥞 Tapioca de Coco", descricao: "Tapioca com coco e leite condensado.", preco: 12, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "tapioca-carne", nome: "🥞 Tapioca de Carne Seca", descricao: "Tapioca com carne seca e queijo.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-romeu", nome: "🥞 Tapioca Romeu e Julieta", descricao: "Tapioca com goiabada e queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 15, energia: 5 } },
                { id: "suco-tapioca", nome: "🥤 Suco de Caju", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 9. ALTO DO MOURA - HAMBURGUERIA ==========
        "caruaru-hamburguer": {
            id: "caruaru-hamburguer",
            nome: "🍔 Hamburgueria do Moura",
            endereco: "Rua Alto do Moura, 500 - Alto do Moura, Caruaru",
            horario: "18h às 00h",
            telefone: "(81) 4000-9999",
            descricao: "Hamburgueria artesanal no Alto do Moura.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-moura", nome: "🍔 Smash Burger", descricao: "Hambúrguer duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-moura", nome: "🌱 Vegan Burger", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-moura", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-moura", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-moura", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA CARUARU ==========
        "caruaru-rodoviaria": {
            id: "caruaru-rodoviaria",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Caruaru, 1000 - Centro, Caruaru",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem viaja.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-ca", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-ca", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-ca", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-ca", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-ca", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

        // ==================== PETROLINA - 10 RESTAURANTES ====================
    "Petrolina": {
        // ========== 1. CENTRO - COMIDA SERTANEJA ==========
        "petrolina-sertao": {
            id: "petrolina-sertao",
            nome: "🌵 Sabor do Sertão",
            endereco: "Av. Guararapes, 200 - Centro, Petrolina",
            horario: "11h às 22h",
            telefone: "(87) 3222-1111",
            descricao: "Culinária sertaneja autêntica do Vale do São Francisco. Baião de dois, carne de sol e buchada.",
            tipo: ["nordestina", "sertaneja", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "baiao-petrolina", nome: "🍚 Baião de Dois", descricao: "Arroz, feijão verde, carne seca, queijo coalho.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-petrolina", nome: "🥩 Carne de Sol", descricao: "Carne de sol com mandioca.", preco: 48, recuperacao: { fome: 72, felicidade: 24, energia: 16 } },
                { id: "buchada-petrolina", nome: "🍖 Buchada", descricao: "Buchada de bode.", preco: 45, recuperacao: { fome: 65, felicidade: 20, energia: 12 } },
                { id: "sarapatel-petrolina", nome: "🍲 Sarapatel", descricao: "Sarapatel.", preco: 42, recuperacao: { fome: 62, felicidade: 18, energia: 10 } },
                { id: "suco-petrolina", nome: "🥤 Suco de Caju", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== 2. ORLA - FRUTOS DO RIO SÃO FRANCISCO ==========
        "petrolina-orla": {
            id: "petrolina-orla",
            nome: "🐟 Orla Petrolina",
            endereco: "Orla de Petrolina - Av. Cardoso de Sá, Petrolina",
            horario: "11h às 23h",
            telefone: "(87) 3333-2222",
            descricao: "Frutos do rio São Francisco. Peixes frescos da região. Vista para o rio.",
            tipo: ["frutos-do-mar", "regional", "vista", "familiar"],
            preco_medio: 60,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "peixe-orla", nome: "🐟 Peixe Grelhado", descricao: "Peixe do São Francisco grelhado.", preco: 52, recuperacao: { fome: 62, felicidade: 22, energia: 14 } },
                { id: "camarao-orla", nome: "🍤 Camarão", descricao: "Camarões grelhados.", preco: 58, recuperacao: { fome: 65, felicidade: 24, energia: 15 } },
                { id: "moqueca-orla", nome: "🍲 Moqueca", descricao: "Moqueca de peixe.", preco: 62, recuperacao: { fome: 70, felicidade: 26, energia: 16 } },
                { id: "pirão-orla", nome: "🥣 Pirão", descricao: "Pirão de peixe.", preco: 15, recuperacao: { fome: 20, felicidade: 10, energia: 5 } },
                { id: "caipirinha-orla", nome: "🍹 Caipirinha", descricao: "Caipirinha.", preco: 16, recuperacao: { sede: 10, felicidade: 16, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - CHURRASCARIA ==========
        "petrolina-churrascaria": {
            id: "petrolina-churrascaria",
            nome: "🥩 Churrascaria Petrolina",
            endereco: "Av. Sete de Setembro, 500 - Centro, Petrolina",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(87) 3444-3333",
            descricao: "Churrascaria com cortes nobres e buffet. Ambiente familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 70,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-petrolina", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 72, recuperacao: { fome: 92, energia: 36, felicidade: 32 } },
                { id: "picanha-petrolina", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-petrolina", nome: "🍖 Costela", descricao: "Costela assada.", preco: 50, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-petrolina", nome: "🥗 Buffet", descricao: "Buffet self-service.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-petrolina-churr", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. VILA EDUARDO - COMIDA ITALIANA ==========
        "petrolina-italiana": {
            id: "petrolina-italiana",
            nome: "🍝 Cantina Villa",
            endereco: "Rua Vila Eduardo, 200 - Vila Eduardo, Petrolina",
            horario: "11h30 às 15h | 18h30 às 22h",
            telefone: "(87) 3555-4444",
            descricao: "Cantina italiana tradicional. Massas frescas e molhos caseiros.",
            tipo: ["italiana", "massas", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "parmegiana-villa", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado.", preco: 52, recuperacao: { fome: 65, energia: 20, felicidade: 16 } },
                { id: "lasanha-villa", nome: "🍝 Lasanha", descricao: "Lasanha bolonhesa.", preco: 48, recuperacao: { fome: 62, energia: 18, felicidade: 15 } },
                { id: "nhoque-villa", nome: "🥔 Nhoque", descricao: "Nhoque ao sugo.", preco: 45, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "polenta-villa", nome: "🍲 Polenta", descricao: "Polenta mole.", preco: 38, recuperacao: { fome: 52, energia: 16, felicidade: 12 } },
                { id: "vinho-villa", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 18, recuperacao: { sede: 8, felicidade: 14, energia: -5 } }
            ]
        },
        
        // ========== 5. VALE DO SÃO FRANCISCO - VINÍCOLA ==========
        "petrolina-vinicola": {
            id: "petrolina-vinicola",
            nome: "🍷 Vinícola do Vale",
            endereco: "Estrada do Vinho, 5000 - Zona Rural, Petrolina",
            horario: "10h às 18h",
            telefone: "(87) 3666-5555",
            descricao: "Vinícola do Vale do São Francisco. Degustação de vinhos e espumantes. Gastronomia harmonizada.",
            tipo: ["vinicola", "premium", "gastronomico", "turístico"],
            preco_medio: 100,
            estrelas: 4.8,
            avaliacoes: 890,
            cardapio: [
                { id: "degustacao-vale", nome: "🍷 Degustação", descricao: "5 vinhos do vale.", preco: 55, recuperacao: { sede: 10, felicidade: 26, energia: -6 } },
                { id: "harmonizacao-vale", nome: "🍽️ Harmonização", descricao: "Filé mignon com vinho tinto.", preco: 85, recuperacao: { fome: 70, felicidade: 30, energia: 20 } },
                { id: "tabua-queijos-vale", nome: "🧀 Tábua de Queijos", descricao: "Queijos artesanais.", preco: 42, recuperacao: { fome: 32, felicidade: 20, energia: 10 } },
                { id: "risoto-vale", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 65, recuperacao: { fome: 60, felicidade: 24, energia: 15 } },
                { id: "espumante-vale", nome: "🥂 Espumante", descricao: "Espumante brut.", preco: 32, recuperacao: { sede: 8, felicidade: 20, energia: -5 } }
            ]
        },
        
        // ========== 6. SHOPPING PETROLINA ==========
        "shopping-petrolina": {
            id: "shopping-petrolina",
            nome: "🛍️ Shopping Petrolina - Food Court",
            endereco: "Av. Fernando Bezerra, 500 - Centro, Petrolina",
            horario: "10h às 22h",
            telefone: "(87) 3777-6666",
            descricao: "Praça de alimentação do Shopping Petrolina.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 40,
            estrelas: 4.2,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-petrolina", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-petrolina", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 26, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "china-petrolina", nome: "🥢 China", descricao: "Yakisoba.", preco: 38, recuperacao: { fome: 52, energia: 14, felicidade: 10 } },
                { id: "japa-petrolina", nome: "🍣 Sushi", descricao: "Combinado.", preco: 38, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-petrolina-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. RODOVIÁRIA ==========
        "petrolina-rodoviaria": {
            id: "petrolina-rodoviaria",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Tancredo Neves, 1000 - Centro, Petrolina",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem viaja.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-pe", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-pe", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pe", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pe", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-pe", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        },
        
        // ========== 8. CAFEZINHO PETROLINA ==========
        "petrolina-cafe": {
            id: "petrolina-cafe",
            nome: "☕ Café Petrolina",
            endereco: "Rua Cel. Aprígio Duarte, 100 - Centro, Petrolina",
            horario: "08h às 20h",
            telefone: "(87) 3888-7777",
            descricao: "Cafeteria charmosa no centro. Cafés especiais e doces.",
            tipo: ["cafeteria", "doces", "artesanal"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-especial-cp", nome: "☕ Café", descricao: "Café arábica.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "cuca-cp", nome: "🍰 Cuca", descricao: "Cuca de banana.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } },
                { id: "pao-queijo-cp", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "tapioca-cp", nome: "🥞 Tapioca", descricao: "Tapioca.", preco: 10, recuperacao: { fome: 15, felicidade: 12, energia: 5 } },
                { id: "suco-cp", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. PIZZARIA PETROLINA ==========
        "petrolina-pizzaria": {
            id: "petrolina-pizzaria",
            nome: "🍕 Pizzaria Petrolina",
            endereco: "Av. das Nações, 300 - Centro, Petrolina",
            horario: "18h às 23h",
            telefone: "(87) 3999-8888",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-pt", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pt", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pt", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-pt", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-pt", nome: "🥤 Suco", descricao: "Suco.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. HAMBURGUERIA PETROLINA ==========
        "petrolina-hamburguer": {
            id: "petrolina-hamburguer",
            nome: "🍔 Hamburgueria do Vale",
            endereco: "Rua do Vale, 200 - Centro, Petrolina",
            horario: "18h às 00h",
            telefone: "(87) 4000-9999",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-vale", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-vale", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-vale", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-vale", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-vale", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        }
    }
};

export default restaurantesPE;