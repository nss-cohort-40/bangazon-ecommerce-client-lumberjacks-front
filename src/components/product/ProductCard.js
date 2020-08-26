import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = props => {
    const link = "/" + props.product.id
    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <img src={props.product.image} width={240} alt='thumbnail' />
                <h4>
                    <Link to={link}>
                        {props.product.title}
                    </Link>
                </h4>
            </div>
        </div>
    )
}

export default ProductCard