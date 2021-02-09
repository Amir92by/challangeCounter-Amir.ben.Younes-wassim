import React from 'react'
import { Card,Button } from "react-bootstrap";

const Product = ({product,handleClick}) => {
    return (
        <Card style={{ width: '18rem' , display:'flex'  }} >
                <Card.Img variant="top" src={product.srcImg} />
                <Card.Body>
                <Card.Title>{product.fullName}</Card.Title>
                <Card.Text>{product.bio}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={()=> handleClick(product.fullName,product.price)}>contact me</Button>
                </Card.Body>
         </Card>
    )
}

export default Product
