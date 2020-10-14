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

  export const createUserProfileDocument = async (userAuth,additioanalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additioanalData
            });
        }catch(err){
            console('Error to create user', err.message);
        }
    };
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
