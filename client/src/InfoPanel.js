//Add button to add new beer!
import React, { Component } from 'react';

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
      <div className="container info-panel">
        <div className='beer-label'>
          {this.props.beer.label ? <img src={this.props.beer.label.icon} alt='A cool beer poster' /> : <p>No Label</p> }
        </div>
        <div className='beer-info'>
          <h1>{this.props.beer.name}</h1>
          <h2>ABV: {this.props.beer.abv}</h2>
          <h2>IBU: {this.props.beer.ibu}</h2>
          <h2>Style: {this.props.beer.style}</h2>
          <h2>Description:</h2>
          <p>{this.props.beer.description}</p>
        </div>
      </div>
    );
  }
}//End InfoPanel

// <button className='btn btn-add' onClick={this.handleAddBeer.bind(this)}>Add beer</button>

export default InfoPanel;
