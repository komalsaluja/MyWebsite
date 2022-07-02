import React from 'react'
import { Link } from 'react-router-dom'
// import Common from '../../Common'
import web from "../../assets/imgCard1.jpeg"
import web1 from "../../assets/imgCard.jpeg"
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const About = () => {
  return (
    <>
    <div style={{ width: '100%' }}>
<h1 style={{fontSize:'30px',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>D1 DANCE FITNESS AND ART ACADEMY</h1>

<ul className='text-xl' style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
  <li><img width='600px' alt="top" src={web} style={{filter: "drop-shadow(0 0 0.75rem crimson)"}}/></li>
 
   <li style={{flexBasis:'800px'}}><p style={{fontSize:'20px',margin:'40px',color:'white'}}>
   The foundation of D1 Dance Academy was laid by Rohit Vijay Dhargave on 10th of April 2010.<br/> D1 Dance Fitness and Art Academy is based in Nagpur and is ISO Certified and Registered.
  <br/>
   <br/> D1 Dance Crew has participated in many national and state level competitions 
   and won over 200 dance competitions.
   <br/> We have a team of experienced, trained, and talented staff and artists. 
    Our Speciality lies in:
    <ul style={{fontSize:'25px',lineHeight:'70%',padding:'0',margin:'0',display:'flex',flexWrap:'wrap'}}>
   <Link to="/courses/DANCE">  <button className='btn btn-info'> <li>DANCE</li></button></Link>
     <Link to="/courses/FITNESS">  <button className='btn btn-info'> <li>FITNESS</li></button></Link>
     <Link to="/courses/GYMNASTICS"> <button className='btn btn-info'>  <li>GYMNASTICS</li></button></Link>
     <Link to="/courses/EVENTS">  <button className='btn btn-info'> <li>EVENTS</li></button></Link>
     <Link to="/courses/ART">  <button className='btn btn-info'> <li>ART</li></button></Link>
    </ul> 
    We prepare Kids and Adults for competitions and Reality shows.  

    We also manage corporate events, school and college events and Wedding events.
    <br/> The services provided by us under event management include Dance, videography, photography, decoration ,sound, lighting, etc. 

    Art classes and services are also offered under the D1 Banner. It includes Tattoo, Sketching, Makeup and Mehendi.

    <li><img width='600px' alt="top" src={web1} style={{filter: "drop-shadow(0 0 0.75rem crimson)"}}/></li>
   <h1 style={{fontSize:'20px',margin:'20px',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>CONNECT WITH US:</h1>

   
   <div className="bar">
        <div className="outer">
       <a className="nav-link p-0" href='tel:+919021152302'  style={{color:'black',fontSize:'15px'}}><FontAwesomeIcon icon={faPhone} />+91-9021152302</a>
          <a className="nav-link p-0" href='https://api.whatsapp.com/send?text=Welcome to D1 Dance Academy!Feel free to ask any of your queries here. We are happy to help you&phone=919021152302' style={{color:'green'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
             
        <a className="nav-link p-0" href="mailto:rohitdhargave1@gmail.com?body={Welcome to D1. You can enter any of your queries here and send us a mail. We'll be happy to help you}" style={{color:'black'}}><FontAwesomeIcon icon={faEnvelope} /></a>



      <a className="nav-link p-0" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red',}}><FontAwesomeIcon icon={faYoutube}/></a> 
      <a className="nav-link p-0" href="https://www.instagram.com/rohitdhargave_/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a> 
      <a className="nav-link p-0" href="https://g.page/D1_DANCE_FITNESS_N_ART_ACADEMY?share" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLocationDot} /></a>                  
</div>
        </div>
   
     
     </p></li> 

     
  
  </ul>

  <ul style={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center'}}>
      <li className='m-2'>
      <Link to="/studio">  <button className='btn btn-warning'>D1 STUDIO</button></Link>
      </li> 
      <li className='m-2'>
       <Link to="/director">  <button className='btn btn-warning'>ROHIT VIJAY DHARGAVE(DIRECTOR)</button></Link> 
      </li>
  </ul>
</div>      
    </>
  )
}

export default About