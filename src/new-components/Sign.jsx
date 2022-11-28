import React from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


export default function Sign() {

  const navi = useNavigate();

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const Reset = () => {
    emailRef.current.value = "";
    passRef.current.value = "";
  }

  const handleSignIn = async () => {
    console.log('inside sign in')
    let email = emailRef.current.value;
    let password = passRef.current.value;
    if (email === "" || password === "") {
      alert('please fill all fields');
    }
    else {
      try {
        let r = await fetch('http://localhost:9189/setUser', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })
        let r1 = await r.json();
        console.log('data: ', r1);
        if (!r1.issue) {
          let ls = localStorage.setItem("userSetting", JSON.stringify({ loginStatus: true }));
          navi('/home');
        } else {
          if (r1.response === 'duplicate') {
            Reset();
            alert('user already registered');
          }
          else {
            Reset();
            alert('some problem occur during sign in please try again later.');
          }
        }
      } catch (error) {
        Reset();
        alert('server error please try again later.');
      }
    }
  }

  return (
    <div className='formCont'>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input ref={emailRef} type="text" name="name" required />
            <label>Email id</label>
          </div>
          <div class="user-box">
            <input ref={passRef} type="password" name="pass" required />
            <label>Password</label>
          </div>
          <div onClick={() => handleSignIn()} style={{cursor:"pointer"}} className='buttonDesign' >
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
