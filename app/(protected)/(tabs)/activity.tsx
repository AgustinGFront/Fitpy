import { ScrollView, StyleSheet, Text, View } from "react-native";

/* ===========================
   DATA (MOCK)
=========================== */
const WEEKLY_STEPS = [
  { day: "Lun", steps: 8200 },
  { day: "Mar", steps: 5400 },
  { day: "Mié", steps: 10300 },
  { day: "Jue", steps: 4200 },
  { day: "Vie", steps: 9800 },
  { day: "Sáb", steps: 6100 },
  { day: "Dom", steps: 7500 },
];

const DAILY_GOAL = 10000;

/* ===========================
   SCREEN
=========================== */
export default function ActivityScreen() {
  const todaySteps = 7342;
  const progress = Math.min(todaySteps / DAILY_GOAL, 1);
  const percentage = Math.round(progress * 100);
  const remainingSteps = Math.max(DAILY_GOAL - todaySteps, 0);

  const weeklyTotal = WEEKLY_STEPS.reduce(
    (acc, day) => acc + day.steps,
    0
  );

  const maxWeekSteps = Math.max(...WEEKLY_STEPS.map(d => d.steps));

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Actividad</Text>
          <Text style={styles.date}>Miércoles 8 de enero</Text>
        </View>

        {/* PASOS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pasos de hoy</Text>

          <Text style={styles.steps}>
            {todaySteps.toLocaleString()}
          </Text>

          <Text style={styles.percentage}>
            {percentage}% de tu meta diaria
          </Text>

          <Text style={styles.subtitle}>
            Te faltan {remainingSteps.toLocaleString()} pasos
          </Text>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress * 100}%` },
              ]}
            />
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>5.4 km</Text>
            <Text style={styles.statLabel}>Distancia</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>312 kcal</Text>
            <Text style={styles.statLabel}>Calorías</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>1h 12m</Text>
            <Text style={styles.statLabel}>Tiempo</Text>
          </View>
        </View>

        {/* CONSTANCIA */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Constancia semanal</Text>
          <Text style={styles.consistency}>
            5 / 7 días activos
          </Text>
        </View>

        {/* SEMANA */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Esta semana</Text>

          <Text style={styles.weeklyTotal}>
            {weeklyTotal.toLocaleString()} pasos esta semana
          </Text>

          <View style={styles.graph}>
            {WEEKLY_STEPS.map(item => (
              <View key={item.day} style={styles.barContainer}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: `${(item.steps / maxWeekSteps) * 100}%`,
                      opacity:
                        item.steps === maxWeekSteps ? 1 : 0.35,
                    },
                  ]}
                />
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>
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

  scrollContent: {
    paddingTop: 56,
    paddingHorizontal: 16,
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#0ff789",
    marginBottom: 6,
  },

  date: {
    color: "#777",
  },

  card: {
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    opacity: 0.8,
  },

  steps: {
    color: "#0ff789",
    fontSize: 36,
    fontWeight: "bold",
  },

  percentage: {
    color: "#0ff789",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "600",
  },

  subtitle: {
    color: "#aaa",
    marginTop: 4,
  },

  progressBackground: {
    height: 10,
    backgroundColor: "#222",
    borderRadius: 6,
    marginTop: 16,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#0ff789",
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
  },

  statValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#777",
    fontSize: 11,
    marginTop: 4,
  },

  consistency: {
    color: "#0ff789",
    fontSize: 18,
    fontWeight: "bold",
  },

  weeklyTotal: {
    color: "#777",
    fontSize: 12,
    marginBottom: 22, // 👈 más aire
  },

  graph: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 140, // 👈 gráfico más bajo
    gap: 10,
    paddingTop: 8,
  },

  barContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  bar: {
    width: "100%",
    backgroundColor: "#0ff789",
    borderRadius: 6,
  },

  barLabel: {
    color: "#777",
    fontSize: 10, // 👈 referencia más chica
    marginTop: 6,
  },
});
