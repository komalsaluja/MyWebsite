import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            D1 DANCE CREW
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">OUR JOURNEY</a></li>
            <li><a className="dropdown-item" href="/">ACHIEVEMENTS</a></li>
            <li><a className="dropdown-item" href="/">CREW MEMBERS</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown m-lg-auto">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            D1 ACADEMY
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">DANCE</a></li>
            <li><a className="dropdown-item" href="/">EVENTS</a></li>
            <li><a className="dropdown-item" href="/">ART</a></li>
           
          </ul>
        </li>
       
      </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'50%'}}>
      <ul className="navbar-nav me-auto mb-5 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">FOLLOW</a>
        </li>
     </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
