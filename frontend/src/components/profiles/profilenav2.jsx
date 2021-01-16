import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars} from '@fortawesome/free-solid-svg-icons';

// npm install --save-dev @iconify/react @iconify-icons/fluent
import { Icon, InlineIcon } from '@iconify/react';
import signOut20Regular from '@iconify-icons/fluent/sign-out-20-regular';


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
 <hr />
<div className="profile-menu-list" >
    <Link to="/profile" className="user-menu-link"> <span className="prof-info"><i className="fas fa-user-circle"> <p className="prof-men-name"> See your profile <br /> {this.props.currentUser.username}</p></i></span></Link>
    <hr />

 <span> Email: {this.props.currentUser.email} </span>

 <hr />
  <span className="logout-menu" onClick={this.logoutUser}> <Icon className="fa-user-circle" icon={signOut20Regular} /> Log Out</span>

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

    


        
           <Link className="icon-link" to={"/"}> <i className="fas fa-home icon icon-fill"> <FontAwesomeIcon  icon={faHome} /> </i></Link>
            
     
       
    
         <Link className="icon-link" to={"/newsfeed"}>  <i class="fas fa-newspaper icon icon-fill"><FontAwesomeIcon  icon={faNewspaper} /> </i> </Link>                
       
  

      

    
           
           <Link className="icon-link" to={"/profile"}> <i class="fas fa-user icon icon-fill"> <FontAwesomeIcon  icon={faUser} /></i> </Link>                 
          


    

      
     <i class="fas fa-bars icon icon-fill"  onClick={this.showDropdown("info")}> <FontAwesomeIcon  icon={faBars} /> </i> 

            {this.state.info ? this.showUserInfo() : null}

   

      <i class="fas fa-plus icon icon-fill" onClick={this.showDropdown("add")}>  <FontAwesomeIcon className="fai" icon={faPlus} /> </i>
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