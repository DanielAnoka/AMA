// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLokwgkSBFgo7UCJFJYwx_LnahAptCmDo",
  authDomain: "mobile-merchant-app.firebaseapp.com",
  projectId: "mobile-merchant-app",
  storageBucket: "mobile-merchant-app.appspot.com",
  messagingSenderId: "531457022665",
  appId: "1:531457022665:web:9a0a4d5536de49c522cb18",
  measurementId: "G-Z58MYHQ50S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Firebase_auth = getAuth(app);
export const firebase_firestore = getFirestore(app);