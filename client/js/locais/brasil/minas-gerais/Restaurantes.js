// client/js/locais/brasil/minas-gerais/Restaurantes.js

const restaurantesMG = {
    // ==================== BELO HORIZONTE - CAPITAL MINEIRA ====================
    "Belo Horizonte": {
        // ========== SAVASSI (BAIRRO NOBRE / ROTEIRO GASTRONÔMICO) ==========
        "savassi-tradicional-mineira": {
            id: "savassi-tradicional-mineira",
            nome: "🍲 Xapuri Savassi",
            endereco: "Rua Antônio de Albuquerque, 800 - Savassi, Belo Horizonte",
            horario: "11h às 23h (terça a domingo)",
            telefone: "(31) 3344-2233",
            descricao: "Tradicional cozinha mineira com frango com quiabo, tutu de feijão e o famoso 'comida de buteco'. Ambiente rústico e acolhedor, frequentado por famílias e turistas. Fundado em 1988.",
            tipo: ["mineira", "tradicional", "familiar", "turístico", "boteco-premium"],
            preco_medio: 65,
            estrelas: 4.7,
            avaliacoes: 3450,
            cardapio: [
                { id: "frango-quiabo-savassi", nome: "🍗 Frango com Quiabo", descricao: "Frango caipira cozido lentamente com quiabo, acompanhado de angu cremoso e torresmo.", preco: 58, recuperacao: { fome: 75, energia: 22, felicidade: 20, sede: 5 } },
                { id: "tutu-mineiro-savassi", nome: "🫘 Tutu à Mineira", descricao: "Feijão com farinha de mandioca, couve refogada, costelinha de porco, ovo frito e torresmo.", preco: 52, recuperacao: { fome: 80, energia: 24, felicidade: 22, sede: 8 } },
                { id: "costelinha-savassi", nome: "🍖 Costelinha de Porco", descricao: "Costelinha assada na brasa com farofa de banana e couve refogada.", preco: 65, recuperacao: { fome: 85, energia: 28, felicidade: 25, sede: 10 } },
                { id: "feijao-tropeiro-savassi", nome: "🫘 Feijão Tropeiro", descricao: "Feijão com farinha, ovos, bacon, couve e torresmo crocante.", preco: 48, recuperacao: { fome: 70, energia: 20, felicidade: 18, sede: 6 } },
                { id: "cachaca-savassi", nome: "🥃 Cachaça Mineira", descricao: "Cachaça artesanal da região de Salinas, envelhecida em carvalho.", preco: 12, recuperacao: { felicidade: 12, energia: -4, sede: 8 } },
                { id: "cerveja-savassi", nome: "🍺 Cerveja Artesanal", descricao: "Cerveja artesanal da casa - estilo Pilsen.", preco: 14, recuperacao: { sede: 25, felicidade: 10, energia: -3 } },
                { id: "licor-jenipapo", nome: "🍸 Licor de Jenipapo", descricao: "Licor artesanal de jenipapo da roça.", preco: 10, recuperacao: { felicidade: 14, energia: -2, sede: 6 } }
            ]
        },
        
        "savassi-italiana": {
            id: "savassi-italiana",
            nome: "🍝 Cantina do Savassi",
            endereco: "Rua Tomé de Souza, 300 - Savassi, Belo Horizonte",
            horario: "12h às 15h | 19h às 23h (fecha segunda)",
            telefone: "(31) 3344-5566",
            descricao: "Cantina italiana tradicional com massas frescas feitas na hora. Ambiente romântico e sofisticado. Carta de vinhos italiana premiada.",
            tipo: ["italiana", "massas", "romântico", "vinhos", "premium"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 1280,
            cardapio: [
                { id: "carbonara-savassi", nome: "🍝 Spaghetti alla Carbonara", descricao: "Massa fresca com molho cremoso de ovos, queijo pecorino, panceta crocante e pimenta preta.", preco: 68, recuperacao: { fome: 55, energia: 15, felicidade: 22, sede: 5 } },
                { id: "ossobuco-savassi", nome: "🍖 Ossobuco Milanese", descricao: "Ossobuco cozido lentamente com vinho branco. Acompanha risoto de açafrão.", preco: 98, recuperacao: { fome: 80, energia: 28, felicidade: 28, sede: 12 } },
                { id: "tiramisu-savassi", nome: "🍰 Tiramisu Clássico", descricao: "Sobremesa italiana com camadas de biscoitos champagne, café e creme de mascarpone.", preco: 24, recuperacao: { fome: 12, felicidade: 20, energia: 5 } },
                { id: "fettuccine-ragu", nome: "🍝 Fettuccine ao Ragu", descricao: "Fettuccine fresco com ragu de carne cozido por 8 horas.", preco: 72, recuperacao: { fome: 60, energia: 18, felicidade: 20, sede: 8 } },
                { id: "vinho-chianti", nome: "🍷 Vinho Chianti", descricao: "Taça de vinho italiano Chianti DOCG.", preco: 32, recuperacao: { sede: 12, felicidade: 16, energia: -5 } },
                { id: "vinho-barolo", nome: "🍷 Vinho Barolo", descricao: "Taça de Vinho Barolo italiano - encorpado.", preco: 45, recuperacao: { sede: 15, felicidade: 20, energia: -6 } },
                { id: "limoncello", nome: "🍋 Limoncello", descricao: "Licor italiano de limão siciliano.", preco: 15, recuperacao: { felicidade: 12, sede: 5, energia: -2 } }
            ]
        },
        
        "savassi-japonesa": {
            id: "savassi-japonesa",
            nome: "🍣 Sushi Savassi",
            endereco: "Rua Paraíba, 1200 - Savassi, Belo Horizonte",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(31) 3344-7788",
            descricao: "Alta gastronomia japonesa com peixes frescos importados. Rodízio premium e ambiente sofisticado. Chef formado no Japão.",
            tipo: ["japonesa", "sushi", "rodizio", "premium", "romântico"],
            preco_medio: 98,
            estrelas: 4.9,
            avaliacoes: 2150,
            cardapio: [
                { id: "rodizio-savassi", nome: "🍣 Rodízio Premium", descricao: "Sashimis variados (salmão, atum, peixe branco), uramakis, hot rolls, temakis e peças especiais do chef.", preco: 105, recuperacao: { fome: 90, energia: 28, felicidade: 38, sede: 15 } },
                { id: "combinado-savassi", nome: "🍱 Combinado Especial", descricao: "25 peças variadas: salmão, atum, camarão, polvo, ouriço.", preco: 85, recuperacao: { fome: 75, energia: 24, felicidade: 30, sede: 12 } },
                { id: "temaki-salmao", nome: "🍙 Temaki de Salmão Especial", descricao: "Temaki grande com salmão fresco, cream cheese, cebolinha e crispy.", preco: 32, recuperacao: { fome: 35, felicidade: 16, energia: 6, sede: 4 } },
                { id: "missoshiro-savassi", nome: "🥣 Missoshiro", descricao: "Sopa de missô com tofu, algas e cebolinha.", preco: 18, recuperacao: { fome: 15, felicidade: 8, energia: 10, sede: 25 } },
                { id: "sake-savassi", nome: "🍶 Saquê Premium", descricao: "Saquê japonês gelado - Junmai Daiginjo.", preco: 28, recuperacao: { sede: 10, felicidade: 18, energia: -3 } },
                { id: "cha-verde-savassi", nome: "🍵 Chá Verde Japonês", descricao: "Chá verde tradicional - Gyokuro.", preco: 12, recuperacao: { sede: 20, energia: 8, felicidade: 8 } }
            ]
        },
        
        "savassi-brasileira": {
            id: "savassi-brasileira",
            nome: "🇧🇷 A Cozinha Brasileira",
            endereco: "Rua Fernandes Tourinho, 500 - Savassi, Belo Horizonte",
            horario: "12h às 16h | 19h às 00h",
            telefone: "(31) 3344-9901",
            descricao: "Cozinha brasileira contemporânea com ingredientes de todas as regiões. Buffet executivo no almoço e à la carte na jantar.",
            tipo: ["brasileira", "contemporânea", "executivos", "premium"],
            preco_medio: 85,
            estrelas: 4.6,
            avaliacoes: 1870,
            cardapio: [
                { id: "moqueca-savassi", nome: "🍲 Moqueca Baiana", descricao: "Moqueca de peixe e camarão com dendê, leite de coco e pimentões.", preco: 89, recuperacao: { fome: 85, energia: 26, felicidade: 28, sede: 15 } },
                { id: "bobo-camarao", nome: "🥣 Bobó de Camarão", descricao: "Cremoso de mandioca com camarões grelhados e arroz.", preco: 75, recuperacao: { fome: 70, energia: 22, felicidade: 24, sede: 12 } },
                { id: "carne-sol-savassi", nome: "🥩 Carne de Sol", descricao: "Carne de sol acebolada com mandioca cozida e manteiga de garrafa.", preco: 68, recuperacao: { fome: 75, energia: 26, felicidade: 20, sede: 10 } },
                { id: "caipirinha-savassi", nome: "🍹 Caipirinha Brasileira", descricao: "Clássica caipirinha de limão com cachaça artesanal.", preco: 22, recuperacao: { felicidade: 20, sede: 12, energia: -5 } },
                { id: "suco-maracuja", nome: "🥤 Suco de Maracujá", descricao: "Suco natural de maracujá com hortelã.", preco: 12, recuperacao: { sede: 28, energia: 6, felicidade: 10 } }
            ]
        },
        
        // ========== LOURDES (GASTRONOMIA PREMIUM) ==========
        "lourdes-contemporanea": {
            id: "lourdes-contemporanea",
            nome: "🍽️ Glouton",
            endereco: "Rua Paraíba, 1432 - Lourdes, Belo Horizonte",
            horario: "12h às 15h | 19h às 23h (fecha domingo e segunda)",
            telefone: "(31) 3344-9900",
            descricao: "Restaurante premiado com estrela Michelin. Cozinha brasileira contemporânea com influências francesas e mineiras. Chef Léo Paixão.",
            tipo: ["brasileira", "premium", "gastronomico", "romântico", "michelin"],
            preco_medio: 180,
            estrelas: 4.9,
            avaliacoes: 980,
            cardapio: [
                { id: "degustacao-lourdes", nome: "🍽️ Menu Degustação (7 tempos)", descricao: "Experiência gastronômica completa com pratos assinados pelo chef.", preco: 220, recuperacao: { fome: 100, energia: 40, felicidade: 55, sede: 30 } },
                { id: "tutu-foie", nome: "🍲 Tutu de Feijão com Foie Gras", descricao: "Releitura do tutu mineiro com foie gras e couve crocante.", preco: 85, recuperacao: { fome: 45, felicidade: 32, energia: 18, sede: 8 } },
                { id: "pato-lourdes", nome: "🦆 Pato com Laranja", descricao: "Pato confitado com molho de laranja e purê de batata-doce.", preco: 95, recuperacao: { fome: 55, felicidade: 28, energia: 22, sede: 10 } },
                { id: "espumante-lourdes", nome: "🥂 Espumante Brut", descricao: "Espumante brasileiro premiado.", preco: 45, recuperacao: { sede: 15, felicidade: 25, energia: -4 } },
                { id: "vinho-lourdes", nome: "🍷 Vinho da Casa", descricao: "Vinho tinto chileno reservado.", preco: 38, recuperacao: { sede: 12, felicidade: 18, energia: -3 } }
            ]
        },
        
        "lourdes-espanhola": {
            id: "lourdes-espanhola",
            nome: "🇪🇸 Tapas y Vinos",
            endereco: "Rua Antônio de Albuquerque, 500 - Lourdes, Belo Horizonte",
            horario: "12h às 15h | 18h às 00h",
            telefone: "(31) 3344-1122",
            descricao: "Autêntica culinária espanhola com tapas, paellas e a melhor sangria da cidade. Ambiente descontraído e música ambiente.",
            tipo: ["espanhola", "tapas", "happy-hour", "vinhos", "casual"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "paella-lourdes", nome: "🥘 Paella Valenciana", descricao: "Arroz com frango, coelho, frutos do mar, açafrão e legumes.", preco: 88, recuperacao: { fome: 85, felicidade: 28, energia: 18, sede: 12 } },
                { id: "tapas-selecao", nome: "🍢 Seleção de Tapas (6 unid)", descricao: "Presunto ibérico, queijo manchego, azeitonas, pão com tomate, croquetes.", preco: 52, recuperacao: { fome: 45, felicidade: 22, energia: 12, sede: 8 } },
                { id: "gambas-al-ajillo", nome: "🍤 Gambas al Ajillo", descricao: "Camarões salteados com alho e pimenta calabresa.", preco: 42, recuperacao: { fome: 35, felicidade: 18, energia: 12, sede: 6 } },
                { id: "tortilla-espanhola", nome: "🍳 Tortilla Espanhola", descricao: "Torta de batatas, cebola e ovos.", preco: 28, recuperacao: { fome: 30, felicidade: 14, energia: 10, sede: 4 } },
                { id: "sangria-lourdes", nome: "🍷 Sangria Espanhola", descricao: "Vinho tinto com frutas e especiarias.", preco: 28, recuperacao: { sede: 15, felicidade: 18, energia: -6 } },
                { id: "cerveza-lourdes", nome: "🍺 Cerveza Estrella", descricao: "Cerveja espanhola Estrella Galicia.", preco: 16, recuperacao: { sede: 22, felicidade: 10, energia: -2 } }
            ]
        },
        
        "lourdes-francesa": {
            id: "lourdes-francesa",
            nome: "🇫🇷 Le Bistrot Français",
            endereco: "Rua Rio de Janeiro, 900 - Lourdes, Belo Horizonte",
            horario: "12h às 15h | 19h às 23h (fecha domingo)",
            telefone: "(31) 3344-1133",
            descricao: "Bistrô francês tradicional com clássicos da culinária francesa. Ambiente romântico com luz baixa e música clássica.",
            tipo: ["francesa", "romântico", "premium", "vinhos", "clássico"],
            preco_medio: 120,
            estrelas: 4.8,
            avaliacoes: 760,
            cardapio: [
                { id: "boeuf-bourguignon", nome: "🥩 Boeuf Bourguignon", descricao: "Carne cozida no vinho tinto com cogumelos e cebolas.", preco: 89, recuperacao: { fome: 80, energia: 28, felicidade: 28, sede: 15 } },
                { id: "confit-de-canard", nome: "🦆 Confit de Canard", descricao: "Perna de pato confitada com batatas sauté.", preco: 92, recuperacao: { fome: 75, energia: 26, felicidade: 30, sede: 12 } },
                { id: "ratatouille", nome: "🥘 Ratatouille", descricao: "Legumes grelhados com molho provençal.", preco: 58, recuperacao: { fome: 50, energia: 16, felicidade: 20, sede: 10 } },
                { id: "creme-brulee", nome: "🍮 Crème Brûlée", descricao: "Creme de baunilha com crosta de açúcar caramelizado.", preco: 24, recuperacao: { fome: 10, felicidade: 22, energia: 6 } },
                { id: "vinho-bordeaux", nome: "🍷 Vinho Bordeaux", descricao: "Taça de vinho francês Bordeaux.", preco: 48, recuperacao: { sede: 12, felicidade: 22, energia: -5 } },
                { id: "champagne", nome: "🥂 Champagne", descricao: "Taça de Champagne francês.", preco: 65, recuperacao: { sede: 15, felicidade: 30, energia: -6 } }
            ]
        },
        
        // ========== MERCADO CENTRAL (PONTO TURÍSTICO) ==========
        "mercado-central-bh": {
            id: "mercado-central-bh",
            nome: "🏛️ Mercado Central - BH",
            endereco: "Av. Augusto de Lima, 744 - Centro, Belo Horizonte",
            horario: "7h às 18h (sábado até 17h, domingo 7h às 13h)",
            telefone: "(31) 3274-9434",
            descricao: "Maior mercado de BH. Comida mineira autêntica, queijos artesanais, doces e cachaças. Parada obrigatória para turistas.",
            tipo: ["mineira", "mercado", "turístico", "tradicional", "queijos"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 12500,
            cardapio: [
                { id: "bolo-fuba-mercado", nome: "🍰 Bolo de Fubá", descricao: "Bolo de fubá cremoso com goiabada.", preco: 8, recuperacao: { fome: 18, felicidade: 12, energia: 6, sede: 2 } },
                { id: "pao-queijo-mercado", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo mineiro quentinho.", preco: 5, recuperacao: { fome: 12, felicidade: 10, energia: 4, sede: 1 } },
                { id: "queijo-canastra", nome: "🧀 Queijo Canastra", descricao: "Queijo artesanal da Serra da Canastra.", preco: 15, recuperacao: { fome: 20, felicidade: 15, energia: 6, sede: 3 } },
                { id: "doce-leite", nome: "🍬 Doce de Leite", descricao: "Doce de leite caseiro Viçosa.", preco: 10, recuperacao: { fome: 15, felicidade: 12, energia: 5, sede: 2 } },
                { id: "pastel-mercado", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante com carne moída temperada.", preco: 12, recuperacao: { fome: 25, felicidade: 8, energia: 6, sede: 2 } },
                { id: "caldo-cana-mercado", nome: "🥤 Caldo de Cana", descricao: "Caldo de cana natural com limão.", preco: 8, recuperacao: { sede: 25, energia: 10, felicidade: 6 } }
            ]
        },
        
        // ========== PAMPULHA (REGIÃO LAGOINHA) ==========
        "pampulha-baiana": {
            id: "pampulha-baiana",
            nome: "🌴 Baiana do Acarajé",
            endereco: "Av. Otacílio Negrão de Lima, 2000 - Pampulha, Belo Horizonte",
            horario: "11h às 22h (fecha terça)",
            telefone: "(31) 3344-5566",
            descricao: "Autêntica culinária baiana na região da Lagoa da Pampulha. Acarajés, abarás e moquecas premiadas.",
            tipo: ["baiana", "nordestina", "praia", "regional", "petiscos"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "acaraje-pampulha", nome: "🫓 Acarajé Tradicional", descricao: "Bolinho de feijão frito no dendê recheado com vatapá, camarão seco e caruru.", preco: 22, recuperacao: { fome: 35, felicidade: 18, energia: 10, sede: 6 } },
                { id: "moqueca-baiana", nome: "🍲 Moqueca Baiana", descricao: "Peixe e camarão cozidos no dendê, leite de coco e pimentões.", preco: 78, recuperacao: { fome: 80, felicidade: 28, energia: 18, sede: 15 } },
                { id: "vatapa-pampulha", nome: "🥣 Vatapá", descricao: "Creme de pão, camarão, leite de coco e amendoim.", preco: 28, recuperacao: { fome: 35, felicidade: 16, energia: 8, sede: 6 } },
                { id: "caruru-pampulha", nome: "🥘 Caruru", descricao: "Quiabo picado com camarão seco, cebola e azeite de dendê.", preco: 25, recuperacao: { fome: 30, felicidade: 14, energia: 8, sede: 5 } },
                { id: "suco-maracuja", nome: "🥤 Suco de Maracujá", descricao: "Suco de maracujá natural com açúcar.", preco: 10, recuperacao: { sede: 25, energia: 6, felicidade: 8 } },
                { id: "cerveja-pampulha", nome: "🍺 Cerveja Gelada", descricao: "Cerveja long neck bem gelada.", preco: 12, recuperacao: { sede: 22, felicidade: 10, energia: -2 } }
            ]
        },
        
        "pampulha-churrascaria": {
            id: "pampulha-churrascaria",
            nome: "🥩 Churrascaria Pampulha Grill",
            endereco: "Av. Antônio Carlos, 5000 - Pampulha, Belo Horizonte",
            horario: "11h30 às 15h30 | 18h30 às 23h",
            telefone: "(31) 3344-7788",
            descricao: "Churrascaria tradicional com vista para a Lagoa da Pampulha. Rodízio com cortes nobres e buffet de saladas.",
            tipo: ["churrascaria", "brasileira", "rodizio", "premium", "vista"],
            preco_medio: 98,
            estrelas: 4.7,
            avaliacoes: 3450,
            cardapio: [
                { id: "rodizio-pampulha", nome: "🥩 Rodízio Pampulha", descricao: "Mais de 15 cortes de carne: picanha, maminha, fraldinha, costela, cordeiro, filet mignon.", preco: 99, recuperacao: { fome: 100, energia: 45, felicidade: 40, sede: 20 } },
                { id: "picanha-pampulha", nome: "🥩 Picanha Especial", descricao: "Picanha 350g com arroz, farofa e vinagrete.", preco: 68, recuperacao: { fome: 75, energia: 28, felicidade: 22, sede: 10 } },
                { id: "costela-pampulha", nome: "🍖 Costela ao Fogo", descricao: "Costela assada por 6 horas no bafo.", preco: 72, recuperacao: { fome: 85, energia: 30, felicidade: 25, sede: 12 } },
                { id: "buffet-pampulha", nome: "🥗 Buffet de Saladas", descricao: "Buffet completo com saladas, massas e frios.", preco: 45, recuperacao: { fome: 60, energia: 18, felicidade: 16, sede: 12 } },
                { id: "caipirinha-pampulha", nome: "🍹 Caipirinha", descricao: "Caipirinha de limão com cachaça artesanal.", preco: 22, recuperacao: { felicidade: 18, sede: 10, energia: -4 } },
                { id: "suco-pampulha", nome: "🥤 Suco Natural", descricao: "Suco de laranja ou abacaxi natural.", preco: 12, recuperacao: { sede: 25, energia: 8, felicidade: 6 } }
            ]
        },
        
        "pampulha-mineira": {
            id: "pampulha-mineira",
            nome: "🏠 Dona Lucinha - Pampulha",
            endereco: "Av. Otacílio Negrão de Lima, 2500 - Pampulha, Belo Horizonte",
            horario: "11h30 às 16h | 18h30 às 22h30",
            telefone: "(31) 3344-7799",
            descricao: "Culinária mineira tradicional em um casarão histórico na Pampulha. Comida de verdade como a avó fazia.",
            tipo: ["mineira", "tradicional", "familiar", "turístico"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 2890,
            cardapio: [
                { id: "galinha-cabidela", nome: "🐔 Galinha à Cabidela", descricao: "Galinha caipira cozida com sangue e vinagre.", preco: 65, recuperacao: { fome: 80, energia: 26, felicidade: 24, sede: 12 } },
                { id: "leitao-pampulha", nome: "🐷 Leitão à Pururuca", descricao: "Leitão assado com couro crocante e farofa.", preco: 85, recuperacao: { fome: 90, energia: 32, felicidade: 30, sede: 15 } },
                { id: "angu-pampulha", nome: "🍲 Angu Cremoso", descricao: "Angu cremoso com queijo e couve refogada.", preco: 32, recuperacao: { fome: 45, energia: 14, felicidade: 14, sede: 6 } },
                { id: "cachaca-pampulha", nome: "🥃 Cachaça Premium", descricao: "Cachaça envelhecida por 5 anos.", preco: 18, recuperacao: { felicidade: 15, energia: -3, sede: 8 } }
            ]
        },
        
        // ========== SANTA TEREZA (BAIRRO BOÊMIO) ==========
        "santa-tereza-boteco": {
            id: "santa-tereza-boteco",
            nome: "🍺 Boteco Santa Tereza",
            endereco: "Rua Santa Tereza, 300 - Santa Tereza, Belo Horizonte",
            horario: "11h às 02h (happy hour até 20h)",
            telefone: "(31) 3344-9900",
            descricao: "Boteco tradicional do bairro boêmio de BH. Petiscos fartos, chop gelado e samba ao vivo aos fins de semana.",
            tipo: ["boteco", "petiscos", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 40,
            estrelas: 4.5,
            avaliacoes: 2980,
            cardapio: [
                { id: "bolinho-bacalhau-st", nome: "🍘 Bolinho de Bacalhau (6 unid)", descricao: "Bolinho de bacalhau desfiado com salsinha e cebolinha.", preco: 32, recuperacao: { fome: 35, felicidade: 16, energia: 8, sede: 4 } },
                { id: "porcao-calabresa-st", nome: "🍢 Porção de Calabresa", descricao: "Calabresa acebolada com pimentão e cebola.", preco: 28, recuperacao: { fome: 40, felicidade: 14, energia: 8, sede: 5 } },
                { id: "torresmo-st", nome: "🥓 Torresmo Pururuca", descricao: "Torresmo crocante com limão.", preco: 22, recuperacao: { fome: 30, felicidade: 12, energia: 6, sede: 3 } },
                { id: "linguica-st", nome: "🍢 Linguiça Artesanal", descricao: "Linguiça de porco assada na brasa.", preco: 25, recuperacao: { fome: 35, felicidade: 14, energia: 8, sede: 4 } },
                { id: "mandioca-st", nome: "🍠 Mandioca Frita", descricao: "Mandioca frita crocante com bacon.", preco: 20, recuperacao: { fome: 28, felicidade: 10, energia: 6, sede: 2 } },
                { id: "chopp-st", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro bem gelado.", preco: 10, recuperacao: { sede: 25, felicidade: 12, energia: -5 } },
                { id: "cerveja-st", nome: "🍺 Cerveja Artesanal", descricao: "Cerveja artesanal Colorado.", preco: 16, recuperacao: { sede: 22, felicidade: 14, energia: -3 } }
            ]
        },
        
        "santa-tereza-arabe": {
            id: "santa-tereza-arabe",
            nome: "🧆 Almanara Santa Tereza",
            endereco: "Rua Santa Tereza, 500 - Santa Tereza, Belo Horizonte",
            horario: "11h às 23h",
            telefone: "(31) 3344-1122",
            descricao: "Culinária árabe libanesa autêntica. Esfihas, quibes, hommus e banquetes. Ambiente familiar.",
            tipo: ["arabe", "massas", "familiar", "vegetariano", "delivery"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 1560,
            cardapio: [
                { id: "banquete-arabe-st", nome: "🍽️ Banquete Árabe (2 pessoas)", descricao: "Hommus, babaganoush, tabule, kibe cru, esfihas, charme e sfihas.", preco: 85, recuperacao: { fome: 100, felicidade: 32, energia: 20, sede: 15 } },
                { id: "esfiha-carne-st", nome: "🥙 Esfiha de Carne (8 unid)", descricao: "Esfihas abertas com carne temperada, limão e hortelã.", preco: 28, recuperacao: { fome: 40, felicidade: 14, energia: 8, sede: 5 } },
                { id: "quibe-st", nome: "🍘 Quibe Frito (6 unid)", descricao: "Quibe de carne moída frito com hortelã.", preco: 24, recuperacao: { fome: 35, felicidade: 12, energia: 8, sede: 3 } },
                { id: "hommus-st", nome: "🥣 Hommus", descricao: "Pasta de grão-de-bico com tahine, limão e alho.", preco: 22, recuperacao: { fome: 25, felicidade: 10, energia: 6, sede: 4 } },
                { id: "suco-limao-st", nome: "🥤 Suco de Limão", descricao: "Suco de limão com hortelã.", preco: 10, recuperacao: { sede: 22, energia: 5, felicidade: 6 } }
            ]
        },
        
        // ========== BH SHOPPING (CENTRO-SUL) ==========
        "bh-shopping-foodcourt": {
            id: "bh-shopping-foodcourt",
            nome: "🛍️ BH Shopping - Food Court",
            endereco: "BR-356, 3049 - Belvedere, Belo Horizonte",
            horario: "10h às 22h",
            telefone: "(31) 3344-1234",
            descricao: "Praça de alimentação do BH Shopping com diversas opções nacionais e internacionais.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 8900,
            cardapio: [
                { id: "outback-bh", nome: "🇦🇺 Outback Steakhouse", descricao: "Carnes, massas e sobremesas.", preco: 52, recuperacao: { fome: 55, energia: 16, felicidade: 12, sede: 8 } },
                { id: "habibs-bh", nome: "🇸🇾 Habib's", descricao: "Esfihas e quibes.", preco: 28, recuperacao: { fome: 35, energia: 10, felicidade: 8, sede: 5 } },
                { id: "mc-bh", nome: "🍔 McDonald's", descricao: "Hambúrgueres tradicionais.", preco: 32, recuperacao: { fome: 40, energia: 12, felicidade: 8, sede: 5 } },
                { id: "subway-bh", nome: "🥪 Subway", descricao: "Sanduíches artesanais.", preco: 30, recuperacao: { fome: 38, energia: 10, felicidade: 8, sede: 6 } },
                { id: "sucos-bh", nome: "🥤 Sucos Naturais", descricao: "Sucos naturais variados.", preco: 12, recuperacao: { sede: 25, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== BARREIRO (REGIÃO POPULAR) ==========
        "barreiro-pastelaria": {
            id: "barreiro-pastelaria",
            nome: "🥟 Pastelaria Barreiro",
            endereco: "Av. Afonso Vaz de Melo, 1000 - Barreiro, Belo Horizonte",
            horario: "8h às 22h",
            telefone: "(31) 3344-5566",
            descricao: "Pastelaria tradicional do bairro Barreiro. Pastéis gigantes, caldo de cana e sucos naturais.",
            tipo: ["lanches", "fast-food", "tradicional", "familiar"],
            preco_medio: 28,
            estrelas: 4.3,
            avaliacoes: 2340,
            cardapio: [
                { id: "pastel-carne-barreiro", nome: "🥟 Pastel de Carne", descricao: "Pastel crocante com carne moída temperada.", preco: 12, recuperacao: { fome: 22, felicidade: 8, energia: 4, sede: 2 } },
                { id: "pastel-queijo-barreiro", nome: "🥟 Pastel de Queijo", descricao: "Pastel crocante com queijo derretido.", preco: 12, recuperacao: { fome: 22, felicidade: 8, energia: 4, sede: 2 } },
                { id: "pastel-pizza-barreiro", nome: "🥟 Pastel de Pizza", descricao: "Pastel recheado com molho, mussarela e calabresa.", preco: 14, recuperacao: { fome: 24, felicidade: 9, energia: 4, sede: 2 } },
                { id: "caldo-cana-barreiro", nome: "🥤 Caldo de Cana", descricao: "Caldo de cana natural com limão.", preco: 8, recuperacao: { sede: 22, energia: 8, felicidade: 4 } }
            ]
        },
        
        "barreiro-lanchonete": {
            id: "barreiro-lanchonete",
            nome: "🍔 Lanchonete do Barreiro",
            endereco: "Rua Diamantina, 500 - Barreiro, Belo Horizonte",
            horario: "7h às 23h",
            telefone: "(31) 3344-7788",
            descricao: "Lanchonete tradicional do bairro com x-tudo, sucos e salgados. Frequentada por moradores e trabalhadores.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 25,
            estrelas: 4.1,
            avaliacoes: 1890,
            cardapio: [
                { id: "x-tudo-barreiro", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon, alface, tomate.", preco: 22, recuperacao: { fome: 55, energia: 18, felicidade: 14, sede: 8 } },
                { id: "mistao-barreiro", nome: "🥪 Misto Quente", descricao: "Pão de forma com queijo e presunto.", preco: 8, recuperacao: { fome: 15, felicidade: 6, energia: 4, sede: 2 } },
                { id: "coxinha-barreiro", nome: "🍗 Coxinha", descricao: "Coxinha de frango com catupiry.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3, sede: 1 } },
                { id: "suco-laranja-barreiro", nome: "🥤 Suco de Laranja", descricao: "Suco natural de laranja.", preco: 8, recuperacao: { sede: 22, energia: 6, felicidade: 6 } }
            ]
        },
        
        // ========== VENDA NOVA (REGIÃO NORTE) ==========
        "venda-nova-pizza": {
            id: "venda-nova-pizza",
            nome: "🍕 Pizzaria Venda Nova",
            endereco: "Av. Vilarinho, 2000 - Venda Nova, Belo Horizonte",
            horario: "18h às 00h (fecha segunda)",
            telefone: "(31) 3344-9900",
            descricao: "Pizzaria tradicional da região Norte. Forno à lenha, massa fina e ingredientes de qualidade.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 55,
            estrelas: 4.4,
            avaliacoes: 1870,
            cardapio: [
                { id: "pizza-mussarela-vn", nome: "🍕 Pizza Mussarela", descricao: "Molho, mussarela, tomate, orégano.", preco: 48, recuperacao: { fome: 55, energia: 16, felicidade: 12, sede: 5 } },
                { id: "pizza-calabresa-vn", nome: "🍕 Pizza Calabresa", descricao: "Molho, mussarela, calabresa, cebola.", preco: 52, recuperacao: { fome: 58, energia: 16, felicidade: 12, sede: 5 } },
                { id: "pizza-portuguesa-vn", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola, azeitona.", preco: 55, recuperacao: { fome: 60, energia: 16, felicidade: 12, sede: 6 } },
                { id: "pizza-frango-vn", nome: "🍕 Pizza de Frango", descricao: "Frango desfiado com catupiry e milho.", preco: 54, recuperacao: { fome: 58, energia: 16, felicidade: 12, sede: 5 } },
                { id: "refri-vn", nome: "🥤 Refrigerante", descricao: "Coca-Cola ou Guaraná 2L.", preco: 12, recuperacao: { sede: 30, energia: 5, felicidade: 8 } }
            ]
        },
        
        // ========== RODOVIÁRIA BH ==========
        "rodoviaria-bh": {
            id: "rodoviaria-bh",
            nome: "🚌 Terminal Rodoviário - Praça de Alimentação",
            endereco: "Praça Rio Branco, 100 - Centro, Belo Horizonte",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando ou chegando.",
            tipo: ["fast-food", "rodoviaria", "viagem", "24h"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 2340,
            cardapio: [
                { id: "sanduiche-bh", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango, queijo branco e alface.", preco: 15, recuperacao: { fome: 20, energia: 8, felicidade: 4, sede: 3 } },
                { id: "suco-bh", nome: "🥤 Suco Natural", descricao: "Suco de laranja ou limão.", preco: 8, recuperacao: { sede: 20, energia: 5, felicidade: 4 } }
            ]
        }
    },

    // ==================== UBERLÂNDIA - TRIÂNGULO MINEIRO ====================
    "Uberlândia": {
        // --- CENTRO ---
        "uberlandia-churrascaria": {
            id: "uberlandia-churrascaria",
            nome: "🥩 Churrascaria Uberlândia Grill",
            endereco: "Av. Rondon Pacheco, 2000 - Centro, Uberlândia",
            horario: "11h30 às 15h | 18h30 às 23h",
            telefone: "(34) 3234-5678",
            descricao: "Churrascaria tradicional do Triângulo Mineiro. Rodízio com cortes nobres e buffet completo. Ambiente familiar e executivo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar", "executivos"],
            preco_medio: 85,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                { id: "rodizio-udi", nome: "🥩 Rodízio Completo", descricao: "Mais de 12 cortes de carne: picanha, maminha, fraldinha, costela, cordeiro.", preco: 89, recuperacao: { fome: 100, energia: 42, felicidade: 38, sede: 18 } },
                { id: "picanha-udi", nome: "🥩 Picanha Nobre", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 62, recuperacao: { fome: 70, energia: 25, felicidade: 20, sede: 10 } },
                { id: "costela-udi", nome: "🍖 Costela ao Bafo", descricao: "Costela assada lentamente por 5 horas.", preco: 68, recuperacao: { fome: 80, energia: 28, felicidade: 22, sede: 12 } },
                { id: "buffet-udi", nome: "🥗 Buffet de Saladas", descricao: "Buffet completo com mais de 30 opções.", preco: 42, recuperacao: { fome: 55, energia: 16, felicidade: 14, sede: 10 } },
                { id: "caipirinha-udi", nome: "🍹 Caipirinha", descricao: "Caipirinha de limão ou morango.", preco: 20, recuperacao: { felicidade: 16, sede: 10, energia: -3 } },
                { id: "suco-udi", nome: "🥤 Suco Natural", descricao: "Suco de laranja, abacaxi ou melancia.", preco: 10, recuperacao: { sede: 24, energia: 6, felicidade: 6 } }
            ]
        },
        
        "uberlandia-cafe": {
            id: "uberlandia-cafe",
            nome: "☕ Café do Triângulo",
            endereco: "Rua Olegário Maciel, 300 - Centro, Uberlândia",
            horario: "7h às 20h",
            telefone: "(34) 3456-7890",
            descricao: "Cafeteria tradicional do centro. Cafés especiais, pães caseiros e doces artesanais.",
            tipo: ["cafeteria", "tradicional", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-especial-udi", nome: "☕ Café Especial", descricao: "Café 100% arábica, torra média.", preco: 10, recuperacao: { sede: 12, energia: 14, felicidade: 10 } },
                { id: "pao-queijo-udi", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo mineiro quentinho.", preco: 6, recuperacao: { fome: 12, felicidade: 8, energia: 4, sede: 2 } },
                { id: "broa-udi", nome: "🍞 Broa de Milho", descricao: "Broa de milho caseira.", preco: 5, recuperacao: { fome: 10, felicidade: 6, energia: 3, sede: 1 } },
                { id: "bolo-cenoura-udi", nome: "🍰 Bolo de Cenoura", descricao: "Bolo de cenoura com cobertura de chocolate.", preco: 8, recuperacao: { fome: 15, felicidade: 12, energia: 5, sede: 2 } },
                { id: "cappuccino-udi", nome: "☕ Cappuccino", descricao: "Cappuccino italiano com canela.", preco: 14, recuperacao: { sede: 14, energia: 12, felicidade: 10 } }
            ]
        },
        
        // --- BAIRRO SANTA MÔNICA (BAIRRO NOBRE) ---
        "santa-monica-japones": {
            id: "santa-monica-japones",
            nome: "🍣 Sushi Santa Mônica",
            endereco: "Av. João Naves de Ávila, 1500 - Santa Mônica, Uberlândia",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(34) 4567-8901",
            descricao: "Alta gastronomia japonesa no bairro nobre. Peixes frescos e rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 90,
            estrelas: 4.7,
            avaliacoes: 1120,
            cardapio: [
                { id: "rodizio-udi-japa", nome: "🍣 Rodízio Premium", descricao: "Sashimis variados, uramakis, hot rolls, temakis e peças especiais.", preco: 95, recuperacao: { fome: 85, energia: 26, felicidade: 32, sede: 14 } },
                { id: "combinado-udi-japa", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, camarão.", preco: 68, recuperacao: { fome: 65, energia: 20, felicidade: 24, sede: 10 } },
                { id: "sashimi-udi", nome: "🐟 Sashimi Variado", descricao: "10 peças de sashimi: salmão, atum, peixe branco.", preco: 48, recuperacao: { fome: 40, energia: 14, felicidade: 20, sede: 5 } },
                { id: "missoshiro-udi", nome: "🥣 Missoshiro", descricao: "Sopa de missô com tofu e algas.", preco: 15, recuperacao: { fome: 12, energia: 8, felicidade: 8, sede: 20 } },
                { id: "sake-udi", nome: "🍶 Saquê", descricao: "Saquê tradicional japonês.", preco: 25, recuperacao: { sede: 8, felicidade: 16, energia: -3 } },
                { id: "cha-verde-udi", nome: "🍵 Chá Verde", descricao: "Chá verde japonês quente.", preco: 10, recuperacao: { sede: 18, energia: 6, felicidade: 6 } }
            ]
        },
        
        "santa-monica-italiana": {
            id: "santa-monica-italiana",
            nome: "🍝 Cantina della Nonna",
            endereco: "Av. João Naves de Ávila, 1800 - Santa Mônica, Uberlândia",
            horario: "11h30 às 15h | 18h às 23h (fecha segunda)",
            telefone: "(34) 5678-9012",
            descricao: "Cantina italiana com massas frescas e molhos caseiros. Ambiente romântico.",
            tipo: ["italiana", "massas", "romântico", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 890,
            cardapio: [
                { id: "parmegiana-udi", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com molho e queijo.", preco: 58, recuperacao: { fome: 70, energia: 22, felicidade: 18, sede: 8 } },
                { id: "lasanha-udi", nome: "🍝 Lasanha Bolonhesa", descricao: "Camadas de massa com molho bolonhesa e bechamel.", preco: 52, recuperacao: { fome: 65, energia: 18, felicidade: 16, sede: 7 } },
                { id: "spaghetti-udi", nome: "🍝 Spaghetti al Pomodoro", descricao: "Spaghetti com molho de tomate fresco e manjericão.", preco: 45, recuperacao: { fome: 50, energia: 14, felicidade: 14, sede: 6 } },
                { id: "tiramisu-udi", nome: "🍮 Tiramisu", descricao: "Tiramisu tradicional.", preco: 22, recuperacao: { fome: 8, felicidade: 18, energia: 5 } },
                { id: "vinho-tinto-udi", nome: "🍷 Vinho Tinto", descricao: "Vinho tinto italiano.", preco: 35, recuperacao: { sede: 10, felicidade: 16, energia: -4 } }
            ]
        },
        
        "santa-monica-mineira": {
            id: "santa-monica-mineira",
            nome: "🏠 Fazenda Mineira",
            endereco: "Av. Segismundo Pereira, 1200 - Santa Mônica, Uberlândia",
            horario: "11h30 às 15h | 18h30 às 22h30",
            telefone: "(34) 6789-0123",
            descricao: "Culinária mineira em ambiente rústico. Comida caseira e atendimento familiar.",
            tipo: ["mineira", "tradicional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1340,
            cardapio: [
                { id: "frango-caipira-udi", nome: "🍗 Frango Caipira", descricao: "Frango caipira com quiabo e angu.", preco: 55, recuperacao: { fome: 75, energia: 22, felicidade: 20, sede: 8 } },
                { id: "feijao-tropeiro-udi", nome: "🫘 Feijão Tropeiro", descricao: "Feijão com farinha, ovos, bacon e torresmo.", preco: 45, recuperacao: { fome: 65, energia: 20, felicidade: 18, sede: 7 } },
                { id: "leitao-udi", nome: "🐷 Leitão Pururuca", descricao: "Leitão assado com couro crocante.", preco: 72, recuperacao: { fome: 80, energia: 28, felicidade: 26, sede: 10 } },
                { id: "cachaca-udi", nome: "🥃 Cachaça Mineira", descricao: "Cachaça artesanal.", preco: 15, recuperacao: { felicidade: 14, sede: 6, energia: -3 } }
            ]
        },
        
        // --- BAIRRO TIBIRIÇÁ (REGIÃO UNIVERSITÁRIA) ---
        "tibirica-boteco": {
            id: "tibirica-boteco",
            nome: "🍺 Boteco do Tibiriçá",
            endereco: "Av. Rondon Pacheco, 3000 - Tibiriçá, Uberlândia",
            horario: "11h às 02h (happy hour até 20h)",
            telefone: "(34) 6789-0123",
            descricao: "Point da galera universitária da UFU. Petiscos, chopp gelado e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "universitario", "musica-ao-vivo"],
            preco_medio: 40,
            estrelas: 4.4,
            avaliacoes: 2340,
            cardapio: [
                { id: "porcao-fritas-tibi", nome: "🍟 Porção de Batata", descricao: "Batata frita com cheddar e bacon.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6, sede: 3 } },
                { id: "xis-tudo-tibi", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon.", preco: 32, recuperacao: { fome: 60, energia: 20, felicidade: 16, sede: 10 } },
                { id: "chopp-tibi", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 10, recuperacao: { sede: 22, felicidade: 10, energia: -5 } },
                { id: "linguiça-tibi", nome: "🍢 Linguiça", descricao: "Linguiça de porco acebolada.", preco: 25, recuperacao: { fome: 35, felicidade: 14, energia: 8, sede: 4 } },
                { id: "torresmo-tibi", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 20, recuperacao: { fome: 30, felicidade: 12, energia: 6, sede: 3 } }
            ]
        },
        
        "tibirica-brasileira": {
            id: "tibirica-brasileira",
            nome: "🇧🇷 Brasil Central",
            endereco: "Rua dos Universitários, 500 - Tibiriçá, Uberlândia",
            horario: "11h às 15h | 18h às 23h",
            telefone: "(34) 7890-1234",
            descricao: "Cozinha brasileira regional com buffet por quilo. Pratos do Triângulo Mineiro e Centro-Oeste.",
            tipo: ["brasileira", "buffet", "universitario", "popular"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 1560,
            cardapio: [
                { id: "buffet-livre-tibi", nome: "🍽️ Buffet por Quilo", descricao: "Buffet com mais de 20 opções de pratos quentes e saladas.", preco: 42, recuperacao: { fome: 80, energia: 24, felicidade: 20, sede: 15 } },
                { id: "picadinho-tibi", nome: "🥩 Picadinho", descricao: "Picadinho de carne com legumes.", preco: 28, recuperacao: { fome: 50, energia: 16, felicidade: 12, sede: 6 } },
                { id: "suco-tibi", nome: "🥤 Suco Natural", descricao: "Suco de frutas natural.", preco: 8, recuperacao: { sede: 22, energia: 6, felicidade: 6 } }
            ]
        },
        
        // --- SHOPPING UBERLÂNDIA ---
        "shopping-udi": {
            id: "shopping-udi",
            nome: "🛍️ Shopping Uberlândia - Food Court",
            endereco: "Av. João Naves de Ávila, 1331 - Santa Mônica, Uberlândia",
            horario: "10h às 22h",
            telefone: "(34) 7890-1234",
            descricao: "Praça de alimentação do Shopping Uberlândia com diversas opções.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.3,
            avaliacoes: 3450,
            cardapio: [
                { id: "mc-udi", nome: "🍔 McDonald's", descricao: "Hambúrguer e batata.", preco: 32, recuperacao: { fome: 40, energia: 12, felicidade: 8, sede: 5 } },
                { id: "subway-udi", nome: "🥪 Subway", descricao: "Sanduíche artesanal.", preco: 28, recuperacao: { fome: 35, energia: 10, felicidade: 8, sede: 6 } },
                { id: "bobs-udi", nome: "🍔 Bob's", descricao: "Sanduíches e milk-shakes.", preco: 30, recuperacao: { fome: 38, energia: 12, felicidade: 10, sede: 8 } }
            ]
        },
        
        // --- BAIRRO LUZ (PERIFERIA) ---
        "luz-lanchonete": {
            id: "luz-lanchonete",
            nome: "🍔 Lanchonete do Bairro Luz",
            endereco: "Rua José de Alencar, 500 - Bairro Luz, Uberlândia",
            horario: "8h às 22h",
            telefone: "(34) 8901-2345",
            descricao: "Lanchonete tradicional do bairro. X-tudo, sucos e salgados. Atendimento familiar.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.0,
            avaliacoes: 980,
            cardapio: [
                { id: "x-salada-luz", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 18, recuperacao: { fome: 40, energia: 12, felicidade: 10, sede: 5 } },
                { id: "coxinha-luz", nome: "🍗 Coxinha", descricao: "Coxinha de frango tradicional.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3, sede: 1 } },
                { id: "pastel-luz", nome: "🥟 Pastel", descricao: "Pastel de carne ou queijo.", preco: 8, recuperacao: { fome: 15, felicidade: 7, energia: 4, sede: 2 } },
                { id: "suco-luz", nome: "🥤 Suco", descricao: "Suco de laranja natural.", preco: 7, recuperacao: { sede: 20, energia: 5, felicidade: 5 } }
            ]
        },
        
        // --- RODOVIÁRIA UBERLÂNDIA ---
        "rodoviaria-udi": {
            id: "rodoviaria-udi",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. João Pinheiro, 1000 - Centro, Uberlândia",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-udi", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8, felicidade: 4, sede: 3 } },
                { id: "suco-udi", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } }
            ]
        }
    },

    // ==================== OURO PRETO - CIDADE HISTÓRICA ====================
    "Ouro Preto": {
        // --- CENTRO HISTÓRICO ---
        "ouro-preto-mineira": {
            id: "ouro-preto-mineira",
            nome: "🏛️ Casa do Ouvidor",
            endereco: "Rua Cláudio Manoel, 88 - Centro, Ouro Preto",
            horario: "12h às 22h (quinta a domingo)",
            telefone: "(31) 3551-2345",
            descricao: "Culinária mineira tradicional em casarão histórico do século XVIII. Ambiente colonial, com decoração de época. Especialidades da serra.",
            tipo: ["mineira", "tradicional", "colonial", "turístico", "histórico"],
            preco_medio: 65,
            estrelas: 4.8,
            avaliacoes: 2340,
            cardapio: [
                { id: "tutu-op", nome: "🫘 Tutu à Mineira", descricao: "Feijão com farinha, couve, costelinha, ovo e torresmo.", preco: 55, recuperacao: { fome: 80, energia: 24, felicidade: 22, sede: 8 } },
                { id: "frango-ouro", nome: "🍗 Frango com Angu", descricao: "Frango caipira com quiabo e angu cremoso.", preco: 52, recuperacao: { fome: 75, energia: 22, felicidade: 20, sede: 8 } },
                { id: "feijao-tropeiro-op", nome: "🫘 Feijão Tropeiro", descricao: "Feijão com farinha, ovos, bacon, couve e torresmo.", preco: 48, recuperacao: { fome: 70, energia: 20, felicidade: 18, sede: 6 } },
                { id: "pao-queijo-op", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo mineiro quentinho.", preco: 8, recuperacao: { fome: 15, felicidade: 10, energia: 5, sede: 2 } },
                { id: "doce-leite-op", nome: "🍬 Doce de Leite", descricao: "Doce de leite caseiro.", preco: 12, recuperacao: { fome: 15, felicidade: 14, energia: 5, sede: 2 } },
                { id: "cachaca-op", nome: "🥃 Cachaça", descricao: "Cachaça artesanal da região.", preco: 14, recuperacao: { felicidade: 12, sede: 6, energia: -3 } }
            ]
        },
        
        "ouro-preto-bistro": {
            id: "ouro-preto-bistro",
            nome: "🍽️ Bistrô Ouro Preto",
            endereco: "Rua São José, 200 - Centro, Ouro Preto",
            horario: "11h30 às 15h | 18h30 às 22h (fecha terça)",
            telefone: "(31) 3551-4567",
            descricao: "Bistrô charmoso com vista para a Igreja de São Francisco. Cozinha contemporânea com ingredientes locais.",
            tipo: ["brasileira", "premium", "romântico", "vista", "contemporânea"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 890,
            cardapio: [
                { id: "truta-op", nome: "🐟 Truta da Serra", descricao: "Truta fresca grelhada com manteiga de ervas, acompanhada de legumes salteados.", preco: 68, recuperacao: { fome: 65, energia: 22, felicidade: 22, sede: 10 } },
                { id: "risoto-op", nome: "🍚 Risoto de Cogumelos", descricao: "Risoto cremoso com cogumelos frescos da serra e queijo canastra.", preco: 58, recuperacao: { fome: 60, energia: 18, felicidade: 20, sede: 8 } },
                { id: "file-op", nome: "🥩 Filé ao Vinho", descricao: "Filé mignon ao molho de vinho tinto.", preco: 72, recuperacao: { fome: 70, energia: 24, felicidade: 24, sede: 12 } },
                { id: "vinho-op", nome: "🍷 Vinho Tinto", descricao: "Vinho chileno reservado.", preco: 38, recuperacao: { sede: 10, felicidade: 16, energia: -4 } },
                { id: "caipirinha-op", nome: "🍹 Caipirinha", descricao: "Caipirinha com cachaça artesanal.", preco: 22, recuperacao: { felicidade: 18, sede: 8, energia: -3 } }
            ]
        },
        
        "ouro-preto-pizzaria": {
            id: "ouro-preto-pizzaria",
            nome: "🍕 Pizzaria da Praça",
            endereco: "Praça Tiradentes, 50 - Centro, Ouro Preto",
            horario: "18h às 00h (todos os dias)",
            telefone: "(31) 3551-5678",
            descricao: "Pizzaria tradicional na principal praça de Ouro Preto. Massa fina e forno à lenha. Ambiente turístico.",
            tipo: ["pizzaria", "italiana", "turístico", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1560,
            cardapio: [
                { id: "pizza-margherita-op", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela de búfala, manjericão.", preco: 52, recuperacao: { fome: 55, energia: 16, felicidade: 14, sede: 5 } },
                { id: "pizza-mineira-op", nome: "🍕 Pizza Mineira", descricao: "Frango com catupiry, milho e palmito.", preco: 58, recuperacao: { fome: 58, energia: 16, felicidade: 14, sede: 5 } },
                { id: "pizza-portuguesa-op", nome: "🍕 Pizza Portuguesa", descricao: "Presunto, ovos, cebola, azeitona.", preco: 56, recuperacao: { fome: 57, energia: 16, felicidade: 14, sede: 5 } },
                { id: "cerveja-op", nome: "🍺 Cerveja", descricao: "Cerveja gelada.", preco: 12, recuperacao: { sede: 22, felicidade: 8, energia: -2 } }
            ]
        },
        
        // --- REGIÃO DA ANTIGA ESTAÇÃO ---
        "estacao-boteco": {
            id: "estacao-boteco",
            nome: "🍺 Boteco da Estação",
            endereco: "Rua da Estação, 100 - Centro, Ouro Preto",
            horario: "11h às 00h (happy hour até 20h)",
            telefone: "(31) 3551-6789",
            descricao: "Boteco tradicional perto da antiga estação ferroviária. Petiscos, chopp gelado e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "tradicional", "musica-ao-vivo"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 1890,
            cardapio: [
                { id: "torresmo-op", nome: "🥓 Torresmo", descricao: "Torresmo pururuca crocante.", preco: 18, recuperacao: { fome: 25, felicidade: 10, energia: 5, sede: 3 } },
                { id: "linguiça-op", nome: "🍢 Linguiça de Ouro Preto", descricao: "Linguiça artesanal assada na brasa.", preco: 22, recuperacao: { fome: 30, felicidade: 12, energia: 6, sede: 4 } },
                { id: "chopp-op", nome: "🍺 Chopp Gelado", descricao: "Chopp claro tirado na hora.", preco: 10, recuperacao: { sede: 20, felicidade: 10, energia: -4 } },
                { id: "mandioca-op", nome: "🍠 Mandioca", descricao: "Mandioca frita com bacon.", preco: 20, recuperacao: { fome: 28, felicidade: 10, energia: 6, sede: 2 } },
                { id: "cachaca-op", nome: "🥃 Cachaça", descricao: "Cachaça da região.", preco: 12, recuperacao: { felicidade: 10, sede: 5, energia: -2 } }
            ]
        },
        
        // --- LARGO DO COIMBRA ---
        "coimbra-cafe": {
            id: "coimbra-cafe",
            nome: "☕ Café no Largo",
            endereco: "Largo do Coimbra, 50 - Centro, Ouro Preto",
            horario: "8h às 19h",
            telefone: "(31) 3551-7890",
            descricao: "Cafeteria charmosa no Largo do Coimbra. Cafés especiais, doces caseiros e vista para a serra.",
            tipo: ["cafeteria", "doces", "vista", "turístico"],
            preco_medio: 28,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                { id: "cafe-colonial-op", nome: "☕ Café Colonial", descricao: "Café coado com leite, pão de queijo, broa, doce de leite.", preco: 28, recuperacao: { fome: 35, energia: 18, felicidade: 16, sede: 8 } },
                { id: "doce-leite-op", nome: "🍬 Doce de Leite", descricao: "Doce de leite caseiro com queijo.", preco: 12, recuperacao: { fome: 15, felicidade: 14, energia: 5, sede: 2 } },
                { id: "pao-queijo-op", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo quentinho.", preco: 6, recuperacao: { fome: 12, felicidade: 8, energia: 4, sede: 1 } },
                { id: "bolo-fuba-op", nome: "🍰 Bolo de Fubá", descricao: "Bolo de fubá cremoso.", preco: 8, recuperacao: { fome: 14, felicidade: 10, energia: 4, sede: 2 } },
                { id: "cappuccino-op", nome: "☕ Cappuccino", descricao: "Cappuccino italiano.", preco: 14, recuperacao: { sede: 12, energia: 10, felicidade: 8 } }
            ]
        },
        
        // --- RODOVIÁRIA OURO PRETO ---
        "rodoviaria-op": {
            id: "rodoviaria-op",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Rua da Estação, 200 - Centro, Ouro Preto",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando ou chegando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 560,
            cardapio: [
                { id: "sanduiche-op", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8, felicidade: 4, sede: 3 } },
                { id: "suco-op", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } }
            ]
        },
        
        // --- RESTAURANTE COLONIAL ---
        "colonial-op": {
            id: "colonial-op",
            nome: "🏰 Restaurante Colonial",
            endereco: "Rua Direita, 150 - Centro, Ouro Preto",
            horario: "11h30 às 21h30",
            telefone: "(31) 3551-8901",
            descricao: "Restaurante em casarão colonial com culinária típica da região. Ambiente rústico e acolhedor.",
            tipo: ["mineira", "colonial", "turístico", "familiar"],
            preco_medio: 70,
            estrelas: 4.6,
            avaliacoes: 1780,
            cardapio: [
                { id: "vacatola-op", nome: "🥘 Vacatola", descricao: "Ensopado de carne com legumes típico de Ouro Preto.", preco: 62, recuperacao: { fome: 78, energia: 24, felicidade: 22, sede: 12 } },
                { id: "angue-op", nome: "🍲 Angu à Baiana", descricao: "Angu com molho de camarão e queijo.", preco: 48, recuperacao: { fome: 60, energia: 18, felicidade: 18, sede: 8 } },
                { id: "sopa-mineira-op", nome: "🥣 Sopa Mineira", descricao: "Sopa de legumes com carne de sol.", preco: 35, recuperacao: { fome: 50, energia: 14, felicidade: 14, sede: 20 } },
                { id: "vinho-colonial", nome: "🍷 Vinho da Casa", descricao: "Vinho tinto da casa.", preco: 32, recuperacao: { sede: 10, felicidade: 14, energia: -3 } }
            ]
        }
    },

    // ==================== JUIZ DE FORA - ZONA DA MATA ====================
    "Juiz de Fora": {
        // --- CENTRO ---
        "juiz-fora-mineira": {
            id: "juiz-fora-mineira",
            nome: "🍲 Sabores da Serra",
            endereco: "Av. Rio Branco, 2000 - Centro, Juiz de Fora",
            horario: "11h às 23h",
            telefone: "(32) 3234-5678",
            descricao: "Cozinha mineira tradicional com ingredientes da serra. Famosa pelo frango com quiabo e tutu. Ambiente familiar.",
            tipo: ["mineira", "tradicional", "familiar", "regional"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1450,
            cardapio: [
                { id: "frango-quiabo-jf", nome: "🍗 Frango com Quiabo", descricao: "Frango caipira com quiabo e angu.", preco: 52, recuperacao: { fome: 75, energia: 22, felicidade: 18, sede: 8 } },
                { id: "tutu-jf", nome: "🫘 Tutu à Mineira", descricao: "Feijão com farinha, couve, costelinha e ovo.", preco: 48, recuperacao: { fome: 70, energia: 20, felicidade: 16, sede: 7 } },
                { id: "feijao-tropeiro-jf", nome: "🫘 Feijão Tropeiro", descricao: "Feijão com farinha, ovos, bacon e torresmo.", preco: 45, recuperacao: { fome: 65, energia: 18, felicidade: 16, sede: 6 } },
                { id: "pao-queijo-jf", nome: "🧀 Pão de Queijo", descricao: "Pão de queijo mineiro.", preco: 7, recuperacao: { fome: 12, felicidade: 8, energia: 4, sede: 1 } },
                { id: "cachaca-jf", nome: "🥃 Cachaça", descricao: "Cachaça mineira.", preco: 13, recuperacao: { felicidade: 12, sede: 6, energia: -3 } }
            ]
        },
        
        "juiz-fora-cafe": {
            id: "juiz-fora-cafe",
            nome: "☕ Café Central",
            endereco: "Av. Getúlio Vargas, 300 - Centro, Juiz de Fora",
            horario: "7h às 20h",
            telefone: "(32) 3456-7890",
            descricao: "Cafeteria tradicional da cidade, fundada em 1955. Pães caseiros, bolos e salgados.",
            tipo: ["cafeteria", "tradicional", "doces", "artesanal"],
            preco_medio: 30,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "cafe-leite-jf", nome: "☕ Café com Leite", descricao: "Café coado com leite quente.", preco: 10, recuperacao: { sede: 12, energia: 12, felicidade: 8 } },
                { id: "pao-caseiro-jf", nome: "🍞 Pão Caseiro", descricao: "Pão caseiro com manteiga.", preco: 8, recuperacao: { fome: 15, felicidade: 8, energia: 4, sede: 2 } },
                { id: "bolo-chocolate-jf", nome: "🍰 Bolo de Chocolate", descricao: "Bolo de chocolate caseiro.", preco: 9, recuperacao: { fome: 14, felicidade: 12, energia: 5, sede: 2 } },
                { id: "cappuccino-jf", nome: "☕ Cappuccino", descricao: "Cappuccino com canela.", preco: 12, recuperacao: { sede: 12, energia: 10, felicidade: 8 } }
            ]
        },
        
        // --- BAIRRO SÃO MATEUS (BAIRRO NOBRE) ---
        "sao-mateus-japones": {
            id: "sao-mateus-japones",
            nome: "🍣 Sushi São Mateus",
            endereco: "Av. Rio Branco, 3000 - São Mateus, Juiz de Fora",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(32) 4567-8901",
            descricao: "Alta gastronomia japonesa no bairro nobre. Peixes frescos e rodízio premium.",
            tipo: ["japonesa", "sushi", "rodizio", "premium"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                { id: "rodizio-jf-japa", nome: "🍣 Rodízio Premium", descricao: "Sashimis variados, uramakis, hot rolls, temakis.", preco: 89, recuperacao: { fome: 85, energia: 26, felicidade: 32, sede: 14 } },
                { id: "combinado-jf-japa", nome: "🍱 Combinado Especial", descricao: "20 peças variadas: salmão, atum, camarão.", preco: 65, recuperacao: { fome: 65, energia: 20, felicidade: 24, sede: 10 } },
                { id: "sashimi-jf", nome: "🐟 Sashimi", descricao: "10 peças de sashimi variados.", preco: 48, recuperacao: { fome: 40, energia: 14, felicidade: 20, sede: 5 } },
                { id: "missoshiro-jf", nome: "🥣 Missoshiro", descricao: "Sopa de missô.", preco: 15, recuperacao: { fome: 12, energia: 8, felicidade: 8, sede: 22 } },
                { id: "sake-jf", nome: "🍶 Saquê", descricao: "Saquê japonês.", preco: 26, recuperacao: { sede: 8, felicidade: 16, energia: -3 } }
            ]
        },
        
        "sao-mateus-italiana": {
            id: "sao-mateus-italiana",
            nome: "🍝 Cantina do São Mateus",
            endereco: "Rua São Mateus, 200 - São Mateus, Juiz de Fora",
            horario: "11h30 às 15h | 18h às 23h (fecha segunda)",
            telefone: "(32) 5678-9012",
            descricao: "Cantina italiana com massas frescas e molhos caseiros. Ambiente romântico.",
            tipo: ["italiana", "massas", "romântico", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 780,
            cardapio: [
                { id: "parmegiana-jf", nome: "🍽️ Filé à Parmegiana", descricao: "Filé empanado com molho e queijo.", preco: 58, recuperacao: { fome: 70, energia: 22, felicidade: 18, sede: 8 } },
                { id: "lasanha-jf", nome: "🍝 Lasanha Bolonhesa", descricao: "Camadas de massa com molho bolonhesa.", preco: 52, recuperacao: { fome: 65, energia: 18, felicidade: 16, sede: 7 } },
                { id: "spaghetti-jf", nome: "🍝 Spaghetti", descricao: "Spaghetti ao sugo.", preco: 45, recuperacao: { fome: 50, energia: 14, felicidade: 14, sede: 6 } },
                { id: "vinho-jf", nome: "🍷 Vinho", descricao: "Vinho tinto.", preco: 34, recuperacao: { sede: 10, felicidade: 14, energia: -4 } }
            ]
        },
        
        // --- BAIRRO GRAMINHA (REGIÃO UNIVERSITÁRIA - UFJF) ---
        "graminha-boteco": {
            id: "graminha-boteco",
            nome: "🍺 Boteco da Graminha",
            endereco: "Rua Olegário Maciel, 500 - Graminha, Juiz de Fora",
            horario: "11h às 02h (happy hour até 20h)",
            telefone: "(32) 6789-0123",
            descricao: "Point da galera universitária da UFJF. Petiscos, chopp gelado e música ao vivo.",
            tipo: ["boteco", "petiscos", "happy-hour", "universitario", "musica-ao-vivo"],
            preco_medio: 35,
            estrelas: 4.4,
            avaliacoes: 2340,
            cardapio: [
                { id: "xis-tudo-grami", nome: "🍔 X-Tudo", descricao: "Hambúrguer, queijo, presunto, ovo, bacon.", preco: 28, recuperacao: { fome: 60, energia: 20, felicidade: 16, sede: 10 } },
                { id: "porcao-fritas-grami", nome: "🍟 Porção de Batata", descricao: "Batata frita com cheddar.", preco: 22, recuperacao: { fome: 28, felicidade: 12, energia: 6, sede: 3 } },
                { id: "chopp-grami", nome: "🍺 Chopp Gelado", descricao: "Chopp claro ou escuro.", preco: 9, recuperacao: { sede: 20, felicidade: 10, energia: -4 } },
                { id: "torresmo-grami", nome: "🥓 Torresmo", descricao: "Torresmo crocante.", preco: 18, recuperacao: { fome: 25, felicidade: 10, energia: 5, sede: 3 } },
                { id: "linguiça-grami", nome: "🍢 Linguiça", descricao: "Linguiça artesanal.", preco: 22, recuperacao: { fome: 32, felicidade: 12, energia: 6, sede: 4 } }
            ]
        },
        
        "graminha-vegetariano": {
            id: "graminha-vegetariano",
            nome: "🌱 Vegetariano da Graminha",
            endereco: "Rua Olegário Maciel, 800 - Graminha, Juiz de Fora",
            horario: "11h às 21h (fecha domingo)",
            telefone: "(32) 7890-1234",
            descricao: "Restaurante vegetariano e vegano muito popular entre os alunos da UFJF. Buffet por quilo.",
            tipo: ["vegetariano", "vegano", "saudavel", "universitario", "buffet"],
            preco_medio: 35,
            estrelas: 4.6,
            avaliacoes: 890,
            cardapio: [
                { id: "buffet-veg-jf", nome: "🥗 Buffet por Quilo", descricao: "Diversas opções vegetarianas e veganas, saladas, legumes grelhados.", preco: 42, recuperacao: { fome: 65, energia: 22, felicidade: 16, sede: 12 } },
                { id: "suco-detox-jf", nome: "🥤 Suco Detox", descricao: "Couve, limão, gengibre, hortelã e maçã.", preco: 10, recuperacao: { sede: 18, energia: 12, felicidade: 6 } },
                { id: "hamburguer-veg", nome: "🍔 Hambúrguer Vegano", descricao: "Hambúrguer de grão-de-bico com salada.", preco: 24, recuperacao: { fome: 40, energia: 14, felicidade: 12, sede: 6 } },
                { id: "suco-verde", nome: "🥤 Suco Verde", descricao: "Couve, limão, gengibre.", preco: 9, recuperacao: { sede: 20, energia: 10, felicidade: 6 } }
            ]
        },
        
        // --- SHOPPING JF ---
        "shopping-jf": {
            id: "shopping-jf",
            nome: "🛍️ Shopping Jardim Norte - Food Court",
            endereco: "Av. Presidente Itamar Franco, 1000 - São Mateus, Juiz de Fora",
            horario: "10h às 22h",
            telefone: "(32) 8901-2345",
            descricao: "Praça de alimentação do Shopping Jardim Norte com diversas opções.",
            tipo: ["fast-food", "shopping", "variado", "familiar"],
            preco_medio: 45,
            estrelas: 4.2,
            avaliacoes: 2340,
            cardapio: [
                { id: "mc-jf", nome: "🍔 McDonald's", descricao: "Hambúrguer e batata.", preco: 32, recuperacao: { fome: 40, energia: 12, felicidade: 8, sede: 5 } },
                { id: "habibs-jf", nome: "🇸🇾 Habib's", descricao: "Esfihas e quibes.", preco: 28, recuperacao: { fome: 35, energia: 10, felicidade: 8, sede: 5 } },
                { id: "bobs-jf", nome: "🍔 Bob's", descricao: "Sanduíches.", preco: 30, recuperacao: { fome: 38, energia: 12, felicidade: 10, sede: 6 } }
            ]
        },
        
        // --- BAIRRO BERNARDINO (PERIFERIA) ---
        "bernardino-lanchonete": {
            id: "bernardino-lanchonete",
            nome: "🍔 Lanchonete do Bernardino",
            endereco: "Rua Bernardino de Sá, 500 - Bairro Bernardino, Juiz de Fora",
            horario: "8h às 22h",
            telefone: "(32) 9012-3456",
            descricao: "Lanchonete tradicional do bairro. X-tudo, sucos e salgados. Atendimento familiar.",
            tipo: ["lanches", "fast-food", "popular", "familiar"],
            preco_medio: 22,
            estrelas: 4.0,
            avaliacoes: 780,
            cardapio: [
                { id: "x-salada-bern", nome: "🍔 X-Salada", descricao: "Hambúrguer, queijo, alface, tomate.", preco: 18, recuperacao: { fome: 40, energia: 12, felicidade: 10, sede: 5 } },
                { id: "coxinha-bern", nome: "🍗 Coxinha", descricao: "Coxinha de frango tradicional.", preco: 6, recuperacao: { fome: 12, felicidade: 6, energia: 3, sede: 1 } },
                { id: "pastel-bern", nome: "🥟 Pastel", descricao: "Pastel de carne ou queijo.", preco: 8, recuperacao: { fome: 15, felicidade: 7, energia: 4, sede: 2 } },
                { id: "suco-bern", nome: "🥤 Suco", descricao: "Suco natural.", preco: 7, recuperacao: { sede: 20, energia: 5, felicidade: 5 } }
            ]
        },
        
        // --- RODOVIÁRIA JUIZ DE FORA ---
        "rodoviaria-jf": {
            id: "rodoviaria-jf",
            nome: "🚌 Terminal Rodoviário - Lanchonetes",
            endereco: "Av. Brasil, 2000 - Centro, Juiz de Fora",
            horario: "5h às 00h",
            telefone: "-",
            descricao: "Opções rápidas para quem está viajando.",
            tipo: ["fast-food", "rodoviaria", "viagem"],
            preco_medio: 25,
            estrelas: 3.5,
            avaliacoes: 450,
            cardapio: [
                { id: "sanduiche-jf", nome: "🥪 Sanduíche Natural", descricao: "Pão integral com frango.", preco: 15, recuperacao: { fome: 20, energia: 8, felicidade: 4, sede: 3 } },
                { id: "suco-jf", nome: "🥤 Suco de Laranja", descricao: "Suco natural.", preco: 8, recuperacao: { sede: 18, energia: 5, felicidade: 4 } }
            ]
        },
        
        // --- PIZZARIA NO CENTRO ---
        "pizzaria-centro-jf": {
            id: "pizzaria-centro-jf",
            nome: "🍕 Pizzaria Bella Città",
            endereco: "Av. Barão do Rio Branco, 1500 - Centro, Juiz de Fora",
            horario: "18h às 00h (todos os dias)",
            telefone: "(32) 0123-4567",
            descricao: "Pizzaria tradicional no centro com forno à lenha. Massa fina e ingredientes de qualidade.",
            tipo: ["pizzaria", "italiana", "familiar", "delivery"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1120,
            cardapio: [
                { id: "pizza-margherita-jf", nome: "🍕 Pizza Margherita", descricao: "Molho, mussarela, manjericão.", preco: 52, recuperacao: { fome: 55, energia: 16, felicidade: 12, sede: 5 } },
                { id: "pizza-portuguesa-jf", nome: "🍕 Pizza Portuguesa", descricao: "Molho, mussarela, presunto, ovos, cebola.", preco: 58, recuperacao: { fome: 58, energia: 16, felicidade: 12, sede: 5 } },
                { id: "pizza-calabresa-jf", nome: "🍕 Pizza Calabresa", descricao: "Calabresa com cebola.", preco: 54, recuperacao: { fome: 56, energia: 16, felicidade: 12, sede: 5 } },
                { id: "refrigerante-jf", nome: "🥤 Refrigerante", descricao: "Coca-Cola 2L.", preco: 12, recuperacao: { sede: 28, energia: 4, felicidade: 6 } }
            ]
        },
        
        // --- CHURRASCARIA NA ZONA NORTE ---
        "zona-norte-churrasco": {
            id: "zona-norte-churrasco",
            nome: "🥩 Churrascaria Norte Sul",
            endereco: "Av. Deusdedith Salgado, 2000 - Zona Norte, Juiz de Fora",
            horario: "11h30 às 15h | 18h às 23h",
            telefone: "(32) 1234-5678",
            descricao: "Churrascaria tradicional da Zona Norte. Rodízio com cortes nobres e buffet completo.",
            tipo: ["churrascaria", "brasileira", "rodizio", "familiar"],
            preco_medio: 75,
            estrelas: 4.4,
            avaliacoes: 890,
            cardapio: [
                { id: "rodizio-jf-churras", nome: "🥩 Rodízio Nortista", descricao: "Mais de 10 cortes de carne: picanha, maminha, fraldinha.", preco: 79, recuperacao: { fome: 95, energia: 38, felicidade: 32, sede: 16 } },
                { id: "picanha-jf", nome: "🥩 Picanha Especial", descricao: "Picanha 300g com arroz, farofa e vinagrete.", preco: 55, recuperacao: { fome: 65, energia: 22, felicidade: 16, sede: 8 } },
                { id: "alcatra-jf", nome: "🥩 Alcatra", descricao: "Alcatra assada na brasa.", preco: 48, recuperacao: { fome: 60, energia: 20, felicidade: 14, sede: 7 } },
                { id: "caipirinha-jf", nome: "🍹 Caipirinha", descricao: "Caipirinha de limão.", preco: 18, recuperacao: { felicidade: 14, sede: 8, energia: -3 } }
            ]
        },
        
        // --- RESTAURANTE ARABE ---
        "arabe-jf": {
            id: "arabe-jf",
            nome: "🧆 Damasco Árabe",
            endereco: "Rua Halfeld, 800 - Centro, Juiz de Fora",
            horario: "11h30 às 22h30",
            telefone: "(32) 2345-6789",
            descricao: "Culinária árabe tradicional. Esfihas, quibes, hommus e cuscuz marroquino.",
            tipo: ["arabe", "familiar", "massas", "delivery"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 1120,
            cardapio: [
                { id: "combo-arabe", nome: "🍽️ Combo Árabe", descricao: "Hommus, babaganoush, quibe, esfihas, charme.", preco: 68, recuperacao: { fome: 85, energia: 26, felicidade: 24, sede: 12 } },
                { id: "kibe-jf", nome: "🍘 Kibe", descricao: "Kibe frito (6 unidades).", preco: 24, recuperacao: { fome: 32, felicidade: 12, energia: 8, sede: 3 } },
                { id: "esfiha-jf", nome: "🥙 Esfiha", descricao: "Esfiha de carne (8 unidades).", preco: 26, recuperacao: { fome: 35, felicidade: 12, energia: 8, sede: 4 } },
                { id: "suco-limao-jf", nome: "🥤 Suco de Limão", descricao: "Suco de limão com hortelã.", preco: 9, recuperacao: { sede: 22, energia: 5, felicidade: 6 } }
            ]
        }
    }
};

export default restaurantesMG;