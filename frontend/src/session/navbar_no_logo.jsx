// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBarNoLogo extends React.Component {
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
                    <button id="pro" className="nav-btns-child"><Link to={'/profile'}>View Profile</Link></button>
                    <button className="nav-btns-child-login" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="nav-btns">
                    {/* <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link> */}
                    {this.props.sign}

                    <br />

                    {this.props.log}

                </div>
            );
        }
    }

    render() {
        const logAbout = (
            <div id={"right-btns"}>
                <button id="news" className="nav-btns-child login-links"><Link to={'/newsfeed'}>Newsfeed</Link></button>
                <button id="abt" className="nav-btns-child-login login-links"><Link to={'/about'}>About</Link></button>
            </div>
        )
        return (
            <div className="nav-bar-top">
                <div className="nav-bar-left">
                    <img className="logo-header-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/60x15transparent_spacer.svg/2880px-60x15transparent_spacer.svg.png" width={5} height={1} />
                    <Link id="back-link" to={'/'}>Back</Link>
                    {logAbout}
                </div>
                { this.getLinks()}
            </div>
        );
    }
}

export default NavBarNoLogo;