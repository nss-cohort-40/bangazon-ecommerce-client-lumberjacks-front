import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'
import './ProductDetail.css'
import useSimpleAuth from "../../hooks / ui/useSimpleAuth"

const ProductDetail = props => {

    const { isAuthenticated, logout } = useSimpleAuth()
    
    const [product, setProduct] = useState({})

    const getProduct = () => {
        dataManager.get("products", props.productId)
        .then(response => {
            setProduct(response)
        })
    }

    const addToCart = () => {
        const itemToAdd = {
            'product_id': product.id
        }

        dataManager.post("orders", itemToAdd )
            .then(() => props.history.push("/products/cart"))
    }




    useEffect(() => {
        getProduct()
    },[])

    return(
        <>
            <div className="details_page">
                <div className="picture">
                    <img className="product-picture"  src={product.image}/>
                </div>
                <div className="information">
                    <h1>{product.title}</h1>
                        <h3>{product.quantity} in stock</h3>
                    <p>{product.description}</p>
                    {isAuthenticated()
                    ? <button onClick={() => {addToCart()}}>Add to Cart</button>
                    : null}
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail