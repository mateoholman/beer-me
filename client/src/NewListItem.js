//Send the search name to our middleware!
//Test the components current functionality
//Do some test searches with Postman & our API key to see how the API responds
//Search for a new beer with the API, then post it as an item to our list
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import './css/NewListItem.css';

class NewListItem extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  addNewBeer(newBeer) {
    const { name, description, abv, ibu, brewedBy, style, label, user, list } = newBeer;
    axios.post('/api/item/', { name, description, abv, ibu, brewedBy, style, label, user, list })
      .then(resp => {
        const beer = resp.data;
        this.setState({
            beers: [beer, ...this.state.movies]
          })
        })
      .catch(err => console.log(err));
  }

  handleSearchBarClick(searchTerm) {
    //Search the BreweryDB API for the search term through our server middleware
    const pathName = "/api/addNewBeer?name=" + searchTerm
    axios.get(pathName)
      .then(resp => {
        console.log(resp.data.data[0].description);
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
