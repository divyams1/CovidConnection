import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars, faSignOutAlt, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

import './splash_nav.scss';



class SplashNav2 extends React.Component{
constructor(props){
super(props);

this.state ={

        notes: false,
        info: false,
        add: false,
        favors: false
        
}



this.showDropdown = this.showDropdown.bind(this);

this.renderForm = this.renderForm.bind(this);

this.logoutUser = this.logoutUser.bind(this);


}



showDropdown(field) {

    
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({

                notes: false,
                info: false,
                add: false,
                favors: false

            })
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }







componentDidMount() {
        this.props.closeModal();
        this.props.fetchFavors();
    }

componentWillUnmount() {
        this.props.closeModal();
    }
    


logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }




    


renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }






render(){
    
const signUpOrProfile = this.props.loggedIn? (   <Link class="icon-link" to={'/profile'} > <i class="fas fa-user icon icon-fill">  <FontAwesomeIcon className="fai" icon={faUser} /> </i> </Link>):
  (this.props.sign);
const logInOrLogOut = this.props.loggedIn?  (<i class="fas fa-sign-in icon icon-fill"  onClick={this.logoutUser}> <FontAwesomeIcon  icon={faSignOutAlt} /> </i> ): 
(this.props.log);
return (

    // <section className="navcontainer content">

       
   
    <header className="icon-container">

    


        <div className="header-div">
           <Link className="icon-link" to={"/"}> <i className="fas fa-home icon icon-fill"> <FontAwesomeIcon  icon={faHome} /> </i></Link>
        </div>
     
        
        <div className="header-div">
         <Link className="icon-link" to={"/newsfeed"}>  <i class="fas fa-newspaper icon icon-fill"><FontAwesomeIcon  icon={faNewspaper} /> </i> </Link>                
        </div>
  

      

    
        <div className="header-div">
            <h1> CovidConnection </h1>
        </div>
          
          


    

      <div className="header-div">
     {signUpOrProfile}
    </div>
           

   
        <div className="header-div">
      {logInOrLogOut}
        </div>         




{/* 
        <div className="mid">     
            <div onClick={this.showDropdown("favors")}>
                <span className="favor-button"> Favors </span>
            </div>
                

                    

                {this.state.favors ? this.favorMenu() : null}

    </div> */}







    </header>

 

    // </section>

   





);

}

}







export default withRouter(SplashNav2);