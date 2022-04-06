import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersBetweenLines, faRoute, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import user_icon from '../images/user_icon.png';
import driver_icon from '../images/driver_icon.png';
import toda_icon from '../images/toda_icon.png';

const RegisterCategory = () => {
  return (
    <div className='vh-90 bg-warning d-flex flex-column justify-content-center align-items-center'>
        
        <Row className='py-5'>
        <Col xs={12} md={12} lg={4} className='d-flex justify-content-center' >
        <Card style={{ width: '18rem'}} className='pt-2 m-2'>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <FontAwesomeIcon icon={faPersonWalkingLuggage} style={{fontSize: '40px'}} />
            <Card.Body>
                {/* <Card.Title>Register as User</Card.Title> */}
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <Col className='text-center mt-1'>
                <Link to='/UserRegistration'>
                <Button variant="success">Register as User</Button>
                </Link>
                </Col>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={12} lg={4} className='d-flex justify-content-center' >
        <Card style={{ width: '18rem' }} className='pt-2 m-2'>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <FontAwesomeIcon icon={faRoute} style={{fontSize: '40px'}} />
            <Card.Body>
                {/* <Card.Title>Register as User</Card.Title> */}
                {/* <Card.Text>
                Be one of our toda drivers
                </Card.Text> */}
                <Col className='text-center mt-1'>
                <Link to='/DriverRegistration'>    
                <Button variant="success">Register a Driver</Button>
                </Link>
                </Col>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={12} lg={4} className='d-flex justify-content-center' >
        <Card style={{ width: '18rem'}} className='pt-2 m-2'>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <FontAwesomeIcon icon={faUsersBetweenLines} style={{fontSize: '40px'}}/>
            <Card.Body>
                {/* <Card.Title>Register as User</Card.Title> */}
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <Col className='text-center mt-1'>
                <Link to='/TodaRegistration'>
                <Button variant="success">Request a Toda</Button>
                </Link>   
                </Col>
            </Card.Body>
        </Card>
        </Col>
        
        </Row>
       

    </div>
  )
}

export default RegisterCategory