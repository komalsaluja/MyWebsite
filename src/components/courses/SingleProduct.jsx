import React, { useState, useEffect } from "react"
import data from "./db.json"
import { Link, useParams } from "react-router-dom"
// import Cart from "./Cart"
// import CartContext from "../../context/context"
import Courses1 from "../Courses1"

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { name } = useParams()


  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  const renderElement= ()=>{ 
    if(singleProduct.name === 'DANCE')
       return <Courses1/>;
    return null;
 }
 

  return (
    <>
      <section className="xl:max-w-6xl xl:mx-auto py-10 lg:py-20 p-5">

      <h1 className="text-4xl lg:mb-10 font-bold md:text-5xl lg:text-6xl" style={{textAlign:'center',color:'white',textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}}>
          {name}
        </h1>
        {/* <ul className="my-0 p-9 " style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
         <Link to="/contact"> <li className="ml-5"><button className="btn btn-warning p-2 text-xl">{singleProduct.basic}</button></li> </Link>
         <Link to="/contact"> <li className="ml-5"><button className="btn btn-warning p-2 text-xl">{singleProduct.advance}</button></li> </Link>

         <Link to="/contact"> <li className="ml-5"><button className="btn btn-warning p-2 text-xl">{singleProduct.professional}</button></li> </Link>

        </ul> */}
       
        <p className="text-slate-100 my-1 mb-0 text-2xl" style={{color:'white'}}>{singleProduct.desc}</p>


        <div className="p-0 ml-0">
        { renderElement() }
        </div>
        <div className='flex my-3' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        

        <img className="m-3" src={singleProduct.image} width="300rem" alt="" />
        <img className="m-3" src={singleProduct.image1} width="300rem" alt="" />
        <img className="m-3" src={singleProduct.image2} width="300rem" alt="" />
       
        
        <p className="text-slate-100 m-2 text-2xl" style={{color:'gold'}}>{singleProduct.desc2}</p>
        </div>


       
       

        <ul className="flex items-center mt-10">
          <li className="mr-5">
            <Link to="/contact">
            <button
              className="bg-white text-slate-800 py-2 px-4"
            >
              ENQUIRE
            </button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-slate-200 hover:text-white">
              &larr; Back
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}