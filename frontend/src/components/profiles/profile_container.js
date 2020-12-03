import { connect } from 'react-redux';
import { fetchFavors } from '../../actions/favor_actions';
import Profile from '../profile';

const mapStateToProps = (state) => {
  return {
    favors: Object.values(state.favors.user),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavors: id => dispatch(fetchFavors(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
