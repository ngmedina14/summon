import React, {useState,useEffect} from 'react';
import AboutSection from '../includes/AboutSection';
import Footer from '../includes/Footer';
import {useNavigate} from 'react-router-dom';

import HeroSection from '../includes/HeroSection';
import LandingPageNavBar from '../includes/LandingPageNavBar';
import ObjectivesSection from '../includes/ObjectivesSection';


const Summon = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("user") != null) {
      navigate('/Pasundo');
    }
    if (localStorage.getItem("driver") != null) {
      navigate('/ClientQueuing');
    }
  },[])

  return (
    <div style={{overflow: 'hidden'}}>
    <LandingPageNavBar />
    <HeroSection />
    <AboutSection/>
    <ObjectivesSection />
    <Footer />
    

    </div>
  )
}

export default Summon