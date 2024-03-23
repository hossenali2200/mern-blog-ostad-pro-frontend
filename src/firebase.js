// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hosen-s-blog.firebaseapp.com",
  projectId: "hosen-s-blog",
  storageBucket: "hosen-s-blog.appspot.com",
  messagingSenderId: "48224447272",
  appId: "1:48224447272:web:cd957adaef6f7c517e7e1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);