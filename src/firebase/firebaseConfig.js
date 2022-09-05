// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD017meftzj-StgMTNxEMEJqKkQsXMEzBM",
  authDomain: "ecommerce-coderhouse-4d917.firebaseapp.com",
  projectId: "ecommerce-coderhouse-4d917",
  storageBucket: "ecommerce-coderhouse-4d917.appspot.com",
  messagingSenderId: "668711793660",
  appId: "1:668711793660:web:c18474ab89495d6efe3879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);