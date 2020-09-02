import React, { useState, useEffect, useRef } from 'react';
import dataManager from '../../modules/dataManager';

const EditProfileForm = props => {

    const lastName = useRef()
    const address = useRef()
    const phoneNumber = useRef()

    useEffect(() => {
        props.getCurrentUser()
    })

    const handleEditAccount = event => {
        event.preventDefault();

        const editedUser = {...props.currentUser}
        editedUser["lastname"] = lastName.current.value
        editedUser["address"] = address.current.value
        editedUser["phoneNumber"] = phoneNumber.current.value

        dataManager.update('customer', editedUser)
        .then(() => {
            
        })

    }

    return (
        <article className='modal'>
            <form className='form-content'>
    
                <h3 className='form-title'>Edit profile</h3>
    
                <div className='form-element'>
                    <label htmlFor='lastName'>Last name: </label>
                    <input ref={lastName} value={props.currentUser.lastName} type='text' id='lastName'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='address'>Address: </label>
                    <input ref={address} value={props.currentUser.address} type='text' id='address'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='phoneNumber'>Phone number: </label>
                    <input ref={phoneNumber} value={props.currentUser.phoneNumber} type='tel' id='phoneNumber'/>
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