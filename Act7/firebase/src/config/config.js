// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqtjip98H06Z7Qpb1mi65Fc0KcMRLwkvo",
  authDomain: "fir-753ad.firebaseapp.com",
  projectId: "fir-753ad",
  storageBucket: "fir-753ad.appspot.com",
  messagingSenderId: "768020738564",
  appId: "1:768020738564:web:53ceb3f04f89a7e83dfb51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
