import React, { useState } from 'react';
import FormInput from '../form-input/C_form_input.jsx';
import CustomButton from '../custom-button/C_custom_button.jsx';
import { auth, createUserProfileDocument } from '../../FIREBASE/firebase.utils.js';
import './C_sign_up.scss';


const SignUp = () => {
   const [userCredentials, setCredentials] = useState({displayName:'', email:'', password:'', confirmPassword:''});
   const { displayName, email, password, confirmPassword } = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setCredentials({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            console.error(error);
        }
    }

    const handleChange = event => {
        const { name, value} = event.target;

        setCredentials({...userCredentials, [name]: value});
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with email and apssword</span>
            <form className='sign-up-form' onSubmit={handleSubmit}> 
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm password'
                    required
                />
                <CustomButton type='submit'>
                    Sign up
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
