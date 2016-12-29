// Setup alert message area or Component

import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import AlertArea from './AlertArea';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <TopNavbar showNavItems={this.props.showNavItems} />
        <AlertArea message={this.props.alertMessage} />
        {this.props.children}
      </div>
  );
}
}

export default MainContainer;
