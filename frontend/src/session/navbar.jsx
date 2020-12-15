// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-btns">
                <button className="nav-btns-child"><Link to={'/profile'}>View Profile</Link></button>
                <button className="nav-btns-child-login" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="nav-btns">
                {/* <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link> */}
                {this.props.sign}
                   
                   <br/>

                {this.props.log} 
                 
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-bar-top">
            <img className="logo-header"  src="https://files.slack.com/files-pri/T03GU501J-F01G70VFBLK/csquarelogo__3_.png"/>
            
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;