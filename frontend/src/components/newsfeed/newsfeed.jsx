import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './newsfeed.css'
import ProfileNavContainer from '../profiles/profile_nav_container';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
        this.userShow = this.userShow.bind(this);
        this.requestShow = this.requestShow.bind(this);
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
            
            
            if ( e.currentTarget.value === "") {
                this.setState( {userSearch: false })
            } else {
                this.setState( {userSearch: true })
            }
            this.setState( { 'forUser' : e.currentTarget.value })
            
        }

    }
    render() {
    const handleTime = (time) => {

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
        let favor_text = this.state.myFavors? "View All Favors" : "View Your Favors"
        let request_text = this.state.favorRequests?   "View All Posts" : "View Requests"
        let favors = (this.props.favors.data) || [];
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        
        favors = ( this.state.favorRequests ? favors.filter( favor => favor.status === "request") : favors )
        favors = ( this.state.userSearch ? favors.filter( favor =>  {
            const length = this.state.forUser.length;
            if ( favor.favor_for_username) {
            return favor.favor_for_username.slice(0, length)  === this.state.forUser
            } else {
               return false 
            }
        }) : favors)
        favors = favors.map( (favor, idx)=> {
             return(   
            <div id = {idx} className="whole-favor">
                
                <h2 className="favor-header"> {favor.favor_title} </h2>
                <p> {favor.favor_description} </p>
                {handleTime(favor.date)}
                <Link to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link>
            </div>)
            
        })
    
        return(
            <div className="newsfeed-whole">
                <ProfileNavContainer />
                <div className="news-banners">
                           <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --      
                       <NavLink to="/covid">Covid Help</NavLink> </h3>   

                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

                      {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}

                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />

                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />

                </div>
                <div className="newsfeed-whole">
                    <h1> Newsfeed </h1>
                    <button onClick={this.userShow} className="map-button nav-btns-child" > {favor_text} </button>
                    <button onClick={this.requestShow} className="map-button nav-btns-child-login"> {request_text} </button>
                    <input type="text"placeholder="Search a Username" className="user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input>

                    {favors}
                </div>
            </div>
        )
    }
}

export default NewsFeed;