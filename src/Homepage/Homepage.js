import React from 'react'
import './Homepage.css'
import { IoFastFoodOutline} from "react-icons/io5";

import { MdOutlineExplore } from "react-icons/md";
import Homepagecard from './Homepagecard';
import Jinx from '../assets/pulicee.mp4'


const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
            <h1 style={{color:'white',fontFamily:'Calibri'}}>Welcome to TamilNadu</h1>
                <div className="card-container">
                    <div className="card">
                        <Homepagecard icon={<MdOutlineExplore className='icon' />} heading='Explore' text='OF ALL THE BOOKS IN THE WORLD, THE BEST STORIES ARE FOUND BETWEEN THE PAGES OF AN ADVENTURE' />
                        <li className="linker">
                        <a href="/explore" style={{color:'black', fontSize:20}} >Click here</a>
                    </li>
                    </div>
                    <div className="card">
                        <Homepagecard icon={<IoFastFoodOutline className='icon' />} heading='Food' text='PULL UP A CHAIR. TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY DELICIOUS. ' />
                        <br/>
                        <li className="linker">
                        <a href="/food" style={{color:'black', fontSize:20}}>Click here</a>
                    </li>
                    </div>
                    
                </div>
             
               
              
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
        
    )
}

export default Homepage
