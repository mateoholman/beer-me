// Setup alert message area or Component

import React from 'react';
import TopNavbar from './TopNavbar';

const MainContainer = (props) => {
  return (
    <div>
      <TopNavbar />
      {props.children}
    </div>
  );
}
export default MainContainer;
