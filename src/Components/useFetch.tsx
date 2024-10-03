import  { useState, useEffect } from "react";

const useFetch = (url,input) => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchDetails = async (input) => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setMoviesList(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //fetchDetails();
    if(input){
      fetchDetails(input)
    }
  }, [input]);

  return {
    moviesList,
  };
};

export default useFetch;
