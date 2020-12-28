import React from 'react';
import MapContainer from './map';
import NavBarContainer from '../../session/navbar_container';
import './about.css'
import '../../App.css'
import {Link} from 'react-router-dom'

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = { userShow:  false }
        this.userShow = this.userShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavors();
    }

    userShow() {
        if ( !this.state.userShow ) {
            this.setState( { userShow: true})
        } else {
            this.setState( {userShow: false })
        }
    }
    render() {
        const button_text = ( this.state.userShow ? "View All Favors" : "View Your Favors" )
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
                    <button className="map-button" onClick={this.userShow}> {button_text} </button>
                </div>
                <div className="map-container-div">
              
                    <div className="map-div">
                        <MapContainer className="map-container" fetchFavors={this.props.fetchFavors} favors={this.props.favors} userShow={this.state.userShow} currentUser={this.props.currentUser}/>
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