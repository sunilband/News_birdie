import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Loader from "./Loader";

function News(props) {
  // keys
  // e5b95c449b6c41959b3aae975f0be834
  // b17a718eef2f40f78edd12ea18ea71e5
  // f24acf7a501b4ccdafcb7677f925e7fa
  // 293482aa54024114a7fba36d4be6cd33
  // 6ca394a356504188a8aea3a7cdb28ee5
 
  const [art, setArt] = useState([]);
  const [loading,setLoading]=useState(false)
  const [artTop, setArtTop] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [source, setSource] = useState({
    everything: `https://newsapi.org/v2/everything?q=india&apiKey=6ca394a356504188a8aea3a7cdb28ee5&page=${page}`,
    top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca394a356504188a8aea3a7cdb28ee5&page=1`,
  });
  const [results, setResults] = useState({ number: "12" });



  useEffect(() => {
   
    const getArticlesEverything = async () => {
      const resEverything = await Axios.get(source.everything);
      setArt(resEverything.data.articles);
      console.log(resEverything)
      setLoading(true)  
    };
    getArticlesEverything();
    setLoading(false)
    
  }, [source, props.flag, results, page]);

  useEffect(() => {
    
    const getArticlesTop = async () => {
      const resTop = await Axios.get(source.top);
      setArtTop(resTop.data.articles);
      
    };setLoading(true)
    getArticlesTop();
    setLoading(false)
    
    
  }, [source, props.flag, results, page]);

  const searchSetter = (e) => {
    setSearch(e.target.value);
  };

  const fillSearch = (e) => {
    if(search!=="")
    setSource({
      everything: `https://newsapi.org/v2/everything?q=${search}&apiKey=6ca394a356504188a8aea3a7cdb28ee5`,
      top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca394a356504188a8aea3a7cdb28ee5`,
    });
    setPage(1)
    document.getElementById("id").scrollIntoView(true);
    
  };

  const previous = () => {
    
    if (page !== 1) {
      setPage(page - 1);
      setSource({
        everything: `https://newsapi.org/v2/everything?q=${
          source.everything.slice(36, 41) !== "india" ? search : "india"
        }&apiKey=6ca394a356504188a8aea3a7cdb28ee5&page=${page - 1}`,
        top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca394a356504188a8aea3a7cdb28ee5`,
      });
    
    }
   
  };
  const next = () => {
   
    setSource({
      everything: `https://newsapi.org/v2/everything?q=${
        source.everything.slice(36, 41) !== "india" ? search : "india"
      }&apiKey=6ca394a356504188a8aea3a7cdb28ee5&page=${page + 1}`,
      top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ca394a356504188a8aea3a7cdb28ee5`,
    });
    setPage(page + 1);
    console.log(source)
    
   
  };

  const changeRes = (e) => {
    setResults({ number: e.target.value });

  };

  
  

  return (
    <div
      className="container-fluid" style={{paddingTop:"12vh"}}
    >
   
  { <div
    className={`py-2 my-3 border-${
      props.mode === "dark" ? "dark" : "secondary"
    } `}
  >
    <Carousel fade >
      {artTop
        .filter(
          (x) =>
            x.description !== null &&
            x.title !== null &&
            x.urlToImage !== null
        )
        .map((element) => {
          if (artTop.indexOf(element) <= 6) {
            return (
              <Carousel.Item style={{ height: "70vh"}}>
                <img
                  className="d-block w-100"
                  src={element.urlToImage}
                  alt="First slide"
                  style={{ height: "100%", objectFit: "cover"}}
                />
                <Carousel.Caption>
                  <h3
                    className="text-light"
                    style={{
                      textShadow: "0 0 5px black,0 0 5px #12102000",
                    }}
                  >
                    {element.title}
                  </h3>
                  <p
                    className="text-light"
                    style={{
                      textShadow: "0 0 5px black,0 0 5px #12102000",
                    }}
                  >
                    {element.description}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          } else {
            return null;
          }
        })}
    </Carousel>
  </div>}


      


      <div className="d-flex ">
        <p
          className={`mx-2 my-2  h-50 min-vw-25 align-self-center me-auto text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Showing: <strong>{results.number}</strong> results
        </p>

        <p
          className={`mx-2 my-2 min-vw-25 h-50 align-self-center text-center text-${
            props.mode === "dark" ? "light" : "dark"
          }  `}
        >
          Results:
        </p>
        <select
          className={`btn mx-2 my-2 h-50 align-self-center text-center rounded-4 border border-secondary btn-outline-danger text-light" aria-label="Default select example`}
          onChange={changeRes}
          style={{ width: "10%", appearance: "none" }}
        >
          <option>Select</option>
          <option value="12">12 Results</option>
          <option value="24">24 Results</option>
          <option value="36">36 Results</option>
          <option value="100">Max Results</option>
        </select>

        <input
          className="form-control mx-2 my-2 w-25 flex-shrink-1 align-self-center rounded-4 border border-secondary "
          type="search"
          placeholder="Search Topics"
          aria-label="Search"
          onChange={searchSetter}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              fillSearch();
            }
          }}
        />
        <button
          className="btn btn-outline-success my-2 h-50 align-self-center rounded-4"
          type="submit"
          onClick={fillSearch}
        >
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center" >
        <div className="container-fluid row d-flex justify-content-around my-3" >
          {source.everything.slice(36, 41) !== "india" && (
            <h1
              className={`text-${
                props.mode === "dark" ? "danger" : "dark"
              } text-center my-4 `}
            >
              Search Results
            </h1>
          )}

          {/* results cards */}

          {!loading && <Loader/>}

          {loading && art
            .filter(
              (x) =>
                x.description !== null &&
                x.title !== null &&
                x.urlToImage !== null
            )
            .map((element) => {
              if (art.indexOf(element) <= results.number - 1) {
                return (
                  <div className="col-md-2 row-md-3 col-sm-4 col-xs-6 my-2 d-flex justify-content-center" id="id" > 
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      url={element.url}
                      mode={props.mode}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}

          {/* previous and next buttons */}
          
            {loading && <div className="d-flex justify-content-center m-4 align-self-end py-3">
              <button
                type="button"
                className={`btn btn-${
                  props.mode === "dark" ? "outline-info" : "primary"
                } h-75 w-25`}
                onClick={page === 1 ? null : previous}
              >
                <strong>&laquo; Previous</strong>
              </button>
              <p
                className={`text-${
                  props.mode === "dark" ? "light" : "dark"
                } mx-4 my-2`}
              >
                {" "}
                Page: {page}{" "}
              </p>
              <button
                type="button"
                className={`btn btn-${
                  props.mode === "dark" ? "outline-info" : "primary"
                } h-75 w-25`}
                onClick={next}
              >
                {" "}
                <strong>Next &raquo;</strong>
              </button>
              </div>}
            
          
        </div>
      </div>
    </div>
  );
}

export default News;
