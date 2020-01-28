import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './REDUX/store.js';
import './index.css';
import App from './App';

ReactDOM.render(
    //Provider komponenta koju smo uvezli iz react-redux-a omogucava nam pristup redux state-u kroz celu aplikaciju. Kao sto vidimo, Provider je parent svemu.
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>    
,
 document.getElementById('root'));
