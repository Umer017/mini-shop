import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../ContextProvider'

const Logout = () => {
    const{setLoginToFalse} = useContext(CartContext)
    localStorage.removeItem("UserName")
    localStorage.removeItem("UserId")
    setLoginToFalse();
    
  return (
    <div>
    <h1>See You Soon !!!</h1>
    <div><Link to='/'>CLICK HERE TO CONTINUE BROWSING</Link></div>
    </div>
  )
}

export default Logout

