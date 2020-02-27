import React, { useState } from 'react';
import FormInput from '../form-input/C_form_input.jsx';
import CustomButton from '../custom-button/C_custom_button.jsx';
import {auth, signInWithGoogle} from '../../FIREBASE/firebase.utils.js'
import './C_sign_in.scss';


//Komponenta koja koristi useState HOOK 
const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email:'', password:'' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
       

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email:'', password:''});
        }
        catch(error){
            console.log(error);
        }
    }

    const handleChange = event => {
       const {value, name} = event.target;
       setCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name="email" 
                type="email"
                handleChange={handleChange} 
                value={email} 
                label="email"
                required />
                
                <FormInput 
                name="password" 
                type="password" 
                handleChange={handleChange}
                value={password} 
                label="password"
                required />
                
                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;