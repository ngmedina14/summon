 import React, {useState, useEffect} from 'react';
 import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
 import {Link} from 'react-router-dom';
import LandingPageNavForReg from '../includes/LandingPageNavForReg';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 
import swal from 'sweetalert';


 
 const UserRegistration = () => {
    const navigate = useNavigate();
    const [ createUser, setCreateUser] = useState({
        firstName: "",
        middleName: "",
        last_name: "",
        mobile: "",
        latitude: "",
        longitude: "",
        toda_id: 1,
        email: "",
        username: "",
        password: "",
        repassword: ""
    });

    const handleInput = (e) => {
        e.persist();
        setCreateUser({...createUser, [e.target.name]: e.target.value});
    }

    const saveUser = (e) => {
        e.preventDefault();
        //collect values and assign to obj data
        const data = {
            first_name: createUser.first_name,
            middle_name: createUser.middle_name,
            last_name: createUser.last_name,
            mobile: createUser.mobile,
            latitude: '', //createUser.latitude,
            longitude: '', //createUser.longitude,
            toda_id: 1, //createUser.toda_id,
            email: createUser.email,
            username: createUser.username,
            password: createUser.password,
            repassword: createUser.repassword
        }

        axios.post("auth/create-user",data)
            .then((res) => {
                    console.log(res)
                    if(res.status === 200) {
                        if (res.data.hasOwnProperty('result')){
                            swal("Congratulations!", res.data.result, 'success');
                            // after success initialize the  field names from may laman to empty strings
                            setCreateUser({
                            first_name: "",
                            middle_name: "",
                            lastName: "",
                            mobile: "",
                            latitude: "",
                            longitude: "",
                            toda_id: "",
                            email: "",
                            username: "",
                            password: "",
                            repassword: ""});
                            // localStorage.setItem('appointment', JSON.stringify({'id':res.data.appointment_id}));
                            //redirecting the page by using useNavigate history
                            navigate('/Login')
                        }
                        if (res.data.hasOwnProperty('message')){
                            swal("Invalid User Registration", res.data.message, 'warning', '#66bb6a');
                            console.log(res.data.message);
                        }
                    
                    } else {
                        if(res.status === 422){
                            // setProduct({...productInput, error_list: res.data.validate_err});
                            console.log(res);
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
     <LandingPageNavForReg/>
        <h5 className='text-center py-2'>Create an account</h5>
        <Container>
            <Form onSubmit={saveUser}>
            <Row className='g-1'>
                <Col xs={12}>
                    <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-1"  >
                        <Form.Control  type="text" placeholder="First Name" required name="first_name" onChange={handleInput} value={createUser.first_name}  />
                    </FloatingLabel>
                </Col>  
                <Col xs={12}>
                    <FloatingLabel controlId="floatingMiddleName" label="Middle Name" className="mb-1"  >
                        <Form.Control  type="text" placeholder="Middle Name" required  name="middle_name" onChange={handleInput} value={createUser.middle_name} />
                    </FloatingLabel>
                </Col>  
                <Col xs={12}>
                    <FloatingLabel controlId="floatingILastName" label="Last Name" className="mb-1" >
                        <Form.Control type="text" placeholder="Last Name" required name="last_name" onChange={handleInput} value={createUser.last_name} />
                    </FloatingLabel>  
                </Col>    
            </Row>    
            <FloatingLabel controlId="floatingMobile" label="Mobile Number" className="mb-1" >
                <Form.Control type="number" placeholder="Mobile Number" required name="mobile" onChange={handleInput} value={createUser.mobile} />
            </FloatingLabel>     
            {/* <FloatingLabel controlId="floatingLocation" label="Location" className="mb-1" >
                <Form.Control type="text" placeholder="Location" required name="location" onChange={handleInput} value={createUser.location} />
            </FloatingLabel>            */}
                 
            
            {/* <FloatingLabel controlId="floatingSelectGrid" label="Toda" className="mb-1">
                <Form.Select aria-label="Toda" required name="toda" onChange={handleInput} value={createUser.toda} >
                    <option>Select toda</option>
                    <option value="1">Toda-One</option>
                    <option value="2">Toda-Two</option>
                    <option value="1">Toda-Three</option>
                </Form.Select>
            </FloatingLabel>            */}
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-1" >
                <Form.Control type="text" placeholder="Email" required name="email" onChange={handleInput} value={createUser.email} />
            </FloatingLabel>       
            <hr/>    
            <FloatingLabel controlId="floatingUsername" label="Username" className="mb-1" >
                <Form.Control type="text" placeholder="Username" required name="username" onChange={handleInput} value={createUser.username} />
            </FloatingLabel>           
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
                <Form.Control type="password" placeholder="Password" required name="password" onChange={handleInput} value={createUser.password} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingRePassword" label="Confirm Password" className="mb-2">
                <Form.Control type="password" placeholder="RePassword" required name="repassword" onChange={handleInput} value={createUser.repassword} />
            </FloatingLabel>
            {/* <Form.Label className="mb-1" >Your profile photo:</Form.Label>
                
            <Form.Control type="file" placeholder="Choose profile photo" className='mb-1' required/> */}
            <Form.Group as={Row} className="mb-2" controlId="formHorizontalCheck">
                <Col sm={{ span: 12}} >
                <Form.Check label="I read and agree to the Terms &amp; Condition." required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-1">
                <Col sm={12} className="text-center">
                    <Button variant="success" type="submit">Register</Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Col sm={12}  className="text-center">
                <Form.Label className='mx-1' >Already have an account?</Form.Label>
                    <Link to="/Login" className='font-weight-bolder text-success' >
                        <span style={{fontWeight: 'bold'}} >Login here</span>
                        {/* style={{fontWeight: 'bold', textDecoration:'none'}} */}
                    </Link>
                </Col>
            </Form.Group>
            </Form>
        </Container>
     </>
   )
 }
 
 export default UserRegistration
 