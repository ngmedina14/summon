import React from 'react';
import pasundo1 from '../images/pasundo1.png';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/styles.css';


const HeroSection = () => {
  return (
    <>  
        {/* <Container className='vh-100 d-flex justify-content-center heroBgImage'> */}
        <section>
            <Container>
            <Row className='vh-100 d-flex justify-content-center heroBgImage'>
            
            <Col sm={12} md={6} lg={6} className='d-flex justify-content-center align-items-center'>
                <img src={pasundo1} alt="" className='rounded-circle border heroImg'  />
            </Col>
            <Col sm={12} md={6} lg={6} className='d-flex flex-column justify-content-center p-5 text-center'>
                <h4>No More Waiting</h4>
                <h6>Just confirm your location and book a Trike. Enjoy the affordable and hassle free ride with <span className='text-success'>Summon Webapp</span></h6>
                
                <div className='mt-2'>
                    <Link to="/Login">
                        <Button variant='outline-success' className='mx-2'>Login</Button>
                    </Link>
                    <Link to="/UserRegistration">
                        <Button variant='success' className='mx-2'>Register</Button>
                    </Link>
                    
                    
                </div>   
                           
            </Col>
            
        </Row> 
            </Container>
        </section>
        
       

        {/* </Container> */}
    </>
  )
}

export default HeroSection