import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALOscvfP4DE_Hgz4lKMzueXXod9bCsxv0",
  authDomain: "whatsapp-clone-4287f.firebaseapp.com",
  projectId: "whatsapp-clone-4287f",
  storageBucket: "whatsapp-clone-4287f.appspot.com",
  messagingSenderId: "528136564179",
  appId: "1:528136564179:web:8e6a524347b63962b39326",
  measurementId: "G-B4BGRMYEEJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
