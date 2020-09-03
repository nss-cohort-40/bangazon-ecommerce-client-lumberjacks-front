import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dataManager from '../../modules/dataManager';

const OrderHistory = ({ location }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getUserOrderHistory = () => {
            const queryParams = location.search;
            dataManager.getAll(`orders${queryParams}`)
              .then((orders) => {
                  setOrders(orders);
                  console.log(orders);
              })
              .catch((err) => console.error('Could not get order history:', err));
        }
        getUserOrderHistory();
    }, []);

    return (
        <div className="OrderHistory text-center mt-3 col-6 m-auto">
            <h1>Customer Order History</h1>
            <ul className="mb-3 list-group">
                {
                    orders.map((singleOrder) => {
                        const orderHistoryLink = `/orders/history/${singleOrder.id}`;
                        return (
                            <li key={singleOrder.id} className="list-group-item">
                                <p className="p-0">{singleOrder.created_at}</p>
                                <Link to={orderHistoryLink}>Order #{singleOrder.id}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default OrderHistory;