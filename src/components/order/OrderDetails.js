import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);

    const getCart = () => {
        return shoppingCart.shoppingCart('products/cart')
        .then((cart) => {
            setCart(cart)
        })
        .catch((err) => console.error('There as an issue with getting all products:', err));
    }
    

    useEffect(() => {
        getCart();
        
    }, [])

    const makeOrder = cart.map((singleProduct) => (
        <OrderProductCard key={singleProduct.id} product={singleProduct}/>
    ));

    return(
        <div className="OrderDetail">
            <h1>Shopping Cart</h1>
            <div className="product-container">
                {makeOrder}
            </div>
        </div>
    )
}

export default OrderDetails;