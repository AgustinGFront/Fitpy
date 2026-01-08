// app/(protected)/tabs/activity.tsx
import { StyleSheet, Text, View } from "react-native";

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad</Text>
      <Text style={styles.text}>Aquí podrás ver tu actividad diaria.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000" 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0ff789",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
