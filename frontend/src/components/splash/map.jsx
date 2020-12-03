import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React from 'react';
const keys = require('../../../keys');

const mapStyles = {
  width: '80%',
  height: '80%'
}
export class MapContainer extends React.Component {


  render() {
    const locations = [ { lat: 39.419140, lng: -76.452240 } , {lat: 39.352860, lng: -76.407340} , { lat: 39.404890 , lng: -76.442610 }]
    const marker = ( <Marker position={{ lat: 39.419140, lng: -76.452240 }} title="my house"  /> )
    const markers = locations.map( location => {
      return < Marker position={ location } title="favor" />  
    })
    const map =    (<Map 
        google = {this.props.google}
        zoom= {14}
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
  apiKey: keys.googleMaps
})(MapContainer);
