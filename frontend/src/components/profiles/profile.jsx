import React from 'react';
import ProfileNavContainer from './profile_nav_container';
// import FavorItem from '../favors/favor_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.favors;
        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
    }
    
    componentDidMount() {
      console.log(this.props.currentUser.id)
      this.props.fetchFavors();
      this.state = this.props.favors;
      
      // this.props.fetchFavorsForUser({ user_id: this.props.user_profile_id });
    }

    componentWillReceiveProps(newState) {
      this.setState({ favors: newState.favors });
    }   

    // listOfRequest() {
    //   return this.props.favors[0].filter(favor => favor.favor_for_user_id === this.props.user_profile_id)
    // }

    handleNoFavors(){

              if (!this.props.favors) return (
              <>
              <ProfileNavContainer />
              <div className="prof-nofavors">This user currently has no Favors</div>

              </>
    )}

    handleFavors(){

    if(this.props.favors){
      
     
      return (
      <div>
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
          .map(favor =>   <p  className="favor-list">{favor.favor_description}</p>)
        }
    </div> 
      )}


      }
    
    render() {

      // const this_user_favors = this.listOfRequest();
        
        
          return (

            <div>
              <ProfileNavContainer />
              <h2 className="profile-header"> Your quest to make this world a better place.... These are your favors </h2>

              <div>
                {this.handleFavors()}

                {this.handleNoFavors()}
              </div>
              <div  className="banners">
                     <img className="support-banner" src="https://i.ibb.co/Mcy8SMY/disclaimerpayitfor.png" />
                        <img className="banner" src="https://i.ibb.co/MSmtpdb/Stay.jpg" alt="covid help"/>

              </div>
              
              {/* {this.state.favors.map(favor => (
                <FavorItem key={favor.id} title={favor.title} />
              ))} */}
            </div>
          );
        }
      
}

export default Profile;
