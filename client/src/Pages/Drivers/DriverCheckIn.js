import React from 'react';
import { Button, Container} from 'react-bootstrap';
import pasundo2 from '../../images/pasundo2.png';
import {Link} from 'react-router-dom';

const DriverCheckIn = () => {
    
  return (
    
    <>
    <Container className="p-2 ">
      <div style={{minHeight:'90vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      
          <div>
            <img src={pasundo2} width='160px' height='160px' alt="" className='rounded-circle'/>
          </div>
    
        <div>
          <p className='text-center px-5 py-3 fs-5'>Check client queeing to accept passenger.</p>
        </div>
        <div>
          <Link to='/ClientQueuing'>
            <Button variant='outline-success' type='submit' size="lg">Check In</Button> 
          </Link>
        </div>
      </div>
    </Container>
    </>
  )
}

export default DriverCheckIn