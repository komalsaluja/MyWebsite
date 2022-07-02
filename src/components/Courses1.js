import React from 'react'
import Card from './Card'
import "../App.css"
// import img23 from '../assets/img23.jpeg';
// import img24 from '../assets/img24.jpeg';
// import img26 from '../assets/img26.jpeg';
// import { Link } from 'react-router-dom'

function Courses1() {

  return (
    <>
    <div className='row'>
    <div class="col col-md-3">
           <Card heading="Basic Dance Course" course="Duration: 3 months" altImage="Basic Dance" text="What will you learn?" item1="Dance Foundation" item2="Fitness" item3="Mobility/Stretching" item4="Choreography" msgLink="https://api.whatsapp.com/send?text=Hello Sir, I would like to enquire about the Basic Dance Course&phone=919314920058" msgEnq="I would like to enquire about the Basic Dance Course" />
      </div>
      <div class="col col-md-3">
     
      <Card heading="Advance Dance Certification" course="Duration: 6 months" altImage="Advance Dance" text="What will you learn?" item1="Everything in Basic Course +" item2="Moves and Grooves" item3="Gymnastics/stunts" item4="Choreography" msgLink="https://api.whatsapp.com/send?text=Hello Sir, I would like to enquire about the Advance Dance Certification Course&phone=919314920058"/>
      </div>
      <div class="col col-md-3">
      
      <Card heading="Professional Dance Diploma" course="Duration: 12 months" text="What will you learn?" item1="Everything in Basic and Advance +" item2="Musicality" item3="Choreography" item4="Get a Diploma" msgLink="https://api.whatsapp.com/send?text=Hello Sir, I would like to enquire about the Professional Dance Diploma&phone=919314920058"/>
      </div>
    </div>
     
    </>
  )
}

export default Courses1