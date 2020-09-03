import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import dataManager from '../../modules/dataManager';

const OrderHistoryDetail = ({ match }) => {
    const [order, setOrder] = useState({});
    // const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const getSingleOrder = () => {
            const { orderId } = match.params
            dataManager.get('orders', orderId)
              .then((order) => {
                  setOrder(order);
                  console.log(order.products);
              })
              .catch((err) => console.error('There was an issue getting this order:', err));
        }
        getSingleOrder();
    }, []);

    const getOrderTotal = () => {
        let thisOrderTotal = 0;
        order.products.forEach((product) => {
            const productPrice = parseInt(product.price);
            thisOrderTotal += productPrice;
            return thisOrderTotal
        })
    }

return (
    <div className="OrderHistoryCard">
        <h1>Order #{order.id}</h1>
        <h2>Total Cost: ${getOrderTotal()}</h2>
    </div>
)
};

export default OrderHistoryDetail;