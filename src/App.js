import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './PAGES/homepage/C_homepage'
import HatsPage from './PAGES/hatspage/C_hatspage';
import SignUpInPage from './PAGES/sign_up_in/C_sign_up_in.jsx';
import ShopPage from './PAGES/shop/C_shop';
import Head from './COMPONENTS/header/C_header.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //Uspostavlja se konekcija sa firebejzom i na svaku promenu u fajerbejzu (logovao se izlogoao se, registrovao se)
  //se setuje stanje usera u stejtu. 
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { 
      this.setState({ currentUser: user});
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
        <Head currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignUpInPage}/>
          <Route exact path='/hatspage' component={HatsPage}/>/**This is just test page */
        </Switch>
      </div>
    );
  }
}

export default App;
