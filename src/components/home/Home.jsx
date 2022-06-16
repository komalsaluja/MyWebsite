import React from 'react'
import web from "../../assets/logo.png"
import Common from '../../Common'

const Home = () => {
  return (
    <>
     <Common txt1="Shape your Career with" txt2="Get Started" navigateTo="/service" imgsrc={web} />
    </>
  )
}

export default Home