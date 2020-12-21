import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, addListener} from 'google-maps-react';
const mapStyles = {
  width: '80%',
  height: '80%',
  margin: '75px'
}
class HospitalNear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 0, 
            lng: 0
        }
    }

    componentDidMount() {
          navigator.geolocation.getCurrentPosition( position => {
        this.setState( { lat: position.coords.latitude })
        this.setState( { lng: position.coords.longitude})
    })
    }

    render() {
        const locat = { lat: this.state.lat, lng: this.state.lng}
        const locationString = `${this.state.lat},${this.state.lng}`
        const apiRequest= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationString}&radius=2000&type=hospital&key=AIzaSyAZpaEFWsQyJOahKBVfBZ1g3mpemxo1VQo`
        const map = ( <Map
            google = {this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter= {locat}
            className="map-container"
            ></Map>)

       
        
        return(
            <div>
                {map}
            </div>
        )
    }
}


export default HospitalNear;