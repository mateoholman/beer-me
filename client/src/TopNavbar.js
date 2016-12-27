import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Beer Me!</Link>
        </Navbar.Brand>
        { props.showNavItems ? <Navbar.Toggle /> : null }
      </Navbar.Header>
      {
        <Navbar.Collapse>
          props.showNavItems ?
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
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
          </Nav>
        </Navbar.Collapse>
      }
    </Navbar>
  );
}

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
