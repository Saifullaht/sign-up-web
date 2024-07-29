 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import {getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA3f47itaa93otrVAt2ZHiYu4FSv1hxhYI",
   authDomain: "signup-8f674.firebaseapp.com",
   projectId: "signup-8f674",
   storageBucket: "signup-8f674.appspot.com",
   messagingSenderId: "925577366177",
   appId: "1:925577366177:web:1e415b9f445455655abee0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

export { auth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut }