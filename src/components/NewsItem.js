import { useState } from "react";

function NewsItem(props) {
  let descTrim = undefined;
  let initialDesc = props.description;
  const desc = () => {
    if (initialDesc.length > 100) {
      descTrim = props.description.split(" ").slice(0, 30).join(" ") + "...";
    } else {
      descTrim = props.description;
    }
  };
  props.description && desc();



  const [bg,setBg]=useState({width: "18rem", height: "60vh"})
  
  const setBackgroundEnter=()=>{
    setBg({width: "18rem", height: "60vh",transform: "scale(1.07)",
    boxShadow: "0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)"})
  }
  const setBackgroundLeave=()=>{
    setBg({width: "18rem", height: "60vh"})
  }


  return (
    <div
      className={`card mx-2 my-2 px-1 py-1 h-100 border border-${
        props.mode === "dark" ? "1" : "3"
      }`}
      style={bg}
      onMouseEnter={setBackgroundEnter}
      onMouseLeave={setBackgroundLeave}

    

      data-bs-theme={props.mode === "light" ? "light" : "dark"}
    >
      <img src={props.imageurl} className="card-img-top" alt="..." />
      <div className="card-body ">
        
        <h5
          className={`card-title text-${
            props.mode === "dark" ? "light" : "dark"
          } `}
        >
          {props.title}
        </h5>

        <p
          className={`card-text text-${
            props.mode === "dark" ? "light" : "dark"
          } `}
          style={{ textOverflow: "ellipsis" }}
        >
          
          {descTrim}
        </p>
        
        
      </div>
      
      <a
        href={props.url}
        className="btn btn-sm btn-danger  py-1"
        target="_blank"
      >
        View Article
      </a>
    </div>
  );
}

export default NewsItem;
