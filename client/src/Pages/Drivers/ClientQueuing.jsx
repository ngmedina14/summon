import React from 'react';
import DriverHeader from '../../includes/DriverHeader';
// import {Button, Card, Col, Row, Stack} from 'react-bootstrap';
import NavTab from '../../includes/NavTab';
import PendingClientQ from '../../includes/PendingClientQ';


const ClientQueuing = () => {
  return (
    <>
    <DriverHeader/>
    {/* <NavTab/> */}
    <PendingClientQ/>
    </>
  )
}

export default ClientQueuing