import React, { useEffect, useState } from "react";
import "./MoviesList.css";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  const favMovieList = [];
  const separateList = [];

  props.list.map((movie, Key) => {
    separateList.push(movie);
  });

  useEffect(() => {
    setMovies(...[separateList]);
  }, []);

  const selectFav = (value, imdbID) => {
    props.list.map((movie) => {
      if (movie.imdbID === value) {
        favMovieList.push(movie);
        setFavMovies(...favMovieList);
        setMovies(movies.filter((movie) => movie.imdbID == imdbID));
      }
    });
  };

  return (
    <div>
      <div className="container">
        <h2>Select your Fav</h2>
        {props.list.map((movie) => (
          <div className="moviesscroll">
            <a onClick={() => selectFav(movie.imdbID)}>
              <img src={movie.Poster} alt="movie" key={movie.imdbID}></img>
            </a>
          </div>
        ))}
      </div>
      <div>
        <div className="favmovielist">
          <img src={favMovies.Poster} alt="movie" key={favMovies.imdbID}></img>
          sdfsdfsdf
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
