import React from 'react'





export default function About(props) {
  return (
    <div className='container'>

<div className="accordion m-4 h-100" id="accordionExample" data-bs-theme={props.mode}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        About - News Birdie
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>Hello , thanks for checking out my app</strong> <pre></pre>
        News Birdie is a news fetch and display app that provides the user easy access to news topics all over the world.
        The technologies used are -
        <li>Framework- React</li>
        <li>Styling - <a href="https://getbootstrap.com/" style={{textDecoration: "none"}} target="_blank">Bootstrap</a></li>
        <li>API-  <a href="https://newsapi.org/docs" style={{textDecoration: "none"}} target="_blank">NewsApi</a></li>

        
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        About - Me
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Hey this is Sunil Band</strong><br />
        I am a B.Tech(Computer Engineering) student at G.H Raisoni College Of Engineering And Management,Pune
        I am a UX/UI designer and a passionate programmer.
        <br />
        I have keen interest in problem solving and web designing with a passion for exploring new learning opportuities.
        <br /> My technical skills include - 
        <li>HTML/CSS</li> 
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </div>
      

    </div>
  </div>
  
</div>

<div className='d-flex-row justify-content-center align-content-center text-center'>
    
    
    <div class="btn-group me-2 w-50" role="group" aria-label="First group">
            <a href="https://www.linkedin.com/in/sunil-band/" class="btn btn-outline-secondary" target="_blank">
        <i class="bi bi-linkedin"></i>
            </a>

            <a href="https://mail.google.com/mail/u/0/?fs=1&to=sunilbandwork@gmail.com&su=Hey%20i%20found%20%20your%20project&body=BODY&tf=cm" class="btn btn-outline-secondary" target="_blank">
            <i class="bi bi-envelope"></i>
            </a>
            
            <a href="https://wa.me/8390685016 " class="btn btn-outline-secondary" target="_blank">
            <i class="bi bi-whatsapp"></i>
        </a>

       
    
  
  </div>
  </div>




    </div>
  )
}