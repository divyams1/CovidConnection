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
                <MapContainer fetchFavors={this.props.fetchFavors} favors={this.props.favors}/>
            </div>

            </>
        )
    }
}

export default Splash;