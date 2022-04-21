import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/summon-logo1.png';
import {Link} from 'react-router-dom';

const LandingPageNavForReg = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand>
      <Link to="/">
      <img src={logo} width='120px' height='40px' alt="" className=''/>
      </Link>
      </Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#objectives">What We Do</Nav.Link>
      <NavDropdown title="Register" id="navbarScrollingDropdown">
          <Link to='/UserRegistration' style={{textDecoration:'none', color:'black', padding:'5px'}}>As User</Link>
          <br/>
          <Link to='/DriverRegistration' style={{textDecoration:'none', color:'black', padding:'5px'}}>As Driver</Link>
          
        </NavDropdown>
        

      </Nav>
    
    </Navbar.Collapse> */}
  </Container>
</Navbar>
    </>
  )
}

export default LandingPageNavForReg