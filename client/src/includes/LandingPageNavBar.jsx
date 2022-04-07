import React from 'react';
import {Button, Container,Form, FormControl, Nav, Navbar} from 'react-bootstrap';

const LandingPageNavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Summon Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        

      </Nav>
    <Button variant="outline-success">Login</Button>
    <Button variant="outline-success">Register</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default LandingPageNavBar