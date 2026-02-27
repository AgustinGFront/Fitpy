import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NutritionAddEntry() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar alimento</Text>

      {/* CARD MANUAL */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/nutrition/add_manual")}
      >
        <View>
          <Text style={styles.cardTitle}>
            ✍️ Ingresar manualmente
          </Text>
          <Text style={styles.cardSubtitle}>
            Escribí el alimento y sus calorías
          </Text>
        </View>
      </TouchableOpacity>

      {/* CARD SCAN */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/nutrition/scan")}
      >
        <View>
          <Text style={styles.cardTitle}>
            📷 Escanear código
          </Text>
          <Text style={styles.cardSubtitle}>
            Usar código de barras del producto
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/* ===========================
   STYLES
=========================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },

  title: {
    color: "#0ff789",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#0f0f0f",
    borderRadius: 22,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#0ff78925",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 6,
  },

  cardSubtitle: {
    color: "#777",
    fontSize: 14,
  },
});
