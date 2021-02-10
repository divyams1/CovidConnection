import React from 'react';
import './new_splash.css'
import {withRouter, Link} from 'react-router-dom';

class NewSplash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const logInOrLogOut = this.props.loggedIn? ( "Log Out") : ("Log In")
        const SignUpOrProfile =  this.props.loggedIn? ( <Link  to={'/profile'} >Profile</Link>) : (this.props.sign) 
        return (
            <div className="new-splash-cont">
                <Link to="/"><h1 className="nav-bar-title"> CovidConnection </h1> </Link>
                <div>
                    <ul className="navbar-buttons">
                        <li className="nav-item">
                            <Link to="/newsfeed"> Newsfeed </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" > Map </Link>
                        </li >
                        <li className="nav-item">
                            <Link to='/about'> Contact </Link>
                        </li >
                        <li className="nav-item" >
                            <a> {logInOrLogOut} </a>
                        </li>
                        <li className="nav-item" >
                            {SignUpOrProfile} 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewSplash;