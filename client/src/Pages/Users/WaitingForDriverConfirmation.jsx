import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import pasundo2 from '../../images/pasundo2.png';
import {Link} from 'react-router-dom';



const WaitingForDriverConfirmation = (props) => {

  
  return (
    <Container className='p-4'>
      <h5 className=' text-center'>Please wait for the toda drivers to accept your booking.</h5>
      <Container className="p-2 ">
      <div className=' d-flex flex-column justify-content-center align-items-center mt-5'>
          <div className=''>
            <img src={pasundo2} width='160px' height='160px' alt="" className='rounded-circle'/>
          </div>
      </div>
      <div className='mt-5'>
          <h6 className=' text-center'>Toda Driver Waiting List:</h6>
          <ul>
              <li>Driver 1</li>
              <li>Driver 2</li>
              <li>Driver 3</li>
              <li>Driver 4</li>
              <li>Driver 5</li>
              <li>Driver 6</li>
              <li>Driver 7</li>
          </ul>
          </div>
    </Container>
    <Form action='' method='POST' className='text-center'>
      <Link to='/BookingForm'>
      <Button variant='success' type='submit'>Cancel</Button> 
      </Link>
    </Form>
    </Container>
  )
}

export default WaitingForDriverConfirmation