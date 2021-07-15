import React from 'react'
import Button from '../Button'
import homecookies from '../../assets/homecookies.png'



const Product = (props) => {
   const {product, onAdd} = props

    return (
        <div>
            <img className="small" src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>
                £{product.price}
            </div>
            <div>
                <Button 
                    name="Add to cart"
                   onClick={() => onAdd(product)}
                />
            </div>
        </div>

        
    )
}

export default Product
