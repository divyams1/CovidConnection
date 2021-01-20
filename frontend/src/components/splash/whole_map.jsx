import React from 'react';
import MapContainer from './map';
import NavBarContainer from './../splash/profile_nav_container';

class WholeMap extends React.Component {
    constructor(props){
        super(props);
        this.state = { userShow:  false , requestShow: false, userSearch: false, forUser: '' };
        this.requestShow = this.requestShow.bind(this);
        this.userShow = this.userShow.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavors();
    }
    requestShow() {
        if (!this.state.favorRequests) {
            this.setState( { favorRequests: true})
        } else {
            this.setState( { favorRequests: false})
        }
    }
    userShow() {
        if ( !this.state.myFavors ) {
            this.setState( { myFavors: true})
        } else {
            this.setState( {myFavors: false })
        }
    }
    updateName() {
        
        return e=> {
            this.setState( { 'forUser' : e.currentTarget.value })
            if ( this.state.forUser !== '') {
                this.setState( { 'userSearch' : true })
            }
        }
    }
    render() {
        let favor_text = this.state.myFavors? "View All Favors" : "View Your Favors"
        let request_text = this.state.favorRequests?   "View All Posts" : "View Unaccepted Favors"
        return(
            
        <div>
            <NavBarContainer />
            <div className="map-head">
                <div className='map-text'>
                    <h1> Favor Map </h1>
                    <p> View Favors and Requests Others have made across the world! </p>
                </div>
                <div className="map-search">
                    <button className="news-btn" onClick={this.userShow}> {favor_text} </button>
                    <button className="news-btn" onClick={this.requestShow}> {request_text} </button>
                    <input type="text" placeholder="Search a Username" className="news-input-search" value={this.state.forUser} onChange={this.updateName()}></input> 
                </div> 
            </div>
            <div>
                <div className="map-container-div">
                     <div className="map-div">
                         <MapContainer className="map-container" fetchFavors={this.props.fetchFavors} favors={this.props.favors} userShow={this.state.userShow} requestShow={this.state.requestShow} currentUser={this.props.currentUser} userSearch={this.state.userSearch} forUser={this.state.forUser}/>
                     </div>
                </div>
            </div>
        </div>)
    }
}

export default WholeMap;