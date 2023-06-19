import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/apiCalls'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log({email,password})
        login(dispatch,{email,password});
    }
  return (
    <div className='Login'>
        <h1>Login</h1>
        <input className='loginInput' type="text" name="" id="" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <input className='loginInput' type="password" name="" id="" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button className='inputButton' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
