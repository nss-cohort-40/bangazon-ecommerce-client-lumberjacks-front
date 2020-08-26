import React, {useState, useEffect} from 'react'

const Profile = () => {
    
    const [user, setUser] = useState([])

    const getUser = () => {
        return fetch('http://localhost:8000/customers', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            }
        }).then(response => response.json())
        .then(user => {
            console.log(user)
            setUser(user)
        })
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <section>
            <h1>Profile</h1>

            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <p>Address: {user.address}</p>
            <p>Phone number: {user.phone_number}</p>
            <p>Payment options:</p>
            <p>Order history:</p>
            <button>Add payment option</button>
        </section>
    )
}

export default Profile