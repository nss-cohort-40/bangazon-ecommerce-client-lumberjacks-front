export default {
shoppingCart() {
    return fetch("http://127.0.0.1:8000/products/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        }
    }).then(response => response.json())
},
getOrderProduct(order_id) {
    return fetch(`http://127.0.0.1:8000/orderproducts?order_id=${order_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        },
    }).then(response => response.json())
},
currentOrder() {
    return fetch("http://127.0.0.1:8000/orders", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        }
    }).then(response => response.json())
}
}
