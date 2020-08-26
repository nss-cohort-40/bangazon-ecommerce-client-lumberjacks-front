import React, {useState, useEffect} from 'react'

const Profile = () => {
    
    const [currentUser, setCurrentUser] = useState({})

    const getCurrentUser = () => {
        return fetch('http://localhost:8000/customers', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            }
        }).then(response => response.json())
        .then(user => {
            console.log(user[0])
            const loggedInUser = {
                "id": user[0].id,
                "first_name": user[0].user.first_name,
                "last_name": user[0].user.last_name,
                "email": user[0].user.email,
                "address": user[0].address,
                "phone_number": user[0].phone_number
            }
            setCurrentUser(loggedInUser)
        })
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
        <section>
            <h1>Profile</h1>

            <p>First name: {currentUser.first_name}</p>
            <p>Last name: {currentUser.last_name}</p>
            <p>Address: {currentUser.address}</p>
            <p>Phone number: {currentUser.phone_number}</p>
            <p>Payment options:</p>
            <p>Order history:</p>
            <button>Add payment option</button>
        </section>
    )
}

export default Profile