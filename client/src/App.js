// Setup alert message area or Component

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';

import MainContainer from './MainContainer';
import SignIn from './SignIn';
import './css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      alertMessage: '',
      authenticated: localStorage.getItem('token')
    };
  }

  handleSignUp(credentials) {
   const { name, username, password, confirmPassword } = credentials;
   if (!username.trim() || !password.trim() || password.trim() !== confirmPassword.trim()) {
     this.setState({
       ...this.state,
       alertMessage: 'Must Provide All Fields'
     });
   } else {
     axios.post('/api/signup', credentials)
       .then(resp => {
         const { token } = resp.data;
         this.setState({
           ...this.state,
           alertMessage: '',
           authenticated: token
         });
         localStorage.setItem('token', token);
       });
   }
 }//End handleSignUp()

  handleSignIn(credentials) {
    //Need to setup notices if username is not found or if password
    //does not match.
    const { username, password } = credentials;
    //Make sure the user entered a username & password
    if (!username.trim() || !password.trim()) {
      this.setState({
        ...this.state,
        alertMessage: 'Must Provide All Fields'
      });
    } else {
      //Verify the user exists & the password matches the user.
      axios.post('/api/signin', credentials)
        .then(resp => {
          const { token } = resp.data;
           localStorage.setItem('token', token);
          console.log('The sign in token is: ' + token);
          this.setState({
            ...this.state,
            alertMessage: '',
            authenticated: token
          });
        });
    }
  }//End handleSignIn()

  handleSignOut() {
    localStorage.removeItem('token');
    this.setState({
      alertMessage: 'You have been logged out',
      authenticated: null
    });
    console.log('Authenticated state is: ' + this.state.authenticated);
    axios.get('/');
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={() => <MainContainer auth={this.state.authenticated} />}>

        </Route>
      </Router>
    );
  }
}

// <IndexRoute render={() => <SignIn onSignIn={this.handleSignIn.bind(this)} />} />

export default App;
