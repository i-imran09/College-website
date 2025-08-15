import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'

const Videoplayer = ({Play,setPlay}) => {


  const player=useRef(null);
  
  const closeplyer=(e)=>{
    if(e.target === player.current){
      setPlay(false);
    }
  }

  return (
    <div className={`video-player ${Play ?'':"hide"}`} ref={player} onClick={closeplyer}>
        <video src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default Videoplayer