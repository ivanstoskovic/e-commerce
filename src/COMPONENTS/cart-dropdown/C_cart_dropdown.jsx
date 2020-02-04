import React, { Component } from 'react';
import CustomButton from '../custom-button/C_custom_button.jsx';
import CartItem from '../cart-item/C_cart_item.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectCartItems } from '../../REDUX/cart/cart-selectors.js';

import './C_cart_dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default connect(mapStateToProps)(CartDropdown);