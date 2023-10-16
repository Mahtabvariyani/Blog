// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "myweblog-77ea3.firebaseapp.com",
  projectId: "myweblog-77ea3",
  storageBucket: "myweblog-77ea3.appspot.com",
  messagingSenderId: "1089093277502",
  appId: "1:1089093277502:web:fcb33eedfe9ebe2c10be6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);