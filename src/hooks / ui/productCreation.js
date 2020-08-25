const productCreation = newProduct => {
    return fetch("http://127.0.0.1:8000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        },
        body: JSON.stringify(newProduct)
    })
}

export default productCreation