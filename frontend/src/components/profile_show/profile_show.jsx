import React from 'react';
import ProfileNavContainer from '../profiles/profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
// import FavorItem from '../favors/favor_item';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.favors;
        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }
    
    componentDidMount() {
      console.log(this.props.currentUser.id)
      this.props.fetchFavors();
      this.state = this.props.favors;
      this.props.closeModal();
      
      // this.props.fetchFavorsForUser({ user_id: this.props.user_profile_id });
    }

    componentWillReceiveProps(newState) {
      this.setState({ favors: newState.favors });
    } 
    
    componentWillUnmount() {
        this.props.closeModal();
    }

    // listOfRequest() {
    //   return this.props.favors[0].filter(favor => favor.favor_for_user_id === this.props.user_profile_id)
    // }


    renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }

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
      <div className="prof-favors">
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.match.params.user_id)
          .map( (favor, idx) =>   <p key={idx}  className="favor-list"> {favor.favor_description}</p>)
        }
    </div> 
      )}


      }
    
    render() {

      // const this_user_favors = this.listOfRequest();
        
        
          return (
            <>
            <ProfileNavContainer />
            <div className="prof-favors">
              
              <h1>  {this.props.currentUser.username}!  </h1>
              <h2 className="prof-nofavors"> Your quest to make this world a better place.... These are the favors you have done! </h2>
               <h3>  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress.      <NavLink to="/covid">Covid Help</NavLink>        </h3>   


              <div>
                {this.handleFavors()}

                {this.handleNoFavors()}
              </div>
              </div>
              <div  className="banners">

                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

                     <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />
                              

              </div>    

               <div>
                        {/* <img className="banner" src="https://i.ibb.co/MSmtpdb/Stay.jpg" alt="covid help"/> */}

              </div>
              
              {/* {this.state.favors.map(favor => (
                <FavorItem key={favor.id} title={favor.title} />
              ))} */}
            
            </>
          );
        }
      
}

export default ProfileShow;
