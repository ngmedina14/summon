import React from 'react';
import { Button, Container} from 'react-bootstrap';
import pasundo2 from '../../images/pasundo2.png';
import {useNavigate } from 'react-router-dom';

const Pasundo = () => {
  const navigate = useNavigate();
  return (
    <>
    <Container className="p-2 ">
      <div style={{minHeight:'90vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      
          <div>
            <img src={pasundo2} width='160px' height='160px' alt="" className='rounded-circle'/>
          </div>
    
        <div>
          <p className='text-center px-5 py-3 fs-5'>Request a ride and get pick up by our toda drivers</p>
        </div>
        <div>
           
            <Button variant='outline-success' size="lg" onClick={()=>{ navigate('/Map') }} >Pasundo</Button> 
           
        </div>
      </div>
    </Container>
    </>
  )
}

export default Pasundo
