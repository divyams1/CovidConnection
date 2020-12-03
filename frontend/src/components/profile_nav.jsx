// import React from 'react';
// import {withRouter, Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faCircle, faPlus, faBell} from '@fortawesome/free-solid-svg-icons';





// class ProfileNav extends React.Component{
// constructor(props){
// super(props);

// this.state ={

//         notes: false,
//         info: false,
//         add: false,
//         boards: false
        
// }


// this.addMenu = this.addMenu.bind(this);
// this.showNotesMenu = this.showNotesMenu.bind(this);
// this.showDropdown = this.showDropdown.bind(this);
// this.showUserInfo = this.showUserInfo.bind(this);
// this.renderForm = this.renderForm.bind(this);
// this.boardMenu = this.boardMenu.bind(this);

// }



// showDropdown(field) {
//         return e => {
//             e.preventDefault();
//             e.stopPropagation();
//             this.setState({[field]: !this.state[field]}, () => {
//             if (this.state[field] === true) { 
//                 document.addEventListener('click', this.showDropdown);
//              } else {
//                 document.removeEventListener("click", this.showDropdown) 

//             }
//             });
//         }
//     }







// componentDidMount() {
//         this.props.closeModal();
//         this.props.fetchFavors();
//     }

// componentWillUnmount() {
//         this.props.closeModal();
//     }
    

// addMenu(){


// return(
//     <ul className="user-info-list">
//         <li className="add-menu-item" onClick={this.renderForm('favor')}>Add Favor</li>
//         {/* <li className="board-list-item" onClick={this.openModal('edit')}> Edit Board </li> */}

//     </ul>

// )

// } 

// boardMenu(){


// const  = this.props.boards.map((board, index) => {
//       return (
//         <li className="boards-list" key={index}>
//           <Link to={`/boards/${board.id}`}>{board.title}</Link>
//         </li>
//       );
//     });


// }


// showUserInfo(){


// return(

// <ul className="user-info-list" >
//     <li> User Profile </li>
// <li> Name: {this.props.currentUser.username}</li>

//  <li>Email: {this.props.currentUser.email} </li>
//   <li onClick={this.props.logout}>Log Out</li>

// </ul> 


// )

// }


// renderForm(field) {
//     if (this.props.modal === field) {
//       return () => {
//         this.props.closeModal();
//       }
//     }
//     return () => this.props.openModal(field)
//   }


// showNotesMenu(){

// return (

//     <ul className="notes-list">
//         <li> Taco says sorry no notifications at this time! </li>
//         <img className="logo-bx" src="https://i.ibb.co/7XFgBYj/pixeltaco.png" alt="pixel taco"/>
//         {/* <Link to={`/boards/${board.id}/edit`}>Edit Board</Link> */}

//     </ul>
// )

// }


// render(){

// return (
   
//     <nav className="board-nav">

//           <input className="search-bar"/>  
//          <a href='https://trilla.herokuapp.com/#/signup'>
//              <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo" />
//          </a>
                   
//          {/* <button className="nav-buttons-child" onClick={this.props.logout}>Log Out</button> */}
//      <div className="boardnav-left">
                     

         
//            <button className="home-lk"><Link to={"/boards"}><FontAwesomeIcon icon={faHome} /></Link></button> 
            
//             <button className="board-button" onClick={this.showDropdown("boards")}>
//                 <span className="board-button"> Boards </span>
                

//                     <img className="logo-bd" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png"/>
                
//                 </button>

//                 {this.state.boards ? this.boardMenu() : null}

//     </div>
//     <div className="boardnav-mid" onClick={this.showDropdown("info")}> <button className="home-lk"> <FontAwesomeIcon icon={faCircle}/></button> 

//             {this.state.info ? this.showUserInfo() : null}

//     </div>

//     <div className="boardnav-mid2" className="add-team-board" onClick={this.showDropdown("add")}><button className="home-lk"><FontAwesomeIcon icon={faPlus}/></button> 
//                         {this.state.add ? this.addMenu() : null}


//     </div>

//     <div className="boardnav-right" className="notifications" onClick={this.showDropdown("notes")}>  <button className="home-lk"><FontAwesomeIcon icon={faBell}/></button> 
//                     {this.state.notes ? this.showNotesMenu() : null}

//     </div>










//     </nav>

   





// );

// }

// }







// export default withRouter(ProfileNav);