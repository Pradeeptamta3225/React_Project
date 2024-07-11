import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {


    const handleSubmit = () => {

    }
    return (
        <div>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
