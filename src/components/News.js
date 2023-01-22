import React from 'react'
import NewsItem from "./NewsItem"
import { useState ,useEffect} from 'react';
import Axios from "axios";

function News(props) {

    
// "https://jsonplaceholder.typicode.com/users"
// sunilband0007@gmail.com => 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b17a718eef2f40f78edd12ea18ea71e5'
//sunil.band.cs=>
//sunilband007=> "https://newsapi.org/v2/top-headlines?country=us&apiKey=293482aa54024114a7fba36d4be6cd33"



 

const [art,setArt]=useState([])
const [search,setSearch]=useState("")
const [source,setSource]=useState(`https://newsapi.org/v2/everything?q=india&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`)

useEffect(()=>{
    
    const getArticles= async()=>{
    const res =await Axios.get(source);
    setArt(res.data.articles);
    console.log(res);
}
getArticles();

},[source,props.flag])

const searchSetter=(e)=>{
    setSearch(e.target.value)
}
const fillSearch=(e)=>{
    setSource(`https://newsapi.org/v2/everything?q=${search}&apiKey=f24acf7a501b4ccdafcb7677f925e7fa`)
}

    return (

        
   <div className='container-fluid' style={{backgroundColor:props.mode==="dark"?"#06081a9e":"#f8f9fa00"}}>

            <div className='d-flex'>
            
            <h2 className={`text-center my-1 py-4 me-auto text-${props.mode==="dark"?"light":"dark"}`}>Top Headlines</h2>
            <input class="form-control mx-2 my-2 w-25 flex-shrink-1 h-50 align-self-center" type="search" placeholder="" aria-label="Search" onChange={searchSetter}/>
            <button class="btn btn-outline-success my-2 h-50 align-self-center" type="submit" onClick={fillSearch}>Search</button>
            

            </div>
        <div className='d-flex justify-content-center'>
        <div className="container row d-flex justify-content-around my-3">

          {art.filter((x)=>x.description!==null && x.title!==null && x.urlToImage!==null).map((element)=>{
            if(art.indexOf(element)<=22)
            {return <div className="col-md-3 col-l-3 col-sm-6 my-2">
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