import ShopActionTypes from './shop-types.js';
import { firestore, convertCollectionsSnapshotToMap } from '../../FIREBASE/firebase.utils.js';

// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// });


// Samo menja stanje reducer-a kako bi znali u kom smo stanju 
//dobavljanja podataka kako bi na primer mogli da pozovemo spinner tj loader
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccesss = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

//NISAM BAS SIGURAN 
// funkcija koju prosledjujemo komponenti i zapocinjemo proces trazenja podataka
// u trenutku poziva funkcije, redux ce je instancirati i redux-thunk nam omogucava da
// menjamo stanje reducer-a i zatim nastavi  izvrsavanje funkcije 
//Ako je redux-thuk midleware ukljucen, svaki put kada zelimo da otpremimo(dispatchujemo)
//funkciju umesto objekta, midleware ce pozvati tu funkciju uz dispatch kao prvi 
//argument
// Thunk je midleware kroz koji detektuje samo akcije koje su funkcije a ne objekti, kada detektuje funkciju dodeljuje joj dispatch property
// I pomaze nam da asihroni kod obradimo u sinhronom maniru. dispatch property dobija funkcionalnosti Thunk-a kojim mi 
// pozivamo reducer-e i prosledjujemo im objekat kakav ocekuju
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections'); // referenca na collection listu u firestor bazi podataka
        dispatch(fetchCollectionsStart());// menjamo stanje reducera

        //koriscenjem promise-a
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //updateCollections(collectionsMap);
            dispatch(fetchCollectionsSuccesss(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};