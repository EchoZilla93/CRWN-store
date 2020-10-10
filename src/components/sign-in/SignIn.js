import React from 'react';

import FormInput from '../form-input/FormInput';
import Buttom from '../button/Button';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        };
    };

    handleSubmit(e){
        e.preventDefault();
        this.setState({email:'',password:''});
    };

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]:value});
    };


    render(){
        return (
            <div className="sign-in">
                <h2>I already have a accaount</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email"
                    label="email"
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}/>
                    <FormInput 
                    name="password"
                    type="password" 
                    label="password"
                    value={this.state.password} 
                    required
                    handleChange={this.handleChange}/>
                    <Buttom type="submit" value="Submit Form">Sign In</Buttom>
                </form>
            </div>
        )
    }
}

export default SignIn;