import React, {useEffect,useState,useRef} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from "leaflet";
import icon from "./Constants";
import DriverHeader from '../../includes/DriverHeader';

const DriverMap = () => {

  const navigate = useNavigate();
  const [locationName, setLocationName] = useState();
  const [btnDone, setBtnDone] = useState('none');
  const [btnArrive, setBtnArrive] = useState('block');
  const [mapLink, setMapLink] = useState('');

  const retrieveLocalData = (data) => {
    let dataArray = JSON.parse(localStorage.getItem(data))
    return (dataArray == null) ? [] : dataArray
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // // Windows Phone must come first because its UA also contains "Android"
    // if (/windows phone/i.test(userAgent)) {
    //     return "Windows Phone";
    // }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}


  const openMap = ()=>{
    window.open(mapLink)
  }

  const completeTransaction = ()=>{
   

    let transaction = retrieveLocalData('transaction');
    if (transaction.hasOwnProperty('id')){
      const data = {
        transaction_id: transaction.id
    }
    axios.post("driver/complete-transaction",data)
    .then((res) => {
          if(res.status === 200) {
           localStorage.removeItem('transaction')
          //redirecting the page by using useNavigate history
          setBtnDone('block');
          setBtnArrive('none');
          }
      });
    }else{
      console.log('already saved')
    }
  }
  
  const [ transaction, setTransaction] = useState({
    client_fname:null,
    client_lname:null,
    client_lat:null,
    client_long:null,
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
    });


  useEffect(()=>{
    let transaction = retrieveLocalData('transaction');
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
              
              //GET Location name
              // fetch('https://nominatim.openstreetmap.org/reverse?lat='+res.data.result.client_lat+'&lon='+res.data.result.client_long+'&format=json')
              // .then(response => response.json())
              // .then(data => {
              //   setLocationName(data.display_name)
              // });

              //Set Map Link for each Devices
              console.log(getMobileOperatingSystem())
              switch (getMobileOperatingSystem()){
                case "iOS":
                setMapLink(`https://maps.apple.com/?daddr=${ res.data.result.client_lat},${res.data.result.client_long}`);
                break;
                default:
                setMapLink(`https://maps.google.com/?q=${res.data.result.client_lat},${res.data.result.client_long}`);
            }

          }
      });

    
  },[]);

  function Location({latitude,longitude}) {
    function LocationMarker({latitude,longitude}) {
  
      const map = useMap();
  
      return  (
          <Marker position={{"lat":latitude,"lng":longitude}} icon={icon}>
            <Popup>
              Client is located here. <br />
              {transaction.location}
            </Popup>
          </Marker>
      );
    }
    return  (
      <MapContainer style={{border:'1px solid green', minHeight:'65vh'}} className='' center={[latitude,longitude]} zoom={16}>
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"/>
        <LocationMarker latitude={latitude} longitude={longitude}/>
      </MapContainer>
    );
  }

  return (
    <>
    <DriverHeader/>
    <Container className='px-4'>
    
    <Row className='pt-3'>
      <div className='d-flex'>
      <div style={{fontSize:'18px', fontWeight:'bold'}} className='flex-grow-1'>{transaction.client_fname+ ' ' +transaction.client_lname}</div>
     <div className='col-3'> 
     <span style={{fontSize:'16px'}} className='d-flex flex-column justify-content-center align-items-center fw-bold'>
        <div>Total Amount</div>  <div>&#8369; {transaction.total_amount}</div>
      </span>
     </div>
     <div className='col-3'>
     <span style={{fontSize:'16px'}} className='d-flex flex-column justify-content-center align-items-center fw-bold'>
        <div>Head Count</div>  <div> {transaction.head_count}</div>
      </span>
     </div>
      </div>
      
      {/* <p style={{marginBottom: '0'}}> <b>Head Count: </b> {transaction.head_count}</p> */}
      <p style={{marginBottom: '0'}}> <b>Notes: </b>{transaction.notes}</p>
      <p style={{marginBottom: '0'}}><b> Location: </b> {transaction.location}</p>
      
      
      
    </Row>

    <Row className='py-2'> 
        <Col xs={6}>
          <Link to=''>
          <a className='btn btn-outline-success w-100' href={`tel:${transaction.mobile}`} onClick={() =>  navigator.clipboard.writeText(`${transaction.mobile}`)}>{transaction.mobile}</a>
         </Link>
        </Col>
        <Col xs={6}>
         <Button variant='success' type='submit' className='w-100' onClick={completeTransaction}  style={{display: btnArrive}}>I'm Here</Button>
         <Button variant='success' type='submit' className='w-100' onClick={()=>{navigate('/ClientQueuing')}} style={{display: btnDone}}>Done</Button>
        </Col>
    </Row>

    <Row className='pb-2'>
        
        <Col xs={12}>
          <Link to=''>
            <Button variant='success'  className='w-100' onClick={openMap} >Open Map</Button>
         </Link>
        </Col>
    </Row>

    {(transaction.client_lat == null) ? '':
    <Location latitude={transaction.client_lat} longitude={transaction.client_long}/>}
    
    </Container>
    </>
  )
}

export default DriverMap