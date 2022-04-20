import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AdvanceClientQ from './AdvanceClientQ';
import PendingClientQ from './PendingClientQ';

const NavTab  = () => {
  return (
    <>
    {/* <Nav justify variant="tabs" defaultActiveKey="/ClientQueuing" className='mb-3 bg-light text-black'>
      <Nav.Item>
      <Nav.Link href="/ClientQueuing">Pending Bookings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Advance Bookings</Nav.Link>
      </Nav.Item>
    </Nav> */}


    <Tabs defaultActiveKey="pendingBooking" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="pendingBooking" title="Pending Bookings">
        <PendingClientQ/>
      </Tab>
      <Tab eventKey="advanceBooking" title="Advanced Bookings">
        <AdvanceClientQ />
      </Tab>
      
    </Tabs>
    </>
  )
}

export default NavTab