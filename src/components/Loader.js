import React from 'react'
import load from "../images/loading.gif"

function Loader() {
  return (<div className='text-center'>
<img src={load} alt="loader" style={{height:"40vh"}}/>
  </div>
    
  )
}

export default Loader