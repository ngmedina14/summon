import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

const Login = () => {
  return (
    <>
  <h5 className='text-center py-2'>Login your account</h5>
        <Container>
            <Form>
                       
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required />
            </FloatingLabel>           
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                <Form.Control type="password" placeholder="Password" required />
            </FloatingLabel>
           
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit">Login</Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Col sm={12} className="text-center">
                <Form.Label className='mx-1' >Dont have an account?</Form.Label>
                <br/>
                    <Link to="/UserRegistration" className='font-weight-bolder text-success' >
                        <span style={{fontWeight: 'bold'}} >Register here</span>
                        {/* style={{fontWeight: 'bold', textDecoration:'none'}} */}
                    </Link>
                </Col>
            </Form.Group>
            </Form>
        </Container>

    </>
  )
}

export default Login