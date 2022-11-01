import React from 'react'
import {useState, useEffect} from 'react'
import Login from './Login.jsx'
import Sign from './Sign.jsx'
import "./login.css"



export default function Register() {
  const [form1, setform1] = useState(true)
  const handelLogin = ()=>{
    alert("hello")
 setform1(true)
  }
  const handelSignUpLayout = ()=>{
    alert("hi")
    setform1(false)
     }
  return (
    <div>
   
      <div className='mainContainer'>
      
      <div className='buttonContainer'>
       
<button onClick={()=>{console.log ("hey")}} style={{marginLeft:"550px", height:"40px", width:"200px",marginTop:"100px"}}>Login</button>

<div style={{marginTop:"-40px"}}><button onClick={()=> handelSignUpLayout()} style={{marginLeft:"750px", height:"40px", width:"200px",marginTop:"-0px"}}>Sign Up</button>
</div>

      </div>
      <div className='formContainer'>
        
       
          {
          form1 ? <div className='form1'> <Login></Login> </div> : <div className='form2'> <Sign></Sign> </div>
        }

        
      </div>
      </div>
    </div>
  )
}
