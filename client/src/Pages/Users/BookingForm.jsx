import React,{useState, useEffect, useRef} from 'react';
import {Container, FloatingLabel, Form, Button, Row, Col} from 'react-bootstrap';
import TheTimeline from '../../includes/TheTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';

const BookingForm = () => {
  let today = new Date();
  let dateTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().substring(0, 19);
  const navigate = useNavigate();
  const [ appointment, setAppointment] = useState({
    headCount: "",
    bookingDate: dateTime,
    notes: "",
    latitude:"",
    longitude: ""
});

const handleInput = (e) => {
  e.persist();
  setAppointment({...appointment, [e.target.name]: e.target.value});
}

const retrieveSessionData = (data) => {
  let dataArray = JSON.parse(sessionStorage.getItem(data))
  return (dataArray == null) ? [] : dataArray
}

  function handleSubmit(){
    // sessionStorage.setItem('appointment', JSON.stringify({'notes':notes,'head':head,'bookingDate':book}));// post to backend
    const data = {
      headCount: appointment.headCount,
      bookingDate: appointment.bookingDate,
      notes: appointment.notes,
      latitude: appointment.latitude,
      longitude: appointment.longitude
  }
  fetch("localhost:5000/client/add-appointment",  {body: JSON.stringify(data)}).then((res) => {
    if(res.data.Status === 200) {
        // after success initialize the  field names from may laman to empty strings
        setAppointment({
          headCount: "",
          bookingDate: "",
          notes: "",
          latitude:"",
          longitude: ""});
        //redirecting the page by using useNavigate history
        navigate('/WaitingForDriverConfirmation')
        } else {
            if(res.data.Status === 422){
                // setProduct({...productInput, error_list: res.data.validate_err});
                console.log("Not Saved")
            }
        }
    });
  }

  useEffect(()=>{
    //Fetch from server toda List

    // fetch('https://nominatim.openstreetmap.org/reverse?lat='+user.latitude+'&lon='+user.longitude+'&format=json')
    //   .then(response => response.json())
    //   .then(data => {
    //     setLocationName(data.display_name)
    //   });
    let coordinates = retrieveSessionData('coordinates');
    console.log(coordinates);
    setAppointment({...appointment, ["headCount"]: "2",["latitude"]: String(coordinates.latitude),["longitude"]: String(coordinates.longitude)}); // from toda min head count
  },[])


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
        {/* <Col>
       <FloatingLabel controlId="floatingSelect" label="Toda" className="mb-2">
          <Form.Select aria-label="Toda" required>
            <option value="1">Toda 1</option>
            <option value="1">Toda 2</option>
            <option value="1">Toda 3</option>
            <option value="1">Toda 4</option>
          </Form.Select>
        </FloatingLabel>
        </Col> */}
        <Col>
        <FloatingLabel controlId="floatingSelect" label="Head Count" className="mb-2">
          <Form.Select aria-label="Head Count" name="headCount" onChange={handleInput} required>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </Form.Select>
        </FloatingLabel>
        </Col>

       </Row>

        <FloatingLabel controlId="floatingInput" label="Date" className="mb-2" >
        <Form.Control type="datetime-local" name="bookingDate" placeholder="Date" defaultValue={dateTime} min={dateTime} onChange={handleInput}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextArea" label="Notes" className="mb-2">
        <Form.Control as="textarea" name="notes" placeholder="Notes" style={{height:'100px', resize:'none'}} onChange={handleInput} required/>
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