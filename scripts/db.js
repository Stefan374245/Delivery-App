
let basket = [];

let dishes = [
  {
      "name": "Paella",
      "price": 14.99,
      "description": "Reis mit Meeresfrüchten, Hühnchen, Kaninchen und Gemüse, gewürzt mit Safran.",
      "ingredients": ["Reis", "Meeresfrüchte", "Hühnchen", "Kaninchen", "Safran", "Paprika", "Erbsen", "Olivenöl", "Knoblauch", "Tomaten"]
  },
  {
      "name": "Tortilla Española",
      "price": 7.50,
      "description": "Spanisches Omelett aus Eiern, Kartoffeln und Zwiebeln.",
      "ingredients": ["Eier", "Kartoffeln", "Zwiebeln", "Olivenöl", "Salz", "Pfeffer"]
  },
  {
      "name": "Gazpacho",
      "price": 6.00,
      "description": "Erfrischende kalte Tomatensuppe mit Gurken, Paprika und Zwiebeln.",
      "ingredients": ["Tomaten", "Gurken", "Paprika", "Zwiebeln", "Olivenöl", "Weinessig", "Knoblauch", "Brot", "Pfeffer", "Salz"]
  },
  {
      "name": "Jamón Ibérico",
      "price": 19.99,
      "description": "Luftgetrockneter iberischer Schinken, serviert mit Brot.",
      "ingredients": ["Iberischer Schinken", "Brot"]
  },
  {
      "name": "Patatas Bravas",
      "price": 5.50,
      "description": "Frittierte Kartoffeln mit einer würzigen Tomatensauce.",
      "ingredients": ["Kartoffeln", "Tomaten", "Knoblauch", "Zwiebeln", "Paprika", "Chili", "Olivenöl"]
  },
  {
      "name": "Croquetas",
      "price": 8.00,
      "description": "Frittierte Teigtaschen gefüllt mit Schinken oder Meeresfrüchten.",
      "ingredients": ["Schinken", "Mehl", "Eier", "Milch", "Butter", "Panko", "Muskatnuss"]
  },
  {
      "name": "Pisto Manchego",
      "price": 9.00,
      "description": "Gemüseeintopf aus Tomaten, Zucchini, Auberginen und Paprika, ähnlich wie Ratatouille.",
      "ingredients": ["Tomaten", "Zucchini", "Auberginen", "Paprika", "Olivenöl", "Zwiebeln", "Knoblauch"]
  },
  {
      "name": "Churros con Chocolate",
      "price": 4.50,
      "description": "Frittierte Teigstäbchen, serviert mit heißer Schokolade zum Eintauchen.",
      "ingredients": ["Mehl", "Wasser", "Zucker", "Zimt", "Eier", "Schokolade", "Milch", "Zucker"]
  },
  {
      "name": "Fideuà",
      "price": 13.50,
      "description": "Nudelpaella mit Meeresfrüchten, ähnlich wie Paella, aber mit kurzen Nudeln.",
      "ingredients": ["Nudeln", "Meeresfrüchte", "Fischbrühe", "Paprika", "Tomaten", "Knoblauch", "Zwiebeln", "Olivenöl"]
  },
  {
      "name": "Albóndigas",
      "price": 10.00,
      "description": "Fleischbällchen in Tomatensauce, oft serviert mit Reis oder Kartoffeln.",
      "ingredients": ["Hackfleisch (Rind oder Schwein)", "Ei", "Paniermehl", "Knoblauch", "Zwiebeln", "Tomaten", "Olivenöl", "Pfeffer", "Salz"]
  }
];

let tapas = [
  {
      "name": "Aceitunas",
      "price": 3.00,
      "description": "Würzige Oliven mariniert in Kräutern und Knoblauch.",
      "ingredients": ["Oliven", "Knoblauch", "Rosmarin", "Thymian", "Olivenöl"]
  },
  {
      "name": "Gambas al Ajillo",
      "price": 9.50,
      "description": "Garnelen in Knoblauchöl, Chili und frischen Kräutern.",
      "ingredients": ["Garnelen", "Knoblauch", "Chili", "Olivenöl", "Petersilie"]
  },
  {
      "name": "Croquetas",
      "price": 5.00,
      "description": "Frittierte Kroketten gefüllt mit Schinken, Hühnchen oder Pilzen.",
      "ingredients": ["Schinken", "Hühnchen", "Pilze", "Mehl", "Eier", "Milch", "Butter", "Panko", "Muskatnuss"]
  },
  {
      "name": "Calamares a la Romana",
      "price": 7.00,
      "description": "Kross frittierte Tintenfischringe, serviert mit einer Zitronenscheibe.",
      "ingredients": ["Tintenfisch", "Mehl", "Eier", "Panko", "Zitrone", "Olivenöl"]
  },
  {
      "name": "Tortilla Española",
      "price": 6.00,
      "description": "Spanisches Omelett aus Eiern, Kartoffeln und Zwiebeln.",
      "ingredients": ["Eier", "Kartoffeln", "Zwiebeln", "Olivenöl", "Salz", "Pfeffer"]
  },
  {
      "name": "Chorizo al Vino",
      "price": 8.00,
      "description": "Spanische Chorizo-Wurst, in Rotwein geschmort.",
      "ingredients": ["Chorizo", "Rotwein", "Knoblauch", "Olivenöl", "Pfeffer"]
  },
  {
      "name": "Piquillos Rellenos de Marisco",
      "price": 10.00,
      "description": "Gefüllte Piquillo-Paprikas mit Meeresfrüchten.",
      "ingredients": ["Piquillo-Paprika", "Meeresfrüchte", "Kräuter", "Olivenöl", "Knoblauch"]
  },
  {
      "name": "Ensaladilla Rusa",
      "price": 5.50,
      "description": "Kalte Kartoffelsalat mit Erbsen, Karotten und Mayonnaise.",
      "ingredients": ["Kartoffeln", "Erbsen", "Karotten", "Mayonnaise", "Olivenöl", "Pfeffer"]
  },
  {
      "name": "Pimientos de Padrón",
      "price": 6.00,
      "description": "Gebratene grüne Paprikaschoten, die für ihren würzigen Geschmack bekannt sind.",
      "ingredients": ["Padrón-Paprika", "Olivenöl", "Meersalz"]
  },
  {
      "name": "Morcilla",
      "price": 7.50,
      "description": "Spanische Blutwurst, oft serviert mit Zwiebeln oder Äpfeln.",
      "ingredients": ["Blutwurst", "Zwiebeln", "Äpfel", "Olivenöl"]
  },
  {
      "name": "Pulpo a la Gallega",
      "price": 12.00,
      "description": "Galizischer Oktopus, gewürzt mit Paprika, Salz und Olivenöl.",
      "ingredients": ["Oktopus", "Paprika", "Olivenöl", "Meersalz", "Petersilie"]
  },
  {
      "name": "Tostas de Anchoas",
      "price": 5.50,
      "description": "Geröstete Brotscheiben mit marinierten Sardellen und Tomaten.",
      "ingredients": ["Brot", "Sardellen", "Tomaten", "Olivenöl", "Knoblauch"]
  },
  {
      "name": "Almejas a la Marinera",
      "price": 9.00,
      "description": "Muscheln in einer würzigen Tomatensauce mit Weißwein und Kräutern.",
      "ingredients": ["Muscheln", "Tomaten", "Weißwein", "Olivenöl", "Knoblauch", "Petersilie"]
  },
  {
      "name": "Berenjenas con Miel",
      "price": 6.50,
      "description": "Frittierte Auberginenscheiben mit Honig, eine süß-würzige Delikatesse.",
      "ingredients": ["Auberginen", "Honig", "Olivenöl", "Mehl"]
  }
];

let postres = [
  {
      "name": "Tarta de Santiago",
      "price": 6.50,
      "description": "Traditionelle Mandel-Torte aus Galicien, bestäubt mit Puderzucker und dem Kreuz von Santiago.",
      "ingredients": ["Mandelmehl", "Eier", "Zucker", "Butter", "Puderzucker"]
  },
  {
      "name": "Churros con Chocolate",
      "price": 4.50,
      "description": "Frittierte Teigstäbchen, serviert mit heißer Schokoladensauce zum Dippen.",
      "ingredients": ["Mehl", "Wasser", "Zucker", "Zimt", "Eier", "Schokolade", "Milch"]
  },
  {
      "name": "Flan",
      "price": 5.00,
      "description": "Karamellisierter Pudding mit einer Vanillesauce.",
      "ingredients": ["Milch", "Eier", "Zucker", "Vanille", "Karamell"]
  },
  {
      "name": "Tarta de Queso",
      "price": 7.00,
      "description": "Spanischer Käsekuchen, der mit einer fruchtigen Sauce oder Marmelade serviert wird.",
      "ingredients": ["Frischkäse", "Eier", "Zucker", "Vanille", "Butter", "Marmelade"]
  },
  {
      "name": "Arroz con Leche",
      "price": 4.00,
      "description": "Cremiger Reis mit Milch, Zimt und Zucker, ein klassisches spanisches Dessert.",
      "ingredients": ["Reis", "Milch", "Zucker", "Zimt"]
  },
  {
      "name": "Polvorones",
      "price": 3.00,
      "description": "Spanische Mürbeteigkekse, die vor allem zu Weihnachten beliebt sind.",
      "ingredients": ["Mehl", "Zucker", "Mandeln", "Fett", "Zimt"]
  },
  {
      "name": "Piononos",
      "price": 5.50,
      "description": "Süße, kleine Biskuitröllchen, die mit einer Zuckerglasur überzogen und karamellisiert werden.",
      "ingredients": ["Biskuit", "Zucker", "Eier", "Zuckerglasur"]
  },
  {
      "name": "Coulant de Chocolate",
      "price": 8.00,
      "description": "Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit einer Kugel Vanilleeis.",
      "ingredients": ["Schokolade", "Eier", "Butter", "Zucker", "Mehl", "Vanilleeis"]
  },
  {
      "name": "Helado Artesano",
      "price": 4.00,
      "description": "Hausgemachtes Eis in verschiedenen Geschmacksrichtungen, wie Schokolade, Vanille oder Erdbeere.",
      "ingredients": ["Milch", "Zucker", "Vanille", "Erdbeeren", "Schokolade"]
  },
  {
      "name": "Panna Cotta",
      "price": 6.00,
      "description": "Italienisches Dessert aus Sahne, Zucker und Vanille, serviert mit einer Fruchtsauce.",
      "ingredients": ["Sahne", "Zucker", "Vanille", "Gelatine", "Früchte"]
  }
];


