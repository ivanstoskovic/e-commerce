import React from 'react';

import './C_custom_button.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    /**U otherProps moze se proslediti na primer da li je dugme submit 
     * U children ono sto se nalazi izmedju dva taga
    */
    <button className={`${inverted ? 'inverted' : ''} 
                        ${isGoogleSignIn ? 'google-sign-in' : ''}
                        custom-button`
                      } {...otherProps}> 
        {children}
    </button>
);

export default CustomButton;