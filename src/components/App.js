import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from './header/Header';
import SignInUp from '../pages/sign-in-up/SignInUp';
import '../styles/App.scss';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/shop" component={ShopPage}/>
                    <Route  path="/signin" component={SignInUp}/>
                </Switch>
            </div>
        );
    };
};

export default App;