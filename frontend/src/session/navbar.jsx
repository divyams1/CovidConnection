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
      const logAbout = ( 
        <div>
         <button className="nav-btns-child login-links"><Link to={'/newsfeed'}>Newsfeed</Link></button>
         <button className="nav-btns-child-login login-links"><Link to={'/about'}>About</Link></button> 
         </div>
  )
      return (
        <div className="nav-bar-top">
          <div className="nav-bar-left">
            <img className="logo-header"  src="https://i.ibb.co/CnDtS7D/Clogo2.png"/>
            { logAbout }
          </div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;