import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Card(props) {
  return (
   <>
    <div className="card" style={{width: '20rem',border:'2px solid black'}}>
  
  <div className="card-body">
  <h1 className="card-title" style={{fontSize:'20px',textAlign:'center',color:'darkblue'}}>{props.heading}</h1>
  
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.course}</li>
    <li className="list-group-item">{props.text}</li>
    <li className="list-group-item">{props.item1}</li>
    <li className="list-group-item">{props.item2}</li>
    <li className="list-group-item">{props.item3}</li>
    <li className="list-group-item">{props.item4}</li>

   <div className='flex' style={{flexWrap:'wrap'}}>
     <div className="list-group-item" style={{alignContent:'center'}}> <Link to="/contact"><button  style={{
        borderRadius: 35,
        backgroundColor: "gold",
        padding: "10px 10px",
        fontSize: "18px",
        color:'darkblue'
        
    }}
   >Enquire</button></Link></div> 
   <div>
   <a className="nav-link" href={props.msgLink} style={{color:'green',fontSize:'30px',paddingLeft:'60px'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
   </div>

   </div>

  </ul>
  {/* <div className="card-body">
  </div> */}
</div>
   </>
  )
}

export default Card