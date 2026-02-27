import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNutrition } from "../../../src/context/NutritionContext";

import {
  FoodPreparation,
  GenericFood,
} from "../../../src/services/Genericfoods";
import {
  calculateCalories,
  poundsToGrams,
} from "../../../src/services/nutritionHelpers";

export default function FoodDetailsScreen() {
  const { food } = useLocalSearchParams();
  const parsedFood: GenericFood = JSON.parse(food as string);

  const { addFood } = useNutrition();

  const [grams, setGrams] = useState("100");
  const [unit, setUnit] = useState<"g" | "lb">("g");
  const [prep, setPrep] = useState<FoodPreparation>(
    parsedFood.preparations?.cooked ? "cooked" : "raw"
  );

  const gramsValue = useMemo(() => {
    const v = Number(grams) || 0;
    return unit === "g" ? v : poundsToGrams(v);
  }, [grams, unit]);

  const calories = useMemo(
    () => calculateCalories(parsedFood, gramsValue, prep),
    [parsedFood, gramsValue, prep]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parsedFood.name}</Text>

      {/* PREPARACIÓN */}
      <Text style={styles.label}>Preparación</Text>
      <View style={styles.row}>
        {["raw", "cooked", "grilled"].map((p) =>
          parsedFood.preparations?.[p as FoodPreparation] ? (
            <TouchableOpacity
              key={p}
              style={[styles.chip, prep === p && styles.chipActive]}
              onPress={() => setPrep(p as FoodPreparation)}
            >
              <Text style={styles.chipText}>{p}</Text>
            </TouchableOpacity>
          ) : null
        )}
      </View>

      {/* CANTIDAD */}
      <Text style={styles.label}>Cantidad</Text>
      <View style={styles.row}>
        <TextInput
          value={grams}
          onChangeText={setGrams}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles.chip, unit === "g" && styles.chipActive]}
          onPress={() => setUnit("g")}
        >
          <Text style={styles.chipText}>g</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.chip, unit === "lb" && styles.chipActive]}
          onPress={() => setUnit("lb")}
        >
          <Text style={styles.chipText}>lb</Text>
        </TouchableOpacity>
      </View>

      {/* INFO */}
      <View style={styles.card}>
        <Text style={styles.kcal}>{Math.round(calories)} kcal</Text>
        <Text style={styles.sub}>
          por {grams} {unit} ({prep})
        </Text>
      </View>

      {/* CONFIRMAR */}
      <TouchableOpacity
        style={styles.confirm}
        onPress={() => {
          addFood({
            id: Date.now().toString(),
            name: parsedFood.name,
            grams: gramsValue,
            calories: Math.round(calories),
            preparation: prep,
            date: new Date().toISOString().split("T")[0],
            mealType: "almuerzo", // ✅ coincide con el tipo
          });

         router.replace("/(protected)/(tabs)/nutrition");

        }}
      >
        <Text style={styles.confirmText}>Agregar alimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },
  title: {
    color: "#0ff789",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 24,
  },
  label: {
    color: "#888",
    marginBottom: 8,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#222",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipActive: {
    backgroundColor: "#0ff789",
  },
  chipText: {
    color: "#fff",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 12,
    borderRadius: 12,
    minWidth: 80,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 16,
    marginTop: 10,
  },
  kcal: {
    color: "#0ff789",
    fontSize: 28,
    fontWeight: "900",
  },
  sub: {
    color: "#666",
    marginTop: 4,
  },
  confirm: {
    backgroundColor: "#0ff789",
    padding: 18,
    borderRadius: 18,
    marginTop: 30,
  },
  confirmText: {
    color: "#000",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 16,
  },
});
