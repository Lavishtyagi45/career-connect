// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaHhVmePfTy8FtE-5NQkvGAqtSJ8nuGBY",
  authDomain: "career-connect-f620e.firebaseapp.com",
  projectId: "career-connect-f620e",
  storageBucket: "career-connect-f620e.appspot.com",
  messagingSenderId: "787121352612",
  appId: "1:787121352612:web:5066ab7f4ec0fca78bdb31",
  measurementId: "G-92DBG6N87Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app,analytics};