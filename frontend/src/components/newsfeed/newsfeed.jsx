import React from 'react'


class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
    }
    componentDidMount() {
        this.props.fetchFavors();
    }
    render() {
        
        let favors = Object.values(this.props.favors.data) || [];
        debugger
        favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
        favors = ( this.state.favorRequests? favors.filter( favor => favor.status === true) : favors )
        favors = ( this.state.userSearch? favors.filter( favor => favor.favor_for_username === this.state.forUser) : favors)
        favors = this.props.favors.data.map( favor => {

             return(   
            <div>
            <h2> {favor.favor_title} </h2>   
            <p> {favor.favor_description} </p>
            <p> {favor.favor_for_username}</p>
            </div>)
        })
         
        return(
            <div>
                <h1> View Favors Other Users Have Made </h1>
                {favors}
            </div>
        )
    }
}

export default NewsFeed;