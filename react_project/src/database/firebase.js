// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "marcufali-5b45c.firebaseapp.com",
  projectId: "marcufali-5b45c",
  storageBucket: "marcufali-5b45c.appspot.com",
  messagingSenderId: "87871937889",
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
