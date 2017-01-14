// Setup alert message area or Component

import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import AlertArea from './AlertArea';
import './css/MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <div id="main-container">
        <TopNavbar showNavItems={this.props.showNavItems} signOut={this.props.signOut}/>
        {this.props.children}
      </div>
  );
}
}

export default MainContainer;
