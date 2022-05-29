import React from 'react';
import Jinx from '../assets/aboutee.mp4'
import {FcBusinesswoman } from "react-icons/fc";
import AboutCard from './Aboutcard';

const About = () => {
    return (
        
<div className='about'>
<div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
            <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<FcBusinesswoman className='icon' />} heading='Great TN' text='Welcome to GreatTN travels website the one stop shop for all your travel needs. At greatTN.in, travel is just a click away. We strive for your best comfort. Be it a leisure trip or a business trip, we make it pleasure. ' />
                      
                    </div></div>
                    <a href="/" className="linker" style={{color:'white'}}>Go Back</a>
    </div>
    )}
    
    


export default About;
