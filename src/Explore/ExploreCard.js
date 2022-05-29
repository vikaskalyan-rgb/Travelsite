import React from 'react'
import './Explore.css'

const ExploreCard = (props) => {
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

export default ExploreCard
