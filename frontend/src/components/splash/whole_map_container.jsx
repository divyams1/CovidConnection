import { connect } from 'react-redux';
import React from 'react';
import { fetchFavors } from '../../actions/favor_actions';
import WholeMap from './whole_map';
const mSTP = state => {
    return {
        favors: state.entities.favors,
        currentUser: state.session.user,
        loggedIn: state.session.isAuthenticated
    }
}

const mDTP = dispatch => {
    return {
    fetchFavors: () => dispatch(fetchFavors())
    }
}


export default connect(mSTP, mDTP)(WholeMap);