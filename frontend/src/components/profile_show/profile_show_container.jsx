import { connect } from 'react-redux';
import { fetchFavors, fetchFavorsForUser } from '../../actions/favor_actions';
import ProfileShow from './profile_show';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    user_profile_id: ownProps.match.params.user_id,
    favors: state.entities.favors.data,
    currentUser: state.session.user,
    modal: state.ui.modal,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavors: () => dispatch(fetchFavors()),
    fetchFavorsForUser: (user_id) => dispatch(fetchFavorsForUser),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);