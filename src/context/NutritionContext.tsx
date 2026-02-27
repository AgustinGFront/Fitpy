import { createContext, useContext, useState } from "react";
import { GenericFood } from "../services/Genericfoods";

export interface RecentFood {
  id: string;
  name: string;
  food: GenericFood;
}


export type MealType =
  | "desayuno"
  | "almuerzo"
  | "merienda"
  | "cena"
  | "snack";

export interface FoodEntry {
  id: string;
  name: string;
  grams: number;
  calories: number;
  preparation: string;
  date: string; // YYYY-MM-DD
  mealType: MealType;
}

interface NutritionContextType {
  foods: FoodEntry[];
  addFood: (food: FoodEntry) => void;
  removeFood: (id: string) => void;
  getMealsForToday: () => FoodEntry[];
  getTotalCaloriesForToday: () => number;
}

const NutritionContext = createContext<NutritionContextType | null>(null);

export function NutritionProvider({ children }: { children: React.ReactNode }) {
  const [foods, setFoods] = useState<FoodEntry[]>([]);

  const today = new Date().toISOString().split("T")[0];

  const addFood = (food: FoodEntry) => {
    setFoods((prev) => [...prev, food]);
  };

  const removeFood = (id: string) => {
    setFoods((prev) => prev.filter((f) => f.id !== id));
  };

  const getMealsForToday = () =>
    foods.filter((f) => f.date === today);

  const getTotalCaloriesForToday = () =>
    getMealsForToday().reduce((sum, f) => sum + f.calories, 0);

  return (
    <NutritionContext.Provider
      value={{
        foods,
        addFood,
        removeFood,
        getMealsForToday,
        getTotalCaloriesForToday,
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
}


export function useNutrition() {
  const ctx = useContext(NutritionContext);
  if (!ctx) {
    throw new Error("useNutrition must be used inside NutritionProvider");
  }
  return ctx;
}
