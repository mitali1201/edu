import React from "react"
import logo from "./LOGO.png"
import image from "./bg2.jpg"

const Head = () => {
  return (
    
        <div className='container flexSB'>
          {/* <div className='logo'> */}
            {/* <h1>Educatify</h1>
            <span>ONLINE EDUCATION & LEARNING</span> */}
          {/* </div>

          <div className='social'> */}
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i> */}
            <img style={{transperancy:"low"}} src={image} height="700px" width="1470px" />
           <div style={{margin:"20px", marginTop:"-730px", marginLeft:"1350px"}} class="image"><img  src={logo} height= "120px"width ></img>
{/* </div>  */}
          </div>
        </div>
      
  )
}

export default Head
