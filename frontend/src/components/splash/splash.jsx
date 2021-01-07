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
                    <h1 className="covid-big-text"> COVID Connection  </h1>
                    <h2 className="covid-md-text"> During troubling times like these, we all need to help each other. COVID Connection is a way to do this!</h2>
                    <ul className="covid-small-text"> 
                        <li className="covid-small-text"> Connect with other users </li>
                        <li className="covid-small-text" > Make posts asking for help or just to say how you are! </li>
                        <li className="covid-small-text"> Find other users posts and give them a helping hand. </li>
                        <li className="covid-small-text"> Use the map below to find users near you!</li>
                    </ul>
                    <br className="text-map-div">
                    </br>
                    
                    <h1 className="map-header" > Favor Map </h1>
                    <p className="covid-md-text"> Search for favors using the map, or use the buttons below to search for specific favors!</p>
                    <div className="map-search">
                    <button className="map-button nav-btns-child" onClick={this.userShow}> {button_text} </button>
                    <button className="map-button nav-btns-child-login" onClick={this.requestShow}> {request_text} </button>
                    <input type="text" placeholder="Search a Username" className="input-search  user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input>
                    </div>
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