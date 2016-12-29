// Setup alert message area or Component

import React, { Component } from 'react';
import TopNavbar from './TopNavbar';

class MainContainer extends Component {
  render() {
    return (
      <div>

        {this.props.children}
      </div>
  );
}
}

// <TopNavbar showNavItems={this.props.showNav} />

export default MainContainer;
