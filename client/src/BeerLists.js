import React, { Component } from 'react';
import axios from 'axios';
import './css/BeerLists.css';

class BeerLists extends Component {
  constructor() {
    super();

    this.state = {
      beerLists: []
    };
  }

  handleClick(event) {
    //Pass this back to the main componenet so the browserHistory push works!
    event.preventDefault();
  }

  render() {
    return (
      <div id="beer-lists-container">
        <h1>Badass Beer Lists</h1>
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
