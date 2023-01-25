// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaCPPcSZGnvSIjEJqANmo45h4sodV-tYY",
  authDomain: "techfolio-e1563.firebaseapp.com",
  projectId: "techfolio-e1563",
  storageBucket: "techfolio-e1563.appspot.com",
  messagingSenderId: "477565764540",
  appId: "1:477565764540:web:0bc6021ca3c893c41b21b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//instantiate providers
const provider = new GoogleAuthProvider();

// get current auth instance
export const auth = getAuth(app);

// set up auth functions

export function logIn() {
	return signInWithPopup(auth, provider);
}

export function logOut() {
	return signOut(auth);
}
