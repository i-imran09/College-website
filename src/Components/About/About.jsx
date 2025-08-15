import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlay}) => {
  return (
    <div className="about" id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlay(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet 
                autem vel ex labore facilis, assumenda soluta voluptas neque ipsa dolores
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vel?adipisicing elit. Asperiores, vel? </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet 
                autem vel ex labore facilis, assumenda soluta voluptas neque ipsa dolores
                Lorem ipsum dolor sit amet consectetur adipisi </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet 
                autem vel ex labore facilis, assumenda soluta voluptas neque ipsa dolores
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vel</p>
        </div>
    </div>
  )
}

export default About