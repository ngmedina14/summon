import React, {useEffect,useState,useRef} from 'react';

import {Accordion, Col, Row} from 'react-bootstrap';
import passenger1 from '../../images/passenger1.JPG';
import DriverHeader from '../../includes/DriverHeader';
import axios from 'axios';
import AccordionHistoryDriver from '../../includes/AccordionHistoryDriver';








const DriverHistory = () => {
   
    const [accordionHTML,setAccordionHTML] = useState('');
    const [history,setHistory] = useState([]);
    

    const retrieveLocalData = (data) => {
        let dataArray = JSON.parse(localStorage.getItem(data))
        return (dataArray == null) ? [] : dataArray
    }

    const DisplayAccordion = ()=>{
        setAccordionHTML(history.map((accordion, index)=>{
            return(
                <AccordionHistoryDriver 
                HistoryKey={index} 
                AppointmentID={accordion.appointment_id} 
                UserID={accordion.user_id} 
                FullName={accordion.client_fname+ ' '+ accordion.client_lname} 
                Mobile={accordion.user_mobile} 
                Vehicle={accordion.vehicle} 
                Driver={accordion.driver_fname+ ' '+ accordion.driver_lname}  
                Amount={accordion.total_amount} 
                HeadCount={accordion.head_count} 
                BookingDate={accordion.booking_date} 
                Latitude={accordion.client_lat} 
                Longitude={accordion.client_long} 
                ClientLocation={accordion.location} 
                TodaLocation={accordion.toda_loc}
                Notes={accordion.notes}/>
            )
            }))
    }
    
    useEffect(()=>{
        let driver = retrieveLocalData('driver');
        axios.get("driver/get-history/"+driver.id)
          .then((res) => {
                if(res.status === 200) {
                  if (res.data.hasOwnProperty('result')){
                    setHistory(res.data.result);
                    // console.log(res.data.result);
                    DisplayAccordion();
                }else{
                    setAccordionHTML('No History')
                  }
                  
                } 
            });
        
    },[accordionHTML])

    

  return (
    <>
    <DriverHeader/>
    <Accordion defaultActiveKey="0" >
        {accordionHTML}
        
    </Accordion>
    </>
  )
}

export default DriverHistory