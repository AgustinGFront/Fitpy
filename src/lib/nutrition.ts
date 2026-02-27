// Tipos base para Nutrition (SIN React)

export type MealType =
  | "Desayuno"
  | "Almuerzo"
  | "Merienda"
  | "Cena";

export interface FoodItem {
  id: string;
  name: string;
  calories: number;      // kcal totales del item
  quantity: number;      // cantidad seleccionada
  unit?: string;         // g, ml, unidad (opcional)
}

export interface Meal {
  type: MealType;
  items: FoodItem[];
}
