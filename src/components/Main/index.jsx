import React from 'react'
import Product from '../Product'

const Main = (props) => {
    const {products, onAdd} = props
    return (
        <main>
            <h2>Products</h2>
            <div className="products">
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </div>

        </main>
    )
}

export default Main
