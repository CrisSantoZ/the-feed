/* ==========================================================================
   MAPAS SVG POR PAÍS - DADOS DE COORDENADAS
   ==========================================================================
   Cada país tem uma viewBox e a posição aproximada de cada região.
   O formato é viewBox="0 0 W H" com Paths simplificados.
   ========================================================================== */

// Coordenadas simplificadas das regiões de cada país
// Cada região: { id, nome, path: string SVG, cx, cy (centro aproximado pra label) }

const mapasPaises = {
  // ==================== EUROPA ====================

  franca: {
    viewBox: "0 0 200 200",
    regioes: [
      { id: "ile-de-france", nome: "Île-de-France", path: "M75,45 L125,45 L125,75 L75,75 Z", cx: 100, cy: 60 },
      { id: "provence", nome: "Provence-Alpes-Côte d'Azur", path: "M130,130 L190,130 L190,180 L130,180 Z", cx: 160, cy: 155 },
      { id: "auvergne-rhone", nome: "Auvergne-Rhône-Alpes", path: "M70,80 L130,80 L130,130 L70,130 Z", cx: 100, cy: 105 },
      { id: "occitanie", nome: "Occitanie", path: "M60,130 L130,130 L130,185 L60,185 Z", cx: 95, cy: 157 },
      { id: "nouvelle-aquitaine", nome: "Nouvelle-Aquitaine", path: "M10,80 L70,80 L70,140 L10,140 Z", cx: 40, cy: 110 },
      { id: "bretagne", nome: "Bretagne", path: "M10,45 L60,45 L60,80 L10,80 Z", cx: 35, cy: 62 },
      { id: "hauts-de-france", nome: "Hauts-de-France", path: "M75,10 L135,10 L135,45 L75,45 Z", cx: 105, cy: 27 },
      { id: "normandie", nome: "Normandie", path: "M10,45 L75,45 L75,80 L10,80 Z", cx: 42, cy: 62 },
      { id: "grand-est", nome: "Grand Est", path: "M135,10 L195,10 L195,75 L135,75 Z", cx: 165, cy: 42 },
      { id: "bourgogne", nome: "Bourgogne-Franche-Comté", path: "M130,75 L195,75 L195,90 L130,90 Z", cx: 162, cy: 82 },
      { id: "centre-val", nome: "Centre-Val de Loire", path: "M60,60 L130,60 L130,80 L60,80 Z", cx: 95, cy: 70 },
      { id: "pays-loire", nome: "Pays de la Loire", path: "M20,60 L60,60 L60,80 L20,80 Z", cx: 40, cy: 70 },
      { id: "corse", nome: "Corse", path: "M175,130 L195,130 L195,180 L175,180 Z", cx: 185, cy: 155 }
    ]
  },

  italia: {
    viewBox: "0 0 200 280",
    regioes: [
      { id: "lombardia", nome: "Lombardia", path: "M50,20 L120,20 L120,60 L50,60 Z", cx: 85, cy: 40 },
      { id: "lazio", nome: "Lácio", path: "M60,120 L120,120 L120,155 L60,155 Z", cx: 90, cy: 137 },
      { id: "veneto", nome: "Vêneto", path: "M120,20 L180,20 L180,60 L120,60 Z", cx: 150, cy: 40 },
      { id: "toscana", nome: "Toscana", path: "M40,60 L110,60 L110,100 L40,100 Z", cx: 75, cy: 80 },
      { id: "campania", nome: "Campânia", path: "M50,140 L120,140 L120,180 L50,180 Z", cx: 85, cy: 160 },
      { id: "sicilia", nome: "Sicília", path: "M30,200 L100,200 L100,240 L30,240 Z", cx: 65, cy: 220 },
      { id: "piemonte", nome: "Piemonte", path: "M10,20 L50,20 L50,70 L10,70 Z", cx: 30, cy: 45 },
      { id: "liguria", nome: "Ligúria", path: "M10,70 L50,70 L50,90 L10,90 Z", cx: 30, cy: 80 },
      { id: "marche", nome: "Marche", path: "M110,80 L150,80 L150,120 L110,120 Z", cx: 130, cy: 100 },
      { id: "puglia", nome: "Puglia", path: "M120,140 L170,140 L170,190 L120,190 Z", cx: 145, cy: 165 },
      { id: "calabria", nome: "Calábria", path: "M70,180 L130,180 L130,210 L70,210 Z", cx: 100, cy: 195 },
      { id: "sardegna", nome: "Sardenha", path: "M10,140 L40,140 L40,190 L10,190 Z", cx: 25, cy: 165 }
    ]
  },

  espanha: {
    viewBox: "0 0 220 180",
    regioes: [
      { id: "madrid", nome: "Madrid", path: "M90,60 L130,60 L130,90 L90,90 Z", cx: 110, cy: 75 },
      { id: "catalunha", nome: "Catalunha", path: "M170,30 L215,30 L215,90 L170,90 Z", cx: 192, cy: 60 },
      { id: "andalucia", nome: "Andaluzia", path: "M60,110 L160,110 L160,160 L60,160 Z", cx: 110, cy: 135 },
      { id: "valencia", nome: "Comunidade Valenciana", path: "M160,65 L210,65 L210,115 L160,115 Z", cx: 185, cy: 90 },
      { id: "pais-basco", nome: "País Basco", path: "M160,15 L190,15 L190,40 L160,40 Z", cx: 175, cy: 27 },
      { id: "galicia", nome: "Galícia", path: "M10,20 L55,20 L55,60 L10,60 Z", cx: 32, cy: 40 },
      { id: "castela-leao", nome: "Castela e Leão", path: "M40,10 L90,10 L90,60 L40,60 Z", cx: 65, cy: 35 },
      { id: "aragon", nome: "Aragão", path: "M130,15 L170,15 L170,60 L130,60 Z", cx: 150, cy: 37 },
      { id: "castela-mancha", nome: "Castela-La Mancha", path: "M70,60 L130,60 L130,110 L70,110 Z", cx: 100, cy: 85 },
      { id: "ilhas-canarias", nome: "Ilhas Canárias", path: "M10,130 L40,130 L40,155 L10,155 Z", cx: 25, cy: 142 },
      { id: "baleares", nome: "Ilhas Baleares", path: "M200,75 L220,75 L220,95 L200,95 Z", cx: 210, cy: 85 }
    ]
  },

  alemanha: {
    viewBox: "0 0 180 220",
    regioes: [
      { id: "berlim", nome: "Berlim", path: "M120,40 L160,40 L160,60 L120,60 Z", cx: 140, cy: 50 },
      { id: "baviera", nome: "Baviera", path: "M60,100 L170,100 L170,180 L60,180 Z", cx: 115, cy: 140 },
      { id: "norte-vestfalia", nome: "Renânia do Norte-Vestfália", path: "M40,40 L100,40 L100,80 L40,80 Z", cx: 70, cy: 60 },
      { id: "hamburgo", nome: "Hamburgo", path: "M40,10 L80,10 L80,30 L40,30 Z", cx: 60, cy: 20 },
      { id: "baden-wurttemberg", nome: "Baden-Württemberg", path: "M10,80 L60,80 L60,130 L10,130 Z", cx: 35, cy: 105 },
      { id: "saxonia", nome: "Saxônia", path: "M120,60 L170,60 L170,100 L120,100 Z", cx: 145, cy: 80 },
      { id: "hessen", nome: "Hessen", path: "M50,60 L100,60 L100,100 L50,100 Z", cx: 75, cy: 80 },
      { id: "saxonia-anhalt", nome: "Saxônia-Anhalt", path: "M100,40 L120,40 L120,80 L100,80 Z", cx: 110, cy: 60 },
      { id: "turingia", nome: "Turíngia", path: "M80,60 L120,60 L120,100 L80,100 Z", cx: 100, cy: 80 },
      { id: "mecklemburgo", nome: "Mecklemburgo-Pomerânia Ocidental", path: "M100,10 L160,10 L160,40 L100,40 Z", cx: 130, cy: 25 },
      { id: "baixa-saxonia", nome: "Baixa Saxônia", path: "M10,30 L100,30 L100,60 L10,60 Z", cx: 55, cy: 45 }
    ]
  },

  portugal: {
    viewBox: "0 0 100 200",
    regioes: [
      { id: "lisboa", nome: "Lisboa", path: "M20,60 L70,60 L70,90 L20,90 Z", cx: 45, cy: 75 },
      { id: "porto", nome: "Porto", path: "M20,10 L75,10 L75,45 L20,45 Z", cx: 47, cy: 27 },
      { id: "algarve", nome: "Algarve", path: "M15,120 L80,120 L80,150 L15,150 Z", cx: 47, cy: 135 },
      { id: "alentejo", nome: "Alentejo", path: "M15,90 L70,90 L70,120 L15,120 Z", cx: 42, cy: 105 },
      { id: "centro", nome: "Região Centro", path: "M15,45 L70,45 L70,80 L15,80 Z", cx: 42, cy: 62 },
      { id: "acores", nome: "Açores", path: "M5,160 L25,160 L25,180 L5,180 Z", cx: 15, cy: 170 },
      { id: "madeira", nome: "Madeira", path: "M70,160 L95,160 L95,180 L70,180 Z", cx: 82, cy: 170 }
    ]
  },

  reino_unido: {
    viewBox: "0 0 150 220",
    regioes: [
      { id: "inglaterra", nome: "Inglaterra", path: "M40,60 L110,60 L110,140 L40,140 Z", cx: 75, cy: 100 },
      { id: "escocia", nome: "Escócia", path: "M30,5 L90,5 L90,55 L30,55 Z", cx: 60, cy: 30 },
      { id: "gales", nome: "País de Gales", path: "M10,75 L45,75 L45,110 L10,110 Z", cx: 27, cy: 92 },
      { id: "irlanda-norte", nome: "Irlanda do Norte", path: "M95,20 L130,20 L130,50 L95,50 Z", cx: 112, cy: 35 }
    ]
  },

  // ==================== AMÉRICAS ====================

  eua: {
    viewBox: "0 0 300 200",
    regioes: [
      { id: "california", nome: "Califórnia", path: "M20,30 L50,30 L50,120 L20,120 Z", cx: 35, cy: 75 },
      { id: "nova-york", nome: "Nova York", path: "M190,40 L250,40 L250,70 L190,70 Z", cx: 220, cy: 55 },
      { id: "texas", nome: "Texas", path: "M100,100 L160,100 L160,155 L100,155 Z", cx: 130, cy: 127 },
      { id: "florida", nome: "Flórida", path: "M200,130 L260,130 L260,170 L200,170 Z", cx: 230, cy: 150 },
      { id: "illinois", nome: "Illinois", path: "M120,60 L160,60 L160,90 L120,90 Z", cx: 140, cy: 75 },
      { id: "nevada", nome: "Nevada", path: "M50,40 L90,40 L90,90 L50,90 Z", cx: 70, cy: 65 },
      { id: "washington-state", nome: "Washington", path: "M20,5 L70,5 L70,30 L20,30 Z", cx: 45, cy: 17 },
      { id: "georgia", nome: "Geórgia", path: "M190,100 L240,100 L240,130 L190,130 Z", cx: 215, cy: 115 },
      { id: "hawai", nome: "Havaí", path: "M5,160 L30,160 L30,180 L5,180 Z", cx: 17, cy: 170 },
      { id: "alasca", nome: "Alasca", path: "M5,140 L25,140 L25,155 L5,155 Z", cx: 15, cy: 147 },
      { id: "arizona", nome: "Arizona", path: "M60,80 L100,80 L100,115 L60,115 Z", cx: 80, cy: 97 },
      { id: "colorado", nome: "Colorado", path: "M100,50 L140,50 L140,80 L100,80 Z", cx: 120, cy: 65 },
      { id: "massachusetts", nome: "Massachusetts", path: "M210,30 L240,30 L240,50 L210,50 Z", cx: 225, cy: 40 },
      { id: "washington-dc", nome: "Washington D.C.", path: "M215,85 L235,85 L235,100 L215,100 Z", cx: 225, cy: 92 }
    ]
  },

  argentina: {
    viewBox: "0 0 100 280",
    regioes: [
      { id: "buenos-aires", nome: "Buenos Aires", path: "M40,80 L80,80 L80,120 L40,120 Z", cx: 60, cy: 100 },
      { id: "cordoba", nome: "Córdoba", path: "M20,50 L60,50 L60,80 L20,80 Z", cx: 40, cy: 65 },
      { id: "santa-fe", nome: "Santa Fé", path: "M50,80 L90,80 L90,110 L50,110 Z", cx: 70, cy: 95 },
      { id: "mendoza", nome: "Mendoza", path: "M10,40 L40,40 L40,80 L10,80 Z", cx: 25, cy: 60 },
      { id: "patagonia", nome: "Patagônia", path: "M20,160 L70,160 L70,260 L20,260 Z", cx: 45, cy: 210 },
      { id: "noroeste", nome: "Noroeste Argentino", path: "M5,10 L50,10 L50,50 L5,50 Z", cx: 27, cy: 30 },
      { id: "litoral", nome: "Litoral", path: "M70,40 L95,40 L95,100 L70,100 Z", cx: 82, cy: 70 }
    ]
  },

  mexico: {
    viewBox: "0 0 160 180",
    regioes: [
      { id: "cidade-mexico", nome: "Cidade do México", path: "M70,40 L95,40 L95,60 L70,60 Z", cx: 82, cy: 50 },
      { id: "jalisco", nome: "Jalisco", path: "M30,50 L70,50 L70,80 L30,80 Z", cx: 50, cy: 65 },
      { id: "nuevo-leon", nome: "Nuevo León", path: "M120,30 L150,30 L150,60 L120,60 Z", cx: 135, cy: 45 },
      { id: "quintana-roo", nome: "Quintana Roo", path: "M120,70 L155,70 L155,110 L120,110 Z", cx: 137, cy: 90 },
      { id: "oaxaca", nome: "Oaxaca", path: "M60,80 L100,80 L100,110 L60,110 Z", cx: 80, cy: 95 },
      { id: "yucatan", nome: "Yucatán", path: "M100,60 L155,60 L155,80 L100,80 Z", cx: 127, cy: 70 },
      { id: "baja-california", nome: "Baja California", path: "M10,10 L40,10 L40,60 L10,60 Z", cx: 25, cy: 35 },
      { id: "chiapas", nome: "Chiapas", path: "M50,110 L95,110 L95,140 L50,140 Z", cx: 72, cy: 125 }
    ]
  },

  // ==================== ÁSIA ====================

  japao: {
    viewBox: "0 0 100 250",
    regioes: [
      { id: "kanto", nome: "Kantō", path: "M30,60 L80,60 L80,95 L30,95 Z", cx: 55, cy: 77 },
      { id: "kansai", nome: "Kansai", path: "M15,95 L55,95 L55,130 L15,130 Z", cx: 35, cy: 112 },
      { id: "chubu", nome: "Chūbu", path: "M35,45 L75,45 L75,80 L35,80 Z", cx: 55, cy: 62 },
      { id: "kyushu", nome: "Kyushu", path: "M10,140 L50,140 L50,180 L10,180 Z", cx: 30, cy: 160 },
      { id: "hokkaido", nome: "Hokkaido", path: "M25,5 L85,5 L85,40 L25,40 Z", cx: 55, cy: 22 },
      { id: "tohoku", nome: "Tohoku", path: "M35,25 L75,25 L75,55 L35,55 Z", cx: 55, cy: 40 },
      { id: "chugoku", nome: "Chūgoku", path: "M10,75 L45,75 L45,100 L10,100 Z", cx: 27, cy: 87 },
      { id: "shikoku", nome: "Shikoku", path: "M50,120 L75,120 L75,140 L50,140 Z", cx: 62, cy: 130 },
      { id: "okinawa", nome: "Okinawa", path: "M35,210 L65,210 L65,230 L35,230 Z", cx: 50, cy: 220 }
    ]
  },

  china: {
    viewBox: "0 0 300 260",
    regioes: [
      { id: "pequim", nome: "Pequim", path: "M130,20 L170,20 L170,50 L130,50 Z", cx: 150, cy: 35 },
      { id: "xangai", nome: "Xangai", path: "M190,80 L220,80 L220,110 L190,110 Z", cx: 205, cy: 95 },
      { id: "guangdong", nome: "Guangdong", path: "M190,140 L250,140 L250,180 L190,180 Z", cx: 220, cy: 160 },
      { id: "sichuan", nome: "Sichuan", path: "M50,80 L120,80 L120,130 L50,130 Z", cx: 85, cy: 105 },
      { id: "yunnan", nome: "Yunnan", path: "M50,140 L120,140 L120,190 L50,190 Z", cx: 85, cy: 165 },
      { id: "xinjiang", nome: "Xinjiang", path: "M10,30 L100,30 L100,90 L10,90 Z", cx: 55, cy: 60 },
      { id: "tibet", nome: "Tibet", path: "M50,50 L120,50 L120,90 L50,90 Z", cx: 85, cy: 70 },
      { id: "mongolia-interior", nome: "Mongólia Interior", path: "M100,15 L180,15 L180,50 L100,50 Z", cx: 140, cy: 32 },
      { id: "heilongjiang", nome: "Heilongjiang", path: "M170,5 L230,5 L230,40 L170,40 Z", cx: 200, cy: 22 },
      { id: "hubei", nome: "Hubei", path: "M140,60 L190,60 L190,100 L140,100 Z", cx: 165, cy: 80 }
    ]
  },

  coreia_sul: {
    viewBox: "0 0 80 150",
    regioes: [
      { id: "seul", nome: "Seul", path: "M15,10 L60,10 L60,40 L15,40 Z", cx: 37, cy: 25 },
      { id: "busan", nome: "Busan", path: "M20,80 L65,80 L65,110 L20,110 Z", cx: 42, cy: 95 },
      { id: "jeju", nome: "Jeju", path: "M15,120 L45,120 L45,140 L15,140 Z", cx: 30, cy: 130 },
      { id: "gyeonggi", nome: "Gyeonggi", path: "M10,30 L50,30 L50,60 L10,60 Z", cx: 30, cy: 45 },
      { id: "gwangju", nome: "Gwangju", path: "M8,60 L48,60 L48,85 L8,85 Z", cx: 28, cy: 72 }
    ]
  },

  // ==================== OCEANIA ====================

  australia: {
    viewBox: "0 0 240 180",
    regioes: [
      { id: "nsw", nome: "Nova Gales do Sul", path: "M140,80 L210,80 L210,130 L140,130 Z", cx: 175, cy: 105 },
      { id: "victoria", nome: "Victoria", path: "M100,100 L160,100 L160,140 L100,140 Z", cx: 130, cy: 120 },
      { id: "queensland", nome: "Queensland", path: "M140,20 L230,20 L230,90 L140,90 Z", cx: 185, cy: 55 },
      { id: "australia-ocidental", nome: "Austrália Ocidental", path: "M10,50 L100,50 L100,150 L10,150 Z", cx: 55, cy: 100 },
      { id: "australia-sul", nome: "Austrália do Sul", path: "M60,70 L140,70 L140,120 L60,120 Z", cx: 100, cy: 95 },
      { id: "territorio-norte", nome: "Território do Norte", path: "M60,20 L130,20 L130,70 L60,70 Z", cx: 95, cy: 45 }
    ]
  },

  // ==================== ÁFRICA ====================

  egito: {
    viewBox: "0 0 120 160",
    regioes: [
      { id: "cairo", nome: "Cairo", path: "M60,30 L110,30 L110,70 L60,70 Z", cx: 85, cy: 50 },
      { id: "alexandria", nome: "Alexandria", path: "M20,5 L70,5 L70,30 L20,30 Z", cx: 45, cy: 17 },
      { id: "assua", nome: "Assuã", path: "M40,100 L80,100 L80,130 L40,130 Z", cx: 60, cy: 115 },
      { id: "luxor", nome: "Luxor", path: "M50,70 L90,70 L90,100 L50,100 Z", cx: 70, cy: 85 },
      { id: "mar-vermelho", nome: "Mar Vermelho", path: "M90,20 L115,20 L115,110 L90,110 Z", cx: 102, cy: 65 }
    ]
  },

  africa_sul: {
    viewBox: "0 0 180 160",
    regioes: [
      { id: "gauteng", nome: "Gauteng", path: "M70,50 L120,50 L120,80 L70,80 Z", cx: 95, cy: 65 },
      { id: "cabo-ocidental", nome: "Cabo Ocidental", path: "M10,80 L80,80 L80,140 L10,140 Z", cx: 45, cy: 110 },
      { id: "kwazulu-natal", nome: "KwaZulu-Natal", path: "M120,80 L170,80 L170,130 L120,130 Z", cx: 145, cy: 105 },
      { id: "cabo-oriental", nome: "Cabo Oriental", path: "M60,70 L130,70 L130,100 L60,100 Z", cx: 95, cy: 85 },
      { id: "mpumalanga", nome: "Mpumalanga", path: "M110,30 L160,30 L160,70 L110,70 Z", cx: 135, cy: 50 }
    ]
  },

  // ==================== ORIENTE MÉDIO ====================

  turquia: {
    viewBox: "0 0 200 120",
    regioes: [
      { id: "istambul", nome: "Istambul", path: "M10,20 L60,20 L60,60 L10,60 Z", cx: 35, cy: 40 },
      { id: "ancara", nome: "Ancara", path: "M60,20 L120,20 L120,60 L60,60 Z", cx: 90, cy: 40 },
      { id: "antalya", nome: "Antalya", path: "M10,60 L90,60 L90,100 L10,100 Z", cx: 50, cy: 80 },
      { id: "capadocia", nome: "Capadócia", path: "M120,20 L170,20 L170,65 L120,65 Z", cx: 145, cy: 42 },
      { id: "esmirna", nome: "Esmirna", path: "M120,65 L180,65 L180,110 L120,110 Z", cx: 150, cy: 87 },
      { id: "trabzon", nome: "Trabzon", path: "M140,5 L195,5 L195,30 L140,30 Z", cx: 167, cy: 17 }
    ]
  },

  // ==================== AMÉRICA CENTRAL / CARIBE ====================

  cuba: {
    viewBox: "0 0 180 50",
    regioes: [
      { id: "havana", nome: "Havana", path: "M10,10 L80,10 L80,35 L10,35 Z", cx: 45, cy: 22 },
      { id: "santiago-cuba", nome: "Santiago de Cuba", path: "M100,10 L170,10 L170,35 L100,35 Z", cx: 135, cy: 22 },
      { id: "holguin", nome: "Holguín", path: "M90,5 L130,5 L130,20 L90,20 Z", cx: 110, cy: 12 },
      { id: "villa-clara", nome: "Villa Clara", path: "M50,5 L100,5 L100,25 L50,25 Z", cx: 75, cy: 15 }
    ]
  }
};

export default mapasPaises;
