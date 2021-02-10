import React from 'react';
import './new_splash.css'
import {withRouter, Link} from 'react-router-dom';

class NewSplash extends React.Component {
    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

    render() {
        const logInOrLogOut = this.props.loggedIn? <button className="splash-new-btn-log" onClick={this.logoutUser}> Log Out</button> : (this.props.log)
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
                             {logInOrLogOut} 
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