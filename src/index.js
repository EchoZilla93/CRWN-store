import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import App from './components/App';
import rootReducer from './redux/reducers/root';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
    );

const persistor = persistStore(store);    

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
,document.querySelector('#root'));