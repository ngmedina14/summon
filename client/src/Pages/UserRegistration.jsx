 import React from 'react';
 import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
 import {Link} from 'react-router-dom';
 
 const UserRegistration = () => {
   return (
     <>
        <h5 className='text-center py-2'>Create an account</h5>
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
            <FloatingLabel controlId="floatingInput" label="Location" className="mb-1" >
                <Form.Control type="text" placeholder="Location" required />
            </FloatingLabel>           
            
            <FloatingLabel controlId="floatingSelectGrid" label="Toda" className="mb-1">
                <Form.Select aria-label="Toda" required>
                    <option>Select toda</option>
                    <option value="1">Toda-One</option>
                    <option value="2">Toda-Two</option>
                    <option value="1">Toda-Three</option>
                </Form.Select>
            </FloatingLabel>           
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required />
            </FloatingLabel>           
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                <Form.Control type="password" placeholder="Password" required />
            </FloatingLabel>
            <Form.Label className="mb-1" >Your profile photo:</Form.Label>
                
            <Form.Control type="file" placeholder="Choose profile photo" className='mb-1' required/>
            <Form.Group as={Row} className="mb-2" controlId="formHorizontalCheck">
                <Col sm={{ span: 12}} >
                <Form.Check label="I read and agree to the Terms &amp; Condition." required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit">Register</Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Col sm={12}  className="text-center">
                <Form.Label className='mx-1' >Already have an account?</Form.Label>
                    <Link to="/Login" className='font-weight-bolder text-success' >
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
 
 export default UserRegistration
 