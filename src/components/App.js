import React from 'react';

import HomePage from './Homepage/Homepage';
import '../styles/App.scss';

class App extends React.Component{
    render(){
        return(
            <div>
                <HomePage/>
            </div>
        );
    };
};

export default App;