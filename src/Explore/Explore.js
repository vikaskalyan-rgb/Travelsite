import React from 'react'
import './Explore.css'
import { GiMountains,GiAmericanFootballHelmet,GiByzantinTemple } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import ExploreCard from './ExploreCard';
import Jinx from '../assets/Allgood.mp4'

const Explore = () => {
    return (
        <div className='explore'>
            <div className="container">
            <div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
                
                
                <div className="card-container">
                    <div className="card">
                        <ExploreCard icon={<GiMountains className='icon' />} heading='UDAGAMANDALAM' text='Welcome to Nilgiris, one of the oldest mountain ranges, located at the tri-junction of Tamil Nadu, Kerala and Karnataka.' />
                      
                    </div>
                    <div className="card">
                        <ExploreCard  icon={<FaUmbrellaBeach className='icon' />} heading='MARINA' text='Marina beach in Chennai along the Bay of Bengal is Indias longest and world second longest beach.Known as the pride of chennai. ' />
                        
                    </div>
                    <div className="card">
                        <ExploreCard  icon={<GiAmericanFootballHelmet className='icon' />} heading='CHEPAUK STADIUM' text='The stadium is located at Chepauk, Chennai, a few hundred meters from the seashore.It is considered to be the home of Chennai Super Kings. ' />
                       
                    </div>
                    <div className="card">
                        <ExploreCard  icon={<GiByzantinTemple className='icon' />} heading='MEENATCHI AMMAN TEMPLE' text='Arulmigu Meenakshi Amman Temple, also known as Meenakshi Sundareshwarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River.  ' />
                       
                    </div>
                </div>
                <a href="/" className="linker" style={{color:'white'}}>Go Back</a>
            </div>
        </div>
    )
}

export default Explore