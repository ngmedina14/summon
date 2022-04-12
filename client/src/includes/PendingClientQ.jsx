import React from 'react';
import {Button, Card, Col, Row, Stack} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import TheTimeline from './TheTimeline';

const PendingClientQ = () => {
  const navigate = useNavigate();
  return (
    <Row xs={12} >
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <Card
        style={{ width: '18rem' }}
        className="mb-2" >
        <Card.Header>
        <Stack direction="horizontal" gap={3}>
            <h6>Juan <br/> Dela Cruz</h6>

            <div className="vr" />
            <p><b>Booking Date:</b><br/> 02 Apr 2022, 10:30 AM </p>
        </Stack>
          {/* <h6>Juan Dela Cruz</h6>
          <p><b>Booking Date:</b><br/> 02 Apr 2022, 10:30 AM </p> */}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='mb-2'><b>Head Count:</b> 3</p>
            <p className='mb-2'><b>Notes:</b> Lorem ipsum dolor sit amet consectetur.</p>
            <TheTimeline/>
          </Card.Text>
          <Row>
              <Col className='text-center'>
                    <Button variant="outline-success" onClick={()=>{ navigate('/DriverMap')}}>Pick-up</Button>
              </Col>
          </Row>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default PendingClientQ