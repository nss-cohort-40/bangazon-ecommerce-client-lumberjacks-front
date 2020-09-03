import React, {useState, useEffect} from 'react'
import {createPortal} from 'react-dom'
import EditProfileForm from './EditProfileForm'
import PayTypeCard from './PayTypeCard'

const Profile = props => {
    
    const [currentUser, setCurrentUser] = useState({})
    const [paymentTypes, setPaymentTypes] = useState([])
    const [showEditProfileForm, setShowEditProfileForm] = useState(false)
    const [toggle, setToggle] = useState(false)

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
                "firstName": user[0].user.first_name,
                "lastName": user[0].user.last_name,
                "email": user[0].user.email,
                "address": user[0].address,
                "phoneNumber": user[0].phone_number
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

    const toggleEditProfileForm = () => {
        showEditProfileForm ? setShowEditProfileForm(false) : setShowEditProfileForm(true)
    }

    const modalDiv = document.getElementById('modal');

    const deletePayType = (id) => {
        return fetch(`http://localhost:8000/paymenttypes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(props.getPaymentTypes)
    }

    useEffect(() => {
        getCurrentUser();
    }, [toggle])

    useEffect(() => {
        getPaymentTypes();
    }, [toggle])

    return (
        <section>
            <h1>Profile</h1>

            <p>First name: {currentUser.firstName}</p>
            <p>Last name: {currentUser.lastName}</p>
            <p>Address: {currentUser.address}</p>
            <p>Phone number: {currentUser.phoneNumber}</p>

            <h3>Payment Types:</h3>
            <ul>
                {paymentTypes.map(mappedPayType => {
                    return <PayTypeCard 
                            key={mappedPayType.id}
                            paymentType={mappedPayType}
                            toggle={toggle}
                            setToggle={setToggle}
                            />
                })}
            </ul>

            <h3>Order History:</h3>

            <button onClick={() => props.history.push('/add-payment')}>Add payment option</button>
            <button onClick={toggleEditProfileForm}>Edit account</button>

            {showEditProfileForm
                ? createPortal(<EditProfileForm 
                                getCurrentUser={getCurrentUser} 
                                toggleEditProfileForm={toggleEditProfileForm}
                                toggle={toggle}
                                setToggle={setToggle}
                                />, modalDiv)
                : null
            }

        </section>
        
    )
}

export default Profile