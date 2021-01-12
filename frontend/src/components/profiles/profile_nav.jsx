import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser} from '@fortawesome/free-solid-svg-icons';
// import {faFileuser} from '@fortawesome/free-solid-svg-icons';
import './profile.css';




class ProfileNav extends React.Component{
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
   
    <header className="header-nav">

    
 
         <a href="https://hidden-caverns-32878.herokuapp.com/#">
                                 {/* <img className="logo-bx"  src="https://i.ibb.co/5MynHJQ/Clogo3.png"/> */}

                                  <img className="logo-bx"  src="https://i.ibb.co/ZWSmV2V/doublec-2.png"/>

         </a>
                   
     <div className="-left">
                     

         
           <button className="home-lk"><Link to={"/"}><FontAwesomeIcon className="fstyle" icon={faHome}  /></Link></button> 
            
        </div>

         <div className="header-nav-left2">
           
           <button className="home-lk3"><Link to={"/newsfeed"}> <span className="news"> News  </span> <FontAwesomeIcon className="fstyle2" icon={faNewspaper}  /> </Link>                 
           </button> 


      </div> 

      <div className="header-nav-mid">
           
           <button className="home-lk4"><Link to={"/profile"}> <span className="profiles"> Profile <FontAwesomeIcon className="fstyle3" icon={faUser}  />  </span> </Link>                 
           </button> 


      </div> 

      <div className="header-nav-mid">     
            <button className="favor-button" onClick={this.showDropdown("favors")}>
                <span className="favor-button"> Favors </span>
                

                     <img className="logo-bd"  src="https://i.ibb.co/ZWSmV2V/doublec-2.png"/>
                
                </button>

                {this.state.favors ? this.favorMenu() : null}

    </div>
    <div className="header-nav-mid" onClick={this.showDropdown("info")}> <button className="home-lk5"> <FontAwesomeIcon className="fstyle" icon={faCircle}/></button> 

            {this.state.info ? this.showUserInfo() : null}

    </div>

    <div className="header-nav-right" onClick={this.showDropdown("add")}><button className="home-lk"><FontAwesomeIcon className="fstyle" icon={faPlus}/></button> 
                        {this.state.add ? this.addMenu() : null}


    </div>

    <div className="header-nav-right" className="notifications" onClick={this.showDropdown("notes")}>  <button className="home-lk"><FontAwesomeIcon className="fstyle" icon={faBell}/></button> 
                    {this.state.notes ? this.showNotesMenu() : null}

    </div>










    </header>

   





);

}

}







export default withRouter(ProfileNav);