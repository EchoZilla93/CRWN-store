import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from "../../components/sign-up/SignUp";


const SignInUp = () => (
    <div 
    className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInUp;