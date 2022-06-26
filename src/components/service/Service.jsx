import React from 'react'
import Sdata from '../Sdata'
import './service.css'
import { Row,Col } from 'react-bootstrap'
import Product from './Product'


const Service = () => {
  return (
    <>
  
      <h1 className='text-center' style={{color:'white'}}>Our Services</h1>
   <Row>   
   {
          Sdata.map(product => (
            <Col key={product._id}>
              <Product product={product} />
            </Col>
          ))}
   </Row>
   
      
       

      


    
     
       
   
  
    </>
  )
}

export default Service