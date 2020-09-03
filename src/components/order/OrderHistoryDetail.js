import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import dataManager from '../../modules/dataManager';

const OrderHistoryDetail = ({ match }) => {
    const [order, setOrder] = useState({});
    const [totalCost, setTotalCost] = useState(0);

    const getSingleOrder = () => {
        const { orderId } = match.params
        dataManager.get('orders', orderId)
          .then((order) => {
              setOrder(order);
              console.log(order.products);
          })
          .catch((err) => console.error('There was an issue getting this order:', err));
    }
    const getOrderTotal = () => {
        let thisOrderTotal = 0;
        if (order.products) {
            order.products.forEach((product) => {
                const productPrice = parseInt(product.price);
                thisOrderTotal += productPrice;
            })
            setTotalCost(thisOrderTotal);
        }
    }

    useEffect(() => {
        getSingleOrder();
    }, []);

    useEffect(() => {
        getOrderTotal();
    }, [order]);

return (
    <div className="OrderHistoryCard text-center">
        <h1>Order #{order.id}</h1>
        <h2>Total Cost: ${totalCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
        <ul className="list-group col-4 m-auto">
            {
                order.products ? 
                order.products.map((x) => (
                    <li key={x.id} className="list-group-item">
                        <p>{x.title}</p>
                        <p>$ {parseInt(x.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    </li>
                )) : ''
            }
        </ul>
    </div>
)
};

export default OrderHistoryDetail;