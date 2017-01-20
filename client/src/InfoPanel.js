import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './css/InfoPanel.css';

class InfoPanel extends Component {

  constructor() {
    super();

    this.state = {
      showDetails: false,
      showButtons: false
    }
  }

  render() {
    return (
      <div className="info-panel">
        <div className='beer-header'>
          {this.props.beer.label ? <img src={this.props.beer.label} alt='A cool beer poster' /> : <p>No Label</p> }
          <h1>{this.props.beer.name}</h1>
        </div>
        {this.props.showDetails ?
        (<div className='beer-info'>
          <div id="abv-ibu-style">
            <h4>ABV: {this.props.beer.abv}   |   IBU: {this.props.beer.ibu}</h4>
            <h4>Style: {this.props.beer.style}</h4>
          </div>
          <div id="description">
            <p>{this.props.beer.description}</p>
          </div>
        </div>) : null }
        {this.props.showButtons ?
        (<div id="buttons">
          <Button bsStyle="primary" onClick={this.props.addBeer.bind(this)}>Add</Button>
          <Button bsStyle="danger" onClick={this.props.closeBeer.bind(this)}>Cancel</Button>
        </div>) : null }
      </div>
    );
  }
}//End InfoPanel

export default InfoPanel;
