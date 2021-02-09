import React from 'react';
import './new_splash.css'

class NewSplash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="new-splash-cont">
                <h1> CovidConnection </h1>
                <div>
                    <ul className="navbar-buttons">
                        <li>
                            <a> Newsfeed </a>
                        </li>
                        <li>
                            <a> About </a>
                        </li>
                        <li>
                            <a> Login </a>
                        </li>
                        <li>
                            <a> Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewSplash;