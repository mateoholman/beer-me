import React, { Component } from 'react';

class BeerListItem extends Component {

  render() {

    return (
      <div className="beer-container">
        <div className="beer-label">
          <img src={this.props.label} alt="A cool beer label" />
        </div>
        <div className="beer-info">
          <h2>{this.props.beerName}</h2>
        </div>
      </div>
    )
  }

}//End BeerListItem

export default BeerListItem;
