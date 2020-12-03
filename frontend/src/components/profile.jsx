import React from 'react';
// import FavorItem from '../favors/favor_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favors: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchFavors(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ favors: newState.favors });
    }   
    
    render() {
        if (this.state.favors.length === 0) {
          return (<div>This user currently has no Favors</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Favors</h2>
              {/* {this.state.favors.map(favor => (
                <FavorItem key={favor.id} title={favor.title} />
              ))} */}
            </div>
          );
        }
      }
}

export default Profile;
