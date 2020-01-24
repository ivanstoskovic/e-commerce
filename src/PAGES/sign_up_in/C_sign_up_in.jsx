import React from 'react';
import SignIn from '../../COMPONENTS/sign-in/C_sign_in.jsx'
import SignUp from '../../COMPONENTS/sign-up/C_sign_up.jsx'
import './C_sign_up_in.scss';


const SignUpInPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignUpInPage;