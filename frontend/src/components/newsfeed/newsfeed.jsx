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
            this.setState( { forUser: e.currentTarget.value })
        }
    }
    handleButtonName(favor) {
        if (favor.favor_status === "Doing") {
            return "This is Taken by " + favor.favor_by_username
        } else {
            return "Click to Accept Favor"
        }
    }
    render() {
        let favor_text = this.state.myFavors? "View All Favors" : "View Your Favors"
        let request_text = this.state.favorRequests?   "View All Posts" : "View Requests"
        let favors = (this.props.favors.data) || [];
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        favors = ( this.state.favorRequests? favors.filter( favor => favor.status === "Doing") : favors )
        favors = ( this.state.userSearch? favors.filter( favor => favor.favor_for_username === this.state.forUser) : favors)
       
        favors = favors.map( (favor, idx)=> {
            if (!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0)) {
                return <div id={idx}  className="favor-item2">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p className="favor-newsfeed"> {favor.favor_description} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                   
                    <p className="newspage-links">Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>             
                    </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id) {
                return <div id={idx}  className="favor-item2">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p className="favor-newsfeed"> {favor.favor_description} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                    
                    <p className="newspage-links" >Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                </div>
            } else if (favor.favor_by_user_id !== null && favor.favor_for_user_id !== this.props.currentUser.id && favor.favor_by_user_id !== this.props.currentUser.id) {
                return <div id={idx}  className="favor-item2">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p className="favor-newsfeed"> {favor.favor_description} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <p>{this.handleButtonName(favor)}</p>
                   
                    <p className="newspage-links">Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>      
                    </div>
            } else if (favor.favor_by_user_id !== null && favor.favor_for_user_id !== this.props.currentUser.id && favor.favor_by_user_id === this.props.currentUser.id) {
                return <div id={idx}  className="favor-item2">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p className="favor-newsfeed"> {favor.favor_description} </p>
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Accepted Favor, Click to Undo</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <p className="newspage-links" >Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>               
                    </div>
            }
            else {
                return <div id={idx}  className="favor-item2">
                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p className="favor-newsfeed"> {favor.favor_description} </p>
                    <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}     
                        <p className="newspage-links">Favor for:  <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                               
                    </div>
            }
        })
        return(
            <>
             <ProfileNavContainer />
            <div className="newsfeed-whole">
               
                 <div className="news-banners">
                           <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --      
                       <NavLink to="/covid">Covid Help</NavLink> </h3>   

                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

                      {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}

                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />

                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />

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


     <div className="news-banners">
                           <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --      
                       <NavLink to="/covid">Covid Help</NavLink> </h3>   

                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />

                      {/* <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" /> */}

                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />

                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />

                </div>

    // <button onClick={this.userShow} className="map-button nav-btns-child" > {favor_text} </button>
    //                 <button onClick={this.requestShow} className="map-button nav-btns-child-login"> {request_text} </button>
    //                 <input type="text"placeholder="Search a Username" className="user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input>