import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function News(props) {
  // keys
  // e5b95c449b6c41959b3aae975f0be834
  // b17a718eef2f40f78edd12ea18ea71e5
  // f24acf7a501b4ccdafcb7677f925e7fa
  // 293482aa54024114a7fba36d4be6cd33
 
  const [art, setArt] = useState([]);
  const [artTop, setArtTop] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [source, setSource] = useState({
    everything: `https://newsapi.org/v2/everything?q=india&apiKey=e5b95c449b6c41959b3aae975f0be834&page=${page}`,
    top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5b95c449b6c41959b3aae975f0be834&page=1`,
  });
  const [results, setResults] = useState({ number: "8" });

  useEffect(() => {
    const getArticlesEverything = async () => {
      const resEverything = await Axios.get(source.everything);
      setArt(resEverything.data.articles);
    };
    getArticlesEverything();
  }, [source, props.flag, results, page]);

  useEffect(() => {
    const getArticlesTop = async () => {
      const resTop = await Axios.get(source.top);
      setArtTop(resTop.data.articles);
    };
    getArticlesTop();
  }, [source, props.flag, results, page]);

  const searchSetter = (e) => {
    setSearch(e.target.value);
  };

  const fillSearch = (e) => {
    setSource({
      everything: `https://newsapi.org/v2/everything?q=${search}&apiKey=e5b95c449b6c41959b3aae975f0be834`,
      top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5b95c449b6c41959b3aae975f0be834`,
    });
    document.getElementById("id").scrollIntoView();
  };

  const previous = () => {
    if (page !== 1) {
      setPage(page - 1);
      setSource({
        everything: `https://newsapi.org/v2/everything?q=${
          source.everything.slice(36, 41) !== "india" ? search : "india"
        }&apiKey=e5b95c449b6c41959b3aae975f0be834&page=${page - 1}`,
        top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5b95c449b6c41959b3aae975f0be834`,
      });
    }
    console.log(page, source);

    console.log(page, source);
  };
  const next = () => {
    setSource({
      everything: `https://newsapi.org/v2/everything?q=${
        source.everything.slice(36, 41) !== "india" ? search : "india"
      }&apiKey=e5b95c449b6c41959b3aae975f0be834&page=${page + 1}`,
      top: `https://newsapi.org/v2/top-headlines?country=in&apiKey=e5b95c449b6c41959b3aae975f0be834`,
    });
    setPage(page + 1);
    console.log(page, source);
  };

  const changeRes = (e) => {
    setResults({ number: e.target.value });
  };

  return (
    <div
      className="container-fluid "
      style={{
        backgroundColor: props.mode === "dark" ? "#06081a9e" : "#f8f9fa00",
      }}
    >
      <h1
        className={`text-center me-auto text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        style={{ padding: "5vh 0 2vh 0" }}
      >
        {" "}
        <strong>Top Headlines</strong>{" "}
      </h1>

      {/* carosoul */}
      <div
        className={`p-3 my-3 rounded-4 border border-${
          props.mode === "dark" ? "dark" : "secondary"
        } `}
      >
        <Carousel fade>
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
                  <Carousel.Item style={{ height: "55vh" }}>
                    <img
                      className="d-block w-100"
                      src={element.urlToImage}
                      alt="First slide"
                      style={{ height: "100%", objectFit: "cover" }}
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
      </div>

      <div className="d-flex py-4">
        <p
          className={`mx-2 my-2  h-50 align-self-center me-auto text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Showing: <strong>{results.number}</strong> results
        </p>

        <p
          className={`mx-2 my-2  flex-shrink-1 h-50 align-self-center text-center text-${
            props.mode === "dark" ? "light" : "dark"
          }  `}
        >
          Results:
        </p>
        <select
          className={`btn mx-2 my-2  flex-shrink-1 h-50 align-self-center text-center rounded-4 border border-secondary btn-outline-danger text-light" aria-label="Default select example`}
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

      <div className="d-flex justify-content-center">
        <div className="container row d-flex justify-content-around my-3">
          {source.everything.slice(36, 41) !== "india" && (
            <h1
              id="id"
              className={`text-${
                props.mode === "dark" ? "danger" : "dark"
              } text-center my-4 `}
            >
              Search Results
            </h1>
          )}

          {/* results cards */}

          {art
            .filter(
              (x) =>
                x.description !== null &&
                x.title !== null &&
                x.urlToImage !== null
            )
            .map((element) => {
              if (art.indexOf(element) <= results.number - 1) {
                return (
                  <div className="col-md-3 col-l-3 col-sm-6 my-2" id="id">
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
          {source.everything.slice(36, 41) !== "india" && (
            <div className="d-flex justify-content-center m-4 align-self-end">
              <button
                type="button"
                class={`btn btn-${
                  props.mode === "dark" ? "outline-info" : "info"
                } h-75 w-25`}
                onClick={page === 1 ? null : previous}
              >
                <strong>&laquo; Previous</strong>
              </button>
              <h2
                className={`text-${
                  props.mode === "dark" ? "light" : "dark"
                } mx-4`}
              >
                {" "}
                Page: {page}{" "}
              </h2>
              <button
                type="button"
                class={`btn btn-${
                  props.mode === "dark" ? "outline-info" : "info"
                } h-75 w-25`}
                onClick={next}
              >
                {" "}
                <strong>Next &raquo;</strong>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
