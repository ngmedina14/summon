import React from 'react';
import {Nav} from 'react-bootstrap';

const NavTab  = () => {
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home" className='mb-3 bg-light text-black'>
      <Nav.Item>
      <Nav.Link href="/home">Pending Bookings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Advance Bookings</Nav.Link>
      </Nav.Item>
    </Nav></>
  )
}

export default NavTab