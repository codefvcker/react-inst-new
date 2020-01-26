import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';

import App from './App';
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'


ReactDOM.render(
<BrowserRouter>
    <App>
        <Switch>
            <Route exact path='/' component={Feed} />
            <Route exact path='/profile' component={Profile} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </App>
</BrowserRouter>
, document.getElementById('root'));


