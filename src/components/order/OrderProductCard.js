import React from 'react'
import dataManager from '../../modules/dataManager'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const OrderProductCard = props => {
    const [productType, setProductType] = useState({})
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

    const handleDelete = () => {
        setIsLoading(true)
        dataManager.delete('orderproducts', props.order.id)
        setIsLoading(false)
        getProductType()
    }

    useEffect(() => {
        getProductType();
    }, [])

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={product.image} width={240} alt='thumbnail' />
                <h4>{product.title}</h4>
                <p>${parseInt(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/unit</p>
                <p>Category: <Link to={categoryLink}>{productType.name}</Link></p>
                <button className="delete-product-order" onClick = {handleDelete} disabled={isLoading}>Delete</button>
            </div>
        </div>
    )
}

export default OrderProductCard