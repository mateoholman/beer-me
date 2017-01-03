//Do some test searches with Postman & our API key to see how the API responds
//Search for a new beer with the API, then post it as an item to our list

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
require('dotenv').config()

class App extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  const bdbAPI = process.env.APIKEY;

  addNewBeer(newBeer) {
    const { name, description, abv, ibu, brewedBy, style, label, user, list } = newBeer;
    axios.post('/api/item/', { title, director, poster, plot })
      .then(resp => {
        const beer = resp.data;
        this.setState({
            beers: [beer, ...this.state.movies]
          })
        })
      .catch(err => console.log(err));
  }

  handleSearchBarClick(searchTerm) {
    //Search the OMDB API for the search term.
    axios.get(`http://api.brewerydb.com/v2/?key={bdbAPI}`)
      .then(resp => {
        //If the movie can't be found in the OMDB API, alert the user
        if (resp.data.Response === 'False') {
          alert("Ain't no movie with the title " + searchTerm + ". Try again!");
        }
        else {
        //If the beer was found, show the first page of results?
        }
      })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="new-list-item-container">
        <h1>Add A New Beer</h1>
        <SearchBar onSearch={this.handleSearchBarClick.bind(this)} />
      </div>
    );
  }

  componentDidMount() {
  }

}//End NewListItem Component

export default NewListItem;
