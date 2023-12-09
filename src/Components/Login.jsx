import React, { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const {setUser} =useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username,password)
        setUser(username,password)
    }

  return (
    <>
    <h1>Login</h1>
    <input type="text" 
    placeholder="Username" 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}/>
    <input type='password' placeholder="Password"
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}/>
    <button
    onClick={handlesubmit}
    >Submit</button>
    </>
  )
}

export default Login