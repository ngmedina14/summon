import React from 'react'
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import TheTimeline from '../../includes/TheTimeline';
import DriverCard from '../../includes/DriverCard';






const DriverArrival = () => {
    const navigate = useNavigate();
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
                
                    <Button variant='outline-success' onClick={()=>{navigate('/BookingForm')}}>Cancel</Button>
                
                
                    <Button variant='success' onClick={()=>{navigate('/Pasundo')}}>Arrived</Button>
               
            </Col>
        </Row>
      
    </Container>
  )
}

export default DriverArrival
