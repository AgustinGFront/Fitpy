import { FoodPreparation, GenericFood } from "./Genericfoods";

export function gramsToPounds(grams: number) {
  return grams / 453.592;
}

export function poundsToGrams(pounds: number) {
  return pounds * 453.592;
}

export function getCaloriesByPreparation(
  food: GenericFood,
  prep: FoodPreparation
) {
  return food.preparations?.[prep] ?? food.caloriesPer100g;
}

export function calculateCalories(
  food: GenericFood,
  grams: number,
  prep: FoodPreparation
) {
  const kcal100 = getCaloriesByPreparation(food, prep);
  return (kcal100 * grams) / 100;
}
