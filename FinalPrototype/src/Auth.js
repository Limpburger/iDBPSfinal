import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQidfFhOaTV2jyFCcOs0LQnniR3_H-ZWs",
  
    authDomain: "idbps-8732b.firebaseapp.com",
  
    projectId: "idbps-8732b",
  
    storageBucket: "idbps-8732b.appspot.com",
  
    messagingSenderId: "982266016942",
  
    appId: "1:982266016942:web:f89cdf2942e7968ef1a93f",
  
    measurementId: "G-GZ85W2YNEE"
  
  };
  

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;
