import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaoipvKtKaxi-fzHz7DtMsTRB2kagUtaE",
  authDomain: "socialmedia-a8e79.firebaseapp.com",
  projectId: "socialmedia-a8e79",
  storageBucket: "socialmedia-a8e79.appspot.com",
  messagingSenderId: "738849927285",
  appId: "1:738849927285:web:2e2ccb4c3af1fd79c1c83c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const storage = firebase.storage()

export {db,storage}
