// root-reducer predstavlja skup svih reducer-a koje napisemo. Ako se prisetimo, ceo redux state je jedan veliki json objekat gde dobijamo sve funkcionalnosti redux-a.
// combineReducer kreira taj objekat, a kao primer se vidi  kljuc vrednost, tj. linija 9 (user: userReducer) gde user predstavlja kljuc
// za userReducer u redux state-u.

import { combineReducers } from 'redux';
import userReducer from '../REDUX/user/user-reducer.js';
import cartReducer from '../REDUX/cart/cart-reducer.js';
import directoryReducer from '../REDUX/directory/directory-reducer.js';
import shopReducer from '../REDUX/shop/shop-reducer.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// local storage
//import sessionStorage from 'redux-persist/lib/storage/session';// session storage

const persistConfig = {
    key: 'root', // iz koje tacke reducer-a zelimo da cuvamo podatke, posto je 'root' , zelimo iz root-a
    storage, // storage gde se smesta
    whitelist:['cart']// lista reducer-a koje zelimo da smestamo( 'user' ne zelimo jer je hendlovan od firebase-a)
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);
