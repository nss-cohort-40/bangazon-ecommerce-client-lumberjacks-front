import React from 'react'
import dataManager from '../../modules/dataManager'

const PayTypeCard = props => {

    const deletePayType = (id) => {
        return fetch(`http://localhost:8000/paymenttypes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(toggleToggle)
    }

    const toggleToggle = () => {
        props.toggle ? props.setToggle(false) : props.setToggle(true)
    }

    return (
        <li>
            <p>{props.paymentType.merchant_name} {props.paymentType.expiration_date}</p> 
            <button onClick={() => deletePayType(props.paymentType.id)}>Delete</button>
        </li>
    )
}

export default PayTypeCard