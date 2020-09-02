import React, { useState, useEffect } from 'react';
import dataManager from '../../modules/dataManager';

const OrderConfirmation = props => {
    const [order, setOrder] = useState({})

    useEffect(() => {
        const getOrder = () => {
            const { orderId } = props.match.params;
            dataManager.get('orders', orderId)
              .then((order) => {
                setOrder(order);
              })
              .catch((err) => console.error('There was an issue getting this order:', err));
        }
        getOrder();
    }, []);

    return (
        <div className="OrderConfirmation">
            <h1>Order #{order.id} Has Been Submitted!</h1>
        </div>
    )
}

export default OrderConfirmation;