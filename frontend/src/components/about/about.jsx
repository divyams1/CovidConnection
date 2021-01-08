import React from 'react';
import HospitalsNear from './hospitals_near'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import './about.css'

class About extends React.Component {

    render() {
        const git = <img alt="icon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" height={30} width={30}></img>;
        const link = <img alt="icon" src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background.png" width={30} height = {30} ></img>
        return(
            <div className="about">
                    <div className="about-header">
                        <h1> About Us </h1>
                        <h2> View more of our projects or contact us!</h2>
                    </div>
                    <div className="about-people">
                        <div className="person-div">
                            <h2> Divyam Satyarthi </h2>
                            <div className="links">
                                <div className="link-text-image">
                                    <a href="https://github.com/divyams1">
                                        {git}
                                        <p> Github </p>
                                    </a>
                                </div>
                                <div className="link-text-image">
                                    <a href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/">
                                    {link}
                                    <p> LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                            <h4> Email: divyamsat@gmail.com </h4>
                            <h4> Phone: 443-838-7815</h4>
                        </div>

                        <div className="person-div">
                            <h2> Aaron Robinson </h2>
                            <div className="links">
                                <div className="link-text-image">
                                    <a href="https://github.com/indierusky"> 
                                        {git}
                                        <p> Github </p>
                                    </a>
                                </div>
                                <div className="link-text-image">
                                     <a href="https://www.linkedin.com/in/aaron-robinson-258a77201/"> 
                                         {link}
                                         <p> LinkedIn </p>
                                    </a>
                                </div>
                            </div>
                            <h4> Email: aaronjrobinson@hotmail.com </h4>
                            <h4> Phone: 347-664-0151</h4>
                            
                        </div>

                        <div className="person-div">
                            <h2> Anthony Collichio </h2>
                            <div className="links">
                                    <div className="link-text-image">
                                <a  href="https://github.com/collich55">
                                            {git}
                                            <p> Github</p>
                                            </a>
                                    </div>
                                    <div className="link-text-image">
                                <a  href="https://www.linkedin.com/in/anthony-collichio-451b11103/"> 
                                            {link}
                                            <p> LinkedIn </p>
                                        </a>
                                    </div>
                            </div>
                            <h4> Email: collich55@gmail.com  </h4>
                            <h4> Phone: 585-794-3850  </h4>
                        </div>
                    </div>
                    <Link id="back-link" to={'/'}>Back</Link>
                </div>

                
        )
    }
}

export default About;

         {/* <div className="link-text-image">

                                    <img className="link-image" src="https://images.spot.im/v1/production/xfghicjlsq78tkpf9xxe" />
                                    <p> Angel List </p>
                                </div> */}