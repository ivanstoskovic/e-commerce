import React from 'react';

import { ReactComponent as Logo } from '../../assets/header/crown.svg';
import { auth } from '../../FIREBASE/firebase.utils.js';
import { connect } from 'react-redux'; //(HOC) Higher order component nam omogucava da prosledimo dve komponente a vrati nam jednu ujedinjenu komponentu(export default connect(mapStateToProps)(Header);)
import CartIcon from '../cart-icon/C_cart_icon.jsx';
import CartDropdown from '../cart-dropdown/C_cart_dropdown.jsx';
import { createStructuredSelector } from 'reselect'; // prosledjuje state u selectore da nebi rucno prosledjivali isti state u svaki selektor (sintatic sugar)
import { selectCartHidden } from '../../REDUX/cart/cart-selectors.js';
import { selectCurrentUser } from '../../REDUX/user/user-selectors.js';
import { HeaderContainer,LogoContainer,OptionLink,OptionsContainer } from './C_header_style';



const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                )
                :
                (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); // mapStateToProps objekat kad ga prosledimo kao prvi parametar 
