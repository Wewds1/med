import firebase from "firebase/app";
import { } from 'firebase/firestore';
import { } from 'firebase/auth';
import { } from 'firebase/storage';
import { } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAtIvLL37Ux7W7bdawxlr_a0daEGljPypk",
  authDomain: "medmeet-42bbe.firebaseapp.com",
  projectId: "medmeet-42bbe",
  storageBucket: "medmeet-42bbe.appspot.com",
  messagingSenderId: "302041501078",
  appId: "1:302041501078:web:ae3449776a04bbdef821b7",
  measurementId: "G-WHJPS7YCWV",

};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;






/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtIvLL37Ux7W7bdawxlr_a0daEGljPypk",
  authDomain: "medmeet-42bbe.firebaseapp.com",
  projectId: "medmeet-42bbe",
  storageBucket: "medmeet-42bbe.appspot.com",
  messagingSenderId: "302041501078",
  appId: "1:302041501078:web:ae3449776a04bbdef821b7",
  measurementId: "G-WHJPS7YCWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/