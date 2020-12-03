import React from 'react';
import MapContainer from './map';


class Splash extends React.Component {
    
    componentDidMount() {
        this.props.fetchFavors();
    }
    render() {
        return (
            <div>
                <MapContainer fetchFavors={this.props.fetchFavors} favors={this.props.favors}/>
            </div>
        )
    }
}

export default Splash;