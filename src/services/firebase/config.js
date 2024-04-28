import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtydbQ8f9WZO1_J3_P2Uz-6AHaZo6tDSM",
  authDomain: "cinemaniahub-9202e.firebaseapp.com",
  projectId: "cinemaniahub-9202e",
  storageBucket: "cinemaniahub-9202e.appspot.com",
  messagingSenderId: "1020488996708",
  appId: "1:1020488996708:web:5044d54fe98e2509f4cc71",
};

console.log("\n\n\n ----- Firebase ----- \n\n\n");

const app = initializeApp(firebaseConfig);
export const db = getFirestore(); // app
export const auth = getAuth(); //app
