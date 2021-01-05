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
import CovidHelp from './components/covid_help/covid_help';
import NewsFeedContainer from './components/newsfeed/newsfeed_container';
import ProfileShowContainer from './components/profile_show/profile_show_container';


const App = () => (
  <div>
     <Modal />
    
    <Switch>
      <Route exact path="/" component={SplashContainer} /> 
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/newsfeed" component={NewsFeedContainer} />
      <ProtectedRoute exact path='/add' component = {FavorCreateContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/covid"  component={CovidHelp} />
      <ProtectedRoute exact path="/:user_id" component={ProfileContainer} /> 
      <ProtectedRoute exact path="profile" component={ProfileContainer} /> 
      <Route exact path="/user/:user_id" component={ProfileShowContainer} />
    
    </Switch>
  </div>
);

export default App;

