import React from 'react';

import './C_header.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/header/crown.svg';
import { auth } from '../../FIREBASE/firebase.utils.js';
import { connect } from 'react-redux'; //(HOC) Higher order component nam omogucava da prosledimo dve komponente a vrati nam jednu ujedinjenu komponentu(export default connect(mapStateToProps)(Header);)

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

const mapStateToProps = state => ({// state predstavlja rootReducer kada se nadje u connect
    currentUser: state.user.currentUser // currentUser property ima isti naziv kao i property koji se prosledjuje u Header komponentu (linija 9)
    // state predstavlja rootReducer, state.user predstavlja kluc ka zeljenom reduceru iz kog vadimo vrednost, u ovom slucaju iz userReduser-a.
    // state.user.currentUser vraca vrednost iz  currentUser objekta iz userReduser-a.
    // ZAPRAVO OVO JE MAPA STA ZELIMO DA MAPIRAMO I DOBIJEMO, A SVE SE OVO IZVRSAVA KADA SE PROSLEDI U connect FUNKCIJU
});

export default connect(mapStateToProps)(Header); // mapStateToProps objekat kad ga prosledimo kao prvi parametar 
