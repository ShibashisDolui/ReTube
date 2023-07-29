import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2jBdkSA2zAAnqSx3n3MSsjTZ0_h3VF-w",
  authDomain: "fir-intro-ca4cd.firebaseapp.com",
  projectId: "fir-intro-ca4cd",
  storageBucket: "fir-intro-ca4cd.appspot.com",
  messagingSenderId: "715279288592",
  appId: "1:715279288592:web:74f31fdc5783a3642efd95",
  measurementId: "G-WZZF9RGH6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setUser) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleSignOut = (setUser) => {
  signOut(auth)
    .then(() => {
      // Sign out successful
      console.log("User signed out successfully");
      // Additional logic or redirects after sign out
      setUser(null);
    })
    .catch((error) => {
      // An error occurred during sign out
      console.log("Error signing out:", error);
    });
};
