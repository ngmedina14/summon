import React from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClockRotateLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <Navbar bg="success" expand={false} >
        <Container fluid>
            <Navbar.Brand className='text-white fs-6'>Hello, Rider</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className='text-white fs-6' />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Summon</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/Pasundo"> <FontAwesomeIcon icon={faHome} className='timeline-icon-pickup' /> Home</Nav.Link>
                    <Nav.Link href="/Pasundo"> <FontAwesomeIcon icon={faUser} className='timeline-icon-pickup' /> Profile</Nav.Link>
                    <Nav.Link href="/UserHistory"> <FontAwesomeIcon icon={faClockRotateLeft} className='timeline-icon-pickup' /> Ride's History</Nav.Link>
                    <Nav.Link href="/Home"> <FontAwesomeIcon icon={faArrowRightFromBracket} className='timeline-icon-pickup' /> Logout</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default Header