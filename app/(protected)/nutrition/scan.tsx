import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNutrition } from "../../../src/context/NutritionContext";

const TODAY = new Date().toISOString().split("T")[0];

export default function ScanResultScreen() {
  const { addFood } = useNutrition();

  // ejemplo: esto normalmente viene del scan
  const scannedFood = {
    id: Date.now().toString(),
    name: "Banana",
    calories: 105,
  };

  const handleAdd = (mealType: "Desayuno" | "Almuerzo" | "Merienda" | "Cena") => {
    addFood(TODAY, mealType, scannedFood);

    router.back(); // vuelve a nutrition
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Dónde lo agregamos?</Text>

      {["Desayuno", "Almuerzo", "Merienda", "Cena"].map(meal => (
        <TouchableOpacity
          key={meal}
          style={styles.button}
          onPress={() => handleAdd(meal as any)}
        >
          <Text style={styles.buttonText}>{meal}</Text>
        </TouchableOpacity>
      ))}
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#0ff789",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 16,
    textAlign: "center",
  },
});
