//Create function to add beer to list
//Create function to close InfoPanel
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './css/InfoPanel.css';

class InfoPanel extends Component {

  // handleCloseClick(event){
  //   event.preventDefault();
  //   this.props.closeInfoPanel();
  // }
  //
  // handleAddBeer(event) {
  //   event.preventDefault();
      // const { name, description, abv, ibu, style, label, user, list } = newBeer;
      // axios.post('/api/item/', { name, description, abv, ibu, style, label, user, list })
      //   .then(resp => {
      //     const beer = resp.data;
      //     this.setState({
      //         beers: [beer, ...this.state.movies]
      //       })
      //     })
      //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="info-panel">
        <div className='beer-header'>
          {this.props.beer.label ? <img src={this.props.beer.label.icon} alt='A cool beer poster' /> : <p>No Label</p> }
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
          <Button bsStyle="primary">Add</Button>
          <Button bsStyle="danger">Cancel</Button>
        </div>) : null }
      </div>
    );
  }
}//End InfoPanel

// <button className='btn btn-add' onClick={this.handleAddBeer.bind(this)}>Add beer</button>

export default InfoPanel;
