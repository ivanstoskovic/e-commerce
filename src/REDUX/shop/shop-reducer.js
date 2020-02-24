import SHOP_DATA  from './shop_data';
import ShopActionTypes from './shop-types.js'

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;
