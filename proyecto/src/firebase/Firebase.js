import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBZibGTD700PCOnN7BplIIWq70-jE9Qi3I",
    authDomain: "basesdedatospropias.firebaseapp.com",
    databaseURL: "https://basesdedatospropias.firebaseio.com",
    projectId: "basesdedatospropias",
    storageBucket: "basesdedatospropias.appspot.com",
    messagingSenderId: "216534378700",
    appId: "1:216534378700:web:18556bb74b247ab0977a69",
    measurementId: "G-CHQJ57KBLV"
  };

  export default firebase.initializeApp(firebaseConfig);
  
 
