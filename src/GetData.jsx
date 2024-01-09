import {useState, useEffect} from "react"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection,getDocs } from "firebase/firestore"; 
import configuration from "./firebaseConfig";

const app = initializeApp("configuration");
const db = getFirestore(app);

export default postDB = () => {
  
}