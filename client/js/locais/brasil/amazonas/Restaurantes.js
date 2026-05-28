const restaurantesAM = {
    // ==================== MANAUS (CAPITAL) - 20 RESTAURANTES ====================
    "Manaus": {
        // ========== 1. CENTRO - CULINÁRIA AMAZÔNICA TRADICIONAL ==========
        "centro-amazonica": {
            id: "centro-amazonica",
            nome: "🐟 Culinária Amazônica",
            endereco: "Rua 10 de Julho, 500 - Centro, Manaus",
            horario: "11h às 22h",
            telefone: "(92) 3222-1111",
            descricao: "Restaurante tradicional com culinária amazônica autêntica. Especialidades em peixes regionais: tambaqui, pirarucu, tucunaré. Ambiente rústico e acolhedor.",
            tipo: ["amazonica", "regional", "peixes", "tradicional", "familiar"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 3420,
            cardapio: [
                { id: "tambaqui-assado", nome: "🐟 Tambaqui Assado na Brasa", descricao: "Tambaqui fresco assado na brasa, acompanha arroz, farofa e vinagrete. Serve 2 pessoas.", preco: 78, recuperacao: { fome: 85, felicidade: 32, energia: 22 } },
                { id: "pirarucu-manteiga", nome: "🐟 Pirarucu na Manteiga", descricao: "Filé de pirarucu grelhado na manteiga de garrafa, com legumes salteados.", preco: 68, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "tacaca-centro", nome: "🥣 Tacacá", descricao: "Prato típico: tucupi quente, goma de tapioca, camarão seco e jambu.", preco: 22, recuperacao: { fome: 25, felicidade: 18, energia: 10 } },
                { id: "maniçoba-centro", nome: "🥬 Maniçoba", descricao: "Prato indígena com folha de mandioca cozida e carnes defumadas.", preco: 38, recuperacao: { fome: 70, felicidade: 24, energia: 14 } },
                { id: "suco-aze", nome: "🥤 Suco de Açaí", descricao: "Suco natural de açaí com guaraná.", preco: 12, recuperacao: { sede: 18, felicidade: 14, energia: 10 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA REGIONAL ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Centro",
            endereco: "Rua dos Andradas, 300 - Centro, Manaus",
            horario: "11h às 21h",
            telefone: "(92) 3333-2222",
            descricao: "Peixaria tradicional com os melhores peixes do Amazonas. Tambaqui, pirarucu, tucunaré, matrinxã. Ambiente simples e familiar.",
            tipo: ["peixaria", "amazonica", "regional", "familiar", "popular"],
            preco_medio: 50,
            estrelas: 4.6,
            avaliacoes: 2340,
            cardapio: [
                { id: "tucunare-grelhado", nome: "🐟 Tucunaré Grelhado", descricao: "Tucunaré fresco grelhado, acompanha arroz, farofa e salada.", preco: 55, recuperacao: { fome: 65, felicidade: 26, energia: 16 } },
                { id: "matrinxa-frito", nome: "🐟 Matrinxã Frito", descricao: "Matrinxã inteiro frito, crocante por fora e macio por dentro.", preco: 48, recuperacao: { fome: 60, felicidade: 24, energia: 15 } },
                { id: "caldeirada-peixe", nome: "🍲 Caldeirada Amazônica", descricao: "Caldeirada de peixe com legumes, leite de coco e jambu.", preco: 62, recuperacao: { fome: 75, felicidade: 28, energia: 18 } },
                { id: "camarao-amazonico", nome: "🍤 Camarão Regional", descricao: "Camarões do rio Amazonas salteados no alho.", preco: 52, recuperacao: { fome: 55, felicidade: 22, energia: 14 } },
                { id: "suco-cupuacu", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu com leite.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 3. CENTRO - TACACARIA ==========
        "centro-tacacaria": {
            id: "centro-tacacaria",
            nome: "🥣 Tacacaria da Rainha",
            endereco: "Rua Guilherme Moreira, 100 - Centro, Manaus",
            horario: "16h às 22h",
            telefone: "(92) 3444-3333",
            descricao: "Tacacaria tradicional no centro. Tacacá, maniçoba e comidas típicas da Amazônia. Frequentada por moradores e turistas.",
            tipo: ["tacacaria", "amazonica", "regional", "tradicional", "popular"],
            preco_medio: 30,
            estrelas: 4.8,
            avaliacoes: 4560,
            cardapio: [
                { id: "tacaca-rainha", nome: "🥣 Tacacá da Rainha", descricao: "Tacacá com tucupi, goma, camarão seco, jambu e pimenta.", preco: 20, recuperacao: { fome: 28, felicidade: 22, energia: 12 } },
                { id: "manicoba-rainha", nome: "🥬 Maniçoba Especial", descricao: "Maniçoba com mais de 7 carnes, arroz e farinha.", preco: 38, recuperacao: { fome: 75, felicidade: 26, energia: 15 } },
                { id: "vatapa-amazonico", nome: "🥣 Vatapá Regional", descricao: "Vatapá de peixe e camarão, cremoso.", preco: 25, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "pato-tucupi", nome: "🦆 Pato no Tucupi", descricao: "Pato cozido no tucupi com jambu e farinha d'água.", preco: 45, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "suco-tacaca", nome: "🥤 Suco de Açaí", descricao: "Açaí batido com guaraná.", preco: 10, recuperacao: { sede: 16, felicidade: 14, energia: 8 } }
            ]
        },

        // ========== 4. PONTA NEGRA - FRUTOS DO RIO ==========
        "ponta-negra-rio": {
            id: "ponta-negra-rio",
            nome: "🏖️ Restaurante Ponta Negra",
            endereco: "Av. Coronel Teixeira, 4000 - Ponta Negra, Manaus",
            horario: "11h às 23h",
            telefone: "(92) 3555-4444",
            descricao: "Frutos do rio com vista para o Rio Negro. Especialidades em peixes regionais. Ambiente sofisticado e romântico.",
            tipo: ["amazonica", "peixes", "vista", "premium", "romântico"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2870,
            cardapio: [
                { id: "pirarucu-pn", nome: "🐟 Pirarucu ao Molho", descricao: "Lombo de pirarucu grelhado com molho de camarão e castanha.", preco: 85, recuperacao: { fome: 78, felicidade: 32, energia: 20 } },
                { id: "tambaqui-pn", nome: "🐟 Tambaqui de Banda", descricao: "Tambaqui assado com banana-da-terra e farofa de castanha.", preco: 92, recuperacao: { fome: 85, felicidade: 34, energia: 22 } },
                { id: "camarao-pn", nome: "🍤 Camarão ao Coco", descricao: "Camarões grandes com leite de coco e castanha.", preco: 78, recuperacao: { fome: 68, felicidade: 28, energia: 18 } },
                { id: "risoto-pn", nome: "🍚 Risoto de Pirarucu", descricao: "Risoto cremoso com filé de pirarucu.", preco: 68, recuperacao: { fome: 65, felicidade: 26, energia: 16 } },
                { id: "caipirinha-pn", nome: "🍹 Caipirinha de Açaí", descricao: "Caipirinha com açaí e cachaça.", preco: 22, recuperacao: { sede: 10, felicidade: 20, energia: -6 } }
            ]
        },
        
        // ========== 5. PONTA NEGRA - QUIOSQUE ==========
        "ponta-negra-quiosque": {
            id: "ponta-negra-quiosque",
            nome: "🏖️ Quiosque Ponta Negra",
            endereco: "Praia da Ponta Negra - Orla, Manaus",
            horario: "08h às 22h",
            telefone: "(92) 3666-5555",
            descricao: "Quiosque na Praia da Ponta Negra. Petiscos, peixes, água de coco e ambiente descontraído.",
            tipo: ["praia", "petiscos", "peixes", "turístico", "casual"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 3450,
            cardapio: [
                { id: "agua-coco-pn", nome: "🥥 Água de Coco", descricao: "Água de coco natural gelada.", preco: 10, recuperacao: { sede: 32, felicidade: 8, energia: 5 } },
                { id: "camarao-quio", nome: "🍤 Camarão Crocante", descricao: "Camarões empanados fritos.", preco: 38, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "isca-tambaqui", nome: "🐟 Isca de Tambaqui", descricao: "Tiras de tambaqui empanadas.", preco: 35, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "pastel-quio", nome: "🥟 Pastel de Camarão", descricao: "Pastel recheado com camarão.", preco: 14, recuperacao: { fome: 20, felicidade: 10, energia: 4 } },
                { id: "suco-quio", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu.", preco: 10, recuperacao: { sede: 20, felicidade: 10, energia: 5 } }
            ]
        },

        // ========== 6. ADRIANÓPOLIS - COMIDA INTERNACIONAL ==========
        "adrianopolis-internacional": {
            id: "adrianopolis-internacional",
            nome: "🍽️ Casa do Chef",
            endereco: "Rua Rio Negro, 500 - Adrianópolis, Manaus",
            horario: "12h às 15h | 19h às 00h",
            telefone: "(92) 3777-6666",
            descricao: "Cozinha internacional contemporânea com influências amazônicas. Chef premiado. Ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico", "gastronomico"],
            preco_medio: 120,
            estrelas: 4.9,
            avaliacoes: 980,
            cardapio: [
                { id: "file-adri", nome: "🥩 Filé ao Molho de Vinho", descricao: "Filé mignon com molho de vinho tinto e cogumelos.", preco: 98, recuperacao: { fome: 75, felicidade: 36, energia: 24 } },
                { id: "lagosta-adri", nome: "🦞 Lagosta Grelhada", descricao: "Lagosta fresca com manteiga de ervas.", preco: 145, recuperacao: { fome: 85, felicidade: 42, energia: 26 } },
                { id: "salmao-adri", nome: "🐟 Salmão Amazônico", descricao: "Salmão grelhado com molho de maracujá.", preco: 85, recuperacao: { fome: 68, felicidade: 30, energia: 18 } },
                { id: "risoto-adri", nome: "🍚 Risoto de Camarão", descricao: "Risoto cremoso com camarões.", preco: 78, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "espumante-adri", nome: "🥂 Espumante", descricao: "Espumante brut importado.", preco: 38, recuperacao: { sede: 10, felicidade: 24, energia: -6 } }
            ]
        },
        
        // ========== 7. ADRIANÓPOLIS - CHURRASCARIA ==========
        "adrianopolis-churrascaria": {
            id: "adrianopolis-churrascaria",
            nome: "🥩 Churrascaria Adrianópolis",
            endereco: "Av. Djalma Batista, 1000 - Adrianópolis, Manaus",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(92) 3888-7777",
            descricao: "Churrascaria com rodízio de carnes nobres e buffet completo. Ambiente elegante e familiar.",
            tipo: ["churrascaria", "brasileira", "rodizio", "premium", "executivos"],
            preco_medio: 85,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "rodizio-adri", nome: "🥩 Rodízio Premium", descricao: "Mais de 15 cortes: picanha, costela, maminha, cordeiro.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38 } },
                { id: "picanha-adri", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 62, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "costela-adri", nome: "🍖 Costela", descricao: "Costela assada lentamente.", preco: 58, recuperacao: { fome: 75, energia: 28, felicidade: 22 } },
                { id: "buffet-adri", nome: "🥗 Buffet", descricao: "Saladas, massas, sushi, legumes.", preco: 55, recuperacao: { fome: 60, energia: 18, felicidade: 14 } },
                { id: "suco-adri", nome: "🥤 Suco de Açaí", descricao: "Açaí com guaraná.", preco: 12, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },

        // ========== 8. ALEIXO - COMIDA JAPONESA ==========
        "aleixo-japonesa": {
            id: "aleixo-japonesa",
            nome: "🍣 Sushi Aleixo",
            endereco: "Rua Alecrim, 200 - Aleixo, Manaus",
            horario: "18h às 23h30",
            telefone: "(92) 3999-8888",
            descricao: "Restaurante japonês com peixes frescos. Sushis, sashimis, temakis. Rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-aleixo", nome: "🍣 Rodízio", descricao: "Rodízio com 25 peças + temaki + hot roll.", preco: 79, recuperacao: { fome: 85, energia: 26, felicidade: 32 } },
                { id: "combinado-aleixo", nome: "🍱 Combinado", descricao: "20 peças variadas.", preco: 58, recuperacao: { fome: 62, energia: 18, felicidade: 24 } },
                { id: "temaki-aleixo", nome: "🍙 Temaki", descricao: "Temaki de salmão.", preco: 28, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "hot-aleixo", nome: "🌯 Hot Roll", descricao: "Hot rolls empanados.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "sake-aleixo", nome: "🍶 Saquê", descricao: "Saquê quente.", preco: 24, recuperacao: { sede: 8, felicidade: 16, energia: -6 } }
            ]
        },
        
        // ========== 9. ALEIXO - PIZZARIA ==========
        "aleixo-pizzaria": {
            id: "aleixo-pizzaria",
            nome: "🍕 Pizzaria Aleixo",
            endereco: "Rua das Mangueiras, 300 - Aleixo, Manaus",
            horario: "18h às 00h",
            telefone: "(92) 4000-9999",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha. Ambiente familiar.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-margherita-aleixo", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela, manjericão.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 14 } },
                { id: "pizza-calabresa-aleixo", nome: "🍕 Pizza Calabresa", descricao: "Calabresa, cebola.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 14 } },
                { id: "pizza-portuguesa-aleixo", nome: "🍕 Pizza Portuguesa", descricao: "Presunto, ovos, cebola.", preco: 58, recuperacao: { fome: 62, energia: 16, felicidade: 14 } },
                { id: "calzone-aleixo", nome: "🥟 Calzone", descricao: "Pizza fechada.", preco: 48, recuperacao: { fome: 52, energia: 14, felicidade: 12 } },
                { id: "suco-aleixo", nome: "🥤 Suco", descricao: "Suco de maracujá.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 10. PARQUE 10 - BOTECO ==========
        "parque10-boteco": {
            id: "parque10-boteco",
            nome: "🍺 Boteco Parque 10",
            endereco: "Av. Torquato Tapajós, 1000 - Parque 10, Manaus",
            horario: "17h às 03h",
            telefone: "(92) 4111-0000",
            descricao: "Boteco tradicional. Petiscos, cerveja gelada e música ao vivo. Point dos amigos.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "popular"],
            preco_medio: 35,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "tambaqui-boteco", nome: "🐟 Tambaqui Frito", descricao: "Postas de tambaqui frito.", preco: 38, recuperacao: { fome: 45, felicidade: 18, energia: 10 } },
                { id: "camarao-boteco", nome: "🍤 Camarão", descricao: "Camarões empanados.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 8 } },
                { id: "torresmo-boteco", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6 } },
                { id: "queijo-boteco", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-boteco", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 10, recuperacao: { sede: 24, felicidade: 12, energia: -5 } }
            ]
        },

        // ========== 11. FLORES - COMIDA ÁRABE ==========
        "flores-arabe": {
            id: "flores-arabe",
            nome: "🧆 Al Balad Manaus",
            endereco: "Rua Flores, 200 - Flores, Manaus",
            horario: "11h às 23h",
            telefone: "(92) 4222-1111",
            descricao: "Culinária árabe autêntica. Esfihas, quibes, hommus. Ambiente familiar.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "banquete-flores", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas, charme.", preco: 75, recuperacao: { fome: 85, felicidade: 30, energia: 18 } },
                { id: "esfiha-flores", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 30, recuperacao: { fome: 38, felicidade: 14, energia: 7 } },
                { id: "kibe-flores", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 25, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "hommus-flores", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 6 } },
                { id: "suco-flores", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 9, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 12. NOSSA SENHORA DAS GRAÇAS - COMIDA CASEIRA ==========
        "gracas-caseira": {
            id: "gracas-caseira",
            nome: "🇧🇷 Comida Caseira Graças",
            endereco: "Rua Major Gabriel, 300 - Nossa Sra. das Graças, Manaus",
            horario: "11h às 15h",
            telefone: "(92) 4333-2222",
            descricao: "Restaurante familiar com comida caseira. Prato feito e buffet. Frequentado por moradores.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "prato-feito-gracas", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína, salada.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-gracas", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-gracas", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-gracas", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-gracas", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },

        // ========== 13. COROADO - TACACARIA ==========
        "coroado-tacaca": {
            id: "coroado-tacaca",
            nome: "🥣 Tacacá do Coroado",
            endereco: "Av. Cosme Ferreira, 500 - Coroado, Manaus",
            horario: "16h às 23h",
            telefone: "(92) 4444-3333",
            descricao: "Tacacaria tradicional no bairro Coroado. Tacacá, maniçoba e vatapá.",
            tipo: ["tacacaria", "amazonica", "popular", "tradicional"],
            preco_medio: 25,
            estrelas: 4.6,
            avaliacoes: 1560,
            cardapio: [
                { id: "tacaca-coroado", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 25, felicidade: 20, energia: 10 } },
                { id: "manicoba-coroado", nome: "🥬 Maniçoba", descricao: "Maniçoba completa.", preco: 32, recuperacao: { fome: 68, felicidade: 22, energia: 12 } },
                { id: "vatapa-coroado", nome: "🥣 Vatapá", descricao: "Vatapá de peixe.", preco: 22, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "camarao-coroado", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 25, recuperacao: { fome: 28, felicidade: 14, energia: 7 } },
                { id: "suco-coroado", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 8, recuperacao: { sede: 16, felicidade: 10, energia: 6 } }
            ]
        },

        // ========== 14. CIDADE NOVA - LANCHONETE ==========
        "cidade-nova-lanchonete": {
            id: "cidade-nova-lanchonete",
            nome: "🍔 Lanchonete Cidade Nova",
            endereco: "Rua Cidade Nova, 200 - Cidade Nova, Manaus",
            horario: "08h às 22h",
            telefone: "(92) 4555-4444",
            descricao: "Lanchonete tradicional. X-tudo, sucos e salgados.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "x-tudo-cn", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, ovo, bacon.", preco: 24, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-cn", nome: "🍔 X-Salada", descricao: "Hambúrguer, alface, tomate.", preco: 16, recuperacao: { fome: 40, energia: 12, felicidade: 8 } },
                { id: "coxinha-cn", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-cn", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 7, energia: 3 } },
                { id: "suco-cn", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },

        // ========== 15. SHOPPING MANAUS ==========
        "shopping-manaus": {
            id: "shopping-manaus",
            nome: "🛍️ Shopping Manaus - Food Court",
            endereco: "Av. Djalma Batista, 2000 - Adrianópolis, Manaus",
            horario: "10h às 22h",
            telefone: "(92) 4666-5555",
            descricao: "Praça de alimentação do Shopping Manaus.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 5430,
            cardapio: [
                { id: "mc-manaus", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "habibs-manaus", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 28, recuperacao: { fome: 38, energia: 10, felicidade: 8 } },
                { id: "outback-manaus", nome: "🇦🇺 Outback", descricao: "Carnes.", preco: 55, recuperacao: { fome: 62, energia: 18, felicidade: 16 } },
                { id: "japa-manaus", nome: "🍣 Sushi", descricao: "Combinado.", preco: 42, recuperacao: { fome: 50, felicidade: 18, energia: 10 } },
                { id: "suco-manaus", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        },

        // ========== 16. DISTRITO INDUSTRIAL - RESTAURANTE POPULAR ==========
        "distrito-industrial": {
            id: "distrito-industrial",
            nome: "🍲 Restaurante Popular DI",
            endereco: "Av. Buriti, 1000 - Distrito Industrial, Manaus",
            horario: "11h às 14h",
            telefone: "(92) 4777-6666",
            descricao: "Restaurante popular com comida caseira. Preço acessível para trabalhadores.",
            tipo: ["brasileira", "popular", "buffet", "caseiro"],
            preco_medio: 15,
            estrelas: 4.3,
            avaliacoes: 2340,
            cardapio: [
                { id: "prato-feito-di", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 15, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-di", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 18, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-di", nome: "🍗 Frango", descricao: "Frango assado.", preco: 15, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-di", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 16, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-di", nome: "🥤 Suco", descricao: "Suco natural.", preco: 4, recuperacao: { sede: 18, energia: 5, felicidade: 4 } }
            ]
        },

        // ========== 17. SÃO JORGE - CAFÉ DA MANHÃ REGIONAL ==========
        "sao-jorge-cafe": {
            id: "sao-jorge-cafe",
            nome: "☕ Café São Jorge",
            endereco: "Rua São Jorge, 200 - São Jorge, Manaus",
            horario: "07h às 19h",
            telefone: "(92) 4888-7777",
            descricao: "Café regional com frutas amazônicas. Tapioca, açaí, sucos e bolos.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "tapioca-sj", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "acai-sj", nome: "🟣 Açaí na Tigela", descricao: "Açaí com granola e banana.", preco: 18, recuperacao: { fome: 25, felicidade: 20, energia: 12 } },
                { id: "cafe-sj", nome: "☕ Café", descricao: "Café regional.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "suco-sj", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural.", preco: 10, recuperacao: { sede: 18, energia: 8, felicidade: 8 } },
                { id: "bolo-sj", nome: "🍰 Bolo de Macaxeira", descricao: "Bolo de macaxeira.", preco: 10, recuperacao: { fome: 16, felicidade: 14, energia: 5 } }
            ]
        },

        // ========== 18. PLANALTO - HAMBURGUERIA ==========
        "planalto-hamburguer": {
            id: "planalto-hamburguer",
            nome: "🍔 Hamburguera Planalto",
            endereco: "Av. Planalto, 300 - Planalto, Manaus",
            horario: "18h às 00h",
            telefone: "(92) 4999-8888",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal", "vegana"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-planalto", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-planalto", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-planalto", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-planalto", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-planalto", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },

        // ========== 19. CENTRO - CAFETERIA ==========
        "centro-cafeteria": {
            id: "centro-cafeteria",
            nome: "☕ Café do Teatro",
            endereco: "Largo do Teatro, 50 - Centro, Manaus",
            horario: "09h às 20h",
            telefone: "(92) 5000-9999",
            descricao: "Cafeteria no cento, próximo ao Teatro Amazonas. Cafés e doces regionais.",
            tipo: ["cafeteria", "cultural", "doces", "turístico"],
            preco_medio: 30,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "cafe-teatro", nome: "☕ Café", descricao: "Café especial.", preco: 10, recuperacao: { sede: 10, energia: 14, felicidade: 12 } },
                { id: "bolo-teatro", nome: "🍰 Bolo de Rolo", descricao: "Bolo típico.", preco: 12, recuperacao: { fome: 16, felicidade: 16, energia: 5 } },
                { id: "tapioca-teatro", nome: "🥞 Tapioca", descricao: "Tapioca de coco.", preco: 14, recuperacao: { fome: 20, felicidade: 14, energia: 5 } },
                { id: "cupuacu-teatro", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 10, recuperacao: { sede: 18, energia: 8, felicidade: 8 } },
                { id: "pao-queijo-teatro", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 8, recuperacao: { fome: 12, felicidade: 10, energia: 4 } }
            ]
        },

        // ========== 20. AEROPORTO ==========
        "aeroporto-manaus": {
            id: "aeroporto-manaus",
            nome: "✈️ Aeroporto Eduardo Gomes - Praça de Alimentação",
            endereco: "Av. Santos Dumont, 1000 - Tarumã, Manaus",
            horario: "04h às 00h",
            telefone: "(92) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 45,
            estrelas: 3.8,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-aero", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero", nome: "☕ Habitual", descricao: "Café.", preco: 25, recuperacao: { fome: 25, energia: 15, felicidade: 10 } },
                { id: "starbucks-aero", nome: "☕ Starbucks", descricao: "Café.", preco: 15, recuperacao: { sede: 10, energia: 14, felicidade: 12 } },
                { id: "suco-aero", nome: "🥤 Suco", descricao: "Suco natural.", preco: 12, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        }
    },

     // ==================== PARINTINS - 10 RESTAURANTES ====================
    "Parintins": {
        // ========== 1. CENTRO - CULINÁRIA TÍPICA ==========
        "parintins-tradicional": {
            id: "parintins-tradicional",
            nome: "🐟 Sabor Parintins",
            endereco: "Rua Joaquim Gomes, 200 - Centro, Parintins",
            horario: "11h às 22h",
            telefone: "(92) 3222-1111",
            descricao: "Culinária típica de Parintins. Peixes regionais, tacacá e maniçoba. Ambiente festivo com decoração do Boi-Bumbá.",
            tipo: ["amazonica", "regional", "peixes", "tradicional", "turístico"],
            preco_medio: 55,
            estrelas: 4.7,
            avaliacoes: 1870,
            cardapio: [
                { id: "tambaqui-parintins", nome: "🐟 Tambaqui no Tucupi", descricao: "Tambaqui cozido no tucupi com jambu e farinha d'água.", preco: 68, recuperacao: { fome: 80, felicidade: 30, energia: 20 } },
                { id: "pirarucu-parintins", nome: "🐟 Pirarucu Grelhado", descricao: "Filé de pirarucu grelhado com manteiga de garrafa.", preco: 58, recuperacao: { fome: 68, felicidade: 26, energia: 16 } },
                { id: "tacaca-parintins", nome: "🥣 Tacacá", descricao: "Tacacá tradicional com camarão seco e jambu.", preco: 18, recuperacao: { fome: 25, felicidade: 18, energia: 10 } },
                { id: "manicoba-parintins", nome: "🥬 Maniçoba", descricao: "Maniçoba com carnes defumadas.", preco: 42, recuperacao: { fome: 70, felicidade: 24, energia: 14 } },
                { id: "suco-parintins", nome: "🥤 Suco de Açaí", descricao: "Açaí batido com guaraná.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 12 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO DO BOI ==========
        "parintins-boteco": {
            id: "parintins-boteco",
            nome: "🍺 Boteco do Boi",
            endereco: "Av. Amazonas, 300 - Centro, Parintins",
            horario: "17h às 03h",
            telefone: "(92) 3333-2222",
            descricao: "Boteco tradicional no centro. Petiscos, cerveja gelada e músicas do Festival de Parintins. Point dos moradores.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 1560,
            cardapio: [
                { id: "camarao-boteco-pa", nome: "🍤 Camarão", descricao: "Camarões empanados.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "tambaqui-frito-pa", nome: "🐟 Tambaqui Frito", descricao: "Postas de tambaqui.", preco: 35, recuperacao: { fome: 42, felicidade: 18, energia: 10 } },
                { id: "torresmo-pa", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-pa", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "chopp-pa", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. CENTRO - PIZZARIA ==========
        "parintins-pizzaria": {
            id: "parintins-pizzaria",
            nome: "🍕 Pizzaria Ilha",
            endereco: "Rua 24 de Outubro, 150 - Centro, Parintins",
            horário: "18h às 23h",
            telefone: "(92) 3444-3333",
            descricao: "Pizzaria tradicional. Massa fina e forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "pizza-mussarela-pa", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-pa", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-pa", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-pa", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-pa", nome: "🥤 Suco", descricao: "Suco de maracujá.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 4. SHOPPING PARINTINS ==========
        "shopping-parintins": {
            id: "shopping-parintins",
            nome: "🛍️ Shopping Parintins - Food Court",
            endereco: "Av. Nações Unidas, 500 - Centro, Parintins",
            horario: "10h às 22h",
            telefone: "(92) 3555-4444",
            descricao: "Praça de alimentação do Shopping Parintins.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-pa", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-pa", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-pa", nome: "🥢 China", descricao: "Yakisoba.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-pa", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 45, felicidade: 15, energia: 10 } },
                { id: "suco-pa-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. PRAIA DA LUA - QUIOSQUE ==========
        "praia-lua-quiosque": {
            id: "praia-lua-quiosque",
            nome: "🏖️ Quiosque Praia da Lua",
            endereco: "Praia da Lua - Orla, Parintins",
            horario: "08h às 21h",
            telefone: "(92) 3666-5555",
            descricao: "Quiosque na Praia da Lua. Petiscos e frutos do rio. Ambiente descontraído.",
            tipo: ["praia", "petiscos", "peixes", "turístico"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "agua-coco-pl", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 30, felicidade: 8, energia: 5 } },
                { id: "camarao-pl", nome: "🍤 Camarão", descricao: "Camarão grelhado.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "isca-pl", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 28, recuperacao: { fome: 32, felicidade: 14, energia: 8 } },
                { id: "pastel-pl", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 4 } },
                { id: "suco-pl", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 6. SANTA CLARA - COMIDA CASEIRA ==========
        "santa-clara-caseira": {
            id: "santa-clara-caseira",
            nome: "🇧🇷 Comida Caseira Santa Clara",
            endereco: "Rua Santa Clara, 200 - Santa Clara, Parintins",
            horario: "11h às 15h",
            telefone: "(92) 3777-6666",
            descricao: "Restaurante familiar. Comida caseira e buffet.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-sc", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 22, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-sc", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 24, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-sc", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 20, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-sc", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 22, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-sc", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 7. CAFÉ REGIONAL ==========
        "parintins-cafe": {
            id: "parintins-cafe",
            nome: "☕ Café Regional",
            endereco: "Rua Sete de Setembro, 100 - Centro, Parintins",
            horario: "07h às 19h",
            telefone: "(92) 3888-7777",
            descricao: "Cafeteria com frutas regionais. Tapioca, açaí e sucos.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 25,
            estrelas: 4.5,
            avaliacoes: 670,
            cardapio: [
                { id: "tapioca-cafe-pa", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "acai-cafe-pa", nome: "🟣 Açaí", descricao: "Açaí com granola.", preco: 16, recuperacao: { fome: 22, felicidade: 18, energia: 10 } },
                { id: "cafe-pa", nome: "☕ Café", descricao: "Café regional.", preco: 8, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "suco-cafe-pa", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 10, recuperacao: { sede: 18, energia: 8, felicidade: 8 } },
                { id: "pao-queijo-cafe-pa", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } }
            ]
        },
        
        // ========== 8. HAMBURGUERIA BOI ==========
        "parintins-hamburguer": {
            id: "parintins-hamburguer",
            nome: "🍔 Hamburgueria Boi",
            endereco: "Av. Amazonas, 500 - Centro, Parintins",
            horario: "18h às 00h",
            telefone: "(92) 3999-8888",
            descricao: "Hamburgueria artesanal. Cervejas artesanais.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-pa", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 38, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "vegan-pa", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 40, recuperacao: { fome: 55, energia: 18, felicidade: 14 } },
                { id: "batata-pa", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-pa", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "milkshake-pa", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 18, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 9. TACACARIA DO BOI ==========
        "tacacaria-parintins": {
            id: "tacacaria-parintins",
            nome: "🥣 Tacacaria do Boi",
            endereco: "Rua Tupinambás, 200 - Centro, Parintins",
            horario: "16h às 22h",
            telefone: "(92) 4000-9999",
            descricao: "Tacacaria tradicional. Tacacá, maniçoba e vatapá.",
            tipo: ["tacacaria", "amazonica", "popular", "tradicional"],
            preco_medio: 25,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "tacaca-tp", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 25, felicidade: 20, energia: 10 } },
                { id: "manicoba-tp", nome: "🥬 Maniçoba", descricao: "Maniçoba completa.", preco: 35, recuperacao: { fome: 68, felicidade: 22, energia: 12 } },
                { id: "vatapa-tp", nome: "🥣 Vatapá", descricao: "Vatapá regional.", preco: 20, recuperacao: { fome: 30, felicidade: 16, energia: 8 } },
                { id: "pato-tucupi-tp", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 45, recuperacao: { fome: 70, felicidade: 26, energia: 16 } },
                { id: "suco-tp", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 8, recuperacao: { sede: 16, felicidade: 10, energia: 6 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-parintins": {
            id: "rodoviaria-parintins",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Paraná, 100 - Centro, Parintins",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas para quem viaja.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 20,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-pt", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-pt", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-pt", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-pt", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-pt", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== TEFÉ - 10 RESTAURANTES ====================
    "Tefé": {
        // ========== 1. CENTRO - CULINÁRIA INDÍGENA ==========
        "tefe-indigena": {
            id: "tefe-indigena",
            nome: "🌿 Culinária Indígena",
            endereco: "Rua Tefé, 200 - Centro, Tefé",
            horario: "11h às 21h",
            telefone: "(97) 3222-1111",
            descricao: "Culinária indígena autêntica. Peixes do rio Tefé, tapioca, beiju e frutos regionais. Ambiente rústico.",
            tipo: ["indigena", "amazonica", "regional", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "peixe-tefe", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha de bananeira com temperos indígenas.", preco: 55, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "tapioca-tefe", nome: "🥞 Tapioca Indígena", descricao: "Tapioca com peixe desfiado e castanha.", preco: 28, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "beiju-tefe", nome: "🍞 Beiju", descricao: "Beiju de tapioca com manteiga.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pato-tefe", nome: "🦆 Pato no Tucupi", descricao: "Pato cozido no tucupi com jambu.", preco: 48, recuperacao: { fome: 72, felicidade: 26, energia: 16 } },
                { id: "suco-tefe", nome: "🥤 Suco de Buriti", descricao: "Suco natural de buriti.", preco: 10, recuperacao: { sede: 20, felicidade: 14, energia: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - BOTECO ==========
        "tefe-boteco": {
            id: "tefe-boteco",
            nome: "🍺 Boteco do Tefé",
            endereco: "Rua Amazonas, 300 - Centro, Tefé",
            horario: "17h às 02h",
            telefone: "(97) 3333-2222",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "camarao-bot-tf", nome: "🍤 Camarão", descricao: "Camarão empanado.", preco: 32, recuperacao: { fome: 38, felicidade: 16, energia: 8 } },
                { id: "peixe-bot-tf", nome: "🐟 Peixe Frito", descricao: "Peixe frito.", preco: 28, recuperacao: { fome: 35, felicidade: 14, energia: 7 } },
                { id: "torresmo-bot-tf", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-bot-tf", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "chopp-bot-tf", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 3. PRAIA DO TEFÉ - QUIOSQUE ==========
        "tefe-praia": {
            id: "tefe-praia",
            nome: "🏖️ Quiosque Praia do Tefé",
            endereco: "Praia do Tefé - Orla, Tefé",
            horario: "08h às 21h",
            telefone: "(97) 3444-3333",
            descricao: "Quiosque na Praia do Tefé. Petiscos e peixes regionais.",
            tipo: ["praia", "petiscos", "peixes", "turístico"],
            preco_medio: 30,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "agua-coco-tf", nome: "🥥 Água de Coco", descricao: "Água de coco.", preco: 8, recuperacao: { sede: 30, felicidade: 8, energia: 5 } },
                { id: "camarao-tf", nome: "🍤 Camarão", descricao: "Camarão grelhado.", preco: 35, recuperacao: { fome: 40, felicidade: 16, energia: 10 } },
                { id: "isca-tf", nome: "🐟 Isca", descricao: "Isca de peixe.", preco: 25, recuperacao: { fome: 30, felicidade: 12, energia: 6 } },
                { id: "pastel-tf", nome: "🥟 Pastel", descricao: "Pastel de camarão.", preco: 12, recuperacao: { fome: 18, felicidade: 10, energia: 4 } },
                { id: "suco-tf", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - PIZZARIA ==========
        "tefe-pizzaria": {
            id: "tefe-pizzaria",
            nome: "🍕 Pizzaria Tefé",
            endereco: "Rua Duque de Caxias, 100 - Centro, Tefé",
            horario: "18h às 23h",
            telefone: "(97) 3555-4444",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "pizza-mussarela-tf", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-tf", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-tf", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-tf", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-tf", nome: "🥤 Suco", descricao: "Suco de maracujá.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 5. COMIDA CASEIRA ==========
        "tefe-caseira": {
            id: "tefe-caseira",
            nome: "🇧🇷 Comida Caseira Tefé",
            endereco: "Rua da Matriz, 200 - Centro, Tefé",
            horario: "11h às 15h",
            telefone: "(97) 3666-5555",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-tf", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-tf", nome: "🥩 Bife", descricao: "Bife grelhado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-tf", nome: "🍗 Frango", descricao: "Frango assado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-tf", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-tf", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 6. CAFÉ REGIONAL ==========
        "tefe-cafe": {
            id: "tefe-cafe",
            nome: "☕ Café Tefé",
            endereco: "Av. Getúlio Vargas, 150 - Centro, Tefé",
            horario: "07h às 19h",
            telefone: "(97) 3777-6666",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-tf", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "acai-tf", nome: "🟣 Açaí", descricao: "Açaí com granola.", preco: 15, recuperacao: { fome: 22, felicidade: 18, energia: 10 } },
                { id: "cafe-tf", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "suco-tf-cafe", nome: "🥤 Suco", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 18, energia: 8, felicidade: 8 } },
                { id: "pao-queijo-tf", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 12, felicidade: 8, energia: 4 } }
            ]
        },
        
        // ========== 7. TACACARIA TEFÉ ==========
        "tefe-tacacaria": {
            id: "tefe-tacacaria",
            nome: "🥣 Tacacaria Tefé",
            endereco: "Rua 15 de Novembro, 100 - Centro, Tefé",
            horario: "16h às 22h",
            telefone: "(97) 3888-7777",
            descricao: "Tacacaria tradicional. Tacacá e maniçoba.",
            tipo: ["tacacaria", "amazonica", "popular"],
            preco_medio: 22,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "tacaca-tf", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 16, recuperacao: { fome: 25, felicidade: 20, energia: 10 } },
                { id: "manicoba-tf", nome: "🥬 Maniçoba", descricao: "Maniçoba.", preco: 32, recuperacao: { fome: 68, felicidade: 22, energia: 12 } },
                { id: "vatapa-tf", nome: "🥣 Vatapá", descricao: "Vatapá.", preco: 18, recuperacao: { fome: 28, felicidade: 16, energia: 8 } },
                { id: "camarao-tf", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 22, recuperacao: { fome: 26, felicidade: 14, energia: 7 } },
                { id: "suco-tf", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 8, recuperacao: { sede: 16, felicidade: 10, energia: 6 } }
            ]
        },
        
        // ========== 8. HAMBURGUERIA ==========
        "tefe-hamburguer": {
            id: "tefe-hamburguer",
            nome: "🍔 Hamburgueria Tefé",
            endereco: "Av. Amazonas, 400 - Centro, Tefé",
            horario: "18h às 00h",
            telefone: "(97) 3999-8888",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-tf", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-tf", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-tf", nome: "🍟 Batata", descricao: "Batata frita.", preco: 18, recuperacao: { fome: 22, felicidade: 8, energia: 4 } },
                { id: "onion-tf", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "milkshake-tf", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 9. PEIXARIA REGIONAL ==========
        "tefe-peixaria": {
            id: "tefe-peixaria",
            nome: "🐟 Peixaria do Tefé",
            endereco: "Rua da Praia, 100 - Centro, Tefé",
            horario: "11h às 21h",
            telefone: "(97) 4000-9999",
            descricao: "Peixes frescos do rio Tefé.",
            tipo: ["peixaria", "amazonica", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tucunare-tf", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 48, recuperacao: { fome: 62, energia: 22, felicidade: 18 } },
                { id: "pirarucu-tf", nome: "🐟 Pirarucu", descricao: "Pirarucu na manteiga.", preco: 52, recuperacao: { fome: 65, energia: 24, felicidade: 18 } },
                { id: "tambaqui-tf", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "caldeirada-tf", nome: "🍲 Caldeirada", descricao: "Caldeirada de peixe.", preco: 58, recuperacao: { fome: 70, energia: 26, felicidade: 20 } },
                { id: "suco-tf", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 8, recuperacao: { sede: 18, energia: 8, felicidade: 6 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-tefe": {
            id: "rodoviaria-tefe",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Castelo Branco, 200 - Centro, Tefé",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-tf", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-tf-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-tf", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-tf", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-tf", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesAM;