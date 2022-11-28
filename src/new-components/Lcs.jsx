import React from 'react'
import "./modeule1.css"


export default function Lcs() {
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
                Role of logic in computer science, problem representation, review of the principle of mathematical induction, the principle of structural induction, review of Boolean algebra, language, models, interpretations, validity, proof, decision problems in logic, decidability.</li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
         
      </ul>
    </li>
    <br />
    <li id="seminaire" tabIndex={0}>
      <a href="#" title="#">
      Propositional Logic
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Syntax, semantics, propositional logic as a formal language, natural deduction, normal forms, propositional satisfiability, propositional resolution and tableaux method.                 </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
    <br />
    <li id="mariage" tabIndex={0}>
      <a href="#" title="#">
      Predicate Logic
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Predicate logic as a formal language, semantics of predicate logic, validity  and satisfiability, forward and backward chaining. Skolmization, normal forms, unification,Horn formulas and programs, resolution. </li>            
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
               
    </ul>
      
    </li>
    <br />
    <li id="location" tabIndex={0}>
      <a href="#" title="#">
    Binary Decision Diagram 
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Representing Boolean functions, algorithms for reduced binary decision diagram (OBDD), reduce, apply, restrict, exists, symbolic model checking.               </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      
      </ul>
    </li>
    <br />
    <li id="contact" tabIndex={0}>
      <a href="contact.php" title="contact">
      Fuzzy Logic
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Crisp sets and fuzzy sets, fuzzy membership, operations on fuzzy sets, fuzzy arithmetic, Cartesian product, furry relations, fuzzy propositions, fuzzification and defuzzyfication, engineering applications of fuzzy logic.
                </li>                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
  </ul>
</div>
    </div>
  )
}
