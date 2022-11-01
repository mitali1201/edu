import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading";
import { Link } from "react-router-dom";

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container' id='All Semesters'>
          
              </div>
              <div class="grid">
        <div class="row">
        <h1>SEMESTERS</h1> 
          
        <div style={{marginLeft:"400px", marginTop:"25px"}} class="sem1">  <button><Link to={"Course"} class="btn btn-secondary"  >1st Sem</Link></button></div>
        <div style={{marginLeft:"500px", marginTop:"-95px"}} class="sem2">  <button> <Link to={"Course"}  class="btn btn-secondary">2nd Sem</Link></button></div>
        <div style={{marginLeft:"600px", marginTop:"-95px"}} class="sem3">   <button> <Link to={"Course"}  class="btn btn-secondary">3rd Sem</Link></button></div>
        <div style={{marginLeft:"700px", marginTop:"-95px"}} class="sem4">  <button> <Link to={"Course"}  class="btn btn-secondary">4th Sem</Link></button></div>
        <div style={{marginLeft:"400px", marginTop:"-20px"}} class="sem5">  <button> <Link to={"Course"} class="btn btn-secondary">5th Sem</Link></button></div>
        <div style={{marginLeft:"500px", marginTop:"-95px"}} class="sem6">  <button> <Link to={"Course"} class="btn btn-secondary">6th Sem</Link></button></div>
        <div style={{marginLeft:"600px", marginTop:"-95px"}} class="sem7">  <button>  <Link to={"Course"}  class="btn btn-secondary">7th Sem</Link></button></div>
        <div style={{marginLeft:"700px", marginTop:"-95px"}} class="sem8">  <button>  <Link to={"Course"}   class="btn btn-secondary">8th Sem</Link></button></div>
</div>
</div>          
      </section>
    </>
  )
}

export default OnlineCourses
