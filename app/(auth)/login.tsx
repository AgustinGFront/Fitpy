import { Ionicons } from "@expo/vector-icons";
import { auth } from "../../src/lib/firebase";
import { useGoogleAuth } from "../../src/lib/googleAuth";

import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const { signInWithGoogle, disabled } = useGoogleAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Iniciar sesión</Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password con ojito */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
<Ionicons
  name={showPassword ? "eye-off-outline" : "eye-outline"}
  size={17}
  color="#666"
/>

        </TouchableOpacity>
      </View>

      {/* Login normal */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Ingresando..." : "Ingresar"}
        </Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>o</Text>
        <View style={styles.line} />
      </View>

      {/* GOOGLE LOGIN */}
      <TouchableOpacity
        style={styles.googleButton}
        activeOpacity={0.85}
        onPress={signInWithGoogle}
        disabled={disabled}
      >
        <Image
          source={require("../../assets/images/google-icon.png")}
          style={styles.googleLogo}
          resizeMode="contain"
        />
        <Text style={styles.googleText}>Continuar con Google</Text>
      </TouchableOpacity>

      {/* Register link */}
      <TouchableOpacity onPress={() => router.replace("/(auth)/register")}>
        <Text style={styles.link}>
          ¿No tenés cuenta? Registrate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#0ff789",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    color: "#000",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 16,
    color: "#000",
  },
  eyeButton: {
    padding: 8,
  },
  eyeText: {
    fontSize: 18,
  },

  button: {
    backgroundColor: "#0ff789",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 16,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#333",
  },
  separatorText: {
    width: 40,
    textAlign: "center",
    color: "#f4f4f4",
  },

  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DADCE0",
    borderRadius: 6,
    height: 48,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  googleLogo: {
    width: 18,
    height: 18,
    position: "absolute",
    left: 16,
  },
  googleText: {
    fontSize: 15,
    fontWeight: "900",
    color: "#000000",
  },

  link: {
    color: "#f4f4f4",
    textAlign: "center",
    opacity: 0.7,
    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 24,
  },
});
