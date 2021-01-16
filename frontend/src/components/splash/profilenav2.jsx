import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

import './profile.scss';



class SplashNav2 extends React.Component{
constructor(props){
super(props);

this.state ={

        notes: false,
        info: false,
        add: false,
        favors: false
        
}


this.addMenu = this.addMenu.bind(this);
this.showNotesMenu = this.showNotesMenu.bind(this);
this.showDropdown = this.showDropdown.bind(this);
this.showUserInfo = this.showUserInfo.bind(this);
this.renderForm = this.renderForm.bind(this);
this.favorMenu = this.favorMenu.bind(this);
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
    

addMenu(){


return(

<section className="add-menu-items" >
 <h2 className="author-menu">  Create  <span className="menu-x" onClick={this.showDropdown("add")}>  X </span> </h2>
    <div className="add-menu-list">
        
        <span className="add-menu-item" onClick={this.renderForm('favor')}>
        <span><img className="logo-bm"  src="https://i.ibb.co/ZWSmV2V/doublec-2.png"/>Create Favor    
        <p className="add-menu-desc" > A member of CC can either request a favor when in need or keep record of something they 
        have done as a good deed. </p></span></span>

    </div>
    </section>

)

} 

favorMenu(){

 if(this.props.favors.length === 0) return  null;
      
     
   const favors =  this.props.favors
                   .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
                    .map(favor => {
            
            return ( <span> {favor.favor_title} <br /></span> );
        })

      return (

            <section className="favor-menu-items" >
          <h2 className="author-menu">  Favors  <span className="menu-x" onClick={this.showDropdown("favors")}>  X </span> </h2>
         <div className="favor-menu-list">
            <div className="add-menu-item">
            <span className="favor-menu-list">  {favors} </span>

            </div>
        </div>
         </section>   
      )
    
    }


logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

showUserInfo(){


return(

<section className="info-menu" >
 <h2 className="author-menu">  Account Info  <span className="menu-x" onClick={this.showDropdown("info")}>  X </span> </h2>
<ul className="profile-menu-list" >
    <li> User Profile </li>
<li> Name: {this.props.currentUser.username}</li>

 <li> Email: {this.props.currentUser.email} </li>
  <li className="logout-menu" onClick={this.logoutUser}>LogOut</li>

</ul>
</section> 


)

}



// handleFavors(){

//     if(this.props.favors){
      
     
//       return (
//       <div>
//          {this.props.favors
//           .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
//           .map(favor =>   <p  className="favor-list">{favor.favor_description}</p>)
//         }
//     </div> 
//       )}


//       }
    


renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }


showNotesMenu(){

return (

    <ul className="notes-list">
        <li> No notifications at this time! </li>
        <img className="logo-img"  src="https://i.ibb.co/ZWSmV2V/doublec-2.png"/>

    </ul>
)

}


render(){

return (

    <section className="navcontainer content">

       
   
    <header className="icon-container">

    


        
           <Link className="icon-link" to={"/"}> <i className="fas fa-home icon icon-fill"> <FontAwesomeIcon  icon={faHome} /> </i></Link>
            
     
       
    
         <Link className="icon-link" to={"/newsfeed"}>  <i class="fas fa-newspaper icon icon-fill"><FontAwesomeIcon  icon={faNewspaper} /> </i> </Link>                
       
  

      

    
           
                
          


    

      
     <i class="fas fa-sign-out-alt icon icon-fill"  onClick={this.showDropdown("info")}> <FontAwesomeIcon  icon={faSignOutAlt} /> </i> 

           

   

      <Link class="icon-link" to={'/newsfeed'} > <i class="fas fa-user icon icon-fill" onClick={this.showDropdown("add")}>  <FontAwesomeIcon className="fai" icon={faUser} /> </i> </Link>
                   




{/* 
        <div className="mid">     
            <div onClick={this.showDropdown("favors")}>
                <span className="favor-button"> Favors </span>
            </div>
                

                    

                {this.state.favors ? this.favorMenu() : null}

    </div> */}







    </header>

 

    </section>

   





);

}

}







export default withRouter(SplashNav2);