// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// optional additions, figure out what to do with these
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcd0aD-3bI3Ky7C0sl1xrdaO4x2mb0M6A",
  authDomain: "music-journal-87a8b.firebaseapp.com",
  projectId: "music-journal-87a8b",
  storageBucket: "music-journal-87a8b.firebasestorage.app",
  messagingSenderId: "945719409699",
  appId: "1:945719409699:web:dbe1483591566eb3f8c596",
  measurementId: "G-FZ7NE4C8NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// optional additions, figure out what to do with these
export const auth = getAuth(app);
export const db = getFirestore(app);