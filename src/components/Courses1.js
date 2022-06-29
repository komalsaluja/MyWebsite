import React from 'react'
import Card from './Card'
import "../App.css"
// import img23 from '../assets/img23.jpeg';
// import img24 from '../assets/img24.jpeg';
// import img26 from '../assets/img26.jpeg';
import { Link } from 'react-router-dom'

function Courses1() {

  return (
    <>
    <div className='row'>
    <div class="col col-md-3">
      <center style={{color:"gold",fontSize:"30px"}}><b>Basic Course<br/>Beginner</b></center>
      <Card course="Duration: 3 months" altImage="Basic Dance" text="What will you learn?" item1="Dance Foundation" item2="Fitness" item3="Mobility/Stretching" item4="Choreography" />
      <Link to="/contact"><button  style={{
        borderRadius: 35,
        backgroundColor: "gold",
        padding: "10px 10px",
        fontSize: "18px"
    }}
   >Enquire</button></Link>
      </div>
      <div class="col col-md-3">
      <center style={{color:"gold",fontSize:"30px"}}><b>Advance Level<br/>Certification Course</b></center>
      <Card course="Duration: 6 months" altImage="Advance Dance" text="What will you learn?" item1="Everything in Basic Course +" item2="Moves and Grooves" item3="Gymnastics/stunts" item4="Choreography"/>
      <Link to="/contact"><button  style={{
        borderRadius: 35,
        backgroundColor: "gold",
        padding: "10px 10px",
        fontSize: "18px"
    }}
   >Enquire</button></Link>
      </div>
      <div class="col col-md-3">
      <center style={{color:"gold",fontSize:"30px"}}><b>Professional Dance<br/>Diploma</b></center>
      <Card course="Duration: 12 months" text="What will you learn?" item1="Everything in Basic and Advance +" item2="Musicality" item3="Choreography" item4="Get a Diploma"/>
      <Link to="/contact"><button  style={{
        borderRadius: 35,
        backgroundColor: "gold",
        padding: "10px 10px",
        fontSize: "18px"
    }}
   >Enquire</button></Link>
      </div>
    </div>
     
    </>
  )
}

export default Courses1