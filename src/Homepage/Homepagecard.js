import React from 'react'
import './Homepage.css'

const Homepagecard = (props) => {
    return (
        <>
            <div className='icon-container'>
                {props.icon}
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </>
    )
}

export default Homepagecard
