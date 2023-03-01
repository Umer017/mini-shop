import React, { useState } from 'react'
import { UserFetcherByEId } from '../../../fetcher';
import './Register.css'

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [IsExist, setIsExist] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userDetails = {
      UserId: Math.round(Math.random() * (10000 - 1) + 1),
      UserName: userName,
      UserEmail: userEmail,
      UserPassword: userPassword,
      UserContact: userContact,
      UserAddress: userAddress
    }
    console.log(userDetails)

    try {
      let response1 = await UserFetcherByEId(userEmail)
      console.log(response1.status)

      if (response1.status === 404) {
        try {
          setIsExist(false)
          let response = await fetch('/api/User', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
              'Content-type': 'application/json'
            }
          })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      } else {
        setIsExist(true)
      }
    } catch (err) {
      console.log(err)
    }

    console.log(IsExist)
  }
  console.log(IsExist)

  return (
    <>
      <div>
        <h1 className='reg-form-title'>Register Yourself</h1>
        <form className='myform' onSubmit={onSubmitHandler}>

          <label htmlFor='username'>UserName</label>
          <input id='username' type="text" placeholder='UserName' onChange={(e) => setUserName(e.target.value)}></input>

          <label htmlFor='email'>UserEmail</label>
          <input id='email' type="text" placeholder='Email Address' onChange={(e) => setUserEmail(e.target.value)}></input>

          <label htmlFor='password'>UserPassword</label>
          <input id='password' type="password" placeholder='Choose Your Password' onChange={(e) => setUserPassword(e.target.value)}></input>

          <label htmlFor='usercontact'>UserContact</label>
          <input id='usercontact' type="text" placeholder='Contact Number' onChange={(e) => setUserContact(e.target.value)}></input>

          <label htmlFor='useraddress'>UserAddress</label>
          <input id='useraddress' type="text" placeholder='Residental Address' onChange={(e) => setUserAddress(e.target.value)}></input>

          <input type="submit" className='form-btn'></input>
        </form>
        {IsExist && <div className='alert alert-warning'>The User is Already Exist !!</div>}
      </div>
    </>
  )
}

export default Register
