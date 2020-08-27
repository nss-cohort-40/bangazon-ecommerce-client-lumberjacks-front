import React, { useState, useEffect } from 'react';
import ProductCard from '../product/ProductCard';
import dataManager from '../../modules/dataManager'

const OrderDetails = (props) => {
    const [order, setOrder] = useState([]);

    const getCart = () => {
        return dataManager.getCart('products/cart')
        .then((cart) => {
            setOrder(cart)
        })
        .catch((err) => console.error('There as an issue with getting all products:', err));
    }

    useEffect(() => {
        getCart();
    }, [])

    const makeOrder = order.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct}/>
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