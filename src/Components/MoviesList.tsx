import  { useState } from "react";
import "./MoviesList.css";

const MoviesList = (props) => {
  const [favMovies, setFavMovies] = useState([]);

  // const selectFav = (value, imdbID) => {
  //   props.list.map((movie) => {
  //     if (movie.imdbID === value) {
  //       favMovieList.push(movie);
  //       setFavMovies(...favMovieList);
  //       setMovies(movies.filter((movie) => movie.imdbID == imdbID));
  //     }
  //   });
  // };

  function selectFav(newmovie:string) {
    setFavMovies((prevSelectedMovies) => {
      if (!prevSelectedMovies) {
        prevSelectedMovies = [];
      }
      if (
        prevSelectedMovies.some((fMovie) => fMovie.imdbID === newmovie.imdbID)
      )
        return prevSelectedMovies;
      return [newmovie, ...prevSelectedMovies];
    });
  }

  return (
    <div>
      <div className="container">
        <h2>Select your Fav</h2>
        {props.list.map((movie) => (
          <div className="moviesscroll">
            <a onClick={() => selectFav(movie)}>
              <img src={movie.Poster} alt="movie" key={movie.imdbID}></img>
            </a>
          </div>
        ))}
      </div>
      <div className="inline-container">
        {favMovies.length == 0 ? (
          <h1>No Movies</h1>
        ) : (
          favMovies.map((selectedFavMovies) => (
            <div className="favmovielist">
              <img
                src={selectedFavMovies.Poster}
                alt="movie"
                key={selectedFavMovies.imdbID}
              ></img>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MoviesList;
