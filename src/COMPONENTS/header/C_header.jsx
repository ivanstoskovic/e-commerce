import React from 'react';

import './C_header.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/header/crown.svg';
import { auth } from '../../FIREBASE/firebase.utils.js';
import { connect } from 'react-redux'; //(HOC) Higher order component nam omogucava da prosledimo dve komponente a vrati nam jednu ujedinjenu komponentu(export default connect(mapStateToProps)(Header);)
import CartIcon from '../cart-icon/C_cart_icon.jsx';
import CartDropdown from '../cart-dropdown/C_cart_dropdown.jsx';
import { createStructuredSelector } from 'reselect'; // prosledjuje state u selectore da nebi rucno prosledjivali isti state u svaki selektor (sintatic sugar)
import { selectCartHidden } from '../../REDUX/cart/cart-selectors.js';
import { selectCurrentUser } from '../../REDUX/user/user-selectors.js';



const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                )
                :
                (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); // mapStateToProps objekat kad ga prosledimo kao prvi parametar 
