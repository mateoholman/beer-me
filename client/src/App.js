import React, { Component } from 'react';
import { BrowserRouter, Link, Match, Miss } from 'react-router';
import axios from 'axios';

import TopNavbar from './TopNavbar';
import BeerLists from './BeerLists';
import SignIn from './SignIn';
import Secret from './Secret';
import './css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      alertMessage: '',
      authenticated: localStorage.getItem('token')
    };
  }

  handleSignIn(credentials) {
    //Need to setup notices if username is not found or if password
    //does not match.
    const { username, password } = credentials;
    //Make sure the user entered a username & password
    if (!username.trim() || !password.trim()) {
      this.setState({
        ...this.state,
        signUpSignInError: 'Must Provide All Fields'
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
            signUpSignInError: '',
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

  renderApp() {
    return (
      <div>
        <Match exactly pattern="/" render={() => <h1>Hello There!</h1>} />
        <Match exactly pattern="/secret" component={Secret} />
        <Miss render={() => <h1>NOT FOUND!</h1>} />
      </div>
    );
  }//End renderApp()

  render() {
    return (
      <div className="App">
      <TopNavbar showNavItems={true} onSignOut={this.handleSignOut.bind(this)} />
      { this.state.authenticated ? this.renderApp() : <SignIn onSignIn={this.handleSignIn.bind(this)} />}
      </div>
    );
  }
}

export default App;