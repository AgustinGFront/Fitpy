import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2N5cUn9Bs4fvrM-SeFoxS5VNh-ZQwQCw",
  authDomain: "fitpyapp-c4ac4.firebaseapp.com",
  projectId: "fitpyapp-c4ac4",
  storageBucket: "fitpyapp-c4ac4.firebasestorage.app",
  messagingSenderId: "122400246620",
  appId: "1:122400246620:web:16e72ac57f39c57ef00f99",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
  