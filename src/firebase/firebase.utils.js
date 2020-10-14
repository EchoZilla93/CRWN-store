import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9BSFuu5yfd-kZ8e9TKN0RMNbFZlyiEmQ",
    authDomain: "crwn-db-2fb60.firebaseapp.com",
    databaseURL: "https://crwn-db-2fb60.firebaseio.com",
    projectId: "crwn-db-2fb60",
    storageBucket: "crwn-db-2fb60.appspot.com",
    messagingSenderId: "357459844038",
    appId: "1:357459844038:web:7b7c31b6196628b1df30c7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
