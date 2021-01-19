import React from 'react';
import ProfileNavContainer from '../profiles/profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
// import FavorItem from '../favors/favor_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLifeRing, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import FavorsReducer from '../../reducers/favors_reducer';
import NavBarContainer from './../splash/profile_nav_container';

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
  handleFavors() {
    if (this.props.favors) {
      return (
        <div className="small-prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_for_user_id === this.props.user_profile_id && favor.favor_status !== "Done")
            .map((favor, idx) => {
              if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item" >
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  {/*NOTE: We may want to add a "this favor is being fulfilled by *username* here" */}
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p className="currently-fulfilling-none">This favor has not been taken yet</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">Your favor is currently being fulfilled by {favor.favor_by_username}</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to log favor as complete.</button>
                </div>
              } else if (favor.favor_by_user_id === this.props.currentUser.id) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">You are currently fulfilling this favor</p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>
                    Click here to undo accepting this favor.
                  </button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              }
              else if (favor.favor_by_username) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to accept favor</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                  {/* <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button> */}
                </div>

              }
            }
            )
          }
        </div>
      )
    }
  }
  handleTakenFavors() {
    if (this.props.favors) {
      return (
        <div className="small-prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_by_user_id === this.props.user_profile_id && favor.favor_status !== "Done")
            .map((favor, idx) => {
              if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item" >
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  {/*NOTE: We may want to add a "this favor is being fulfilled by *username* here" */}
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p className="currently-fulfilling-none">This favor has not been taken yet</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">Your favor is currently being fulfilled by {favor.favor_by_username}</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to log favor as complete.</button>
                </div>
              } else if (favor.favor_by_user_id === this.props.currentUser.id) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">You are currently fulfilling this favor</p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>
                    Click here to undo accepting this favor.
                  </button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              }
              else if (favor.favor_by_username) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to accept favor</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                  {/* <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button> */}
                </div>

              }
            }
            )
          }
        </div>
      )
    }
  }

  // <h1 className="favor-header">  {this_user.username}  </h1>
  render() {
    // const this_user_favors = this.listOfRequest();
    // const noFavors = this.handleNoFavors();
    // const hasFavors = this.handleFavors();
    const favors = (this.props.favors ? this.handleFavors() : this.handleNoFavors());
    const taken_favors = (this.props.favors ? this.handleTakenFavors() : this.handleNoTakenFavors());
    // if (!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0)) {
    //   return (
    //     <h1>You are not logged in</h1>
    //   )
    // }
    let this_user = "";
    debugger 
    if (this.props.users) {
      this_user = this.props.users.find(user => user._id === this.props.user_profile_id);
    }

      return (
        <>
          <NavBarContainer />
          <div className="profile-view">
           
      
        
        
      
          
            <div className="prof-favors">
              <h1 className="profile-username">  {this_user.username}'s page  </h1>
              <div className="two-lists">
                {/* <h3 className="prof-fav-hd2"> These are the good deeds you have requested from others  </h3> <br /> */}
                <div className="favor-lst-requests">
                  <div className="favor-request-boxes">
                    <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faLifeRing} />  Requested Favors</h2>
                    <div className="favor-button-and-text" onClick={this.renderForm('favor')}>
                      <button className="favor-btn" onClick={this.renderForm('favor')}>
                        <img className="add-favor" src="https://cdn2.iconfinder.com/data/icons/vibrancie-health/30/health_002-medical-cross-hospital-first-aid-doctor-512.png" />
                      </button>
                      <p id="add-favor-text">{"Ask Favor"}</p>
                    </div>
                  </div>
                  {favors}
                </div>

                <div className="favor-lst-taken">
                  <h2 className="prof-fav-hd-taken"> <FontAwesomeIcon icon={faHandsHelping} />  Taken Favors</h2>
                  <div className="favor-button-and-text" onClick={this.renderForm('favor')}>
                    <div className="add-favor-ghost"></div>


                  </div>

                  {taken_favors}
                </div>
              </div>

            </div>
          </div>
        </>
      );

    }
  
}
export default ProfileShow;
