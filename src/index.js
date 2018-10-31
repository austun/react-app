import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router-3';
import Routes from './Routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('root'));
