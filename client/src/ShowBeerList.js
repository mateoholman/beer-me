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

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/newListItem');
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
        <Button bsStyle="primary" block onClick={this.handleClick.bind(this)}>+ New Beer</Button>
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
