import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACY3g11XFNkHc9UowZfq_UW01VPBHXdTs",
  authDomain: "social-app-e5c7c.firebaseapp.com",
  projectId: "social-app-e5c7c",
  storageBucket: "social-app-e5c7c.appspot.com",
  messagingSenderId: "998209487145",
  appId: "1:998209487145:web:ff910757930b5c8c853738",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { app, fireDb };
