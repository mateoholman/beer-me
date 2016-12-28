// Setup alert message area or Component

import React from 'react';
import TopNavbar from './TopNavbar';

export const MainContainer = ( { children }) => (
  <div>
    <TopNavbar showNavItems={true} />
    {children}
  </div>
)
export default MainContainer;
