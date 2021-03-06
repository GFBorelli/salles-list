import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthOrApp from './main/AuthOrApp';
import * as serviceWorker from './serviceWorker';

import reducers from './reducers/reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import multi from 'redux-multi'

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, multi)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthOrApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();