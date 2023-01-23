import {React,useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'






function App() {

  const [mode,changeMode]=useState("dark")

  

  const toggleMode=()=>{
    if(mode==="light"){
      changeMode("dark") 
    }
    else{
      changeMode("light") 
    }
  }
  
  
  
 

  return (
    <Router>

    <div className={`bg-${mode}`} style={{height:"100%"}} >
    <Navbar mode={mode} toggle={toggleMode}/>
   
    
    
   
   <Routes>
    <Route path='/' element={<News mode={mode}/>}>
    </Route>
    <Route path='/about' element={<div><About mode={mode} style={{height:"100vh"}} /><div style={{height:"100vh",color:"white"}}><pre ></pre></div></div>}>
    </Route>

    </Routes> 
   
    
    
    
    
  </div>
  </Router>
  
  )
}

export default App
