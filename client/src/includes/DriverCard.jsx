import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import driver1 from '../images/driver1.jpg';

const DriverCard = ({transaction}) => {
  return (
    <>
    <section className='d-flex flex-column justify-content-end align-items-center' style={{position:'relative', fontSize:'13px', height:'380px'}}>
            <Row className='mb-5'>
            <Col xs={12}>
            <Card style={{ width: '15rem', position: 'relative'}} className="bg-success text-white" >
                     <div className=' d-flex justify-content-center align-items-center ' style={{height:'110px', width:'110px', borderRadius:'50%', position:'absolute', left:'27.4%', top:'-50px', border:'0.5px solid #e0e0e0'}}>
                     <img width='100px' height='100px' src={driver1} style={{borderRadius:'50%', left:'27.4%', top:'100px'}} alt=''  />
                     </div>
                    <Card.Body className='mt-5'>
                    <Card.Title className='text-center'>{transaction.driver_fname + ' ' + transaction.driver_lname}</Card.Title>
                    <Card.Text className='text-center'>
                            <span style={{fontWeight:'bold'}}>{transaction.mobile}</span>
                            <div className='d-flex justify-content-around'>
                                <span> <b>Plate Number:</b> <br/ >{transaction.plate_number}</span>
                                <span> <b>Vehicle Type:</b> <br/ >{transaction.vehicle}</span>
                            </div>
                            <div>
                            <span style={{fontWeight:'bold'}}>Total Amount: <br/> <span style={{fontSize:'26px'}} >&#8369; {transaction.total_amount}</span></span>
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