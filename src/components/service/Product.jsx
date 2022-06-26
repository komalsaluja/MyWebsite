import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/service/${product._id}`}>
            <Card.Img src={product.imgsrc}/>
        </Link>

      <Card.Body>
        <Link to={`/service/${product._id}`}>
         <Card.Title as="div">
           <strong>{product.title}</strong>
         </Card.Title>
        </Link>

        <Card.Text as="h3" style={{padding:'1rem 0'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, incidunt.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product