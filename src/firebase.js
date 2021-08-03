import firebase from "firebase";

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFpvTnmwsZimge2GpDyv5vqS1_dt27sGU",
  authDomain: "aupkalpvriksh.firebaseapp.com",
  projectId: "aupkalpvriksh",
  storageBucket: "aupkalpvriksh.appspot.com",
  messagingSenderId: "501922192783",
  appId: "1:501922192783:web:fd59b894159803ba32fffa",
  measurementId: "G-2YQJFDJ4RE",
});

let db = firebaseApp.firestore();

export { db };
