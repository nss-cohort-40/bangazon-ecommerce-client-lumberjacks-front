import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'
import CategoryDeck from './CategoryDeck'

const ProductCategories = props => {

    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return dataManager.getAll('producttypes')
        .then(categoryArr => {
            setCategories(categoryArr)
        })
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <section className='list-view'>
            <div className='category-decks'>
                {categories.map(mappedCategory =>
                <CategoryDeck 
                    key={mappedCategory.id}
                    category={mappedCategory}
                    {...props}
                />
                )}
            </div>
        </section>
    )
}

export default ProductCategories