// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkaENHS8reW5IY6elXDT6VxmZ7sg5YQ8",
  authDomain: "angular-17-proyect-db.firebaseapp.com",
  projectId: "angular-17-proyect-db",
  storageBucket: "angular-17-proyect-db.appspot.com",
  messagingSenderId: "1043742844067",
  appId: "1:1043742844067:web:bfa889096204c34cbecb16",
  measurementId: "G-TWFFE6EFHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);