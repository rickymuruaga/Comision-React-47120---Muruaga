import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXNDEY4Uap-QeYtrXA1u0jARVA8PbTq5M",
  authDomain: "comision-47120-68301.firebaseapp.com",
  projectId: "comision-47120-68301",
  storageBucket: "comision-47120-68301.appspot.com",
  messagingSenderId: "617330962176",
  appId: "1:617330962176:web:791aac4d6ac4eac2738de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById
  ('root')).render(
    <ChakraProvider> 
     <App /> 
     </ChakraProvider>
)
