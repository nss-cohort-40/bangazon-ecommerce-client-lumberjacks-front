import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'
import dataManager from '../../modules/dataManager'

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)

    const getOrder = () => {
        setIsLoading(true)
        shoppingCart.currentOrder('orders')
        .then((order) => {
            setOrder(order[0].id)
            setIsLoading(false)        
        })
    }
    const handleDelete = (id) => {
        setIsLoading(true)
        dataManager.delete('orders', id)
        .then(() => {setIsLoading(false)
        props.history.push('/products')})
    }
    useEffect(() => {
        setIsLoading(true)
        shoppingCart.shoppingCart('products/cart')
        .then((cart) => {
            setCart(cart)
            setIsLoading(false)
        
        })   
        .catch((err) => console.error('There as an issue with getting all products:', err));  
    },[toggle]);

    useEffect(() => {
        getOrder()
    },[])


    return(
        <div className="OrderDetail">
            <h1>Shopping Cart</h1>
            <div className="product-container">
            {cart.map((singleProduct, i) => <OrderProductCard setToggle={setToggle} toggle={toggle} key={i+1} product={singleProduct}/>)}
            </div>
            <button className="delete-order" onClick = {()=>handleDelete(order)} disabled={isLoading}>Delete</button>
        </div>
    )
}

export default OrderDetails;