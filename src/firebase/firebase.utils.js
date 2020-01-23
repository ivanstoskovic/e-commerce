import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyAULvr21BwK7WbSA00aeBtbgs6x4L1GUd8",
    authDomain: "crown-db-92a35.firebaseapp.com",
    databaseURL: "https://crown-db-92a35.firebaseio.com",
    projectId: "crown-db-92a35",
    storageBucket: "crown-db-92a35.appspot.com",
    messagingSenderId: "529924074390",
    appId: "1:529924074390:web:fbbdafa88f5b349b414bb7",
    measurementId: "G-MCD3VMFEQ2"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //Ako nije autentifikovan izadji
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    

    //Ako ne postoji user kreiraj ga
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
    
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('Error creating user', error.message);
      }
    }
    console.log(snapShot);   
    //Vracamo snapshot objekat jer ce mozda opet da nam treba
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const  provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
