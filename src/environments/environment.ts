export const environment = {
    production: false
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWMEWf5D7xDINbvAJJhmTLLGjpR2gpQFM",
  authDomain: "novelkeys-e9a8b.firebaseapp.com",
  databaseURL: "https://novelkeys-e9a8b-default-rtdb.firebaseio.com",
  projectId: "novelkeys-e9a8b",
  storageBucket: "novelkeys-e9a8b.appspot.com",
  messagingSenderId: "111097031540",
  appId: "1:111097031540:web:d3d2fcd3cb9caaab729a21",
  measurementId: "G-MC6TZTM77N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);