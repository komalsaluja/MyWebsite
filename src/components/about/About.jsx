import React from 'react'
import { Link } from 'react-router-dom'
// import Common from '../../Common'
import web from "../../assets/logo.png"
import "./about.css"

const About = () => {
  return (
    <>
    <div className="d1">
  The foundation of D1 Dance Academy was laid by Rohit Vijay Dhargave on 10th of April 2010. D1 Dance Fitness and Art Academy is based in Nagpur and is ISO Certified and Registered.
  <br/>
    <img className='image' src={web} alt='logo'/>
   <br/> D1 Dance Crew has participated in many national and state level competitions 
   and won over 200 dance competitions.
   <br/> We have a team of experienced, trained, and talented staff and artists. 
    Our Speciality lies in:
    <ul style={{fontSize:'25px',lineHeight:'70%',padding:'0',margin:'0',display:'flex'}}>
   <Link to="/courses/DANCE">  <button className='btn btn-info'> <li>DANCE</li></button></Link>
     <Link to="/courses/FITNESS">  <button className='btn btn-info'> <li>FITNESS</li></button></Link>
     <Link to="/courses/GYMNASTICS"> <button className='btn btn-info'>  <li>GYMNASTICS</li></button></Link>
     <Link to="/courses/EVENTS">  <button className='btn btn-info'> <li>EVENTS</li></button></Link>
     <Link to="/courses/ART">  <button className='btn btn-info'> <li>ART</li></button></Link>
    </ul> 
    We prepare Kids and Adults for competitions and Reality shows.
    </div>
<div className='d1'>
    We also manage corporate events, school and college events and Wedding events.
    <br/> The services provided by us under event management include Dance, videography, photography, decoration ,sound, lighting, etc. 

    Art classes and services are also offered under the D1 Banner. It includes Tattoo, Sketching, Makeup and Mehendi.
    </div>

    <div className="d1academy">

    </div>
      
    </>
  )
}

export default About