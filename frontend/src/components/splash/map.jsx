import { Map, GoogleApiWrapper, Marker, InfoWindow, addListener} from 'google-maps-react';
import React from 'react';


const mapStyles = {
  width: '80%',
  height: '80%',
  margin: '75px'
}
export class MapBox extends React.Component {


  render() {
    const base_markers = [  {
        "favor_status": false,
        "_id": "5fc95501fedfd81b6861b9c4",
        "favor_for_user_id": "5fc934fb76d81114ece54faf",
        "favor_description": "Send Chocolates",
        "favor_title": "Need Help",
        "favor_lat": 37.4316,
        "favor_lng": -78.6569,
        "date": "2020-12-03T21:13:37.143Z",
        "__v": 0
    },
    {
        "favor_status": false,
        "_id": "5fc95501fedfd81b6861b9c4",
        "favor_for_user_id": "5fc934fb76d81114ece54faf",
        "favor_description": "Hi",
        "favor_title": "Just Saying Hi?",
        "favor_lat": 42.3601,
        "favor_lng": -71.0589,
        "date": "2020-12-03T21:13:37.143Z",
        "__v": 0
    },
     {
        "favor_status": false,
        "_id": "5fc95501fedfd81b6861b9c4",
        "favor_for_user_id": "5fc934fb76d81114ece54faf",
        "favor_description": "Very Bored",
        "favor_title": "Bored",
        "favor_lat": 40.0583,
        "favor_lng": -74.4057,
        "date": "2020-12-03T21:13:37.143Z",
        "__v": 0
    }
  ]
    const favor_locations = this.props.favors.data || [ {
        "favor_status": false,
        "_id": "5fc95501fedfd81b6861b9c4",
        "favor_for_user_id": "5fc934fb76d81114ece54faf",
        "favor_description": "Help",
        "favor_title": "I can't taste or smell?",
        "favor_lat": 38.5976,
        "favor_lng": -80.4549,
        "date": "2020-12-03T21:13:37.143Z",
        "__v": 0
    }]
    
    const combined_markers = favor_locations.concat(base_markers);
    const test_markers = combined_markers.map( (favor,idx) => {
      const content = (
        <div>
            <h1> {favor.favor_title} </h1>
            <p> {favor.favor_description} </p>
        </div>
      )
      // const infowindow = < InfoWindow content={content} key={idx} />
      const lat = favor.favor_lat ||  40.7128
      const long = favor.favor_long || -74.0060
      const location = { lat: lat, lng: long } 
      const marker = < Marker position={ location } title={`${favor.favor_title} 
    ${favor.favor_description} `|| "favor"} key={idx} />
      return marker
      
    })
  
    const map =    (<Map 
        google = {this.props.google}
        zoom= {8}
        style={mapStyles}
        initialCenter = {{lat: 39.419140, lng: -76.452240}}
        className="map-container"
      > 
      {test_markers} 
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

