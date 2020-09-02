import React, { useState, useEffect } from 'react';
import OrderProductCard from '../order/OrderProductCard'
import shoppingCart from '../../hooks /shoppingCart'

import FormModal from '../modal/FormModal';
import PayTypeRadios from '../account/PayTypeRadios';

const OrderDetails = (props) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        shoppingCart.shoppingCart('products/cart')
        .then((cart) => {
            setCart(cart)
            setIsLoading(false)
        })   
        .catch((err) => console.error('There as an issue with getting all products:', err));
        
        
    },[toggle]);

    const handleCompleteOrder = (payTypeId) => {
        console.log(`Order being paid with payment: ${payTypeId}`);
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