import React from 'react';
import { AuthRoute, ProtectedRoute } from './utils/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './session/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './components/profiles/profile_container';
import Modal from './modal';
import './App.css';
import SplashContainer from './components/splash/splash_container';
import { Route } from 'react-router-dom';
import favor_create_container from './components/create_favor/favor_create_container';




const App = () => (
  <div>
     <Modal />
     <header>
    <NavBarContainer />
    </header>
    <Switch>
      <Route exact path='/add' component = {favor_create_container} />
      <Route exact path="/" component={SplashContainer} /> 
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/:user_id" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;

