import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/BeerList.css';

class BeerList extends Component {

  handleClick(event) {
    this.props.showBeer(this.props.id);
  }

  render() {
    return (
      <div className="beer-list" onClick={this.handleClick.bind(this)}>
        <div className="beer-list-avatar">
          <img src={this.props.avatar} alt="A frosty mug of beer" />
        </div>
        <div className="beer-list-title">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    )
  }

}//End Beer

export default BeerList;
