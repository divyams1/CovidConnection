import { connect } from 'react-redux';
import React from 'react';
import { fetchFavors } from '../../actions/favor_actions';
import Splash from './splash';


const mSTP = state => {
    return {
        favors: state.entities.favors,
        currentUser: state.session.user 
    }
}

const mDTP = dispatch => {
    return {
        fetchFavors: () => dispatch(fetchFavors())
    }
}

export default connect(mSTP, mDTP)(Splash);