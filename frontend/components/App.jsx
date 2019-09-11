import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SearchContainer from './search_container';

const App = () => (
    <div>
        <header>
            <h1>Nimbus</h1>
            <GreetingContainer />
        </header>
        <Route exact path="/" component={SearchContainer} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <ProtectedRoute path="/places/:place_id/reviews/new"/>
    </div>
);

export default App;