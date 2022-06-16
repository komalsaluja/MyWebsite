import React from 'react'
import Common from '../../Common'
import web1 from "../../assets/img8.jpeg"
import "./about.css"

const About = () => {
  return (
    <div>
      <Common txt1="Welcome to About Page" txt2="Contact Us" navigateTo="/contact" imgsrc={web1} />
    </div>
  )
}

export default About