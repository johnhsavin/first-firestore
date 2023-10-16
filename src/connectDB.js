// import tools we need for our library
import { initializeApp, cert } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"

//import our secrets credentials
import { creds } from "./creds.js";

// connect to our firebase project with our creds
initializeApp({
   credential: cert(creds), 
});
// once connected, connect to firestore database
export const db = getFirestore();
