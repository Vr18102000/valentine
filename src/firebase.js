// firebase.js
// Update the import statements in firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Add other necessary modules if you are using them

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAK1LqiOL15BwvGuUXELOigKY2ONcJcjec",
    authDomain: "valentine-4b441.firebaseapp.com",
    projectId: "valentine-4b441",
    storageBucket: "valentine-4b441.appspot.com",
    messagingSenderId: "189085758863",
    appId: "1:189085758863:web:2f2498a2abc699e4fbc7fa"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };