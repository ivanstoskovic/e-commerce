import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './PAGES/homepage/C_homepage'
import HatsPage from './PAGES/hatspage/C_hatspage';
import SignUpInPage from './PAGES/sign_up_in/C_sign_up_in.jsx';
import ShopPage from './PAGES/shop/C_shop';
import Head from './COMPONENTS/header/C_header.jsx';
import { auth, createUserProfileDocument } from './FIREBASE/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './REDUX/user/user-actions.js'
import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from './REDUX/user/user-selectors.js';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  //Uspostavlja se konekcija sa firebejzom i na svaku promenu u fajerbejzu (logovao se izlogoao se, registrovao se)
  //se setuje stanje usera u stejtu. 
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // Subscrajbujemo se na logovanog juzera kako bi pratili da li ima promena na njemu u firebejzu i updejtovali tu promenu
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      // Setuje se opet ovde na primer ako se izloguje. Izlogivanjem se setuje na null
      setCurrentUser(userAuth);
    });
  }

  // Da nebi doslo do curenja memorije jer je veza sa firebaze autentifikacijom otvorena
  // Gasimo konekciju sa firebasom kada se komponenta  unistava
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Head />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ?  (<Redirect to='/' />) : (<SignUpInPage />)}/> /**Ako si vec ulogovan redirektuje te na home page ako nisi dozvoljava ti da odes na SignUpInPage */
          <Route exact path='/hatspage' component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

// mapiranje user reduceru
const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser
})

//Posto u app komponenti nemamo potrebe da koristimo sacuvani state, vec samo da ga setujemo
// mapiranje user action
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
