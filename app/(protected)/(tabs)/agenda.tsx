// app/(protected)/tabs/agenda.tsx
import { StyleSheet, Text, View } from "react-native";

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.text}>Aquí podrás ver tus citas y recordatorios.</Text>
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
