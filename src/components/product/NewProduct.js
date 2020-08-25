import React, { useRef } from 'react'
import productCreation from "../../hooks / ui/productCreation"

const NewProduct = props => {
    const title = useRef()
    const description = useRef()
    const price = useRef()
    const quantity = useRef()
    const location = useRef()
    const image = useRef()
    const category = useRef()

    const handleNewProduct = e => {
        e.preventDefault()

        const submitDate = new Date()
        let dateYear = submitDate.getFullYear().toString()
        let dateMonth = submitDate.getMonth().toString()
        let dateDay = submitDate.getDay().toString()

        const currentDate = dateYear + "-" + dateMonth + "-" + dateDay


        const newProduct = {
            "title": title.current.value,
            "customer_id": 1,
            "price": price.current.value,
            "description": description.current.value,
            "quantity": quantity.current.value,
            "location": location.current.value,
            "image": image.current.value,
            "created_at": currentDate,
            "product_type_id": category.current.value
        }

        productCreation(newProduct)
    }

    return (
        <>
            <main style={{ textAlign: "center" }}>

                <form className="form--login" onSubmit={handleNewProduct} >
                    <h1 className="h3 mb-3 font-weight-normal">What would you like to sell?</h1>

                    <fieldset> 
                        <label htmlFor="title"> Product Title </label>
                        <input ref={title} type="text"
                            name="title"
                            maxLength="50"
                            className="form-control"
                            placeholder="Product Title"
                            required autoFocus />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="description"> Product Description </label>
                        <input ref={description} type="textarea"
                            name="description"
                            maxLength="255"
                            className="form-control"
                            placeholder="Product Description"
                            required/>
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
                        <label htmlFor="image"> Link to Image </label>
                        <input ref={image} type="text"
                            name="image"
                            maxLength="255"
                            className="form-control"
                            placeholder="Image Link"
                            required/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="category"> Product Category </label>
                        <select ref={category} type="dropdown"
                            name="description"
                            className="form-control"
                            required>
                                <option value="1">Guns</option>
                                <option value="2">Electronics</option>
                                <option value="3">Housewares</option>
                                <option value="4">Toys</option>
                                <option value="5">Tools</option>
                            </select>
                    </fieldset>

                    <fieldset>
                        <button type="submit">
                            Sell Product
                        </button>
                    </fieldset>

                </form>
            </main>
        </>
    )
}

export default NewProduct