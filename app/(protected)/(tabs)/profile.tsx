import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../src/lib/firebase";

export default function ProfileScreen() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/(auth)/login");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* FOTO PERFIL */}
      <View style={styles.avatarWrapper}>
        <Image
          source={
            image
              ? { uri: image }
              : require("../../../assets/images/icon.png")
          }
          style={styles.avatar}
        />

        <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
          <Ionicons name="camera" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* INFO */}
      <Text style={styles.name}>Tu Perfil</Text>
      <Text style={styles.subtitle}>Configurá tu cuenta y preferencias</Text>

      {/* SECCIONES */}
      <View style={styles.section}>
        <ProfileItem icon="person-outline" text="Datos personales" />
        <ProfileItem icon="fitness-outline" text="Objetivos" />
        <ProfileItem icon="nutrition-outline" text="Nutrición" />
        <ProfileItem icon="settings-outline" text="Configuración" />
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ITEM REUTILIZABLE */
function ProfileItem({ icon, text }: { icon: any; text: string }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Ionicons name={icon} size={22} color="#0ff789" />
      <Text style={styles.itemText}>{text}</Text>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  avatarWrapper: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#0ff789",
  },

  cameraButton: {
    position: "absolute",
    bottom: 5,
    right: "35%",
    backgroundColor: "#0ff789",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
  },

  section: {
    paddingHorizontal: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  itemText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },

  logoutButton: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#0ff789",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  logoutText: {
    color: "#000",
    fontWeight: "bold",
  },
});
