// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzufhInZW03BI4SiqkzoEyY3wDmadWwE",
  authDomain: "siteuniversitario-6a2ad.firebaseapp.com",
  projectId: "siteuniversitario-6a2ad",
  storageBucket: "siteuniversitario-6a2ad.appspot.com",
  messagingSenderId: "1020320078554",
  appId: "1:1020320078554:web:84989d573684cc2b46a3e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
