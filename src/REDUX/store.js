import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.js';

const middlewares = [logger];

//poziv applyMiddleware(...middlewares) je zapravo poziv funkcija sa svim vrednostima niza. 
//Koliko elemenata ima niz, sa toliko parametara se pozove funkcija applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;