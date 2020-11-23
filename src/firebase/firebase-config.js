import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFAZ1hEyRbniB15FrYwU-w_d5bMcpXpTU",
  authDomain: "react-app-journal-29320.firebaseapp.com",
  databaseURL: "https://react-app-journal-29320.firebaseio.com",
  projectId: "react-app-journal-29320",
  storageBucket: "react-app-journal-29320.appspot.com",
  messagingSenderId: "626393006126",
  appId: "1:626393006126:web:c204418a25d82284379fbf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
