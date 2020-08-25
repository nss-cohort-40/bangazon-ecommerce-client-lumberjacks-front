import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'

const CategoryDeck = props => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        const urls = props.category.products.splice(-3, 3)

        return Promise.all(urls.map(mappedUrl => fetch(mappedUrl)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(productArr => {
                setProducts(productArr.reverse())
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return(
        <section className='category-deck'>
            <div className='category-title-container'>
                <h2 className='category-title'>{props.category.name}</h2>
            </div>
            <hr />
            <div className='product-list'>
                {products.map(mappedProduct =>
                    <ProductCard
                        key={mappedProduct.id} 
                        product={mappedProduct}
                    />
                )}
            </div>
        </section>
    )
}

export default CategoryDeck