import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shoping-cart/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../REDUX/cart/cart-action.js';

import './C_cart_icon.scss';


const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);