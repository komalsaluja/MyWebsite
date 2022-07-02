import React, { useEffect, useState } from 'react'
import axios from "axios"

function Contact1() {

    const [ user  , setUser] = useState([])

    useEffect(()=>{
        async function getAllUserdata(){
            try {
               const user = await axios.get("http://127.0.0.1:8000/demoapp/userdata/")
                console.log(user.data);
                setUser(user.data)
            } catch(error) {
                console.log(error);
            }
        }
        getAllUserdata()
    },[])

  return (
    <>
<h1 style={{color:'white',fontSize:'50px'}}>Connect ReactJS to Django</h1>
{
    user.map((user,i)=>{
        return (
            <h2 key={i} style={{color:'white'}}>{user.name} {user.email} {user.phno} {user.msg}</h2>
        )
    })
}
    </>
  );
}

export default Contact1;