//USER REDUCER sav state za user-a po konvenciji smestamo u ovom fajlu
//INITIAL_STATE je Objekat koji predstavlja Inicijalno stanje state propertija, pre prve akcije koja se okida i popunjava ga.
//Prilikom okidanja neke akcije sto predstavlja action property u userReduser-u popunjava se state objekat koji za nas cuva redux.
//Prilikom okidanja naredne akcije, vrednost state propertija ce biti ona koja sacuvana poslednja.

//(state = INITIAL_STATE) ovaj deo koda je nov, iz EcmaScript6, gde ako je state undefined prosledjuje defaultni objekat INITIAL_STATE koji se definise kako nam je potrebno.
//Treba obratiti paznju da je null validna vrednost za state-a, tako da ako je state null to ce i biti prosledjeno u userReduser ali ako je undefined onda se prosledjuje INITIAL_STATE

import { UserActionTypes } from './user-types.js';

const INITIAL_STATE = {
    currentUser: null
}

const userReduser = (state = INITIAL_STATE, action) => {

    //Po sablonu, Svaki moguci reducer() dobija svaku mogucu akciju koja moze da se okine, zato u switch-u imamo default vrednost.
    //Ovo znaci da neki drugi reducer za na primer header vidi akciju koja okida samo user. 
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:// Tip akcije
            return{
                ...state,// Tri tacke predstavljaju da hocemo da zadrzimo sve sto vec imamo u state objektu a menjamo samo ono sto nam treba
                currentUser: action.payload // Ovde menjamo smo ono sto nam treba
            }
        default:
            return state;
    }
};

export default userReduser;