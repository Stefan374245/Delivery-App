let rating = 4;
let maxRating = 5;
let stars = "";
let basket = [];

let dishes = [
  {
    name: "Paella",
    price: 14.99,
    description:
      "Reis mit Meeresfrüchten, Hühnchen, Kaninchen und Gemüse, gewürzt mit Safran.",
    ingredients: [
      "Reis",
      "Meeresfrüchte",
      "Hühnchen",
      "Kaninchen",
      "Safran",
      "Paprika",
      "Erbsen",
      "Olivenöl",
      "Knoblauch",
      "Tomaten",
    ],
    images: "./assets/img/dishesImg/paella.png"
  },
  {
    name: "Tortilla Española",
    price: 7.5,
    description: "Spanisches Omelett aus Eiern, Kartoffeln und Zwiebeln.",
    ingredients: [
      "Eier",
      "Kartoffeln",
      "Zwiebeln",
      "Olivenöl",
      "Salz",
      "Pfeffer",
    ],
    images: "./assets/img/dishesImg/Tortilla Española.jpg"
  },
  {
    name: "Gazpacho",
    price: 6.0,
    description:
      "Erfrischende kalte Tomatensuppe mit Gurken, Paprika und Zwiebeln.",
    ingredients: [
      "Tomaten",
      "Gurken",
      "Paprika",
      "Zwiebeln",
      "Olivenöl",
      "Weinessig",
      "Knoblauch",
      "Brot",
      "Pfeffer",
      "Salz",
    ],
    images: "./assets/img/dishesImg/gazpacho.jpg"
  },
  {
    name: "Jamón Ibérico",
    price: 19.99,
    description: "Luftgetrockneter iberischer Schinken, serviert mit Brot.",
    ingredients: ["Iberischer Schinken", "Brot"],
    images: "./assets/img/dishesImg/jamon-3934953_640.jpg"
  },
  {
    name: "Patatas Bravas",
    price: 5.5,
    description: "Frittierte Kartoffeln mit einer würzigen Tomatensauce.",
    ingredients: [
      "Kartoffeln",
      "Tomaten",
      "Knoblauch",
      "Zwiebeln",
      "Paprika",
      "Chili",
      "Olivenöl",
    ],
    images: "./assets/img/dishesImg/patatasBravas.jpg"
  },
  {
    name: "Croquetas",
    price: 8.0,
    description:
      "Frittierte Teigtaschen gefüllt mit Schinken oder Meeresfrüchten.",
    ingredients: [
      "Schinken",
      "Mehl",
      "Eier",
      "Milch",
      "Butter",
      "Panko",
      "Muskatnuss",
    ],
    images: "./assets/img/dishesImg/croquetas.jpg"
  },
  {
    name: "Pisto Manchego",
    price: 9.0,
    description:
      "Gemüseeintopf aus Tomaten, Zucchini, Auberginen und Paprika, ähnlich wie Ratatouille.",
    ingredients: [
      "Tomaten",
      "Zucchini",
      "Auberginen",
      "Paprika",
      "Olivenöl",
      "Zwiebeln",
      "Knoblauch",
    ],
    images: "./assets/img/dishesImg/Pisto Manchego.jpg"
  },
  {
    name: "Fideuà",
    price: 13.5,
    description:
      "Nudelpaella mit Meeresfrüchten, ähnlich wie Paella, aber mit kurzen Nudeln.",
    ingredients: [
      "Nudeln",
      "Meeresfrüchte",
      "Fischbrühe",
      "Paprika",
      "Tomaten",
      "Knoblauch",
      "Zwiebeln",
      "Olivenöl",
    ],
    images: "./assets/img/dishesImg/Fideuà.jpg"
  },
  {
    name: "Albóndigas",
    price: 10.0,
    description:
      "Fleischbällchen in Tomatensauce, oft serviert mit Reis oder Kartoffeln.",
    ingredients: [
      "Hackfleisch (Rind oder Schwein)",
      "Ei",
      "Paniermehl",
      "Knoblauch",
      "Zwiebeln",
      "Tomaten",
      "Olivenöl",
      "Pfeffer",
      "Salz",
    ],
    images: "./assets/img/dishesImg/albondigas.jpg"
  },
];


let tapas = [
  {
    name: "Aceitunas",
    price: 3.0,
    description: "Würzige Oliven mariniert in Kräutern und Knoblauch.",
    ingredients: ["Oliven", "Knoblauch", "Rosmarin", "Thymian", "Olivenöl"],
    images: "./assets/img/tapasImg/olive-2614000_640.jpg"
  },
  {
    name: "Gambas al Ajillo",
    price: 9.5,
    description: "Garnelen in Knoblauchöl, Chili und frischen Kräutern.",
    ingredients: ["Garnelen", "Knoblauch", "Chili", "Olivenöl", "Petersilie"],
    images: "./assets/img/tapasImg/gambas2.jpg"
  },
  {
    name: "Croquetas",
    price: 5.0,
    description:
      "Frittierte Kroketten gefüllt mit Schinken, Hühnchen oder Pilzen.",
    ingredients: [
      "Schinken",
      "Hühnchen",
      "Pilze",
      "Mehl",
      "Eier",
      "Milch",
      "Butter",
      "Panko",
      "Muskatnuss",
    ],
    images: "./assets/img/tapasImg/croquetas.jpg"
  },
  {
    name: "Calamares a la Romana",
    price: 7.0,
    description:
      "Kross frittierte Tintenfischringe, serviert mit einer Zitronenscheibe.",
    ingredients: [
      "Tintenfisch",
      "Mehl",
      "Eier",
      "Panko",
      "Zitrone",
      "Olivenöl",
    ],
    images: "./assets/img/tapasImg/tintenfischringe.jpg"
  },
  {
    name: "Tortilla Española",
    price: 6.0,
    description: "Spanisches Omelett aus Eiern, Kartoffeln und Zwiebeln.",
    ingredients: [
      "Eier",
      "Kartoffeln",
      "Zwiebeln",
      "Olivenöl",
      "Salz",
      "Pfeffer",
    ],
    images: "./assets/img/tapasImg/Tortilla Española.jpg"
  },
  {
    name: "Chorizo al Vino",
    price: 8.0,
    description: "Spanische Chorizo-Wurst, in Rotwein geschmort.",
    ingredients: ["Chorizo", "Rotwein", "Knoblauch", "Olivenöl", "Pfeffer"],
    images: "./assets/img/tapasImg/chorizo-7173983_640.jpg"
  },
  {
    name: "Piquillos Rellenos de Marisco",
    price: 10.0,
    description: "Gefüllte Piquillo-Paprikas mit Meeresfrüchten.",
    ingredients: [
      "Piquillo-Paprika",
      "Meeresfrüchte",
      "Kräuter",
      "Olivenöl",
      "Knoblauch",
    ],
    images: "./assets/img/tapasImg/paprika-3083449_640.jpg"
  },
  {
    name: "Ensaladilla Rusa",
    price: 5.5,
    description: "Kalte Kartoffelsalat mit Erbsen, Karotten und Mayonnaise.",
    ingredients: [
      "Kartoffeln",
      "Erbsen",
      "Karotten",
      "Mayonnaise",
      "Olivenöl",
      "Pfeffer",
    ],
    images: "./assets/img/tapasImg/EnsaladaRusa.jpg"
  },
  {
    name: "Pimientos de Padrón",
    price: 6.0,
    description:
      "Gebratene grüne Paprikaschoten, die für ihren würzigen Geschmack bekannt sind.",
    ingredients: ["Padrón-Paprika", "Olivenöl", "Meersalz"],
    images: "./assets/img/tapasImg/pimientos-de-padron-4417710_640.jpg"
  },
  {
    name: "Pulpo a la Gallega",
    price: 12.0,
    description: "Galizischer Oktopus, gewürzt mit Paprika, Salz und Olivenöl.",
    ingredients: ["Oktopus", "Paprika", "Olivenöl", "Meersalz", "Petersilie"],
    images: "./assets/img/tapasImg/PulpoalaGallega.jpg",
  },
];

let postres = [
  {
    name: "Tarta de Santiago",
    price: 6.5,
    description:
      "Traditionelle Mandel-Torte aus Galicien, bestäubt mit Puderzucker und dem Kreuz von Santiago.",
    ingredients: ["Mandelmehl", "Eier", "Zucker", "Butter", "Puderzucker"],
    images: "./assets/img/postreImg/tarta-6900298_640.jpg",
  },
  {
    name: "Churros con Chocolate",
    price: 4.5,
    description:
      "Frittierte Teigstäbchen, serviert mit heißer Schokoladensauce zum Dippen.",
    ingredients: [
      "Mehl",
      "Wasser",
      "Zucker",
      "Zimt",
      "Eier",
      "Schokolade",
      "Milch",
    ],
    images: "./assets/img/postreImg/Coulant de Chocolate.jpg",
  },
  {
    name: "Flan",
    price: 5.0,
    description: "Karamellisierter Pudding mit einer Vanillesauce.",
    ingredients: ["Milch", "Eier", "Zucker", "Vanille", "Karamell"],
    images: "./assets/img/postreImg/flan.jpg",
  },
  {
    name: "Tarta de Queso",
    price: 7.0,
    description:
      "Spanischer Käsekuchen, der mit einer fruchtigen Sauce oder Marmelade serviert wird.",
    ingredients: [
      "Frischkäse",
      "Eier",
      "Zucker",
      "Vanille",
      "Butter",
      "Marmelade",
    ],
    images: "./assets/img/postreImg/tarta-6900298_640.jpg",
  },
  {
    name: "Coulant de Chocolate",
    price: 8.0,
    description:
      "Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit einer Kugel Vanilleeis.",
    ingredients: [
      "Schokolade",
      "Eier",
      "Butter",
      "Zucker",
      "Mehl",
      "Vanilleeis",
    ],
    images: "./assets/img/postreImg/Coulant de Chocolate.jpg",
  },
  {
    name: "Helado Artesano",
    price: 4.0,
    description:
      "Hausgemachtes Eis in verschiedenen Geschmacksrichtungen, wie Schokolade, Vanille oder Erdbeere.",
    ingredients: ["Milch", "Zucker", "Vanille", "Erdbeeren", "Schokolade"],
    images: "./assets/img/postreImg/ice-cream-3611698_640.jpg",
  },
  {
    name: "Panna Cotta",
    price: 6.0,
    description:
      "Italienisches Dessert aus Sahne, Zucker und Vanille, serviert mit einer Fruchtsauce.",
    ingredients: ["Sahne", "Zucker", "Vanille", "Gelatine", "Früchte"],
    images: "./assets/img/postreImg/panna-cotta-4388588_640.jpg",
  },
];


let drinks = [
  {
    name: "Sangria",
    price: 12.0,
    description: "Erfrischender spanischer Weincocktail mit frischen Früchten.",
    ingredients: [
      "Rotwein",
      "Orangen",
      "Zitronen",
      "Zucker",
      "Zimtstange",
      "Brandy",
    ],
    images: "./assets/img/drinksImg/sangria.jpg" ,
  },
  {
    name: "Cerveza",
    price: 3.0,
    description: "Erfrischendes spanisches Bier, perfekt für warme Tage.",
    ingredients: ["Wasser", "Malz", "Hopfen", "Hefe"],
    images: "./assets/img/drinksImg/beer.jpg",
  },
  {
    name: "Tinto de Verano",
    price: 5.0,
    description: "Erfrischender Sommercocktail aus Rotwein und Limonade.",
    ingredients: ["Rotwein", "Limonade"],
    images: "./assets/img/drinksImg/wine-2408620_640.jpg",
  },
  {
    name: "Clara",
    price: 4.0,
    description: "Erfrischender Cocktail aus Bier und Limonade.",
    ingredients: ["Bier", "Limonade"],
    images: "./assets/img/drinksImg/beer.jpg",
  },
  {
    name: "Café con Leche",
    price: 2.5,
    description: "Starker Espresso mit aufgeschäumter Milch.",
    ingredients: ["Espresso", "Milch"],
    images: "./assets/img/drinksImg/caffe-latte-5154771_640.jpg",
  },
  {
    name: "Vino Blanco",
    price: 6.5,
    description: "Frischer spanischer Weißwein, perfekt zu Tapas.",
    ingredients: ["Weißwein"],
    images: "./assets/img/drinksImg/wine-2789265_640.jpg",
  },
];

