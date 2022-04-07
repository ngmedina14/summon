import React from 'react';

import {Accordion, Col, Row} from 'react-bootstrap';
import passenger1 from '../../images/passenger1.JPG';
import TheTimeline from '../../includes/TheTimeline';


const DriverHistory = () => {
   
  return (
    <>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                Date: 31 March 2022, 8:00 AM
            </Accordion.Header>
            <Accordion.Body>
            <Row className='mb-3'>
                <Col xs={4}>
                <img src={passenger1} alt="" width='110px' height='110px' className='border' />
                </Col>
                <Col xs={8} className='text-right'>
                <p style={{fontSize: '17px', fontWeight: 'bold'}}>Neil Medina</p>
                <p>09123456789</p>
                <p>Head Count: 3</p>
                <p>31 March 2022, 8:00 AM</p>
               </Col>
            </Row>
            <Row className='mb-3'>
               
                <Col xs={12} className='text-right'>
                <p><b>Notes: </b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
               </Col>
            </Row>
            <TheTimeline/>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>
                Date: 31 March 2022, 7:50 AM
            </Accordion.Header>
            <Accordion.Body>
            <Row className='mb-3'>
                <Col xs={4}>
                <img src={passenger1} alt="" width='110px' height='110px' className='border' />
                </Col>
                <Col xs={8} className='text-right'>
                <p style={{fontSize: '17px', fontWeight: 'bold'}}>Neil Medina</p>
                <p>09123456789</p>
                <p>Head Count: 3</p>
                <p>31 March 2022, 8:00 AM</p>
               </Col>
            </Row>
            <Row className='mb-3'>
               
                <Col xs={12} className='text-right'>
                <p><b>Notes: </b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
               </Col>
            </Row>
            <TheTimeline/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>
  )
}

export default DriverHistory