import React from 'react'
import NewsItem from "./NewsItem"
import { useState ,useEffect} from 'react';
import Axios from "axios";
import Carousel from 'react-bootstrap/Carousel';


function News(props) {

    
// "https://jsonplaceholder.typicode.com/users"
// sunilband0007@gmail.com => 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b17a718eef2f40f78edd12ea18ea71e5'
//sunil.band.cs=>
//sunilband007=> "https://newsapi.org/v2/top-headlines?country=us&apiKey=293482aa54024114a7fba36d4be6cd33"



 

const [art,setArt]=useState([])
const [artTop,setArtTop]=useState([])
const [search,setSearch]=useState("")
const [source,setSource]=useState({everything:`https://newsapi.org/v2/everything?q=india&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`,top:`https://newsapi.org/v2/top-headlines?country=in&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`})
const [results,setResults]=useState({number:"8"})

useEffect(()=>{
    
    const getArticlesEverything= async()=>{
    const resEverything =await Axios.get(source.everything);
    setArt(resEverything.data.articles);
    console.log(resEverything);
}
getArticlesEverything();

},[source,props.flag,results])

useEffect(()=>{
    
    const getArticlesTop= async()=>{
    const resTop =await Axios.get(source.top);
    setArtTop(resTop.data.articles);
    console.log(resTop);
}
getArticlesTop();

},[source,props.flag,results])

const searchSetter=(e)=>{
    setSearch(e.target.value)
   
}

const fillSearch=(e)=>{
    setSource({everything:`https://newsapi.org/v2/everything?q=${search}&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`,top:`https://newsapi.org/v2/top-headlines?country=us&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`})
    document.getElementById('id').scrollIntoView();
    
    
}
const changeRes=(e)=>{

    setResults({number:e.target.value})
}

    return (
        

        
   <div className='container-fluid' style={{backgroundColor:props.mode==="dark"?"#06081a9e":"#f8f9fa00"}}>

        


            <div className='d-flex py-4'>
            
            <p className={`mx-2 my-2  h-50 align-self-center me-auto text-${props.mode==="dark"?"light":"dark"}`}>Showing: <strong>{results.number}</strong> results</p>

            <select className="form-select mx-2 my-2  flex-shrink-1 h-50 align-self-center text-center" aria-label="Default select example" onChange={changeRes} style={{width:"10%"}}>
  
 
            <option value="8">Select Results</option>
            <option value="12">12 Results</option>
            <option value="24">24 Results</option>
            <option value="36">36 Results</option>
            <option value="100">Max Results</option>
            </select>

            <input className="form-control mx-2 my-2 w-25 flex-shrink-1 h-50 align-self-center" type="search" placeholder="Search Topics" aria-label="Search" onChange={searchSetter} onKeyPress={(e) =>{if (e.key === "Enter") {fillSearch()}}} />
            <button className="btn btn-outline-success my-2 h-50 align-self-center" type="submit" onClick={fillSearch}  >Search</button>
            

            </div>
        <div className='d-flex justify-content-center'>
        <div className="container row d-flex justify-content-around my-3">

        <h2 className={`text-center me-auto text-${props.mode==="dark"?"light":"dark"}`}>Top Headlines</h2>




    <div className='p-3 rounded-4 '>
    <Carousel fade >

{artTop.filter((x)=>x.description!==null && x.title!==null && x.urlToImage!==null).map((element)=>{
    if(artTop.indexOf(element)<=6)
    {return <Carousel.Item style={{height:"50vh"} }>
    <img
      className="d-block w-100"
      src={element.urlToImage}
      alt="First slide"
    />
    <Carousel.Caption >
      <h3 className="text-light" style={{textShadow: "0 0 5px black,0 0 5px #12102000"}}>{element.title}</h3>
      <p className="text-light" style={{textShadow: "0 0 5px black,0 0 5px #12102000"}}>{element.description}</p>
    </Carousel.Caption>
  </Carousel.Item>}
  else{
    return null
  }
})}

</Carousel>
    </div>
    





       
            
          {art.filter((x)=>x.description!==null && x.title!==null && x.urlToImage!==null).map((element)=>{
            if(art.indexOf(element)<=results.number-1)
            {return <div className="col-md-3 col-l-3 col-sm-6 my-2" id="id">
            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} mode={props.mode}/>
            </div>}
            else{
                return null
            }    })}
            
            
            
           
            
        </div>   
        </div>
        </div>
            
  )
}

export default News