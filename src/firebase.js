import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALVQvz17wqeZcKQ2_4WBDLO-u8UsSmEfk",
    authDomain: "clone-yt-950bc.firebaseapp.com",
    projectId: "clone-yt-950bc",
    storageBucket: "clone-yt-950bc.appspot.com",
    messagingSenderId: "392219488035",
    appId: "1:392219488035:web:9f7b5a085361f93080e696"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};