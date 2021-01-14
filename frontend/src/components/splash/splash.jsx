import React from 'react';
import MapContainer from './map';
import NavBarContainer from '../../session/navbar_container';
import './about.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import AboutContainer from '../about/about_container'
import NavBar from '../../session/navbar';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = { userShow:  false , requestShow: false, userSearch: false, forUser: '' }
        this.userShow = this.userShow.bind(this);
        this.requestShow = this.requestShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavors();
    }
       updateName() {
        return e=> {
            
            
            if ( e.currentTarget.value === "") {
                this.setState( {userSearch: false })
            } else {
                this.setState( {userSearch: true })
            }
            this.setState( { 'forUser' : e.currentTarget.value })
            
        }

    }
    userShow() {
        if ( !this.state.userShow ) {
            this.setState( { userShow: true})
        } else {
            this.setState( {userShow: false })
        }
    }

    requestShow() {
        if ( !this.state.requestShow) {
            this.setState( {requestShow: true })
        } else {
            this.setState( {requestShow: false})
        }
    }
    render() {
        const button_text = ( this.state.userShow ? "View All Favors" : "View Your Favors" )
        const request_text =  ( this.state.requestShow? "View Favor Requests" : "View Completed Favors")
        return (
            <div className="splash">
                <div className="splash-header">
                    <div className="nav-header-left">
                          <button className="splash-btns" > Newsfeed </button>
                          <button className="splash-btns" > About </button>
                    </div>
                    <div className="nav-header-middle">
                         <h1 className="splash-title-home"> CovidConnection </h1>
                    </div>
                    <div className="nav-header-right">
                          <button className="splash-btns" > Sign Up </button>
                          <button className="splash-btns" > Log In </button>
                    </div>
                </div>
            <div className="covid-connection-header"> 
                <div className="grid-container">
                    <div className="grid-item item1 left-edge">

                    </div>
                    <div className="grid-item item2 grid-text">
                        <h1> Need help during COVID? Create a favor and connect with other users </h1>
                        <p> Starting is simple, sign up and create a favor! </p>
                        <div className="button-div">
                            <button className="splash-btns" > Sign Up </button>
                            <button className="splash-btns" > Log In </button>
                        </div>
                    </div>
                    <div className="grid-item item3">
                         <img id="img1" className="splash-image" src="https://i.ibb.co/LpRyT28/staysafe.png" ></img>
                    </div>
                    <div className="grid-item item4 right-edge">
                        
                    </div>
                    <div className="grid-item item5 left-edge">
                        
                    </div>
                    <div className="grid-item item6">
                         <img id="img2" className="splash-image" src="https://i.ibb.co/KXzV90D/connected-3.png"></img>
                    </div>
                    <div className="grid-item item7 grid-text">
                         <h1 > Want to help others in Need? </h1>
                        <p> View favors other users have made and try to help someone in need! </p>
                        <button  className="splash-btns"><Link to={'/newsfeed'}>Newsfeed</Link></button>

                    </div>
                    <div className="grid-item item8 right-edge">
                        
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Splash;

//    <>
        
//             {/* <NavBarContainer />
//             <div>
//                 <div className="covid-connection-header">
                    
//                     {/* <h2 className="covid-md-text"> During troubling times like these, we all need to help each other. COVID Connection is a way to do this!</h2>
//                     <ul className="covid-small-text"> 
//                         <li className="covid-small-text"> Connect with other users </li>
//                         <li className="covid-small-text" > Make posts asking for help or just to say how you are! </li>
//                         <li className="covid-small-text"> Find other users posts and give them a helping hand. </li>
//                         <li className="covid-small-text"> Use the map below to find users near you!</li>
//                     </ul> */}
//                     {/* <br className="text-map-div">
//                     </br> */}
                    
//                     {/* <h1 className="map-header" > Favor Map </h1>
//                     <p className="covid-md-text"> Search for favors using the map, or use the buttons below to search for specific favors!</p>
//                     <div className="map-search">
//                     <button className="map-button nav-btns-child" onClick={this.userShow}> {button_text} </button>
//                     <button className="map-button nav-btns-child-login" onClick={this.requestShow}> {request_text} </button>
//                     <input type="text" placeholder="Search a Username" className="input-search  user-search-bar" value={this.state.forUser} onChange={this.updateName()}></input> */}
//                     {/* </div> */}
//                 {/* </div> */}
//                 {/* <div className="map-container-div">
              
//                     <div className="map-div">
//                         <MapContainer className="map-container" fetchFavors={this.props.fetchFavors} favors={this.props.favors} userShow={this.state.userShow} requestShow={this.state.requestShow} currentUser={this.props.currentUser} userSearch={this.state.userSearch} forUser={this.state.forUser}/>
//                     </div>
//                 </div> */}
//                    {/* <div className="background-div">

//                     </div> */}
//             {/* {/* </div>

//             </> */}  */}









 {/* <div className="splash-section">
                    <div id="text3" className="help-text">
                        <h1> View favors other users have made across the world! </h1>
                        <button className="nav-btns-child-login login-links"><Link to={'/map'}>Map</Link></button>
                    </div>

                    <div>
                        <img id="img3" className="splash-image" src="https://image.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1284-1968.jpg"></img>
                    </div>
                </div> */}
                {/* <div className="splash-section">
                    <div>
                        <img id="img4"  className="splash-image" src="https://images.squarespace-cdn.com/content/v1/57b33bcce6f2e1cc1c052b22/1472751905806-Z17661JS4KG722GN2836/ke17ZwdGBToddI8pDm48kIpMHekjHQeJKx--ZwjcsFAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dozIbF1Me7AzutAQ0de-0vnFVap_gX3rml4LJDTcS-LYH3bqxw7fF48mhrq5Ulr0Hg/img-hero-inspiration.jpg?format=1500w"></img>
                    </div>

                    <div id="text4"className="about-us help-text">
                         <h2> Our mission is to connect those struggling during COVID and to show the good in all people.</h2>
                         <button id = "abt" className="nav-btns-child-login login-links"><Link to={'/about'}>About</Link></button>
                    </div>
                </div> */}


                    {/* <div className="splash-section">
                    <div className="help-text">
                        <h1> Need help during COVID? Create a favor and connect with other users </h1>
                        <p> Starting is simple, sign up and create a favor! </p>
                        <button className="nav-btns-child splash-sign" > Sign Up </button>
                    </div>
                    <div >
                        <img id="img1" className="splash-image" src="https://i.ibb.co/LpRyT28/staysafe.png" ></img>
                    </div>
                </div>
                <div className="splash-section">
                    <div >
                        <img id="img2" className="splash-image" src="https://i.ibb.co/KXzV90D/connected-3.png"></img>
                    </div>
                    <div id="text2"className="help-text">
                        <h1> Want to help others in Need? </h1>
                        <p> View Favors Other User Have Made </p>
                        <button id = "news" className="nav-btns-child login-links"><Link to={'/newsfeed'}>Newsfeed</Link></button>
                    </div>
                </div>
               
            </div> */}