import { searchGenericFoods } from "./Genericfoods";
import { searchOpenFoodFacts } from "./OpenFoodFacts";

export type FoodResult = {
  id: string;
  name: string;
  caloriesPer100g: number;
  source: "generic" | "brand";
};

export type NutritionSearchResult = {
  generics: FoodResult[];
  brands: FoodResult[];
};

export async function searchNutrition(
  query: string
): Promise<NutritionSearchResult> {
  const q = query.toLowerCase().trim();

  if (q.length < 2) {
    return { generics: [], brands: [] };
  }

  // 1️⃣ GENÉRICOS (local, instantáneo)
  const generics = searchGenericFoods(q)
    .sort((a, b) => a.caloriesPer100g - b.caloriesPer100g)
    .map((f) => ({
      ...f,
      source: "generic" as const,
    }));

  // 2️⃣ PRODUCTOS DE MARCA (OpenFoodFacts)
  const brandsRaw = await searchOpenFoodFacts(q);

  const brands = brandsRaw.map((b) => ({
    ...b,
    source: "brand" as const,
  }));

  return {
    generics,
    brands,
  };
}
