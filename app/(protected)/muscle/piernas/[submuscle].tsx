import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { DIFFICULTY_INFO } from "../../../../src/lib/dificulty";
import { EXERCISES_BY_SUBMUSCLE_LEG } from "../../../../src/lib/exercises";


/* ===========================
   NOMBRES DISPLAY
=========================== */
const SUBMUSCLE_NAMES: Record<string, string> = {
  cuadriceps: "Cuádriceps",
  isquiotibiales: "Isquiotibiales",
  gluteos: "Glúteos",
  pantorrillas: "Pantorrillas",
};

/* ===========================
   SCREEN
=========================== */
export default function SubmuscleScreen() {
  const params = useLocalSearchParams();

  const submuscleKey =
    typeof params.submuscle === "string" ? params.submuscle : "";

  const exercises = EXERCISES_BY_SUBMUSCLE_LEG[submuscleKey] ?? [];

  const title = SUBMUSCLE_NAMES[submuscleKey] || submuscleKey;

  const [selectedDifficulty, setSelectedDifficulty] =
    useState<keyof typeof DIFFICULTY_INFO | null>(null);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={router.back} style={styles.back}>
          <Ionicons name="arrow-back" size={22} color="#0ff789" />
        </Pressable>

        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          {exercises.length} ejercicios disponibles
        </Text>

        {exercises.map((ex) => (
          <Pressable key={ex.id} style={styles.card}>
            <View style={styles.accent} />

            <View style={styles.cardContent}>
              <View style={styles.topRow}>
                <Text style={styles.exercise}>{ex.name}</Text>
                
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#0ff789"
                  style={styles.chevron}
                />
              </View>

              {/* EQUIPMENT TAGS */}
              <View style={styles.tagsContainer}>
                {(Array.isArray(ex.equipment)
                  ? ex.equipment
                  : [ex.equipment]
                ).map((eq: string) => (
               <View key={eq} style={styles.equipmentBadge}>
  <Text style={styles.equipmentText}>{eq}</Text>
</View>

                ))}
              </View>
            </View>

            {/* BADGE CLICKEABLE */}
            <Pressable
              onPress={() => setSelectedDifficulty(ex.difficulty as keyof typeof DIFFICULTY_INFO)}
              style={[
                styles.difficultyBadge,
                styles.difficultyFixed,
                ex.difficulty === "Principiante" &&
                  styles.difficultyEasy,
                ex.difficulty === "Intermedio" &&
                  styles.difficultyMedium,
                ex.difficulty === "Avanzado" &&
                  styles.difficultyHard,
              ]}
            >
              <Text
                style={[
                  styles.difficultyText,
                  ex.difficulty === "Principiante" && {
                    color: "#0ff789",
                  },
                  ex.difficulty === "Intermedio" && {
                    color: "#ffa751",
                  },
                  ex.difficulty === "Avanzado" && {
                    color: "#ff6b6b",
                  },
                ]}
              >
                {ex.difficulty}
              </Text>
            </Pressable>
          </Pressable>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* MODAL DE INFORMACIÓN */}
      <Modal
        visible={selectedDifficulty !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedDifficulty(null)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setSelectedDifficulty(null)}
        >
          <View style={styles.modalContent}>
            {selectedDifficulty && (
              <>
                {/* HEADER DEL MODAL */}
                <View style={styles.modalHeader}>
                  <View
                    style={[
                      styles.modalBadge,
                      selectedDifficulty === "Principiante" &&
                        styles.difficultyEasy,
                      selectedDifficulty === "Intermedio" &&
                        styles.difficultyMedium,
                      selectedDifficulty === "Avanzado" &&
                        styles.difficultyHard,
                    ]}
                  >
                    <Text
                      style={[
                        styles.modalBadgeText,
                        selectedDifficulty === "Principiante" && {
                          color: "#0ff789",
                        },
                        selectedDifficulty === "Intermedio" && {
                          color: "#ffa751",
                        },
                        selectedDifficulty === "Avanzado" && {
                          color: "#ff6b6b",
                        },
                      ]}
                    >
                      {DIFFICULTY_INFO[selectedDifficulty].title}
                    </Text>
                  </View>

                  <Pressable
                    onPress={() => setSelectedDifficulty(null)}
                    style={styles.closeButton}
                  >
                    <Ionicons name="close" size={24} color="#888" />
                  </Pressable>
                </View>

                {/* DESCRIPCIÓN */}
                <Text style={styles.modalDescription}>
                  {DIFFICULTY_INFO[selectedDifficulty].description}
                </Text>

                {/* FACTORES */}
                <Text style={styles.factorsTitle}>Características:</Text>
                {DIFFICULTY_INFO[selectedDifficulty].factors.map((factor, idx) => (
                  <View key={idx} style={styles.factorItem}>
                    <View
                      style={[
                        styles.factorDot,
                        selectedDifficulty === "Principiante" && {
                          backgroundColor: "#0ff789",
                        },
                        selectedDifficulty === "Intermedio" && {
                          backgroundColor: "#ffa751",
                        },
                        selectedDifficulty === "Avanzado" && {
                          backgroundColor: "#ff6b6b",
                        },
                      ]}
                    />
                    <Text style={styles.factorText}>{factor}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </Pressable>
      </Modal>
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
  },

  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#111",
    borderRadius: 14,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#0ff78933",
    position: "relative",
    minHeight: 100,
  },

  accent: {
    width: 4,
    alignSelf: "stretch",
    backgroundColor: "#0ff789",
    borderRadius: 2,
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
    paddingRight: 12,
    paddingBottom: 32,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  exercise: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    flex: 1,
    paddingRight: 8,
  },

  chevron: {
    marginTop: 2,
  },

  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
    paddingRight: 100,
  },

  equipmentBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },

  equipmentText: {
    fontSize: 10,
    color: "#888",
    fontWeight: "500",
  },

  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    minWidth: 85,
  },

  difficultyFixed: {
    position: "absolute",
    bottom: 14,
    right: 14,
  },

  difficultyEasy: {
    backgroundColor: "#0ff78920",
    borderColor: "#0ff789",
  },

  difficultyMedium: {
    backgroundColor: "#ffa75120",
    borderColor: "#ffa751",
  },

  difficultyHard: {
    backgroundColor: "#ff6b6b20",
    borderColor: "#ff6b6b",
  },

  difficultyText: {
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "#111",
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "#0ff78933",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  modalBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },

  modalBadgeText: {
    fontSize: 16,
    fontWeight: "700",
  },

  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },

  modalDescription: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 22,
    marginBottom: 24,
  },

  factorsTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 12,
  },

  factorItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  factorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 12,
  },

  factorText: {
    fontSize: 13,
    color: "#aaa",
    flex: 1,
  },
});