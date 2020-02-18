import React from 'react';

//import './C_custom_button.scss';
import {CustomButtonContainer} from './C_custom_button_style.jsx';

const CustomButton = ({children, ...props}) => (
    /**U otherProps moze se proslediti na primer da li je dugme submit 
     * U children ono sto se nalazi izmedju dva taga
    */
   /* Kako je bilo bez uvodjenja stajl komponente
    <CustomButtonContainer className={`${inverted ? 'inverted' : ''} 
                        ${isGoogleSignIn ? 'google-sign-in' : ''}
                        custom-button`
                      } {...otherProps}> 
        {children}
    </CustomButtonContainer>
    */
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>
);

export default CustomButton;