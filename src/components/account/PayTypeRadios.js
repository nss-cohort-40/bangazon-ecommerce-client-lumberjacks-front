import React, { useState, useEffect } from 'react';
import dataManager from '../../modules/dataManager';

const PayTypeRadios = ({handleCompleteOrder}) => {
    const [statePaymentTypes, setStatePaymentTypes] = useState([]);
    const [selectedPayTypeId, setSelectedPayTypeId] = useState(0);
    useEffect(() => {
        const getPaymentTypes = () => {
            return dataManager.getAll('paymenttypes')
              .then((paymentTypes) => {
                  setStatePaymentTypes(paymentTypes);
              }).then(console.log(statePaymentTypes))
              .catch((err) => console.error('There was an error getting the payment types for this user:', err));
        }
        getPaymentTypes();
    }, [])

    const payTypeSelectionChange = (e) => {
        setSelectedPayTypeId(parseInt(e.target.value));
    }

    return (
        <div className="PayTypeRadios mx-auto">
            {
                statePaymentTypes.map((singlePayType) => (
                    <div key={singlePayType.id} className="form-check">
                        <input className="form-check-input" type="radio" name="payTypeRadios" id={singlePayType.id} value={singlePayType.id} checked={selectedPayTypeId === singlePayType.id} onChange={payTypeSelectionChange} />
                        <label className="form-check-label" htmlFor={singlePayType.id}>
                            <p>{singlePayType.merchant_name}</p>
                            <p>{singlePayType.account_number}</p> 
                            <p>Expiration Date: {singlePayType.expiration_date}</p>
                        </label>
                    </div>
                ))
            }
            <button className="btn btn-dark m-3" type="button" onClick={() => handleCompleteOrder(selectedPayTypeId)}>Done</button>
        </div>
    )
}

export default PayTypeRadios;