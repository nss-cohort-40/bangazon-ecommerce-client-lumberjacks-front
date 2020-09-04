import React, { useRef, useState, useEffect } from 'react'
import productCreation from "../../hooks / ui/productCreation"
import dataManager from '../../modules/dataManager';

import ProductTypeDropdown from './ProductTypeDropdown';

const NewProduct = props => {
    const [productTypes, setProductTypes] = useState([])
    const [selectedProductTypeId, setSelectedProductTypeId] = useState(0)
    const [image, setImage] = useState('')

    let imageURL = ''

    const getProductTypes = () => {
        return dataManager.getAll('producttypes')
          .then((productTypes) => {
              setProductTypes(productTypes);
          })
          .catch((err) => console.error('There was an issue getting all product types:', err));
    }

    const selectedProductTypeIdChange = e => {
        const productTypeId = e.target.value;
        setSelectedProductTypeId(parseInt(productTypeId))
    }

    const checkSpecialCharacters = e => {
        let hasSpecialCharacters = RegExp("[!@#$%^&*()]+", "g").test(e.target.value)
        if (e.target.name === 'title') {
            setTitle(e.target.value)
            setTitleIsGood(hasSpecialCharacters)
        } else {
            setDescription(e.target.value)
            setDescriptionIsGood(hasSpecialCharacters)
        }
    }

    useEffect(() => {
        getProductTypes()
    }, [])

    const [title, setTitle] = useState("")
    const [titleIsGood, setTitleIsGood] = useState(false)
    const [description, setDescription] = useState("")
    const [descriptionIsGood, setDescriptionIsGood] = useState(false)
    const price = useRef()
    const quantity = useRef()
    const location = useRef()

    const handleNewProduct = e => {
        e.preventDefault()

        if (quantity.current.value && location.current.value && price.current.value && imageURL != '') {

            const submitDate = new Date()
            let dateYear = submitDate.getFullYear().toString()
            let dateMonth = submitDate.getMonth().toString()
            let dateDay = submitDate.getDay().toString()

            const currentDate = dateYear + "-" + dateMonth + "-" + dateDay

            const newProduct = {
                "title": title,
                "price": price.current.value,
                "description": description,
                "quantity": quantity.current.value,
                "location": location.current.value,
                "image": imageURL,
                "created_at": currentDate,
                "product_type_id": selectedProductTypeId
            }

            productCreation(newProduct)
            .then((response) => {
                props.history.push('/')
            })
            .catch((err) => console.error('There was an issue with adding a new product:', err));
        } else {
            window.alert('Please complete all fields')
        }
    }

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {
             imageURL = resultEvent.info.secure_url
             console.log(imageURL)
        }
    }

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "drofsvn2g",
        uploadPreset: "wo00wdco" },
        (error, result) => { 
            checkUploadResult(result) })

    const showWidget = () => {
        widget.open()
    }

    return (
        <>
            <main style={{ textAlign: "center" }}>

                <form className="form--login" >
                    <h1 className="h3 mb-3 font-weight-normal">What would you like to sell?</h1>

                    <fieldset> 
                        <label htmlFor="title"> Product Title </label>
                        <input onKeyUp={checkSpecialCharacters} type="text"
                            name="title"
                            maxLength="50"
                            className="form-control"
                            placeholder="Product Title"
                            required autoFocus />
                        { !titleIsGood ? null : <p>Title can't have special characters</p>}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="description"> Product Description </label>
                        <input onKeyUp={checkSpecialCharacters} type="textarea"
                            name="description"
                            maxLength="255"
                            className="form-control"
                            placeholder="Product Description"
                            required/>
                        { !descriptionIsGood ? null : <p>Description can't have special characters</p>}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="price"> Product Price </label>
                        <input ref={price} type="number"
                            name="price"
                            min="1"
                            max="10000"
                            step="any"
                            className="form-control"
                            required/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="quantity"> Product Quantity </label>
                        <input ref={quantity} type="number"
                            name="quantity"
                            min="1"
                            className="form-control"
                            required/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="location"> Product Location </label>
                        <input ref={location} type="text"
                            name="location"
                            maxLength="75"
                            className="form-control"
                            placeholder="City, State"
                            required/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="category"> Product Category </label>
                        <ProductTypeDropdown 
                            productTypes={productTypes}
                            selectedProductTypeIdChange={selectedProductTypeIdChange}
                            selectedProductTypeId={selectedProductTypeId}
                        />
                    </fieldset>

                    <button type="button" onClick={showWidget}>Upload photo</button>

                    <fieldset>
                        <button type="button" onClick={handleNewProduct} disabled={selectedProductTypeId === 0 || titleIsGood || descriptionIsGood}>
                            Sell Product
                        </button>
                    </fieldset>


                </form>
            </main>
        </>
    )
}

export default NewProduct