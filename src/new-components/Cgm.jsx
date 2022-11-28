import React from 'react'
import "./modeule1.css"


export default function Cgm() {
  return (
    <div>
            <div id="main-nav">
  <ul>
    <li  id="home">
      
    </li>
    <li id="loisirs" tabIndex={0}>
      
      <a  href="#" title="#" className="dropdown-1">
        Introduction
      </a>
      <ul class="dropdown-items">
        
      
            
                <li>       <h4> Topics Included: </h4>
</li>
                <li>      
                Types of computer graphics, Graphic Displays Random scan displays, Raster scan displays, Frame buffer and video controller, Points and lines, Line drawing algorithms, Circle generating algorithms.</li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
         
      </ul>
    </li>
    <br />
    <li id="seminaire" tabIndex={0}>
      <a href="#" title="#">
      Transformation
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Basic transformation, Matrix representations and homogenous coordinates, Composite transformations, Reflections and shearing. Windowing and Clipping Viewing pipeline, Viewing transformations, 2-D Clipping algorithms Line clipping algorithms such as Cohen Sutherland line clipping algorithm, Liang Barsky algorithm, Line clipping against non-rectangular clip windows, Polygon clipping-Sutherland Hodgeman polygon clipping, Weiler and Atherton polygon clipping, Curve clipping, Text clipping.                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
    <br />
    <li id="mariage" tabIndex={0}>
      <a href="#" title="#">
      Three Dimensional
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                3-D geometric primitives, 3-0 Object representation, 3-0 Transformation, 3-D viewing, projections, 3-D Clipping                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
               
    </ul>
      
    </li>
    <br />
    <li id="location" tabIndex={0}>
      <a href="#" title="#">
      Curves and Surface
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Quadric surfaces, Spheres, Blipsoid, Blobby objects, Introductory concepts of Spline, Espline and Bezier curves and surfaces. Back Face Detection algorithm. Depth buffer method, A- buffer method, Scan line method, basic illumination models- Ambient light, 08 Diffuse reflection, Specular reflection and Phong model.                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      
      </ul>
    </li>
    <br />
    <li id="contact" tabIndex={0}>
      <a href="contact.php" title="contact">
        Multimedia
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Overview, applications, multimedia hardware, multimedia authoring tools, audio format, digital video format, compression techniques JPG, MPEG, basic animation                <li><h4> Notes: </h4></li>
               </li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
  </ul>
</div>
    </div>
  )
}
