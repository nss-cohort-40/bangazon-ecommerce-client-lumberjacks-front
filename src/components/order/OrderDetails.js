import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'

const OrderDetails = (props) => {
    const [order, setOrder] = useState([]);

    const getCart = () => {
        return shoppingCart('products/cart')
        .then((cart) => {
            setOrder(cart)
        })
        .catch((err) => console.error('There as an issue with getting all products:', err));
    }

    useEffect(() => {
        getCart();
        
    }, [])

    const makeOrder = order.map((singleProduct) => (
        <OrderProductCard order={order} key={singleProduct.id} product={singleProduct}/>
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