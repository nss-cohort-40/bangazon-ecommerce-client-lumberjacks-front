import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'
import './ProductDetail.css'

const ProductDetail = props => {
    
    const [product, setProduct] = useState({})
    const [userId, setUserId] = useState(0)

    const getProduct = () => {
        dataManager.get("products", props.productId)
        .then(response => {
            setProduct(response)
        })
    }
    
    const getUserId = () => {
        
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
                <button >Add to Cart</button> | ${product.price}
            </div>
        </div>
        </>
    )
}

export default ProductDetail