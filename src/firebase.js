// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBaWAAAjgBzt4e3p_NX_TOXE8k37Z2UjN0",
  authDomain: "clone-5019b.firebaseapp.com",
  projectId: "clone-5019b",
  storageBucket: "clone-5019b.appspot.com",
  messagingSenderId: "508706543701",
  appId: "1:508706543701:web:7a270d3392fd2d81ac9cdc",
  measurementId: "G-JTY69PE5D9",
});

const db = firebase.firestore();

export { db };
