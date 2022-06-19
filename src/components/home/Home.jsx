import React from 'react'
import web from "../../assets/logo.png"
import Common from '../../Common'
import Videohome from '../Videohome'


const Home = () => {
  return (
    <>
    <Videohome videosrc="https://www.youtube-nocookie.com/embed/rfixvdRCI8o?playlist=rfixvdRCI8o&controls=0&autoplay=1&loop=1&mute=1"/>
     <Common txt1="Shape your Career with" txt2="Get Started" navigateTo="/service" imgsrc={web} />
     
    </>
  )
}

export default Home