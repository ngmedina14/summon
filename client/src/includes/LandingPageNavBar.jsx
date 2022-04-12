import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

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
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#objectives">What We Do</Nav.Link>
        

      </Nav>
    {/* <Button variant="outline-success">Login</Button>
    <Button variant="outline-success">Register</Button> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default LandingPageNavBar