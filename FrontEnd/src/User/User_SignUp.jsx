import React, { useState } from 'react'

const User_SignUp = () => {
    const [uName, setName] = useState('')
    const [UEmail, setEmail] = useState('')
    const [uPassword, setPassword] = useState('')
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        fetch("http://localhost:5000/api/user/signUp",{
            method : 'POST',
            body: JSON.stringify({
                name : uName,
                email : UEmail,
                passowrd : uPassword
            }),
            headers : 'content-type : application/json ; charset = UTF-8'
        })
        .then((response) => {response.json()})
        .catch((err) => {console.log(err.message)})
    }

  return (
    <div>
        <form>
            <label>Name </label>
            <input type='text' value={uName} placeholder='Enter Name' onChange={(e) => {handleNameChange(e)}} required/>
            <label>Email </label>
            <input type='text' value={UEmail} placeholder='Enter Email' onChange={(e) => {handleEmailChange(e)}} required/>
            <label>Password </label>    
            <input type='text' value={uPassword} placeholder='Enter Password' onChange={(e) => {handlePasswordChange(e)}} required/>
            <button type='submit' onClick={ (e) => {handleSubmit(e)}}>Submit</button>
        </form>
    </div>
  )
}

export default User_SignUp