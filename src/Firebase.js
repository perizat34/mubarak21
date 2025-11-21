// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyArCJiXBrDdG9loLOcIlb5a-HmBPpW89JU",
  authDomain: "register-6aab6.firebaseapp.com",
  projectId: "register-6aab6",
  storageBucket: "register-6aab6.firebasestorage.app",
  messagingSenderId: "953065473372",
  appId: "1:953065473372:web:9c29932e43600f6aaded99",
  measurementId: "G-2KPJ99CBLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)