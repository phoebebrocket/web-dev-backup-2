import React from 'react'
import Button from '../Button'



const Basket = (props) => {
    const {cartItems, onAdd, onRemove} = props

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const shippingPrice = 2.99
    const totalPrice = itemsPrice + shippingPrice

    

    return (
        <aside>
            <h2>Basket</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>
                        </div>
                        <div>
                            {item.qty} x £{item.price}
                        </div>
                    </div>
                ))}
            </div>

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div>
                        <div>Items Price</div>
                        <div>£{itemsPrice}</div>
                    </div>
                    <div>
                        <div>Shipping Price</div>
                        <div>£{shippingPrice}</div>
                    </div>
                    <div>
                        <div>Total Price</div>
                        <div>£{totalPrice}</div>
                    </div>
                    <Button type="submit" name="Checkout" onClick={() => alert('Order complete')}/>
                </>
            )}
        </aside>
    )
}

export default Basket
