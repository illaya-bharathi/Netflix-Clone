import React, { useState } from 'react'
import './Login.css'
import logo from "../../assets/logo.jpg"
import { login,signup } from '../../firebase'
import loading_gif from "../loadingGif/loading.gif"

const Login = () => {

  const [signState, setSignState] = useState('Sign In')
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[loading,setLoading] = useState(false)

  const user_auth =async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(signState==='Sign In'){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)
  }



  return (
    loading ? <div className="login-spinner">
      <img src={ loading_gif } alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? 
          <input value = {name} onChange = {(e)=>{setName(e.target.value)}}
          type="text" placeholder='Your name' /> : <></>}
          <input type="email" value = {email} onChange = {(e)=>{setEmail(e.target.value)}} placeholder='Email only' />
          <input value = {password} onChange = {(e)=>{setPassword(e.target.value)}} type="password" placeholder=' password' />
          <button onClick={user_auth} type='submit'> {signState}</button>
          <div className="form-help">
            <div className='remember'>
              <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <p>Need HElp?</p>
            </div>

        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => (setSignState('Sign Up'))}>Sign Up Now</span> </p> :

            <p>Already have account? <span onClick={() => (setSignState('Sign In'))}>Sign In Now</span> </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login