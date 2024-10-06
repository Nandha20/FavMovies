import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchDetails = async (value) => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const results = data.filter((searchedMovie)=>{
        return searchedMovie && searchedMovie.Title  && searchedMovie.Title.toLowerCase().include(value)
      })
      setMoviesList(data.Search);
      console.log(results)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  },[]);

  return {
    moviesList,
  };
};

export default useFetch;
