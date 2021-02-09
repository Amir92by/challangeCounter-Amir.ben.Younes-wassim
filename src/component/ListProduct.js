import React from 'react'
import Product from "./Product";
import PropTypes from 'prop-types';

const ListProducts = ({products}) => {

    const handleClick =(fullName,price)=>{alert(`to show ${fullName} is actor , you need to buy ${price}  `)}
    
    return (
        <div style={{display:'flex', margin:'20px', justifyContent:'center' }}>
            {products.map((product,i) =>(
               <Product
               product ={product}
               key={i}
               handleClick={handleClick}

               />
               
            ))}
        </div>
    )
}

export default ListProducts

ListProducts.propTypes ={
    products: PropTypes.arrayOf(Object)
}

