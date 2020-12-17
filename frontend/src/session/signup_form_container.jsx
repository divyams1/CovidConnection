// src/components/session/signup_form_container.js

import { connect } from 'react-redux';
import { signupUser, login, clearSessionErrors } from '../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../actions/modal_actions';
import {Link} from 'react-router-dom';



const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: user => dispatch(signupUser(user)),
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    other: (
      <Link className="nav-btns-child-login" onClick={(e) => {e.preventDefault(); return dispatch(openModal('login'))}}>
        Log In 
      </Link>
    ),
    closeModal: () => dispatch(closeModal())


  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);