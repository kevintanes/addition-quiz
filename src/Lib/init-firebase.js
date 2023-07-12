import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn9IFeySCPzc3XTCdc0sL0Q4BnOltP3yo",
  authDomain: "quiz-addition.firebaseapp.com",
  projectId: "quiz-addition",
  storageBucket: "quiz-addition.appspot.com",
  messagingSenderId: "224217288794",
  appId: "1:224217288794:web:2b977aa05ce53aa7fa8863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);