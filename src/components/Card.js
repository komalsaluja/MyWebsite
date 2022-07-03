import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
   <>
    <div className="card1" style={{width:'100%',border:'2px solid black', borderRadius: '10%',fontWeight: 'bold',display:'flexbox'}}>
  
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
    </ul>

   <div className='flex' style={{width:'100%',flexWrap:'wrap'}}>
     <div style={{alignContent:'center'}}> <Link to="/contact"><button  style={{
        borderRadius: 35,
        backgroundColor: "gold",
        marginTop:'10px',
        padding: "10px 10px",
        fontSize: "18px",
        color:'darkblue'
        
    }}>Enquire</button></Link></div> 
   <div>
   <center><a className="nav-link" href={props.msgLink} style={{color:'green',fontSize:'30px',paddingLeft:'10px', marginTop:'10px',}}><FontAwesomeIcon icon={faWhatsapp} /></a></center>
   </div>

   <div>
   <center><a className="nav-link p-0" href='tel:+919021152302'  style={{color:'darkblue',fontSize:'25px',paddingLeft:'10px', marginTop:'15px',}}><FontAwesomeIcon icon={faPhone} /></a></center>
   </div>



   

   </div>

  
</div>
   </>
  )
}

export default Card