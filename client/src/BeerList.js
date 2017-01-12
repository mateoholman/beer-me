import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/BeerList.css';
import beerMug from './images/beerMug.jpg';

class BeerList extends Component {

  render() {
    const beerIdPath = '/showBeerList/' + this.props.id;
    return (
      <div className="beer-list">
        <div className="beer-list-avatar">
          <img src={this.props.avatar || beerMug} alt="A frosty mug of beer" />
        </div>
        <div className="beer-list-title">
          <Link to={beerIdPath}> <h2>{this.props.title}</h2> </Link>
        </div>
      </div>
    )
  }

}//End Beer

export default BeerList;
