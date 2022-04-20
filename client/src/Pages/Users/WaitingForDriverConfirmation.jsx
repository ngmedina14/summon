import React, {useState,useEffect,useRef} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import pasundo2 from '../../images/pasundo2.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../includes/Header';



const WaitingForDriverConfirmation = (props) => {
  const navigate = useNavigate();


  const retrieveLocalData = (data) => {
    let dataArray = JSON.parse(localStorage.getItem(data))
    return (dataArray == null) ? [] : dataArray
  }

  const cancelAppointment = (e)=>{
    e.preventDefault();
    let appointment = retrieveLocalData('appointment');
    const data = {
      appointment_id:appointment.id
    }
    axios.post("driver/cancel-appointment",data)
          .then((res) => {
              if(res.status === 200) {
                console.log("cancelled:appointment_id:"+appointment.id)
                localStorage.removeItem('appointment')
                navigate('/Pasundo')
              }
          });
  }
  
  const [user,setUser] = useState(()=>{
    let appointment = retrieveLocalData('appointment');
    return appointment.id
  });
  const [ appointment_id, setAppointment] = useState(()=>{
    let appointment = retrieveLocalData('appointment');
    return appointment.id
  });

  const [state, setState] = useState({ num: 0 });
  const counter = useRef(0);
  

  useEffect(()=>{

    if (true) {
      counter.current += 1;
      const timer = setTimeout(() =>{
        const data = {
          appointment_id:appointment_id
          };
            axios.get("client/check-appointment/"+appointment_id)
            .then((res) => {
                console.log("Hello"+res)
                if(res.status === 200) {
                // after success initialize the  field names from may laman to empty strings
                setAppointment('');
                console.log("here"+appointment_id)
                localStorage.setItem('client-transaction', JSON.stringify({'id':res.data.result.transaction_id}));
                //redirecting the page by using useNavigate history
                navigate('/DriverArrival')
                } else {
                    if(res.status === 422){
                        console.log(res.data)
                    }
                }
            });
        
        setState({ num: state.num + 1 })}, 1000);

      return () => clearTimeout(timer);
    }
  },[state]);
  
  return (
    <>
    <Header/>
    <Container className='p-4'>
      <h5 className=' text-center'>Please wait for the toda drivers to accept your booking.</h5>
      <Container className="p-2 ">
      <div className=' d-flex flex-column justify-content-center align-items-center mt-5'>
          <div className=''>
            <img src={pasundo2} width='160px' height='160px' alt="" className='rounded-circle'/>
          </div>
      </div>
      {/* <div className='mt-5'>
          <h6 className=' text-center'>Toda Driver Waiting List:</h6>
          <ul>
              <li>Pasenger 1</li>
              <li>Pasenger 2</li>
              <li>Pasenger 3</li>
              <li>Pasenger 4</li>
              <li>Pasenger 5</li>
              <li>Pasenger 6</li>
              <li>Pasenger 7</li>
          </ul>
          </div> */}
    </Container>
    <Form action='' method='POST' className='text-center'>
      
      <Button variant='success' type='submit' onClick={cancelAppointment}>Cancel</Button> 
      
    </Form>
    </Container>
    </>
  )
}

export default WaitingForDriverConfirmation