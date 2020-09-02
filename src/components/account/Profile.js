import React, {useState, useEffect} from 'react'

const Profile = props => {
    
    const [currentUser, setCurrentUser] = useState({})
    const [paymentTypes, setPaymentTypes] = useState([])

    const getCurrentUser = () => {
        return fetch('http://localhost:8000/customers', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            }
        }).then(response => response.json())
        .then(user => {
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

    const getPaymentTypes = () => {
        return fetch('http://localhost:8000/paymenttypes', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            }
        }).then(response => response.json())
        .then(payTypeArr => setPaymentTypes(payTypeArr))
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    useEffect(() => {
        getPaymentTypes();
    }, [])

    return (
        <section>
            <h1>Profile</h1>

            <p>First name: {currentUser.first_name}</p>
            <p>Last name: {currentUser.last_name}</p>
            <p>Address: {currentUser.address}</p>
            <p>Phone number: {currentUser.phone_number}</p>

            <h3>Payment Types:</h3>
            <ul>
                {paymentTypes.map(mappedPayType => {
                    return <li key={mappedPayType.id}>{mappedPayType.merchant_name} {mappedPayType.expiration_date}</li>
                })}
            </ul>

            <button onClick={() => props.history.push('/add-payment')}>Add payment option</button>
            <button>Edit account</button>
        </section>
    )
}

export default Profile