import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "./contact.css"
import axios from "axios"

// const Contact = () => {

//   const [data, setData] = useState({
//     fullname:'',
//     phone:'',
//     email:'',
//     msg:'',
//   });

//   const InputEvent = (event) => {
//     const {name,value} = event.target;

//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name] : value,
//       };
//     });

//   }

//   const formSubmit = (e) => {
//         e.preventDefault();
//         alert(`Name = ${data.fullname} ; Mobile Number = ${data.phone} ; Email ID = ${data.email} ; Message = ${data.msg}`);
//   };
//   return (
//     <>
//     <div className='my-5'>
//       <h1 className="text-center text-3xl" style={{color:"whitesmoke"}}>
//       ENQUIRY FORM
//         </h1>
//         </div>

//         <div className="container contact_div">
//           <div className="row">
//             <div className = "col-md-6 col-10 mx-auto">
//               <form onSubmit={formSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="exampleFormControlInput1" className="form-label">
//                   FullName
//                   </label>
//                   <input type="text" 
//                   className="form-control"
//                   id="exampleFormControlInput1" 
//                   name="fullname"
//                   value={data.fullname}
//                   onChange={InputEvent}
//                   placeholder="Enter your Name"/>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="exampleFormControlInput1" className="form-label">
//                   Phone Number
//                   </label>
//                   <input type="number" 
//                   className="form-control"
//                   id="exampleFormControlInput1" 
//                   name="phone"
//                   value={data.phone}
//                   onChange={InputEvent}
//                   placeholder="Mobile Number"/>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="exampleFormControlInput1" className="form-label">
//                   Email address
//                   </label>
//                   <input type="email" 
//                   className="form-control"
//                   id="exampleFormControlInput1" 
//                   name="email"
//                   value={data.email}
//                   onChange={InputEvent}
//                   placeholder="name@example.com"/>
//               </div>

//               <div className="mb-3">
//               <label htmlFor="exampleFormControlTextarea1" className="form-label">Message...</label>
//                 <textarea
//                  className="form-control" 
//                  id="exampleFormControlTextarea1" 
//                  rows="3"
//                  name="msg"
//                  value={data.msg}
//                  onChange={InputEvent}></textarea>
//               </div>

//               <ul className="flex col-12">
//                 <li>
//                 <button className="btn btn-warning" type="submit" style={{color:'white'}}><b>SUBMIT</b></button>
//                 </li>

//                 <li>
//             <Link to="/" className="text-slate-200 hover:text-white">
//               &larr; Back
//             </Link>
//           </li>
//              </ul>
//               </form>
//             </div>
//           </div>
//         </div>
//         </>
//   )
// }

// export default Contact



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


