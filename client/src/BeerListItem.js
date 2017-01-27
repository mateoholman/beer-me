//Fix the handleDelClick so it refreshed the page after a beer is deleted!

import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import './css/BeerListItem.css';

class BeerListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: props.beer,
      showInfo: false
    }
  }

  handleDelClick(event) {
    this.props.delBeer(this.state.beer.id);
  }

  handleInfoClick(event) {
    this.state.showInfo ? this.setState({...this.state, showInfo: false}) : this.setState({...this.state, showInfo: true})
  }

  render() {

    return (
      <div className="beer-container">
        <div className="beer-header">
          <div className="action-buttons">
            <i className="fa fa-info" aria-hidden="true" onClick={this.handleInfoClick.bind(this)}></i>
            <i className="fa fa-times" aria-hidden="true" onClick={this.handleDelClick.bind(this)}></i>
          </div>
          <img src={this.state.beer.label} alt="A cool beer label" />
          <h2>{this.state.beer.name}</h2>
        </div>
        { this.state.showInfo ?
          (<div className="beer-info">
            <div id="abv-ibu-style">
              <h4>ABV: {this.props.beer.abv}   |   IBU: {this.props.beer.ibu}</h4>
              <h4>Style: {this.props.beer.style}</h4>
            </div>
            <div id="description">
              <p>{this.props.beer.description}</p>
            </div>
          </div>)
          : null
        }
      </div>
    )
  }

}//End BeerListItem

export default BeerListItem;
