import React, { useEffect, useState} from 'react'
import ProductCard from './ProductCard'

// http://localhost:8000/products?myproducts=true

const MyProducts = props => {
    const [products, setProducts] = useState([])
    const [toggle, setToggle] = useState(false)


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
    }, [toggle])

    return (
        <div className='product-container'>
            {products.map(product => <div  key={product.id}><ProductCard toggle = {toggle} setToggle = {setToggle} sold={product.location.split("$$$")[1]} product={product} {...props} /> <p className = 'my-products'>Current Inventory: {product.quantity - product.location.split("$$$")[1]} </p> <p className = 'my-products'>Number Sold: {product.location.split("$$$")[1]}</p>
            </div>)}
        </div>
    )
}

export default MyProducts