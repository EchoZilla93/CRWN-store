import React from 'react';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        };
    };

    handleSubmit = async e =>{
        e.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(err){
            console.log(err)
        }
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
                    <div className="buttons">
                        <Button type="submit" value="Submit Form">Sign In</Button>
                        <Button 
                        onClick={signInWithGoogle}
                        isGoogleSignIn>
                            Sign with Google
                            </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;