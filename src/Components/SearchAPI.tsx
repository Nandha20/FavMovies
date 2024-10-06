import "./MoviesList.css";
import MoviesList from "./MoviesList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const SearchAPI = () => {
  const [input, setInput] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  //const { moviesListvalues } = useFetch(BASE_URL,value);

  const fetchDetails = (input) => {
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=b7ca393f`)
      .then((response) => response.json())
      .then((json) => {
        const results = Object.values(json).filter((movie) =>{
            return (
                movie
            )
        })
        setMoviesList(results[0])
        console.log(results[0]);
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDetails(input);
    }, 2000);
    return () => clearTimeout(timer);
  }, [input]);

  function handleChange(value) {
      setInput(value);
  }

  

  return (
    <>
      <div className="search-container">
        <div className="moviesearch">
          <input
            type="text"
            placeholder="Enter Movie name"
            value={input}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
      </div>
      <MoviesList list={moviesList} />
    </>
  );
};

export default SearchAPI;
