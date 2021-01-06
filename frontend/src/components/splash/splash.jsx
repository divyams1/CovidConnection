import React from 'react';
import MapContainer from './map';
import NavBarContainer from '../../session/navbar_container';
import './about.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import AboutContainer from '../about/about_container'

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = { userShow:  false , requestShow: false, userSearch: false, forUser: '' }
        this.userShow = this.userShow.bind(this);
        this.requestShow = this.requestShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavors();
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
    userShow() {
        if ( !this.state.userShow ) {
            this.setState( { userShow: true})
        } else {
            this.setState( {userShow: false })
        }
    }

    requestShow() {
        if ( !this.state.requestShow) {
            this.setState( {requestShow: true })
        } else {
            this.setState( {requestShow: false})
        }
    }
    render() {
        const button_text = ( this.state.userShow ? "View All Favors" : "View Your Favors" )
        const request_text =  ( this.state.requestShow? "View Favor Requests" : "View Completed Favors")
        return (
            <>
        
            <NavBarContainer />
            <div>
                <div className="covid-connection-header">
                    <h1 className="covid-big-text"> What is Covid Connection?  </h1>
                    <p className="covid-small-text"> Covid Connection is a way to connect with others while you are quarantining. Do you need help with groceries? Do you not not know where 
                        to find Covid resources or do you just need someone to talk to? 
                        Covid-Connection will let you connect with other users, see what is around you, and posts favors and view favors from around the country! View the map below or the <Link to="/newsfeed"> Newsfeed</Link> to see the favors others have posted.
                    </p>
                    <br className="text-map-div">
                    </br>
                    
                          <h1 className="map-header" > View All Favors From All Users</h1>
                    <button className="map-button nav-btns-child" onClick={this.userShow}> {button_text} </button>
                    <button className="map-button nav-btns-child-login" onClick={this.requestShow}> {request_text} </button>
                    <input type="text" placeholder="Search a Username" className="user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input>
                </div>
                <div className="map-container-div">
              
                    <div className="map-div">
                        <MapContainer className="map-container" fetchFavors={this.props.fetchFavors} favors={this.props.favors} userShow={this.state.userShow} requestShow={this.state.requestShow} currentUser={this.props.currentUser} userSearch={this.state.userSearch} forUser={this.state.forUser}/>
                    </div>
                </div>
                   <div className="background-div">

                    </div>
            </div>

            </>
        )
    }
}

export default Splash;