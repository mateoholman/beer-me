//Plug the form into the App so we can create new lists.

import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';

class BeerListForm extends Component {
  constructor() {
    super();

    this.state = {
        title: '',
        avatar: ''
    };
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleAvatarChange(event) {
    this.setState({avatar: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, avatar} = this.state;
    this.props.onAdd({ title, avatar });
    this.setState({
        title: '',
        avatar: ''
    });
  }

  render() {
    return (
      <div className="title-block">
      <h1>Create New List</h1>

      <form onSubmit={this.handleSubmit.bind(this)}>

        <FormGroup>
        <input
          id='title'
          className='contact-field'
          type='text'
          placeholder='List Title...'
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        </FormGroup>

        <FormGroup>
        <input
          id='avatar'
          className='contact-field'
          type='text'
          placeholder='Avatar URL...'
          value={this.state.avatar}
          onChange={(event) => this.handleAvatarChange(event)}
        />
        </FormGroup>

        <input type='submit' value="Add List" className="submit-button" />

      </form>
      </div>
    );
  }
}

export default BeerListForm;
