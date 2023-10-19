// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADiXbIzjcFJOVE3DRT-tCcNL0ItadrXsQ",
  authDomain: "auto-motive-9df7d.firebaseapp.com",
  projectId: "auto-motive-9df7d",
  storageBucket: "auto-motive-9df7d.appspot.com",
  messagingSenderId: "283504059193",
  appId: "1:283504059193:web:adf6090a7dd270b7e2bee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;