import React, { useState } from 'react'

const SignUp = () => {
    const [adName, setAdName] = useState('')
    const [adEmail, setAdEmail] = useState('')
    const [adPassword, setAdPassword] = useState('')

    const handleNameChange = (e) => {
        setAdName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setAdEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setAdPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/api/admin/signUp', {
            method : 'POST',
            body : JSON.stringify({
                name : adName,
                email : adEmail,
                password : adPassword
            }),
            headers : {'Content-type' : 'application/json ; charset = UTF-8'}
        })
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input type='text' value={adName} placeholder='Enter Your Name' onChange={(e) => handleNameChange(e)} required />

                <label>Email</label>
                <input type='text' value={adEmail} placeholder='Enter Your Email' onChange={(e) => handleEmailChange(e)} required />

                <label>Password</label>
                <input type='text' value={adPassword} placeholder='Set Your Password' onChange={(e) => handlePasswordChange(e)} required />

                <button type='submit' onClick={(e) => { handleSubmit(e) }}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp