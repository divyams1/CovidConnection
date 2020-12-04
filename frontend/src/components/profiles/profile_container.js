import { connect } from 'react-redux';
import { fetchFavors, fetchFavorsForUser} from '../../actions/favor_actions';
import Profile from '../profile';

const mapStateToProps = (state, ownProps) => {
  return {
    user_profile_id: ownProps.match.params.user_id,
    favors: Object.values(state.entities.favors),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
     fetchFavors: () => dispatch(fetchFavors()),
     fetchFavorsForUser: (user_id) => dispatch(fetchFavorsForUser)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
