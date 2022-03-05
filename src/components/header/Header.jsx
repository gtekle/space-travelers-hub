import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';

import logo from '../../assets/img/logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>
        <Container className="d-flex align-items-center gap-3">
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </Container>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Rockets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/missions">
            <Nav.Link>Missions</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/my-profile">
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
