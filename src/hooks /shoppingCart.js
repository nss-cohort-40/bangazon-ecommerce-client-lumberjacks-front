const shoppingCart = cart => {
    return fetch("http://127.0.0.1:8000/products/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        }
    }).then(response => response.json())
}

export default shoppingCart