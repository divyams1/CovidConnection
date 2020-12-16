// src/components/session/login_form_container.js

import { connect } from 'react-redux';
import { loginUser, clearSessionErrors } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import LoginForm from './login_form';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUser

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    other: (
      <Link className="nav-btns-child-login" onClick={(e) => {e.preventDefault(); return dispatch(openModal('signup'))}}>
        Sign Up
      </Link>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
