import React from 'react'
import { Link } from 'react-router-dom'
// import Common from '../../Common'
import "../about/about.css"
import director from "../../assets/director.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Director = () => {
  return (
    <>
    <div style={{ width: '100%' }}>
<h1 style={{fontSize:'30px',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>ROHIT VIJAY DHARGAVE</h1>

<ul className='text-xl' style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
  <li><img width='600px' alt="top" src={director} style={{filter: "drop-shadow(0 0 0.75rem crimson)"}}/></li>
   <li style={{flexBasis:'800px'}}><p style={{fontSize:'20px',margin:'40px',color:'white'}}>
   Rohit Vijay Dhargave (BCCA/MBA) laid the foundation of D1 Dance Academy on 10th of April,2010 in Nagpur. <br/>He is a versatile dancer and an experienced professional Choreographer and Fitness Trainer <br/>who is working as a Dance Teacher and Choreographer since 15 years and has trained more than 5000 students till date. <br/> His Academy (D1 Dance Fitness and Art Academy) also organizes training camps for students and teachers.<br/>He trains students and adults for Reality shows <br/>and various national and international competitions.<br/> D1 Dance Crew has won more than 200 national and state level competitions under his guidance.<br/> D1 Dance Crew also made their way in HipHop Unite (Austria) under his guidance. 


   <h1 style={{fontSize:'20px',margin:'20px',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>CONNECT WITH HIM:</h1>

   
   <div className="bar">
        <div className="outer">
       <a className="nav-link p-0" href='tel:+919021152302'  style={{color:'black',fontSize:'15px'}}><FontAwesomeIcon icon={faPhone} />+91-9021152302</a>
          <a className="nav-link p-0" href='https://api.whatsapp.com/send?text=Welcome to D1 Dance Academy!Feel free to ask any of your queries here. We are happy to help you&phone=919021152302' style={{color:'green'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
             
        <a className="nav-link p-0" href="mailto:rohitdhargave1@gmail.com?body={Welcome to D1. You can enter any of your queries here and send us a mail. We'll be happy to help you}" style={{color:'black'}}><FontAwesomeIcon icon={faEnvelope} /></a>



      <a className="nav-link p-0" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red',}}><FontAwesomeIcon icon={faYoutube}/></a> 
      <a className="nav-link p-0" href="https://www.instagram.com/rohitdhargave_/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a>        
</div>
        </div>
   
     
     </p></li> 
  
  </ul>

  <ul style={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center'}}>
      <li className='m-2'>
      <Link to="/studio">  <button className='btn btn-warning'>D1 STUDIO</button></Link>
      </li> 
      <li className='m-2'>
       <Link to="/about">  <button className='btn bg-rose-400 text-orange-50'>ABOUT D1 DANCE FITNESS AND ART ACADEMY</button></Link> 
      </li>
  </ul>
</div>      
    </>
  )
}

export default Director