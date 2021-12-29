
// import firebase from "firebase";

// import { initializeApp } from "firebase/app";

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCBt73DZpntlqSGuFGKBSjwfwQagnxPhdI",
    authDomain: "phoneecmrs.firebaseapp.com",
    projectId: "phoneecmrs",
    storageBucket: "phoneecmrs.appspot.com",
    messagingSenderId: "801268866697",
    appId: "1:801268866697:web:e493098d7ae541e9a37058",
    measurementId: "G-B56XPHSBQW"
};


const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const Database = firebase.database() 
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default Firebase
