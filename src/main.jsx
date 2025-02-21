// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOlD2QUPo6CS8s7dZbPweKJoa7YOtnvyM",
  authDomain: "test-3b1d0.firebaseapp.com",
  projectId: "test-3b1d0",
  storageBucket: "test-3b1d0.firebasestorage.app",
  messagingSenderId: "609163127405",
  appId: "1:609163127405:web:852eae20b64f1f102f6d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
