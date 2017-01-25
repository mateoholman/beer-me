import React, { Component } from 'react';
import './css/BeerListItem.css';

class BeerListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.beer.label,
      name: props.beer.name
    }
  }

  render() {

    return (
      <div className="beer-container">
        <div className="beer-label">
          <img src={this.state.label} alt="A cool beer label" />
        </div>
        <div className="beer-info">
          <h2>{this.state.name}</h2>
        </div>
      </div>
    )
  }

}//End BeerListItem

export default BeerListItem;
