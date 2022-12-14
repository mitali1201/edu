import React from 'react'
import { useState, useEffect } from 'react'
import Login from './Login.jsx'
import Sign from './Sign.jsx'
import logo from "./LOGO.png"


export default function Register() {
  const [form1, setform1] = useState(true)
  const handelLogin = () => {
    setform1(true)
  }
  const handelSignUpLayout = () => {
    setform1(false)
  }
  return (
    
 
  
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position:"fixed", marginLeft:"550px" }} >
           

        <div style={{ textAlign: "center", padding: "10px"  }} >
          <button onClick={() => handelLogin()} style={{ border: "0", padding: "5px", fontSize: "20px", backgroundColor: "lightblue", borderRadius: "3px", margin: "0px 5px", cursor: "pointer" }}>Login</button>
          <button onClick={() => handelSignUpLayout()} style={{ border: "0", padding: "5px", fontSize: "20px", backgroundColor: "lightblue", borderRadius: "3px", margin: "0px 5px", cursor: "pointer" }}>Sign Up</button>
        </div>
        <div style={{backgroundColor:"lavender"}} className='formContainer'>
          {form1 ? <div className='form1'> <Login></Login> </div> : <div className='form2'> <Sign></Sign> </div>}
        </div>
      </div>
   
  )
}
