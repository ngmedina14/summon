import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();
  return (
    <Container className='px-4'>
    <Row>
        <Col>
            <h6 className='text-center py-3'>Confirm your pin location</h6>
        </Col>
    </Row>
    <div style={{border:'1px solid green', minHeight:'70vh'}}>
                
    </div>
 
    <Row className='py-3'>
        <Col xs={{span: 4, offset:4}}>
         
         <Button variant='success' type='submit' className='w-100' onClick={()=>{navigate('/BookingForm')}}>Confirm</Button>
         
        </Col>
    </Row>
    </Container>
  )
}

export default Map