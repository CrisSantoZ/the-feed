const restaurantesRJ = {
    // ==================== RIO DE JANEIRO (CAPITAL) ====================
    "Rio de Janeiro": {
        // ========== COPACABANA ==========
        "copacabana-grill": {
            id: "copacabana-grill",
            nome: "🥩 Copacabana Grill",
            endereco: "Av. Atlântica, 2200 - Copacabana",
            horario: "11h às 00h",
            telefone: "(21) 2233-4455",
            descricao: "Churrascaria tradicional à beira-mar com cortes nobres, buffet completo e vista para a praia de Copacabana. Ambiente elegante e turístico.",
            tipo: ["churrascaria", "brasileira", "turístico", "familiar", "premium"],
            preco_medio: 110,
            estrelas: 4.8,
            avaliacoes: 5420,
            cardapio: [
                {
                    id: "rodizio-copa",
                    nome: "🥩 Rodízio Carioca Premium",
                    descricao: "Picanha, fraldinha, cordeiro, costela e buffet completo.",
                    preco: 115,
                    recuperacao: { fome: 100, energia: 40, felicidade: 35 }
                },
                {
                    id: "picanha-copa",
                    nome: "🥩 Picanha na Brasa",
                    descricao: "Picanha grelhada com arroz biro-biro e farofa.",
                    preco: 72,
                    recuperacao: { fome: 70, energia: 25, felicidade: 18 }
                },
                {
                    id: "caipirinha-copa",
                    nome: "🍹 Caipirinha de Limão",
                    descricao: "Caipirinha tradicional carioca.",
                    preco: 22,
                    recuperacao: { sede: 20, felicidade: 15, energia: -5 }
                }
            ]
        },
        "copacabana-quiosque": {
            id: "copacabana-quiosque",
            nome: "🏖️ Quiosque Atlântico",
            endereco: "Orla de Copacabana - Posto 5",
            horario: "08h às 02h",
            telefone: "(21) 98888-1122",
            descricao: "Quiosque famoso da orla carioca. Água de coco gelada, petiscos, frutos do mar e clima descontraído.",
            tipo: ["praia", "petiscos", "frutos-do-mar", "turístico", "happy-hour"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 6200,
            cardapio: [
                {
                    id: "agua-coco",
                    nome: "🥥 Água de Coco",
                    descricao: "Água de coco natural servida gelada.",
                    preco: 12,
                    recuperacao: { sede: 30, energia: 5, felicidade: 8 }
                },
                {
                    id: "camarao-praia",
                    nome: "🍤 Camarão Crocante",
                    descricao: "Porção de camarões empanados com molho especial.",
                    preco: 48,
                    recuperacao: { fome: 35, felicidade: 18 }
                },
                {
                    id: "pastel-praia",
                    nome: "🥟 Pastel de Queijo",
                    descricao: "Pastel crocante servido na hora.",
                    preco: 14,
                    recuperacao: { fome: 20, felicidade: 10 }
                }
            ]
        },
        "copacabana-italiana": {
            id: "copacabana-italiana",
            nome: "🍝 Bella Italia Copacabana",
            endereco: "Rua Santa Clara, 45 - Copacabana",
            horario: "12h às 23h",
            telefone: "(21) 2555-3344",
            descricao: "Autêntica cantina italiana com massas frescas e vinhos importados. Família tradicional desde 1985.",
            tipo: ["italiana", "massas", "familiar", "premium"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 3120,
            cardapio: [
                {
                    id: "carbonara-copa",
                    nome: "🍝 Fettuccine Carbonara",
                    descricao: "Massa fresca com molho cremoso de ovos, queijo e bacon crocante.",
                    preco: 58,
                    recuperacao: { fome: 60, felicidade: 20, energia: 15 }
                },
                {
                    id: "lasanha-copa",
                    nome: "🍽️ Lasanha Bolonhesa",
                    descricao: "Lasanha caseira com camadas generosas de molho à bolonhesa e queijo.",
                    preco: 62,
                    recuperacao: { fome: 65, felicidade: 18, energia: 12 }
                },
                {
                    id: "tiramisu-copa",
                    nome: "🍰 Tiramisu Clássico",
                    descricao: "Sobremesa italiana com café e mascarpone.",
                    preco: 24,
                    recuperacao: { fome: 15, felicidade: 22, energia: 5 }
                }
            ]
        },
        "copacabana-nordestina": {
            id: "copacabana-nordestina",
            nome: "🏝️ Sabores do Nordeste",
            endereco: "Rua Siqueira Campos, 120 - Copacabana",
            horario: "11h às 22h",
            telefone: "(21) 98877-6655",
            descricao: "Culinária nordestina autêntica com forró ao vivo nos fins de semana. Comidas regionais e tapiocas.",
            tipo: ["nordestina", "regional", "forro", "familiar"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 1890,
            cardapio: [
                {
                    id: "baião-dois",
                    nome: "🍚 Baião de Dois",
                    descricao: "Arroz, feijão verde, carne seca, queijo coalho e temperos nordestinos.",
                    preco: 48,
                    recuperacao: { fome: 75, energia: 20, felicidade: 15 }
                },
                {
                    id: "carne-sol",
                    nome: "🥩 Carne de Sol na Manteiga",
                    descricao: "Carne de sol suculenta com mandioca cozida e manteiga de garrafa.",
                    preco: 54,
                    recuperacao: { fome: 70, energia: 22, felicidade: 16 }
                },
                {
                    id: "tapioca-coco",
                    nome: "🥞 Tapioca de Coco",
                    descricao: "Tapioca recheada com coco ralado e leite condensado.",
                    preco: 18,
                    recuperacao: { fome: 25, felicidade: 14, energia: 4 }
                }
            ]
        },
        "copacabana-chinesa": {
            id: "copacabana-chinesa",
            nome: "🥢 Chinatown Copa",
            endereco: "Rua Duvivier, 30 - Copacabana",
            horario: "18h às 00h",
            telefone: "(21) 2444-5566",
            descricao: "Autêntica culinária chinesa com destaque para yakisoba, pato à pequinês e dim sum frescos.",
            tipo: ["chinesa", "asiatica", "massas", "premium"],
            preco_medio: 75,
            estrelas: 4.4,
            avaliacoes: 980,
            cardapio: [
                {
                    id: "pato-pequim",
                    nome: "🦆 Pato à Pequim",
                    descricao: "Pato assado com molho agridoce, servido com panquecas finas.",
                    preco: 95,
                    recuperacao: { fome: 80, felicidade: 30, energia: 18 }
                },
                {
                    id: "dim-sum",
                    nome: "🥟 Dim Sum Variado",
                    descricao: "Seleção de bolinhos cozidos no vapor com diversos recheios.",
                    preco: 42,
                    recuperacao: { fome: 45, felicidade: 18, energia: 8 }
                },
                {
                    id: "frango-xadrez",
                    nome: "🍗 Frango Xadrez",
                    descricao: "Frango salteado com castanhas de caju e pimentões.",
                    preco: 48,
                    recuperacao: { fome: 55, felicidade: 15, energia: 10 }
                }
            ]
        },

        // ========== IPANEMA ==========
        "ipanema-sushi": {
            id: "ipanema-sushi",
            nome: "🍣 Sushi Ipanema",
            endereco: "Rua Visconde de Pirajá, 400 - Ipanema",
            horario: "12h às 00h",
            telefone: "(21) 3344-7788",
            descricao: "Restaurante japonês sofisticado com peixes frescos e ambiente moderno. Muito frequentado por turistas e celebridades.",
            tipo: ["japonesa", "sushi", "premium", "romântico"],
            preco_medio: 120,
            estrelas: 4.9,
            avaliacoes: 3120,
            cardapio: [
                {
                    id: "combo-ipanema",
                    nome: "🍣 Combo Ipanema",
                    descricao: "30 peças premium de sushi e sashimi.",
                    preco: 110,
                    recuperacao: { fome: 80, energia: 25, felicidade: 30 }
                },
                {
                    id: "temaki-salmao",
                    nome: "🍙 Temaki de Salmão",
                    descricao: "Temaki grande com salmão fresco e cream cheese.",
                    preco: 32,
                    recuperacao: { fome: 35, felicidade: 15 }
                },
                {
                    id: "yakisoba-ipanema",
                    nome: "🍜 Yakisoba Especial",
                    descricao: "Macarrão oriental com legumes e carne.",
                    preco: 48,
                    recuperacao: { fome: 55, energia: 18, felicidade: 15 }
                }
            ]
        },
        "ipanema-brasileira": {
            id: "ipanema-brasileira",
            nome: "🇧🇷 Brasil à Mesa",
            endereco: "Rua Aníbal de Mendonça, 80 - Ipanema",
            horario: "12h às 00h",
            telefone: "(21) 3666-4455",
            descricao: "Comida brasileira autêntica com ingredientes frescos do mercado. Destaque para pratos como bobó de camarão e feijoada aos sábados.",
            tipo: ["brasileira", "regional", "familia", "premium"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 2100,
            cardapio: [
                {
                    id: "bobo-camarao",
                    nome: "🍤 Bobó de Camarão",
                    descricao: "Cremoso bobó de camarão com azeite de dendê e leite de coco.",
                    preco: 68,
                    recuperacao: { fome: 70, felicidade: 22, energia: 15 }
                },
                {
                    id: "moqueca-ipanema",
                    nome: "🍲 Moqueca Baiana",
                    descricao: "Moqueca de peixe e camarão com pimentões e coentro.",
                    preco: 85,
                    recuperacao: { fome: 80, felicidade: 25, energia: 12 }
                },
                {
                    id: "feijoada-sabado",
                    nome: "🍖 Feijoada Completa",
                    descricao: "Feijoada tradicional servida aos sábados com acompanhamentos.",
                    preco: 78,
                    recuperacao: { fome: 90, felicidade: 28, energia: 10 }
                }
            ]
        },
        "ipanema-mexicana": {
            id: "ipanema-mexicana",
            nome: "🌮 Tacos & Tequila",
            endereco: "Rua Farme de Amoedo, 55 - Ipanema",
            horario: "18h às 02h",
            telefone: "(21) 3999-1122",
            descricao: "Autêntica comida mexicana com drinks especiais e ambiente descontraído. Burritos, tacos e nachos.",
            tipo: ["mexicana", "happy-hour", "bebidas", "casual"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 1650,
            cardapio: [
                {
                    id: "tacos-triple",
                    nome: "🌮 Tacos Trio",
                    descricao: "Três tacos com carne, frango e vegetais.",
                    preco: 42,
                    recuperacao: { fome: 55, felicidade: 18, energia: 8 }
                },
                {
                    id: "burrito-picanha",
                    nome: "🌯 Burrito de Picanha",
                    descricao: "Burrito gigante com picanha, feijão, arroz e guacamole.",
                    preco: 48,
                    recuperacao: { fome: 70, felicidade: 20, energia: 10 }
                },
                {
                    id: "margarita",
                    nome: "🍸 Margarita Classic",
                    descricao: "Coquetel clássico de tequila com limão e sal.",
                    preco: 28,
                    recuperacao: { sede: 15, felicidade: 20, energia: -8 }
                }
            ]
        },

        // ========== LAPA ==========
        "lapa-boteco": {
            id: "lapa-boteco",
            nome: "🍺 Boteco da Lapa",
            endereco: "Rua do Lavradio, 120 - Lapa",
            horario: "17h às 04h",
            telefone: "(21) 2555-6677",
            descricao: "Boteco tradicional carioca com samba ao vivo, cerveja gelada e petiscos clássicos.",
            tipo: ["boteco", "happy-hour", "musica-ao-vivo", "tradicional"],
            preco_medio: 40,
            estrelas: 4.7,
            avaliacoes: 8900,
            cardapio: [
                {
                    id: "feijao-amigo",
                    nome: "🍲 Feijão Amigo",
                    descricao: "Caldo de feijão servido quente com bacon.",
                    preco: 18,
                    recuperacao: { fome: 25, energia: 10, felicidade: 8 }
                },
                {
                    id: "bolinho-bacalhau",
                    nome: "🥟 Bolinho de Bacalhau",
                    descricao: "Porção com 8 bolinhos tradicionais.",
                    preco: 28,
                    recuperacao: { fome: 30, felicidade: 15 }
                },
                {
                    id: "cerveja-gelada",
                    nome: "🍺 Cerveja Gelada",
                    descricao: "Long neck extremamente gelada.",
                    preco: 12,
                    recuperacao: { sede: 20, felicidade: 10, energia: -5 }
                },
                {
                    id: "picanha-fatiada",
                    nome: "🥩 Picanha Fatiada",
                    descricao: "Picanha acebolada com farofa.",
                    preco: 55,
                    recuperacao: { fome: 60, energia: 22, felicidade: 18 }
                }
            ]
        },
        "lapa-baiana": {
            id: "lapa-baiana",
            nome: "🌴 Acarajé da Lapa",
            endereco: "Arcos da Lapa - Praça Cardeal Câmara",
            horario: "18h às 04h",
            telefone: "(21) 97777-3344",
            descricao: "Tradicional barraca de acarajé com tempero baiano autêntico. Frequentado por artistas e boêmios.",
            tipo: ["baiana", "comida-de-rua", "vegano", "rápido"],
            preco_medio: 25,
            estrelas: 4.8,
            avaliacoes: 3300,
            cardapio: [
                {
                    id: "acaraje",
                    nome: "🫓 Acarajé Tradicional",
                    descricao: "Bolinho de feijão frito no dendê recheado com vatapá, camarão e caruru.",
                    preco: 22,
                    recuperacao: { fome: 40, felicidade: 25, energia: 10 }
                },
                {
                    id: "abara",
                    nome: "🍲 Abará",
                    descricao: "Versão cozida do acarajé, mais leve e saborosa.",
                    preco: 18,
                    recuperacao: { fome: 35, felicidade: 18, energia: 8 }
                },
                {
                    id: "vatapa",
                    nome: "🥣 Vatapá",
                    descricao: "Creme de pão, camarão, leite de coco e amendoim.",
                    preco: 28,
                    recuperacao: { fome: 45, felicidade: 20, energia: 12 }
                }
            ]
        },
        "lapa-portuguesa": {
            id: "lapa-portuguesa",
            nome: "🇵🇹 Adega do Bacalhau",
            endereco: "Rua do Rezende, 70 - Lapa",
            horario: "12h às 01h",
            telefone: "(21) 2444-8899",
            descricao: "Culinária portuguesa autêntica com destaque para o bacalhau e os vinhos do Porto.",
            tipo: ["portuguesa", "massas", "vinhos", "romântico"],
            preco_medio: 90,
            estrelas: 4.6,
            avaliacoes: 1400,
            cardapio: [
                {
                    id: "bacalhau-bras",
                    nome: "🐟 Bacalhau à Brás",
                    descricao: "Bacalhau desfiado com batata palha, ovos e cebola.",
                    preco: 78,
                    recuperacao: { fome: 70, felicidade: 22, energia: 15 }
                },
                {
                    id: "pasteis-nata",
                    nome: "🥧 Pastéis de Nata",
                    descricao: "Pasteis de Belém artesanais.",
                    preco: 12,
                    recuperacao: { fome: 15, felicidade: 18, energia: 5 }
                },
                {
                    id: "vinho-porto",
                    nome: "🍷 Vinho do Porto",
                    descricao: "Taça de vinho do Porto 10 anos.",
                    preco: 35,
                    recuperacao: { felicidade: 20, sede: 8, energia: -4 }
                }
            ]
        },

        // ========== BARRA DA TIJUCA ==========
        "barra-burger": {
            id: "barra-burger",
            nome: "🍔 Barra Burger House",
            endereco: "Av. das Américas, 5000 - Barra da Tijuca",
            horario: "18h às 02h",
            telefone: "(21) 3777-8899",
            descricao: "Hamburgueria artesanal moderna com milkshakes gigantes e ambiente jovem.",
            tipo: ["hamburguer", "americana", "happy-hour", "artesanal"],
            preco_medio: 55,
            estrelas: 4.6,
            avaliacoes: 4210,
            cardapio: [
                {
                    id: "smash-burger",
                    nome: "🍔 Smash Burger",
                    descricao: "Hambúrguer duplo smash com cheddar e bacon.",
                    preco: 42,
                    recuperacao: { fome: 55, energia: 18, felicidade: 18 }
                },
                {
                    id: "onion-rings",
                    nome: "🧅 Onion Rings",
                    descricao: "Anéis de cebola crocantes.",
                    preco: 22,
                    recuperacao: { fome: 20, felicidade: 8 }
                },
                {
                    id: "milkshake-barra",
                    nome: "🥤 Milkshake Gigante",
                    descricao: "Milkshake de chocolate belga.",
                    preco: 28,
                    recuperacao: { sede: 20, felicidade: 22 }
                }
            ]
        },
        "barra-seafood": {
            id: "barra-seafood",
            nome: "🦞 Barra Seafood",
            endereco: "Av. Lúcio Costa, 3300 - Barra da Tijuca",
            horario: "12h às 00h",
            telefone: "(21) 3666-1122",
            descricao: "Restaurante sofisticado especializado em frutos do mar frescos.",
            tipo: ["frutos-do-mar", "premium", "praia", "romântico"],
            preco_medio: 140,
            estrelas: 4.8,
            avaliacoes: 2150,
            cardapio: [
                {
                    id: "lagosta-grelhada",
                    nome: "🦞 Lagosta Grelhada",
                    descricao: "Lagosta na manteiga com arroz cremoso.",
                    preco: 145,
                    recuperacao: { fome: 85, energia: 30, felicidade: 35 }
                },
                {
                    id: "risoto-camarao",
                    nome: "🍤 Risoto de Camarão",
                    descricao: "Risoto cremoso com camarões grandes.",
                    preco: 88,
                    recuperacao: { fome: 65, energia: 22, felicidade: 20 }
                }
            ]
        },
        "barra-arabe": {
            id: "barra-arabe",
            nome: "🧆 Beirute Barra",
            endereco: "Av. das Américas, 12500 - Barra da Tijuca",
            horario: "12h às 23h",
            telefone: "(21) 3888-7766",
            descricao: "Culinária árabe autêntica com esfihas, quibes, charme de ambientes e dança do ventre aos sábados.",
            tipo: ["arabe", "massas", "familiar", "vegetariano"],
            preco_medio: 60,
            estrelas: 4.7,
            avaliacoes: 1850,
            cardapio: [
                {
                    id: "esfiha-aberta",
                    nome: "🥙 Esfiha Aberta de Carne",
                    descricao: "Esfiha grande com carne temperada, limão e hortelã.",
                    preco: 18,
                    recuperacao: { fome: 28, felicidade: 10, energia: 5 }
                },
                {
                    id: "quibe-cru",
                    nome: "🍖 Quibe Cru",
                    descricao: "Quibe de carne crua com trigo e hortelã.",
                    preco: 24,
                    recuperacao: { fome: 32, felicidade: 12, energia: 6 }
                },
                {
                    id: "hommus",
                    nome: "🫔 Hommus com Pão Sírio",
                    descricao: "Pasta de grão-de-bico com azeite e limão.",
                    preco: 22,
                    recuperacao: { fome: 25, felicidade: 14, energia: 6 }
                },
                {
                    id: "babaganoush",
                    nome: "🍆 Babaganoush",
                    descricao: "Pasta de berinjela defumada com tahine.",
                    preco: 20,
                    recuperacao: { fome: 22, felicidade: 12, energia: 5 }
                }
            ]
        },
        "barra-coreana": {
            id: "barra-coreana",
            nome: "🔥 Korean BBQ Barra",
            endereco: "Av. das Américas, 8700 - Barra da Tijuca",
            horario: "18h às 00h",
            telefone: "(21) 3777-4455",
            descricao: "Churrasco coreano autêntico com grelha na mesa. Carne de qualidade e kimchi fresco.",
            tipo: ["coreana", "churrasco", "asiatica", "premium"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 950,
            cardapio: [
                {
                    id: "bulgogi",
                    nome: "🥩 Bulgogi",
                    descricao: "Carne bovina marinada no molho de soja, gengibre e alho.",
                    preco: 68,
                    recuperacao: { fome: 75, felicidade: 25, energia: 18 }
                },
                {
                    id: "kimchi",
                    nome: "🥬 Kimchi",
                    descricao: "Acelga fermentada picante tradicional coreana.",
                    preco: 15,
                    recuperacao: { fome: 12, felicidade: 10, energia: 2 }
                },
                {
                    id: "bibimbap",
                    nome: "🍚 Bibimbap",
                    descricao: "Tigela de arroz com legumes, carne e ovo.",
                    preco: 52,
                    recuperacao: { fome: 65, felicidade: 18, energia: 12 }
                }
            ]
        },
        "barra-pizzaria": {
            id: "barra-pizzaria",
            nome: "🍕 Pizza Experience Barra",
            endereco: "Avenida Érico Veríssimo, 550 - Barra da Tijuca",
            horario: "18h às 01h",
            telefone: "(21) 3999-1234",
            descricao: "Pizzaria napolitana com forno a lenha e ingredientes importados.",
            tipo: ["pizzaria", "italiana", "premium", "romântico"],
            preco_medio: 80,
            estrelas: 4.9,
            avaliacoes: 2100,
            cardapio: [
                {
                    id: "margherita-verace",
                    nome: "🍕 Pizza Margherita Verace",
                    descricao: "Molho de tomate, mussarela de búfala, manjericão.",
                    preco: 58,
                    recuperacao: { fome: 65, felicidade: 22, energia: 12 }
                },
                {
                    id: "diavola",
                    nome: "🍕 Pizza Diavola",
                    descricao: "Salame picante, molho de tomate, mussarela e pimenta.",
                    preco: 62,
                    recuperacao: { fome: 70, felicidade: 20, energia: 10 }
                },
                {
                    id: "burrata-pizza",
                    nome: "🧀 Pizza com Burrata",
                    descricao: "Pizza com tomates confitados e burrata fresca.",
                    preco: 75,
                    recuperacao: { fome: 72, felicidade: 28, energia: 12 }
                }
            ]
        },

        // ========== CENTRO ==========
        "mercadao-rio": {
            id: "mercadao-rio",
            nome: "🏛️ Mercado Carioca",
            endereco: "Praça XV, 100 - Centro",
            horario: "07h às 19h",
            telefone: "(21) 3111-2233",
            descricao: "Mercado tradicional com lanches rápidos e pratos típicos cariocas.",
            tipo: ["tradicional", "mercado", "lanches", "turístico"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 3500,
            cardapio: [
                {
                    id: "empada-camarao",
                    nome: "🥧 Empada de Camarão",
                    descricao: "Empada cremosa recheada com camarão.",
                    preco: 12,
                    recuperacao: { fome: 18, felicidade: 8 }
                },
                {
                    id: "mate-gelado",
                    nome: "🥤 Mate Gelado",
                    descricao: "Mate carioca com limão.",
                    preco: 8,
                    recuperacao: { sede: 22, energia: 6 }
                },
                {
                    id: "coxinha",
                    nome: "🍗 Coxinha",
                    descricao: "Coxinha de frango tradicional.",
                    preco: 10,
                    recuperacao: { fome: 18, felicidade: 8 }
                }
            ]
        },
        "centro-japones": {
            id: "centro-japones",
            nome: "🍣 Restaurante Kaisen",
            endereco: "Rua da Carioca, 45 - Centro",
            horario: "11h às 22h",
            telefone: "(21) 3222-4455",
            descricao: "Tradicional restaurante japonês próximo à Praça Tiradentes. Sushi fresco e ambiente familiar.",
            tipo: ["japonesa", "sushi", "premium", "trabalho"],
            preco_medio: 70,
            estrelas: 4.5,
            avaliacoes: 800,
            cardapio: [
                {
                    id: "almoço-executivo",
                    nome: "🍱 Almoço Executivo",
                    descricao: "Salmão grelhado, arroz, missoshiru, salada e gyoza.",
                    preco: 48,
                    recuperacao: { fome: 65, energia: 20, felicidade: 12 }
                },
                {
                    id: "sashimi-barco",
                    nome: "🚢 Sashimi Barco",
                    descricao: "Barco de 50 peças de sashimi variados.",
                    preco: 120,
                    recuperacao: { fome: 90, energia: 28, felicidade: 32 }
                },
                {
                    id: "teppanyaki",
                    nome: "🍳 Teppanyaki Frango",
                    descricao: "Frango grelhado na chapa com legumes.",
                    preco: 52,
                    recuperacao: { fome: 60, felicidade: 18, energia: 14 }
                }
            ]
        },
        "centro-vegetariano": {
            id: "centro-vegetariano",
            nome: "🌱 Verde & Vida",
            endereco: "Rua do Ouvidor, 22 - Centro",
            horario: "11h às 20h",
            telefone: "(21) 3777-8899",
            descricao: "Restaurante vegetariano e vegano com buffet por quilo e opções integrais.",
            tipo: ["vegetariano", "vegano", "saudavel", "buffet"],
            preco_medio: 40,
            estrelas: 4.6,
            avaliacoes: 1100,
            cardapio: [
                {
                    id: "buffet-kilo",
                    nome: "🥗 Buffet por Quilo",
                    descricao: "Diversas opções vegetarianas e veganas, saladas e quentes.",
                    preco: 45,
                    recuperacao: { fome: 70, energia: 25, felicidade: 18 }
                },
                {
                    id: "suco-detox",
                    nome: "🥤 Suco Detox",
                    descricao: "Couve, limão, gengibre, hortelã e maçã.",
                    preco: 12,
                    recuperacao: { sede: 20, energia: 15, felicidade: 8 }
                }
            ]
        },

        // ========== LEBLON ==========
        "leblon-bistro": {
            id: "leblon-bistro",
            nome: "🍷 Bistrô Leblon",
            endereco: "Rua Dias Ferreira, 88 - Leblon",
            horario: "18h às 01h",
            telefone: "(21) 3999-8877",
            descricao: "Bistrô refinado com culinária francesa contemporânea e carta de vinhos.",
            tipo: ["francesa", "premium", "romântico", "vinhos"],
            preco_medio: 160,
            estrelas: 4.9,
            avaliacoes: 1800,
            cardapio: [
                {
                    id: "file-molho",
                    nome: "🥩 Filé ao Molho de Vinho",
                    descricao: "Filé mignon ao molho de vinho tinto.",
                    preco: 120,
                    recuperacao: { fome: 70, energia: 25, felicidade: 30 }
                },
                {
                    id: "creme-brulee",
                    nome: "🍮 Crème Brûlée",
                    descricao: "Sobremesa francesa clássica.",
                    preco: 28,
                    recuperacao: { felicidade: 20, fome: 10 }
                },
                {
                    id: "vinho-frances",
                    nome: "🍷 Vinho Francês",
                    descricao: "Taça de vinho importado.",
                    preco: 42,
                    recuperacao: { felicidade: 18, sede: 10, energia: -5 }
                }
            ]
        },
        "leblon-grega": {
            id: "leblon-grega",
            nome: "🇬🇷 Elia Grego",
            endereco: "Rua General Venâncio Flores, 300 - Leblon",
            horario: "12h às 00h",
            telefone: "(21) 3888-4455",
            descricao: "Autêntica cozinha grega com ingredientes importados. Destaque para o gyros e moussaka.",
            tipo: ["grega", "premium", "romântico", "familia"],
            preco_medio: 95,
            estrelas: 4.7,
            avaliacoes: 1350,
            cardapio: [
                {
                    id: "moussaka",
                    nome: "🍆 Moussaka Grega",
                    descricao: "Camadas de berinjela, carne moída e molho bechamel.",
                    preco: 68,
                    recuperacao: { fome: 75, felicidade: 22, energia: 14 }
                },
                {
                    id: "gyros-pita",
                    nome: "🥙 Gyros no Pão Sírio",
                    descricao: "Carne grelhada, tomate, cebola, tzatziki.",
                    preco: 45,
                    recuperacao: { fome: 60, felicidade: 18, energia: 10 }
                },
                {
                    id: "baklava",
                    nome: "🍯 Baklava",
                    descricao: "Massa folhada com nozes e mel.",
                    preco: 22,
                    recuperacao: { fome: 15, felicidade: 20, energia: 6 }
                }
            ]
        },

        // ========== MARACANÃ ==========
        "maracana-lanches": {
            id: "maracana-lanches",
            nome: "⚽ Lanches do Maraca",
            endereco: "Av. Maracanã, 900 - Maracanã",
            horario: "10h às 02h",
            telefone: "(21) 2888-7766",
            descricao: "Point dos torcedores antes e depois dos jogos. Lanches rápidos e cerveja gelada.",
            tipo: ["lanches", "fast-food", "futebol", "happy-hour"],
            preco_medio: 28,
            estrelas: 4.2,
            avaliacoes: 4900,
            cardapio: [
                {
                    id: "dogao",
                    nome: "🌭 Dogão Carioca",
                    descricao: "Cachorro-quente completo com batata palha.",
                    preco: 18,
                    recuperacao: { fome: 28, felicidade: 10 }
                },
                {
                    id: "hamburguer-maraca",
                    nome: "🍔 Hambúrguer do Torcedor",
                    descricao: "Hambúrguer artesanal simples e saboroso.",
                    preco: 24,
                    recuperacao: { fome: 35, energia: 10 }
                },
                {
                    id: "refri-litro",
                    nome: "🥤 Refrigerante 1L",
                    descricao: "Refrigerante gelado.",
                    preco: 12,
                    recuperacao: { sede: 25, felicidade: 6 }
                }
            ]
        },
        "maracana-pastel": {
            id: "maracana-pastel",
            nome: "🥟 Pastelaria Maracanã",
            endereco: "Rua São Francisco Xavier, 500 - Maracanã",
            horario: "14h às 00h",
            telefone: "(21) 2555-9988",
            descricao: "Pastelaria tradicional com mais de 30 sabores de pastéis, caldos e sucos naturais.",
            tipo: ["lanches", "tradicional", "rápido", "familiar"],
            preco_medio: 22,
            estrelas: 4.4,
            avaliacoes: 3100,
            cardapio: [
                {
                    id: "pastel-carne",
                    nome: "🥟 Pastel de Carne",
                    descricao: "Pastel crocante com carne moída temperada.",
                    preco: 12,
                    recuperacao: { fome: 25, felicidade: 8 }
                },
                {
                    id: "pastel-queijo",
                    nome: "🥟 Pastel de Queijo",
                    descricao: "Pastel de mussarela e catupiry.",
                    preco: 14,
                    recuperacao: { fome: 26, felicidade: 9 }
                },
                {
                    id: "caldo-cana",
                    nome: "🥤 Caldo de Cana",
                    descricao: "Cana de açúcar natural com limão.",
                    preco: 8,
                    recuperacao: { sede: 22, energia: 10 }
                }
            ]
        },

        // ========== SANTA TERESA ==========
        "santa-teresa-brasileira": {
            id: "santa-teresa-brasileira",
            nome: "🏰 Aprazível",
            endereco: "Rua Aprazível, 62 - Santa Teresa",
            horario: "12h às 23h",
            telefone: "(21) 2508-9174",
            descricao: "Restaurante com vista deslumbrante para o Rio e culinária brasileira contemporânea premiada.",
            tipo: ["brasileira", "premium", "romântico", "vista"],
            preco_medio: 150,
            estrelas: 4.9,
            avaliacoes: 2450,
            cardapio: [
                {
                    id: "moqueca-aprazivel",
                    nome: "🍲 Moqueca Capixaba",
                    descricao: "Peixe, camarão e banana da terra em molho de urucum.",
                    preco: 98,
                    recuperacao: { fome: 85, felicidade: 32, energia: 18 }
                },
                {
                    id: "patinho-no-tucupi",
                    nome: "🦆 Pato no Tucupi",
                    descricao: "Pato confitado com molho de tucupi e jambu.",
                    preco: 125,
                    recuperacao: { fome: 90, felicidade: 35, energia: 22 }
                }
            ]
        },
        "santa-teresa-espanhola": {
            id: "santa-teresa-espanhola",
            nome: "🇪🇸 Adega Espanhola",
            endereco: "Largo dos Guimarães, 45 - Santa Teresa",
            horario: "18h às 01h",
            telefone: "(21) 3222-5566",
            descricao: "Autêntica culinária espanhola com tapas, paellas e vinhos ibéricos.",
            tipo: ["espanhola", "tapas", "premium", "romântico"],
            preco_medio: 100,
            estrelas: 4.7,
            avaliacoes: 980,
            cardapio: [
                {
                    id: "paella-valenciana",
                    nome: "🥘 Paella Valenciana",
                    descricao: "Arroz com frango, coelho, frutos do mar e açafrão.",
                    preco: 88,
                    recuperacao: { fome: 80, felicidade: 26, energia: 16 }
                },
                {
                    id: "tapas-ibéricas",
                    nome: "🍢 Seleção de Tapas",
                    descricao: "Presunto ibérico, queijo manchego, azeitonas e pão.",
                    preco: 52,
                    recuperacao: { fome: 40, felicidade: 20, energia: 10 }
                }
            ]
        },

        // ========== URCA ==========
        "urca-praia": {
            id: "urca-praia",
            nome: "🏖️ Urca Grill",
            endereco: "Praia da Urca, 20 - Urca",
            horario: "08h às 22h",
            telefone: "(21) 2555-4455",
            descricao: "Quiosque charmoso na Praia da Urca com frutos do mar e vista para o Pão de Açúcar.",
            tipo: ["praia", "frutos-do-mar", "turístico", "petiscos"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 1750,
            cardapio: [
                {
                    id: "camarao-alho",
                    nome: "🍤 Camarão ao Alho",
                    descricao: "Camarões salteados no alho e azeite.",
                    preco: 48,
                    recuperacao: { fome: 50, felicidade: 18, energia: 10 }
                },
                {
                    id: "ostras-vivas",
                    nome: "🦪 Ostras Vivas",
                    descricao: "Seis ostras frescas com limão.",
                    preco: 35,
                    recuperacao: { fome: 20, felicidade: 22, energia: 6 }
                }
            ]
        },

        // ========== BOTAFOGO ==========
        "botafogo-peruana": {
            id: "botafogo-peruana",
            nome: "🇵🇪 Peruano Miraflores",
            endereco: "Rua Nelson Mandela, 100 - Botafogo",
            horario: "12h às 23h",
            telefone: "(21) 3555-7788",
            descricao: "Culinária peruana autêntica com ceviches frescos e pratos andinos.",
            tipo: ["peruana", "ceviche", "premium", "frutos-do-mar"],
            preco_medio: 85,
            estrelas: 4.8,
            avaliacoes: 1430,
            cardapio: [
                {
                    id: "ceviche-misto",
                    nome: "🐟 Ceviche Misto",
                    descricao: "Peixe, camarão, polvo, leite de tigre e milho.",
                    preco: 62,
                    recuperacao: { fome: 55, felicidade: 25, energia: 12 }
                },
                {
                    id: "lomo-saltado",
                    nome: "🥩 Lomo Saltado",
                    descricao: "Carne salteada com cebola, tomate e batatas.",
                    preco: 58,
                    recuperacao: { fome: 70, felicidade: 22, energia: 16 }
                }
            ]
        },
        "botafogo-tailandesa": {
            id: "botafogo-tailandesa",
            nome: "🌶️ Thai Botafogo",
            endereco: "Rua Mena Barreto, 32 - Botafogo",
            horario: "19h às 00h",
            telefone: "(21) 3999-6655",
            descricao: "Culinária tailandesa aromática com curry, pad thai e sabores exóticos.",
            tipo: ["tailandesa", "asiatica", "premium", "aromatico"],
            preco_medio: 80,
            estrelas: 4.7,
            avaliacoes: 720,
            cardapio: [
                {
                    id: "pad-thai",
                    nome: "🍜 Pad Thai",
                    descricao: "Macarrão de arroz com camarão, amendoim, ovo e broto de feijão.",
                    preco: 55,
                    recuperacao: { fome: 65, felicidade: 20, energia: 12 }
                },
                {
                    id: "curry-verde",
                    nome: "🥘 Curry Verde",
                    descricao: "Curry de leite de coco com frango e manjericão tailandês.",
                    preco: 60,
                    recuperacao: { fome: 70, felicidade: 22, energia: 14 }
                }
            ]
        },
        "botafogo-sudanesa": {
            id: "botafogo-sudanesa",
            nome: "🌍 Culinária Sudanese",
            endereco: "Rua Farani, 80 - Botafogo",
            horario: "12h às 21h",
            telefone: "(21) 3777-1122",
            descricao: "Restaurante étnico com pratos típicos do Sudão e África Oriental.",
            tipo: ["africana", "etnica", "vegetariano", "familia"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 310,
            cardapio: [
                {
                    id: "ful-medames",
                    nome: "🍲 Ful Medames",
                    descricao: "Feijão fava cozido com cominho, azeite e ovos.",
                    preco: 28,
                    recuperacao: { fome: 45, felicidade: 14, energia: 10 }
                },
                {
                    id: "kisra",
                    nome: "🥞 Kisra",
                    descricao: "Pão fino típico sudanês servido com caril de legumes.",
                    preco: 32,
                    recuperacao: { fome: 40, felicidade: 15, energia: 8 }
                }
            ]
        },

        // ========== TIJUCA ==========
        "tijuca-mineira": {
            id: "tijuca-mineira",
            nome: "🧀 Xapuri",
            endereco: "Rua Barão de Mesquita, 500 - Tijuca",
            horario: "11h às 23h",
            telefone: "(21) 2568-8111",
            descricao: "Tradicional cozinha mineira com frango com quiabo, tutu e queijo canastra.",
            tipo: ["mineira", "tradicional", "familiar", "regional"],
            preco_medio: 60,
            estrelas: 4.7,
            avaliacoes: 3200,
            cardapio: [
                {
                    id: "frango-quiabo",
                    nome: "🍗 Frango com Quiabo",
                    descricao: "Frango caipira com quiabo e angu.",
                    preco: 48,
                    recuperacao: { fome: 70, felicidade: 18, energia: 12 }
                },
                {
                    id: "tutu-mineiro",
                    nome: "🫘 Tutu à Mineira",
                    descricao: "Feijão com farinha de mandioca, couve, costelinha e ovo.",
                    preco: 52,
                    recuperacao: { fome: 75, felicidade: 20, energia: 14 }
                }
            ]
        },
        "tijuca-portuguesa": {
            id: "tijuca-portuguesa",
            nome: "🇵🇹 Taberna Portuguesa",
            endereco: "Rua Conde de Bonfim, 200 - Tijuca",
            horario: "12h às 00h",
            telefone: "(21) 2555-3322",
            descricao: "Taberna familiar com pratos de bacalhau, cozido português e vinhos do Porto.",
            tipo: ["portuguesa", "tradicional", "família", "vinhos"],
            preco_medio: 65,
            estrelas: 4.6,
            avaliacoes: 1840,
            cardapio: [
                {
                    id: "bacalhau-natal",
                    nome: "🐟 Bacalhau à Gomes de Sá",
                    descricao: "Bacalhau desfiado com batatas, ovos e cebola.",
                    preco: 68,
                    recuperacao: { fome: 75, felicidade: 20, energia: 14 }
                },
                {
                    id: "cozido-portugues",
                    nome: "🍲 Cozido à Portuguesa",
                    descricao: "Carnes variadas, chouriço, batatas, cenoura e repolho.",
                    preco: 72,
                    recuperacao: { fome: 85, felicidade: 22, energia: 16 }
                }
            ]
        }
    },

    // ==================== NITERÓI ====================
    "Niterói": {
        "niteroi-mar": {
            id: "niteroi-mar",
            nome: "🐟 Sabores do Mar",
            endereco: "Praia de Icaraí, 500 - Niterói",
            horario: "11h às 23h",
            telefone: "(21) 4002-1111",
            descricao: "Restaurante sofisticado especializado em peixes e frutos do mar.",
            tipo: ["frutos-do-mar", "praia", "premium", "familiar"],
            preco_medio: 85,
            estrelas: 4.7,
            avaliacoes: 2200,
            cardapio: [
                {
                    id: "peixe-grelhado",
                    nome: "🐟 Peixe Grelhado",
                    descricao: "Filé de peixe fresco com legumes.",
                    preco: 68,
                    recuperacao: { fome: 60, energia: 20, felicidade: 18 }
                },
                {
                    id: "moqueca-niteroi",
                    nome: "🍲 Moqueca Especial",
                    descricao: "Moqueca de peixe e camarão.",
                    preco: 82,
                    recuperacao: { fome: 75, energia: 25, felicidade: 22 }
                }
            ]
        },
        "niteroi-italiana": {
            id: "niteroi-italiana",
            nome: "🍝 Cantina di Niterói",
            endereco: "Av. do Contorno, 400 - São Francisco",
            horario: "12h às 23h",
            telefone: "(21) 3777-8899",
            descricao: "Cantina italiana típica com massas frescas e molhos caseiros.",
            tipo: ["italiana", "massas", "familiar", "premium"],
            preco_medio: 75,
            estrelas: 4.6,
            avaliacoes: 1450,
            cardapio: [
                {
                    id: "parmegiana-niteroi",
                    nome: "🍽️ Filé à Parmegiana",
                    descricao: "Filé empanado com queijo e molho de tomate.",
                    preco: 62,
                    recuperacao: { fome: 70, felicidade: 20, energia: 14 }
                },
                {
                    id: "ravioli-niteroi",
                    nome: "🥟 Ravioli de Ricota",
                    descricao: "Ravioli de ricota com molho de tomate e manjericão.",
                    preco: 48,
                    recuperacao: { fome: 55, felicidade: 18, energia: 12 }
                }
            ]
        },
        "niteroi-japonesa": {
            id: "niteroi-japonesa",
            nome: "🍣 Sushi Niterói",
            endereco: "Rua Marquês do Paraná, 200 - Centro",
            horario: "18h às 00h",
            telefone: "(21) 3666-4455",
            descricao: "Japonesa moderna com vista para a Baía de Guanabara.",
            tipo: ["japonesa", "sushi", "premium", "romântico"],
            preco_medio: 95,
            estrelas: 4.8,
            avaliacoes: 1100,
            cardapio: [
                {
                    id: "combo-niteroi",
                    nome: "🍣 Combo Niterói",
                    descricao: "20 peças variadas + 5 sashimis.",
                    preco: 88,
                    recuperacao: { fome: 80, felicidade: 28, energia: 18 }
                },
                {
                    id: "hot-rolls",
                    nome: "🌯 Hot Rolls",
                    descricao: "6 unidades de hot roll empanado.",
                    preco: 32,
                    recuperacao: { fome: 40, felicidade: 15, energia: 6 }
                }
            ]
        },
        "niteroi-brasileira": {
            id: "niteroi-brasileira",
            nome: "🇧🇷 Casa do Norte",
            endereco: "Rua Presidente Backer, 150 - Icaraí",
            horario: "11h às 22h",
            telefone: "(21) 3888-1122",
            descricao: "Comida nordestina e paraense autêntica, com ingredientes do Norte e Nordeste.",
            tipo: ["nordestina", "brasileira", "regional", "familiar"],
            preco_medio: 55,
            estrelas: 4.5,
            avaliacoes: 930,
            cardapio: [
                {
                    id: "pato-tucupi",
                    nome: "🦆 Pato no Tucupi",
                    descricao: "Pato cozido no tucupi com jambu e farinha d'água.",
                    preco: 68,
                    recuperacao: { fome: 80, felicidade: 25, energia: 15 }
                },
                {
                    id: "maniçoba",
                    nome: "🥬 Maniçoba",
                    descricao: "Manifestação paraense com folha de mandioca e carnes defumadas.",
                    preco: 52,
                    recuperacao: { fome: 75, felicidade: 20, energia: 12 }
                },
                {
                    id: "acai-norte",
                    nome: "🍧 Açaí do Norte",
                    descricao: "Açaí grosso com granola, banana e mel.",
                    preco: 18,
                    recuperacao: { fome: 18, felicidade: 15, energia: 12 }
                }
            ]
        },
        "niteroi-boteco": {
            id: "niteroi-boteco",
            nome: "🍺 Boteco Guanabara",
            endereco: "Rua da Conceição, 88 - Centro",
            horario: "11h às 01h",
            telefone: "(21) 4777-1122",
            descricao: "Boteco tradicional com samba e petiscos clássicos.",
            tipo: ["boteco", "happy-hour", "tradicional"],
            preco_medio: 38,
            estrelas: 4.4,
            avaliacoes: 3100,
            cardapio: [
                {
                    id: "torresmo",
                    nome: "🥓 Torresmo Crocante",
                    descricao: "Porção de torresmo pururuca.",
                    preco: 22,
                    recuperacao: { fome: 28, felicidade: 12 }
                },
                {
                    id: "calabresa",
                    nome: "🍢 Calabresa Acebolada",
                    descricao: "Linguiça acebolada na chapa.",
                    preco: 28,
                    recuperacao: { fome: 35, felicidade: 10 }
                }
            ]
        },
        "icarai-cafe": {
            id: "icarai-cafe",
            nome: "☕ Café Icaraí",
            endereco: "Rua Moreira César, 200 - Icaraí",
            horario: "07h às 21h",
            telefone: "(21) 4111-5566",
            descricao: "Cafeteria aconchegante com brunch e doces artesanais.",
            tipo: ["cafeteria", "doces", "brunch"],
            preco_medio: 30,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                {
                    id: "capuccino",
                    nome: "☕ Capuccino Cremoso",
                    descricao: "Capuccino com chantilly.",
                    preco: 14,
                    recuperacao: { energia: 15, felicidade: 10, sede: 8 }
                },
                {
                    id: "waffle",
                    nome: "🧇 Waffle com Nutella",
                    descricao: "Waffle artesanal com frutas.",
                    preco: 24,
                    recuperacao: { fome: 22, felicidade: 18 }
                }
            ]
        },
        "niteroi-espanhola": {
            id: "niteroi-espanhola",
            nome: "🇪🇸 Tapas & Cia",
            endereco: "Rua Dr. Celestino, 500 - Icaraí",
            horario: "18h às 01h",
            telefone: "(21) 3999-4455",
            descricao: "Autêntica culinária espanhola com tapas, paella e sangria.",
            tipo: ["espanhola", "tapas", "premium", "happy-hour"],
            preco_medio: 80,
            estrelas: 4.6,
            avaliacoes: 750,
            cardapio: [
                {
                    id: "paella-mariscos",
                    nome: "🥘 Paella de Frutos do Mar",
                    descricao: "Paella com camarão, lula, mexilhões e açafrão.",
                    preco: 85,
                    recuperacao: { fome: 85, felicidade: 28, energia: 15 }
                },
                {
                    id: "sangria",
                    nome: "🍷 Sangria Espanhola",
                    descricao: "Vinho tinto com frutas e especiarias.",
                    preco: 32,
                    recuperacao: { sede: 15, felicidade: 18, energia: -6 }
                }
            ]
        },
        "niteroi-acai": {
            id: "niteroi-acai",
            nome: "🟣 Açaí Concept",
            endereco: "Orla de Icaraí - Posto 3",
            horario: "09h às 23h",
            telefone: "(21) 4777-3344",
            descricao: "Especializada em açaí e bowl com frutas frescas e granola.",
            tipo: ["acai", "saudavel", "praia", "rapido"],
            preco_medio: 25,
            estrelas: 4.5,
            avaliacoes: 620,
            cardapio: [
                {
                    id: "acai-tradicional",
                    nome: "🍧 Açaí Puro",
                    descricao: "Açaí médio com granola e banana.",
                    preco: 22,
                    recuperacao: { fome: 28, felicidade: 16, energia: 12 }
                },
                {
                    id: "bowl-protein",
                    nome: "🥣 Bowl Proteico",
                    descricao: "Açaí com whey, pasta de amendoim e banana.",
                    preco: 30,
                    recuperacao: { fome: 35, felicidade: 18, energia: 15 }
                }
            ]
        }
    },

    // ==================== PETRÓPOLIS ====================
    "Petrópolis": {
        "petropolis-cervejaria": {
            id: "petropolis-cervejaria",
            nome: "🍺 Cervejaria Imperial",
            endereco: "Rua do Imperador, 100 - Centro",
            horario: "12h às 00h",
            telefone: "(24) 3333-8888",
            descricao: "Cervejaria tradicional de Petrópolis com culinária alemã.",
            tipo: ["alemã", "cervejaria", "tradicional", "turístico"],
            preco_medio: 70,
            estrelas: 4.7,
            avaliacoes: 2600,
            cardapio: [
                {
                    id: "joelho-porco",
                    nome: "🍖 Joelho de Porco",
                    descricao: "Joelho de porco assado com chucrute.",
                    preco: 78,
                    recuperacao: { fome: 80, energia: 30, felicidade: 20 }
                },
                {
                    id: "salsichao",
                    nome: "🌭 Salsichão Alemão",
                    descricao: "Salsichão artesanal com mostarda escura.",
                    preco: 32,
                    recuperacao: { fome: 35, felicidade: 12 }
                },
                {
                    id: "cerveja-artesanal",
                    nome: "🍺 Cerveja Artesanal",
                    descricao: "Chope artesanal da casa.",
                    preco: 18,
                    recuperacao: { sede: 18, felicidade: 12, energia: -5 }
                }
            ]
        },
        "petropolis-cafe-colonial": {
            id: "petropolis-cafe-colonial",
            nome: "☕ Café Colonial Imperial",
            endereco: "Rua Teresa, 450 - Petrópolis",
            horario: "08h às 20h",
            telefone: "(24) 3555-9999",
            descricao: "Cafeteria charmosa em estilo europeu.",
            tipo: ["cafeteria", "doces", "romântico"],
            preco_medio: 28,
            estrelas: 4.6,
            avaliacoes: 1200,
            cardapio: [
                {
                    id: "strudel",
                    nome: "🍰 Apfelstrudel",
                    descricao: "Torta alemã de maçã.",
                    preco: 20,
                    recuperacao: { fome: 18, felicidade: 18 }
                },
                {
                    id: "cafe-colonial",
                    nome: "☕ Café Colonial",
                    descricao: "Mesa completa de café colonial.",
                    preco: 42,
                    recuperacao: { fome: 55, energia: 18, felicidade: 20 }
                }
            ]
        },
        "petropolis-fondue": {
            id: "petropolis-fondue",
            nome: "🫕 Chalet Fondue",
            endereco: "Rua Almirante Barroso, 120 - Valparaíso",
            horario: "18h às 01h",
            telefone: "(24) 3666-1234",
            descricao: "Restaurante romântico especializado em fondue.",
            tipo: ["fondue", "romântico", "premium", "inverno"],
            preco_medio: 140,
            estrelas: 4.8,
            avaliacoes: 850,
            cardapio: [
                {
                    id: "fondue-queijo",
                    nome: "🫕 Fondue de Queijo",
                    descricao: "Fondue suíço tradicional.",
                    preco: 98,
                    recuperacao: { fome: 65, felicidade: 28 }
                },
                {
                    id: "fondue-chocolate",
                    nome: "🍫 Fondue de Chocolate",
                    descricao: "Chocolate com frutas variadas.",
                    preco: 65,
                    recuperacao: { felicidade: 30, fome: 20 }
                }
            ]
        },
        "petropolis-brasileira": {
            id: "petropolis-brasileira",
            nome: "🇧🇷 Saber Imperial",
            endereco: "Rua 16 de Março, 300 - Centro",
            horario: "11h às 23h",
            telefone: "(24) 3888-4455",
            descricao: "Comida brasileira contemporânea com ingredientes locais da serra fluminense.",
            tipo: ["brasileira", "premium", "regional", "romântico"],
            preco_medio: 80,
            estrelas: 4.7,
            avaliacoes: 1050,
            cardapio: [
                {
                    id: "truta-serrana",
                    nome: "🐟 Truta da Serra",
                    descricao: "Truta fresca grelhada com manteiga e ervas finas.",
                    preco: 72,
                    recuperacao: { fome: 65, felicidade: 24, energia: 14 }
                },
                {
                    id: "risoto-fungos",
                    nome: "🍚 Risoto de Cogumelos Silvestres",
                    descricao: "Risoto cremoso com cogumelos frescos da região.",
                    preco: 58,
                    recuperacao: { fome: 60, felicidade: 20, energia: 12 }
                }
            ]
        },
        "petropolis-italiana": {
            id: "petropolis-italiana",
            nome: "🍝 Nonna Maria",
            endereco: "Rua do Imperador, 550 - Centro",
            horario: "11h30 às 22h",
            telefone: "(24) 3555-1122",
            descricao: "Cozinha italiana tradicional da Serra, com massas frescas e molhos caseiros.",
            tipo: ["italiana", "massas", "familiar", "tradicional"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 980,
            cardapio: [
                {
                    id: "polenta-fungos",
                    nome: "🍲 Polenta com Cogumelos",
                    descricao: "Polenta cremosa com mix de cogumelos e queijo parmesão.",
                    preco: 48,
                    recuperacao: { fome: 60, felicidade: 18, energia: 12 }
                },
                {
                    id: "gnocchi-pesto",
                    nome: "🥔 Gnocchi ao Pesto",
                    descricao: "Gnocchi de batata com pesto de manjericão.",
                    preco: 44,
                    recuperacao: { fome: 55, felicidade: 16, energia: 10 }
                }
            ]
        },
        "petropolis-cervejaria-artesanal": {
            id: "petropolis-cervejaria-artesanal",
            nome: "🍻 Bohemian Beer House",
            endereco: "Estrada da Saudade, 55 - Quitandinha",
            horario: "12h às 00h",
            telefone: "(24) 3999-8899",
            descricao: "Fábrica de cerveja artesanal com tour e degustação. Hamburgueria e gastronomia alemã.",
            tipo: ["cervejaria", "alemã", "artesanal", "turístico"],
            preco_medio: 75,
            estrelas: 4.8,
            avaliacoes: 1450,
            cardapio: [
                {
                    id: "chope-artesanal",
                    nome: "🍺 Chope Artesanal",
                    descricao: "Chope da casa - variedade Pilsen.",
                    preco: 16,
                    recuperacao: { sede: 18, felicidade: 14, energia: -4 }
                },
                {
                    id: "burger-caseiro",
                    nome: "🍔 Burger Artesanal",
                    descricao: "Hambúrguer de costela com queijo cheddar.",
                    preco: 42,
                    recuperacao: { fome: 65, felicidade: 20, energia: 12 }
                }
            ]
        },
        "petropolis-colonial": {
            id: "petropolis-colonial",
            nome: "🏰 Colônia Alemã",
            endereco: "Av. Koeller, 200 - Centro",
            horario: "12h às 22h",
            telefone: "(24) 3777-5566",
            descricao: "Restaurante típico alemão com decoração rústica e pratos tradicionais da imigração.",
            tipo: ["alemã", "tradicional", "familiar", "turístico"],
            preco_medio: 72,
            estrelas: 4.6,
            avaliacoes: 1120,
            cardapio: [
                {
                    id: "eintopf",
                    nome: "🍲 Eintopf",
                    descricao: "Ensopado alemão de legumes, carne e batatas.",
                    preco: 56,
                    recuperacao: { fome: 80, felicidade: 20, energia: 14 }
                },
                {
                    id: "kartoffelpuffer",
                    nome: "🥞 Kartoffelpuffer",
                    descricao: "Panquecas de batata com purê de maçã.",
                    preco: 32,
                    recuperacao: { fome: 40, felicidade: 16, energia: 8 }
                }
            ]
        }
    },

    // ==================== VOLTA REDONDA ====================
    "Volta Redonda": {
        "vr-churrasco": {
            id: "vr-churrasco",
            nome: "🥩 Churrasco do Vale",
            endereco: "Av. Amaral Peixoto, 1000 - Centro",
            horario: "11h às 23h",
            telefone: "(24) 4000-2233",
            descricao: "Churrascaria popular famosa pelos cortes generosos.",
            tipo: ["churrascaria", "brasileira", "familiar"],
            preco_medio: 65,
            estrelas: 4.5,
            avaliacoes: 1850,
            cardapio: [
                {
                    id: "contra-file",
                    nome: "🥩 Contra Filé",
                    descricao: "Contra filé na brasa com arroz e fritas.",
                    preco: 58,
                    recuperacao: { fome: 65, energia: 22, felicidade: 15 }
                },
                {
                    id: "costela-assada",
                    nome: "🍖 Costela Assada",
                    descricao: "Costela bovina assada lentamente.",
                    preco: 68,
                    recuperacao: { fome: 75, energia: 28, felicidade: 18 }
                }
            ]
        },
        "vr-pizzaria": {
            id: "vr-pizzaria",
            nome: "🍕 Pizzaria Redonda",
            endereco: "Rua 33, 200 - Vila Santa Cecília",
            horario: "18h às 01h",
            telefone: "(24) 4555-6677",
            descricao: "Pizzaria familiar com forno à lenha.",
            tipo: ["pizzaria", "italiana", "familiar"],
            preco_medio: 50,
            estrelas: 4.4,
            avaliacoes: 1400,
            cardapio: [
                {
                    id: "pizza-calabresa",
                    nome: "🍕 Pizza Calabresa",
                    descricao: "Pizza tradicional de calabresa.",
                    preco: 48,
                    recuperacao: { fome: 55, energia: 18 }
                },
                {
                    id: "pizza-frango",
                    nome: "🍕 Pizza Frango Catupiry",
                    descricao: "Pizza cremosa de frango.",
                    preco: 52,
                    recuperacao: { fome: 58, energia: 18, felicidade: 10 }
                }
            ]
        },
        "vr-lanchonete": {
            id: "vr-lanchonete",
            nome: "🌭 Lanchonete Aço Forte",
            endereco: "Av. dos Trabalhadores, 300 - Volta Redonda",
            horario: "09h às 00h",
            telefone: "(24) 4777-8899",
            descricao: "Lanchonete clássica frequentada por trabalhadores da região.",
            tipo: ["lanches", "fast-food", "tradicional"],
            preco_medio: 25,
            estrelas: 4.2,
            avaliacoes: 2200,
            cardapio: [
                {
                    id: "x-salada",
                    nome: "🍔 X-Salada",
                    descricao: "Hambúrguer com queijo, alface e tomate.",
                    preco: 20,
                    recuperacao: { fome: 35, energia: 10 }
                },
                {
                    id: "misto-quente",
                    nome: "🥪 Misto Quente",
                    descricao: "Sanduíche quente de queijo e presunto.",
                    preco: 12,
                    recuperacao: { fome: 18, felicidade: 6 }
                },
                {
                    id: "suco-laranja",
                    nome: "🥤 Suco Natural",
                    descricao: "Suco natural de laranja.",
                    preco: 10,
                    recuperacao: { sede: 22, energia: 8 }
                }
            ]
        },
        "vr-minas": {
            id: "vr-minas",
            nome: "🧀 Taste of Minas",
            endereco: "Rua 14, 150 - Aterrado",
            horario: "11h às 21h",
            telefone: "(24) 3888-4455",
            descricao: "Cozinha mineira autêntica com ingredientes da região e queijo canastra.",
            tipo: ["mineira", "tradicional", "familiar", "regional"],
            preco_medio: 45,
            estrelas: 4.5,
            avaliacoes: 940,
            cardapio: [
                {
                    id: "frango-palha",
                    nome: "🍗 Frango com Quiabo",
                    descricao: "Frango caipira com quiabo e angu.",
                    preco: 42,
                    recuperacao: { fome: 68, felicidade: 18, energia: 12 }
                },
                {
                    id: "feijao-tropeiro",
                    nome: "🫘 Feijão Tropeiro",
                    descricao: "Feijão com farinha, ovos, bacon e couve.",
                    preco: 38,
                    recuperacao: { fome: 60, felicidade: 16, energia: 10 }
                }
            ]
        },
        "vr-japonesa": {
            id: "vr-japonesa",
            nome: "🍣 Sushi Aço",
            endereco: "Av. Paulo de Frontin, 400 - Centro",
            horario: "18h às 23h",
            telefone: "(24) 3999-1122",
            descricao: "Restaurante japonês com rodízio de sushi e temakeria.",
            tipo: ["japonesa", "sushi", "premium", "rodizio"],
            preco_medio: 68,
            estrelas: 4.6,
            avaliacoes: 720,
            cardapio: [
                {
                    id: "rodizio-sushi",
                    nome: "🍣 Rodízio Sushi Aço",
                    descricao: "Rodízio completo com sushis, sashimis e temakis.",
                    preco: 68,
                    recuperacao: { fome: 85, felicidade: 28, energia: 15 }
                },
                {
                    id: "temaki-ace",
                    nome: "🍙 Temaki Ace",
                    descricao: "Temaki gigante de salmão grelhado.",
                    preco: 28,
                    recuperacao: { fome: 40, felicidade: 16, energia: 8 }
                }
            ]
        },
        "vr-arabe": {
            id: "vr-arabe",
            nome: "🧆 Sabor do Levante",
            endereco: "Rua 6, 80 - Vila Santa Cecília",
            horario: "11h às 22h",
            telefone: "(24) 4555-8899",
            descricao: "Culinária árabe autêntica com esfihas, quibes, hommus e ambiente aconchegante.",
            tipo: ["arabe", "familiar", "vegetariano", "rápido"],
            preco_medio: 38,
            estrelas: 4.4,
            avaliacoes: 610,
            cardapio: [
                {
                    id: "esfiha-carne",
                    nome: "🥙 Esfiha de Carne",
                    descricao: "Massa folheada com carne temperada, limão e hortelã.",
                    preco: 6,
                    recuperacao: { fome: 12, felicidade: 6 }
                },
                {
                    id: "kibe-assado",
                    nome: "🍖 Kibe Assado",
                    descricao: "Kibe recheado com carne e queijo.",
                    preco: 10,
                    recuperacao: { fome: 18, felicidade: 8, energia: 4 }
                },
                {
                    id: "combo-vegetariano",
                    nome: "🥑 Combo Vegetariano Árabe",
                    descricao: "Hommus, babaganoush, coalhada seca e pão sírio.",
                    preco: 28,
                    recuperacao: { fome: 45, felicidade: 18, energia: 10 }
                }
            ]
        },
        "vr-petiscos": {
            id: "vr-petiscos",
            nome: "🍻 Boteco do Sindicato",
            endereco: "Rua 24, 80 - Aterrado",
            horario: "16h às 02h",
            telefone: "(24) 3777-6677",
            descricao: "Boteco popular com petiscos clássicos, cerveja gelada e transmissão de jogos.",
            tipo: ["boteco", "happy-hour", "esportes", "tradicional"],
            preco_medio: 35,
            estrelas: 4.3,
            avaliacoes: 830,
            cardapio: [
                {
                    id: "isca-peixe",
                    nome: "🐟 Isca de Peixe",
                    descricao: "Tiras de peixe empanadas com molho tártaro.",
                    preco: 28,
                    recuperacao: { fome: 38, felicidade: 14, energia: 6 }
                },
                {
                    id: "batata-recheada",
                    nome: "🥔 Batata Recheada",
                    descricao: "Batata assada com cheddar, bacon e catupiry.",
                    preco: 22,
                    recuperacao: { fome: 40, felicidade: 12, energia: 6 }
                }
            ]
        }
    }
};

export default restaurantesRJ;