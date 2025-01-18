// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f47ce.firebaseapp.com",
  projectId: "mern-estate-f47ce",
  storageBucket: "mern-estate-f47ce.firebasestorage.app",
  messagingSenderId: "413869883838",
  appId: "1:413869883838:web:e2ee5f2ec9326a38a039ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);