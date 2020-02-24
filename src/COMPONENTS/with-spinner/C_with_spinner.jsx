import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './C_with_spinner_style.jsx';


//High order komponenta koja obmotava komponentu kojoj je potrebna 
// prvi parametar je parametar potreban high order komponenti a dfrugi parametar (otherProps) su parametri komponente koju obmotava
// Ova komponenta sluzi kao loader dok se podaci ne ucitaju u komponentu koju obmotava
const WithSpinner = WrappedComponent => {
    const Spinner =  ({ isLoading, ...otherProps }) => { 
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        );
    };

    return Spinner;
}

export default WithSpinner;


