import React from 'react'
import Farms from './Farms'
import { Row,Col } from 'react-bootstrap';
import './Home.css'
function banner() {
    return (
        <div>
             <Row className="bannerRow">
                 <div className="banner-text">
                 <h2>Vaccine Tracker</h2>
                 <p>Find all the important information and all the things related to Covid Virus and Vaccine Here</p>
                 </div>
    <Col><img src="/Assets/Covid-Background.png" className="bannerImages" alt="imagelogo" /></Col>
    <Col><Farms/></Col>
  </Row> 
        </div>
    )
}

export default banner
