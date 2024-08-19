// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgnmSVM8aWX05G_QUElmfRQPkwpBlo0z0",
  authDomain: "netflixgpt-6659a.firebaseapp.com",
  projectId: "netflixgpt-6659a",
  storageBucket: "netflixgpt-6659a.appspot.com",
  messagingSenderId: "849973142130",
  appId: "1:849973142130:web:bfac5e49ce50c9afb398eb",
  measurementId: "G-2RTJK7XNJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();