import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   localStorage.setItem("Newitems", JSON.stringify(favMovies));
  // }, [favMovies]);

  // localStorage.setItem("Newitems", JSON.stringify(favMovies));

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("Newitems"));
  //   if (items) {
  //     setFavMovies(items);
  //   }
  // }, []);

  function handleSelect(newmovie) {
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

  function handleDelete(deleteFav){
    setFavMovies((prevSelectedMovies) => {
      if (!prevSelectedMovies) {
        prevSelectedMovies = [];
      }
      if (prevSelectedMovies)
      {
        const newFavMovies=prevSelectedMovies.filter((fMovie) => fMovie.imdbID != deleteFav.imdbID)
        return [...newFavMovies];
      }
      
      console.log(prevSelectedMovies)
    });
  }

  return (
    <div>
      <div className="container">
        <h2>Select your Fav</h2>
        {props.list.map((movie) => (
          <div className="moviesscroll">
            <a onClick={() => handleSelect(movie)}>
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
            <div className="favmovielist" onClick={()=>handleDelete(selectedFavMovies)} >
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
