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
        <div className="beer-header">
          <img src={this.state.label} alt="A cool beer label" />
          <h2>{this.state.name}</h2>
          <div className="action-buttons">
            <i className="fa fa-info" aria-hidden="true"></i>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div className="beer-info">
        </div>
      </div>
    )
  }

}//End BeerListItem

export default BeerListItem;
