import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container" id='hero'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati illum
              error dolorem eos! Cum, omnis. Ea consectetur sapiente nostrum corrupti aut 
               </p>
               <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero