import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './PAGES/homepage/C_homepage'
import HatsPage from './PAGES/hatspage/C_hatspage';
import ShopPage from './PAGES/shop/C_shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/hatspage' component={HatsPage}/>/**This is just test page */
      </Switch>
    </div>
  );
}

export default App;
