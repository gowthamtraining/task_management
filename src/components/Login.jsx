import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Login = () => {   
  return (
    <div className="headers">
        <Navbar/>
    <div className="loginPage">
         <form action="">
        <div>Email: <input type="email" name="" id="" /></div> 
         <div>Password: <input type="password" name="" id="" /></div>
        <button>submit</button>
    </form>
        </div>
    </div>
    
  )
}

export default Login
