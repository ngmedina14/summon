import React,{useRef,useEffect,useState,useMemo} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from "leaflet";
import icon from "./Constants";
import Header from '../../includes/Header';
const mapLocation = [14.47155151115248,121.03878021240236];
const Location = () => {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [locationName, setLocationName] = useState();

    const map = useMap();

    const onLocationFound = (e)=>{
      setPosition(e.latlng);
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      onMapClick(e);
      sessionStorage.setItem('coordinates', JSON.stringify({'latitude':e.latlng.lat,'longitude':e.latlng.lng}));
    }

    const onMapClick = (e)=>{
      fetch('https://nominatim.openstreetmap.org/reverse?lat='+e.latlng.lat+'&lon='+e.latlng.lng+'&format=json')
      .then(response => response.json())
      .then(data => {
        setLocationName(data.display_name)
      });
    }
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
      () => ({
        dragend() {
      const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            //save the coordinate location
            sessionStorage.setItem('coordinates', JSON.stringify({'latitude':marker.getLatLng().lat,'longitude':marker.getLatLng().lng}));
          }
        },
      }),
      [],
    )

      useEffect(() => {
      map.locate({ setView: true, maxZoom: 50 }).on("locationfound", onLocationFound);
      map.on('click', onMapClick);
      return () => {
        map.removeEventListener('click', onMapClick);
        map.locate().removeEventListener('locationfound',onLocationFound);
    }
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={icon} draggable={true} eventHandlers={eventHandlers} ref={markerRef}>
        <Popup>
          You are here. <br />
          {locationName}
        </Popup>
      </Marker>
    );
  }

  const changePos = (map)=>{
      // map.flyTo(mapLocation,14,{duration:3})
    //   map.locate().on("locationfound", function (e) {
    //     map.flyTo(e.latlng, 14);
    //   console.log("first")
    // });
  }
  
  return (
    <>
    <Header/>
    <Container className='px-4'>
    <Row>
        <Col>
            <h6 className='text-center py-3'>Confirm your pin location</h6>
        </Col>
    </Row>
    <MapContainer style={{border:'1px solid green', minHeight:'70vh'}} className='' center={[13.778944, 121.0679296]} scrollWheelZoom zoom={7}>
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"/>
        <LocationMarker/>
    </MapContainer>
 
    <Row className='py-3'>
        <Col xs={{span: 4, offset:4}}>
          <Link to='/BookingForm'>
         <Button variant='success' type='submit' className='w-100'>Confirm</Button>
         </Link>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Location
