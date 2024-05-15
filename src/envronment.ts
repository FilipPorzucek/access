// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6bKJ4_SkUmx0C9W8JGzUrJa1znJNKhg",
  authDomain: "apiforproject-a5613.firebaseapp.com",
  databaseURL: "https://apiforproject-a5613-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apiforproject-a5613",
  storageBucket: "apiforproject-a5613.appspot.com",
  messagingSenderId: "565213336853",
  appId: "1:565213336853:web:31c2a47a52b1e31a1f451c",
  measurementId: "G-P0W4D4K37L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);