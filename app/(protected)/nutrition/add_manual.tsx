import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  GenericFood,
  searchGenericFoods,
} from "../../../src/services/Genericfoods";

type Item =
  | { type: "title"; title: string }
  | { type: "food"; food: GenericFood };

export default function AddManualFoodScreen() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  const onSearch = (text: string) => {
    setQuery(text);

    if (text.trim().length < 2) {
      setItems([]);
      return;
    }

    const genericFoods = searchGenericFoods(text);

    const list: Item[] = [];

    if (genericFoods.length > 0) {
      list.push({ type: "title", title: "Genéricos" });
      genericFoods.forEach((f) =>
        list.push({ type: "food", food: f })
      );
    }

    setItems(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar alimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Ej: huevo, papa, arroz…"
        placeholderTextColor="#666"
        value={query}
        onChangeText={onSearch}
      />

      <FlatList
        data={items}
        keyExtractor={(_, i) => i.toString()}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) =>
          item.type === "title" ? (
            <Text style={styles.section}>{item.title}</Text>
          ) : (
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                router.push({
                  pathname: "/nutrition/food_details",
                  params: {
                    food: JSON.stringify(item.food),
                  },
                })
              }
            >
              <Text style={styles.name}>{item.food.name}</Text>
              <Text style={styles.kcal}>
                {item.food.caloriesPer100g} kcal / 100 g
              </Text>
            </TouchableOpacity>
          )
        }
      />
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
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 16,
    color: "#fff",
    marginBottom: 16,
  },
  section: {
    color: "#888",
    marginTop: 18,
    marginBottom: 6,
    fontWeight: "700",
  },
  row: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
  name: {
    color: "#fff",
    fontWeight: "600",
  },
  kcal: {
    color: "#0ff789",
    fontSize: 13,
    marginTop: 2,
  },
});
