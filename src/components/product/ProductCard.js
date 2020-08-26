import React from 'react'
import dataManager from '../../modules/dataManager'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const ProductCard = props => {
    const [productType, setProductType] = useState({})
    const { product } = props;
    const categoryLink = `/producttypes/${product.product_type_id}`

    const getProductType = () => {
        return dataManager.get('producttypes', product.product_type_id)
          .then((productType) => {
              setProductType(productType);
          })
          .catch((err) => console.error('There was an issue getting a product type:', err));
    }

    useEffect(() => {
        getProductType();
    }, {})

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={product.image} width={240} alt='thumbnail' />
                <h4>{product.title}</h4>
                <p>Category: <Link to={categoryLink}>{productType.name}</Link></p>
            </div>
        </div>
    )
}

export default ProductCard