import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBvXjiU33H9hWYP0JcMvnyBXBbuDGdPSTY",
  authDomain: "create-folder-83fe8.firebaseapp.com",
  projectId: "create-folder-83fe8",
  storageBucket: "create-folder-83fe8.appspot.com",
  messagingSenderId: "563415285755",
  appId: "1:563415285755:web:56b028030e7a90215d155e"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
// https://console.firebase.google.com/u/0/project/create-folder-83fe8/overview
// https://console.firebase.google.com/u/0/project/create-folder-83fe8/authentication/users