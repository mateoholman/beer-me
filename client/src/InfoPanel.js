import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class InfoPanel extends Component {

  constructor() {
    super();

    this.state = {
      showDetails: false,
      showButtons: false
    }
  }

  detailSwitch(event) {
    event.preventDefault();
    if (this.state.showDetails) {
      this.setState({showDetails: false});
    }
    else {
      this.setState({showDetails: true});
    }
  }

  componentDidMount() {
    this.setState({
      showDetails: this.props.showDetails,
      showButtons: this.props.showButtons
    });
  }

  render() {
    return (
      <div className="info-panel">
        <div className='beer-header' onClick={this.detailSwitch.bind(this)}>
          {this.props.beer.label ? <img src={this.props.beer.label} alt='Beer' /> : <p>No Label</p> }
          <h1>{this.props.beer.name}</h1>
        </div>
        {this.state.showDetails ?
        (<div className='beer-info'>
          <div id="abv-ibu-style">
            <h4>ABV: {this.props.beer.abv}   |   IBU: {this.props.beer.ibu}</h4>
            <h4>Style: {this.props.beer.style}</h4>
          </div>
          <div id="description">
            <p>{this.props.beer.description}</p>
          </div>
        </div>) : null }
        {this.state.showButtons ?
        (<div id="buttons">
          <Button bsStyle="primary" onClick={this.props.addBeer.bind(this)}>Add</Button>
          <Button bsStyle="danger" onClick={this.props.closeBeer.bind(this)}>Cancel</Button>
        </div>) : null }
      </div>
    );
  }
}//End InfoPanel

export default InfoPanel;
