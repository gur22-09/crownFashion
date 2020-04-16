import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {SignInAndSignUpContainer} from './sign-in-sign-up.styles';

const SignInAndSignUp =()=>(
    <SignInAndSignUpContainer>
       <SignIn />
       <SignUp />
    </SignInAndSignUpContainer>
)


export default SignInAndSignUp;