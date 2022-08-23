// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mSaXMJIWbnbDazq6YC5dGLj-17opt30",
  authDomain: "ecommerce-coderhouse-5aef1.firebaseapp.com",
  projectId: "ecommerce-coderhouse-5aef1",
  storageBucket: "ecommerce-coderhouse-5aef1.appspot.com",
  messagingSenderId: "604554056576",
  appId: "1:604554056576:web:63655722343b826dd02765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);