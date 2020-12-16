import {fetchFavors, createFavor} from '../../actions/favor_actions';
import { connect } from 'react-redux'; 
import FavorCreate from './favor_create';
import { withRouter } from "react-router-dom";
import {closeModal} from '../../actions/modal_actions';



const mSTP = state => {
    return {
        favors: Object.values(state.entities.favors),
        currentUser: state.session.user
    }
}

const mDTP = dispatch => {
    return {
        fetchFavors: () => dispatch(fetchFavors()),
        createFavor: favor => dispatch(createFavor(favor)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mSTP, mDTP)(FavorCreate));