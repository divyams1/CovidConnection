import { connect } from 'react-redux';
import React from 'react';
import { fetchFavors } from '../../actions/favor_actions';
import NewSplash from './new_splash';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {
        favors: state.entities.favors,
        currentUser: state.session.user,
        loggedIn: state.session.isAuthenticated
    }
}

const mDTP = dispatch => {
    return {
        fetchFavors: () => dispatch(fetchFavors()),
        logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFavors: () => dispatch(fetchFavors()),
    sign: (<button  className="splash-btns" onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </button>)
        ,
    log: (<button  className="splash-btns"  onClick={() => dispatch(openModal('login'))}>
          Log In 
        </button>)
    }
}

export default connect(mSTP, mDTP)(NewSplash);