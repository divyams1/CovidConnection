// src/components/session/signup_form.js

import React from 'react';
import {Link, withRouter } from 'react-router-dom';

import { Icon, InlineIcon } from '@iconify/react';
import windowClose from '@iconify-icons/fa-solid/window-close';
// npm install --save-dev @iconify/react @iconify-icons/fa-solid


import './session.css';



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoSignUp = this.demoSignUp.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }

  //   this.setState({errors: nextProps.errors})
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.password);
    // console.log(this.state.password);

    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    let loginUser = {

      email: this.state.email,
      password: this.state.password

    }

    this.props.login(user);
  }


  demoSignUp(e) {
    e.preventDefault();
    let user = {
      email: "random@gmail.com",
      password: "random"
    }

    this.props.login(user);
    this.props.closeModal();
  }

  componentWillUnmount(){

   this.props.clearSessionErrors();
  }


  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
         
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <center>Welcome to the Covid Connection! </center>
          <br/>

             <center><img className="logo-img"  src="https://i.ibb.co/5MynHJQ/Clogo3.png"/></center>
          
          
           <br/>
           <center> Please  Sign Up or {this.props.other} </center>
        <center id="demo-sign"> Use <Link onClick={this.demoSignUp}>Demo</Link> </center>

          <div onClick={this.props.closeModal} className="close-x"><Icon className="fstylet" icon={windowClose} /></div>
                          
                          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                className="form-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Enter Email"
              />
            <br/>
              <input type="text"
                className="form-input"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter Username"
              />
            <br/>
              <input type="password"
               className="form-input"
               value={this.state.password}
                onChange={this.update('password')}
                placeholder="Enter Password"
              />
            <br/>
              <input type="password"
                className="form-input"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input                 
           className="submit-btn"
             type="submit" value="Submit" />
           
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);