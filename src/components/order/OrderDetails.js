import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'
import dataManager from '../../modules/dataManager'

import FormModal from '../modal/FormModal';
import PayTypeRadios from '../account/PayTypeRadios';

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [hasOrder, setHasOrder] = useState(false)
    const [hasCart, setHasCart] = useState(false)

    const getOrder = () => {
        setIsLoading(true)
        shoppingCart.currentOrder('orders')
        .then((order) => {
            if (order[0] == undefined){
                setHasOrder(false)
            }else{setOrder(order)
                setHasOrder(true)
                setIsLoading(false)}
                   
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
            if (cart == undefined){
            }
            if (cart.length == 0){
                setHasCart(false)
            }
            else{
            setCart(cart)
            setHasCart(true)
            setIsLoading(false)
        }
    })
        .catch((err) => console.error('There was an issue with getting all products:', err));
        shoppingCart.currentOrder()
        .then((order) => {
            setOrder(order);
        })
        .catch((err) => console.error('There was an issue with getting an order:', err));
    },[toggle]);

    const handleCompleteOrder = (payTypeId) => {
        const newOrder = {
            id: order[0].id,
            created_at: null,
            customer_id: order[0].customer_id,
            payment_type_id: payTypeId
        }
        dataManager.update('orders', newOrder).then(() => {
            props.history.push(`/orders/confirmation/${newOrder.id}`);
        })
          .catch((err) => console.error('There as an issue with getting all products:', err)); 
    }

    useEffect(() => {
        getOrder()
    }, [])


    return(
        <section>
        <div className="delete-order-container">
            {hasOrder && hasCart? <button className="delete-order" onClick = {()=>handleDelete(order[0].id)} disabled={isLoading}>Cancel Order</button>:<p></p>}
        </div>
        <div className="OrderDetail">
            <h1>Shopping Cart</h1>
            <div className="product-container">
            {hasOrder && hasCart? cart.map((singleProduct, i) => <OrderProductCard setToggle={setToggle} toggle={toggle} key={i+1} product={singleProduct}/>):<p>There's Nothing Here!!</p>}
        </div>
            {
                cart.length === 0 
                ? ('') 
                : (
                    <FormModal buttonLabel={"Complete Order"}>
                        <PayTypeRadios handleCompleteOrder={handleCompleteOrder} />
                    </FormModal>
                ) 
            }
        </div>     
        </section>
    )
}

export default OrderDetails;