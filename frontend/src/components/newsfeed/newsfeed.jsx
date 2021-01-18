import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './newsfeed.css'
import ProfileNavContainer from '../profiles/profile_nav_container';
import NavBarNoLogoContainer from '../../session/navbar_no_logo_container';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../session/navbar_container'
import NavBarContainer from './../splash/profile_nav_container';
class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
        this.userShow = this.userShow.bind(this);
        this.requestShow = this.requestShow.bind(this);
        // this.handleNav = this.handleNav.bind(this);
    }
    componentDidMount() {
        this.props.fetchFavors();
    }
    requestShow() {
        if (!this.state.favorRequests) {
            this.setState( { favorRequests: true})
        } else {
            this.setState( { favorRequests: false})
        }
    }
      userShow() {
        if ( !this.state.myFavors ) {
            this.setState( { myFavors: true})
        } else {
            this.setState( {myFavors: false })
        }
    }
    updateName() {
        return e=> {
            this.setState( { forUser: e.currentTarget.value })
        }
    }
    handleButtonName(favor) {
        if (favor.favor_status === "Doing") {
            return "This is Taken by " + favor.favor_by_username
        } else if (favor.favor_status === "Request") {
            return "Click to Accept Favor"
        } else {
            return "Debug this."
        }
    }

    handleTime(time) {
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
    // handleNav() {
    //     if (this.props.currentUser ) {
    //         return <div> <ProfileNavContainer /> </div>
    //     } else {
    //         return <div> <NavBar /> </div>
    //     }
    // }
    render() {
        let favor_text = this.state.myFavors? "View All Favors" : "View Your Favors"
        let request_text = this.state.favorRequests?   "View All Posts" : "View Unaccepted Favors"
        let favors = (this.props.favors.data) || [];
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        favors = ( this.state.favorRequests? favors.filter( favor => favor.favor_status === "Request") : favors )
        favors = ( this.state.userSearch? favors.filter( favor => favor.favor_for_username === this.state.forUser) : favors)
        favors = favors.filter(favor => favor.favor_status !== "Done")
    //    const navBar =   ( Object.values(this.props.currentUser).length? ProfileNavContainer : NavBar )
  
       
        favors = favors.map( (favor, idx)=> {
            if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item-newsfeed" >
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description"> {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    {/*NOTE: We may want to add a "this favor is being fulfilled by *username* here" */}
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
                return <div className="favor-item-newsfeed">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description"> {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    <p className="currently-fulfilling-none">This favor has not been taken yet</p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item-newsfeed">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description"> {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    <p id="currently-fulfilling">Your favor is currently being fulfilled by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to log favor as complete.</button>
                </div>
            } else if (favor.favor_by_user_id === this.props.currentUser.id) {
                return <div className="favor-item-newsfeed">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description"> {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    <p id="currently-fulfilling">You are currently fulfilling this favor for <Link className="showLinksCurrently" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>
                        Click here to undo accepting this favor.
                  </button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
            }
            else if (favor.favor_by_username) {
                return <div className="favor-item-newsfeed">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description">  {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                    <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
            } else {
                return <div className="favor-item-newsfeed">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                    <p className="favor-description">  {favor.favor_description}</p>
                    <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>

                    {/* <p>This favor has been accepted by {favor.favor_by_username}</p> */}
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to accept favor</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    {/* <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button> */}
                </div>

            }
        })
        
            return (
                <>
                <NavBarContainer />
                <div className="newsfeed-whole">
                    

                    <div className="news-banners">
                        {/* <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --
                       <NavLink to="/covid">Covid Help</NavLink> </h3> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/LzLgWcc/connected-1.png" />https://i.ibb.co/1JDb3PM/connected-2.png */}
                        {/* <img className="support-banner" src="https://i.ibb.co/1JDb3PM/connected-2.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/gt2Lfs5/ccmessage-1.png" />  */}
                        {/* <img className="support-banner" src="https://i.ibb.co/6mFTFMS/ccmessage-2.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/LpRyT28/staysafe.png" /> */}

                        {/* <img className="support-banner" src="https://i.ibb.co/KXzV90D/connected-3.png" /> */}
                        {/* <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" /> */}
                    </div>
                    <h1 id="newsfeed-title"> Newsfeed </h1>
                    <button className="map-button nav-btns-child" onClick={this.userShow}> {favor_text} </button>
                    <button className="map-button nav-btns-child-login" onClick={this.requestShow}> {request_text} </button>
                    <input type="text" className="input-search  user-search-bar" placeholder='Search for a User' onChange={this.updateName}></input>
                    {favors}
                </div>
                </>
            ) 

    }
    }

export default NewsFeed;


    //  <div className="news-banners">
    //                        <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --      
    //                    <NavLink to="/covid">Covid Help</NavLink> </h3>   

    //                   <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

    //                   {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}

    //                  <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />

    //                   <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />

    //             </div>

    // <button onClick={this.userShow} className="map-button nav-btns-child" > {favor_text} </button>
    //                 <button onClick={this.requestShow} className="map-button nav-btns-child-login"> {request_text} </button>
    //                 <input type="text"placeholder="Search a Username" className="user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input>