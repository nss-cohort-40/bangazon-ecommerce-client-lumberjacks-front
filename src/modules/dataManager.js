const remoteURL = 'http://localhost:8000'

export default {

    getAll (collection) {
        return fetch(`${remoteURL}/${collection}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
                .then(response => response.json())
    },

    get (collection, id) {
        return fetch(`${remoteURL}/${collection}/${id}`)
                .then(response => response.json())
    },
    
    post (collection, newObject) {
        return fetch(`${remoteURL}/${collection}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    },

    delete (collection, id) {
        return fetch(`${remoteURL}/${collection}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
    },
    deleteProductOrder (collection, id) {
        return fetch(`${remoteURL}/${collection}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify({product_id: id})
        })
    },
    
    update (collection, editedObject) {
        return fetch(`${remoteURL}/${collection}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            body: JSON.stringify(editedObject)
        })
    },

    getByProperty (collection, key, value) {
        return fetch(`${remoteURL}/${collection}?${key}=${value}`)
                .then(response => response.json())
    },

    getWithEmbed(collection1, id, collection2) {
        return fetch(`${remoteURL}/${collection1}/${id}?_embed=${collection2}`)
                    .then(response => response.json())
    },

    getWithExpand(collection1, id, collection2) {
        return fetch(`${remoteURL}/${collection1}/${id}?_expand=${collection2}`)
                    .then(response => response.json())
    },
}