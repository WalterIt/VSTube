import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const apiKeyF = process.env.REACT_APP_FIREBASE_KEY; // por que o process.env não está functionando?
// console.log(apiKeyF);

const firebaseConfig = {
  authDomain: "video-vs.firebaseapp.com",
  projectId: "video-vs",
  storageBucket: "video-vs.appspot.com",
  messagingSenderId: "418794580714",
};

// Initialize Firebase
const app = initializeApp({
  ...firebaseConfig,
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  appId: process.env.REACT_APP_APPID,
});
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
