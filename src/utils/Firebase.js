import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnBQ4mbiH8OGgh4w4F3CiHX-Ui5IcvHII",
  authDomain: "you-tube-clone-3652b.firebaseapp.com",
  projectId: "you-tube-clone-3652b",
  storageBucket: "you-tube-clone-3652b.appspot.com",
  messagingSenderId: "7004058506",
  appId: "1:7004058506:web:7923307ab1d305e8698e73",
  measurementId: "G-QM1RWTGB2F",
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
