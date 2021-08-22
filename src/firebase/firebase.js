import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJeC2Spb_8syMP9_EcFuyTthCgz3NNbQk",
  authDomain: "invoice-vue-b0f48.firebaseapp.com",
  projectId: "invoice-vue-b0f48",
  storageBucket: "invoice-vue-b0f48.appspot.com",
  messagingSenderId: "313735762787",
  appId: "1:313735762787:web:a1db38cf226c01840c3956",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
