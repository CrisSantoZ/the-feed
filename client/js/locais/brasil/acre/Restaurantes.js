const restaurantesAC = {
    // ==================== RIO BRANCO (CAPITAL) - 20 RESTAQUÊ? RESTAURANTES ====================
    "Rio Branco": {
        // ========== 1. CENTRO - CULINÁRIA ACREANA (TACACÁ E MANIÇOCA) ==========
        "centro-acreana": {
            id: "centro-acreana",
            nome: "🍲 Culinária Acreana",
            endereco: "Rua 24 de Janeiro, 500 - Centro, Rio Branco",
            horario: "11h às 22h",
            telefone: "(68) 3222-1111",
            descricao: "Culinária típica acreana. Tacacá, maniçoca, peixes do rio Acre e pratos da região amazônica. Ambiente familiar e acolhedor.",
            tipo: ["acreana", "amazonica", "regional", "tradicional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 1240,
            cardapio: [
                { id: "tacaca-rio", nome: "🥣 Tacacá Acreano", descricao: "Tucupi quente, goma de tapioca, camarão seco e jambu.", preco: 22, recuperacao: { fome: 28, felicidade: 20, energia: 12 } },
                { id: "manicoca-rio", nome: "🥬 Maniçoca", descricao: "Folha de mandioca cozida com carnes defumadas.", preco: 38, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "peixe-rio", nome: "🐟 Peixe na Brasa", descricao: "Peixe do rio Acre grelhado na brasa.", preco: 48, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "camarao-rio", nome: "🍤 Camarão Acreano", descricao: "Camarão do rio com leite de coco.", preco: 42, recuperacao: { fome: 58, felicidade: 22, energia: 14 } },
                { id: "suco-rio", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural de cupuaçu.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 2. CENTRO - PEIXARIA ==========
        "centro-peixaria": {
            id: "centro-peixaria",
            nome: "🐟 Peixaria do Acre",
            endereco: "Rua Benjamin Constant, 300 - Centro, Rio Branco",
            horario: "11h às 22h",
            telefone: "(68) 3333-2222",
            descricao: "Peixes frescos do rio Acre. Tambaqui, pirarucu, tucunaré e surubim. Ambiente simples e familiar.",
            tipo: ["peixaria", "acreana", "amazonica", "familiar", "tradicional"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                { id: "tambaqui-rio", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa com farofa e vinagrete.", preco: 55, recuperacao: { fome: 72, felicidade: 26, energia: 18 } },
                { id: "pirarucu-rio", nome: "🐟 Pirarucu ao Molho", descricao: "Filé de pirarucu com molho de camarão.", preco: 58, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "tucunare-rio", nome: "🐟 Tucunaré Grelhado", descricao: "Tucunaré fresco grelhado.", preco: 52, recuperacao: { fome: 64, felicidade: 24, energia: 16 } },
                { id: "surubim-rio", nome: "🐟 Surubim ao Leite", descricao: "Surubim cozido com leite de coco.", preco: 48, recuperacao: { fome: 62, felicidade: 22, energia: 15 } },
                { id: "suco-peixe", nome: "🥤 Suco de Açaí", descricao: "Suco de açaí com guaraná.", preco: 12, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 3. CENTRO - TACACARIA ==========
        "centro-tacacaria": {
            id: "centro-tacacaria",
            nome: "🥣 Tacacaria do Acre",
            endereco: "Rua Rio Branco, 200 - Centro, Rio Branco",
            horario: "16h às 22h",
            telefone: "(68) 3444-3333",
            descricao: "Tacacaria tradicional. Tacacá, maniçoca, vatapá e petiscos acreanos.",
            tipo: ["tacacaria", "acreana", "amazonica", "popular", "tradicional"],
            preco_medio: 30,
            estrelas: 4.7,
            avaliacoes: 1560,
            cardapio: [
                { id: "tacaca-trad", nome: "🥣 Tacacá Tradicional", descricao: "Tacacá com tucupi, goma, camarão e jambu.", preco: 20, recuperacao: { fome: 28, felicidade: 22, energia: 12 } },
                { id: "manicoca-trad", nome: "🥬 Maniçoca", descricao: "Maniçoca com carnes.", preco: 35, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "vatapa-trad", nome: "🥣 Vatapá", descricao: "Vatapá de peixe e camarão.", preco: 25, recuperacao: { fome: 35, felicidade: 18, energia: 10 } },
                { id: "camarao-trad", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 22, recuperacao: { fome: 25, felicidade: 14, energia: 7 } },
                { id: "suco-trad", nome: "🥤 Suco de Cupuaçu", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 4. BOSQUE - CHURRASCARIA ==========
        "bosque-churrascaria": {
            id: "bosque-churrascaria",
            nome: "🥩 Churrascaria Bosque",
            endereco: "Av. Ceará, 1000 - Bosque, Rio Branco",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(68) 3555-4444",
            descricao: "Churrascaria com rodízio de carnes nobres. Buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-bosque", nome: "🥩 Rodízio", descricao: "Rodízio de carnes.", preco: 69, recuperacao: { fome: 95, energia: 38, felicidade: 34 } },
                { id: "picanha-bosque", nome: "🥩 Picanha", descricao: "Picanha 300g.", preco: 55, recuperacao: { fome: 68, energia: 24, felicidade: 18 } },
                { id: "costela-bosque", nome: "🍖 Costela", descricao: "Costela assada.", preco: 52, recuperacao: { fome: 72, energia: 26, felicidade: 20 } },
                { id: "buffet-bosque", nome: "🥗 Buffet", descricao: "Buffet self-service.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "suco-bosque", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 5. BOSQUE - COMIDA AMAZÔNICA ==========
        "bosque-amazonica": {
            id: "bosque-amazonica",
            nome: "🌿 Sabor Amazônico",
            endereco: "Rua Isaura Parente, 500 - Bosque, Rio Branco",
            horario: "11h às 22h",
            telefone: "(68) 3666-5555",
            descricao: "Culinária amazônica autêntica. Ingredientes da floresta e peixes regionais.",
            tipo: ["amazonica", "regional", "tradicional", "familiar"],
            preco_medio: 50,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "baiao-amz", nome: "🍚 Baião de Dois", descricao: "Baião com carne seca.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "peixe-amz", nome: "🐟 Peixe Amazônico", descricao: "Peixe grelhado.", preco: 48, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "tacaca-amz", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 24, felicidade: 18, energia: 10 } },
                { id: "manicoca-amz", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 35, recuperacao: { fome: 65, felicidade: 20, energia: 12 } },
                { id: "suco-amz", nome: "🥤 Suco de Açaí", descricao: "Açaí com guaraná.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 6. JARDIM EUROPA - COMIDA INTERNACIONAL ==========
        "jardim-europa": {
            id: "jardim-europa",
            nome: "🍽️ Europa Gastrô",
            endereco: "Rua Jardim Europa, 300 - Jardim Europa, Rio Branco",
            horário: "12h às 15h | 19h às 23h",
            telefone: "(68) 3777-6666",
            descricao: "Cozinha internacional contemporânea. Ambiente sofisticado.",
            tipo: ["contemporanea", "internacional", "premium", "romântico"],
            preco_medio: 100,
            estrelas: 4.7,
            avaliacoes: 560,
            cardapio: [
                { id: "file-europa", nome: "🥩 Filé Mignon", descricao: "Filé ao molho madeira.", preco: 78, recuperacao: { fome: 72, felicidade: 32, energia: 22 } },
                { id: "salmao-europa", nome: "🐟 Salmão", descricao: "Salmão grelhado.", preco: 68, recuperacao: { fome: 65, felicidade: 28, energia: 18 } },
                { id: "risoto-europa", nome: "🍚 Risoto", descricao: "Risoto de camarão.", preco: 62, recuperacao: { fome: 62, felicidade: 26, energia: 16 } },
                { id: "lagosta-europa", nome: "🦞 Lagosta", descricao: "Lagosta grelhada.", preco: 120, recuperacao: { fome: 80, felicidade: 38, energia: 24 } },
                { id: "vinho-europa", nome: "🍷 Vinho", descricao: "Vinho tinto chileno.", preco: 32, recuperacao: { sede: 10, felicidade: 18, energia: -6 } }
            ]
        },
        
        // ========== 7. VILA IVONETE - BOTECO ==========
        "vila-ivonete-boteco": {
            id: "vila-ivonete-boteco",
            nome: "🍺 Boteco da Vila",
            endereco: "Rua Ivonete, 500 - Vila Ivonete, Rio Branco",
            horario: "17h às 02h",
            telefone: "(68) 3888-7777",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 890,
            cardapio: [
                { id: "calabresa-vi", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-vi", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-vi", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-vi", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-vi", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 8. CONQUISTA - PIZZARIA ==========
        "conquista-pizzaria": {
            id: "conquista-pizzaria",
            nome: "🍕 Pizzaria Conquista",
            endereco: "Rua Conquista, 300 - Conquista, Rio Branco",
            horario: "18h às 23h30",
            telefone: "(68) 3999-8888",
            descricao: "Pizzaria tradicional. Massa fina.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 670,
            cardapio: [
                { id: "pizza-mussarela-co", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-co", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-co", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-co", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-co", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 9. AEROPORTO VELHO - HAMBURGUERIA ==========
        "aeroporto-velho-hamburguer": {
            id: "aeroporto-velho-hamburguer",
            nome: "🍔 Hamburgueria AV",
            endereco: "Rua Aviador, 500 - Aeroporto Velho, Rio Branco",
            horario: "18h às 00h",
            telefone: "(68) 4000-9999",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "smash-av", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-av", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-av", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-av", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-av", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 10. CIDADE NOVA - COMIDA CASEIRA ==========
        "cidade-nova-caseira": {
            id: "cidade-nova-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Cidade Nova, 300 - Cidade Nova, Rio Branco",
            horário: "11h às 15h",
            telefone: "(68) 4111-0000",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 780,
            cardapio: [
                { id: "prato-feito-cn", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cn", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cn", nome: "🍗 Frango", descricao: "Frango grelhado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cn", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cn", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 11. PLACAS - CAFÉ REGIONAL ==========
        "placas-cafe": {
            id: "placas-cafe",
            nome: "☕ Café Regional",
            endereco: "Rua Placas, 500 - Placas, Rio Branco",
            horario: "08h às 20h",
            telefone: "(68) 4222-1111",
            descricao: "Cafeteria com produtos regionais. Cafés, bolos e tapiocas.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "cafe-placas", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-placas", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-placas", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-placas", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-placas", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 12. SEIS DE AGOSTO - COMIDA INDÍGENA ==========
        "seis-agosto-indigena": {
            id: "seis-agosto-indigena",
            nome: "🌿 Comida Indígena",
            endereco: "Rua Seis de Agosto, 200 - Seis de Agosto, Rio Branco",
            horario: "11h às 21h",
            telefone: "(68) 4333-2222",
            descricao: "Culinária indígena autêntica da região. Peixes, mandioca e frutos da floresta.",
            tipo: ["indigena", "amazonica", "regional", "tradicional"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 450,
            cardapio: [
                { id: "peixe-indigena", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha de bananeira.", preco: 48, recuperacao: { fome: 68, felicidade: 26, energia: 18 } },
                { id: "beiju-indigena", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "macaxeira-indigena", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pato-indigena", nome: "🦆 Pato no Tucupi", descricao: "Pato cozido no tucupi.", preco: 52, recuperacao: { fome: 72, felicidade: 28, energia: 18 } },
                { id: "suco-indigena", nome: "🥤 Suco de Buriti", descricao: "Suco de buriti.", preco: 10, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 13. ESTAÇÃO EXPERIMENTAL - LANCHONETE ==========
        "estacao-lanchonete": {
            id: "estacao-lanchonete",
            nome: "🍔 Lanchonete Estação",
            endereco: "Rua Experimental, 300 - Estação Experimental, Rio Branco",
            horario: "08h às 22h",
            telefone: "(68) 4444-3333",
            descricao: "Lanchonete tradicional.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.2,
            avaliacoes: 670,
            cardapio: [
                { id: "x-tudo-ee", nome: "🍔 X-Tudo", descricao: "X-tudo.", preco: 22, recuperacao: { fome: 58, energia: 18, felicidade: 14 } },
                { id: "x-salada-ee", nome: "🍔 X-Salada", descricao: "X-salada.", preco: 15, recuperacao: { fome: 40, energia: 12, felicidade: 10 } },
                { id: "coxinha-ee", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 7, recuperacao: { fome: 14, felicidade: 7, energia: 3 } },
                { id: "pastel-ee", nome: "🥟 Pastel", descricao: "Pastel de queijo.", preco: 8, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "suco-ee", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 14. UNIVERSITÁRIO - COMIDA RÁPIDA ==========
        "universitario-rapida": {
            id: "universitario-rapida",
            nome: "🍔 Comida Rápida Universitário",
            endereco: "Rua Universitário, 500 - Universitário, Rio Branco",
            horário: "10h às 22h",
            telefone: "(68) 4555-4444",
            descricao: "Comida rápida para estudantes.",
            tipo: ["fast-food", "lanches", "popular", "universitario"],
            preco_medio: 18,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "sanduiche-uni", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-uni", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-uni", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pastel-uni", nome: "🥟 Pastel", descricao: "Pastel.", preco: 7, recuperacao: { fome: 12, felicidade: 6, energia: 3 } },
                { id: "cafe-uni", nome: "☕ Café", descricao: "Café.", preco: 5, recuperacao: { sede: 8, energia: 10, felicidade: 6 } }
            ]
        },
        
        // ========== 15. CALAFATE - PEIXARIA ==========
        "calafate-peixaria": {
            id: "calafate-peixaria",
            nome: "🐟 Peixaria Calafate",
            endereco: "Rua Calafate, 200 - Calafate, Rio Branco",
            horario: "11h às 21h",
            telefone: "(68) 4666-5555",
            descricao: "Peixes frescos do rio Acre.",
            tipo: ["peixaria", "acreana", "amazonica", "familiar"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-calafate", nome: "🐟 Peixe Grelhado", descricao: "Peixe do dia.", preco: 45, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "camarao-calafate", nome: "🍤 Camarão", descricao: "Camarão alho e óleo.", preco: 48, recuperacao: { fome: 62, felicidade: 24, energia: 16 } },
                { id: "moqueca-calafate", nome: "🍲 Moqueca", descricao: "Moqueca.", preco: 55, recuperacao: { fome: 68, felicidade: 26, energia: 17 } },
                { id: "tambaqui-calafate", nome: "🐟 Tambaqui", descricao: "Tambaqui assado.", preco: 52, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "suco-calafate", nome: "🥤 Suco", descricao: "Suco de açaí.", preco: 9, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 16. MORADA DO SOL - TAPIOCARIA ==========
        "morada-sol-tapiocaria": {
            id: "morada-sol-tapiocaria",
            nome: "🥞 Tapiocaria Morada",
            endereco: "Rua Morada do Sol, 300 - Morada do Sol, Rio Branco",
            horario: "08h às 21h",
            telefone: "(68) 4777-6666",
            descricao: "Tapiocaria com diversos sabores.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.4,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-ms", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-ms", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-ms", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-ms", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-ms", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 17. SÃO FRANCISCO - COMIDA NORDESTINA ==========
        "sao-francisco-nordestina": {
            id: "sao-francisco-nordestina",
            nome: "🌵 Sabor Nordestino",
            endereco: "Rua São Francisco, 200 - São Francisco, Rio Branco",
            horario: "11h às 21h",
            telefone: "(68) 4888-7777",
            descricao: "Culinária nordestina autêntica.",
            tipo: ["nordestina", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "baiao-sf", nome: "🍚 Baião de Dois", descricao: "Baião.", preco: 42, recuperacao: { fome: 68, felicidade: 22, energia: 14 } },
                { id: "carne-sol-sf", nome: "🥩 Carne de Sol", descricao: "Carne de sol.", preco: 48, recuperacao: { fome: 70, felicidade: 24, energia: 15 } },
                { id: "panelada-sf", nome: "🍲 Panelada", descricao: "Panelada.", preco: 38, recuperacao: { fome: 62, energia: 20, felicidade: 12 } },
                { id: "tapioca-sf", nome: "🥞 Tapioca", descricao: "Tapioca de carne.", preco: 16, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-sf", nome: "🥤 Suco", descricao: "Suco de caju.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 18. TROPICAL - SHOPPING ==========
        "shopping-tropical": {
            id: "shopping-tropical",
            nome: "🛍️ Shopping Tropical - Food Court",
            endereco: "Av. Getúlio Vargas, 1000 - Centro, Rio Branco",
            horario: "10h às 22h",
            telefone: "(68) 4999-8888",
            descricao: "Praça de alimentação do Shopping Tropical.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 35,
            estrelas: 4.2,
            avaliacoes: 1340,
            cardapio: [
                { id: "mc-tropical", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-tropical", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-tropical", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-tropical", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-tropical", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 19. BAIRRO DA PAZ - COMIDA ÁRABE ==========
        "bairro-paz-arabe": {
            id: "bairro-paz-arabe",
            nome: "🧆 Al Balad Acre",
            endereco: "Rua da Paz, 300 - Bairro da Paz, Rio Branco",
            horario: "11h às 23h",
            telefone: "(68) 5000-9999",
            descricao: "Culinária árabe autêntica.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 45,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "banquete-bp", nome: "🍽️ Banquete Árabe", descricao: "Hommus, kibe, esfihas.", preco: 68, recuperacao: { fome: 82, felicidade: 28, energia: 16 } },
                { id: "esfiha-bp", nome: "🥙 Esfiha (6 unid)", descricao: "Esfihas de carne.", preco: 28, recuperacao: { fome: 36, felicidade: 14, energia: 7 } },
                { id: "kibe-bp", nome: "🧆 Kibe", descricao: "Kibe assado.", preco: 24, recuperacao: { fome: 30, felicidade: 13, energia: 6 } },
                { id: "hommus-bp", nome: "🫔 Hommus", descricao: "Hommus com pão.", preco: 20, recuperacao: { fome: 24, felicidade: 13, energia: 6 } },
                { id: "suco-bp", nome: "🥤 Suco", descricao: "Suco de limão.", preco: 8, recuperacao: { sede: 20, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 20. AEROPORTO ==========
        "aeroporto-rio-branco": {
            id: "aeroporto-rio-branco",
            nome: "✈️ Aeroporto de Rio Branco - Praça de Alimentação",
            endereco: "BR-364, s/n - Aeroporto, Rio Branco",
            horario: "04h às 23h",
            telefone: "(68) 5111-0000",
            descricao: "Opções rápidas no aeroporto.",
            tipo: ["fast-food", "aeroporto", "viagem"],
            preco_medio: 40,
            estrelas: 3.8,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-aero-ac", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 35, recuperacao: { fome: 48, energia: 12, felicidade: 8 } },
                { id: "subway-aero-ac", nome: "🥪 Subway", descricao: "Sanduíche.", preco: 32, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habitual-aero-ac", nome: "☕ Habitual", descricao: "Café.", preco: 22, recuperacao: { fome: 22, energia: 14, felicidade: 10 } },
                { id: "cafe-aero-ac", nome: "☕ Café Regional", descricao: "Café acreano.", preco: 12, recuperacao: { sede: 10, energia: 12, felicidade: 10 } },
                { id: "suco-aero-ac", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 6 } }
            ]
        }
    },

    // ==================== CRUZEIRO DO SUL - 10 RESTAURANTES ====================
    "Cruzeiro do Sul": {
        // ========== 1. CENTRO - PEIXES DO RIO JURUÁ ==========
        "cruzeiro-peixes": {
            id: "cruzeiro-peixes",
            nome: "🐟 Peixaria do Juruá",
            endereco: "Av. Getúlio Vargas, 500 - Centro, Cruzeiro do Sul",
            horario: "11h às 22h",
            telefone: "(68) 3222-1111",
            descricao: "Especialidade em peixes do rio Juruá. Tambaqui, pirarucu, surubim e tucunaré. Ambiente familiar.",
            tipo: ["acreana", "amazonica", "peixaria", "regional", "familiar"],
            preco_medio: 45,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "tambaqui-cru", nome: "🐟 Tambaqui Assado", descricao: "Tambaqui assado na brasa.", preco: 52, recuperacao: { fome: 70, felicidade: 26, energia: 18 } },
                { id: "pirarucu-cru", nome: "🐟 Pirarucu", descricao: "Pirarucu grelhado.", preco: 55, recuperacao: { fome: 68, felicidade: 25, energia: 17 } },
                { id: "surubim-cru", nome: "🐟 Surubim", descricao: "Surubim ao molho.", preco: 48, recuperacao: { fome: 64, felicidade: 23, energia: 16 } },
                { id: "tucunare-cru", nome: "🐟 Tucunaré", descricao: "Tucunaré grelhado.", preco: 50, recuperacao: { fome: 66, felicidade: 24, energia: 17 } },
                { id: "suco-cru", nome: "🥤 Suco de Açaí", descricao: "Suco de açaí.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - TACACARIA ==========
        "cruzeiro-tacacaria": {
            id: "cruzeiro-tacacaria",
            nome: "🥣 Tacacaria do Juruá",
            endereco: "Rua 15 de Novembro, 300 - Centro, Cruzeiro do Sul",
            horario: "16h às 22h",
            telefone: "(68) 3333-2222",
            descricao: "Tacacaria tradicional. Tacacá, maniçoca e petiscos acreanos.",
            tipo: ["tacacaria", "acreana", "amazonica", "popular", "tradicional"],
            preco_medio: 28,
            estrelas: 4.7,
            avaliacoes: 670,
            cardapio: [
                { id: "tacaca-cru", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 25, felicidade: 20, energia: 10 } },
                { id: "manicoca-cru", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 32, recuperacao: { fome: 65, felicidade: 22, energia: 14 } },
                { id: "vatapa-cru", nome: "🥣 Vatapá", descricao: "Vatapá de peixe.", preco: 22, recuperacao: { fome: 32, felicidade: 16, energia: 8 } },
                { id: "camarao-cru", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 20, recuperacao: { fome: 24, felicidade: 13, energia: 7 } },
                { id: "suco-cru-tac", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - COMIDA CASEIRA ==========
        "cruzeiro-caseira": {
            id: "cruzeiro-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Amazonas, 200 - Centro, Cruzeiro do Sul",
            horario: "11h às 15h",
            telefone: "(68) 3444-3333",
            descricao: "Restaurante familiar. Comida caseira.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 22,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "prato-feito-cru", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 20, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-cru", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 22, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-cru", nome: "🍗 Frango", descricao: "Frango assado.", preco: 18, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-cru", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 20, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-cru-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 6, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - BOTECO ==========
        "cruzeiro-boteco": {
            id: "cruzeiro-boteco",
            nome: "🍺 Boteco Cruzeiro",
            endereco: "Rua Rio Branco, 150 - Centro, Cruzeiro do Sul",
            horario: "17h às 02h",
            telefone: "(68) 3555-4444",
            descricao: "Boteco tradicional. Petiscos e cerveja gelada.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 560,
            cardapio: [
                { id: "calabresa-cru", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 6 } },
                { id: "torresmo-cru", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 18, recuperacao: { fome: 24, felicidade: 10, energia: 5 } },
                { id: "queijo-cru", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "batata-cru", nome: "🍟 Batata", descricao: "Batata frita.", preco: 15, recuperacao: { fome: 20, felicidade: 8, energia: 4 } },
                { id: "chopp-cru", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 8, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 5. PIZZARIA ==========
        "cruzeiro-pizzaria": {
            id: "cruzeiro-pizzaria",
            nome: "🍕 Pizzaria Cruzeiro",
            endereco: "Av. Oscar Passos, 300 - Centro, Cruzeiro do Sul",
            horario: "18h às 23h",
            telefone: "(68) 3666-5555",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "pizza-mussarela-cru", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-cru", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 45, recuperacao: { fome: 55, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-cru", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 48, recuperacao: { fome: 56, energia: 15, felicidade: 12 } },
                { id: "calzone-cru", nome: "🥟 Calzone", descricao: "Calzone.", preco: 38, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "suco-cru-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 6. CAFÉ REGIONAL ==========
        "cruzeiro-cafe": {
            id: "cruzeiro-cafe",
            nome: "☕ Café Regional",
            endereco: "Rua 24 de Janeiro, 200 - Centro, Cruzeiro do Sul",
            horario: "08h às 20h",
            telefone: "(68) 3777-6666",
            descricao: "Cafeteria com produtos regionais.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "cafe-cru", nome: "☕ Café", descricao: "Café regional.", preco: 7, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-cru", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "pao-queijo-cru", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4 } },
                { id: "bolo-cru", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 9, recuperacao: { fome: 15, felicidade: 13, energia: 5 } },
                { id: "suco-cru-cafe", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 8, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "cruzeiro-hamburguer": {
            id: "cruzeiro-hamburguer",
            nome: "🍔 Hamburgueria Cruzeiro",
            endereco: "Rua Projetada, 300 - Centro, Cruzeiro do Sul",
            horario: "18h às 00h",
            telefone: "(68) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 38,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "smash-cru", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 35, recuperacao: { fome: 60, energia: 20, felicidade: 16 } },
                { id: "vegan-cru", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 38, recuperacao: { fome: 52, energia: 18, felicidade: 12 } },
                { id: "batata-cru-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "onion-cru", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 16, recuperacao: { fome: 20, energia: 6, felicidade: 7 } },
                { id: "milkshake-cru", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 16, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 8. TAPIOCARIA ==========
        "cruzeiro-tapiocaria": {
            id: "cruzeiro-tapiocaria",
            nome: "🥞 Tapiocaria do Juruá",
            endereco: "Rua Pedreira, 200 - Centro, Cruzeiro do Sul",
            horario: "08h às 21h",
            telefone: "(68) 3999-8888",
            descricao: "Tapiocaria com sabores regionais.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 18,
            estrelas: 4.5,
            avaliacoes: 560,
            cardapio: [
                { id: "tapioca-carne-cru", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 14, recuperacao: { fome: 22, felicidade: 14, energia: 6 } },
                { id: "tapioca-queijo-cru", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 18, felicidade: 12, energia: 5 } },
                { id: "tapioca-coco-cru", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 12, recuperacao: { fome: 16, felicidade: 13, energia: 5 } },
                { id: "tapioca-romeu-cru", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 13, recuperacao: { fome: 18, felicidade: 14, energia: 5 } },
                { id: "suco-cru-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. SHOPPING ==========
        "shopping-cruzeiro": {
            id: "shopping-cruzeiro",
            nome: "🛍️ Shopping Cruzeiro do Sul - Food Court",
            endereco: "Av. Oscar Passos, 1000 - Centro, Cruzeiro do Sul",
            horario: "10h às 22h",
            telefone: "(68) 4000-9999",
            descricao: "Praça de alimentação.",
            tipo: ["fast-food", "shopping", "familiar"],
            preco_medio: 35,
            estrelas: 4.1,
            avaliacoes: 890,
            cardapio: [
                { id: "mc-cru", nome: "🍔 McDonald's", descricao: "Hambúrguer.", preco: 30, recuperacao: { fome: 45, energia: 12, felicidade: 8 } },
                { id: "habibs-cru", nome: "🇸🇾 Habib's", descricao: "Esfihas.", preco: 25, recuperacao: { fome: 35, energia: 10, felicidade: 8 } },
                { id: "china-cru", nome: "🥢 China", descricao: "Yakisoba.", preco: 32, recuperacao: { fome: 48, energia: 12, felicidade: 10 } },
                { id: "japa-cru", nome: "🍣 Sushi", descricao: "Combinado.", preco: 35, recuperacao: { fome: 48, felicidade: 16, energia: 10 } },
                { id: "suco-cru-shop", nome: "🥤 Suco", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-cruzeiro": {
            id: "rodoviaria-cruzeiro",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Getúlio Vargas, 1500 - Centro, Cruzeiro do Sul",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 18,
            estrelas: 3.5,
            avaliacoes: 340,
            cardapio: [
                { id: "sanduiche-cru", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 12, recuperacao: { fome: 18, energia: 6, felicidade: 4 } },
                { id: "suco-cru-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-cru", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 6, recuperacao: { fome: 10, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-cru", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 5, recuperacao: { fome: 8, felicidade: 5, energia: 2 } },
                { id: "cafe-cru-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    },

    // ==================== SENA MADUREIRA - 10 RESTAURANTES ====================
    "Sena Madureira": {
        // ========== 1. CENTRO - COMIDA RIBEIRINHA ==========
        "sena-ribeirinha": {
            id: "sena-ribeirinha",
            nome: "🐟 Sabor Ribeirinho",
            endereco: "Av. Beira Rio, 200 - Centro, Sena Madureira",
            horario: "11h às 22h",
            telefone: "(68) 3222-1111",
            descricao: "Culinária ribeirinha do rio Iaco. Peixes frescos e pratos típicos da região.",
            tipo: ["acreana", "amazonica", "ribeirinha", "regional", "familiar"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 560,
            cardapio: [
                { id: "peixe-ribeiro", nome: "🐟 Peixe na Brasa", descricao: "Peixe do rio Iaco grelhado.", preco: 45, recuperacao: { fome: 65, felicidade: 24, energia: 16 } },
                { id: "camarao-ribeiro", nome: "🍤 Camarão", descricao: "Camarão do rio.", preco: 42, recuperacao: { fome: 60, felicidade: 22, energia: 15 } },
                { id: "tacaca-ribeiro", nome: "🥣 Tacacá", descricao: "Tacacá tradicional.", preco: 18, recuperacao: { fome: 24, felicidade: 18, energia: 10 } },
                { id: "manicoca-ribeiro", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 32, recuperacao: { fome: 62, felicidade: 20, energia: 12 } },
                { id: "suco-ribeiro", nome: "🥤 Suco de Açaí", descricao: "Suco de açaí.", preco: 10, recuperacao: { sede: 18, energia: 10, felicidade: 8 } }
            ]
        },
        
        // ========== 2. CENTRO - TACACARIA ==========
        "sena-tacacaria": {
            id: "sena-tacacaria",
            nome: "🥣 Tacacaria Sena",
            endereco: "Rua 7 de Setembro, 300 - Centro, Sena Madureira",
            horario: "16h às 22h",
            telefone: "(68) 3333-2222",
            descricao: "Tacacaria tradicional.",
            tipo: ["tacacaria", "acreana", "amazonica", "popular"],
            preco_medio: 25,
            estrelas: 4.6,
            avaliacoes: 450,
            cardapio: [
                { id: "tacaca-sena", nome: "🥣 Tacacá", descricao: "Tacacá.", preco: 16, recuperacao: { fome: 22, felicidade: 18, energia: 10 } },
                { id: "manicoca-sena", nome: "🥬 Maniçoca", descricao: "Maniçoca.", preco: 30, recuperacao: { fome: 60, felicidade: 20, energia: 12 } },
                { id: "vatapa-sena", nome: "🥣 Vatapá", descricao: "Vatapá.", preco: 20, recuperacao: { fome: 30, felicidade: 15, energia: 8 } },
                { id: "camarao-sena", nome: "🍤 Camarão", descricao: "Camarão seco.", preco: 18, recuperacao: { fome: 22, felicidade: 12, energia: 6 } },
                { id: "suco-sena", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 3. CENTRO - COMIDA CASEIRA ==========
        "sena-caseira": {
            id: "sena-caseira",
            nome: "🇧🇷 Comida Caseira",
            endereco: "Rua Rio Branco, 200 - Centro, Sena Madureira",
            horario: "11h às 15h",
            telefone: "(68) 3444-3333",
            descricao: "Restaurante familiar.",
            tipo: ["brasileira", "caseira", "familiar", "buffet"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "prato-feito-sena", nome: "🍽️ Prato Feito", descricao: "Arroz, feijão, proteína.", preco: 18, recuperacao: { fome: 65, energia: 20, felicidade: 14 } },
                { id: "bife-sena", nome: "🥩 Bife", descricao: "Bife acebolado.", preco: 20, recuperacao: { fome: 60, energia: 18, felicidade: 12 } },
                { id: "frango-sena", nome: "🍗 Frango", descricao: "Frango assado.", preco: 16, recuperacao: { fome: 55, energia: 16, felicidade: 12 } },
                { id: "peixe-sena", nome: "🐟 Peixe", descricao: "Peixe frito.", preco: 18, recuperacao: { fome: 58, energia: 16, felicidade: 12 } },
                { id: "suco-sena-case", nome: "🥤 Suco", descricao: "Suco natural.", preco: 5, recuperacao: { sede: 18, energia: 5, felicidade: 5 } }
            ]
        },
        
        // ========== 4. CENTRO - BOTECO ==========
        "sena-boteco": {
            id: "sena-boteco",
            nome: "🍺 Boteco Sena",
            endereco: "Rua Floriano Peixoto, 150 - Centro, Sena Madureira",
            horario: "17h às 02h",
            telefone: "(68) 3555-4444",
            descricao: "Boteco tradicional.",
            tipo: ["boteco", "petiscos", "happy-hour", "popular"],
            preco_medio: 25,
            estrelas: 4.3,
            avaliacoes: 450,
            cardapio: [
                { id: "calabresa-sena", nome: "🍢 Calabresa", descricao: "Calabresa acebolada.", preco: 22, recuperacao: { fome: 30, felicidade: 12, energia: 6 } },
                { id: "torresmo-sena", nome: "🥓 Torresmo", descricao: "Torresmo.", preco: 16, recuperacao: { fome: 22, felicidade: 10, energia: 5 } },
                { id: "queijo-sena", nome: "🧀 Queijo", descricao: "Queijo coalho.", preco: 12, recuperacao: { fome: 16, felicidade: 8, energia: 4 } },
                { id: "batata-sena", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, felicidade: 8, energia: 4 } },
                { id: "chopp-sena", nome: "🍺 Chopp", descricao: "Chopp gelado.", preco: 7, recuperacao: { sede: 22, felicidade: 10, energia: -5 } }
            ]
        },
        
        // ========== 5. PIZZARIA ==========
        "sena-pizzaria": {
            id: "sena-pizzaria",
            nome: "🍕 Pizzaria Sena",
            endereco: "Av. Marechal Deodoro, 300 - Centro, Sena Madureira",
            horario: "18h às 23h",
            telefone: "(68) 3666-5555",
            descricao: "Pizzaria tradicional.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 42,
            estrelas: 4.2,
            avaliacoes: 340,
            cardapio: [
                { id: "pizza-mussarela-sena", nome: "🍕 Pizza Mussarela", descricao: "Mussarela.", preco: 40, recuperacao: { fome: 50, energia: 15, felicidade: 12 } },
                { id: "pizza-calabresa-sena", nome: "🍕 Pizza Calabresa", descricao: "Calabresa.", preco: 42, recuperacao: { fome: 52, energia: 15, felicidade: 12 } },
                { id: "pizza-portuguesa-sena", nome: "🍕 Pizza Portuguesa", descricao: "Portuguesa.", preco: 45, recuperacao: { fome: 54, energia: 15, felicidade: 12 } },
                { id: "calzone-sena", nome: "🥟 Calzone", descricao: "Calzone.", preco: 35, recuperacao: { fome: 45, energia: 12, felicidade: 10 } },
                { id: "suco-sena-pizza", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 16, energia: 5, felicidade: 4 } }
            ]
        },
        
        // ========== 6. CAFÉ REGIONAL ==========
        "sena-cafe": {
            id: "sena-cafe",
            nome: "☕ Café Sena",
            endereco: "Rua Pedro Soares, 200 - Centro, Sena Madureira",
            horario: "08h às 20h",
            telefone: "(68) 3777-6666",
            descricao: "Cafeteria regional.",
            tipo: ["cafeteria", "regional", "doces", "artesanal"],
            preco_medio: 20,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "cafe-sena", nome: "☕ Café", descricao: "Café regional.", preco: 6, recuperacao: { sede: 10, energia: 14, felicidade: 10 } },
                { id: "tapioca-sena", nome: "🥞 Tapioca", descricao: "Tapioca de queijo.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "pao-queijo-sena", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 6, recuperacao: { fome: 10, felicidade: 7, energia: 4 } },
                { id: "bolo-sena", nome: "🍰 Bolo", descricao: "Bolo de macaxeira.", preco: 8, recuperacao: { fome: 14, felicidade: 12, energia: 5 } },
                { id: "suco-sena-cafe", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 7, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 7. HAMBURGUERIA ==========
        "sena-hamburguer": {
            id: "sena-hamburguer",
            nome: "🍔 Hamburgueria Sena",
            endereco: "Rua Projetada, 200 - Centro, Sena Madureira",
            horario: "18h às 00h",
            telefone: "(68) 3888-7777",
            descricao: "Hamburgueria artesanal.",
            tipo: ["hamburguer", "americana", "artesanal"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 340,
            cardapio: [
                { id: "smash-sena", nome: "🍔 Smash", descricao: "Smash duplo.", preco: 32, recuperacao: { fome: 58, energia: 20, felicidade: 16 } },
                { id: "vegan-sena", nome: "🌱 Vegan", descricao: "Hambúrguer vegano.", preco: 35, recuperacao: { fome: 50, energia: 18, felicidade: 12 } },
                { id: "batata-sena-hb", nome: "🍟 Batata", descricao: "Batata frita.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "onion-sena", nome: "🧅 Onion Rings", descricao: "Anéis de cebola.", preco: 14, recuperacao: { fome: 18, energia: 6, felicidade: 7 } },
                { id: "milkshake-sena", nome: "🥤 Milkshake", descricao: "Milkshake.", preco: 14, recuperacao: { sede: 15, felicidade: 16, energia: 8 } }
            ]
        },
        
        // ========== 8. TAPIOCARIA ==========
        "sena-tapiocaria": {
            id: "sena-tapiocaria",
            nome: "🥞 Tapiocaria Sena",
            endereco: "Rua da Paz, 200 - Centro, Sena Madureira",
            horario: "08h às 21h",
            telefone: "(68) 3999-8888",
            descricao: "Tapiocaria com sabores regionais.",
            tipo: ["tapiocaria", "regional", "doces", "fast-food"],
            preco_medio: 16,
            estrelas: 4.4,
            avaliacoes: 450,
            cardapio: [
                { id: "tapioca-carne-sena", nome: "🥞 Tapioca de Carne", descricao: "Carne seca.", preco: 12, recuperacao: { fome: 20, felicidade: 12, energia: 6 } },
                { id: "tapioca-queijo-sena", nome: "🥞 Tapioca de Queijo", descricao: "Queijo coalho.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "tapioca-coco-sena", nome: "🥞 Tapioca de Coco", descricao: "Coco com leite.", preco: 10, recuperacao: { fome: 14, felicidade: 11, energia: 5 } },
                { id: "tapioca-romeu-sena", nome: "🥞 Tapioca Romeu", descricao: "Goiabada com queijo.", preco: 11, recuperacao: { fome: 16, felicidade: 12, energia: 5 } },
                { id: "suco-sena-tapi", nome: "🥤 Suco", descricao: "Suco de cupuaçu.", preco: 6, recuperacao: { sede: 18, energia: 6, felicidade: 5 } }
            ]
        },
        
        // ========== 9. COMIDA INDÍGENA ==========
        "sena-indigena": {
            id: "sena-indigena",
            nome: "🌿 Comida Indígena",
            endereco: "Aldeia Indígena - Rua do Cacique, Sena Madureira",
            horario: "10h às 18h",
            telefone: "(68) 4000-9999",
            descricao: "Culinária indígena tradicional da região.",
            tipo: ["indigena", "amazonica", "regional", "tradicional"],
            preco_medio: 35,
            estrelas: 4.7,
            avaliacoes: 340,
            cardapio: [
                { id: "peixe-indigena-sena", nome: "🐟 Peixe na Folha", descricao: "Peixe assado em folha.", preco: 42, recuperacao: { fome: 65, felicidade: 26, energia: 18 } },
                { id: "beiju-sena", nome: "🍞 Beiju", descricao: "Beiju de tapioca.", preco: 10, recuperacao: { fome: 16, felicidade: 10, energia: 5 } },
                { id: "macaxeira-sena", nome: "🍠 Macaxeira", descricao: "Macaxeira cozida.", preco: 8, recuperacao: { fome: 14, felicidade: 8, energia: 4 } },
                { id: "pato-sena", nome: "🦆 Pato no Tucupi", descricao: "Pato com tucupi.", preco: 48, recuperacao: { fome: 70, felicidade: 28, energia: 18 } },
                { id: "suco-ind-sena", nome: "🥤 Suco de Buriti", descricao: "Suco de buriti.", preco: 9, recuperacao: { sede: 20, felicidade: 12, energia: 6 } }
            ]
        },
        
        // ========== 10. RODOVIÁRIA ==========
        "rodoviaria-sena": {
            id: "rodoviaria-sena",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Ceará, 500 - Centro, Sena Madureira",
            horario: "05h às 23h",
            telefone: "-",
            descricao: "Opções rápidas.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 16,
            estrelas: 3.5,
            avaliacoes: 230,
            cardapio: [
                { id: "sanduiche-sena", nome: "🥪 Sanduíche", descricao: "Sanduíche natural.", preco: 10, recuperacao: { fome: 16, energia: 6, felicidade: 4 } },
                { id: "suco-sena-rod", nome: "🥤 Suco", descricao: "Suco de laranja.", preco: 7, recuperacao: { sede: 18, energia: 5, felicidade: 4 } },
                { id: "coxinha-sena", nome: "🍗 Coxinha", descricao: "Coxinha.", preco: 5, recuperacao: { fome: 8, felicidade: 4, energia: 2 } },
                { id: "pao-queijo-sena", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo.", preco: 4, recuperacao: { fome: 7, felicidade: 4, energia: 2 } },
                { id: "cafe-sena-rod", nome: "☕ Café", descricao: "Café.", preco: 4, recuperacao: { sede: 5, energia: 8, felicidade: 4 } }
            ]
        }
    }
};

export default restaurantesAC;