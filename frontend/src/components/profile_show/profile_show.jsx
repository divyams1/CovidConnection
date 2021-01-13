import React from 'react';
import ProfileNavContainer from '../profiles/profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
// import FavorItem from '../favors/favor_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import FavorsReducer from '../../reducers/favors_reducer';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.favors;
        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }
    
      componentDidMount() {
      this.props.fetchFavors();
      this.state = this.props.favors;
      this.props.closeModal();
      this.props.fetchUsers();
      this.props.getUser(this.props.user_profile_id);
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
              {/* <ProfileNavContainer /> */}
              <div className="prof-nofavors"> We currently have no record of any favors by you.
                Click the add button to list any good deeds you have done lately </div>
              </>
    )}
  handleNoTakenFavors() {
    
    if (!this.props.favors) return (
      <>
        {/* <ProfileNavContainer /> */}
        <div className="prof-nofavors"> We currently have no record of any favors that you are working on for other users.
       </div>
      </>
    )
  }
    handleButtonName(favor){
      if (favor.favor_status === "Doing") {
        return "Accepted, " + favor.favor_by_username + ". Click to undo accepting the favor"
      } else {
        return "Click to Accept Favor"
      }
    }
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
          .filter(favor => favor.favor_for_user_id === this.props.match.params.user_id)
          .map( (favor, idx)=> {
            if (!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0)) {
              return <div id={idx} className="favor-item2">
                <h2 className="favor-header"> {favor.favor_title} </h2>
                <p className="favor-newsfeed"> {favor.favor_description} </p>
                {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}

                <p className="newspage-links">Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
              </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id) {
                return <div id={idx} className="favor-item">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    <p> {this.handleTime(favor.date)} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                    <br></br>
                 
                </div>
            } else if (favor.favor_by_user_id !== null && favor.favor_for_user_id !== this.props.currentUser.id && favor.favor_by_user_id !== this.props.currentUser.id) {
                return <div id={idx} className="favor-item">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    <p> {this.handleTime(favor.date)} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <p>`This has been accepted by {favor.favor_by_username}.`</p>
                    <br></br>
                 
                </div>
            } else if (favor.favor_by_user_id !== null && favor.favor_for_user_id !== this.props.currentUser.id && favor.favor_by_user_id === this.props.currentUser.id) {
                return <div id={idx} className="favor-item">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    <p> {this.handleTime(favor.date)} </p>
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Accepted Favor, Click to Undo</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <br></br>
                   
                </div>
            }
            else {
                return <div id={idx} className="favor-item">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    <p> {this.handleTime(favor.date)} </p>
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <br></br>
                 
                </div>
            }
        })
        }
    </div>
      )}
      }
  handleTakenFavors() {
    if (this.props.favors) {
      return (
        <div className="prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_by_user_id === this.props.match.params.user_id)
            .map((favor, idx) => {
              if (!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0)) {
                return <div id={idx} className="favor-item2">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p className="favor-newsfeed"> {favor.favor_description} </p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}

                  <p className="newspage-links">Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                </div>
              } else if (favor.favor_for_user_id === this.props.match.params.user_id) {
                return <div className="favor-item">
                  <p key={idx} className="favor-list">  {favor.favor_description}</p>
                  <p>  {this.handleTime(favor.date)} </p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>delete</button>
                </div  >
              } else if (favor.favor_by_user_id === this.props.match.params.user_id) {
              return <div className="favor-item">
              <p key={idx} className="favor-list">  {favor.favor_description}</p>
              <p>  {this.handleTime(favor.date)} </p>
              <p>You are currently fulfilling this favor for {favor.favor_for_username}</p>
              <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
              {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
          </div>
            }
              else {
                return <div className="favor-item">
                  <p key={idx} > {favor.favor_description}</p>
                  <p>  {this.handleTime(favor.date)} </p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              }
            }
            )
          }
        </div>
      )
    }
  }
    render() {
      // const this_user_favors = this.listOfRequest();
        // const noFavors = this.handleNoFavors();
        // const hasFavors = this.handleFavors();
        const favors = (this.props.favors ? this.handleFavors() : this.handleNoFavors());
        const taken_favors = (this.props.favors ? this.handleTakenFavors() : this.handleNoTakenFavors());
        
        let this_user = "";

        if (this.props.users) {
          this_user = this.props.users.find(user => user._id === this.props.user_profile_id);
        }

      
        
        
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
              <h1 className="favor-header">  {this_user.username}  </h1>
              <h3 className="prof-fav-hd2"> These are the good deeds you have done for others  </h3> <br />
                <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faUser} />  Requested Favors</h2>
                <center> </center>
                <div className="favor-lst">
                      {favors}
                </div>
                  <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faUser} />  Taken Favors</h2>
                  <div className="favor-lst">
                    {taken_favors}
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
export default ProfileShow;
