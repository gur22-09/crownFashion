import React from 'react';
import './sign-in.component.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
         e.preventDefault();
         this.setState({email:'',password:''});
    }

    handleChange=(e)=>{
       const  {name,value}=e.target;
       this.setState({[name]:value},()=>{
           console.log(this.state)
       });
    }

    render(){
        return(
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <span>sign in using your email address and password </span>

                <form >
                 <FormInput handleChange={this.handleChange} name='email' type='email' value={this.state.email}  label='email' required />
                 <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password}  label='password' required/>
                 <CustomButton onClick={this.handleSubmit} type='submit' value='submit form'>
                  Sign In
                 </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;

