import React,{useState, useEffect, useRef} from 'react';
import {Container, FloatingLabel, Form, Button, Row, Col} from 'react-bootstrap';
import TheTimeline from '../../includes/TheTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../includes/Header';


const BookingForm = () => {
  let today = new Date();
  let minDateTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
  minDateTime = minDateTime + 'T00:00:00';
  let currentDateTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().substring(0, 16);
  const [clickOnce, setClickOnce] = useState(false);

 

  const navigate = useNavigate();
  const [clientLocation, setClientLocation] = useState();
  const [minHeadCount, setMinHeadCount] = useState(0);

  const [ appointment, setAppointment] = useState({
    user:null,
    headCount: "",
    bookingDate: currentDateTime, // edited
    notes: "",
    latitude:"",
    longitude: "",
    location_name: "",
});

const handleInput = (e) => {
  e.persist();
  setAppointment({...appointment, [e.target.name]: e.target.value});
}

const retrieveSessionData = (data) => {
  let dataArray = JSON.parse(sessionStorage.getItem(data))
  return (dataArray == null) ? [] : dataArray
}
const retrieveLocalData = (data) => {
  let dataArray = JSON.parse(localStorage.getItem(data))
  return (dataArray == null) ? [] : dataArray
}

const [user,setUser] = useState(()=>{
  let authUser = retrieveLocalData('user');
  console.log(authUser.id)
  return authUser.id
});

  function handleSubmit(e){
    e.preventDefault();
    console.log(appointment)
    // sessionStorage.setItem('appointment', JSON.stringify({'notes':notes,'head':head,'bookingDate':book}));// post to backend
    const data = {
      user:appointment.user,
      headCount: appointment.headCount,
      bookingDate: appointment.bookingDate,
      notes: appointment.notes,
      latitude: appointment.latitude,
      longitude: appointment.longitude,
      location_name: appointment.location_name
  }
  axios.post("client/add-appointment",data)
  .then((res) => {
        console.log(res)
        if(res.status === 200) {
        // after success initialize the  field names from may laman to empty strings
        setAppointment({
          user:null,
          headCount: "",
          bookingDate: "",
          notes: "",
          latitude:"",
          longitude: "",
          location_name:""});
          localStorage.setItem('appointment', JSON.stringify({'id':res.data.appointment_id}));
        //redirecting the page by using useNavigate history
        navigate('/WaitingForDriverConfirmation')
        } else {
            if(res.status === 422){
                // setProduct({...productInput, error_list: res.data.validate_err});
                console.log(res)
            }
        }
    });
    setClickOnce(true)
  }

  useEffect(()=>{
    //Fetch from server toda List

    // fetch('https://nominatim.openstreetmap.org/reverse?lat='+user.latitude+'&lon='+user.longitude+'&format=json')
    //   .then(response => response.json())
    //   .then(data => {
    //     setLocationName(data.display_name)
    //   });

    if (localStorage.getItem("client-transaction") != null) {
      navigate('/DriverArrival');
    }
    if (localStorage.getItem("appointment") != null) {
      navigate('/WaitingForDriverConfirmation');
    }

    axios.get("driver/get-toda/"+1)
    .then((res) => {
      console.log(res)
          if(res.status === 200) {
            //GET COORDINATE
            let coordinates = retrieveSessionData('coordinates');
            console.log(coordinates);
            setMinHeadCount(res.data.result.min_head_count);
            setAppointment({...appointment, ["headCount"]: res.data.result.min_head_count,
            ["latitude"]: String(coordinates.latitude),
            ["longitude"]: String(coordinates.longitude),
            ["user"]:user,
            ["location_name"]: clientLocation
          }); // from toda min head count
          }
      });

    },[clientLocation])


  return (
    <>
    <Header/>
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
            <option value="1" selected={(minHeadCount==1)?true:false}>One</option>
            <option value="2" selected={(minHeadCount==2)?true:false}>Two</option>
            <option value="3" selected={(minHeadCount==3)?true:false}>Three</option>
            <option value="4" selected={(minHeadCount==4)?true:false}>Four</option>
            <option value="5" selected={(minHeadCount==5)?true:false}>Five</option>
          </Form.Select>
        </FloatingLabel>
        </Col>

       </Row>

        {/* <FloatingLabel controlId="floatingInput" label="Date" className="mb-2" >
        <Form.Control type="datetime-local" name="bookingDate" placeholder="Date" defaultValue={currentDateTime} min={minDateTime} onChange={handleInput}/>
        </FloatingLabel> */}

        <FloatingLabel controlId="floatingTextArea" label="Notes" className="mb-2">
        <Form.Control as="textarea" name="notes" placeholder="Notes" style={{height:'100px', resize:'none'}} onChange={handleInput} required/>
        </FloatingLabel>

        <TheTimeline setClientLocation={setClientLocation} />
        
        <Row>
            <Col xs={ {span:8, offset: 2}} >
       
                <Button disabled={clickOnce} variant='success' className="w-100" type='submit' onClick={handleSubmit}>Confirm</Button>
            
            </Col>
        </Row>
        </Form>
    </Container>
    </>
  )
}

export default BookingForm