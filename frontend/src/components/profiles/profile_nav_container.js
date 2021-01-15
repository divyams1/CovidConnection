import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ProfileNav2 from './profilenav2';

import {fetchFavors} from '../../actions/favor_actions';

const mapStateToProps = (state) => ({
    modal: state.ui.modal,
    currentUser: state.session.user,
    favors: state.entities.favors.data,


})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFavors: () => dispatch(fetchFavors()),
    makeFavor: (
        <button className="submit-btn" onClick={() => dispatch(openModal('favor'))}>
            Create new favor
        </button>
    ),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileNav2));