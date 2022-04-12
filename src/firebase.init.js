// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5sMiZxwW2hMlfT0kIsMe4AEZ0D9fJlA",
  authDomain: "router-firebase-intr.firebaseapp.com",
  projectId: "router-firebase-intr",
  storageBucket: "router-firebase-intr.appspot.com",
  messagingSenderId: "223895664442",
  appId: "1:223895664442:web:981ce1fe921eb24efd8203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app