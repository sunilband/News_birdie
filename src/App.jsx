import {React,useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import About from './components/About'





function App() {

  const [mode,changeMode]=useState("light")

  const[flag,changeFlag]=useState(true)
  console.log(flag,"check")
  

  const toggleMode=()=>{
    if(mode==="light"){
      changeMode("dark") 
    }
    else{
      changeMode("light") 
    }
  }
  
  const flagAbout=()=>{
    changeFlag(false)
  }
  const flagHome=()=>{
    changeFlag(true)
  }
  
 

  return (
    

    <div className={`bg-${mode}`} style={{height:"100%"}} >
    <Navbar mode={mode} toggle={toggleMode} flagAbout={flagAbout} flagHome={flagHome}/>
    
   {flag && <News mode={mode}/>} 
   {!flag &&<About mode={mode} style={{height:"100vh"}}/>}
    
    {/* <Routes>
      <Route path="/" element={<News mode={mode}/>}>
      </Route>
      <Route path="/about" element={<About mode={mode}/>}>
      </Route>
    </Routes> */}
    
    
    
    {!flag && <div style={{height:"100vh",color:"white"}}><pre ></pre></div>}
  </div>

  
  )
}

export default App
