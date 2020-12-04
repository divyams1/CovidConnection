import React from 'react';
// import FavorItem from '../favors/favor_item';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favors: []
        }
    }
    componentDidMount() {
      this.props.fetchFavors();
      // this.props.fetchFavorsForUser({ user_id: this.props.user_profile_id });
    }
    componentWillReceiveProps(newState) {
      this.setState({ favors: newState.favors });
    }   
    // listOfRequest() {
    //   return this.props.favors[0].filter(favor => favor.favor_for_user_id === this.props.user_profile_id)
    // }
    
    render() {
      // const this_user_favors = this.listOfRequest();
        if (this.state.favors.length === 0) {
          return (<div>This user currently has no Favors</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Favors</h2>
          {this.props.favors[0]
          .filter(favor => favor.favor_for_user_id === this.props.user_profile_id)
          .map(favor => <p>{favor.favor_description}</p>)
        }
            </div>
          );
        }
      }
}
export default Profile;

