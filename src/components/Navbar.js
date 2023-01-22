

import logo from "../images/logo.png"
import { NavLink } from "react-router-dom"

import React from 'react'

function Navbar(props) {
  return (
    <div>
        

    <nav className={`rounded navbar navbar-expand-lg bg-body-${props.mode==="dark"?"dark":"light"} border-bottom h-25`}>
     <div className="container-fluid">
    <a className="navbar-brand" href="/"><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>News Birdie <img src={logo} height={64} alt="not available"/> </strong></a>



  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
    <li className="nav-item mx-2">
      <a  className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`}  onClick={props.flagHome}>Home</a>
    </li>

  
    <li className="nav-item mx-2">
      <a  className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`}  onClick={props.flagAbout}>About</a>
     
    </li>

    
    
  </ul>

  <div className="form-check form-switch">
  <input className="form-check-input"  onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlfor="flexSwitchCheckChecked">{props.mode==="dark"?"Turn Off Dark Mode":"Turn On Light Mode"}</label>
</div>
  
  


</div>
</nav>



  </div>
  )
}

export default Navbar

