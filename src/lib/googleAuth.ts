import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, , promptAsync] = Google.useAuthRequest({
    webClientId: Constants.expoConfig?.extra?.google?.webClientId,
    androidClientId: Constants.expoConfig?.extra?.google?.androidClientId,
  });

  const signInWithGoogle = async () => {
    const result = await promptAsync();

    if (result?.type !== "success") return;

    const { id_token } = result.params;

    const credential = GoogleAuthProvider.credential(id_token);
    await signInWithCredential(auth, credential);
  };

  return {
    signInWithGoogle,
    disabled: !request,
  };
}
