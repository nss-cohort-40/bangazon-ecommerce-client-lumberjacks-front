import React, { useState, useEffect } from 'react';
import dataManager from '../../modules/dataManager';

const EditProfileForm = props => {

    const [currentUser, setCurrentUser] = useState({ "id": 0, "firstName": "", "lastName": "", "email": "", "address": "", "phoneNumber": 0})

    const toggleToggle = () => {
        props.toggle ? props.setToggle(false) : props.setToggle(true)
    }

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

    const handleFieldChange = event => {
        const stateToChange = {...currentUser}
        stateToChange[event.target.id] = event.target.value
        setCurrentUser(stateToChange)
    }

    const handleEditAccount = event => {
        event.preventDefault();

        const editedUser = {...currentUser}
        editedUser["lastname"] = currentUser.lastName
        editedUser["address"] = currentUser.address
        editedUser["phoneNumber"] = currentUser.phoneNumber

        dataManager.update('customers', editedUser)
        .then(() => {
            toggleToggle()
            props.toggleEditProfileForm()
        })

    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <article className='modal'>
            <form className='form-content'>
    
                <h3 className='form-title'>Edit profile</h3>
    
                <div className='form-element'>
                    <label htmlFor='lastName'>Last name: </label>
                    <input value={currentUser.lastName} onChange={handleFieldChange} type='text' id='lastName'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='address'>Address: </label>
                    <input value={currentUser.address} onChange={handleFieldChange} type='text' id='address'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='phoneNumber'>Phone number: </label>
                    <input value={currentUser.phoneNumber} onChange={handleFieldChange} type='tel' id='phoneNumber'/>
                </div>
    
                <div className='form-buttons'>
                    <button type='submit' id='editCategory' onClick={handleEditAccount}>Edit</button>
                    <button id='cancel' onClick={props.toggleEditProfileForm}>Cancel</button>
                </div>
            
            </form>
        </article>
    )
}

export default EditProfileForm