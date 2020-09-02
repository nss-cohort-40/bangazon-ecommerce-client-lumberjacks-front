import React, { useEffect, useState} from 'react'
import ProductCard from './ProductCard'

// http://localhost:8000/products?myproducts=true

const MyProducts = props => {
    const [products, setProducts] = useState([])


    const getProducts = () => {
        fetch(`http://localhost:8000/products?myproducts=true`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        }).then(response => response.json())
        .then(new_products => {
            setProducts(new_products)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='product-container'>
            {products.map(product => <div sold={product.location.split("$$$")[1]} key={product.id}><ProductCard product={product} {...props} /> <p>Current Inventory: {product.quantity - product.location.split("$$$")[1]} </p> <p>Number Sold: {product.location.split("$$$")[1]}</p>
            </div>)}
        </div>
    )
}

export default MyProducts