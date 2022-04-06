import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const DriverMap = () => {
  return (
    <>
    <Container className='px-4'>
    <Row className='py-3'>
        <Col xs={6}>
          <Link to='/ClientQueuing'>
         <Button variant='outline-success' type='submit' className='w-100' >Cancel</Button>
         </Link>
        </Col>
        <Col xs={6}>
          <Link to=''>
         <Button variant='success' type='submit' className='w-100' >Open Map</Button>
         </Link>
        </Col>
    </Row>
    
    <div style={{border:'1px solid green', minHeight:'70vh'}}>
                
    </div>
 
    <Row className='py-3'> 
        <Col xs={6}>
          <Link to=''>
         <Button variant='outline-success' type='submit' className='w-100' >Call</Button>
         </Link>
        </Col>
        <Col xs={6}>
          <Link to='/BookingForm'>
         <Button variant='success' type='submit' className='w-100' >I'm Here</Button>
         </Link>
        </Col>
      
    </Row>
    </Container>
    </>
  )
}

export default DriverMap