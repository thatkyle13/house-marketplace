import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV8eR8rYRpo3e9z2R_2g2RygJc0XlOXHc",
  authDomain: "house-marketplace-app-5b8be.firebaseapp.com",
  projectId: "house-marketplace-app-5b8be",
  storageBucket: "house-marketplace-app-5b8be.appspot.com",
  messagingSenderId: "506124801840",
  appId: "1:506124801840:web:44ec4f2206363356049af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore()