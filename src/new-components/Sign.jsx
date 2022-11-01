import React from 'react'
import bg from "./gradient.webp"
import Home from "./Home.jsx"
import { Link, useNavigate } from "react-router-dom";
import "./login.css"


export default function Sign() {

  const navi = useNavigate();

  const handleSignIn = () => {
    let ls = localStorage.getItem("userSetting");
    console.log("data from local storage: ", ls);
    if (ls === null) {
      // localStorage.setItem("userSetting", "Akash gupta");
      // navi('/home')
    }
    else {

    }
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
          <div onClick={() => handleSignIn()} className='buttonDesign' >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
          </div>
        </form>
      </div>
    </div>
  )
}
