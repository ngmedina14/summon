import React, {useEffect, useState} from 'react';
import DayJS from 'react-dayjs';
import {Accordion, Col, Container,  Row} from 'react-bootstrap';
import driver1 from '../images/driver1.jpg';
import TheTimeline from '../includes/TheTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const AccordionHistory = ({ BookingDate, Latitude, Longitude, Notes, Mobile, Vehicle, Driver, Amount, HistoryKey, ClientLocation, TodaLocation}) => {
    const [locationName, setLocationName] = useState();
  
    useEffect(()=>{
            // fetch('https://nominatim.openstreetmap.org/reverse?lat='+Latitude+'&lon='+Longitude+'&format=json')
            // .then(response => response.json())
            // .then(data => {
            //   setLocationName(data.display_name)
            // });
    },[locationName])



  return (
    <Accordion.Item eventKey={HistoryKey}>
      
            <Accordion.Header>
            {/* <div className='w-100 d-flex justify-content-between mx-1'> */}
            <span><DayJS  format="ddd DD MMM YYYY | hh:mm A">{BookingDate}</DayJS> </span>
            {/* <span><b> &#8369; {Amount} </b> </span>
            </div> */}
               
            </Accordion.Header>
            <Accordion.Body>
            <Row className='p-0'>
                <Col xs={3}>
                <img src={driver1} alt="" width='110px' height='110px' className='border' style={{margin:'0'}} />
                </Col>
                <Col xs={9} className='text-left'>
                <p style={{fontSize: '17px', fontWeight: 'bold', margin: '0'}}>{Driver}</p>
                <p style={{fontSize: '14px', margin: '0'}}><b> &#8369; {Amount} </b></p>
                <p style={{margin: '0'}}>{Mobile}</p>
                <p style={{margin: '0'}}>{Vehicle}</p>
                <p><b>Notes: </b>{Notes}</p>
               </Col>
            </Row>
           

            <Container>
                <Row className='mb-1'>
                    <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1 timelineItem'>
                    <FontAwesomeIcon icon={faCircleDot} style={{color:'#81c784', fontSize:'18px'}} />
                    </Col>
                    <Col xs={11} md={11} lg={11}>
                    <span style={{fontSize:'13px'}}>
                    <b>Location:</b> <br />
                    {ClientLocation}
                    </span>
                    </Col>
                </Row>
            
                <Row  className='mb-1'>
                    <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1'>
                    <FontAwesomeIcon icon={faLocationDot}  style={{color:'#ff5252', fontSize:'21px'}}/>
                    </Col>
                    <Col xs={11} md={11} lg={11}>
                    <span style={{fontSize:'13px'}}>
                    <b>Toda Terminal:</b> <br />
                    {TodaLocation}
                    </span>
                    </Col>
                </Row>
            </Container>

            </Accordion.Body>
    </Accordion.Item>
  
  )
}

export default AccordionHistory