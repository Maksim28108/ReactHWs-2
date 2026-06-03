import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2kMUYJeEVmo_Cv3wKnzUZyTJbA4MHT4o",
  authDomain: "react-hw-6-226fd.firebaseapp.com",
  projectId: "react-hw-6-226fd",
  storageBucket: "react-hw-6-226fd.firebasestorage.app",
  messagingSenderId: "179684886189",
  appId: "1:179684886189:web:c48e58a0f9f7e9d6de2824",
  measurementId: "G-P0FB8BNF12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
