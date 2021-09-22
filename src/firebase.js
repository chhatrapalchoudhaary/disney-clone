import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE_GVXB4iNQVnBzOvEy3JKHQRJg_qNqh4",
  authDomain: "disney-plus-clone-7914d.firebaseapp.com",
  projectId: "disney-plus-clone-7914d",
  storageBucket: "disney-plus-clone-7914d.appspot.com",
  messagingSenderId: "1068144406609",
  appId: "1:1068144406609:web:58cc012cd0366e0f334870",
  measurementId: "G-1DG5KK7ZJJ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;
