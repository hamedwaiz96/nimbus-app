import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SearchContainer from './search_container';

const App = () => (
    <div>
        <Route path="/" component={SearchContainer} />
    </div>
);

export default App;