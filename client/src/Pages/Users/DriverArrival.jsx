import React from 'react'
import { Button } from 'react-bootstrap';
import {Container, Row, Col, Card} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import TheTimeline from '../../includes/TheTimeline';
import DriverCard from '../../includes/DriverCard';






const DriverArrival = () => {
  return (
    <Container className=''>
        <Row className='pt-2'>
            <Col>
            <h5 className='text-center'>Please be ready <br/> your driver is on the way</h5>
            </Col>
        </Row>

        <DriverCard />
        <TheTimeline/>
        <Row>
            <Col xs={12} className='d-flex justify-content-around'>
                <Link to='/BookingForm'>
                    <Button variant='outline-success'>Cancel</Button>
                </Link>
                <Link to='/Pasundo'>
                    <Button variant='success'>Arrived</Button>
                </Link>
            </Col>
        </Row>
      
    </Container>
  )
}

export default DriverArrival
