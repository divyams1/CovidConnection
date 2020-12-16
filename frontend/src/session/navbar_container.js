
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import {openModal, closeModal} from '../actions/modal_actions';

import NavBar from './navbar';
import './navbar.css'

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => {

  return {

    sign: (<button className="nav-btns-child" onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </button>
    ),
    log: (<button className="nav-btns-child-login"  onClick={() => dispatch(openModal('login'))}>
          Log In 
        </button>
    ),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())




  }


}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
