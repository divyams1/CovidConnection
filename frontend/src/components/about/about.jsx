import React from 'react';
import HospitalsNear from './hospitals_near'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import './about.css'
import NavBarContainer from './../splash/profile_nav_container';
import gitlogo from './Git-Icon-1788C.png'
import linklogo from './LI-In-Bug.png'
import NewNav from '../splash/new_splash_container';

class About extends React.Component {

    render() {
        const git = <img alt="icon" src={gitlogo} height={40} width={40}></img>;
        const link = <img alt="icon" src={linklogo} width={40} height = {40} ></img>
        return(
            <div>
                <NewNav />
           
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
                                    <a target="_blank" href="https://github.com/divyams1">
                                        {git}
                                        <p> Github </p>
                                    </a>
                                </div>
                                <div className="link-text-image">
                                    <a target="_blank" href="https://www.linkedin.com/in/divyam-satyarthi-b6628513b/">
                                    {link}
                                    <p> LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                            <h4> Email: divyamsat@gmail.com </h4>
                            <h4> Phone: 443-838-7815</h4>
                        </div>

                        

                        <div className="person-div">
                            <h2> Anthony Collichio </h2>
                            <div className="links">
                                    <div className="link-text-image">
                                <a  target="_blank" href="https://github.com/collich55">
                                            {git}
                                            <p> Github</p>
                                            </a>
                                    </div>
                                    <div className="link-text-image">
                                <a target="_blank"  href="https://www.linkedin.com/in/anthony-collichio-451b11103/"> 
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

                 </div>
        )
    }
}

export default About;

         {/* <div className="link-text-image">

                                    <img className="link-image" src="https://images.spot.im/v1/production/xfghicjlsq78tkpf9xxe" />
                                    <p> Angel List </p>
                                </div> */}