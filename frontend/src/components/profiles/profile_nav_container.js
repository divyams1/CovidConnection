import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import {fetchFavors} from '../../actions/favor_actions';

const mapStateToProps = (state) => ({
    modal: state.ui.modal,
    currentUser: state.session.currentUser,
    favors: Object.values(state.entities.favors)

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFavors: () => dispatch(fetchFavors()),
    makeFavor: (
        <button onClick={() => dispatch(openModal('favor'))}>
            Create new favor
        </button>
    ),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileNav));