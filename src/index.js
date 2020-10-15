import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import App from './components/App';
import {rootReducer} from './redux/reducers/root';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
    );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
,document.querySelector('#root'));