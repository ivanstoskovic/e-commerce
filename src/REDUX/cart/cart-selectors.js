import { createSelector } from 'reselect';

//ovo je input selector i ne koristi createSelector i uzima sve iz state-a sto zelimo (state.cart)
const selectCart = state => state.cart;
//createSelector funkcija zapravo radi Memoization
//Ovo je output selector i sluzi zapravo da uradi Memoization(ne memorirzation) {ne renderuje komponentu ako vrednost objekta koji se prosledjuje komponenti nije izmenjena}
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity , 0)
);