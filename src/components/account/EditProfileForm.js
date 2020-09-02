import React, {useState, useEffect} from 'react';

const EditProfileForm = props => {

    const lastName = useRef()
    const address = useRef()
    const phoneNumber = useRef()

    return (
        <article className='modal'>
            <form className='form-content'>
    
                <h3 className='form-title'>Edit profile</h3>
    
                <div className='form-element'>
                    <label htmlFor='lastName'>Last name: </label>
                    <input value={props.currentUser.lastName} type='text' id='lastName'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='address'>Address: </label>
                    <input value={props.currentUser.address} type='text' id='address'/>
                </div>

                <div className='form-element'>
                    <label htmlFor='phoneNumber'>Phone number: </label>
                    <input value={props.currentUser.phoneNumber} type='tel' id='phoneNumber'/>
                </div>
    
                <div className='form-buttons'>
                    <button type='submit' id='editCategory'>Edit</button>
                    <button id='cancel' onClick={props.toggleEditProfileForm}>Cancel</button>
                </div>
            
            </form>
        </article>
    )
}

export default EditProfileForm