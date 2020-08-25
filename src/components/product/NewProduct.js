import React, { useRef } from 'react'

const NewProduct = props => {
    const title = useRef()
    const price = useRef()
    const description = useRef()
    const quantity = useRef()
    const location = useRef()
    const image = useRef()
    const category = useRef()

    const newProduct = {
        "title": title.current.value,
        "customer": null
    }

    return (
        <>
            <main style={{ textAlign: "center" }}>
                <form className="form--newProduct" onSubmit="null"></form>
        </>
    )
}

export default NewProduct