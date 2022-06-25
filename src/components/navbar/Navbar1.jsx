import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Nav,NavDropdown,Container } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faInstagram, faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import TopContactBar from '../TopContactBar';

// import { LinkContainer } from 'react-router-bootstrap'
// import jQuery from 'jquery';



const Navbar1 = () => {

  return (
    <>
<TopContactBar/>

      <Navbar fluid collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container style={{maxWidth:'1900px'}}>
  <Nav.Link className='navbar-brand' as={NavLink} eventKey={1} to="/"><img src={logo} alt='logo' width='70px'/></Nav.Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} eventKey={1} to="/">HOME</Nav.Link>
        <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} eventKey={1} to="/about" style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>ROHIT DHARGAVE</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} eventKey={2} to="/about" style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>D1 DANCE ACADEMY</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>


      <NavDropdown title="DANCE FITNESS GYMNASTICS" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} eventKey={1} to="/basic" style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>BASIC DANCE</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} eventKey={2} to="/advance" style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>ADVANCE CERTIFICATION</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} eventKey={3} to="/professional" style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>PROFESSIONAL DIPLOMA</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} eventKey={4} to="/individual" style={{backgroundColor:'lightskyblue',color:'darkblue',fontWeight:'bold'}}>FITNESS</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} eventKey={4} to="/individual" style={{backgroundColor:'lightskyblue',color:'darkblue',fontWeight:'bold'}}>GYMNASTICS</NavDropdown.Item>

      </NavDropdown>
      <Nav.Link as={NavLink} eventKey={2} to="/achieve" >ACHIEVEMENTS</Nav.Link>
      <Nav.Link as={NavLink} eventKey={1} to="/studio" >D1 STUDIO</Nav.Link>
    </Nav>
    <Nav>
      
      
      <Nav.Link as={NavLink} eventKey={3} to="/events">ART AND EVENTS</Nav.Link>
      <Nav.Link as={NavLink} eventKey={4} to="/contact">CONTACT US</Nav.Link>
    </Nav>

    <Nav>
    <ul className="navbar-nav ms-auto" style={{backgroundColor:'white',borderRadius:'5px',opacity:'0.7',alignItems:'center',padding:'0'}}>
    <li className="nav-item"  style={{display:'flex'}}>
    <a className="nav-link" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red',margin:'5px',paddingleft:'5px'}}><FontAwesomeIcon icon={faYoutube}/></a> 
          <a className="nav-link" href="https://www.instagram.com/d1_dance_crew_nagpur/" target="_blank" rel="noreferrer"  style={{color:'purple',margin:'5px',paddingLeft:'5px'}}><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="nav-link" href="https://www.facebook.com/D-ONE-DANCE-GROUP-202664833218291/" target="_blank" rel="noreferrer"  style={{color:'blue',margin:'5px',paddingLeft:'5px'}}><FontAwesomeIcon icon={faFacebook}/></a>
          <a className="nav-link" href="https://twitter.com/d1_dance"target="_blank" rel="noreferrer" style={{color:'lightblue',margin:'5px',paddingLeft:'5px'}} ><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="nav-link" href="tel:+919314920058"target="_blank" rel="noreferrer"  style={{color:'green',margin:'5px',paddingLeft:'5px'}} ><FontAwesomeIcon icon={faPhone} /></a>
          <a className="nav-link" href='https://api.whatsapp.com/send?phone=919314920058' style={{color:'green',margin:'5px',paddingLeft:'5px'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a className="nav-link" href="https://g.page/D1_DANCE_FITNESS_N_ART_ACADEMY?share" target="_blank" rel="noreferrer" style={{margin:'5px',paddingLeft:'5px',color:'blue'}}><FontAwesomeIcon icon={faLocationDot} /></a>  
         
        </li>   
        </ul>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
   
  )
}

export default Navbar1

// id="