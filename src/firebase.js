import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU9jA4oO2WNScuzYPg2ZDMI1CF7oQbWWI",
  authDomain: "digital-service-79021.firebaseapp.com",
  projectId: "digital-service-79021",
  storageBucket: "digital-service-79021.appspot.com",
  messagingSenderId: "1035018929677",
  appId: "1:1035018929677:web:f0153955fd16b47684f744"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);