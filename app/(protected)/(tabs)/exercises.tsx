// app/(protected)/(tabs)/exercises.tsx
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { EXERCISES_BY_MUSCLE, TOTAL_LEG_EXERCISES } from "../../../src/lib/exercises";
import { MUSCLE_ICONS } from "../../../src/lib/muscleicons";


const MUSCLES = [
  { key: "pecho", label: "Pecho" },
  { key: "espalda", label: "Espalda" },
  { key: "piernas", label: "Piernas" },
  { key: "gluteos", label: "Glúteos" },
  { key: "biceps", label: "Bíceps" },
  { key: "triceps", label: "Tríceps" },
  { key: "hombros", label: "Hombros" },
  { key: "abdomen", label: "Abdomen" },
];

export default function ExercisesScreen() {
  const [pressedCard, setPressedCard] = useState<string | null>(null);

  const handlePress = (muscleKey: string) => {
    router.push(`/muscle/${muscleKey}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Ejercicios</Text>
          <Text style={styles.subtitle}>
            Selecciona el grupo muscular
          </Text>
        </View>

        {/* Cards Grid */}
        <View style={styles.grid}>
          {MUSCLES.map((muscle) => {
const Icon = MUSCLE_ICONS[muscle.key];


            return (
            <Pressable
  key={muscle.key}
  onPress={() => handlePress(muscle.key)}
  onPressIn={() => setPressedCard(muscle.key)}
  onPressOut={() => setPressedCard(null)}
  style={[
    styles.card,
    pressedCard === muscle.key && styles.cardPressed,
  ]}
>
  {/* SVG ICON */}
  <Icon
    width={36}
    height={36}
    color="#0ff789"
    style={{ marginBottom: 12 }}
  />

{/* Content */}
<View style={styles.cardContent}>
  <Text style={styles.cardText}>{muscle.label}</Text>

  <View style={styles.badge}>
    <Text style={styles.badgeText}>
      {muscle.key === "piernas"
        ? TOTAL_LEG_EXERCISES
        : EXERCISES_BY_MUSCLE[muscle.key]?.length || 0}{" "}
      ejercicios
    </Text>
  </View>
</View>



  {/* Arrow */}
  <View style={styles.arrowContainer}>
    <Ionicons
      name="chevron-forward"
      size={20}
      color="#0ff789"
    />
  </View>
</Pressable>

            );
          })}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  scrollContent: {
    paddingTop: 56,
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0ff789",
    marginBottom: 6,
    letterSpacing: -0.8,
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    fontWeight: "400",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* CARD */
  card: {
    width: "48%",
    height: 165,
    backgroundColor: "#0c0c0c",
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#0ff78925",

    shadowColor: "#0ff789",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    elevation: 6,
    justifyContent: "space-between",
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.85,
    borderColor: "#0ff789",
  },

  /* CONTENT */
  cardContent: {
    marginTop: 6,
  },

  cardText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 12,
    letterSpacing: -0.3,
  },

  /* BADGE */
  badge: {
    backgroundColor: "#0ff78918",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#0ff78955",
  },

  badgeText: {
    color: "#0ff789",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },

  /* ARROW */
  arrowContainer: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#0ff78922",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomSpacing: {
    height: 48,
  },
});

// [[const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//   },
//   scrollContent: {
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   header: {
//     marginBottom: 32,
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: "900",
//     color: "#fff",
//     marginBottom: 8,
//     letterSpacing: -1,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#888",
//     fontWeight: "500",
//     letterSpacing: -0.2,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   card: {
//     width: "48%",
//     height: 180,
//     backgroundColor: "#0a0a0a",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1.5,
//     borderColor: "#1a1a1a",
//     overflow: "hidden",
//     position: "relative",
//   },
//   cardPressed: {
//     transform: [{ scale: 0.97 }],
//     borderColor: "#0ff78960",
//   },
//   cardGradient: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "50%",
//     backgroundColor: "#0ff78908",
//     borderRadius: 20,
//   },
//   iconContainer: {
//     width: 72,
//     height: 72,
//     borderRadius: 18,
//     backgroundColor: "#0ff78915",
//     borderWidth: 1,
//     borderColor: "#0ff78925",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   cardContent: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "#fff",
//     letterSpacing: -0.5,
//   },
//   cardFooter: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   exerciseInfo: {
//     flexDirection: "row",
//     alignItems: "baseline",
//     gap: 6,
//   },
//   exerciseCount: {
//     fontSize: 24,
//     fontWeight: "800",
//     color: "#0ff789",
//   },
//   exerciseLabel: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#666",
//     letterSpacing: -0.2,
//   },
//   arrowContainer: {
//     width: 32,
//     height: 32,
//     borderRadius: 10,
//     backgroundColor: "#0ff78915",
//     borderWidth: 1,
//     borderColor: "#0ff78925",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   glowEffect: {
//     position: "absolute",
//     top: -50,
//     left: -50,
//     right: -50,
//     bottom: -50,
//     backgroundColor: "#0ff78905",
//     borderRadius: 100,
//   },
//   bottomSpacing: {
//     height: 40,
//   },
// });
