import React, {useEffect,useState,useRef} from 'react';
import {Button, Card, Col, Row, Stack} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import AppointmentCard from './AppointmestCard';
import AppointmentCardAdvance from './AppointmentCardAdvance';

const AdvanceClientQ = () => {
    const navigate = useNavigate();

 

  const [state, setState] = useState({ num: 0 });
  const counter = useRef(0);


  const DisplayCards = ()=>{
    setCardHTML(appointment.map((card)=>{
          return(
            <AppointmentCardAdvance AppointmentID={card.appointment_id} UserID={card.user_id} HeadCount={card.head_count} BookingDate={card.booking_date} Latitude={card.latitude} Longitude={card.longitude} Location={card.location} Notes={card.notes}/>
          )
          }))
  }

  const [cardHTML,setCardHTML] = useState('');

  const [appointment,setAppointment] = useState([]);
  
  useEffect(()=>{

    if (true) {
      counter.current += 1;
      const timer = setTimeout(() =>{
            axios.get("driver/get-advance-appointment/")
          .then((res) => {
                if(res.status === 200) {
                  if (res.data.hasOwnProperty('result')){
                    setAppointment(res.data.result);
                    DisplayCards();
                  }else{
                    setCardHTML('No Appointment')
                  }
                  
                } 
            });
        
        setState({ num: state.num + 1 })}, 1000);

      return () => clearTimeout(timer);
    }
  },[state]);


  return (
    <Row xs={12} >
      <Col className='d-flex flex-wrap justify-content-center'>
          {cardHTML}
      </Col>
    </Row>
  )
}

export default AdvanceClientQ