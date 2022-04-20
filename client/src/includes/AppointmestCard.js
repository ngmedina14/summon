import React, {useEffect,useState,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Card, Col, Row, Stack} from 'react-bootstrap';
import DayJS from 'react-dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const AppointmentCard = ({AppointmentID,UserID,HeadCount,BookingDate,Notes,Latitude,Longitude,Location}) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [clickOnce, setClickOnce] = useState(false);


  const [ transaction, setTransaction] = useState({
    appointment_id:AppointmentID,
    user_id: UserID,
    driver_id: null,
    total_amount: 0
});

const retrieveLocalData = (data) => {
  let dataArray = JSON.parse(localStorage.getItem(data))
  return (dataArray == null) ? [] : dataArray
}

  const saveTransaction = ()=>{
    axios.get(`driver/check-appointment/${AppointmentID}`)
        .then((res) => {
          console.log(res)
            if(res.status === 200) {
                if (res.data.hasOwnProperty('result')){    
                  const data = {
                    appointment_id:transaction.appointment_id,
                    user_id: transaction.user_id,
                    driver_id: transaction.driver_id,
                    total_amount: transaction.total_amount
                }
                axios.post("driver/add-transaction",data)
                .then((res) => {
                      
                      if(res.status === 200) {
                      // after success initialize the  field names from may laman to empty strings
                      setTransaction({
                        appointment_id:AppointmentID,
                        user_id: UserID,
                        driver_id: null,
                        total_amount: 0});
                        const dataUpdate = {
                          appointment_id:transaction.appointment_id
                        }
                        axios.post("driver/pick-up-appointment",dataUpdate)
                        .then((res) => {
                            
                            if(res.status === 200) {
                              console.log("updated:appointment_id:"+transaction.appointment_id)
                            }
                        });
                    
                        localStorage.setItem('transaction', JSON.stringify({'id':res.data.transaction_id}));
                      //redirecting the page by using useNavigate history
                      navigate('/DriverMap')
                      }
                  });
                }
            } 
        });
    
    setClickOnce(true);
  }

  useEffect(()=>{

    axios.get("driver/get-toda/"+1)
    .then((res) => {
      
          if(res.status === 200) {
            let driver = retrieveLocalData('driver');
            let amount = 0;

            if (HeadCount>res.data.result.min_head_count){
              amount = res.data.result.rate * HeadCount
            }else{
              amount = res.data.result.rate * res.data.result.min_head_count
            }
            setTransaction({...transaction, ["driver_id"]: driver.id,["total_amount"]:amount});
          }
      });

    

    axios.get("driver/get-user/"+UserID)
    .then((res) => {
      
          if(res.status === 200) {
            setFullName(`${res.data.result.first_name} ${res.data.result.last_name}`);
          }
      });

    // fetch('https://nominatim.openstreetmap.org/reverse?lat='+Latitude+'&lon='+Longitude+'&format=json')
    // .then(response => response.json())
    // .then(data => {
    //   setLocationName(data.display_name)
    // });
  },[])

  return (
    <Card
        style={{ width: '18rem' }}
        className="m-3" >
        <Card.Header>
          <Row>
            <Col>
              <h6>{fullName}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><DayJS  format="ddd DD MMM YYYY | hh:mm A">{BookingDate}</DayJS> </p>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='mb-2'>Head Count: <b>{String(HeadCount)}</b> </p>
            <p className='mb-2'>Notes: <b>{Notes}</b></p>
            <Row className='mb-3'>
              <Col xs={1} md={1} lg={1} className='d-flex justify-content-end pt-1 px-1 timelineItem'>
                <FontAwesomeIcon icon={faCircleDot} style={{color:'#81c784', fontSize:'18px'}} />
              </Col>
              <Col xs={11} md={11} lg={11}>
              <span style={{fontSize:'13px'}}>
                <b>Location:</b> <br />
                {Location}
              </span>
              </Col>
          </Row>
          </Card.Text>
          <Row>
              <Col className='text-center'>
                    <Button disabled={clickOnce} variant="outline-success" onClick={saveTransaction}>Pick-up</Button>
              </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}

export default AppointmentCard