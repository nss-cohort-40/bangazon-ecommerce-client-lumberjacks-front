import React from 'react'
import dataManager from '../../modules/dataManager'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import shoppingCart from "../../hooks /shoppingCart"

const OrderProductCard = props => {
    const [productType, setProductType] = useState({})
    const [productOrder, setProductOrder] = useState({})
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { product } = props;
    const categoryLink = `/producttypes/${product.product_type_id}`

    const getProductType = () => {
        return dataManager.get('producttypes', product.product_type_id)
          .then((productType) => {
              setProductType(productType);
          })
          .catch((err) => console.error('There was an issue getting a product type:', err));
    }
    const getOrder = () => {
        return shoppingCart.currentOrder()
        .then((order) => {
            setOrder(order)
        })
        .catch((err) => console.error('There as an issue with getting all products:', err));
    }

    const handleDelete = () => {
        const orderID = order[0].id
        console.log(order)
        shoppingCart.getOrderProduct(orderID)
        .then((currentOrderProduct) => {
            currentOrderProduct.map(singleorder=>{
                // console.log(singleorder.order_id)
                setProductOrder("")
                if(singleorder.order_id == orderID)
                    {setProductOrder(singleorder.order_id)}

                    console.log(productOrder)
            })
        })


        // console.log(productOrder)
        setIsLoading(true)
        dataManager.delete('orderproducts', productOrder.id)
        setIsLoading(false)
        getProductType()
    }

    useEffect(() => {
        getProductType();
        getOrder();
    }, [])

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={product.image} width={240} alt='thumbnail' />
                <h4>{product.title}</h4>
                <p>${parseInt(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/unit</p>
                <p>Category: <Link to={categoryLink}>{productType.name}</Link></p>
                <button className="delete-product-order" onClick = {()=>handleDelete()} disabled={isLoading}>Delete</button>
            </div>
        </div>
    )
}

export default OrderProductCard