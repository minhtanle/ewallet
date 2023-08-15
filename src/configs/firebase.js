import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_B6KCRhZ6NGQxZzFnEr0wM8ktfzJl_yg",
  authDomain: "ewallet-save-money.firebaseapp.com",
  projectId: "ewallet-save-money",
  storageBucket: "ewallet-save-money.appspot.com",
  messagingSenderId: "586089419891",
  appId: "1:586089419891:web:422ef0d0c70344bba6c606",
  measurementId: "G-04G4BL773B",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
