import React from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
const TodaRegistration = () => {
  return (
    <>
    <h5 className='text-center py-2'>Toda Registration</h5>
        <Container>
            <Form>
            <FloatingLabel controlId="floatingInput" label="Toda Name" className="mb-1" >
                <Form.Control type="text" placeholder="Toda Name" required />
            </FloatingLabel> 
            <FloatingLabel controlId="floatingInput" label="Location" className="mb-1" >
                <Form.Control type="text" placeholder="Location" required />
            </FloatingLabel> 
        
            <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-1" >
                <Form.Control type="number" placeholder="Mobile Number" required />
            </FloatingLabel>     
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required />
            </FloatingLabel>           
            
            <Form.Group as={Row} className="mb-2" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Label className='mx-1' >Vehicle Type</Form.Label>
                <Form.Check label="Tricyle" required />
                <Form.Check label="Padyak" required />
                <Form.Check label="E-Bike" required />
                </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit">Register</Button>
                </Col>
            </Form.Group>
            
            </Form>
        </Container>
    </>
  )
}

export default TodaRegistration