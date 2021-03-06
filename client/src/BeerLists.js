import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import BeerList from './BeerList';
import './css/BeerLists.css';

class BeerLists extends Component {
  constructor() {
    super();

    this.state = {
      beerLists: []
    };
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push('/newBeerList');
  }

  render() {
    const bLists = this.state.beerLists;
    return (
      <div id="beer-lists-container">
        <h1>Your Beer Lists</h1>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleClick.bind(this)}>New List</Button>
        <div className='beer-lists'>
          { (this.state.beerLists.length > 0) ?
            bLists.map(list => {
            return(
              <BeerList
                key={list._id}
                id={list._id}
                title={list.title}
                avatar={list.avatar}
              />
            );})
            :
            (<h2>You do not have any lists! Click the button above to create
              your first list.</h2>)
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('/api/lists', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(resp => {
        this.setState({
          ...this.state,
          beerLists: resp.data
        });
      })
      .catch(err => console.log(`Error! ${err}`));

  }//End componentDidMount

}//End List

export default BeerLists;
