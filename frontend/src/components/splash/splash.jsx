import React from 'react';
import MapContainer from './map';
import NavBarContainer from '../../session/navbar_container';


class Splash extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchFavors();
    }
    render() {
        return (
            <>
        
            <NavBarContainer />
            <div>
                <div className="covid-connection-header">
                    <h1 className="covid-big-text"> What is Covid Connection?  </h1>
                    <p className="covid-small-text"> Covid Connection is a way to connect with others while you are quarantining. Do you need help with groceries? Do you not not know where 
                        to find Covid resources or do you just need someone to talk to? 
                        Covid-Connection will let you connect with other users, see what is around you, and posts favors and view favors from around the country! 
                    </p>
                </div>
                <div className="map-container-div">
                    <h1 className="map-header" > View All Favors From All Users</h1>
                    <div className="map-div">
                        <MapContainer className="map-container" fetchFavors={this.props.fetchFavors} favors={this.props.favors}/>
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