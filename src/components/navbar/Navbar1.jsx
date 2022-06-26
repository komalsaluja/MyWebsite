import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Nav,NavDropdown,Container } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import TopContactBar from '../TopContactBar';
import './navbar.css'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'




const Navbar1 = () => {

  return (
    <>
<TopContactBar/>

{/* <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 mx-auto'> */}
  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container style={{maxWidth:'1800px'}}>
  {/* <Container> */}
  <LinkContainer className='navbar-brand' eventKey={1} to="/">
    <img src={logo} alt='logo' width='70px'/>
    </LinkContainer>

  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <LinkContainer to="/">
      <Nav.Link >HOME</Nav.Link>
      </LinkContainer>
     
      <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
      <LinkContainer to="/about">
      <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>FOUNDER (ROHIT DHARGAVE)</NavDropdown.Item>
      </LinkContainer>
        
        
        <NavDropdown.Divider />

        <LinkContainer to="/about">
        <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>D1 DANCE ACADEMY</NavDropdown.Item>
        </LinkContainer>

        <NavDropdown.Divider />

        <LinkContainer to="/studio">
        <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>D1 STUDIO</NavDropdown.Item>
        </LinkContainer>
  
      </NavDropdown>


      <NavDropdown title="COURSES" id="collasible-nav-dropdown">
        <LinkContainer to="/basic">
        <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>BASIC DANCE</NavDropdown.Item>
        </LinkContainer>

        <NavDropdown.Divider />

        <LinkContainer to="/advance" >
        <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>ADVANCE CERTIFICATION</NavDropdown.Item>
        </LinkContainer>

        <NavDropdown.Divider />


        <LinkContainer to="/professional">
        <NavDropdown.Item style={{backgroundColor:'lightblue',color:'darkblue',fontWeight:'bold'}}>PROFESSIONAL DIPLOMA</NavDropdown.Item>
        </LinkContainer>

        <NavDropdown.Divider />

        <LinkContainer to="/fitness">
        <NavDropdown.Item style={{backgroundColor:'lightskyblue',color:'darkblue',fontWeight:'bold'}}>FITNESS</NavDropdown.Item>
        </LinkContainer>


        <NavDropdown.Divider />

        <LinkContainer to="/gymnastics">
        <NavDropdown.Item style={{backgroundColor:'lightskyblue',color:'darkblue',fontWeight:'bold'}}>GYMNASTICS</NavDropdown.Item>
        </LinkContainer>

      </NavDropdown>

      <LinkContainer to="/achieve">
      <Nav.Link >ACHIEVEMENTS</Nav.Link>
      </LinkContainer>

    </Nav>
    <Nav>
      
      <LinkContainer to="/events">
      <Nav.Link >ART AND EVENTS</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/contact">
        <Nav.Link>CONTACT US</Nav.Link>
      </LinkContainer>
     
    </Nav>

    <Nav>
    <ul className="navbar-nav ms-auto" style={{backgroundColor:'white',borderRadius:'5px',opacity:'0.7',alignItems:'center',padding:'0'}}>
    <li className="nav-item"  style={{display:'flex'}}>
    <a className="nav-link1" href="https://www.youtube.com/channel/UCK-ZmQNAws9G3Tsb9jD9Mwg" target="_blank" rel="noreferrer" style={{color:'red'}}><FontAwesomeIcon icon={faYoutube}/></a> 
          <a className="nav-link1" href="https://www.instagram.com/d1_dance_crew_nagpur/" target="_blank" rel="noreferrer"  style={{color:'purple'}}><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="nav-link1" href="https://www.facebook.com/D-ONE-DANCE-GROUP-202664833218291/" target="_blank" rel="noreferrer"  style={{color:'blue'}}><FontAwesomeIcon icon={faFacebook}/></a>
          <a className="nav-link1" href="tel:+919314920058"target="_blank" rel="noreferrer"  style={{color:'green'}} ><FontAwesomeIcon icon={faPhone} /></a>
          <a className="nav-link1" href='https://api.whatsapp.com/send?phone=919314920058' style={{color:'green'}}><FontAwesomeIcon icon={faWhatsapp} /></a> 
         
        </li>   
        </ul>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
{/* </div>
</div>
</div> */}
    </>
   
  )
}

export default Navbar1