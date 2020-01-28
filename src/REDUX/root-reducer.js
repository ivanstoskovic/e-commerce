// root-reducer predstavlja skup svih reducer-a koje napisemo. Ako se prisetimo, ceo redux state je jedan veliki json objekat gde dobijamo sve funkcionalnosti redux-a.
// combineReducer kreira taj objekat, a kao primer se vidi  kljuc vrednost, tj. linija 9 (user: userReducer) gde user predstavlja kljuc
// za userReducer u redux state-u.

import { combineReducers } from 'redux';
import userReducer from '../REDUX/user/user-reducer.jsx';


export default combineReducers({
    user: userReducer
});
