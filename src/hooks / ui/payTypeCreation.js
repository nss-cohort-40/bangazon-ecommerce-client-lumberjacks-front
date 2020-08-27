const payTypeCreation = newPayType => {
    return fetch("http://localhost:8000/paymenttypes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        },
        body: JSON.stringify(newPayType)
    })
}

export default payTypeCreation