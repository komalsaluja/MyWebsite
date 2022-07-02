import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Achieve from './Achieve'

export default class componentName extends Component {
    render() {
        return (
            <>
           <Link to='/achieve' > <div>

<h1 style={{fontSize:'2rem',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>OUR JOURNEY</h1>
                 <ul style={{display:'flex',margin:'10px',flexWrap:'wrap',width:'fit-content'}}>
    <button className='btn btn-info m-2 text-xl bg-orange-400'>  <li>Represented India in HipHop Unite (HipHop Unite qualifier)(Austria)</li></button>
    
    <button className='btn btn-info m-2 text-xl bg-lime-400'>  <li>Indian HipHop finalists</li></button>

    <button className='btn btn-info m-2 text-xl bg-emerald-400'>  <li>Indian Street Championship (Bronze Medal)</li></button>

    <button className='btn btn-info m-2 text-xl bg-orange-400'>  <li>Dancing Superstar Winner</li></button>

    <button className='btn btn-info m-2 text-xl bg-red-400'>  <li>Won more than 200 competitions</li></button>

    <button className='btn btn-info m-2 text-xl bg-yellow-400'>  <li>Best Choreography Award (3 Times) Nagpur</li></button>

    <button className='btn btn-info m-2 text-xl'><li>Zee Telugu Performers (3 Times) Nagpur</li></button>

    <button className='btn btn-info m-2 text-xl bg-rose-400'><li>...have won many state and national level competitions</li></button>
        
    </ul>
    </div>
    </Link>
            </>
        )
    }
}
