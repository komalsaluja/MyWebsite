import React from 'react'
import './contactbar.css'
// import map from '../assets/map.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const TopContactBar = () => {
  return (
    <>
        <div className="bar">
        <div className="outer">
       <a className="nav-link p-0" href='tel:+919021152302'  style={{color:'black',fontSize:'15px'}}><FontAwesomeIcon icon={faPhone} />+91-9021152302</a>
          <a className="nav-link p-0" href='https://api.whatsapp.com/send?text=Welcome to D1 Dance Academy!Feel free to ask any of your queries here. We are happy to help you&phone=919021152302' style={{color:'green'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
             
        <a className="nav-link p-0" href="mailto:rohitdhargave1@gmail.com?body={Welcome to D1. You can enter any of your queries here and send us a mail. We'll be happy to help you}" style={{color:'black'}}><FontAwesomeIcon icon={faEnvelope} /></a>



      <a className="nav-link p-0" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red',}}><FontAwesomeIcon icon={faYoutube}/></a> 
      <a className="nav-link p-0" href="https://www.instagram.com/d1_dance_crew_nagpur/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a>
           <a className="nav-link p-0" href="https://g.page/D1_DANCE_FITNESS_N_ART_ACADEMY?share" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLocationDot} /></a>           
</div>
        </div>
    </>
  )
}

export default TopContactBar