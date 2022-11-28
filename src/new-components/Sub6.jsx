import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Subject.css"

export default function Subject() {
  const navi = useNavigate();
  const handleOS = async () => {
    
    navi('/Module');
}
  return (
    <div style={{position:"fixed", marginLeft:"250px"}}>
      <>
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div id="pagewrap">
    <div  className="gallery">
      <article   className="image">
      <ul>
          <h1>Operating System</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"60px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>

      <article style={{ backgroundColor:"papayawhip"}} className="image">
      <ul>
          <h1>Design and analysis of Algorithm</h1>
          <br />
          <br />
          <br />
          <br />
          
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"pink"}} className="image">
      <ul>
          <h1>Research Methodology</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"60px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer" }}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"lightblue"}} className="image">
      <ul>
          <h1>Computer Graphics and Multimedia</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"415px", marginLeft:"-10px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"lavenderblush"}} className="image">
      <ul>
          <h1>Logic in Computer Science</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"415px", marginLeft:"-10px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>

     
    </div>
  </div>
</>

    </div>
  )
}
