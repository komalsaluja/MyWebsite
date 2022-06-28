import React from 'react'
import { useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
import CourseCard from './CourseCard'
import data from "./db.json"


const CourseBunch = () => {
    const [items] = useState(data);
  return (
    <>
    <h1 style={{fontSize:'2rem',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>COURSES AND SERVICES</h1>
   <center>
<ul style={{ display:'flex',margin:'5px',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
{items.products.map(({ id, name, desc, image }) => (
    <li>
    <CourseCard name={name} desc={desc} id={id} image={image} />
    </li>
    ))}
</ul>
</center> 
    

      
    </>
  )
}

export default CourseBunch
