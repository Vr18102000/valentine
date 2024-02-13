// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARbXq8w6WCBLzX2Knm2-3K4jVStdBtAqI",
  authDomain: "valentine-2fa04.firebaseapp.com",
  projectId: "valentine-2fa04",
  storageBucket: "valentine-2fa04.appspot.com",
  messagingSenderId: "804124398638",
  appId: "1:804124398638:web:6bc648a979c4594528fbbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Initialize Firestore

export default firestore; // Export Firestore instance
