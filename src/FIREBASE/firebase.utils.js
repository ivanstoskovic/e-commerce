import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Iskopirana konfiguracija sa firebejz aplikacije
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

  // Premestanja podataka za shop iz json fajla u no sql bazu na fajerstoru
  // 
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch(); // Sluzi kao rollback, ako saljemo vise requesta za upis u firestore bazu, ako iz bilo kog razloga(losa internet veza) nisu svi elementi upisani bach radi rollback
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();//firestore kreira objekat sa jedinstvenim kljucem i praznim stringom
      batch.set(newDocRef, obj);
    });

    return await batch.commit();//ovde zapravo ispaljuje requste za upis svih elemenata i ako je uspesan upis svih vraca void tj null (U pozadini je zapravo promise patern)
  }

  //Posto u bazi(firestoru-u) ne drzimo podatke za rutiranje kao sto smo drzali u json
  // fajlu vec samo podatke za shop u ovoj funkciji treba da dodamo podatke koji nam nedostaju
  // na podatke iz firestora. A ne drzimo ih na firestoru jer te podtke treba mozda da koristi
  // na primer mobilna aplikacija a za nju nisu relevatni podaci za rutiranje. 
  // U bazi se cuvaju podaci koji su za bazu i mogu se koristiti za vise aplikacija
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });


    // Ovo je idealan primer koriscenja reduce funkcije. Rezultat ove funkcije je json
    // objekat koji sam ostavio da se vidi tacan rezultat. Dakle, reduce koristimo kada zelimo
    // da neki niz vratimo ko jedan objekat. Ovde vidimo da je inicijalni objekat koji
    // kreiramo prazan i u njega dodajemo jedan po jedan element niza.
    // Ovo transformisemo zbog Redux-a jer reducer ocekuje objekat sa kljuc vrednost 
    // sadrzajem.
    // Vidimo da u accumulator nadodajemo collection gde je kljuc za title tog elementa koji dodajemo
    // npr: hats zatim jackets, mans itd (poggledaj dokument shop_data.js u REDUX/shop)  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const  provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
