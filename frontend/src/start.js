import React from 'react';
import { AuthRoute, ProtectedRoute } from './utils/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './session/navbar_container';


import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </Switch>
  </div>
);

export default App;

