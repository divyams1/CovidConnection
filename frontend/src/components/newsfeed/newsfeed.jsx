import React from 'react'


class NewsFeed extends React.Component {
    componentDidMount() {
        this.props.fetchFavors();
        this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
    }
    render() {
        let favors = ( <div> </div>)
        if ( this.props.favors.data) {
            favors = this.props.favors.data.map( favor => {
                debugger
             return(   
            <div>
            <h2> {favor.favor_title} </h2>   
            <p> {favor.favor_description} </p>
            <p> {favor.favor_for_username}</p>
            </div>)
        })
        }
         favors = ( this.state.myFavors? favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id) : favors)
         favors = ( this.state.favorRequests? favors.filter( favor => favor.status === true) : favors )
        //  favors = ( this.state.userSearch? )
        return(
            <div>
                <h1> View Favors Other Users Have Made </h1>
                {favors}
            </div>
        )
    }
}

export default NewsFeed;