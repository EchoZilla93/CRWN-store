import React from 'react';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords dont match');
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(err){ 
            console.log(err)
        }
    };

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="titile">I do not have a accaunt</h2>
                <span>SIgn up with email</span>
                <form className="sign-up-form"
                onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required/>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required/>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required/>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required/>
                        <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;