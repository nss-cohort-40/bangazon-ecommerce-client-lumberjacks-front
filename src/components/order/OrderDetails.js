import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        shoppingCart.shoppingCart('products/cart')
        .then((cart) => {
            setCart(cart)
            setIsLoading(false)
        })   
        .catch((err) => console.error('There as an issue with getting all products:', err));
        
        
    },[toggle]);


    return(
        <div className="OrderDetail">
            <h1>Shopping Cart</h1>
            <div className="product-container">
            {cart.map((singleProduct, i) => <OrderProductCard setToggle={setToggle} toggle={toggle} key={i+1} product={singleProduct}/>)}
            </div>
        </div>
    )
}

export default OrderDetails;