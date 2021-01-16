import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SplashNav2 from './profilenav2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars, faSignOutAlt, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {fetchFavors} from '../../actions/favor_actions';

const mapStateToProps = (state) => ({
    modal: state.ui.modal,
    currentUser: state.session.user,
    favors: state.entities.favors.data,
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated


})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFavors: () => dispatch(fetchFavors()),
    sign:  (<i class="fas fa-user-plus icon icon-fill" onClick={() => dispatch(openModal('signup'))}>  <FontAwesomeIcon className="fai" icon={faUserPlus} /> </i> )
    ,
     log:
        (<i class="fas fa-sign-in-alt icon icon-fill"  onClick={() => dispatch(openModal('login'))}> <FontAwesomeIcon  icon={faSignInAlt} /> </i> )
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashNav2));