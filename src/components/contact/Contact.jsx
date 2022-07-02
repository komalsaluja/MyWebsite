import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "./contact.css"
import axios from "axios"

const Contact = () => {

  //form states

  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');  
  const [msg,setMsg] = useState('');

  //submit event

  const handleSubmit=(e)=> {
    e.preventDefault();
    // console.log(name,email,phone,msg);
    const data = {
      Name:name,
      Email:email,
      Phone:phone,
      Message:msg
    }
    axios.post('https://sheet.best/api/sheets/ad605958-1076-419c-a1b8-340159702e5b',data).then((response)=> {
      // console.log(response);
      //clearing form fields
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
    
  })
  }


  return (
    <div>
      <div className="container2">
        <form className='form-group' onSubmit={handleSubmit}>
          <h3>GET IN TOUCH</h3>
          <input type="text" placeholder="Your Name" id="name" required
          onChange={(e)=>setName(e.target.value)} value={name} />



          <input type="email" placeholder="Email ID" id="email" required 
          onChange={(e)=>setEmail(e.target.value)} value={email}/>

<input type="number" placeholder="Phone no." id="phone" required
          onChange={(e)=>setPhone(e.target.value)} value={phone} />

         

          <textarea rows="4" placeholder="How can we help you" id="message" required 
           onChange={(e)=>setMsg(e.target.value)} value={msg} />


          <button type='submit'>Send</button>
        </form>
      </div>
      
      {

      }
    </div>
  )
}

export default Contact


