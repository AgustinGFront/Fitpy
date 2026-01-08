import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ff789",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#000",
          height: 72 + insets.bottom,   // 👈 proporción IG + texto
          paddingBottom: insets.bottom,
          borderTopWidth: 0,            // 👈 quita línea gris
          elevation: 0,                 // 👈 Android
        },
        tabBarLabelStyle: {
          fontSize: 11,                 // 👈 estilo Instagram
          marginBottom: 6,
        },
        tabBarIconStyle: {
          marginTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Ejercicios",
          tabBarIcon: ({ color }) => (
            <Ionicons name="barbell-outline" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrición",
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant-outline" color={color} size={28} />
          ),
        }}
      />
            <Tabs.Screen
        name="activity"
        options={{
          title: "Actividad",
          tabBarIcon: ({ color }) => (
            <Ionicons name="pulse-outline" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={focused ? 32 : 28} // 👈 home destaca
            />
          ),
        }}
      />

            <Tabs.Screen
        name="registers"
        options={{
          title: "Registro",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text-outline" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
