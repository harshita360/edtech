import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHNPRZ169ysko49q4Bkmbo4Lu7dELjDtY",
  authDomain: "engage-edtech.firebaseapp.com",
  projectId: "engage-edtech",
  storageBucket: "engage-edtech.appspot.com",
  messagingSenderId: "114854221521",
  appId: "1:114854221521:web:8d1902368c35f911b2d7f0",
  measurementId: "G-M1K0D26WLV",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
