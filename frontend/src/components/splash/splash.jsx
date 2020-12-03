import React from 'react';


class Splash extends React.Component {
    

    render() {
        return (
            <div>
                <div className="nav-bar-header"> 
                    <div className="nav-bar-left">
                        <h1> Covid Connection</h1>
                    </div>
                    <div className="nav-bar-right">
                        <button className="nav-bar-button"> Log In </button>
                        <button className="nav-bar-button signup-nav" > Sign Up </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;