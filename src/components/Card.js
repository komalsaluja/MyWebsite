import React from 'react'
import "../App.css"

function Card(props) {
  return (
   <>
    <div className="card" style={{width: '20rem',border:'2px solid black'}}>
  
  <div className="card-body">
    <h5 className="card-title">{props.course}</h5>
    <p className="card-text">{props.text}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{props.item1}</li>
    <li className="list-group-item">{props.item2}</li>
    <li className="list-group-item">{props.item3}</li>
    <li className="list-group-item">{props.item4}</li>
    {/* <img src={props.imageurl} className="card-img-top" alt={props.altImage} style={{height:"300px"}}/> */}
  </ul>
  <div className="card-body">
  </div>
</div>
   </>
  )
}

export default Card