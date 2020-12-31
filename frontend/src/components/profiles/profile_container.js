import { connect } from 'react-redux';
import { fetchFavors, fetchFavorsForUser } from '../../actions/favor_actions';
import { updateFavor } from '../../actions/favor_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  
  return {
    user_profile_id: ownProps.match.params.user_id,
    favors: state.entities.favors.data,
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavors: () => dispatch(fetchFavors()),
    fetchFavorsForUser: (user_id) => dispatch(fetchFavorsForUser(user_id)),
    updateFavor: (favor_id) => dispatch(updateFavor(favor_id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
