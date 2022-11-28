import React from 'react'
import "./modeule1.css"


export default function Rm() {
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
                Introduction to OS:  Definition, types of operating systems: mainframe, server, multiprocessor, personal computer, real-time, embedded and smart card, system calls and utilities, batch,multiprogramming and multitasking operating system.
</li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
         
      </ul>
    </li>
    <br />
    <li id="seminaire" tabIndex={0}>
      <a href="#" title="#">
Problem Formulation      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                File concept, user and system programmer view of file systems, different modules of a file system, disk structure, disk-space allocation methods: contiguous, linked, indexed directory structures, file protection, disk scheduling algorithms.
                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
    <br />
    <li id="mariage" tabIndex={0}>
      <a href="#" title="#">
Research Design      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Process concepts, threads, scheduling concepts, types of schedulers, scheduling algorithms, process state diagram, comparison of various CPU ,scheduling algorithms, multi-level queue scheduling.                </li> 
                
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
               
    </ul>
      
    </li>
    <br />
    <li id="location" tabIndex={0}>
      <a href="#" title="#">
Data Analysis and Simulation Tool      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Logical and physical address spaces, base, limit and relocation registers, address binding, dynamic loading and linking, partitioning, swapping, contiguous memory allocation, non-contiguous memory allocation: segmentation, paging and segmentation.                
                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      
      </ul>
    </li>
    <br />
    <li id="contact" tabIndex={0}>
      <a href="contact.php" title="contact">
        Report Writing
      </a>
      <ul class="dropdown-items">
      <li>       
         <h4> Topics Included: </h4>
      </li>
                <li>   
                Independent and concurrent processes, shared memory approach and message passing approach, mutual exclusion, synchronization, inter process communication, critical section problem and its solution to semaphores: binary and counting semaphores, wait/signal operations and their implementation, classical problems of synchronization, deadlock.                </li>
                <li><h4> Notes: </h4></li>
                <li>playlist:  </li>
               <li></li>
      </ul>
    </li>
  </ul>
</div>
    </div>
  )
}
