import React, {useRef, useState, useEffect} from 'react'
import payTypeCreation from "../../hooks / ui/payTypeCreation"

const PayTypeForm = props => {
    const merchantName = useRef()
    const accountNumber = useRef()
    const expirationDate = useRef()
    const [date, setDate] = useState("")

    const handleAddPayType = (event) => {
        event.preventDefault()

        const newPayType = {
            "merchantName": merchantName.current.value,
            "accountNumber": accountNumber.current.value,
            "expirationDate": expirationDate.current.value
        }

        payTypeCreation(newPayType)
        props.history.push('/profile')

    }

    const getDate = () => {
        let today = new Date()
        let month = today.getMonth() + 1
        month = month.toString().length === 1 ? `0${month}` : month
        let day = today.getDate()
        day = day.toString().length === 1 ? `0${day}` : day
        setDate(`${today.getFullYear()}-${month}-${day}`)
    }

    useEffect(() => {
        getDate()
    }, [])

    return (
        <article className='form'>
            <form className='form-content' onSubmit={handleAddPayType}>
                <h3 className='form-title'>Add Payment Type</h3>
                <hr />
    
                <fieldset className='form-element'>
                    <label htmlFor='merchantName'>Merchant name</label>
                    <input ref={merchantName} type='text' id='merchantName' required autoFocus/>
                </fieldset>
                
                <fieldset className='form-element'>
                    <label htmlFor='accountNumber'>Account number</label>
                    <input ref={accountNumber} type='number' id='accountNumber' required />
                </fieldset>

                <fieldset className='form-element'>
                    <label htmlFor='expirationDate'>Expiration date</label>
                    <input ref={expirationDate} type='date' id='expirationDate' min={date} required />
                </fieldset>

                <fieldset className='form-button'>
                    <button type='submit'>Submit</button>
                </fieldset>

            </form>
        </article>
    )

}

export default PayTypeForm