
import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandshake, faLocationDot, faRoute } from '@fortawesome/free-solid-svg-icons';
import BackgroundSVG from './BackgroundSVG';

const FeaturesSection = () => {
  

  return (
    <>

    <Row xs={12} md={12} lg={4} className='d-flex justify-content-center align-items-center m-5' >
    <Col  className='d-flex justify-content-center  m-1'>
          <Card style={{ width: '250px', height: '280px' }}>
            <Card.Body className='text-center p-4'>
             
              <FontAwesomeIcon icon={faHandshake} style={{fontSize: '35px'}} className='mb-3'/>
              <Card.Title>ACCESSIBILITY</Card.Title>
              <Card.Text>
              Not all residents have a contact number of the toda drivers. We assists them in communicating to all toda drivers in their area.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      <Col className='d-flex justify-content-center  m-1'>
      <Card style={{ width: '250px', height: '280px' }}>
            <Card.Body className='text-center p-4'>
              <FontAwesomeIcon icon={faChartLine} style={{fontSize: '35px'}} className='mb-3'  />
              <Card.Title>MAXIMIZE TARGET MARKET</Card.Title>
              <Card.Text>
                We help toda drivers maximize their target market, from walkin passengers to being available to all the village residents.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      <Col  className='d-flex justify-content-center m-1'>
      <Card style={{ width: '250px', height: '280px' }}>
            <Card.Body className='text-center p-4'>
              <FontAwesomeIcon icon={faRoute} style={{fontSize: '35px'}} className='mb-3'  />
              <Card.Title>INTERACTIVE MAP</Card.Title>
              <Card.Text>
              We help the toda drivers to easily locate the exact location of the residents by confirming it's pin location.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>

    
    </Row>
    </>
  )
}

export default FeaturesSection