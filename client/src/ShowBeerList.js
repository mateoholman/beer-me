// Add message if there are no beers currently in the list.
// Finish basic CRUD operations on your lists.
// Setup an item component similar to the list component in BeerLists

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import axios from 'axios';
import './css/ShowBeerList.css';
import beerMug from './images/beerMug.jpg';

class ShowBeerList extends Component {

  constructor(props) {
    super(props);

    this.state={
      id: props.params.id,
      title: '',
      avatar: '',
      items: [],
    }
  }

  handleNewClick(event) {
    event.preventDefault();
    browserHistory.push('/newListItem');
  }

  handleEditClick(event) {
    event.preventDefault();
    const pathName = '/editBeerList/' + this.state.id;
    browserHistory.push(pathName);
  }

  handleDelClick(event) {
    event.preventDefault();
    axios.delete(`/api/lists/${this.state.id}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }})
      .then(resp => {
        browserHistory.push('/beerLists');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="show-beer-list">
        <div className="title-avatar">
          <img src={this.state.avatar} alt="A frosty mug of beer" />
        </div>
        <div className="title-listName">
          <h1>{this.state.title}</h1>
        </div>
        <Button bsStyle="primary" block onClick={this.handleNewClick.bind(this)}>+ New Beer</Button>
        <Button bsStyle="info" block onClick={this.handleEditClick.bind(this)}>Edit List</Button>
        <Button bsStyle="danger" block onClick={this.handleDelClick.bind(this)}>Delete List</Button>
      </div>
    );
  }

  componentDidMount() {
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
            avatar: resp.data.avatar || beerMug,
            items: resp.data.items
          });
        })
      .catch(err => console.log(`Error! ${err}`));

  }//End componentDidMount

}// End ShowBeerList

export default ShowBeerList;
