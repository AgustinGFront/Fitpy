import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

import { useColorScheme } from "../hooks/use-color-scheme";
import { AuthProvider, useAuth } from "../src/context/AuthContext";

function AuthGate() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const [splashDone, setSplashDone] = useState(false);

  // ⏱ splash mínimo (ajustá el tiempo si querés)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
    }, 2000); // 1.8 segundos

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || !splashDone) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inProtectedGroup = segments[0] === "(protected)";

    if (!user && inProtectedGroup) {
      router.replace("/(auth)/login");
    }

    if (user && inAuthGroup) {
      router.replace("/(protected)/(tabs)/home");
    }
  }, [user, loading, splashDone, router, segments]);

  // 🎨 SPLASH FULLSCREEN
  if (loading || !splashDone) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar style="light" backgroundColor="#000000" />

        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 160,
            height: 160,
          }}
          resizeMode="contain"
        />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthGate />
      </ThemeProvider>
    </AuthProvider>
  );
}
