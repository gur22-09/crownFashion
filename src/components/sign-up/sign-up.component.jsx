import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';



import {SignUpContainer,SignUpTitle} from './sign-up.styles';



const SignUp =()=>{
   
   const [userData,setUserData] = useState({
       displayName:'',
       email:'',
       password:'',
       confirmPassword:''
   }); 
    
   const {displayName,email,password,confirmPassword} = userData;
   const handleSubmit = async (event)=>{
        
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert("password and confirm password donot match");
            return;
        }

        try{
           //authenticating the new user  
           const {user} = await auth.createUserWithEmailAndPassword(email,password);
           
           await createUserProfileDocument(user,{displayName});

           setUserData({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
           });

        }catch(error){
          console.error(error);
          
        }
    }
    
   const handleChange = (event)=>{
        const {name,value} = event.target;

        setUserData({...userData,[name]:value});
    }


    

        

        return(
            <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up using email and password</span>
            <form onSubmit={handleSubmit}>
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
                  label='Confirm Password'
                  required
                 />
                 <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

            </SignUpContainer>
        )
    
}


export default SignUp;