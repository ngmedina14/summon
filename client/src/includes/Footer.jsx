import React from 'react';
import pasundo1 from '../images/pasundo1.png';
import {Button, Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    <section className='px-5 py-4 bg-success'>
        <Row>
            <Col xs={12} md={12} lg={4} className='text-center mb-2'>
            <img src={pasundo1} alt="" width='120px' height='120px' className='rounded-circle border'  />
            </Col>
            <Col xs={12} md={12} lg={8}>
                <Row className='text-center text-white'>
                    <Col xs={12} md={12} lg={4}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h6>Email</h6>
                    <p>info@summon.com</p>
                    </Col>
                    <Col  xs={12} md={12} lg={4}>
                    <FontAwesomeIcon icon={faSquarePhone} />
                    <h6>Phone</h6>
                    <p>02-8888-1900</p>
                    </Col>
                    <Col  xs={12} md={12} lg={4} >
                    <FontAwesomeIcon icon={faLocationDot} />    
                    <h6>Location</h6>
                    <p>Batangas Provincial Capitol, Batangas City</p>
                    </Col>
                </Row>
                <hr className='text-white'/>
                <Row className='text-center text-white'>
                    <Col  xs={12} md={12} lg={12}>
                        &copy; 2022 Summon
                    </Col>
                </Row>
            </Col>
        </Row>
    </section>
    </>
  )
}

export default Footer