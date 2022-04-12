import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const DriverMap = () => {
  const navigate = useNavigate();
  return (
    <>
    <Container className='px-4'>
    <Row className='py-3'>
        <Col xs={6}>
          <Link to='/ClientQueuing'>
         <Button variant='outline-success' type='submit' className='w-100' onClick={()=>{navigate('/ClientQueuing')}} >Cancel</Button>
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
          
         <Button variant='success' type='submit' className='w-100' onClick={()=>{navigate('/DriverCheckIn')}} >I'm Here</Button>
         
        </Col>
      
    </Row>
    </Container>
    </>
  )
}

export default DriverMap