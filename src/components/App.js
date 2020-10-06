import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from '../pages/homepage/HomePage';
import '../styles/App.scss';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/hats" component={HatsPage}/>
                </Switch>
            </div>
        );
    };
};

export default App;