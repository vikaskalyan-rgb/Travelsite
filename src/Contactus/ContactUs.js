import React from 'react';
import Jinx from '../assets/contactee.mp4'
import {FcPhone } from "react-icons/fc";
import ContactusCard from './Contactuscard';
import './ContactUs.css'

const Contact = () => {
    return (
        
<div className='contact'>
<div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
            <div className="card-container">
                    <div className="card">
                        <ContactusCard icon={<FcPhone className='icon' />} heading='PHONE' text='Services run 24/7 and we can reached through the number 9880768222 ' />
                      
                    </div>
                   
            </div>
                    <a href="/" className="linker" style={{color:'white'}}>Go Back</a>
    </div>
    )}
    
    


export default Contact;
