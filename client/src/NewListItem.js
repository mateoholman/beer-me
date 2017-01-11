//Show the result of the search
//Give the user the option to add the beer to their list after the search result
//Search for a new beer with the API, then post it as an item to our list
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import InfoPanel from './InfoPanel';
import axios from 'axios';
import './css/NewListItem.css';

class NewListItem extends Component {

  constructor() {
    super();
    this.state = {
      showInfoPanel: false,
      searchedBeer: {
        name: '',
        description: '',
        abv: '',
        ibu: '',
        style: '',
        label: '',
      }
    }
  }

  addNewBeer(newBeer) {
    const { name, description, abv, ibu, style, label, user, list } = newBeer;
    axios.post('/api/item/', { name, description, abv, ibu, style, label, user, list })
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
        //If the beer can't be found in the BreweryDB API, alert the user
        if (resp.data.data === undefined) {
          alert("Ain't no beer with the name " + searchTerm + ". Try again!");
        }
        else {
          const { name, description, abv, ibu, style, labels } = resp.data.data[0];
          this.setState({
            ...this.state,
            searchedBeer: {
              name: name,
              description: description,
              abv: abv,
              ibu: ibu,
              style: style.name,
              label: labels,
            },
            showInfoPanel: true,
        });}
        })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="new-list-item-container">
        <h1>Add A New Beer</h1>
        <SearchBar onSearch={this.handleSearchBarClick.bind(this)} />
        {this.state.showInfoPanel ? <InfoPanel beer={this.state.searchedBeer} /> : null}
      </div>
    );
  }

  componentDidMount() {
  }

}//End NewListItem Component

export default NewListItem;
