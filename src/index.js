import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './REDUX/store.js';

ReactDOM.render(
    //Provider komponenta koju smo uvezli iz react-redux-a omogucava nam pristup redux state-u kroz celu aplikaciju. Kao sto vidimo, Provider je parent svemu.
    //persistor je persisted verzija store-a i weapujemo <App/> da imamo pristup perzistentnom storage-u
<Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={ persistor }>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>    
,
 document.getElementById('root'));
