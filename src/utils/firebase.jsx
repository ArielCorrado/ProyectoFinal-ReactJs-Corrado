import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "e-hard.firebaseapp.com",
  projectId: "e-hard",
  storageBucket: "e-hard.appspot.com",
  messagingSenderId: "45818365614",
  appId: "1:45818365614:web:a13e60d28a1b30d7efcf3f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);



