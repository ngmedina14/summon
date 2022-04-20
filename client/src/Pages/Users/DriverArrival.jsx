import React, {useState, useEffect, useRef} from 'react'
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import DriverCard from '../../includes/DriverCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Header from '../../includes/Header';




const DriverArrival = () => {
    const navigate = useNavigate();
    const [locationName, setLocationName] = useState();
    const [todaLocationName, setTodaLocationName] = useState();

    const retrieveLocalData = (data) => {
      let dataArray = JSON.parse(localStorage.getItem(data))
      return (dataArray == null) ? [] : dataArray
    }

    const completeTransaction = () => {
      localStorage.removeItem('appointment')
      localStorage.removeItem('client-transaction')
      navigate('/Pasundo')
    }
    
    const [ transaction, setTransaction] = useState({
      client_fname:null,
      client_lname:null,
      client_lat:null,
      client_long:null,
      location:null,
      head_count:null,
      notes:null,
      total_amount:null,
      driver_fname:null,
      driver_lname:null,
      mobile:null,
      plate_number:null,
      vehicle:null,
      toda_lat:null,
      toda_long:null,
      toda_loc:null
      });
  
  
    useEffect(()=>{
      let transaction = retrieveLocalData('client-transaction');
      axios.get("driver/get-transaction/"+transaction.id)
      .then((res) => {
        console.log(res)
            if(res.status === 200) {
              setTransaction({...transaction, 
                ["client_fname"]: res.data.result.client_fname,
                ["client_lname"]: res.data.result.client_lname,
                ["client_lat"]: res.data.result.client_lat,
                ["client_long"]: res.data.result.client_long,
                ["location"]: res.data.result.location,
                ["head_count"]: res.data.result.head_count,
                ["notes"]: res.data.result.notes,
                ["total_amount"]: res.data.result.total_amount,
                ["driver_fname"]: res.data.result.driver_fname,
                ["driver_lname"]: res.data.result.driver_lname,
                ["mobile"]: res.data.result.mobile,
                ["plate_number"]: res.data.result.plate_number,
                ["vehicle"]: res.data.result.vehicle,
                ["toda_lat"]: res.data.result.toda_lat,
                ["toda_long"]: res.data.result.toda_long,
                ["toda_loc"]: res.data.result.toda_loc
                });
  
                // fetch('https://nominatim.openstreetmap.org/reverse?lat='+res.data.result.client_lat+'&lon='+res.data.result.client_long+'&format=json')
                // .then(response => response.json())
                // .then(data => {
                //   setLocationName(data.display_name)
                // });

                // fetch('https://nominatim.openstreetmap.org/reverse?lat='+res.data.result.toda_lat+'&lon='+res.data.result.toda_long+'&format=json')
                // .then(response => response.json())
                // .then(data => {
                //   setTodaLocationName(data.display_name)
                // });
            }
        });
  
      
    },[]);

    const [btnDone, setBtnDone] = useState('none');
    const [state, setState] = useState({ num: 0 });
    const counter = useRef(0);

    useEffect(()=>{

      if (true) {
        counter.current += 1;
        const timer = setTimeout(() =>{
              let transaction = retrieveLocalData('client-transaction');
              axios.get("client/check-completed-transaction/"+transaction.id)
              .then((res) => {
                  if(res.status === 200) {
                    setBtnDone('block')
                  } 
              });
          
          setState({ num: state.num + 1 })}, 5000);
  
        return () => clearTimeout(timer);
      }
    },[state]);




  return (
   <>
   <Header/>
     <Container className=''>
        <Row className='pt-3'>
            <Col>
            <h5 className='text-center'>Please be ready <br/> your driver is on the way</h5>
            </Col>
        </Row>

        <DriverCard transaction={transaction} />
      
        <Container>
      <Row className='mb-3'>
        <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1 timelineItem'>
          <FontAwesomeIcon icon={faCircleDot} style={{color:'#81c784', fontSize:'18px'}} />
        </Col>
        <Col xs={11} md={11} lg={11}>
        <span style={{fontSize:'13px'}}>
          <b>Location:</b> <br />
          {transaction.location}
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
          {transaction.toda_loc}
        </span>
        </Col>
      </Row>
    </Container>

        <Row>
            <Col xs={12} className='d-flex justify-content-around'>
              <Button variant='success' onClick={completeTransaction} style={{display: btnDone}}>Done</Button>
            </Col>
        </Row>
      
    </Container>
   </>
  )
}

export default DriverArrival
