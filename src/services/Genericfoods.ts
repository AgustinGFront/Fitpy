export type FoodPreparation = "raw" | "cooked" | "grilled" | "fried" | "baked";

export type GenericFood = {
  id: string;
  name: string;
  caloriesPer100g: number;
  preparations?: Partial<Record<FoodPreparation, number>>;
};


export type GenericFoodGroup = {
  keywords: string[];
  foods: GenericFood[];
};

export const GENERIC_FOODS: GenericFoodGroup[] = [
  /* =========================
     🥩 PROTEÍNAS MAGRAS
  ========================= */

  {
    keywords: ["huevo", "huevos", "egg"],
    foods: [
      { id: "egg_whole", name: "Huevo entero", caloriesPer100g: 155 },
      { id: "egg_boiled", name: "Huevo duro", caloriesPer100g: 155 },
      { id: "egg_fried", name: "Huevo frito", caloriesPer100g: 196 },
      { id: "egg_scrambled", name: "Huevo revuelto", caloriesPer100g: 166 },
      { id: "egg_white", name: "Clara de huevo", caloriesPer100g: 52 },
    ],
  },

  {
    keywords: ["pollo", "chicken"],
    foods: [
      { id: "chicken_breast_raw", name: "Pechuga de pollo cruda", caloriesPer100g: 120 },
      { id: "chicken_breast_grilled", name: "Pechuga de pollo a la plancha", caloriesPer100g: 165 },
      { id: "chicken_breast_boiled", name: "Pechuga de pollo hervida", caloriesPer100g: 160 },
      { id: "chicken_thigh", name: "Muslo de pollo", caloriesPer100g: 209 },
    ],
  },

  {
    keywords: ["pavo", "turkey"],
    foods: [
      { id: "turkey_breast", name: "Pechuga de pavo", caloriesPer100g: 135 },
    ],
  },

  {
    keywords: ["carne", "res", "vacuno", "beef"],
    foods: [
      { id: "beef_lean", name: "Carne de res magra", caloriesPer100g: 210 },
      { id: "beef_grilled", name: "Carne de res a la plancha", caloriesPer100g: 270 },
      { id: "beef_boiled", name: "Carne de res hervida", caloriesPer100g: 240 },
      { id: "beef_ground_lean", name: "Carne picada magra", caloriesPer100g: 215 },
    ],
  },

  {
    keywords: ["cerdo", "pork"],
    foods: [
      { id: "pork_lean", name: "Cerdo magro", caloriesPer100g: 242 },
      { id: "pork_grilled", name: "Cerdo a la plancha", caloriesPer100g: 271 },
    ],
  },

  {
    keywords: ["pescado", "fish"],
    foods: [
      { id: "fish_white", name: "Pescado blanco", caloriesPer100g: 120 },
      { id: "salmon", name: "Salmón", caloriesPer100g: 208 },
      { id: "tuna", name: "Atún", caloriesPer100g: 132 },
      { id: "sardine", name: "Sardinas", caloriesPer100g: 208 },
    ],
  },

  {
    keywords: ["legumbres", "lentejas", "garbanzos"],
    foods: [
      { id: "lentils_cooked", name: "Lentejas cocidas", caloriesPer100g: 116 },
      { id: "chickpeas_cooked", name: "Garbanzos cocidos", caloriesPer100g: 164 },
      { id: "beans_cooked", name: "Porotos cocidos", caloriesPer100g: 127 },
    ],
  },

  /* =========================
     🍚 CARBOHIDRATOS COMPLEJOS
  ========================= */

  {
    keywords: ["arroz", "rice"],
    foods: [
      { id: "rice_white_cooked", name: "Arroz blanco cocido", caloriesPer100g: 130 },
      { id: "rice_brown_cooked", name: "Arroz integral cocido", caloriesPer100g: 123 },
    ],
  },

  {
    keywords: ["avena", "oats"],
    foods: [
      { id: "oats_raw", name: "Avena cruda", caloriesPer100g: 389 },
      { id: "oats_cooked", name: "Avena cocida", caloriesPer100g: 71 },
    ],
  },

  {
    keywords: ["pasta", "fideos"],
    foods: [
      { id: "pasta_cooked", name: "Pasta cocida", caloriesPer100g: 131 },
      { id: "pasta_whole", name: "Pasta integral cocida", caloriesPer100g: 124 },
    ],
  },

  {
    keywords: ["pan", "bread"],
    foods: [
      { id: "bread_white", name: "Pan blanco", caloriesPer100g: 265 },
      { id: "bread_whole", name: "Pan integral", caloriesPer100g: 247 },
    ],
  },

  {
    keywords: ["papa", "patata", "potato"],
    foods: [
      { id: "potato_raw", name: "Papa cruda", caloriesPer100g: 77 },
      { id: "potato_boiled", name: "Papa hervida", caloriesPer100g: 87 },
      { id: "potato_baked", name: "Papa al horno", caloriesPer100g: 93 },
    ],
  },

  {
    keywords: ["quinoa"],
    foods: [
      { id: "quinoa_cooked", name: "Quinoa cocida", caloriesPer100g: 120 },
    ],
  },

  /* =========================
     🥑 GRASAS SALUDABLES
  ========================= */

  {
    keywords: ["aceite", "oil"],
    foods: [
      { id: "olive_oil", name: "Aceite de oliva", caloriesPer100g: 884 },
      { id: "coconut_oil", name: "Aceite de coco", caloriesPer100g: 862 },
    ],
  },

  {
    keywords: ["frutos secos", "nueces", "almendras"],
    foods: [
      { id: "almonds", name: "Almendras", caloriesPer100g: 579 },
      { id: "walnuts", name: "Nueces", caloriesPer100g: 654 },
      { id: "cashews", name: "Castañas de cajú", caloriesPer100g: 553 },
      { id: "peanuts", name: "Maní", caloriesPer100g: 567 },
    ],
  },

  {
    keywords: ["semillas", "chia", "linaza"],
    foods: [
      { id: "chia", name: "Semillas de chía", caloriesPer100g: 486 },
      { id: "flaxseed", name: "Semillas de lino", caloriesPer100g: 534 },
    ],
  },

  {
    keywords: ["palta", "aguacate", "avocado"],
    foods: [
      { id: "avocado", name: "Palta", caloriesPer100g: 160 },
    ],
  },

  /* =========================
     🧀 LÁCTEOS
  ========================= */

  {
    keywords: ["leche", "milk"],
    foods: [
      { id: "milk_whole", name: "Leche entera", caloriesPer100g: 60 },
      { id: "milk_skim", name: "Leche descremada", caloriesPer100g: 34 },
      { id: "almond_milk", name: "Leche de almendras", caloriesPer100g: 13 },
    ],
  },

  {
    keywords: ["yogur", "yogurt"],
    foods: [
      { id: "yogurt_natural", name: "Yogur natural", caloriesPer100g: 59 },
      { id: "yogurt_greek", name: "Yogur griego natural", caloriesPer100g: 97 },
    ],
  },

  {
    keywords: ["queso", "cheese"],
    foods: [
      { id: "cheese_fresh", name: "Queso fresco", caloriesPer100g: 264 },
      { id: "cheese_cottage", name: "Queso cottage", caloriesPer100g: 98 },
      { id: "cheese_mozzarella", name: "Queso mozzarella", caloriesPer100g: 280 },
    ],
  },

  /* =========================
     🍎 FRUTAS
  ========================= */

  {
    keywords: ["banana"],
    foods: [{ id: "banana", name: "Banana", caloriesPer100g: 89 }],
  },
  {
    keywords: ["manzana", "apple"],
    foods: [{ id: "apple", name: "Manzana", caloriesPer100g: 52 }],
  },
  {
    keywords: ["frutilla", "fresa"],
    foods: [{ id: "strawberry", name: "Frutillas", caloriesPer100g: 32 }],
  },
  {
    keywords: ["arándano", "blueberry"],
    foods: [{ id: "blueberry", name: "Arándanos", caloriesPer100g: 57 }],
  },

  /* =========================
     🥦 VERDURAS
  ========================= */

  {
    keywords: ["brocoli", "brócoli"],
    foods: [{ id: "broccoli", name: "Brócoli", caloriesPer100g: 34 }],
  },
  {
    keywords: ["espinaca"],
    foods: [{ id: "spinach", name: "Espinaca", caloriesPer100g: 23 }],
  },
  {
    keywords: ["zapallito", "zucchini"],
    foods: [{ id: "zucchini", name: "Zapallito", caloriesPer100g: 17 }],
  },

  /* =========================
     💊 SUPLEMENTOS
  ========================= */

  {
    keywords: ["proteina", "whey"],
    foods: [
      { id: "whey_protein", name: "Proteína en polvo (whey)", caloriesPer100g: 400 },
      { id: "plant_protein", name: "Proteína vegetal", caloriesPer100g: 380 },
    ],
  },
];

export function searchGenericFoods(query: string): GenericFood[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  for (const group of GENERIC_FOODS) {
    if (group.keywords.some((k) => q.includes(k))) {
      return [...group.foods].sort(
        (a, b) => a.caloriesPer100g - b.caloriesPer100g
      );
    }
  }

  return [];
}
