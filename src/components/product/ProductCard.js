import React from 'react'

const ProductCard = props => {

    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={props.product.image} width={240} alt='thumbnail' />
                <h4>{props.product.title}</h4>
            </div>
        </div>
    )
}

export default ProductCard