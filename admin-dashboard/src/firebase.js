// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIs-zYoRBZN-N-RxBoN8yA8RbX692Knt0",
  authDomain: "e-shoopy.firebaseapp.com",
  projectId: "e-shoopy",
  storageBucket: "e-shoopy.appspot.com",
  messagingSenderId: "645180929169",
  appId: "1:645180929169:web:87d27ff3833f9e1a19fb30",
  measurementId: "G-P33W8ND8E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;