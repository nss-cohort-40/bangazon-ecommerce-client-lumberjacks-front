import React from 'react'
import ProductCard from './ProductCard'

const CategoryDeck = props => {

    return(
        <section className='category-deck'>
            <div className='category-title-container'>
                <h3 className='category-title'>{props.category.name}</h3>
            </div>
            <hr />
            <div className='product-list'>
                <ProductCard />
            </div>
        </section>
    )
}

export default CategoryDeck