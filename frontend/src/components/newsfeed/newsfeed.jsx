import React from 'react';
import {NavLink, Link} from 'react-router-dom';


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
    render() {
        
        let favors = (this.props.favors.data) || [];
        
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        
        favors = ( this.state.favorRequests? favors.filter( favor => favor.status === true) : favors )
        favors = ( this.state.userSearch? favors.filter( favor => favor.favor_for_username === this.state.forUser) : favors)
        favors = favors.map( favor => {
             return(   
            <div>
            <h1> {favor.favor_title} </h1>
            <p> {favor.favor_description} </p>
            <Link to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link>
            </div>)
        })
    
        return(
            <div>
                <button onClick={this.userShow}>View Your Favors</button>
                <button onClick={this.requestShow}> View Requests Others Have Made</button>
                {/* <input type="text"  onChange={this.updateName}></input> */}
                <h1> View Favors Other Users Have Made </h1>
                {favors}
            </div>
        )
    }
}

export default NewsFeed;