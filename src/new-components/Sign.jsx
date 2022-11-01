import React from 'react'
import bg from "./gradient.webp"
import Home from "./Home.jsx"
import { Link } from "react-router-dom";

export default function Sign() {
  
   
 
  return (
    <div>
        {/* <h1>Sign Up</h1> */}
        <div className='box'>
    <div style={{marginTop:"100px", marginLeft:"-230px"}}> 
        <label style={{margin:"40px", fontSize:"30px", height:"30px"}}>E-mail Id</label>
        <input style={{marginTop:"-7000px", height:"20px", width:"200px", marginLeft:"20px"}} type={"text"}></input>
    </div>
    <div style={{margin:"30px", marginTop:"50px",  marginLeft:"-245px"}}> 
        <label style={{margin:"40px", width:"60px", fontSize:"30px", height:"30px", marginTop:"-50px", marginLeft:"55px"}}>Password     </label>
        <input style={{marginTop:"-5000px", height:"20px", width:"200px", marginLeft:"10px"}} type={"Password"}></input>
    </div>
    <img style={{marginLeft:"-200px", marginTop:"40px"}} src={bg}  height="45px" width="395px" />
     <div style={{marginTop:"-38px", marginLeft:"-30px", fontSize:"20px" }}  ><Link to={"Home"}> Sign Up</Link></div>
   
 </div>
    </div>
   
  )
}
