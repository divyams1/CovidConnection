import React from 'react'


class NewsFeed extends React.Component {
    componentDidMount() {
        this.props.fetchFavors();
    }
    render() {
        let favors = ( <div> </div>)
        if ( this.props.favors.data) {
            favors = this.props.favors.data.map( favor => {
             return(   
            <div>
            <h2> {favor.favor_title} </h2>   
            <p> {favor.favor_description} </p>
            </div>)
        })
       
        }
        return(
            <div>
                <h1> View Favors Other Users Have Made </h1>
                {favors}
            </div>
        )
    }
}

export default NewsFeed;