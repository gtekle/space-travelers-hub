import React from 'react';
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
          <Nav.Link href="#home">Rockets</Nav.Link>
          <Nav.Link href="#link">Missions</Nav.Link>
          <Nav.Link href="#link">My Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
