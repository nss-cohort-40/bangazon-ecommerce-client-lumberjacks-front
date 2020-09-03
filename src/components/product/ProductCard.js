import React from 'react'
import dataManager from '../../modules/dataManager'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const ProductCard = props => {
    const [productType, setProductType] = useState({})
    const [isLoading, setIsLoading] = useState({})
    const { product } = props;
    const categoryLink = `/producttypes/${product.product_type_id}`
    const detailsLink = `/products/${product.id}`

    const getProductType = () => {
        setIsLoading(true)
        return dataManager.get('producttypes', product.product_type_id)
          .then((productType) => {
              setProductType(productType);
              setIsLoading(false)
          })
          .catch((err) => console.error('There was an issue getting a product type:', err));
    }

    const handleDelete = (id) => {
        setIsLoading(true)
        dataManager.delete('products', id)
        .then(() => {
        props.setToggle(!props.toggle)
        setIsLoading(false)})
    }

    useEffect(() => {
        getProductType();
    }, [])

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={product.image} height={200} width={240} alt='thumbnail' />
                <h4>
                    <Link to={detailsLink}>
                        {props.product.title}
                    </Link>
                </h4>
                <p>${parseInt(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/unit</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: <Link to={categoryLink}>{productType.name}</Link></p>
                {props.sold==0?<div className='delete-my-product-container'><button className='delete-my-product' onClick={()=>handleDelete(props.product.id)} disabled={isLoading}>Delete</button></div>:null}
            </div>
        </div>
    )
}

export default ProductCard