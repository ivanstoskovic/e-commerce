import CartActionTypes from './cart-types.js';

//payload nam ne treba u ovom slucaju
export const toggleCartHidden = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});