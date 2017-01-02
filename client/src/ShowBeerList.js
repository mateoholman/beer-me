import React, { Component } from 'react';

class ShowBeerList extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      avatar: '',
      items: []
    };
  }

  render() {
    return (
      <div id="show-beer-list">
        <h1>Your Beer List</h1>
      </div>
    );
  }

}// End ShowBeerList
