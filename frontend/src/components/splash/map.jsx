import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React from 'react';


const mapStyles = {
  width: '80%',
  height: '80%'
}
export class MapBox extends React.Component {


  render() {
    
    const favor_locations = this.props.favors.data || [  {
        "favor_status": false,
        "_id": "5fc95501fedfd81b6861b9c4",
        "favor_for_user_id": "5fc934fb76d81114ece54faf",
        "favor_description": "oLoloedw",
        "favor_title": "Hello1221",
        "favor_lat": 39.419904,
        "favor_lng": -76.44446719999999,
        "date": "2020-12-03T21:13:37.143Z",
        "__v": 0
    }]
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

