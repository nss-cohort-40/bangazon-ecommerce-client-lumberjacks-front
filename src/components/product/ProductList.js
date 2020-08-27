import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import dataManager from '../../modules/dataManager'



const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return dataManager.getAll('products')
          .then((products) => {
              setProducts(products)
          })
          .catch((err) => console.error('There as an issue with getting all products:', err));
    }

    useEffect(() => {
        // const { searchArr } = props;
        // console.log(searchArr);
        getProducts();
    }, [])

    const makeProducts = products.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct} />
    ));

    return (
        <div className="ProductList">
            <h1>Items In Stock:</h1>
            <div className="product-container">
                {makeProducts}
            </div>
        </div>
    )
}

export default ProductList;