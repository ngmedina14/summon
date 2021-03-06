import React, {useState,useEffect} from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClockRotateLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const DriverHeader = () => {
  const navigate = useNavigate();

  const [fullName,setFullName] = useState('');

  const retrieveLocalData = (data) => {
    let dataArray = JSON.parse(localStorage.getItem(data))
    return (dataArray == null) ? [] : dataArray
  }

  const logout = ()=>{
    localStorage.removeItem('driver');
   
  }

  useEffect(()=>{
    if (localStorage.getItem("driver") === null) {
      navigate('/');
    }
    if (localStorage.getItem("transaction") != null) {
      navigate('/DriverMap');
    }
    let driver=retrieveLocalData('driver')
    axios.get("auth/get-driver/"+driver.id)
    .then((res) => {
          if(res.status === 200) {
            setFullName(`${res.data.result.first_name} ${res.data.result.last_name}`);
          }
      });
  },[fullName])
  return (
    <Navbar bg="success" expand={false} >
        <Container fluid>
            <Navbar.Brand className='text-white fs-6'>Hello, {fullName}</Navbar.Brand>
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
                    <Nav.Link href="/ClientQueuing"> <FontAwesomeIcon icon={faHome} className='timeline-icon-pickup' /> Home</Nav.Link>
                    <Nav.Link href="/DriverCheckIn"> <FontAwesomeIcon icon={faUser} className='timeline-icon-pickup' /> Profile</Nav.Link>
                    <Nav.Link href="/DriverHistory"> <FontAwesomeIcon icon={faClockRotateLeft} className='timeline-icon-pickup' /> Ride's History</Nav.Link>
                    <Nav.Link href="/" onClick={logout}> <FontAwesomeIcon icon={faArrowRightFromBracket} className='timeline-icon-pickup'/> Logout</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default DriverHeader