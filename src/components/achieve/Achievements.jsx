import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class componentName extends Component {
    render() {
        return (
            <div>

<h1 style={{fontSize:'2rem',textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>OUR JOURNEY</h1>
                 <ul style={{display:'flex',margin:'10px',flexWrap:'wrap',width:'fit-content'}}>
    <button className='btn btn-info m-2 text-xl bg-orange-400' onClick={document.getElementById('second')}>  <li><Link to="gallery" spy={true} smooth={true}>Represented India in HipHop Unite (HipHop Unite qualifier)(Austria)</Link></li></button>
    
    <button className='btn btn-info m-2 text-xl bg-lime-400' onClick={document.getElementById('second')}>  <li><Link to="indianhiphop" spy={true} smooth={true}>Indian HipHop finalists</Link></li></button>

    <button className='btn btn-info m-2 text-xl bg-emerald-400' onClick={document.getElementById('second')}>  <li><Link to="street" spy={true} smooth={true}>Indian Street Championship (Bronze Medal)</Link></li></button>

    <button className='btn btn-info m-2 text-xl bg-orange-400' onClick={document.getElementById('second')}>  <li><Link to="dss" spy={true} smooth={true}>Dancing Superstar Winner</Link></li></button>

    <button className='btn btn-info m-2 text-xl bg-red-400' onClick={document.getElementById('second')}>  <li><Link to="winner" spy={true} smooth={true}>Won more than 200 competitions</Link></li></button>

    <button className='btn btn-info m-2 text-xl bg-yellow-400' onClick={document.getElementById('second')}>  <li><Link to="image12" spy={true} smooth={true}>Best Choreography Award (3 Times) Nagpur</Link></li></button>

    <button className='btn btn-info m-2 text-xl ' onClick={document.getElementById('second')}>  <li><Link to="telugu" spy={true} smooth={true}>Zee Telugu Performers (3 Times) Nagpur</Link></li></button>

    <button className='btn btn-info m-2 text-xl bg-rose-400'><li><Link to="image8" spy={true} smooth={true}>...have won many state and national level competitions</Link></li></button>
        
    </ul>
            </div>
        )
    }
}
