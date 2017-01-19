// Forward to a show view of the newly created list after submit.

import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import { browserHistory } from 'react-router';
import './css/BeerListForm.css';

class BeerListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: props.params.id || '',
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
    axios.post('/api/lists', { title, avatar }, {
      headers: {
        authorization: localStorage.getItem('token')
      }});
    browserHistory.push('/beerLists');
  }

  handleCancelClick(event) {
    event.preventDefault();
    browserHistory.push('/beerLists');
  }

  componentDidMount() {
    if (this.state.id !== ''){
      const pathName = '/api/lists/' + this.state.id;
      axios.get(pathName, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
        .then(resp => {
            this.setState({
              ...this.state,
              title: resp.data.title,
              avatar: resp.data.avatar
            });
          })
        .catch(err => console.log(`Error! ${err}`));
    }

  }//End componentDidMount

  render() {
    return (
      <div className="new-list-form">
      {this.state.id ? <h1>Edit List</h1> : <h1>Create New List</h1> }

      <form onSubmit={this.handleSubmit.bind(this)}>

        <FormGroup>
        <FormControl
          type='text'
          name='list-title'
          placeholder='List Title...'
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        </FormGroup>

        <FormGroup>
        <FormControl
          type='text'
          name='list-avatar'
          placeholder='Avatar URL...'
          value={this.state.avatar}
          onChange={(event) => this.handleAvatarChange(event)}
        />
        </FormGroup>

        <Button type='submit' bsStyle="primary">Save List</Button>
        <Button bsStyle="danger" onClick={this.handleCancelClick.bind(this)}>Cancel</Button>

      </form>
      </div>
    );
  }
}

export default BeerListForm;
