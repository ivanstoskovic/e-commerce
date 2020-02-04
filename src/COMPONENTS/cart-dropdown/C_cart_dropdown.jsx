import React, { Component } from 'react';
import CustomButton from '../custom-button/C_custom_button.jsx';
import CartItem from '../cart-item/C_cart_item.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectCartItems } from '../../REDUX/cart/cart-selectors.js';
import { withRouter } from 'react-router-dom';

import './C_cart_dropdown.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));