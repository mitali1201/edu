import React from 'react'
import "./login.css"
import bg from "./gradient.webp"
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navi = useNavigate();

  const handleLogIn = () => {
    navi('/home')
  }

  return (
    <div className='formCont'>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="name" required />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="pass" required />
            <label>Password</label>
          </div>
          <div onClick={() => handleLogIn()} className='buttonDesign'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log in
          </div>
        </form>
      </div>
    </div>
  )
}
