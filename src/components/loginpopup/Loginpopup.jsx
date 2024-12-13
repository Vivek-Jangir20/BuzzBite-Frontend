import React, { useContext, useEffect, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'

const Loginpopup = ({setShowlogin}) => {

  const {url , setToken} = useContext(Storecontext)

    const[currState , setCurrState] = useState('Sign Up')
    const [data , setData] = useState({
      name : "",
      email : "",
      password : ""
    })

    const onhangeHandler = (event) => {
      const name = event.target.name 
      const value = event.target.value 
      setData(data => ({...data,[name] : value}))
    }

    // useEffect(() =>{
    //  console.log(data);
     
    // } , [data])

    const onLogin = async (event) =>{
     event.preventDefault()
     let newUrl = url
     if(currState === 'Login'){
      newUrl += "/api/user/login"
     }
     else{
      newUrl += "/api/user/register"
     }
     const response = await axios.post(newUrl , data)

     if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token" , response.data.token)
      console.log(response);
      
      setShowlogin(false)
     }
     else{
      alert(response.data.message)
     }

    }

  return (
    <>
    <div className='login-popup'>
      <div className="login-content">
        <div className="login-popup-image">
          <img src={assets.loginsideimage} alt="" />
        </div>
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==='Login'?<></>:
            <input type="text" name='name' onChange={onhangeHandler} value={data.name} placeholder='Your Name' required />}
            <input type="email" name='email' onChange={onhangeHandler} value={data.email} placeholder='Your Email' required />
            <input type="password" name='password' onChange={onhangeHandler} value={data.password} placeholder='Password' required />
        </div>
        <button type='submit'>{currState === "Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to terms of use & Privacy & Policies</p>
        </div>
        {currState==='Login'?
        <p>Create a new account? <span  onClick={()=> setCurrState('Sign up')}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=> setCurrState("Login")}>Login here</span></p>
        }
      </form>
      </div>
      </div>
      </>
  )
}

export default Loginpopup
