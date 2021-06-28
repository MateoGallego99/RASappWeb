import React from 'react'
import '../App.css'
import './HeroSection.css';

function HeroSection({
    lightText,
    lisghtTextDesc,
    headline,
    description,
}) {
    return (
        <div className='hero-container'>
            <div className='home__hero-text-wrapper'>
                <div className='top-line'></div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p  className={lisghtTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                
            </div>          
        </div>
    )
}

export default HeroSection
