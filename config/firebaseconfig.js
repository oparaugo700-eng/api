// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "apid-f5ecb.firebaseapp.com",
    projectId: "apid-f5ecb",
    storageBucket: "apid-f5ecb.firebasestorage.app",
    messagingSenderId: "574232062759",
    appId: "1:574232062759:web:da1ee3d0dad4a691cd9702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);