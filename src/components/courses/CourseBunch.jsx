import React from 'react'
import { useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
import CourseCard from './CourseCard'
import data from "./db.json"


const CourseBunch = () => {
    const [items] = useState(data);
  return (
    <>
    <h1>COURSES AND SERVICES</h1>
    
<ul style={{display:'flex',margin:'5px',flexWrap:'wrap'}}>
{items.products.map(({ id, name, desc, small, large }) => (
    <li>
    <CourseCard name={name} desc={desc} id={id}/>
    </li>
    ))}
</ul>
    

      
    </>
  )
}

export default CourseBunch
