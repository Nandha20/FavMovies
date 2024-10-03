import "./MoviesList.css";
import MoviesList from "./MoviesList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const SearchAPI = () => {
  const [input, setInput] = useState("thor");
  const BASE_URL = `http://www.omdbapi.com/?s=${input}&apikey=b7ca393f`;
  const { moviesList } = useFetch(BASE_URL,input);



  return (
    <div>
      <div className="moviesearch">
        <input
          type="text"
          placeholder="Enter Movie name"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)}}
        />
      </div>
      <MoviesList list={moviesList} />
    </div>
  );
};

export default SearchAPI;
