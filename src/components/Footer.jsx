import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faInstagram, faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

  return (
    <>
  
   
         <footer className='w-100 text-center' style={{color:"white",marginTop:'80vh'}}>
             <p> &reg; D1DanceAcademy. </p>
             <ul className="navbar-nav ms-auto" style={{backgroundColor:'white',borderRadius:'5px',opacity:'0.7',alignItems:'center',padding:'0'}}>
    <li className="nav-item"  style={{display:'flex'}}>
    <a className="nav-link" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red'}}><FontAwesomeIcon icon={faYoutube}/></a> 
          <a className="nav-link" href="https://www.instagram.com/d1_dance_crew_nagpur/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="nav-link" href="https://www.facebook.com/D-ONE-DANCE-GROUP-202664833218291/" target="_blank" rel="noreferrer"  style={{color:'blue'}}><FontAwesomeIcon icon={faFacebook}/></a>
          <a className="nav-link" href="https://twitter.com/d1_dance"target="_blank" rel="noreferrer" style={{color:'lightblue'}} ><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="nav-link" href="tel:+919314920058"target="_blank" rel="noreferrer"  style={{color:'green'}} ><FontAwesomeIcon icon={faPhone} /></a>
          <a className="nav-link p-0" href='https://api.whatsapp.com/send?text=Welcome to D1 Dance Academy!Feel free to ask any of your queries here. We are happy to help you&phone=919314920058' style={{color:'green'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a className="nav-link" href="https://g.page/D1_DANCE_FITNESS_N_ART_ACADEMY?share" target="_blank" rel="noreferrer" style={{color:'blue'}}><FontAwesomeIcon icon={faLocationDot} /></a>  
         
        </li>   
        </ul>
         </footer>
    </>
  )
}

export default Footer