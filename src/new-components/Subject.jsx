import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Subject.css"

export default function Subject() {
  const navi = useNavigate();
  const handleOS = async () => {
    
    navi('/Module1');
}
  return (
    <div style={{position:"fixed", marginLeft:"250px"}}>
      <>
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div id="pagewrap">
    <div  className="gallery">
      <article   className="image">
      <ul>
          <h1>Elements of Electrical Engineering</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - EE 19.101</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 4 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"60px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>

      <article style={{ backgroundColor:"papayawhip"}} className="image">
      <ul>
          <h1>Social and Professional Ethics </h1>
          <br />
          <br />
          <br />
          <br />
          
          <h4 style={{fontFamily:"cursive"}}>Course Code - UC 19.101</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits -2  </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"pink"}} className="image">
      <ul>
          <h1>Engineering Physics</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - PY 19.101</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 4 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"60px", width:"268px", marginLeft:"-11px", textAlign:"center", cursor:"pointer" }}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"lightblue"}} className="image">
      <ul>
          <h1>Environmental Studies</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CY 19.102   </h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 4 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"415px", marginLeft:"-10px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>
      <article style={{backgroundColor:"lavenderblush"}} className="image">
      <ul>
          <h1>Mathematics 1</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - MA 19.101</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 4 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"415px", marginLeft:"-10px", textAlign:"center", cursor:"pointer"}}>See Detailed Description
</button>
      </article>

      {/* <article className="image1">
        <ul>
        <h1>Design and Analysis of Algorithm</h1>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.301</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"60px", width:"268px", marginLeft:"-11px", textAlign:"center"}}>See Detailed Description
</button>
      </article>
      <article className="image2">
      <ul>
      <h1>Research Methodology</h1>
          <br />
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - RM 19.101</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits -3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>       
        <button onClick={() => handleOS()}  style={{marginTop:"70px", width:"268px", marginLeft:"-11px", textAlign:"center"}}>See Detailed Description
</button>
      </article>
      <article className="image3">
      <ul>
      <h1>Computer Graphics and Multimedia</h1>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.307</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"70px", width:"415px", marginLeft:"-10px", textAlign:"center"}}>See Detailed Description
</button>
      </article>
      <article className="image4">
      <ul>
      <h1>Logic in Computer Science</h1>
          <br />
         <br />
         <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3</h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <button onClick={() => handleOS()}  style={{marginTop:"50px", width:"415px", marginLeft:"-10px", textAlign:"center"}}>See Detailed Description
</button>
      </article> */}
      {/* <article className="image">
      <ul>
      <h1>Operating System</h1>
          <br />
          <br />
          <h4 style={{fontFamily:"cursive"}}>Course Code - CS 19.303</h4>
         <h4 style={{fontFamily:"cursive", marginRight:"110px"}}> Credits - 3 </h4>
             <h4 style={{fontFamily:"cursive", marginRight:"110px"}}>Modules - 5
          </h4>
        </ul>
        <div style={{marginTop:"50px", width:"268px", marginLeft:"-11px"}}>See Detailed Description
</div>
      </article> */}
    </div>
  </div>
</>

    </div>
  )
}
