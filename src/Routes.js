import React from 'react';
import { Route, IndexRoute} from 'react-router-3';
import App from './App';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import Campaigns from './components/Campaigns';
import LoginPage from './components/common/LoginPage';
import requireAuth from './util/RequireAuthentication';
import SignupPage from "./components/common/SignupPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="campaigns" component={requireAuth(Campaigns)}/>
        <Route path="login" component={LoginPage} />
        <Route path="register" component={SignupPage} />
    </Route>
);