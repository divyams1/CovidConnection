import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars, faHandsHelping} from '@fortawesome/free-solid-svg-icons';

// npm install --save-dev @iconify/react @iconify-icons/fluent
import { Icon, InlineIcon } from '@iconify/react';
import signOut20Regular from '@iconify-icons/fluent/sign-out-20-regular';
// npm install --save-dev @iconify/react @iconify-icons/fxemoji
import emailIcon from '@iconify-icons/fxemoji/email';
// npm install --save-dev @iconify/react @iconify-icons/fa-solid




import './profile.scss';



class ProfileNav2 extends React.Component{
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
    <hr />

    <div className="add-menu-list">

        
        <span className="add-menu-item" onClick={this.renderForm('favor')}>
        <span><FontAwesomeIcon icon={faHandsHelping} />Create Favor    
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
 <hr />
<div className="profile-menu-list" >
    <Link to="/profile" className="user-menu-link"> <span className="prof-info"> 
      <i className="fas fa-user-circle"> {this.props.currentUser.username} <p className="pi-style">See your profile </p></i></span></Link>
    
 <hr />

 <span > <Icon icon={emailIcon} />  <span className="email-info">{this.props.currentUser.email}</span></span>

 <hr />
  <span className="logout-menu" onClick={this.logoutUser}> <Icon className="log-men-door" icon={signOut20Regular} />
  <span className="lg-men">Log Out</span></span> 

</div>
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

    


        
           <Link className="icon-link" to={"/"}> <i className="fas fa-home icon icon-fill"><span className="nav-menu-txt">Home</span> <FontAwesomeIcon  icon={faHome} /> </i></Link>
            
     
       
    
         <Link className="icon-link" to={"/newsfeed"}>  <i class="fas fa-newspaper icon icon-fill"><span className="nav-menu-txt">Newsfeed</span><FontAwesomeIcon  icon={faNewspaper} /> </i> </Link>                
       
  

      

    
           
           <Link className="icon-link" to={"/profile"}> <i class="fas fa-user icon icon-fill"><span className="nav-menu-txt">Profile</span> <FontAwesomeIcon  icon={faUser} /></i> </Link>                 
          


    

      
     <i class="fas fa-bars icon icon-fill"  onClick={this.showDropdown("info")}> <span className="nav-menu-txt">Account</span> <FontAwesomeIcon  icon={faBars} /> </i> 

            {this.state.info ? this.showUserInfo() : null}

   

      <i class="fas fa-plus icon icon-fill" onClick={this.showDropdown("add")}> <span className="nav-menu-txt">Create</span>  <FontAwesomeIcon className="fai" icon={faPlus} /> </i>
                        {this.state.add ? this.addMenu() : null}




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







export default withRouter(ProfileNav2);