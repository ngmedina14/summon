import React from 'react';
import Header from '../../includes/Header';
import {Accordion, Col, Row} from 'react-bootstrap';
import driver1 from '../../images/driver1.jpg';
import TheTimeline from '../../includes/TheTimeline';

const UserHistory = () => {

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
                <img src={driver1} alt="" width='110px' height='110px' className='border' />
                </Col>
                <Col xs={8} className='text-right'>
                <p style={{fontSize: '17px', fontWeight: 'bold'}}>Jirah Medina</p>
                <p>09123456789</p>
                <p>Tricycle</p>
                <p>Head Count: 3</p>
                <p>31 March 2022, 8:00 AM</p>
               </Col>
            </Row>
            <TheTimeline/>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>
                Date: 31 March 2022, 8:00 AM
            </Accordion.Header>
            <Accordion.Body>
            <Row className='mb-3'>
                <Col xs={4}>
                <img src={driver1} alt="" width='110px' height='110px' className='border'  />
                </Col>
                <Col xs={8} className='text-right'>
                <p style={{fontSize: '17px', fontWeight: 'bold'}}>Jirah Medina</p>
                <p>09123456789</p>
                <p>Tricycle</p>
                <p>Head Count: 3</p>
                <p>31 March 2022, 8:00 AM</p>
               </Col>
            </Row>
            <TheTimeline/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>
  )
}

export default UserHistory