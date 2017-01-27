//Fix the handleDelClick so it refreshed the page after a beer is deleted!

import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import './css/BeerListItem.css';

class BeerListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.beer._id,
      label: props.beer.label,
      name: props.beer.name
    }
  }

  handleDelClick(event) {
    this.props.delBeer(this.state.id);
  }

  render() {

    return (
      <div className="beer-container">
        <div className="beer-header">
          <div className="action-buttons">
            <i className="fa fa-info" aria-hidden="true" ></i>
            <i className="fa fa-times" aria-hidden="true" onClick={this.handleDelClick.bind(this)}></i>
          </div>
          <img src={this.state.label} alt="A cool beer label" />
          <h2>{this.state.name}</h2>
        </div>
        <div className="beer-info">
        </div>
      </div>
    )
  }

}//End BeerListItem

export default BeerListItem;
