import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'

const ProductDetail = props => {
    
    const [product, setProduct] = useState({})
    const getProduct = () => {
        console.log(props.productId)
        dataManager.get("products", props.productId)
        .then(response => {
            setProduct(response)
            console.table(response)
        })
    }
    




    useEffect(() => {
        getProduct()
    },[])

    return(
        <>
            <img src={product.image}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    )
}

export default ProductDetail