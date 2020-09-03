import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import dataManager from '../../modules/dataManager'



const ProductList = ({ history, location }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            if (location.search) {
                return dataManager.getAllProducts(`products${location.search}`)
                  .then((products) => {
                      if (products.length > 0) {
                        setProducts(products);
                      } else {
                          alert('No results');
                          history.push('/');
                      }
                  })
                  .catch((err) => console.error('There was an issue with getting products:', err));
            } else {
                return dataManager.getAllProducts('products')
                .then((products) => {
                    setProducts(products)
                })
                .catch((err) => console.error('There was an issue with getting all products:', err));
            }
        }
        getProducts();
    }, [location.search, history]);

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