import React,{useState} from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles';


const SignIn =()=> {
    
    const [userData,setUserData] = useState({
        email:'',
        password:''
    })
   const {email,password} = userData; 
   const handleSubmit=(e)=>{
        e.preventDefault();
        setUserData({email:'',password:''});
    }

   const handleChange=(e)=>{
       const  {name,value}=e.target;
       setUserData({...userData,[name]:value});
         
    }
    /*attribute without anyspecified value like isGoogleSignIn will return true*/
       

    return(
            <SignInContainer className='sign-in'>
                <SignInTitle className='title'>I already have an account</SignInTitle>
                <span>sign in using your email address and password </span>

                <form >
                 <FormInput handleChange={handleChange} name='email' type='email' value={email}  label='email' required />
                 <FormInput handleChange={handleChange} name='password' type='password' value={password}  label='password' required/>
                 <ButtonsBarContainer className='sign-in-container'>
                  <CustomButton onClick={handleSubmit} type='submit' value='submit form'>
                   Sign In
                  </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In using Google</CustomButton>
                 </ButtonsBarContainer>
                </form>
            </SignInContainer>
    )
    
}

export default SignIn;

