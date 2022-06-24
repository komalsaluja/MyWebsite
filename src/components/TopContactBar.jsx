import React from 'react'
import './contactbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faFacebook,} from '@fortawesome/free-brands-svg-icons'

const TopContactBar = () => {
  return (
    <>
        <div className="bar">
        <div className="outer">
                   <a href='tel:+919314920058'><FontAwesomeIcon icon={faPhone} />+91-9314920058</a>
          
                   <a href='tel:+919314920058'><FontAwesomeIcon icon={faPhone} />+91-9314920058</a>
             
                   <a href="mailto:komal.saluja@cumminscollege.in?body={Welcome to D1. You can enter any of your queries here and send us a mail. We'll be happy to help you}"><FontAwesomeIcon icon={faEnvelope} /></a>
                   <a className="nav-link" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red',}}><FontAwesomeIcon icon={faYoutube}/></a> 
          <a className="nav-link" href="https://www.instagram.com/d1_dance_crew_nagpur/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="nav-link" href="https://www.facebook.com/D-ONE-DANCE-GROUP-202664833218291/" target="_blank" rel="noreferrer"  style={{color:'blue'}}><FontAwesomeIcon icon={faFacebook}/></a>             
</div>

<div className="outer1">

</div>
        </div>
    </>
  )
}

export default TopContactBar