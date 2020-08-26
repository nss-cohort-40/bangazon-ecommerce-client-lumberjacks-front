import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'
import CategoryDeck from './CategoryDeck'

const ProductCategories = props => {

    const [categories, setCategories] = useState([])
    const [singleCategory, setSingleCategory] = useState({})

    const getCategories = () => {
        const { isSingle } = props;
        if (isSingle) {
            const { product_type_id } = props.match.params;
            return dataManager.get('producttypes', product_type_id)
              .then((category) => {
                  setSingleCategory(category)
              })
              .catch((err) => console.error('There was an issue getting a single product types:', err))
        } else {
            return dataManager.getAll('producttypes')
            .then(categoryArr => {
                setCategories(categoryArr)
            })
        }
    }

    useEffect(() => {
        getCategories();
    }, [])
    const { isSingle } = props;
    return (
        <section className='list-view'>
            <div className='category-decks'>
                { 
                    isSingle 
                    ? (
                        <CategoryDeck 
                            key={singleCategory.id}
                            category={singleCategory}
                            {...props}
                            isSingle={isSingle}
                        />
                    )
                    : (
                        categories.map(mappedCategory =>
                        <CategoryDeck 
                            key={mappedCategory.id}
                            category={mappedCategory}
                            {...props}
                            isSingle={isSingle}
                        />)
                    )
                }
            </div>
        </section>
    )
}

export default ProductCategories