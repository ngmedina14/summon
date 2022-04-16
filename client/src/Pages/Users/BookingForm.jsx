import React from 'react';
import {Container, FloatingLabel, Form, Button, Row, Col} from 'react-bootstrap';
import TheTimeline from '../../includes/TheTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';

const BookingForm = () => {
  let today = new Date();
  let dateTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().substring(0, 19);
  const navigate = useNavigate();
  


  function handleSubmit(){

    navigate('/WaitingForDriverConfirmation')
  }

  return (
    <>
    <Row className='mt-2'>
        <Col className='mx-2' > 
       
        <FontAwesomeIcon icon={faCircleChevronLeft} className='timeline-icon-dropoff' style={{color:'green'}} onClick={()=>{navigate('/Location')}}/>
       
        </Col>
    </Row>
    <Row>
      <Col><h6 className='text-center'>Set an appointment</h6></Col>
    </Row>
    <Container className='px-4 py-3'>
      
      <Form>

       <Row xs={12} md={12} lg={12}>
        <Col>
       <FloatingLabel controlId="floatingSelect" label="Toda" className="mb-2">
          <Form.Select aria-label="Toda" required>
            <option value="1">Toda 1</option>
            <option value="1">Toda 2</option>
            <option value="1">Toda 3</option>
            <option value="1">Toda 4</option>
          </Form.Select>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel controlId="floatingSelect" label="Head Count" className="mb-2">
          <Form.Select aria-label="Head Count" required>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </Form.Select>
        </FloatingLabel>
        </Col>

       </Row>

        <FloatingLabel controlId="floatingInput" label="Date" className="mb-2" >
        <Form.Control type="datetime-local" placeholder="Date" defaultValue={dateTime} min={dateTime}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextArea" label="Notes" className="mb-2">
        <Form.Control as="textarea" placeholder="Notes" style={{height:'100px', resize:'none'}} required/>
        </FloatingLabel>

        <TheTimeline/>
        
        <Row>
            <Col xs={ {span:8, offset: 2}} >
       
                <Button variant='success' className="w-100" type='submit' onClick={handleSubmit}>Confirm</Button>
            
            </Col>
        </Row>
        </Form>
    </Container>
    </>
  )
}

export default BookingForm