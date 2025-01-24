// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYO4PX5_dwfI9gCeGnmWjlCV3g400PxXE",
  authDomain: "ai-trip-planner-ffeb1.firebaseapp.com",
  projectId: "ai-trip-planner-ffeb1",
  storageBucket: "ai-trip-planner-ffeb1.firebasestorage.app",
  messagingSenderId: "338129264814",
  appId: "1:338129264814:web:f78977ca1a53d970814d3f",
  measurementId: "G-CSP7D6J63R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
