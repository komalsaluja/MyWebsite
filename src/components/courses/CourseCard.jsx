import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './coursecard.css'
import data from "./db.json"
import { Link } from "react-router-dom"



function CourseCard(props) {

const[isOpen,setIsOpen]=useState(false);


  return (
    <div className='App1'>
      <motion.div
       transition={{layout:{type:"just"}}} 
       layout 
       onClick={()=>setIsOpen(!isOpen)} 
       className='card'
       style={{borderRadius:'1rem',boxShadow:'0px 10px 30px rgba(0,0,0,0.5)'}}
       >
        <motion.h2 layout="position" style={{fontWeight:'bolder'}}>{props.name}</motion.h2>
        
        {isOpen && (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        // transition={{duration:1}}
        className='expand'>
          <p>
           {props.desc}
          </p>
          <button className='btn btn-warning'>CLICK TO KNOW MORE</button>
        </motion.div>
        )}
       
      </motion.div>
      
    </div>
  )
}

export default CourseCard
