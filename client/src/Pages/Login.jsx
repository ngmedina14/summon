import React, {useEffect,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import LandingPageNavBar from '../includes/LandingPageNavBar';
import swal from 'sweetalert';

const Login = () => {
    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const checkLogin = (e)=>{
        e.preventDefault();
        axios.get(`auth/check-login/${username}/${password}`)
        .then((res) => {
            if(res.status === 200) {
                if (res.data.hasOwnProperty('result')){    
                    if (res.data.result.hasOwnProperty('user_id')){    
                        localStorage.setItem('user', JSON.stringify({'id':res.data.result.user_id}));
                        navigate('/Pasundo')
                    }
                    if (res.data.result.hasOwnProperty('driver_id')){    
                        localStorage.setItem('driver', JSON.stringify({'id':res.data.result.driver_id}));
                        navigate('/ClientQueuing')
                    }
                }
                if (res.data.hasOwnProperty('message')){  
                    swal('Invalid Login', res.data.message, 'warning');
                    console.log(res.data.message);
                }
                
            } 
        });
    }


  useEffect(()=>{
    if (localStorage.getItem("user") != null) {
      navigate('/Pasundo');
    }
    if (localStorage.getItem("driver") != null) {
      navigate('/ClientQueuing');
    }
  },[])


    



  return (
    <>
    <LandingPageNavBar />
  <h5 className='text-center py-2'>Login your account</h5>
        <Container>
            <Form>
                       
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required onChange={(e)=>setUsername(e.target.value)} />
            </FloatingLabel>           
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                <Form.Control type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
            </FloatingLabel>
           
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit" onClick={checkLogin} >Login</Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Col sm={12} className="text-center">
                <Form.Label className='mx-1' >Dont have an account?</Form.Label>
                <br/>
                    <Link to="/UserRegistration" className='font-weight-bolder text-success' >
                        <span style={{fontWeight: 'bold'}} >Register here</span>
                        {/* style={{fontWeight: 'bold', textDecoration:'none'}} */}
                    </Link>
                </Col>
            </Form.Group>
            </Form>
        </Container>

    </>
  )
}

export default Login