import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ProgressRing from "../../../src/components/ProgressRing";
import { MealType, useNutrition } from "../../../src/context/NutritionContext";


const DAILY_GOAL = 2200;

const MEALS: MealType[] = [
  "desayuno",
  "almuerzo",
  "merienda",
  "cena",
  "snack",
];

export default function NutritionScreen() {
  const {
    getMealsForToday,
    getTotalCaloriesForToday,
    removeFood,
  } = useNutrition();

  const meals = getMealsForToday();
  const totalCalories = getTotalCaloriesForToday();

  const progress = Math.min(totalCalories / DAILY_GOAL, 1);
  const remaining = Math.max(DAILY_GOAL - totalCalories, 0);
  const percent = Math.round(progress * 100);

  const mealsByType = (type: MealType) =>
    meals.filter((m) => m.mealType === type);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* HEADER */}
        <Text style={styles.title}>Nutrición</Text>

        {/* PROGRESS */}
        <View style={styles.progressCard}>
          <ProgressRing
            size={160}
            strokeWidth={14}
            progress={progress}
            color="#0ff789"
            backgroundColor="#222"
          />

          <Text style={styles.kcal}>
            {totalCalories > 0 ? `${totalCalories} kcal` : `${percent}%`}
          </Text>

          <Text style={styles.sub}>
            {remaining} kcal restantes
          </Text>
        </View>

        {/* MEALS */}
        {MEALS.map((mealType) => {
          const list = mealsByType(mealType);

          return (
            <View key={mealType} style={styles.mealCard}>
              <View style={styles.mealHeader}>
                <Text style={styles.mealTitle}>
                  {mealType.toUpperCase()}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    router.push(
                      `/nutrition/add_manual?mealType=${mealType}`
                    )
                  }
                >
                  <Text style={styles.addSmall}>＋</Text>
                </TouchableOpacity>
              </View>

              {list.length === 0 && (
                <Text style={styles.empty}>
                  Sin alimentos
                </Text>
              )}

              {list.map((meal) => (
                <View key={meal.id} style={styles.foodRow}>
                  <View>
                    <Text style={styles.foodName}>
                      {meal.name}
                    </Text>
                    <Text style={styles.foodSub}>
                      {meal.grams} g · {meal.preparation}
                    </Text>
                  </View>

                  <View style={styles.right}>
                    <Text style={styles.foodKcal}>
                      {meal.calories} kcal
                    </Text>

                    <TouchableOpacity
                      onPress={() => removeFood(meal.id)}
                    >
                      <Text style={styles.delete}>
                        Eliminar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scroll: {
    padding: 24,
  },
  title: {
    color: "#0ff789",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
  },
  progressCard: {
    backgroundColor: "#111",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  kcal: {
    color: "#0ff789",
    fontSize: 26,
    fontWeight: "900",
    marginTop: 10,
  },
  sub: {
    color: "#666",
    marginTop: 4,
  },

  /* MEALS */
  mealCard: {
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  mealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  mealTitle: {
    color: "#0ff789",
    fontWeight: "900",
    fontSize: 16,
  },
  addSmall: {
    color: "#0ff789",
    fontSize: 22,
    fontWeight: "900",
  },
  empty: {
    color: "#555",
    fontStyle: "italic",
  },

  /* FOOD */
  foodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  foodName: {
    color: "#fff",
    fontWeight: "700",
  },
  foodSub: {
    color: "#666",
    fontSize: 12,
  },
  right: {
    alignItems: "flex-end",
  },
  foodKcal: {
    color: "#0ff789",
    fontWeight: "800",
  },
  delete: {
    color: "#ff5555",
    fontSize: 12,
    marginTop: 4,
  },
});
