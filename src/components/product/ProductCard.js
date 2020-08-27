import React from 'react'
import dataManager from '../../modules/dataManager'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const ProductCard = props => {
    const [productType, setProductType] = useState({})
    const { product } = props;
    const categoryLink = `/producttypes/${product.product_type_id}`
    const detailsLink = `/products/${product.id}`

    const getProductType = () => {
        return dataManager.get('producttypes', product.product_type_id)
          .then((productType) => {
              setProductType(productType);
          })
          .catch((err) => console.error('There was an issue getting a product type:', err));
    }

    useEffect(() => {
        getProductType();
    }, [])

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={product.image} width={240} alt='thumbnail' />
                <h4>
                    <Link to={detailsLink}>
                        {props.product.title}
                    </Link>
                </h4>
                <p>${parseInt(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}/unit</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: <Link to={categoryLink}>{productType.name}</Link></p>
            </div>
        </div>
    )
}

export default ProductCard