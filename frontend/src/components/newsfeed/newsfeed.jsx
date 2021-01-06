import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './newsfeed.css'
import ProfileNavContainer from '../profiles/profile_nav_container';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
        this.userShow = this.userShow.bind(this);
        this.requestShow = this.requestShow.bind(this);
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
            this.setState( { forUser: e.currentTarget.value })
        }

    }

    handleButtonName(favor) {

        if (favor.favor_status === true) {
            return "This is taken by " + favor.favor_by_username
        } else {
            return "This is not taken yet"
        }
    }

    render() {
        let favor_text = this.state.myFavors? "View All Favors" : "View Your Favors"
        let request_text = this.state.favorRequests?   "View All Posts" : "View Requests"
        let favors = (this.props.favors.data) || [];
        
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        
        favors = ( this.state.favorRequests? favors.filter( favor => favor.status === true) : favors )
        favors = ( this.state.userSearch? favors.filter( favor => favor.favor_for_username === this.state.forUser) : favors)
        debugger
        favors = favors.map( (favor, idx)=> {
            if (!this.props.currentUser.id) {
                return <div id={idx} className="whole-favor">

                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <br></br>
                    <Link to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link>
                </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id) {
                return <div id={idx} className="whole-favor">

                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                    <button onClick={() => this.props.deleteFavor(favor)}>delete</button>
                    <br></br>
                    <Link to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link>
                </div>
            } else {

                return <div id={idx} className="whole-favor">

                    <h2 className="favor-header"> {favor.favor_title} </h2>
                    <p> {favor.favor_description} </p>
                    <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                    {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                    <br></br>
                    <Link to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link>
                </div>

            }
             
            
        })
    
        return(
            <div className="newsfeed-whole">
                <ProfileNavContainer />
                <h1> Newsfeed </h1>
                <button onClick={this.userShow}> {favor_text} </button>
                <button onClick={this.requestShow}> {request_text} </button>
                {/* <input type="text"  onChange={this.updateName}></input> */}
                
                {favors}
            </div>
        )
    }
}

export default NewsFeed;