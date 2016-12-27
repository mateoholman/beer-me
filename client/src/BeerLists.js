import React, { Component } from 'react';

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
      <div className="beer-list-app">
        <h1>Badass Beer Lists</h1>
      </div>
    );
  }

}//End List

export default BeerLists;
