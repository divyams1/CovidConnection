import React from 'react';
import { AuthRoute, ProtectedRoute } from './utils/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './components/profiles/profile_container';
import Modal from './modal';
import SplashContainer from './components/splash/splash_container';
import { Route } from 'react-router-dom';
import FavorCreateContainer from './components/create_favor/favor_create_container';
import About from './components/about/about'
import AboutContainer from './components/about/about_container';




const App = () => (
  <div>
     <Modal />
    
    <Switch>
      
      <Route exact path="/" component={SplashContainer} /> 
      <ProtectedRoute exact path='/add' component = {FavorCreateContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/:user_id" component={ProfileContainer} /> 
      <Route exact path="/about" component={AboutContainer} />
    
    </Switch>
  </div>
);

export default App;

