import firebase from "firebase";

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFarR4lOngmusYx3GJKh_MOQT52poTNfo",
  authDomain: "problem-set-c0931.firebaseapp.com",
  projectId: "problem-set-c0931",
  storageBucket: "problem-set-c0931.appspot.com",
  messagingSenderId: "1045060931667",
  appId: "1:1045060931667:web:243cf43eeab3e870f9f6a6",
  measurementId: "G-F62CSLECTP",
});

let db = firebaseApp.firestore();

export { db };
