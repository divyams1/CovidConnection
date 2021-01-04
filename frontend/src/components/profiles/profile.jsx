import React from 'react';
import ProfileNavContainer from './profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

// import FavorItem from '../favors/favor_item';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.favors;
        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleTime = this.handleTime.bind(this);
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

      debugger 
              if (!this.props.favors) return (
              <>
              {/* <ProfileNavContainer /> */}
              <div className="prof-nofavors"> We currently have no record of any favors by you.  
                Click the add button to list any good deeds you have done lately </div>

              </>
    )}

    handleTime(time){

    let currentDate = new Date(time);
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      

      <div className="date"> 
        <span> Date: {currentDate.toDateString()} </span> 
        <span className="time-str"> Time: {hours} :{minutes} :{seconds} </span>
      </div> 

    )

    }
    
    handleFavors(){

    if(this.props.favors){
      
     
      return (
      <div className="prof-favors">
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
          .map( (favor, idx) =>   <p key={idx}  className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>)
        }
    </div> 
      )}


      }
    
    render() {

      // const this_user_favors = this.listOfRequest();
        
        // const noFavors = this.handleNoFavors();
        // const hasFavors = this.handleFavors();
        
        const favors = (this.props.favors ? this.handleFavors() : this.handleNoFavors());
          return (
            <>
            <ProfileNavContainer />

            <div className="profile-view">

            <div  className="banners">


                     <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --      
                       <NavLink to="/covid">Covid Help</NavLink> </h3>   

                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

                      {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}

                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />

                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />



                     
                    


                              

              </div>    

            <div className="prof-favors">
              
              <h1 className="favor-header">  Welcome {this.props.currentUser.username}!  </h1>

              <h3 className="prof-fav-hd2"> These are the good deeds you have done for others  </h3> <br />


                <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faUser} />  Completed Favors</h2>


                <center> <button className="favor-btn" onClick={this.renderForm('favor')}> 
                <img className="add-favor" src="https://i.ibb.co/Bz1RZS5/cross.png" /> Add Favor</button></center>


                <div className="favor-lst">
                      {favors}
                </div>
                       
              <div className="prof-favors">
                {/* {this.handleFavors()}

                {this.handleNoFavors()} */}

                     
              </div>
              </div>
              
               <div>
                        {/* <img className="banner" src="https://i.ibb.co/MSmtpdb/Stay.jpg" alt="covid help"/> */}

              </div>
              
              {/* {this.state.favors.map(favor => (
                <FavorItem key={favor.id} title={favor.title} />
              ))} */}
            
            </div>
            </>
          );
        }
      
}

export default Profile;
