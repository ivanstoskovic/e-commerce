import React, { Component } from 'react';
import CustomButton from '../custom-button/C_custom_button.jsx';
import './C_cart_dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;