import React from 'react'
import "./modeule1.css"

export default function Daa() {
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
                Fundamentals of algorithms and problem solving, asymptotic notations, time complexity and analysis of algorithms, solutions of recurrence relations, master theorem and summations techniques.</li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
         
      </ul>
    </li>
    <br />
    <li id="seminaire" tabIndex={0}>
      <a href="#" title="#">
      Analysis of Sorting and Searching algorithm
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Linear, binary and interpolation search, insertion, selection, merge, quick and heap sort, stability and other issues, hashing.
                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
    <br />
    <li id="mariage" tabIndex={0}>
      <a href="#" title="#">
     Algorithm Design Approaches
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Greedy method (knapsack problem, job sequencing problem), dynamic programming (assembly line scheduling, matrix chain multiplication),backtracking (8 queens problem, sum of subsets), branch and bound (0/1 knapsack problem), divide and conquer algorithms (Strassen matrix multiplication), problems based on these design paradigms.                
</li>
<li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
               
    </ul>
      
    </li>
    <br />
    <li id="location" tabIndex={0}>
      <a href="#" title="#">
     Tree and Graphs Algorithms
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Spanning trees, Prim and Kruskal's algorithm, Huffman coding, BFS and DFS, disjoint set operations, connected components, shortest path algorithms in a graph such as Dijkstra, Bellman Ford, Warshall's etc                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      
      </ul>
    </li>
    <br />
    <li id="contact" tabIndex={0}>
      <a href="contact.php" title="contact">
       Complexity Classes
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                PNP,NP hard and NP complete problems, reducibility, decision and optimization problems, examples of NP complete problems such as 3 CNF, clique, vertex cover and traveling salesman problem, basic introduction of approximation algorithms.                <li><h4> Notes: </h4></li>
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
