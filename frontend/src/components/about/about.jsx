import React from 'react';
import HospitalsNear from './hospitals_near'

class About extends React.Component {

    render() {
        
        return(
            <div className="about">
                    <div className="about-header">
                        <h1> About Us </h1>
                        <h2> View more of our projects or contact us!</h2>
                    </div>
                    <div className="about-people">
                        <div className="person-div">
                            <h2> Divyam Satyarthi </h2>
                            <img src="githubimage.png" />
                            <a href="https://github.com/divyams1">  Github </a>
                            <img src="linkedin.png" />
                            <a href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/"> LinkedIn </a>
                            <img src="angellist.png" />
                            <a href="https://angel.co/u/divyam-satyarthi"> Angel List</a>
                            <h4> Email: divyamsat@gmail.com </h4>
                            <h4> Phone: 443-838-7815</h4>
                        </div>

                        <div className="person-div">
                            <h2> Aaron Robinson </h2>
                            <a href="https://github.com/indierusky"> Github </a>
                            <a href="https://www.linkedin.com/in/aaron-robinson-258a77201/"> LinkedIn </a>
                            <h4> Email: aaronjrobinson@hotmail.com </h4>
                            <h4> Phone: 347-664-0151</h4>
                        </div>

                        <div className="person-div">
                            <h2> Anthony Collichio </h2>
                            <a href="https://github.com/collich55"> Github </a>
                            <a href="https://www.linkedin.com/in/anthony-collichio-451b11103/"> LinkedIn </a>
                            <h4> Email: collich55@gmail.com  </h4>
                            <h4> Phone: 585-794-3850  </h4>
                        </div>
                    </div>
                    <HospitalsNear />
                </div>

                
        )
    }
}

export default About;