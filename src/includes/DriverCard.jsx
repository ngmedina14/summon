import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import driver1 from '../images/driver1.jpg';

const DriverCard = () => {
  return (
    <>
    <section className='d-flex flex-column justify-content-end align-items-center' style={{position:'relative', fontSize:'13px', height:'270px'}}>
            <Row className='mb-5'>
            <Col xs={12}>
            <Card style={{ width: '15rem', position: 'relative' }} className="bg-light" >
                     <div className=' d-flex justify-content-center align-items-center ' style={{height:'110px', width:'110px', borderRadius:'50%', position:'absolute', left:'30%', top:'-50px', border:'0.5px solid #e0e0e0'}}>
                     <img width='100px' height='100px' src={driver1} style={{borderRadius:'50%', left:'30%', top:'-50px'}}  />
                     </div>
                    <Card.Body className='mt-5'>
                    <Card.Title className='text-center'>Jirah Joy Medina</Card.Title>
                    <Card.Text className='text-center'>
                            <span>09171777777</span>
                            <div className='d-flex justify-content-around'>
                                <span> <b>Plate Number:</b> <br/ >3001-1234567</span>
                                <span> <b>Vehicle Type:</b> <br/ >Tricycle</span>
                            </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>  
        </section>
    </>

  )
}

export default DriverCard