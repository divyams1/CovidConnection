import React from 'react';
import MapContainer from './map';
import NavBarContainer from '../../session/navbar_container';
import './about.css'


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
                <div className="about">
                    <div className="about-header">
                        <h1> About Us </h1>
                        <h2> View more of our projects or contact us!</h2>
                    </div>
                    <div className="about-people">
                        <div className="person-div">
                            <h2> Divyam Satyarthi </h2>
                            <a href="https://github.com/divyams1">  Github </a>
                            <a href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/"> LinkedIn </a>
                            <h4> Email: divyamsat@gmail.com </h4>
                            <h4> Phone: 443-838-7815</h4>
                        </div>

                        <div className="person-div">
                            <h2> Aaron Robinson </h2>
                            <a href="https://github.com/indierusky"> Github </a>
                            <a href="https://www.linkedin.com/in/aaron-robinson-258a77201/"> LinkedIn </a>
                            <h4> Email: aaronjrobinson@hotmail.com </h4>
                            <h4> Phone: 347-664-0151</h4>
                        </div>

                        <div className="person-div">
                            <h2> Anthony Collichio </h2>
                            <a href="https://github.com/collich55"> Github </a>
                            <a href="https://www.linkedin.com/in/anthony-collichio-451b11103/"> LinkedIn </a>
                            <h4> Email: collich55@gmail.com  </h4>
                            <h4> Phone: 585-794-3850  </h4>
                        </div>
                    </div>
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