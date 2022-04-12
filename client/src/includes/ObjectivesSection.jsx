
import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandshake, faRoute } from '@fortawesome/free-solid-svg-icons';


const FeaturesSection = () => {
  const featuresData = [
    {
      id: 1,
      icon: faHandshake,
      title: 'ACCESSIBILITY',
      text: 'Not all residents have a contact number of the available toda drivers. Summon webapp will assists them in communicating to all available toda drivers in their area.'
    },
    {
      id: 2,
      icon: faChartLine,
      title: 'MAXIMIZE TARGET MARKET',
      text: 'We help toda drivers maximize their target market, not only from walkin passengers but  to all of the village residents.'
    },
    {
      id: 3,
      icon: faRoute,
      title: 'INTERACTIVE MAP',
      text: "We help the toda drivers to easily locate the exact location of the residents when they confirm  their pin location in the map."
    }
  ]

  return (
    <>

    
    <section id='objectives' className= 'py-5'>
      <Row xs={12} md={12} lg={4}  className='d-flex justify-content-center align-items-center ' >
        {featuresData.map(( features, index) =>  {
          return  <Col  className='d-flex justify-content-center  m-1' key={index} >
                    <Card style={{ width: '250px', height: '280px' }} >
                      <Card.Body className='text-center p-4 bg-light'>
                      <FontAwesomeIcon icon={features.icon} style={{fontSize: '35px'}} className='mb-3'  />
                        <Card.Title>{features.title}</Card.Title>
                        <Card.Text>
                        {features.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

        })}
      </Row>
    </section>
    </>
  )
}

export default FeaturesSection