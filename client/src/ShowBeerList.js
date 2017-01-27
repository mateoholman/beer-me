// Create a new Component for the list instead of InfoPanel
// Finish basic CRUD operations on your lists.

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import axios from 'axios';

import BeerListItem from './BeerListItem';
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
    const pathName = '/newListItem/' + this.state.id;
    browserHistory.push(pathName);
  }

  handleEditClick(event) {
    event.preventDefault();
    const pathName = '/editBeerList/' + this.state.id;
    browserHistory.push(pathName);
  }

  handleDelClick(event) {
    if (confirm('Really? Delete this whole list?')){
      axios.delete(`/api/lists/${this.state.id}`, {
        headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(resp => {
          browserHistory.push('/beerLists');
        })
        .catch(err => console.log(err));
    }
  }

handleDelBeerClick(beerId) {
  //Get the current beer list
  const beers = this.state.items;
  //Find the index of the beer that we want to delete
  const index = beers.map((beer) => beer._id).indexOf(beerId);
  //Create a new contacts array without the contact we want to delete
  const newBeers = beers.slice(0, index).concat(beers.slice(index+1));

  if (confirm('Are you sure you want to delete this beer?')){
    axios.delete(`/api/items/${beerId}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }})
      .then(prev => this.setState({
        ...prev,
        items: newBeers
      }))
      .catch(err => console.log(err));
  }
}

  render() {
    return (
      <div id="show-beer-list">
        <div className="list-buttons">
          <i className="fa fa-times fa-2x" aria-hidden="true" onClick={this.handleDelClick.bind(this)}></i>
          <i className="fa fa-pencil fa-2x" aria-hidden="true" onClick={this.handleEditClick.bind(this)} ></i>
        </div>
        <div className="title-avatar">
          <img src={this.state.avatar} alt="A frosty mug of beer" />
        </div>
        <div className="title-listName">
          <h1>{this.state.title}</h1>
        </div>
        <div className="button-container">
          <Button block bsStyle="primary" onClick={this.handleNewClick.bind(this)}>Add New Beer</Button>
        </div>
        <div id="beers">
          {
            (this.state.items.length > 0) ?
              this.state.items.map(beer => {
              return(
                <BeerListItem
                  key={beer._id}
                  beer={beer}
                  delBeer={this.handleDelBeerClick.bind(this)}
                  showDetails={false}
                />
              );})
            :
            (<h2>You have no beers in your list! Click the button above to add a new one.</h2>)
          }
        </div>
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
