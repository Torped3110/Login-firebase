import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB3jiBYRB41nWZyjaMCJ-wJH6cVT3efJl0",
    authDomain: "chat-app-fa065.firebaseapp.com",
    projectId: "chat-app-fa065",
    storageBucket: "chat-app-fa065.appspot.com",
    messagingSenderId: "100155740579",
    appId: "1:100155740579:web:8d184ae2815261d5264a16",
    measurementId: "G-13PYLB85RF"
  };
  

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) 
export default app;