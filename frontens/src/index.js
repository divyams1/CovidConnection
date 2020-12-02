import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

import configureStore from './store/store';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './utils/session_api_util';

import { logout } from './actions/session_actions';

import axios from 'axios';

window.axios = axios; 



document.addEventListener('DOMContentLoaded', () => {
  let store;


  if (localStorage.jwtToken) {

    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

  
    if (decodedUser.exp < currentTime) {
      
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
