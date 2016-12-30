import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Beer Me!
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          { props.showNavItems ?
          <Nav pullRight>
            <LinkContainer to="/" onClick={props.signOut}>
              <NavItem>Sign Out</NavItem>
            </LinkContainer>
            <LinkContainer to="/secret">
              <NavItem>Secret</NavItem>
            </LinkContainer>
          </Nav>
          :
          <Nav pullRight>
            <LinkContainer to="/signIn">
              <NavItem>Sign In</NavItem>
            </LinkContainer>
            <LinkContainer to="/signUp">
              <NavItem>Sign Up</NavItem>
            </LinkContainer>
          </Nav>
          }
        </Navbar.Collapse>
    </Navbar>
  );
}

TopNavbar.propTypes = {
  showNavItems: PropTypes.string,
  signOut: PropTypes.func
};

export default TopNavbar;
