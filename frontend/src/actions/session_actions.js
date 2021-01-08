// src/actions/session_actions.js

import * as APIUtil from '../utils/session_api_util';
import {closeModal} from './modal_actions';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_CURRENT_USERS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = thisUser => ({
  type: RECEIVE_USER,
  thisUser
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});
  
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({

    type: CLEAR_SESSION_ERRORS,

})

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};



export const loginUser = user => dispatch => (
  APIUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
    dispatch(closeModal());
    dispatch(clearSessionErrors());
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const signupUser = user => dispatch => (
  APIUtil.signup(user).then(() => {
    dispatch(loginUser(user))

  }, err => {
    dispatch(receiveErrors(err.response.data))
  }
  )
);

export const getUser = user_id => dispatch => {
  
  return APIUtil.getUser(user_id).then(user => {
    
    dispatch(receiveUser(user));
  }
  )
};

export const fetchUsers = () => dispatch => {
  return APIUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
}

export const clearSessionErrors = () => dispatch => {

        return dispatch(clearErrors());

}