import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import './css/SignIn.css';

class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSignIn({
      username: this.state.username,
      password: this.state.password
    });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState(prev => ({
      ...prev,
      [name]: value
    }));
  }

  render() {
    return (
      <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <FormControl
            type="email"
            name="username"
            onChange={event => this.handleChange(event)}
            placeholder="Enter Username"
            value={this.state.username}
          />
        </FormGroup>

        <FormGroup>
          <FormControl
            type="password"
            name="password"
            onChange={event => this.handleChange(event)}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <Button bsStyle="primary" type="submit">
         Sign In
        </Button>

      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    );
  }

}//End SignIn

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;
