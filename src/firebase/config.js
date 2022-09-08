import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8mGk6ky_AWWdwIndMv-CJSv7YariLig0",
  authDomain: "thedojosite-621f6.firebaseapp.com",
  projectId: "thedojosite-621f6",
  storageBucket: "thedojosite-621f6.appspot.com",
  messagingSenderId: "21531002739",
  appId: "1:21531002739:web:ed0c84f68fa07c6f372706",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
