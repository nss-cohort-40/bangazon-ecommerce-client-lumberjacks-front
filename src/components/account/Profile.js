import React, {useState, useEffect} from 'react'
import dataManager from '../../modules/dataManager'

const Profile = props => {
    
    const [user, setUser] = useState([])

    const getUser = () => {
        setUser(fetch('localhost:8000/customers', {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            }
        }))
    }

    useEffect(() => {
        getUser();
    })

    return null;
}

export default Profile