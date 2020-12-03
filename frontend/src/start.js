import React from 'react';
import { AuthRoute, ProtectedRoute } from './utils/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './session/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './components/profiles/profile_container';
import Modal from './modal';
import './App.css';




const App = () => (
  <div>
     <Modal />
     <header>
    <NavBarContainer />
    </header>
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} />  */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;

