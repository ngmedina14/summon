import React from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LandingPageNavBar from '../includes/LandingPageNavBar';

const DriverRegistration = () => {
   
  return (
    <>
        <LandingPageNavBar/>
        <h5 className='text-center py-2'>Driver Registration</h5>
        <Container>
            <Form>
            <Row className='g-1'>
                <Col xs>
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-1"  >
                        <Form.Control  type="text" placeholder="First Name" required />
                    </FloatingLabel>
                </Col>    
                <Col xs>
                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-1" >
                        <Form.Control type="text" placeholder="Last Name" required />
                    </FloatingLabel>  
                </Col>    
            </Row>    
            <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-1" >
                <Form.Control type="number" placeholder="Mobile Number" required />
            </FloatingLabel>     
             
            
                      
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required />
            </FloatingLabel>           
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                <Form.Control type="password" placeholder="Password" required />
            </FloatingLabel>
            <Form.Label className="mb-1" >Your profile photo:</Form.Label>
            
            <Form.Control type="file" placeholder="Choose profile photo" className='mb-2' required/>

            <FloatingLabel controlId="floatingSelectGrid" label="Toda" className="mb-1">
                        <Form.Select aria-label="Toda" required>
                            <option>Select Toda</option>
                            <option value="1">Toda-One</option>
                            <option value="2">Toda-Two</option>
                            <option value="3">Toda-Three</option>
                        </Form.Select>
                    </FloatingLabel>

            <Row className='g-1'>
                <Col xs>
                <FloatingLabel controlId="floatingSelectGrid" label="Vehicle Type" className="mb-1">
                        <Form.Select aria-label="Vehicle Type" required>
                            <option>Select Vehicle</option>
                            <option value="1">Tricycle</option>
                            <option value="2">Padyak</option>
                            <option value="3">E-Bike</option>
                        </Form.Select>
                    </FloatingLabel> 
                </Col>

                <Col xs>
                <FloatingLabel controlId="floatingInput" label="Plate Number" className="mb-1" >
                <Form.Control type="number" placeholder="Plate Number" min="11" max="11" required  />
            </FloatingLabel> 
                </Col>
            </Row>

            <Form.Group as={Row} className="mb-2" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="I read and agree to the Terms &amp; Condition." required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit">Create account</Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Col sm={12} className="text-center">
                <Form.Label className='mx-1' >Already have an account?</Form.Label>
                    <Link to="/UserLogin" className='font-weight-bolder text-success' >
                        <span style={{fontWeight: 'bold'}} >Login here</span>
                        {/* style={{fontWeight: 'bold', textDecoration:'none'}} */}
                    </Link>
                </Col>
            </Form.Group>
            </Form>
        </Container>
    </>
  )
}

export default DriverRegistration