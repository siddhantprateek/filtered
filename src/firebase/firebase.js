'use client'
import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  }catch(err) {
    console.error(err);
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
  }catch(err) {
    console.error(err);
  }
}

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  }catch(err) {
    console.error(err);
  }
}

const logOut = async () => {
  try {
    await signOut(auth);
  }catch(err) {
    console.error(err);
  }
}


export {
  signUp,
  logIn,
  logOut,
  signInWithGoogle,
  app,
  auth
}