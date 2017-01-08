import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Link to="/">
        <Navbar.Brand>Beer Me!</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          { props.showNavItems ?
          <Nav pullRight>
            <LinkContainer to="/beerLists">
              <NavItem>Beer Lists</NavItem>
            </LinkContainer>
            <LinkContainer to="/secret">
              <NavItem>Secret</NavItem>
            </LinkContainer>
            <LinkContainer to="/" onClick={props.signOut}>
              <NavItem>Sign Out</NavItem>
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
