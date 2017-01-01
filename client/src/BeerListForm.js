//Change the submit function so we can create new lists.

import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import './css/BeerListForm.css';

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
      <div className="new-list-form">
      <h1>Create New List</h1>

      <form onSubmit={this.handleSubmit.bind(this)}>

        <FormGroup>
        <input
          id='title'
          className='new-list-field'
          type='text'
          placeholder='List Title...'
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        </FormGroup>

        <FormGroup>
        <input
          id='avatar'
          className='new-list-field'
          type='text'
          placeholder='Avatar URL...'
          value={this.state.avatar}
          onChange={(event) => this.handleAvatarChange(event)}
        />
        </FormGroup>

        <Button type='submit' bsStyle="primary">Add List</Button>

      </form>
      </div>
    );
  }
}

export default BeerListForm;
