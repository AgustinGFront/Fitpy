import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { MUSCLE_ICONS } from "../../../../src/lib/muscleicons";

/* ===========================
   SUBGRUPOS DE PIERNAS
=========================== */
const LEG_SUBMUSCLES = [
  {
    key: "cuadriceps",
    name: "Cuádriceps",
    description: "Parte frontal del muslo",
  },
  {
    key: "isquiotibiales",
    name: "Isquiotibiales",
    description: "Parte posterior del muslo",
  },
  {
    key: "abductores",
    name: "Abductores",
    description: "Estabilidad y apertura de cadera",
  },
  {
    key: "pantorrillas",
    name: "Pantorrillas",
    description: "Parte inferior de la pierna",
  },
];

/* ===========================
   SCREEN
=========================== */
export default function PiernasIndex() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={router.back} style={styles.back}>
          <Ionicons name="arrow-back" size={22} color="#0ff789" />
        </Pressable>

        <Text style={styles.title}>Piernas</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          {LEG_SUBMUSCLES.length} grupos musculares disponibles
        </Text>

        {LEG_SUBMUSCLES.map((item, index) => {
          const Icon = MUSCLE_ICONS[item.key];

          return (
            <Pressable
              key={item.key}
              style={[
                styles.card,
                {
                  marginBottom:
                    index === LEG_SUBMUSCLES.length - 1 ? 40 : 16,
                },
              ]}
              onPress={() =>
                router.push(`/muscle/piernas/${item.key}`)
              }
            >
              {/* SVG ICON */}
              <View style={styles.iconContainer}>
                <View style={styles.iconCircle}>
                  {Icon && (
                    <Icon
                      width={36}
                      height={36}
                      color="#0ff789"
                    />
                  )}
                </View>
              </View>

              {/* CONTENT */}
              <View style={styles.cardContent}>
                <Text style={styles.muscleName}>{item.name}</Text>
                <Text style={styles.muscleDescription}>
                  {item.description}
                </Text>
              </View>

              {/* CHEVRON */}
              <View style={styles.chevronContainer}>
                <Ionicons
                  name="chevron-forward"
                  size={28}
                  color="#0ff789"
                />
              </View>

              {/* ACCENT */}
              <View style={styles.accentBottom} />
            </Pressable>
          );
        })}
      </ScrollView>
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
  },

  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0ff789",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#0ff78933",
    position: "relative",
    overflow: "hidden",
    minHeight: 110,
  },

  iconContainer: {
    marginRight: 16,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0ff78915",
    borderWidth: 2,
    borderColor: "#0ff78950",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContent: {
    flex: 1,
    paddingRight: 12,
  },

  muscleName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },

  muscleDescription: {
    fontSize: 13,
    color: "#888",
    fontWeight: "500",
  },

  chevronContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0ff78915",
    justifyContent: "center",
    alignItems: "center",
  },

  accentBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: "#0ff789",
    opacity: 0.5,
  },
});
