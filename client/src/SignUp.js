import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSignUp({
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <FormControl
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
            placeholder="Enter Full Name"
            value={this.state.name}
          />
        </FormGroup>

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

        <FormGroup>
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={event => this.handleChange(event)}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
          />
        </FormGroup>

        <Button bsStyle="primary" type="submit">
         Sign Up
       </Button>
      </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
