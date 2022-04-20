// import React from "react";
import Pasundo from './Pages/Users/Pasundo';
import Location from './Pages/Users/Location';
import BookingForm from './Pages/Users/BookingForm';
import WaitingForDriverConfirmation from './Pages/Users/WaitingForDriverConfirmation';
import DriverArrival from './Pages/Users/DriverArrival';
import UserHistory from './Pages/Users/UserHistory';
import DriverHistory from './Pages/Drivers/DriverHistory';
import DriverCheckIn from './Pages/Drivers/DriverCheckIn';
import DriverMap from './Pages/Drivers/DriverMap';
import ClientQueuing from './Pages/Drivers/ClientQueuing';
import Header from './includes/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DriverHeader from './includes/DriverHeader';
import RegisterCategory from './Pages/RegisterCategory';
import UserRegistration from './Pages/UserRegistration';
import DriverRegistration from './Pages/DriverRegistration';
import TodaRegistration from './Pages/TodaRegistration';
import Login from './Pages/Login';
import Summon from './Pages/Summon';
import LandingPageNavBar from './includes/LandingPageNavBar';
import axios from 'axios';
axios.defaults.baseURL="http://192.168.254.123:5000/";


function App() {
  return (
    <>
    <Router>
      {/* <DriverHeader/> */}
      {/* <Header/> */}
      
        <Routes>
          <Route path='/Pasundo' element={<Pasundo/>}/>
          <Route path='/Location' element={<Location/>}/>
          <Route path='/BookingForm' element={<BookingForm/>}/>
          <Route path='/WaitingForDriverConfirmation' element={<WaitingForDriverConfirmation/>}/>
          <Route path='/DriverArrival' element={<DriverArrival/>}/>
          <Route path='/UserHistory' element={<UserHistory/>}/>

          {/* Driver Web App */}
          <Route path='/DriverCheckIn' element={<DriverCheckIn/>}/>
          <Route path='/DriverMap' element={<DriverMap/>}/>
          <Route path='/ClientQueuing' element={<ClientQueuing/>}/>
          <Route path='/DriverHistory' element={<DriverHistory/>}/>

          {/* Registration Form */}
          <Route path='/RegisterCategory' element={<RegisterCategory/>}/>
          <Route path='/UserRegistration' element={<UserRegistration/>}/>
          <Route path='/DriverRegistration' element={<DriverRegistration/>}/>
          <Route path='/TodaRegistration' element={<TodaRegistration/>}/>
          <Route path='/Login' element={<Login/>}/>

          {/* Landing Page */}
          <Route path='/' element={<Summon/>}/>

        </Routes>
    </Router>
    </>
  );
}

export default App;
