import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'; // dozvoljava nam okidanje funkcija

import rootReducer from './root-reducer.js';

const middlewares = [thunk, logger];//prikazivanje state posle svake akcije

//poziv applyMiddleware(...middlewares) je zapravo poziv funkcija sa svim vrednostima niza. 
//Koliko elemenata ima niz, sa toliko parametara se pozove funkcija applyMiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//Sluzi da cuvamo u local storage ili za cuvanje sesije
export const persistor = persistStore(store);

export default { store, persistor };