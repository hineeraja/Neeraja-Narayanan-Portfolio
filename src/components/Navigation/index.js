import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


 //initialize the section state
 function Navigation(props) {
  const tabs = ['About', 'Projects','Skills', 'Contact'];

    return (
      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      // <div class="container-fluid">
      //       <h1 className='name nav-brand'>
      //           NEERAJA 
      //       </h1>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
             <div class="container-fluid">
                  <h1 class="name nav-brand google-colors">
                   NEERAJA NARAYANAN
            </h1>
    
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/skills">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
        </div>
        </nav>
    );
};

export default Navigation;