// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblogapp-4c7c2.firebaseapp.com",
  projectId: "mernblogapp-4c7c2",
  storageBucket: "mernblogapp-4c7c2.appspot.com",
  messagingSenderId: "733985636226",
  appId: "1:733985636226:web:bf70a36dda2c67e245199b",
  measurementId: "G-8JR8FC16G4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
