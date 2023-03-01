import React, { useContext, useEffect, useState } from 'react'
import '../Register/Register.css'
import { UserFetcherById } from '../../../fetcher'
import { CartContext } from '../../../ContextProvider'

const Checkout = () => {
    // UserId: { type: Number, required: true },
    // OrderId: { type: Number, required: true },
    // OrderItemName: { type: String, required: true },
    // OderItemPrice: { type: String, required: true },
    // ShippingAddress: { type: String, required: true },
    // City: { type: String, required: true },
    // State: { type: String, required: true },
    // ContactNumber: { type: String, required: true },
    // Status: { type: String, required: true }

    const [name,setUsername] = useState("")
    const [ContactNumber,setContact] = useState("")
    const [ShippingAddress,setShippingAddress] = useState("")
    const [City,setCity] = useState("")
    const [State,setState] = useState("")
    const [Pincode,setPincode] = useState("")
    const [userDetails,setUserDetails] = useState({}); 

    const {items} = useContext(CartContext)

    useEffect(() =>{
        const fetchUser = async () => {
            const UserDetails = await UserFetcherById(localStorage.getItem("UserId"))
            setUserDetails(UserDetails) 
        }
        fetchUser()
    },[])

    console.log(items)
    console.log(userDetails)
    const HandleSubmit = (e) =>{
        e.preventDefault();
        for(let i = 0 ;i<items.lenght;i++){
            return
        }

    }
    
  return (
    <div>
        <h1 className='reg-form-title'>Checkout</h1>
        <form className='myform' onSubmit={HandleSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" value={name} id='name' onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor='ContactNumber'>ContactNumber</label>
            <input type="text" value={ContactNumber} id='ContactNumber' onChange={(e) => setContact(e.target.value)}/>

            <label htmlFor='ShippingAddress'>Shipping Address</label>
            <input type="text" value={ShippingAddress} id='ShippingAddress' onChange={(e) => setShippingAddress(e.target.value)}/> 

            <label htmlFor='City'>City</label>
            <input type="text" id='City' onChange={(e) => setCity(e.target.value)}/> 

            <label htmlFor='State'>State</label>
            <input type="text" id='State' onChange={(e) => setState(e.target.value)}/> 

            <label htmlFor='pincode'>Pincode</label>
            <input type="text" id='pincode' onChange={(e) => setPincode(e.target.value)}/> 

            <input type="submit" className='form-btn' value="submit"/>
        </form>
    </div>
  )
}

export default Checkout