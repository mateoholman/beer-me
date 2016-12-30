// Catch & post handleSignIn error messages
// Add alert messages for SignUp & SignIn

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';

import MainContainer from './MainContainer';
import Home from './Home';
import Secret from './Secret';
import SignIn from './SignIn';
import SignUp from './SignUp';
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
   if (!name.trim() || !username.trim() || !password.trim() || password.trim() !== confirmPassword.trim()) {
     this.setState({
       ...this.state,
       alertMessage: 'Must Provide All Fields'
     });
   } else {
     axios.post('/api/signup', credentials)
       .then(resp => {
         const { token } = resp.data;
         const altMsg = username + " account has been created.";
         this.setState({
           ...this.state,
           alertMessage: altMsg,
           authenticated: token
         });
         localStorage.setItem('token', token);
         console.log('You have signed up!');
         browserHistory.push('/secret');
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
          this.setState({
            ...this.state,
            alertMessage: '',
            authenticated: token
          });
          browserHistory.push('/secret');
        });
    }
  }//End handleSignIn()

  handleSignOut() {
    localStorage.removeItem('token');
    this.setState({
      alertMessage: 'You have been logged out',
      authenticated: localStorage.getItem('token')
    });
    console.log('Authenticated state is: ' + this.state.authenticated);
  }

  requireAuth(nextState, replace) {
    if (this.state.authenticated === null) {
      replace({
        pathname: '/signin'
      })
    }
  }

  render() {
    return (
      <div>
      <Router history={browserHistory}>
        <Route path='/' component={(props) => (<MainContainer alertMessage={this.state.alertMessage} showNavItems={this.state.authenticated} signOut={this.handleSignOut.bind(this)} children={props.children}/>)}>
          <IndexRoute component={Home} />
          <Route path='/signin' component={() => <SignIn onSignIn={this.handleSignIn.bind(this)} />} />
          <Route path='/signup' component={() => <SignUp onSignUp={this.handleSignUp.bind(this)} />} />
          <Route path='/secret' component={Secret} />
        </Route>
      </Router>
      </div>
    );
  }
}

export default App;
