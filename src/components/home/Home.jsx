import React from 'react'
import './home.css'
// import { NavLink } from 'react-router-dom'
//  import web from "../../assets/D1Logo.png"
// import Common from '../../Common'
//  import director from "../../assets/director.png"
// import vid from'../../assets/videoplayback.mp4'



const Home = () => {
  return (
    <>
    <div className='video-container'>
      <embed src="https://www.youtube-nocookie.com/embed/4Ja5uJr7M90?playlist=4Ja5uJr7M90&controls=0&mute=1&loop=1&autoplay=1&playsinline=1"
       title="YouTube video player"
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" 
       wmode="transparent" type="video/mp4" width="100%" height="100%"        
      allowfullscreen 
      style={{width:'100%',height:'90vh',pointerEvents:'none'}}></embed>
  </div>
         {/* <div>
          <img src={director} alt='director' style={{width:'100%'}}/>
          </div>  */}
    </>
  )
}

export default Home