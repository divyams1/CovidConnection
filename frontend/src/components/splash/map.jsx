import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React from 'react';
// const keys = require('../../../keys');

const mapStyles = {
  width: '80%',
  height: '80%'
}
export class MapBox extends React.Component {


  render() {
    if (this.props.favors.data.length === 0) return null;
  
    const favor_locations = this.props.favors.data
    const markers = favor_locations.map( (favor,idx) => {
      const lat = favor.favor_lat ||  40.7128
      const long = favor.favor_long || -74.0060
      const location = { lat: lat, lng: long } 
      return < Marker position={ location } title={favor.favor_title || "favor"} key={idx} />
    })
  
    const map =    (<Map 
        google = {this.props.google}
        zoom= {8}
        style={mapStyles}
        initialCenter = {{lat: 39.419140, lng: -76.452240}}
      > 
      {markers} 
      </Map>)
   
    return (
      <div>
      {map}
      </div>
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCS5XZjs6coq1NByM9XDjrrRc1eMRpYlJg'
})(MapBox);

