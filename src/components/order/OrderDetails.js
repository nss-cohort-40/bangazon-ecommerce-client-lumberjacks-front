import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'

import FormModal from '../modal/FormModal';
import PayTypeRadios from '../account/PayTypeRadios';
import dataManager from '../../modules/dataManager';

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        shoppingCart.shoppingCart('products/cart')
        .then((cart) => {
            setCart(cart)
            setIsLoading(false)
        }).then(() => {
            dataManager.getAll('orders').then((order) => {
                setOrder(order);
                console.log('Right when component mounts:', order);
            })
        })
        .catch((err) => console.error('There as an issue with getting all products:', err));
        
        
    },[toggle]);

    const handleCompleteOrder = (payTypeId) => {
        const stateOrder = order;
        const newOrder = {
            id: stateOrder.id,
            created_at: null,
            customer_id: stateOrder.customer_id,
            payment_type_id: payTypeId
        }
        console.log('Updated order:', newOrder);
        dataManager.update('orders', newOrder).then((res) => {
            console.log(res);
            props.history.push('/');
        })
    }


    return(
        <div className="OrderDetail">
            <h1>Shopping Cart</h1>
            <div className="product-container">
            {cart.map((singleProduct, i) => <OrderProductCard setToggle={setToggle} toggle={toggle} key={i+1} product={singleProduct}/>)}
            </div>
            <FormModal buttonLabel={"Complete Order"}>
                <PayTypeRadios handleCompleteOrder={handleCompleteOrder} />
            </FormModal>
        </div>
    )
}

export default OrderDetails;