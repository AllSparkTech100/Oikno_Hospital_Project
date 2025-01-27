// Import the required functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdGmkaV-oF7QiCwMk1tgNdGsZmSVHldw",
  authDomain: "oikno-mhs-test-form.firebaseapp.com",
  projectId: "oikno-mhs-test-form",
  storageBucket: "oikno-mhs-test-form.firebaseapp.com",
  messagingSenderId: "1060980048891",
  appId: "1:1060980048891:web:628f1d0732a552cd034e4e",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db };
