import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {Col, Container, Row} from 'react-bootstrap';

export default function TheTimeline() {
  const [locationName, setLocationName] = useState();
  

  function retrieveSessionData(data) {
    var dataArray = JSON.parse(sessionStorage.getItem(data))
    return (dataArray == null) ? {} : dataArray
  }
  
  useEffect(()=>{
    //Fetch from server toda coordinates

    var user = retrieveSessionData('coordinates')
    fetch('https://nominatim.openstreetmap.org/reverse?lat='+user.latitude+'&lon='+user.longitude+'&format=json')
      .then(response => response.json())
      .then(data => {
        setLocationName(data.display_name)
      });
  },[])


  return (
    <Container>
      <Row className='mb-3'>
        <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1 timelineItem'>
          <FontAwesomeIcon icon={faCircleDot} style={{color:'#81c784', fontSize:'18px'}} />
        </Col>
        <Col xs={11} md={11} lg={11}>
        <span style={{fontSize:'13px'}}>
          <b>Location:</b> <br />
          {locationName}
        </span>
        </Col>
      </Row>
   
      <Row  className='mb-3'>
        <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1'>
         <FontAwesomeIcon icon={faLocationDot}  style={{color:'#ff5252', fontSize:'21px'}}/>
        </Col>
        <Col xs={11} md={11} lg={11}>
        <span style={{fontSize:'13px'}}>
          <b>Toda Terminal:</b> <br />
          Market Market Loading/Unloading Bay, Taguig, Metro Manila
        </span>
        </Col>
      </Row>
    </Container>
  );
}