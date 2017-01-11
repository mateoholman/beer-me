//Style InfoPanel
//Add button to add new beer!
import React, { Component } from 'react';
import './css/InfoPanel.css';

class InfoPanel extends Component {

  // handleCloseClick(event){
  //   event.preventDefault();
  //   this.props.closeInfoPanel();
  // }
  //
  // handleAddBeer(event) {
  //   event.preventDefault();
  //   this.props.addNewbeer(this.props.beer);
  // }

  render() {
    // return(<h1>Hello World</h1>);
    return (
      <div className="info-panel">
        <div className='beer-header'>
          {this.props.beer.label ? <img src={this.props.beer.label.icon} alt='A cool beer poster' /> : <p>No Label</p> }
          <h1>{this.props.beer.name}</h1>
        </div>
        <div className='beer-info'>
          <p>ABV: {this.props.beer.abv}</p>
          <p>IBU: {this.props.beer.ibu}</p>
          <p>Style: {this.props.beer.style}</p>
          <p>{this.props.beer.description}</p>
        </div>
      </div>
    );
  }
}//End InfoPanel

// <button className='btn btn-add' onClick={this.handleAddBeer.bind(this)}>Add beer</button>

export default InfoPanel;
