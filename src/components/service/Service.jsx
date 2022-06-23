import React from 'react'
import Sdata from '../Sdata'
import Card from './Card'
import './service.css'

const Service = () => {
  return (
    <>
    <div className='back'>
        <div className='back my-5' >
      <h1 className='text-center' style={{color:'white'}}>Our Services</h1>
    </div>
    <div className='container-fluid mb-5' >
    <div className='row'>
      <div className='col-10 mx-auto'>
        <div className='row gy-4'>

      

        {
          Sdata.map((val,index)=> {
            return <Card key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            />
          })
        }

        </div>
        </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Service