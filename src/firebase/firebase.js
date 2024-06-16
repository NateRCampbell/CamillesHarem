import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZTJdURhGYXUg7y-cKbDokDk-FmOE2wuI",
  authDomain: "camilles-harem.firebaseapp.com",
  projectId: "camilles-harem",
  storageBucket: "camilles-harem.appspot.com",
  messagingSenderId: "806601890991",
  appId: "1:806601890991:web:01595fd20ab227a128885a",
  measurementId: "G-F8GFGBZRMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const currentUser = auth.currentUser;

export { app, analytics, auth, currentUser };
