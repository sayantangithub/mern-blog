// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-90878.firebaseapp.com",
  projectId: "mern-blog-90878",
  storageBucket: "mern-blog-90878.firebasestorage.app",
  messagingSenderId: "1029309320506",
  appId: "1:1029309320506:web:97a7df5db7cc2c8e80d403",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
