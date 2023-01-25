

import logo from "../images/logo.png"
import { Link } from "react-router-dom"


import React from 'react'

function Navbar(props) {
  return (
    <div>
        

    <nav className={`navbar navbar-expand-lg bg-${props.mode==="dark"?"dark":"dark"} border-dark border-bottom`} style={{height:"10vh"}}>
     <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong className={`text-${props.mode==="dark"?"light":"light"}`}>News Birdie <img src={logo} height={64} alt="not available"/> </strong></Link>



  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
    <li className="nav-item mx-2">
      <Link to="/"  className={`nav-link active text-${props.mode==="dark"?"light":"light"}`}  onClick={props.flagHome}>Home</Link>
    </li>

  
    <li className="nav-item mx-2">
      <Link to="/about" className={`nav-link active text-${props.mode==="dark"?"light":"light"}`}  onClick={props.flagAbout}>About</Link>
    </li>

    
    
  </ul>

  <div className="form-check form-switch">
  <input className="form-check-input"  onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className={`form-check-label text-${props.mode==="dark"?"light":"light"}`} htmlfor="flexSwitchCheckChecked">{props.mode==="dark"?"Dark Mode":"Light Mode"}</label>
</div>
  
  


</div>
</nav>



  </div>
  )
}

export default Navbar

