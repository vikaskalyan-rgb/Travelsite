import React from 'react'
import './Food.css'
import {GiChickenOven,GiFishCorpse } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { BsEggFried  } from "react-icons/bs";
import FoodCard from './Foodcard';
import Jinx from '../assets/neruppu.mp4'

const Food = () => {
    return (
        <div className='food'>
            <div className="container">
            <div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
                
                
                <div className="card-container">
                    <div className="card">
                        <FoodCard icon={<GiFishCorpse className='icon' />} heading='AAZHI SEAFOOD MESS' text='Aazhi is a restaurant located in Chrompet. There, they sell seafood meals for just rupees 499/-. In that meal, there are more than 20 items and the main course are unlimited.  ' />
                      
                    </div>
                    <div className="card">
                        <FoodCard  icon={<GiChickenOven className='icon' />} heading='TN 43 CAFE & RESTAURANT' text='TN 43 Cafe and Restaurant is a famous stop in the Mettupalayam National Highway. It is a place where we can have quick bites when we are in a journey to Ooty. ' />
                        
                    </div>
                    <div className="card">
                        <FoodCard  icon={<SiCoffeescript className='icon' />} heading='VISALAM COFFEE MADURAI' text='Visalam coffee is the brand old shop for coffee in Madurai serving for more than 40 years..The unique taste is still unbeatable. ' />
                       
                    </div>
                    <div className="card">
                        <FoodCard  icon={<BsEggFried className='icon' />} heading='MKN IDLY KADAI ' text='MKN madurai idly kadai which is located there for 10+ years is well known for their nonveg food, is located at tambaram and famous for their worldclass parottas.  ' />
                       
                    </div>
                </div><br/>
                <a href="/" className="linker" style={{color:'white'}}>Go Back</a>
            </div>
        </div>
    )
}

export default Food